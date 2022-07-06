import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useMemo, useRef } from "react";
import LoremIpsum from "react-lorem-ipsum";
import { items } from "../../src/components/data";

const fast = { type: "spring", stiffness: 2000, damping: 120 };

export default function ImageCard() {
  const router = useRouter();
  const item = useMemo(() => {
    return items.filter((item) => item.id === router.query.id)[0];
  }, [router.query.id]);

  return item ? (
    <motion.div className='max-w-screen-sm flex justify-center items-center'>
      <motion.div>
        <motion.div style={{ zIndex: -99 }} transition={{ type: "spring", velocity: 0, stiffness: 300, damping: 35, mass: 1 }} layout layoutId={`image-${item.id}`} className='relative'>
          <motion.div style={{ aspectRatio: 1.5, width: "100%", height: "480px" }} className='relative h-full w-full'>
            <motion.img className='object-cover h-full w-full' src={`/${item.id}.jpg`}></motion.img>
            <motion.div className='absolute top-0 h-full w-full bg-black/30'></motion.div>
          </motion.div>
          <motion.h2 className='absolute top-2 left-2 right-5 text-white font-bold text-xl'>{item.title}</motion.h2>
        </motion.div>
        <motion.div
          layout
          transition={{ type: "spring", velocity: 0, stiffness: 120, damping: 20, mass: 1 }}
          style={{ marginTop: -20, borderTopLeftRadius: 20, borderTopRightRadius: 20, zIndex: 99 }}
          initial={{ translateY: 35 }}
          animate={{ translateY: 0 }}
          className='pt-4 px-4 pb-10 bg-gray-700'
        >
          <LoremIpsum p={14} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
        </motion.div>
      </motion.div>
    </motion.div>
  ) : null;
}
