import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import product3 from '../../img/product/vga1.jpg';
import '../../styles/user/product.css';
import { fetchSpecific } from "../../redux";
import { connect } from "react-redux";

function Product({specificData, fetchSpecific, match}) {
  const [stock, setStock] = useState(999);
  const [cart, setCart] = useState(0);

  const buttonActive = () => {
    setStock(stock - 1);
    setCart(cart + 1);
    alert('Product Added to Cart!');
  };

  useEffect(() => {
    fetchSpecific(match.params.id);
  }, []);

  return (
    <div className='productPage'>
        <NavBar />
        <div className='productDetail'>
          <div className='productImage'>
            <h1>{specificData.data.nama_produk}</h1>
            <h3>Rating : {specificData.data.rating}</h3>
            <br>
            </br>
            <img src={product3} width='500'></img>
            <br></br>
            <h2>Harga : Rp.{specificData.data.harga}</h2>
            <h3>Stock : {stock}</h3>
            <br></br>
            <button className='addCartButton' onClick={buttonActive}>
              Add to Cart
            </button>
          </div>
          <div className='productInfo'>
            <div className='productSpec'>
              <h1>Description</h1>
              <h3>
              {specificData.data.deskripsi}
              </h3>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    specificData: state.specific,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpecific: (id) => dispatch(fetchSpecific(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);