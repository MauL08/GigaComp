import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import '../../styles/user/cart.css';
import { fetchCart, fetchAddress, fetchPayment } from "../../redux";
import { connect } from "react-redux";

function Cart({ cartData, addressData, fetchCart, fetchAddress,  fetchPayment, history}) {
  const [alamat, setAlamat] = useState();

  useEffect(() => {
    fetchCart();
    fetchAddress();
  }, []);

  const payment = () =>{
    fetchPayment(alamat)
    history.push('/payment')
  }


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
              {
                cartData.data.content && cartData.data.content.map(
                  cart => (
              <tr>
                <td>{cart.product_id.$oid}</td>
                <td>{cart.image}</td>
                <td>{cart.count}</td>
                <td><button className='deleteCartButton'>Delete</button></td>
              </tr>
                  )
                )
              }
            </table>
          </div>
          <br></br>
          <br></br>
          {/* Kondisi Cart Tidak Ada*/}
          {!cartData.data.content && <p>There is no Product in the Cart!</p>}
          <select name="address" id="address" onChange={event => {
                  setAlamat(event.target.value);
                }}>
            {
              addressData.data.map(
                address => (
                  <option value={address._id.$oid}>{address.alamat}</option>
                )
              )
            }
          </select>
          <br></br>
          <br></br>
          <Link to='/'>
            <button className='searchProduct'>Search & Add Product</button>
          </Link>
          <br></br>
          <br></br>
            <button className='paymentProduct' onClick={payment}>Go To Payment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cart,
    addressData: state.address
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    fetchAddress: () => dispatch(fetchAddress()),
    fetchPayment: (address_id) => dispatch(fetchPayment(address_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
