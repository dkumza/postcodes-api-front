import { useSelector } from 'react-redux';

export const Results = () => {
  const postCodeInfo = useSelector((state) => state.postcodes.postcodeInfo);

  if (!postCodeInfo) {
    return;
  }

  console.log('postCodeInfo: ', postCodeInfo);

  return (
    <div className='container border'>
      {postCodeInfo && (
        <div>
          <div>Country: {postCodeInfo.country}</div>
          <div>Longtitude: {postCodeInfo.longitude}</div>
          <div>Latitude: {postCodeInfo.latitude}</div>
          <div>Admin District: {postCodeInfo.codes.admin_district}</div>
        </div>
      )}
    </div>
  );
};
