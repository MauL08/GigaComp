import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/homepage.css';
import product1 from '../img/product/processor1.jpg';
import product2 from '../img/product/ssd1.jpg';
import product3 from '../img/product/vga1.jpg';
import Footer from '../components/Footer';
import { fetchProduct } from "../redux";
import { connect } from "react-redux";

function HomePage({ productData, fetchProduct }) {
  useEffect(() => {
    fetchProduct();
    
  }, []);

  const getList = (data) => {
    var out=[];
    var count = 0;
    for (let i = 0; i < data.length; i += 5) {
      out[count] = data.slice(i, i + 5);
      count++;
    }
    return out;
  };

  const data = getList(productData.data);

  return (
    <div className='home-content'>
      <NavBar />
      <div className='firstAppear'>
        <div className='promo-div'>
          <span>No Promo</span>
        </div>
        <div className='title-div'>
          <span className='welcome'>Welcome To</span>
          <br></br>
          <span className='gigacomp'>GigaComp!</span>
        </div>
      </div>
      <div className='content-page'>
        <div className='product-list'>
          <div className='image-product'>
            <img src={product1} width='180'></img>
            <br></br>
            <span>Intel Core i9 10900K</span>
          </div>
          <div className='image-product'>
            <img src={product2} width='180'></img>
            <br></br>
            <span>SSD Adata 1 Terrabyte</span>
          </div>
          <div className='image-product'>
            <Link to='/product'>
              <img src={product3} width='180'></img>
              <br></br>
              <span>NVIDIA GeForce RTX 3080</span>
            </Link>
          </div>
        </div>
        <div className='popular-product'>
          <span>POPULAR PRODUCT'S</span>
          <br></br>
          <br></br>
          <div className='popular-product-list'>
            <div className='image-product'>
              <img src={product1} width='180'></img>
              <span>Intel Core i9 10900K</span>
            </div>
            <div className='image-product'>
              <img src={product2} width='180'></img>
              <span>SSD Adata 1 Terrabyte</span>
            </div>
          </div>
        </div>
      </div>
      <div className='content-allProduct'>
        <div className='allProduct-title'>=== ALL PRODUCT'S ===</div>
      </div>
      <div className='allProduct-content'>
      <table className="product-table">
          {data.map(row => (
            <tr>
              {row.map(item => (
                <td>
                <div className="image-product">
                  <img src={product3} width="180"></img>
                  <br></br>
                  <span>{item.nama_produk}</span>
                </div>
              </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
      <Footer />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    productData: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: () => dispatch(fetchProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
