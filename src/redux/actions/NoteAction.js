import axios from "axios";

export const getUserNote = (userId) => {
  return (dispatch) => {
    axios
      .get(`/notes/${userId}`)
      .then((resp) => dispatch({ type: "GET_USERNOTES", payload: resp.data }));
  };
};
export const createNote = (body) => {
  return (dispatch) => {
    axios
      .post("/notes", body)
      .then((resp) => dispatch({ type: "POST_NOTE", payload: resp.data }));
  };
};

export const deleteNote = (noteId) => {
  return (dispatch) => {
    axios
      .delete(`/notes/${noteId}`)
      .then((resp) => dispatch({ type: "DELETE_NOTE", payload: resp.data }));
  };
};
