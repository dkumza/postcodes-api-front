import { useDispatch, useSelector } from 'react-redux';
import { getPostcode } from '../../../store/actions/postcode-actions';

export const History = () => {
  const postcodes = useSelector((state) => state.postcodes.postcodes);
  console.log('postcodes: ', postcodes);

  const dispatch = useDispatch();

  const handleSearch = (postcode) => {
    console.log('postcode: ', postcode);
    dispatch(getPostcode(postcode));
  };

  return (
    <div className='container shadow bg-indigo-50 rounded-md rounded-t-none border border-indigo-200 border-t-0 min-w-[22rem] p-2 px-2'>
      <div className={`min-h-[108px] max-h-[108px] overflow-auto`}>
        {postcodes.length === 0 && (
          <h2 className='text-gray-500 text-sm px-2'>Search history appears here...</h2>
        )}
        {postcodes &&
          postcodes.map((postcode, index) => (
            <p
              key={index}
              className='hover:cursor-pointer hover:bg-indigo-100 px-2'
              onClick={() => handleSearch(postcode)}
            >
              {postcode}
            </p>
          ))}
      </div>
    </div>
  );
};
