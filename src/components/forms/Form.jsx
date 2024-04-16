import 'react-toastify/dist/ReactToastify.css';
import { FormButton } from './FormButton';
import { FormInput } from './FormInput';
import { useFormik } from 'formik';
import { postcodeValidationSchema } from './validationSchemas';
import { ToastThemed } from '../ToastThemed';
import { useDispatch } from 'react-redux';
import { getPostcode } from '../../store/actions/postcode-actions';

export const Form = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      postcode: '',
    },
    validationSchema: postcodeValidationSchema,
    onSubmit: (values) => {
      dispatch(getPostcode(values.postcode, formik));
    },
  });

  return (
    <div className='container flex justify-center py-8'>
      <ToastThemed />
      <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
        <FormInput formik={formik} />
        <FormButton />
      </form>
    </div>
  );
};
