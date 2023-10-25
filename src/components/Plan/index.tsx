import { motion } from 'framer-motion';
export const Plan = ({
  icon,
  title,
  value,
  selected,
  updateData,
  price,
  monthly,
}: {
  icon: any;
  updateData: any;
  selected: boolean;
  value: string;
  title: string;
  price: number;
  monthly: boolean;
}) => {
  return (
    <>
      <motion.label
        initial={{
          borderColor: '#D6D9E6',
          backgroundColor: '#fff',
        }}
        animate={{
          borderColor: selected ? '#483EFF' : '#D6D9E6',
          backgroundColor: selected ? '#F8F9FF' : '#fff',
        }}
        whileHover={{ backgroundColor: '#F8F9FF' }}
        className='rounded-lg border py-[14px] md:py-5 px-4 flex items-center md:items-start md:flex-col cursor-pointer '
        htmlFor={value}
      >
        {icon}
        <div className='flex flex-col gap-y-2 ml-3 md:ml-0 md:mt-8'>
          <h3 className='font-medium text-[#022959]'>{title}</h3>
          <motion.span
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            animate={{ opacity: 1 }}
            key={price}
            className='text-sm text-[#9699AA]'
          >
            ${price} /{monthly ? 'mo' : 'yr'}
          </motion.span>
        </div>
      </motion.label>
      <input
        id={value}
        className='hidden'
        type='radio'
        name='plan'
        value={value}
        checked={selected}
        onChange={updateData}
      />
    </>
  );
};
