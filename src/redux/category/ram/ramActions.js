import { RAM_SUCCESS, RAM_FAILED } from "./ramTypes";
import axios from "axios";

export const fetchRam = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:6969/listings/RAM"
       )
      .then((response) => {
        // response.data is the users
        const rams = response.data;
        dispatch(ramSuccess(rams));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(ramFailure(error.message));
      });
  };
};

export const ramSuccess = (data) => {
  return {
    type: RAM_SUCCESS,
    payload: data,
  };
};

export const ramFailure = (error) => {
  return {
    type: RAM_FAILED,
    payload: error,
  };
};
