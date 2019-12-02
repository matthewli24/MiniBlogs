const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      return { ...state, authError: action.error.message };
    case 'LOGIN_SUCCESS':
      // console.log('login success');
      return { ...state, authError: null };
    case 'SIGNOUT_SUCCESS':
      // console.log('signed out successful')
      return state;
    case 'SIGNUP_SUCCESS':
      console.log('sign up success');
      return {...state, authError: null};
    case 'SIGNUP_ERROR':
      return {...state, authError: action.error.message}
    default:
      return state;
  }
};


export default authReducer;