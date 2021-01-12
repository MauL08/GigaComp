import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as CgIcons from 'react-icons/cg';
import { IconContext } from 'react-icons';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import '../../styles/user/editprofile.css';
import { fetchProfile } from "../../redux";
import { connect } from "react-redux";

function EditProfile({ profileData, fetchProfile}) {

  const [name, setName] = useState(0);
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState(0);

  const editActive = () => {
    alert('Profile updatted!');
  };
  
  

  return (
    <div>
      <NavBar />
      <div className='editProfileDiv'>
          <div className='editProfileDetail'>
            <Link to='/profile'>
              <button className='backProfileButton'>Back</button>
            </Link>
            <br></br>
            <br></br>
            <h1>Edit Your Profile</h1>
            <div className='userDetailForm'>
              <h3>Username</h3>
              <input type='text' placeholder='Type Here!' onChange={event => {
                  setName(event.target.value);
                }}></input>
              <h3>Email</h3>
              <input type='text' placeholder='Type Here!' onChange={event => {
                  setEmail(event.target.value);
                }}></input>
              <h3>Address</h3>
              <textarea
                type='text'
                placeholder='Type Here!'
                className='inputAddressText'
              ></textarea>
              <h3>Phone</h3>
              <input type='text' placeholder='Type Here!' onChange={event => {
                  setPhone(event.target.value);
                }}></input>
            </div>
            <Link to='/profile'>
              <button className='editProfileButton' onClick={editActive}>
                Confirm Edit
              </button>
            </Link>
          </div>
      </div>
      <Footer />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    profileData: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: () => dispatch(fetchProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);