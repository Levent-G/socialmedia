import axios from "axios";
export const getFollows = () => {
  return (dispatch) => {
    axios
      .get(`/follow`)
      .then((resp) => dispatch({ type: "GET_FOLLOW", payload: resp.data }));
  };
};

export const createFollow = (body) => {
  return (dispatch) => {
    axios
      .post("/follow", body)
      .then((resp) => dispatch({ type: "POST_FOLLOW", payload: resp.data }));
  };
};
export const followControl = (takipEden, takipEdilen) => {
  return (dispatch) => {
    axios
      .get(`/follow/followed?takipEden=${takipEden}&takipEdilen=${takipEdilen}`)
      .then((resp) =>
        dispatch({ type: "GET_FOLLOWCONTROL", payload: resp.data })
      );
  };
};
