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
      <div className='profileController'>
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
            <h1>Transaction History</h1>
            <div className='tableHistoryController'>
              <table className='historyList'>
                <tr className='trTitle'>
                  <td>No</td>
                  <td>Product</td>
                  <td>Status</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>product_name</td>
                  <td>product_status</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>product_name</td>
                  <td>product_status</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>product_name</td>
                  <td>product_status</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
