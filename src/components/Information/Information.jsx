import { useSelector } from 'react-redux';
import { InformationButton } from './InformationButton';
import { History } from './history/History';
import { Results } from './results/Results';

export const Information = () => {
  const showInfo = useSelector((state) => state.postcodes.showInfo);

  return (
    <div className='flex flex-col justify-center items-center mb-8 md:min-w-[22rem] md:max-w-[22rem] shadow-md'>
      <div className='flex w-full justify-center gap-[2px]'>
        <InformationButton text='Result' />
        <InformationButton text='History' />
      </div>
      <div className='w-full'>{showInfo ? <Results /> : <History />}</div>
    </div>
  );
};
