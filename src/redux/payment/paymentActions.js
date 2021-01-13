import { PAYMENT_SUCCESS, PAYMENT_FAILED } from "./paymentTypes";
import axios from "axios";

export const fetchPayment = (address_id) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:6969/orders",{
        address_id
      }, {
        withCredentials: true
      })
      .then((response) => {
        // response.data is the users
        const payments = response.data;
        dispatch(paymentSuccess(payments));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(paymentFailure(error.message));
      });
  };
};
export const fetchGetPayment = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:6969/orders", {
        withCredentials: true
      })
      .then((response) => {
        // response.data is the users
        const payments = response.data;
        dispatch(paymentSuccess(payments));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(paymentFailure(error.message));
      });
  };
};
export const fetchSpecificPayment = (id) => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:6969/orders", {
        withCredentials: true
      })
      .then((response) => {
        // response.data is the users
        const payments = response.data;
        const specifics = payments.find(x => x._id.$oid === id);
        dispatch(paymentSuccess(specifics));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(paymentFailure(error.message));
      });
  };
};

export const paymentSuccess = (data) => {
  return {
    type: PAYMENT_SUCCESS,
    payload: data,
  };
};

export const paymentFailure = (error) => {
  return {
    type: PAYMENT_FAILED,
    payload: error,
  };
};
