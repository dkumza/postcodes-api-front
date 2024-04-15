import { configureStore } from '@reduxjs/toolkit';
import postcodesReducer from './slices/postcode-slices';
import { localStorageMiddleware } from './middlewares/localStorageMiddleware';

export default configureStore({
  reducer: {
    postcodes: postcodesReducer,
  },
  // add the localStorageMiddleware to the middleware array by merging it with the default middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
