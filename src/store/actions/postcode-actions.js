import axios from 'axios';
import { addPostcode, postCodeInfo } from '../slices/postcode-slices';

const POSTCODE_URL = 'https://api.postcodes.io/postcodes/';

export const getPostcode = (postcode, formik) => async (dispatch) => {
  try {
    const response = await axios.get(POSTCODE_URL + postcode);
    const result = response.data.result;
    dispatch(addPostcode(postcode));
    dispatch(postCodeInfo(result));
    formik.resetForm();
  } catch (error) {
    console.error('Failed to fetch postcode: ', error);
  }
};
