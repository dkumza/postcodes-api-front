import { useSelector } from 'react-redux';
import { ResultsSingleItem } from './ResultsSingleItem';

export const Results = () => {
  const postCodeInfo = useSelector((state) => state.postcodes.postcodeInfo);

  if (!postCodeInfo) {
    return;
  }

  console.log('postCodeInfo: ', postCodeInfo);

  return (
    <div className='container border'>
      <ResultsSingleItem text={'Country: '} info={postCodeInfo.country} />
      <ResultsSingleItem text={'Longitude: '} info={postCodeInfo.longitude} />
      <ResultsSingleItem text={'Latitude: '} info={postCodeInfo.latitude} />
      <ResultsSingleItem text={'Admin District: '} info={postCodeInfo.codes.admin_district} />
    </div>
  );
};
