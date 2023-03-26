const initialState = {
  posts: [],
  getoneuserpost: [],
  deletepost: [],
  sendpost: [],
  onepost: [],
};

const PostReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: action.payload };
    case "GET_ONEUSERPOST":
      return { ...state, getoneuserpost: action.payload };
    case "DELETE_POST":
      return { ...state, deletepost: action.payload };
    case "POST_SENDPOST":
      return { ...state, sendpost: action.payload };
    case "GET_ONEPOST":
      return { ...state, onepost: action.payload };
    default:
      return state;
  }
};

export default PostReducers;
