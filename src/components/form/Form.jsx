import { FormButton } from './FormButton';
import { FormInput } from './FormInput';
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  postcode: yup.string().required('Postcode is required'),
});

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      postcode: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='container border flex justify-center py-8'>
      <form className='flex flex-col gap-1' onSubmit={formik.handleSubmit}>
        <FormInput formik={formik} />
        <FormButton />
      </form>
    </div>
  );
};
