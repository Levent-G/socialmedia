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
export const deleteFolow = (id) => {
  return (dispatch) => {
    axios
      .delete(`/follow/deletefollow?id=${id}`)
      .then((resp) => dispatch({ type: "DELETE_FOLLOW", payload: resp.data }));
  };
};

export const getFollowCount = (takipEdilen) => {
  return (dispatch) => {
    axios
      .get(`/follow/followcount/${takipEdilen}`)
      .then((resp) =>
        dispatch({ type: "GET_FOLLOWCOUNT", payload: resp.data })
      );
  };
};

export const getFollowCountTakip = (takipEden) => {
  return (dispatch) => {
    axios
      .get(`/follow/followcount2/${takipEden}`)
      .then((resp) =>
        dispatch({ type: "GET_FOLLOWCOUNTTAKIP", payload: resp.data })
      );
  };
};
