export const localStorageMiddleware = (store) => (next) => (action) => {
  let result = next(action);
  // set the postcodes in local storage by stringifying the postcodes array
  localStorage.setItem('postcodes', JSON.stringify(store.getState().postcodes));
  return result;
};
