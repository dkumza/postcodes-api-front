export const FormInput = ({ formik }) => {
  return (
    <div className='flex flex-col'>
      <input
        className={`${
          formik.errors.postcode ? `border-red-600` : `border-indigo-300`
        } border rounded-lg py-1.5 px-3 focus:border-indigo-500 focus:outline-none`}
        placeholder='Enter Postcode'
        type='text'
        name='postcode'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.postcode}
      />
      {formik.errors.postcode ? (
        <div className='text-xs text-red-600'>{formik.errors.postcode}</div>
      ) : null}
    </div>
  );
};