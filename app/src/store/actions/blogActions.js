export const createBlog = (blog) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // TODO: make a async call to db
    const firestore = getFirestore();
    firestore.collection('blogs').add({
      ...blog,
      author: 'MattMatt',
      authorID: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BLOG', blog });
    }).catch((error) => {
      dispatch({ type: 'CREATE_BLOG_ERROR', error });
    })
    
  }
};