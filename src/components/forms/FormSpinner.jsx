import { ClipLoader } from 'react-spinners';

export const FormSpinner = () => {
  return (
    <div className='flex gap-2 items-center'>
      <ClipLoader color='#fff' size={24} />
      <p>Loading...</p>
    </div>
  );
};
