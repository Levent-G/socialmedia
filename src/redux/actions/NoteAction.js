import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const getUserNote = (userId) => {
  return (dispatch) => {
    try {
      axios
        .get(`/notes/${userId}`)
        .then((resp) =>
          dispatch({ type: "GET_USERNOTES", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const createNote = (body) => {
  return (dispatch) => {
    try {
      axios
        .post("/notes", body)
        .then((resp) => dispatch({ type: "POST_NOTE", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};

export const deleteNote = (noteId) => {
  return (dispatch) => {
    try {
      axios
        .delete(`/notes/${noteId}`)
        .then((resp) => dispatch({ type: "DELETE_NOTE", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
