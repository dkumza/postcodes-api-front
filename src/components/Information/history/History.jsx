import { useSelector } from 'react-redux';

export const History = () => {
  const postcodes = useSelector((state) => state.postcodes.postcodes);
  console.log('postcodes: ', postcodes);

  return (
    <div className='container shadow bg-indigo-50 rounded-md rounded-t-none border border-indigo-200 border-t-0 min-w-[22rem] p-2 px-4'>
      <div className='min-h-[108px]'>
        {/* show if no postcode are fetched. else show fetched postcode information */}
        {<h2 className='text-gray-500 text-sm'>Search history appears here...</h2>}
        {/* {postCodeInfo && (
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
        )} */}
      </div>
    </div>
  );
};
