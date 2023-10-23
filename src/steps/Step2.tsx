import { Header } from '../components';

export const Step2 = ({ data, update }: { data: any; update: any }) => {
  console.log({ data, update });

  return (
    <div className='flex flex-col'>
      <Header
        title='Select your plan'
        details='You have the option of monthly or yearly billing.'
      />
    </div>
  );
};
