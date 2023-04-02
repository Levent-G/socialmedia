import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const GetComments = () => {
  return (dispatch) => {
    try {
      axios
        .get(`/comments`)
        .then((resp) => dispatch({ type: "GET_COMMENTS", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const commentPost = (body) => {
  return (dispatch) => {
    try {
      axios
        .post("/comments", body)
        .then((resp) => dispatch({ type: "POST_COMMENT", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
