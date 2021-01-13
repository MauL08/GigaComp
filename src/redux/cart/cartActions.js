import { CART_SUCCESS, CART_FAILED } from "./cartTypes";
import axios from "axios";

export const fetchCart = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:6969/basket", {
        withCredentials: true
      })
      .then((response) => {
        // response.data is the users
        const carts = response.data;
        dispatch(cartSuccess(carts));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(cartFailure(error.message));
      });
  };
};
export const fetchPostCart = (product_id) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:6969/basket",{
        product_id
      }, {
        withCredentials: true
      })
      .then((response) => {
        // response.data is the users
        const carts = response.data;
        dispatch(cartSuccess(carts));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(cartFailure(error.message));
      });
  };
};

export const cartSuccess = (data) => {
  return {
    type: CART_SUCCESS,
    payload: data,
  };
};

export const cartFailure = (error) => {
  return {
    type: CART_FAILED,
    payload: error,
  };
};
