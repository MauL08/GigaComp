import { MOTHERBOARD_SUCCESS, MOTHERBOARD_FAILED } from "./motherboardTypes";
import axios from 'axios'

export const fetchMotherboard = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:6969/listings/Motherboard"
       )
      .then((response) => {
        // response.data is the users
        const motherboards = response.data;
        dispatch(motherboardSuccess(motherboards));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(motherboardFailure(error.message));
      });
  };
};

export const motherboardSuccess = (data) => {
  return {
    type: MOTHERBOARD_SUCCESS,
    payload: data,
  };
};

export const motherboardFailure = (error) => {
  return {
    type: MOTHERBOARD_FAILED,
    payload: error,
  };
};
