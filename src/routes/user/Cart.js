import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import '../../styles/user/cart.css';

export default function Cart() {
  return (
    <div>
      <NavBar />
      <div className='cart-page'>
        <div className='cart-content'>
          <h1>CART LIST</h1>
          {/*Kondisi Cart Ada*/}
          <div className='product-cart'>
            <table  className='cartTable'>
              <tr className='trTitle'>
                <td>Image</td>
                <td>Name</td>
                <td>Price</td>
              </tr>
              <tr>
                <td>product_image</td>
                <td>product_name</td>
                <td>product_price</td>
                <td><button className='deleteCartButton'>Delete</button></td>
              </tr>
              <tr>
                <td>product_image</td>
                <td>product_name</td>
                <td>product_price</td>
                <td><button className='deleteCartButton'>Delete</button></td>
              </tr>
              <tr>
                <td>product_image</td>
                <td>product_name</td>
                <td>product_price</td>
                <td><button className='deleteCartButton'>Delete</button></td>
              </tr>
            </table>
          </div>
          <br></br>
          <br></br>
          {/* Kondisi Cart Tidak Ada*/}
          <p>There is no Product in the Cart!</p>
          <Link to='/'>
            <button className='searchProduct'>Search & Add Product</button>
          </Link>
          <br></br>
          <br></br>
          <Link to='/payment'>
            <button className='paymentProduct'>Go To Payment</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
