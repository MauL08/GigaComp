import { NAVIGATION_SUCCESS, NAVIGATION_FAILED } from "./navigationTypes";
import axios from "axios";

export const fetchNavigation = () => {
  return (dispatch) => {
    axios
      .get("http://192.168.100.89:6969/users/navigation"
       )
      .then((response) => {
        // response.data is the users
        const navigations = response.data;
        dispatch(navigationSuccess(navigations));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(navigationFailure(error.message));
      });
  };
};

export const navigationSuccess = (data) => {
  return {
    type: NAVIGATION_SUCCESS,
    payload: data,
  };
};

export const navigationFailure = (error) => {
  return {
    type: NAVIGATION_FAILED,
    payload: error,
  };
};
