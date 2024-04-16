import axios from 'axios';
import {
  addPostcode,
  postCodeInfo,
  removePostcode,
  setShowInfo,
  setSpinner,
} from '../slices/postcode-slices';
import { toast } from 'react-toastify';

const POSTCODE_URL = 'https://api.postcodes.io/postcodes/';

export const getPostcode = (postcode, formik) => async (dispatch) => {
  try {
    dispatch(setSpinner(true));
    const response = await axios.get(POSTCODE_URL + postcode);
    const result = response.data.result;

    // delay to improve user experience
    setTimeout(() => {
      dispatch(addPostcode(postcode));
      dispatch(postCodeInfo(result));
      dispatch(setShowInfo(true));
      if (formik) formik.resetForm();
      toast.info('Postcode found');
      dispatch(setSpinner(false));
    }, 1000);
  } catch (error) {
    setTimeout(() => {
      // delay to improve user experience
      dispatch(setSpinner(false));
      console.error('Failed to fetch postcode: ', error);
      const errorMsg = error.response.data.error;
      dispatch(postCodeInfo(null));
      formik.setFieldError('postcode', errorMsg);
      console.log('formik: ', formik.errors.postcode);
      toast.error(errorMsg);
    }, 1000);
  }
};

export const deletePostcode = (postcode) => (dispatch) => {
  dispatch(removePostcode(postcode));
  toast.info('Postcode deleted');
};
