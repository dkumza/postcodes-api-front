import { useSelector } from 'react-redux';
import { FormSpinner } from './FormSpinner';

export const FormButton = () => {
  const spinner = useSelector((state) => state.postcodes.spinner);

  return (
    <div className='flex flex-col'>
      <button
        className={`${
          spinner ? `hover:cursor-not-allowed` : null
        } rounded-lg shadow-md border-indigo-400 h-9 px-3 w-full capitalize bg-indigo-400 text-white hover:bg-indigo-500 flex justify-center items-center`}
        type='submit'
        disabled={spinner}
      >
        {spinner ? <FormSpinner /> : 'Search'}
      </button>
    </div>
  );
};
