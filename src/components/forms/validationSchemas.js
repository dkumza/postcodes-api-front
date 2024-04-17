import * as yup from 'yup';

export const postcodeValidationSchema = yup.object({
  postcode: yup
    .string()
    .trim()
    .min(6, 'Postcode must be at least 6 characters')
    .max(8, 'Postcode must be at most 8 characters')
    .required('Postcode is required'),
});
