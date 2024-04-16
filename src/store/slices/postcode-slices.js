import { createSlice } from '@reduxjs/toolkit';

const storedPostcodes = JSON.parse(localStorage.getItem('postcodes'));

// check type of storedPostcodes
// console.log(Array.isArray(storedPostcodes));

const initialState = {
  postcodes: storedPostcodes || [],
  postcodeInfo: null,
  toDelete: null,
  showInfo: true,
  modal: false,
  spinner: false,
};

const postcodeSlice = createSlice({
  name: 'postcodes',
  initialState,
  reducers: {
    addPostcode(state, action) {
      state.postcodes = state.postcodes.filter((postcode) => postcode !== action.payload);
      state.postcodes.unshift(action.payload);
    },
    setToDelete(state, action) {
      state.toDelete = action.payload;
    },
    removePostcode(state, action) {
      state.postcodes = state.postcodes.filter((postcode) => postcode !== action.payload);
    },
    postCodeInfo(state, action) {
      state.postcodeInfo = action.payload;
    },
    setShowInfo(state, action) {
      state.showInfo = action.payload;
    },
    setModal(state, action) {
      state.modal = action.payload;
    },
    setSpinner(state, action) {
      state.spinner = action.payload;
    },
  },
});

export const {
  addPostcode,
  setToDelete,
  removePostcode,
  postCodeInfo,
  setShowInfo,
  setModal,
  setSpinner,
} = postcodeSlice.actions;

export default postcodeSlice.reducer;
