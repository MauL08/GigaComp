import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import * as CgIcons from 'react-icons/cg';
import { IconContext } from 'react-icons';
import '../../styles/user/profile.css';

export default function Profile() {
  return (
    <div>
      <NavBar />
      <div className='profileDiv'>
        <IconContext.Provider value={{ size: '200px' }}>
          <div className='profileDetail'>
            <h1>Profile User</h1>
            <br></br>
            <CgIcons.CgProfile />
            <div className='userDetail'>
              <h3>Username : ---</h3>
              <h3>Email : ---</h3>
              <h3>Address : ---</h3>
              <h3>Phone : ---</h3>
            </div>
            <Link to='/profile/edit'>
              <button className='editProfileButton'>Edit Profile</button>
            </Link>
          </div>
        </IconContext.Provider>
      </div>
      <div className='paymentStatus'>
        <div className='paymentDetail'>
          <h1>Payment Status</h1>
          <div className='paymentTableDiv'>
            <table className='paymentTable'>
              <tr>
                <td className='tableControl1'>Waiting</td>
                <td className='tableControl2'>Confirmed</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
