import { Header } from '../components';

export const Step1 = ({ data, update }: { data: any; update: any }) => {
  console.log({ data, update });
  return (
    <div className='flex flex-col'>
      <Header
        title='Personal info'
        details='Please provide your name, email address, and phone number.'
      />
    </div>
  );
};
