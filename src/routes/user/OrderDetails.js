import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as CgIcons from 'react-icons/cg';
import { IconContext } from 'react-icons';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import '../../styles/user/editprofile.css';
import { fetchGetPayment } from "../../redux";
import { connect } from "react-redux";

function OrderDetails({ paymentData, fetchGetPayment}) {


    useEffect(() => {
        fetchGetPayment()
        console.log(paymentData)
      }, []);
  
  

  return (
    <div>
      <NavBar />
      <div>
      {/* <h3>address : {profileData.data[0] && profileData.data[0].name}</h3> */}
      <h3>pesanan : </h3>
      {paymentData.data.basket.map( produk =>
          <Link to={`/produk/${produk._id.$oid}`}>
            <h3>produk id : {produk._id.$oid}</h3>
          </Link>
      )}
      {/* <h3>Username : {profileData.data[0] && profileData.data[0].name}</h3>
      <h3>Username : {profileData.data[0] && profileData.data[0].name}</h3>
      <h3>Username : {profileData.data[0] && profileData.data[0].name}</h3> */}
      </div>
      <Footer />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    paymentData: state.payment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetPayment: () => dispatch(fetchGetPayment()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);