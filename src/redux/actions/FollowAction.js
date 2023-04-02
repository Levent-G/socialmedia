import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const getFollows = () => {
  return (dispatch) => {
    try {
      axios
        .get(`/follow`)
        .then((resp) => dispatch({ type: "GET_FOLLOW", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};

export const createFollow = (body) => {
  return (dispatch) => {
    try {
      axios
        .post("/follow", body)
        .then((resp) => dispatch({ type: "POST_FOLLOW", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const followControl = (takipEden, takipEdilen) => {
  return (dispatch) => {
    try {
      axios
        .get(
          `/follow/followed?takipEden=${takipEden}&takipEdilen=${takipEdilen}`
        )
        .then((resp) =>
          dispatch({ type: "GET_FOLLOWCONTROL", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const deleteFolow = (id) => {
  return (dispatch) => {
    try {
      axios
        .delete(`/follow/deletefollow?id=${id}`)
        .then((resp) =>
          dispatch({ type: "DELETE_FOLLOW", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};

export const getFollowCount = (takipEdilen) => {
  return (dispatch) => {
    try {
      axios
        .get(`/follow/followcount/${takipEdilen}`)
        .then((resp) =>
          dispatch({ type: "GET_FOLLOWCOUNT", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};

export const getFollowCountTakip = (takipEden) => {
  return (dispatch) => {
    try {
      axios
        .get(`/follow/followcount2/${takipEden}`)
        .then((resp) =>
          dispatch({ type: "GET_FOLLOWCOUNTTAKIP", payload: resp.data })
        );
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
