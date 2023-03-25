const FollowReducers = (state = [], action) => {
  switch (action.type) {
    case "GET_FOLLOW":
      return { ...state, getfollows: action.payload };
    case "POST_FOLLOW":
      return { ...state, postfollows: action.payload };
    case "GET_FOLLOWCONTROL":
      return { ...state, followcontrol: action.payload };
    default:
      return state;
  }
};

export default FollowReducers;
