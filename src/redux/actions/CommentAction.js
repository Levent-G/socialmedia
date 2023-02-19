import axios from "axios";

export const GetComments = () => {
  return (dispatch) => {
    axios
      .get(`/comments`)
      .then((resp) => dispatch({ type: "GET_COMMENTS", payload: resp.data }));
  };
};
export const commentPost = (body) => {
  return (dispatch) => {
    axios
      .post("/comments", body)
      .then((resp) => dispatch({ type: "POST_COMMENT", payload: resp.data }));
  };
};
