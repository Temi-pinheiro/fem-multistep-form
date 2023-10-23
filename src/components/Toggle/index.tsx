import { useState } from 'react';
import { motion } from 'framer-motion';

import './styles.css';

interface ToggleProps {
  isOn: boolean;
  effect: () => void;
}

export const Toggle = ({ isOn, effect }: ToggleProps) => {
  // const [disabled, setDisabled]
  const [yes, setYes] = useState(() => isOn);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  const handleToggle = async () => {
    setYes((prev) => !prev);
    effect();
  };

  return (
    <div>
      <motion.button
        className='toggle-container'
        type='button'
        data-isOn={yes}
        onClick={handleToggle}
      >
        <motion.div
          className='toggle-switch'
          animate={{ x: yes ? 16 : 0 }}
          transition={spring}
        />
      </motion.button>
      {/* //Add loader */}
    </div>
  );
};
