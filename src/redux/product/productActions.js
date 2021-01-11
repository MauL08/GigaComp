import { PRODUCT_SUCCESS, PRODUCT_FAILED } from "./productTypes";
import axios from "axios";

export const fetchProduct = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:6969/listings")
      .then((response) => {
        // response.data is the users
        const products = response.data;
        dispatch(productSuccess(products));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(productFailure(error.message));
      });
  };
};

export const productSuccess = (data) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: data,
  };
};

export const productFailure = (error) => {
  return {
    type: PRODUCT_FAILED,
    payload: error,
  };
};
