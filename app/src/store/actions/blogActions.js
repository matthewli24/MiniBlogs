export const createBlog = (blog) => {
  return (dispatch, getState) => {
    // make a atsnc call to db
    // ...
    
    dispatch({ type: 'CREATE_BLOG', blog });
  }
};