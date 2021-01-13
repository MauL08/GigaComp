import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import * as CgIcons from 'react-icons/cg';
import { IconContext } from 'react-icons';
import '../../styles/user/profile.css';
import { fetchProfile, fetchPostAddress, fetchGetPayment } from "../../redux";
import { connect } from "react-redux";

function Profile({ profileData, fetchProfile,paymentData, fetchPostAddress, fetchGetPayment}) {

  const [alamat, setAlamat] = useState();
  const [kelurahan, setKelurahan] = useState();
  const [kecamatan, setKecamatan] = useState();
  const [kota, setKota] = useState();
  const [provinsi, setProvinsi] = useState();
  
  useEffect(() => {
    fetchProfile();
    fetchGetPayment();
  }, []);

  const addAddress = () =>{
    fetchPostAddress(alamat, kelurahan, kecamatan, kota, provinsi)
    alert("address updated")
    window.location.reload()
  }

  return (
    <div>
      <NavBar />
      <div className='profileController'>
        <div className='profileDiv'>
          <IconContext.Provider value={{ size: '200px' }}>
            <div className='profileDetail'>
              <h1>Profile User</h1>
              <br></br>
              <CgIcons.CgProfile />
              <div className='userDetail'>
                <h3>Username : {profileData.data[0] && profileData.data[0].name}</h3>
                <h3>Email : {profileData.data[0] && profileData.data[0].email}</h3>
                <h3>Phone : {profileData.data[0] && profileData.data[0].phone}</h3>
              </div>
              <Link to='/profile/edit'>
                <button className='editProfileButton'>Edit Profile</button>
              </Link>
            </div>
          </IconContext.Provider>
        </div>
        <div className='paymentStatus'>
          <div className='paymentDetail'>
            <h1>Transaction History</h1>
            <div className='tableHistoryController'>
              <table className='historyList'>
                <tr className='trTitle'>
                  <td>No</td>
                  <td>Product</td>
                  <td>Status</td>
                </tr>
                {paymentData.data.map((order, index) => (
                  <tr>
                    <Link to={`/payment/${order._id.$oid}`}>
                  <td>{index+1}</td>
                  <td>{order._id.$oid}</td>
                  <td>{order.status}</td>
                </Link>
                </tr>
                ))}
                
              </table>
            </div>
            <h3>alamat</h3>
          <input type='text' placeholder='Type Here!' onChange={event => {
                  setAlamat(event.target.value);
                }}></input>
                <h3>kelurahan</h3>
          <input type='text' placeholder='Type Here!' onChange={event => {
                  setKelurahan(event.target.value);
                }}></input>
                <h3>kecamatan</h3>
          <input type='text' placeholder='Type Here!' onChange={event => {
                  setKecamatan(event.target.value);
                }}></input>
                <h3>kota</h3>
          <input type='text' placeholder='Type Here!' onChange={event => {
                  setKota(event.target.value);
                }}></input>
                <h3>provinsi</h3>
          <input type='text' placeholder='Type Here!' onChange={event => {
                  setProvinsi(event.target.value);
                }}></input>
                <br/>
                <br/>
                <button className='searchProduct' onClick={addAddress}>tambahkan alamat</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profileData: state.profile,
    paymentData: state.payment
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: () => dispatch(fetchProfile()),
    fetchGetPayment: () => dispatch(fetchGetPayment()),
    fetchPostAddress: (alamat, kelurahan, kecamatan, kota, provinsi) => dispatch(fetchPostAddress(alamat, kelurahan, kecamatan, kota, provinsi))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);