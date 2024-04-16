import axios from 'axios';
import { addPostcode, postCodeInfo, setSpinner } from '../slices/postcode-slices';
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
      formik.resetForm();
      toast.info('Postcode found');
      dispatch(setSpinner(false));
    }, 1000);
  } catch (error) {
    setTimeout(() => {
      // delay to improve user experience
      dispatch(setSpinner(false));
      console.error('Failed to fetch postcode: ', error);
      const errorMsg = error.response.data.error;
      formik.errors.postcode = errorMsg;
      toast.error(errorMsg);
    }, 1000);
  }
};
