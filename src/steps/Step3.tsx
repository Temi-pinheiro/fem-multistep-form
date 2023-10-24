import { Addon, Header } from '../components';
import { prices } from '../data/prices.json';

export const Step3 = ({ data, update }: { data: any; update: any }) => {
  console.log({ data, update });

  return (
    <div className='flex flex-col'>
      <Header
        title='Pick add-ons'
        details='Add-ons help enhance your gaming experience.'
      />
      <div className='mt-9 flex flex-col gap-y-4'>
        <Addon
          key='local'
          updateData={update}
          selected={data.onlineServices}
          title='Online Service'
          desc='Access to multiplayer games'
          name='onlineServices'
          monthly={data.monthly}
          price={
            prices[data.monthly ? 'monthly' : 'yearly'].onlineServices.price
          }
        />
        <Addon
          key='larger'
          updateData={update}
          selected={data.largerStorage}
          title='Larger storage'
          desc='Extra 1TB of cloud save'
          name='largerStorage'
          monthly={data.monthly}
          price={
            prices[data.monthly ? 'monthly' : 'yearly'].largerStorage.price
          }
        />
        <Addon
          key='online'
          updateData={update}
          selected={data.onlineService}
          title='Online Service'
          desc='Access to multiplayer games'
          name='onlineService'
          monthly={data.monthly}
          price={prices[data.monthly ? 'monthly' : 'yearly'].arcade.price}
        />
      </div>
    </div>
  );
};
