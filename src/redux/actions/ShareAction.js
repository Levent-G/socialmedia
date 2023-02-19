import axios from "axios";

export const sharePost = (body) => {
  return (dispatch) => {
    axios
      .post("/posts", body)
      .then((resp) => dispatch({ type: "POST_SHARE", payload: resp.data }));
  };
};
