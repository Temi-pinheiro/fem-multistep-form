import { Header, TextInput } from '../components';

export const Step1 = ({ data, update }: { data: any; update: any }) => {
  console.log({ data, update });
  return (
    <div className='flex flex-col'>
      <Header
        title='Personal info'
        details='Please provide your name, email address, and phone number.'
      />
      <div className='flex flex-col gap-y-6 md:mt-[35px]'>
        <TextInput
          label='Name'
          name='name'
          value={data.name}
          handleInputChange={update}
        />
      </div>
    </div>
  );
};
