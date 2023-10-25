import { Header } from '../components';
import priceData from '../data/prices.json';

export const Step4 = ({
  data,
  changeFunction,
}: {
  data: any;
  changeFunction: () => void;
}) => {
  const { prices }: { prices: any } = priceData;
  const addons = ['onlineServices', 'largerStorage', 'customizableProfile'];
  const getTotal = () => {
    let sum = 0;
    addons.map(
      (addon) =>
        (sum = data[addon]
          ? sum + prices[data.monthly ? 'monthly' : 'yearly']?.[addon]?.price
          : sum)
    );
    return (
      sum +
      prices[data.monthly ? 'monthly' : 'yearly']?.[data.plan || 'arcade']
        ?.price
    );
  };
  return (
    <div className='flex flex-col'>
      <Header
        title='Finishing up'
        details='Double-check everything looks OK before confirming.'
      />
      <div className='p-4 md:py-4 md:px-6 bg-[#F8F9FF] rounded-lg w-full mt-[22px] md:mt-[35px]'>
        <header className='flex items-center justify-between w-full'>
          <div className='flex flex-col items-start gap-y-2'>
            <h3 className=' text-sm md:text-base font-medium text-[#022959]'>
              {
                prices[data.monthly ? 'monthly' : 'yearly']?.[
                  data.plan || 'arcade'
                ]?.title
              }{' '}
              ({data.monthly ? 'Monthly' : 'Yearly'})
            </h3>
            <button
              onClick={changeFunction}
              type='button'
              className='text-sm text-[#9699AA] underline'
            >
              Change
            </button>
          </div>
          <span className='text-sm md:text-base font-bold text-[#022959]'>
            {' '}
            $
            {
              prices[data.monthly ? 'monthly' : 'yearly']?.[
                data.plan || 'arcade'
              ]?.price
            }
            /{data.monthly ? 'mo' : 'yr'}
          </span>
        </header>
        <hr className='bg-[#9699AA] opacity-20 mt-6 mg-4'></hr>
        <ul className='flex flex-col gap-y-4'>
          {addons.map((addon, index) =>
            data[addon] ? (
              <li
                key={index}
                className='flex items-center w-full justify-between text-sm'
              >
                <span className='text-sm md:text-base text-[#9699AA]'>
                  {prices[data.monthly ? 'monthly' : 'yearly']?.[addon]?.title}
                </span>
                <span className='text-[#022959]'>
                  +$
                  {
                    prices[data.monthly ? 'monthly' : 'yearly']?.[addon]?.price
                  }{' '}
                  /{data.monthly ? 'mo' : 'yr'}
                </span>
              </li>
            ) : null
          )}
        </ul>
      </div>
      <div className='flex items-center w-full justify-between text-sm mt-6'>
        <span className='text-sm md:text-base text-[#9699AA]'>
          Total (per {data.monthly ? 'month' : 'year'})
        </span>
        <span className='font-bold text-base md:text-xl text-[#483EFF]'>
          +${getTotal()}/{data.monthly ? 'mo' : 'yr'}
        </span>
      </div>
    </div>
  );
};
