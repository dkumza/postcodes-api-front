import { createSlice } from '@reduxjs/toolkit';

const storedPostcodes = JSON.parse(localStorage.getItem('postcodes'));

const initialState = {
  postcodes: storedPostcodes ? storedPostcodes.postcodes : [],
  postcodeInfo: null,
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
  },
});

export const { addPostcode, removePostcode, postCodeInfo } = postcodeSlice.actions;

export default postcodeSlice.reducer;
