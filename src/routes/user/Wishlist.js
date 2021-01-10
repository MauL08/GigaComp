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
          {/*Kondisi Wishlist Ada*/}
          <div className='product-wishlist'>
            <table  className='wishlistTable'>
              <tr className='trTitle'>
                <td>Image</td>
                <td>Name</td>
                <td>Price</td>
              </tr>
              <tr>
                <td>product_image</td>
                <td>product_name</td>
                <td>product_price</td>
                <td><button className='deleteWishlistButton'>Delete</button></td>
              </tr>
              <tr>
                <td>product_image</td>
                <td>product_name</td>
                <td>product_price</td>
                <td><button className='deleteWishlistButton'>Delete</button></td>
              </tr>
              <tr>
                <td>product_image</td>
                <td>product_name</td>
                <td>product_price</td>
                <td><button className='deleteWishlistButton'>Delete</button></td>
              </tr>
            </table>
          </div>
          <br></br>
          <br></br>
          {/*Kondisi Wishlist Kosong*/}
          <p>There is no Wishlist here!</p>
          <Link to='/'>
            <button className='searchWishlist'>Search & Add Product</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
