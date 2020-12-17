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
          <br></br>
          <p>There is no Product in the Cart!</p>
          <br></br>
          <br></br>
          <Link to='/'>
            <button>Search & Add Product</button>
          </Link>
          <br></br>
          <br></br>
          <Link to='/payment'>
            <button>Go To Payment</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
