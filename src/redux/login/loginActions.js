import { LOGIN_SUCCESS, LOGIN_FAILED } from "./loginTypes";
import axios from "axios";

export const fetchLogin = (email, password) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:6969/users/login", {
        email,
        password,
      })
      .then((response) => {
        // response.data is the users
        const logins = response.data;
        console.log(document.cookie);
        console.log(response.status)
        dispatch(loginSuccess(logins));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(loginFailure(error.message));
      });
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};
