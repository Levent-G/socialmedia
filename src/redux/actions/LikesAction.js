import axios from "axios";

export const GetLikesAction = () => {
  return (dispatch) => {
    //api call
    //dispatch({type:" GET USER", payload:resp.data})
    axios
      .get(`/like`)
      .then((resp) => dispatch({ type: "GET_LIKES", payload: resp.data }));
  };
};
export const addLike = (body) => {
  return (dispatch) => {
    axios
      .post(`/like`, body)
      .then((resp) => dispatch({ type: "POST_LIKE", payload: resp.data }));
  };
};
