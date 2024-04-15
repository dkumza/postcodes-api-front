export const FormInput = () => {
  return (
    <div className='flex flex-col'>
      <label className='text-xs'>Enter Postcode</label>
      <input
        className='border rounded-md border-gray-300 py-1.5 px-3 focus:border-indigo-400 focus:outline-none'
        type='text'
      />
    </div>
  );
};
