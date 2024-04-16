import { useSelector } from 'react-redux';
import { InformationButton } from './InformationButton';
import { History } from './history/History';
import { Results } from './results/Results';

export const Information = () => {
  const showInfo = useSelector((state) => state.postcodes.showInfo);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex w-full justify-center gap-[2px]'>
        <InformationButton text='Result' />
        <InformationButton text='History' />
      </div>
      <div>{showInfo ? <Results /> : <History />}</div>
    </div>
  );
};
