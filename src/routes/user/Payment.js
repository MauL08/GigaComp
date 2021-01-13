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
          <h1>Halaman Pembayaran</h1>
          <br></br>
          <div className='totalAmount'>
            <h1>Total Harga</h1>
            <h3>Rp 999.999,00</h3>
          </div>
          <br></br>
          <div className='accountNumber'>
          <h4>Bayar Kesini</h4>
          <div className='paymentMethod'>
              <table className='paymentList'>
                <tr className='trTitle'>
                  <td>Bank</td>
                  <td>Virtual Account Number</td>
                </tr>
                <tr>
                  <td>Bank Mandiri</td>
                  <td>856734128532</td>
                </tr>
                <tr>
                  <td>Bank BNI</td>
                  <td>876932451688</td>
                </tr>
                <tr>
                  <td>Bank BCA</td>
                  <td>893416735548</td>
                </tr>
              </table>
          </div>
          </div>
          <br></br>
          <div className='uploadTransaction'>
            <h1>Bukti Transaksi</h1>
            <div className='uploadFile'>
              <p>Upload Bukti Transaksi untuk melanjutkan Pembayaran...</p>
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
