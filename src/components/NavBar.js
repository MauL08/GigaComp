import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import Logo from '../img/logo.png';
import './navbar.css';
import { fetchProfile } from "../redux";
import { connect } from "react-redux";

function NavBar({ profileData, fetchProfile}) {

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className='navbar'>
      <div className='navbar-component tooltip'>
        <img src={Logo} height='80'></img>
        <Link to='/'>
          <a>Home</a>
        </Link>
        <Link to='/categories'>
          <a>Categories</a>
        </Link>
        
          <div className='search-div'>
            <input
              type='text'
              placeholder='Search Here!'
              className='search-navbar'
            ></input>
            <Link to='/result'>
              <a>
                <BiIcons.BiSearchAlt />
              </a>
            </Link>
          </div>
          <Link to='/wishlist'>
            <a>
              <BsIcons.BsFillHeartFill />
            </a>
          </Link>
          <div className='cart-div'>
            <Link to='/cart'>
              <a>
                <AiIcons.AiOutlineShoppingCart />
              </a>
            </Link>
            <span>0</span>
          </div>
          <div className='profile-div'>
            {/* !! if the login is done, then route to the profile page !! */}
            {
              document.cookie ? 
              <Link to='/profile'>
              <a>
                <CgIcons.CgProfile />
              </a>
            </Link> :
              <Link to='/login'>
              <a>
                <CgIcons.CgProfile />
              </a>
            </Link>
            }
            {profileData.data[0]?
             <span>{profileData.data[0].name}</span>:
              <span>user</span>}
            
          </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
