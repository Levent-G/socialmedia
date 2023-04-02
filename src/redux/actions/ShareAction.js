import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const sharePost = (body) => {
  return (dispatch) => {
    try {
      axios
        .post("/posts", body)
        .then((resp) => dispatch({ type: "POST_SHARE", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
