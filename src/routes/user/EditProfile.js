import React from 'react';
import { Link } from 'react-router-dom';
import * as CgIcons from 'react-icons/cg';
import { IconContext } from 'react-icons';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import '../../styles/user/editprofile.css';

export default function EditProfile() {
  const editActive = () => {
    alert('Profile updatted!');
  };

  return (
    <div>
      <NavBar />
      <div className='editProfileDiv'>
        <IconContext.Provider value={{ size: '200px' }}>
          <div className='editProfileDetail'>
            <Link to='/profile'>
              <button className='backProfileButton'>Back</button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <h1>Edit Your Profile</h1>
            <br></br>
            <CgIcons.CgProfile />
            <div className='userDetailForm'>
              <h3>Username</h3>
              <input type='text' placeholder='Type Here!'></input>
              <h3>Email</h3>
              <input type='text' placeholder='Type Here!'></input>
              <h3>Address</h3>
              <textarea
                type='text'
                placeholder='Type Here!'
                className='inputAddressText'
              ></textarea>
              <h3>Phone</h3>
              <input type='text' placeholder='Type Here!'></input>
            </div>
            <Link to='/profile'>
              <button className='editProfileButton' onClick={editActive}>
                Confirm Edit
              </button>
            </Link>
          </div>
        </IconContext.Provider>
      </div>
      <Footer />
    </div>
  );
}
