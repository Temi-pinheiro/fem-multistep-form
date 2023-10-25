import { Header, TextInput } from '../components';

export const Step1 = ({ data, update }: { data: any; update: any }) => {
  return (
    <div className='flex flex-col'>
      <Header
        title='Personal info'
        details='Please provide your name, email address, and phone number.'
      />
      <div className='flex flex-col gap-y-6 mt-[22px] md:mt-[35px]'>
        <TextInput
          label='Name'
          required
          name='name'
          placeholder='e.g. Stephen King'
          value={data.name}
          handleInputChange={update}
        />
        <TextInput
          label='Email Address'
          name='email'
          required
          placeholder='e.g. stephenking@lorem.com'
          type='email'
          value={data.email}
          handleInputChange={update}
        />
        <TextInput
          label='Phone Number'
          required
          placeholder='e.g. +1 234 567 890'
          name='phone'
          value={data.phone}
          handleInputChange={update}
        />
      </div>
    </div>
  );
};
