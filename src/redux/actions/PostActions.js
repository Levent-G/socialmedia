import axios from "axios";

export const GetPostsAction = () => {
  return (dispatch) => {
    axios
      .get(`/posts`)
      .then((resp) =>
        dispatch({ type: "GET_POSTS", payload: resp.data.reverse() })
      );
  };
};
export const getOneUserPost = (userId) => {
  return (dispatch) => {
    axios
      .get(`/posts/getUserId/${userId}`)
      .then((resp) =>
        dispatch({ type: "GET_ONEUSERPOST", payload: resp.data })
      );
  };
};
export const deletePost = (postId) => {
  return (dispatch) => {
    axios
      .delete(`/posts/${postId}`)
      .then((resp) => dispatch({ type: "DELETE_POST", payload: resp.data }));
  };
};
export const sendPost = (body) => {
  return (dispatch) => {
    axios
      .post("/posts", body)
      .then((resp) => dispatch({ type: "POST_SENDPOST", payload: resp.data }));
  };
};

export const getOnePost = (postId) => {
  return (dispatch) => {
    axios
      .get(`/posts/${postId}`)
      .then((resp) => dispatch({ type: "GET_ONEPOST", payload: resp.data }));
  };
};
