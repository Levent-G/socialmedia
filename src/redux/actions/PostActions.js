import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const GetPostsAction = () => {
  return (dispatch) => {
    try {
      axios
        .get(`/posts`)
        .then((resp) =>
          dispatch({ type: "GET_POSTS", payload: resp.data.reverse() })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const getOneUserPost = (userId) => {
  return (dispatch) => {
    try {
      axios
        .get(`/posts/getUserId/${userId}`)
        .then((resp) =>
          dispatch({ type: "GET_ONEUSERPOST", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const deletePost = (postId) => {
  return (dispatch) => {
    try {
      axios
        .delete(`/posts/${postId}`)
        .then((resp) => dispatch({ type: "DELETE_POST", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const sendPost = (body) => {
  return (dispatch) => {
    try {
      axios
        .post("/posts", body)
        .then((resp) =>
          dispatch({ type: "POST_SENDPOST", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};

export const getOnePost = (postId) => {
  return (dispatch) => {
    try {
      axios
        .get(`/posts/${postId}`)
        .then((resp) => dispatch({ type: "GET_ONEPOST", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
