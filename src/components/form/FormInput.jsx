export const FormInput = ({ formik }) => {
  return (
    <div className='flex flex-col'>
      <label className='text-sm'>Enter Postcode</label>
      <input
        className={`${
          formik.errors.postcode ? `border-red-600` : `border-gray-300`
        } border rounded-md py-1.5 px-3 focus:border-indigo-400 focus:outline-none`}
        type='text'
        name='postcode'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.postcode}
      />
      {formik.errors.postcode ? (
        <div className='text-xs text-red-600'>{formik.errors.postcode}</div>
      ) : (
        <div className='text-xs'>&nbsp;</div>
      )}
    </div>
  );
};
