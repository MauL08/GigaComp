import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import '../.././styles/user/payment.css';

export default function Payment() {
  return (
    <div>
      <NavBar />
      <div className='paymentPage'>
        <div className='paymentDiv'>
          <h1>Payment Page</h1>
          <br></br>
          <div className='totalAmount'>
            <h1>Total Amount</h1>
            <h3>Rp 999.999,00</h3>
          </div>
          <br></br>
          <div className='accountNumber'>
            <h1>Account Number</h1>
            <h3>8219389089024</h3>
          </div>
          <br></br>
          <div className='uploadTransaction'>
            <h1>Transaction</h1>
            <div className='uploadFile'>
              <p>Upload an Proof of Payment to continue process...</p>
              <input type='file'></input>
            </div>
          </div>
          <Link to='/profile'>
            <button className='continueButton'>Continue</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
