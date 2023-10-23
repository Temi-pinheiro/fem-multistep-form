import { Header } from '../components';

export const Step3 = ({ data, update }: { data: any; update: any }) => {
  console.log({ data, update });

  return (
    <div className='flex flex-col'>
      <Header
        title='Pick add-ons'
        details='Add-ons help enhance your gaming experience.'
      />
    </div>
  );
};
