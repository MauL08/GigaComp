import { ADDRESS_SUCCESS, ADDRESS_FAILED } from "./addressTypes";
import axios from "axios";

export const fetchPostAddress = (alamat, kelurahan, kecamatan, kota, provinsi) => {
  return (dispatch) => {

    axios
      .post("http://127.0.0.1:6969/address", {
        alamat,
        kelurahan, 
        kecamatan, 
        kota, 
        provinsi
      },
      {
        withCredentials: true
      })
      .then((response) => {
        // response.data is the users
        const addresss = response.data;
        dispatch(addressSuccess(addresss));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(addressFailure(error.message));
      });
  };
};
export const fetchAddress = () => {
  return (dispatch) => {

    axios
      .get("http://127.0.0.1:6969/address",
      {
        withCredentials: true
      })
      .then((response) => {
        // response.data is the users
        const addresss = response.data;
        dispatch(addressSuccess(addresss));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(addressFailure(error.message));
      });
  };
};

export const addressSuccess = (data) => {
  return {
    type: ADDRESS_SUCCESS,
    payload: data,
  };
};

export const addressFailure = (error) => {
  return {
    type: ADDRESS_FAILED,
    payload: error,
  };
};
