import { VGA_SUCCESS, VGA_FAILED } from "./vgaTypes";
import axios from "axios";

export const fetchVGA = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:6969/listings/VGA"
       )
      .then((response) => {
        // response.data is the users
        const vgas = response.data;
        dispatch(vgaSuccess(vgas));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(vgaFailure(error.message));
      });
  };
};

export const vgaSuccess = (data) => {
  return {
    type: VGA_SUCCESS,
    payload: data,
  };
};

export const vgaFailure = (error) => {
  return {
    type: VGA_FAILED,
    payload: error,
  };
};
