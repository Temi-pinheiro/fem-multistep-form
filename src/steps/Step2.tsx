import { Header, Plan, Toggle } from '../components';
import { motion } from 'framer-motion';
import priceData from '../data/prices.json';

export const Step2 = ({
  data,
  update,
}: {
  data: any & { period: string };
  update: any;
}) => {
  const { prices } = priceData;
  return (
    <div className='flex flex-col'>
      <Header
        title='Select your plan'
        details='You have the option of monthly or yearly billing.'
      />
      <div className='flex md:grid grid-cols-3 gap-x-[18px] md:mt-9'>
        <Plan
          key='arcade'
          updateData={update}
          selected={data.plan == 'arcade'}
          icon={<ArcadeIcon />}
          title='Arcade'
          value='arcade'
          monthly={data.monthly}
          price={prices[data.monthly ? 'monthly' : 'yearly'].arcade.price}
        />
        <Plan
          key='advanced'
          updateData={update}
          selected={data.plan == 'advanced'}
          icon={<AdvancedIcon />}
          title='Advanced'
          value='advanced'
          monthly={data.monthly}
          price={prices[data.monthly ? 'monthly' : 'yearly'].advanced.price}
        />
        <Plan
          key='pro'
          updateData={update}
          selected={data.plan == 'pro'}
          icon={<ProIcon />}
          title='Pro'
          value='pro'
          monthly={data.monthly}
          price={prices[data.monthly ? 'monthly' : 'yearly'].pro.price}
        />
      </div>
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

const ArcadeIcon = () => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='20' cy='20' r='20' fill='#FFAF7E' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22.953 12.4916C23.2 13.9311 22.374 15.3391 20.9971 15.826V18.0051H18.9979V15.826C17.6209 15.3391 16.795 13.9311 17.0419 12.4916C17.2889 11.0522 18.537 10 19.9975 10C21.458 10 22.7061 11.0522 22.953 12.4916ZM18.9979 18.0051V24.0025H20.9971V18.0051H24.9954C25.5474 18.0051 25.9949 18.4526 25.9949 19.0046V29.0004C25.9949 29.5525 25.5474 30 24.9954 30H14.9996C14.4475 30 14 29.5525 14 29.0004V19.0046C14 18.4526 14.4475 18.0051 14.9996 18.0051H18.9979ZM18.9979 27.0013H16.9987V25.0021H18.9979V27.0013Z'
      fill='white'
    />
  </svg>
);

const AdvancedIcon = () => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='20' cy='20' r='20' fill='#F9818E' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.9437 15H25.0567C27.7897 15 30 17.0294 30 19.8847C30 22.7419 27.7897 24.8214 25.0566 24.8214H14.9437C12.2117 24.8214 10 22.7419 10 19.8847C10 17.0294 12.2117 15 14.9437 15ZM17.2662 20.625C17.3919 20.625 17.5 20.5087 17.5 20.3883H17.5V19.3997C17.5 19.2792 17.3942 19.1964 17.2689 19.1964H15.7143V17.6445C15.7143 17.5187 15.598 17.4107 15.4776 17.4107H14.489C14.3685 17.4107 14.2857 17.5166 14.2857 17.6418V19.1964H12.7024C12.5856 19.1964 12.5 19.2921 12.5 19.4094V20.3659C12.5 20.4864 12.5907 20.625 12.717 20.625H14.2857V22.2083C14.2857 22.3251 14.3813 22.4107 14.4987 22.4107H15.4552C15.5757 22.4107 15.7143 22.32 15.7143 22.1937V20.625H17.2662ZM22.8467 20.7806C22.3674 20.7806 21.9783 20.3973 21.9783 19.9256C21.9783 19.4539 22.3674 19.0699 22.8467 19.0699C23.3281 19.0699 23.7171 19.4539 23.7171 19.9256C23.7171 20.3973 23.3281 20.7806 22.8467 20.7806ZM23.8778 21.7954C23.8778 22.2666 24.2669 22.6474 24.7462 22.6474C25.2276 22.6474 25.6166 22.2666 25.6166 21.7954C25.6166 21.3205 25.2275 20.9404 24.7462 20.9404C24.2669 20.9404 23.8778 21.3204 23.8778 21.7954ZM24.7462 18.9114C24.2669 18.9114 23.8778 18.5284 23.8778 18.0567C23.8778 17.5849 24.2669 17.2009 24.7462 17.2009C25.2275 17.2009 25.6166 17.5849 25.6166 18.0567C25.6166 18.5284 25.2276 18.9114 24.7462 18.9114ZM25.7777 19.9256C25.7777 20.3973 26.1667 20.7806 26.6456 20.7806C27.125 20.7806 27.514 20.3973 27.514 19.9256C27.514 19.4539 27.125 19.0699 26.6456 19.0699C26.1667 19.0699 25.7777 19.4539 25.7777 19.9256Z'
      fill='white'
    />
  </svg>
);

const ProIcon = () => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='20' cy='20' r='20' fill='#483EFF' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.3336 13H26.6664C28.5073 13 29.9996 14.4923 29.9996 16.3332V23.5263C30.0204 24.9435 29.1714 26.229 27.8597 26.7662C26.6224 27.2684 25.2033 26.9495 24.2998 25.9662L21.4799 22.9996H18.5201L15.7002 25.9662C14.7957 26.9478 13.3778 27.2664 12.1403 26.7662C10.8286 26.229 9.97962 24.9435 10.0004 23.5263V16.3332C10.0004 14.4923 11.4927 13 13.3336 13ZM16.0001 18.9998H17.3334C17.7016 18.9998 18.0001 18.7013 18.0001 18.3331C18.0001 17.965 17.7016 17.6665 17.3334 17.6665H16.0001V16.3332C16.0001 15.965 15.7017 15.6666 15.3335 15.6666C14.9653 15.6666 14.6669 15.965 14.6669 16.3332V17.6665H13.3336C12.9654 17.6665 12.6669 17.965 12.6669 18.3331C12.6669 18.7013 12.9654 18.9998 13.3336 18.9998H14.6669V20.3331C14.6669 20.7012 14.9653 20.9997 15.3335 20.9997C15.7017 20.9997 16.0001 20.7012 16.0001 20.3331V18.9998ZM24.6665 20.9997C23.1938 20.9997 21.9999 19.8058 21.9999 18.3331C21.9999 16.8604 23.1938 15.6666 24.6665 15.6666C26.1392 15.6666 27.3331 16.8604 27.3331 18.3331C27.3331 19.0404 27.0521 19.7186 26.552 20.2187C26.052 20.7188 25.3737 20.9997 24.6665 20.9997ZM24.6665 19.6664C25.4028 19.6664 25.9998 19.0695 25.9998 18.3331C25.9998 17.5968 25.4028 16.9999 24.6665 16.9999C23.9301 16.9999 23.3332 17.5968 23.3332 18.3331C23.3332 19.0695 23.9301 19.6664 24.6665 19.6664Z'
      fill='white'
    />
  </svg>
);
