import { Header, Toggle } from '../components';
import { motion } from 'framer-motion';

export const Step2 = ({ data, update }: { data: any; update: any }) => {
  return (
    <div className='flex flex-col'>
      <Header
        title='Select your plan'
        details='You have the option of monthly or yearly billing.'
      />
      <div className='flex items-center justify-center gap-x-6 py-[14px] bg-[#F8F9FF] md:mt-8'>
        <motion.button
          type='button'
          onClick={() => update({ target: { name: 'monthly', value: true } })}
          animate={{ color: data.monthly ? '#022959' : '#9699AA' }}
          className='text-sm font-bold'
        >
          Monthly
        </motion.button>
        <Toggle
          isOn={!data.monthly}
          effect={() =>
            update({ target: { name: 'monthly', value: !data.monthly } })
          }
        />
        <motion.button
          type='button'
          onClick={() => update({ target: { name: 'monthly', value: false } })}
          animate={{ color: !data.monthly ? '#022959' : '#9699AA' }}
          className='text-sm font-bold'
        >
          Yearly
        </motion.button>
      </div>
    </div>
  );
};
