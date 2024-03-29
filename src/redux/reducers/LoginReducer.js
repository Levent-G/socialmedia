const LoginReducer = (state = [], action) => {
  switch (action.type) {
    case "POST_LOGIN":
      return { ...state, loginUser: action.payload };
    case "PUT_LOGOUT":
      return { getoneuserstoken: null };
    case "POST_SIGNUP":
      return { ...state, signupuser: action.payload };

    default:
      return state;
  }
};

export default LoginReducer;
