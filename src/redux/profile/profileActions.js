import { PROFILE_SUCCESS, PROFILE_FAILED } from "./profileTypes";
import axios from "axios";

export const fetchProfile = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:6969/users/profile"
       )
      .then((response) => {
        // response.data is the users
        const profiles = response.data;
        dispatch(profileSuccess(profiles));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(profileFailure(error.message));
      });
  };
};

export const profileSuccess = (data) => {
  return {
    type: PROFILE_SUCCESS,
    payload: data,
  };
};

export const profileFailure = (error) => {
  return {
    type: PROFILE_FAILED,
    payload: error,
  };
};
