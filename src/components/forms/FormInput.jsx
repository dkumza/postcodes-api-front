import PropTypes from 'prop-types';

export const FormInput = ({ formik }) => {
  const formikBorder = formik.errors.postcode ? `border-red-600` : `border-indigo-300`;

  return (
    <div className='flex flex-col'>
      <input
        className={`${formikBorder} border rounded-md py-1.5 px-3 focus:border-indigo-500 focus:outline-none`}
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

FormInput.propTypes = {
  formik: PropTypes.object.isRequired,
};
