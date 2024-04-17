export const localStorageMiddleware = (store) => (next) => (action) => {
  let result = next(action);
  //  getting only the postcodes array from the store, and saving as JSON to local storage
  const postcodesState = store.getState().postcodes.postcodes;
  const postcodesJson = JSON.stringify(postcodesState);
  localStorage.setItem('postcodes', postcodesJson);
  return result;
};
