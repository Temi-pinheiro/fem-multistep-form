import { Header } from '../components';

export const Step4 = ({ data, update }: { data: any; update: any }) => {
  console.log({ data, update });

  return (
    <div className='flex flex-col'>
      <Header
        title='Finishing up'
        details='Double-check everything looks OK before confirming.'
      />
    </div>
  );
};
