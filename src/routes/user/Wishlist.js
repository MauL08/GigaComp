import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import '../../styles/user/wishlist.css';

export default function Wishlist() {
  return (
    <div>
      <NavBar />
      <div className='wishlist-page'>
        <div className='wishlist-content'>
          <h1>WISHLIST</h1>
          <br></br>
          <p>There is no Wishlist here!</p>
          <br></br>
          <br></br>
          <Link to='/'>
            <button>Search & Add Product</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
