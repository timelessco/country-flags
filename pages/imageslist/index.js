import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { items } from "../../src/components/data";

export default function ImagesList() {
  return (
    <motion.div className='flex flex-row justify-center flex-wrap'>
      {items.map((item, index) => {
        return <ImageCard key={item.id} item={item} />;
      })}
    </motion.div>
  );
}

const AImageCard = (props) => {
  const { item } = props;
  return (
    <Link href={`imageslist/${item.id}`} as={`imageslist/${item.id}`} passHref>
      <motion.div className='relative rounded-xl m-3'>
        <motion.div transition={{ type: "spring", velocity: 0, stiffness: 300, damping: 35, mass: 1 }} layout layoutId={`image-${item.id}`} className='relative rounded-xl'>
          <motion.div style={{ width: "320px", height: "480px" }} className='relative h-full w-full'>
            <motion.img className='object-cover rounded-xl h-full w-full' src={`/${item.id}.jpg`}></motion.img>
            <motion.div className='absolute top-0 rounded-xl h-full w-full bg-black/30'></motion.div>
          </motion.div>
          <motion.h2 className='absolute top-2 left-2 right-2 text-white font-bold text-xl'>{item.title}</motion.h2>
        </motion.div>
      </motion.div>
    </Link>
  );
};

const ImageCard = memo(AImageCard);
