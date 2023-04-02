const initialState = {
  notes: [],
};
const NotesReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERNOTES":
      return { ...state, notes: action.payload };
    case "POST_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "DELETE_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};

export default NotesReducers;
