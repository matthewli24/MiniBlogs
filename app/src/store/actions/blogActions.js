export const createBlog = (blog) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;
    firestore.collection('blogs').add({
      ...blog,
      author: profile.username,
      authorID: authorID,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BLOG', blog });
    }).catch((error) => {
      dispatch({ type: 'CREATE_BLOG_ERROR', error });
    })
    
  }
};