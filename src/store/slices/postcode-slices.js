import { createSlice } from '@reduxjs/toolkit';

const storedPostcodes = JSON.parse(localStorage.getItem('postcodes'));

// check type of storedPostcodes
// console.log(Array.isArray(storedPostcodes));

const initialState = {
  postcodes: storedPostcodes || [],
  postcodeInfo: null,
  spinner: false,
};

const postcodeSlice = createSlice({
  name: 'postcodes',
  initialState,
  reducers: {
    addPostcode(state, action) {
      state.postcodes.push(action.payload);
    },
    removePostcode(state, action) {
      state.postcodes = state.postcodes.filter((postcode) => postcode !== action.payload);
    },
    postCodeInfo(state, action) {
      state.postcodeInfo = action.payload;
    },
    setSpinner(state, action) {
      state.spinner = action.payload;
    },
  },
});

export const { addPostcode, removePostcode, postCodeInfo, setSpinner } = postcodeSlice.actions;

export default postcodeSlice.reducer;
