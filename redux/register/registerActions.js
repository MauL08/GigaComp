import { REGISTER_SUCCESS, REGISTER_FAILED } from "./registerTypes";
import axios from "axios";

export const fetchRegister = (phone, password, email, name) => {
  return (dispatch) => {
    axios
      .post("http://192.168.100.89:6969/users/register",{
      phone,
      password,
      email,
      name,
      },
       )
      .then((response) => {
        // response.data is the users
        console.log(document.cookie)
        const registers = response.data;
        dispatch(registerSuccess(registers));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(registerFailure(error.message));
      });
  };
};

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

export const registerFailure = (error) => {
  return {
    type: REGISTER_FAILED,
    payload: error,
  };
};
