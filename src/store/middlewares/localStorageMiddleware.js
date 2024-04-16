export const localStorageMiddleware = (store) => (next) => (action) => {
  let result = next(action);
  //  getting only the postcodes array from the store
  const postcodesState = store.getState().postcodes.postcodes;
  // converting the postcodes state to JSON string
  const postcodesJson = JSON.stringify(postcodesState);
  // setting the postcodes in local storage
  localStorage.setItem('postcodes', postcodesJson);
  return result;
};
