import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const LoginAction = (body) => {
  return (dispatch) => {
    try {
      axios
        .post("/users/login", body)
        .then((resp) => dispatch({ type: "POST_LOGIN", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const Logout = (id) => {
  return (dispatch) => {
    try {
      axios
        .put(`/users/logout/${id}`)
        .then((resp) => dispatch({ type: "PUT_LOGOUT", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const Signup = (body) => {
  return (dispatch) => {
    try {
      axios
        .post("/users", body)
        .then((resp) => dispatch({ type: "POST_SIGNUP", payload: resp.data }));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
