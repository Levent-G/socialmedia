const LikesReducers = (state = [], action) => {
  switch (action.type) {
    case "POST_SHARE":
      return { ...state, sharepost: action.payload };

    default:
      return state;
  }
};

export default LikesReducers;
