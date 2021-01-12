import { SPECIFIC_SUCCESS, SPECIFIC_FAILED } from "./specificTypes";
import axios from "axios";

export const fetchSpecific = (id) => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:6969/listings"
       )
      .then((response) => {
        // response.data is the users
        const listing = response.data;
        console.log(id)
        const specifics = listing.find(x => x._id.$oid === id);
        console.log(specifics)
        dispatch(specificSuccess(specifics));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(specificFailure(error.message));
      });
  };
};

export const specificSuccess = (data) => {
  return {
    type: SPECIFIC_SUCCESS,
    payload: data,
  };
};

export const specificFailure = (error) => {
  return {
    type: SPECIFIC_FAILED,
    payload: error,
  };
};
