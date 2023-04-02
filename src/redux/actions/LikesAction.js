import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const GetLikesAction = () => {
  return (dispatch) => {
    try {
      axios
        .get(`/like`)
        .then((resp) => dispatch({ type: "GET_LIKES", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const addLike = (body) => {
  return (dispatch) => {
    try {
      axios
        .post(`/like`, body)
        .then((resp) => dispatch({ type: "POST_LIKE", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
