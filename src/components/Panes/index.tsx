import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

interface PanesProps {
  panes: {
    id: string;
    title: string;
    desc: string;
  }[];
  active: string;
  handleChange: Dispatch<SetStateAction<number>>;
}

export const Panes = ({ panes, active }: PanesProps) => {
  //todo make sure that the setactive prop is passed down as a prop

  return (
    <ul className='flex items-center justify-center md:justify-normal  md:flex-col gap-x-8 gap-y-8 relative w-full md:items-start'>
      {panes.map((pane) => (
        <li className='md:w-full relative z-10 ' key={pane.id}>
          <motion.span
            // onClick={() => handleChange(Number(pane.id))}
            key={pane.desc}
            className='flex items-center gap-x-4 md:w-full'
          >
            <motion.span
              animate={{
                borderColor: pane.id == active ? '#BEE2FD' : '#fff',
              }}
              transition={{ delay: 0.1 }}
              className={`shrink-0 font-bold w-[33px] overflow-y-clip  relative h-[33px] border grid place-items-center rounded-full text-sm duration-300 transition ease-in-out`}
            >
              <span className='relative  text-white z-10 mix-blend-difference'>
                {Number(pane.id) + 1}
              </span>
              <AnimatePresence>
                {' '}
                {pane.id == active && (
                  <motion.span
                    layoutId='behind'
                    // transition={{ duration: 1.2 }}
                    className='w-[33px] h-[33px] shrink-0 bg-[#BEE2FD] absolute border border-[#BEE2FD] rounded-full'
                  ></motion.span>
                )}
              </AnimatePresence>
            </motion.span>
            <div className='hidden md:flex flex-col items-start gap-y-1 w-full'>
              <h4 className='text-xs text-[#ABBCFF]'>{pane.title}</h4>
              <p className='text-sm font-bold text-white tracking-wide truncate'>
                {pane.desc}
              </p>
            </div>
            {/* <span
                className={`pane-label ${
                  active == pane.id && 'pane-label--active'
                }`}
              >
                {pane.title}
              </span> */}
            {/* 
            
            {active == pane.id && (
              <motion.div
                className='pane-underline'
                layoutId='user-pane-underline'
              ></motion.div>
            )} */}
          </motion.span>
        </li>
      ))}
    </ul>
  );
};
