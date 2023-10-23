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

export const Panes = ({ panes, active, handleChange }: PanesProps) => {
  //todo make sure that the setactive prop is passed down as a prop

  return (
    <ul className='flex flex-col gap-y-8 relative w-full items-start'>
      {panes.map((pane) => (
        <li className='w-full relative z-10 ' key={pane.id}>
          <motion.button
            onClick={() => handleChange(Number(pane.id))}
            key={pane.desc}
            className='flex items-center gap-x-4 w-full'
          >
            <motion.span
              animate={{
                borderColor: pane.id == active ? 'transparent' : 'white',
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
            <div className='flex flex-col items-start gap-y-1 w-full'>
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
          </motion.button>
        </li>
      ))}
    </ul>
  );
};