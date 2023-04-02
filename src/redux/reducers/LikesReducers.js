const initialState = {
  likes: [],
  postlikes: [],
};
const LikesReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIKES":
      return { ...state, likes: action.payload };
    case "POST_LIKE":
      return { ...state, likes: [...state.likes, action.payload] };

    default:
      return state;
  }
};

export default LikesReducers;
