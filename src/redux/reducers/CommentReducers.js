const CommentReducers = (state = [], action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return { ...state, comments: action.payload };
    case "POST_COMMENTS":
      return { ...state, commentspost: action.payload };

    default:
      return state;
  }
};

export default CommentReducers;
