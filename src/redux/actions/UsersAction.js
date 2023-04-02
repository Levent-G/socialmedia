import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const UsersAction = () => {
  return (dispatch) => {
    try {
      axios
        .get(`/users`)
        .then((resp) => dispatch({ type: "GET_USERS", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const getOneUser = (userId) => {
  return (dispatch) => {
    try {
      axios
        .get(`/users/${userId}`)
        .then((resp) => dispatch({ type: "GET_ONEUSER", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};

export const searchUser = (userName) => {
  return (dispatch) => {
    try {
      axios
        .get(`/users/search/${userName}`)
        .then((resp) =>
          dispatch({ type: "GET_SEARCHUSER", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};

export const getOneUserByToken = () => {
  return (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      axios
        .get(`/users/token/${token}`)
        .then((resp) =>
          dispatch({ type: "GET_ONEUSERBYTOKEN", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const updateUser = (id, body) => {
  return (dispatch) => {
    try {
      axios
        .put(`/users/${id}`, body)
        .then((resp) =>
          dispatch({ type: "PUT_UPDATEUSER", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};

export const getOneUserPostCount = (userId) => {
  return (dispatch) => {
    try {
      axios
        .get(`/posts/postcount/${userId}`)
        .then((resp) =>
          dispatch({ type: "GET_ONEUSERPOSTCOUNT", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const getOneUserLikeCount = (userId) => {
  return (dispatch) => {
    try {
      axios
        .get(`/like/likecount/${userId}`)
        .then((resp) =>
          dispatch({ type: "GET_ONEUSERLIKECOUNT", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const getOneUserCommentCount = (userId) => {
  return (dispatch) => {
    try {
      axios
        .get(`/comments/commentcount/${userId}`)
        .then((resp) =>
          dispatch({ type: "GET_ONEUSERCOMMENTCOUNT", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
