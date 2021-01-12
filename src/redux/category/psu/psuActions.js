import { PSU_SUCCESS, PSU_FAILED } from "./psuTypes";
import axios from "axios";

export const fetchPSU = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:6969/listings/PSU"
       )
      .then((response) => {
        // response.data is the users
        const psus = response.data;
        dispatch(psuSuccess(psus));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(psuFailure(error.message));
      });
  };
};

export const psuSuccess = (data) => {
  return {
    type: PSU_SUCCESS,
    payload: data,
  };
};

export const psuFailure = (error) => {
  return {
    type: PSU_FAILED,
    payload: error,
  };
};
