import { HistoryItems } from './HistoryItems';
import { useSelector } from 'react-redux';

export const History = () => {
  const { postcodes } = useSelector((state) => state.postcodes);

  return (
    <div className='container relative shadow bg-indigo-50 rounded-md rounded-t-none border border-indigo-200 border-t-0 min-w-[22rem] p-2 px-2'>
      <div className={`min-h-[108px] max-h-[108px] overflow-auto`}>
        {postcodes.length === 0 && (
          <h2 className='text-gray-500 text-sm px-2'>Search history appears here...</h2>
        )}
        {postcodes &&
          postcodes.map((postcode, index) => <HistoryItems key={index} postcode={postcode} />)}
      </div>
    </div>
  );
};
