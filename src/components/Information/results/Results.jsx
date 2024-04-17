import { useSelector } from 'react-redux';
import { ResultsSingleItem } from './ResultsSingleItem';

export const Results = () => {
  const postCodeInfo = useSelector((state) => state.postcodes.postcodeInfo);

  return (
    <div className='container min-w-64 md:min-w-[22rem] bg-indigo-50 rounded rounded-t-none border border-indigo-200 border-t-0 p-2 px-4'>
      <div className='min-h-[108px] max-h-[108px]'>
        {/* show if no postcode are fetched. else show fetched postcode information */}
        {!postCodeInfo && <h2 className='text-gray-500 text-sm'>Search data appears here...</h2>}
        {postCodeInfo && (
          <>
            <h2 className='pb-1'>{postCodeInfo.postcode} Postcode Information:</h2>
            <div className=''>
              <ResultsSingleItem text={'Country: '} info={postCodeInfo.country} />
              <ResultsSingleItem text={'Longitude: '} info={postCodeInfo.longitude} />
              <ResultsSingleItem text={'Latitude: '} info={postCodeInfo.latitude} />
              <ResultsSingleItem
                text={'Admin District: '}
                info={postCodeInfo.codes.admin_district}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
