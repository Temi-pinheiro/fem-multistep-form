export const Header = ({
  title,
  details,
}: {
  title: string;
  details: string;
}) => {
  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='text-[#022959] text-[32px] font-bold'>{title}</h2>
      <p className='leading-[25px] text-gray-400'>{details}</p>
    </div>
  );
};
