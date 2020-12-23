import React, { useState } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import product3 from '../../img/product/vga1.jpg';
import '../../styles/user/product.css';

export const CartContext = React.createContext();

export default function Product() {
  const [stock, setStock] = useState(999);
  const [cart, setCart] = useState(0);

  const buttonActive = () => {
    setStock(stock - 1);
    setCart(cart + 1);
    alert('Product Added to Cart!');
  };

  return (
    <div className='productPage'>
      <CartContext.Provider value={cart}>
        <NavBar />
        <div className='productDetail'>
          <div className='productImage'>
            <h1>NVIDIA GeForce RTX 3080</h1>
            <br></br>
            <img src={product3} width='500'></img>
            <br></br>
            <h2>Rp 13.500.000,00</h2>
            <h3>Stock : {stock}</h3>
            <br></br>
            <button className='addCartButton' onClick={buttonActive}>
              Add to Cart
            </button>
          </div>
          <div className='productInfo'>
            <div className='productSpec'>
              <h1>Specification</h1>
              <h3>CUDA Cores</h3>
              <p>8704</p>
              <h3>Memory Size</h3>
              <p>10 GB</p>
              <h3>Boost Click</h3>
              <p>1.71 GHz</p>
              <h3>Memory Type</h3>
              <p>GDDR 6x</p>
            </div>
          </div>
        </div>
        <div className='productDesc'>
          <div className='productDescTitle'>=== Description ===</div>
        </div>
        <div className='productDescDiv'>
          <div className='productDescDetail'>
            <p>The Description is Here!</p>
            <p>The Description is Here!</p>
            <p>The Description is Here!</p>
            <p>The Description is Here!</p>
          </div>
        </div>
      </CartContext.Provider>
      <Footer />
    </div>
  );
}
