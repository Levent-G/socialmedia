import axios from "axios";

export const LoginAction = (body) => {
  return (dispatch) => {
    axios
      .post("/users/login", body)
      .then((resp) => dispatch({ type: "POST_LOGIN", payload: resp.data }));
  };
};
export const Logout = (id) => {
  return (dispatch) => {
    axios
      .put(`/users/logout/${id}`)
      .then((resp) => dispatch({ type: "PUT_LOGOUT", payload: resp.data }));
  };
};
export const Signup = (body) => {
  return (dispatch) => {
    axios
      .post("/users", body)
      .then((resp) => dispatch({ type: "POST_SIGNUP", payload: resp.data }));
  };
};
