import axios from "axios";
export const UsersAction = () => {
  return (dispatch) => {
    axios
      .get(`/users`)
      .then((resp) => dispatch({ type: "GET_USERS", payload: resp.data }));
  };
};
export const getOneUser = (userId) => {
  return (dispatch) => {
    axios
      .get(`/users/${userId}`)
      .then((resp) => dispatch({ type: "GET_ONEUSER", payload: resp.data }));
  };
};

export const getOneUserByToken = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");

    axios
      .get(`/users/token/${token}`)
      .then((resp) =>
        dispatch({ type: "GET_ONEUSERBYTOKEN", payload: resp.data })
      );
  };
};
export const updateUser = (id, body) => {
  return (dispatch) => {
    axios
      .put(`/users/${id}`, body)
      .then((resp) => dispatch({ type: "PUT_UPDATEUSER", payload: resp.data }));
  };
};

export const getOneUserPostCount = (userId) => {
  return (dispatch) => {
    axios
      .get(`/posts/postcount/${userId}`)
      .then((resp) =>
        dispatch({ type: "GET_ONEUSERPOSTCOUNT", payload: resp.data })
      );
  };
};
export const getOneUserLikeCount = (userId) => {
  return (dispatch) => {
    axios
      .get(`/like/likecount/${userId}`)
      .then((resp) =>
        dispatch({ type: "GET_ONEUSERLIKECOUNT", payload: resp.data })
      );
  };
};
export const getOneUserCommentCount = (userId) => {
  return (dispatch) => {
    axios
      .get(`/comments/commentcount/${userId}`)
      .then((resp) =>
        dispatch({ type: "GET_ONEUSERCOMMENTCOUNT", payload: resp.data })
      );
  };
};
