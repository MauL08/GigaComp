import { PROCESSOR_SUCCESS, PROCESSOR_FAILED } from "./processorTypes";
import axios from "axios";

export const fetchProcessor = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:6969/listings/CPU"
       )
      .then((response) => {
        // response.data is the users
        const processors = response.data;
        dispatch(processorSuccess(processors));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(processorFailure(error.message));
      });
  };
};

export const processorSuccess = (data) => {
  return {
    type: PROCESSOR_SUCCESS,
    payload: data,
  };
};

export const processorFailure = (error) => {
  return {
    type: PROCESSOR_FAILED,
    payload: error,
  };
};
