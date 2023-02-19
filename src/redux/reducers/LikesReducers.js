const LikesReducers = (state = [], action) => {
  switch (action.type) {
    case "GET_LIKES":
      return { ...state, likes: action.payload };
    case "POST_LIKE":
      return { ...state, postlikes: action.payload };
    default:
      return state;
  }
};

export default LikesReducers;
