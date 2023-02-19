const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, getusers: action.payload };
    case "GET_ONEUSER":
      return { ...state, getoneusers: action.payload };
    case "GET_ONEUSERBYTOKEN":
      return { ...state, getoneuserstoken: action.payload };
    case "PUT_UPDATEUSER":
      return { ...state, putuser: action.payload };
    default:
      return state;
  }
};

export default UsersReducer;
