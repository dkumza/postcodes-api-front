import 'react-toastify/dist/ReactToastify.css';
import { FormButton } from './FormButton';
import { FormInput } from './FormInput';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';
import { postcodeValidationSchema } from './validationSchemas';
import { ToastThemed } from '../ToastThemed';
import { useState } from 'react';

const POSTCODE_URL = 'https://api.postcodes.io/postcodes/';

export const Form = () => {
  const [spinner, setSpinner] = useState(false);

  const formik = useFormik({
    initialValues: {
      postcode: '',
    },
    validationSchema: postcodeValidationSchema,
    onSubmit: (values) => {
      setSpinner(true);
      axiosReq(values.postcode);
    },
  });

  const axiosReq = (postcode) => {
    setSpinner(true);
    setTimeout(() => {
      axios
        .get(POSTCODE_URL + postcode)
        .then((res) => {
          const result = res.data.result;
          console.log('result: ', result);
          localStorage.setItem('postcode', JSON.stringify(result));
          toast.success('Postcode found');
          formik.resetForm();
          setSpinner(false);
        })
        .catch((err) => {
          const error = err.response.data.error;
          console.error('error: ', error);
          toast.error('Postcode not found');
          setSpinner(false);
        });
    }, 1000);
  };

  return (
    <div className='container flex justify-center pb-8'>
      <ToastThemed />
      <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
        <FormInput formik={formik} />
        <FormButton spinner={spinner} />
      </form>
    </div>
  );
};
