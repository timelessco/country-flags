/* eslint-disable @next/next/no-img-element */
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { useState } from "react";
import LoremIpsum from "react-lorem-ipsum";

export const Card = (props) => {
  const { data } = props;
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div>
      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Trigger>
          <motion.div layout animate={{ width: dialogOpen ? "720px" : "1440px", height: dialogOpen ? "480px" : "1200px" }}>
            <img className='object-cover shadow-lg rounded-lg' src={`/${data.id}.jpg`} width='720px' height={"480px"} alt='' />
            <div className='absolute top-2 left-2 space-y-2'>
              <div className='text-lg leading-6 font-medium space-y-1'>
                <h3 className='text-white font-bold text-lg'>{data.title}</h3>
              </div>
            </div>
          </motion.div>
        </Dialog.Trigger>
        <Dialog.Portal forceMount={true}>
          <Dialog.Overlay className='inset-0 fixed' />
          <Dialog.Content>
            <motion.div layout className='relative m-2'>
              <img className='object-cover shadow-lg rounded-lg' src={`/${data.id}.jpg`} width='1440px' height='1200px' alt='' />
              <div className='absolute top-2 left-2 space-y-2'>
                <div className='text-lg leading-6 font-medium space-y-1'>
                  <h3 className='text-white font-bold text-lg'>{data.title}</h3>
                </div>
              </div>
              <motion.div animate={{ opacity: dialogOpen ? 1 : 0 }}>
                <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
              </motion.div>
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
