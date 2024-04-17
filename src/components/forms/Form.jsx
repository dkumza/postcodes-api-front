import 'react-toastify/dist/ReactToastify.css';
import { FormButton } from './FormButton';
import { FormInput } from './FormInput';
import { useFormik } from 'formik';
import { postcodeValidationSchema } from './validationSchemas';
import { ToastThemed } from '../UI/ToastThemed';
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
    <div className='container flex flex-col justify-center py-12 w-fit gap-2'>
      <ToastThemed />
      <form className='flex flex-col gap-2 md:min-w-80' onSubmit={formik.handleSubmit}>
        <FormInput formik={formik} />
        <FormButton />
      </form>
    </div>
  );
};
