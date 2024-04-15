import 'react-toastify/dist/ReactToastify.css';
import { FormButton } from './FormButton';
import { FormInput } from './FormInput';
import { useFormik } from 'formik';
// import { toast } from 'react-toastify';
// import axios from 'axios';
import { postcodeValidationSchema } from './validationSchemas';
import { ToastThemed } from '../ToastThemed';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPostcode } from '../../store/actions/postcode-actions';

// const POSTCODE_URL = 'https://api.postcodes.io/postcodes/';

export const Form = () => {
  // const postcodes = useSelector((state) => state.postcodes.postcodes);
  const dispatch = useDispatch();

  const [spinner, setSpinner] = useState(false);

  const formik = useFormik({
    initialValues: {
      postcode: '',
    },
    validationSchema: postcodeValidationSchema,
    onSubmit: (values) => {
      dispatch(getPostcode(values.postcode, formik));
      // setSpinner(true);
      // axiosReq(values.postcode);
    },
  });

  // const axiosReq = (postcode) => {
  //   setSpinner(true);
  //   setTimeout(() => {
  //     axios
  //       .get(POSTCODE_URL + postcode)
  //       .then((res) => {
  //         const result = res.data.result;
  //         console.log('result: ', result);
  //         dispatch(addPostcode(result));
  //         // localStorage.setItem('postcode', JSON.stringify(result));
  //         toast.success('Postcode found');
  //         formik.resetForm();
  //         setSpinner(false);
  //       })
  //       .catch((err) => {
  //         const errorMsg = err.response.data.error;
  //         console.error('error: ', errorMsg);
  //         toast.error(errorMsg);
  //         setSpinner(false);
  //       });
  //   }, 1000);
  // };

  return (
    <div className='container flex justify-center py-8'>
      <ToastThemed />
      <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
        <FormInput formik={formik} />
        <FormButton spinner={spinner} />
      </form>
    </div>
  );
};
