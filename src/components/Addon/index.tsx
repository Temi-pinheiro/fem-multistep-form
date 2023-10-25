import { motion } from 'framer-motion';
export const Addon = ({
  title,
  desc,
  name,
  selected,
  updateData,
  price,
  monthly,
}: {
  updateData: any;
  desc: string;
  selected: boolean;
  name: string;
  title: string;
  price: number;
  monthly: boolean;
}) => {
  return (
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
      className='flex items-center border rounded-lg py-[18px] px-6 cursor-pointer'
      htmlFor={name}
    >
      <input
        type='checkbox'
        className='w-5 h-5 accent-[#483EFF]'
        name={name}
        id={name}
        checked={selected}
        onChange={(e) =>
          updateData({
            target: { name: e.target.name, value: !selected },
          })
        }
      />
      <div className='ml-6 flex flex-col gap-y-2'>
        <h3 className='font-medium text-[#022959]'>{title}</h3>
        <span className='text-sm text-[#9699AA]'>{desc}</span>
      </div>
      <span className='ml-auto text-sm text-[#483EFF] leading-tight'>
        {' '}
        +${price}/{monthly ? 'mo' : 'yr'}
      </span>
    </motion.label>
  );
};
