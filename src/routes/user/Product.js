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
              <h1>Description</h1>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis lacus porttitor, pretium nibh eu, mattis augue. Proin lorem lectus, sodales in tincidunt at, varius quis tortor. Vivamus consectetur eu ipsum nec malesuada. Donec rhoncus arcu in lobortis lacinia. In at felis ut odio scelerisque sollicitudin. Curabitur sed diam justo. Ut efficitur nibh nibh, ac lobortis ipsum venenatis sollicitudin. Aliquam ullamcorper, est pharetra bibendum rutrum, tortor mi lacinia orci, in dignissim sem ligula at ex. Ut placerat metus et enim laoreet, at accumsan erat fermentum. Vivamus bibendum malesuada dolor, non ornare mauris semper vitae. Nullam blandit libero et faucibus vehicula. In placerat nisi vel ipsum viverra condimentum. Aliquam erat volutpat.
                Fusce aliquam pretium consequat. Suspendisse tristique tempor accumsan. Nam neque lectus, facilisis vel dui sit amet, imperdiet pharetra lacus. Nullam faucibus sed ex sed tristique. Aliquam vel nisi enim. Etiam euismod vestibulum diam non posuere. Sed fringilla tempus finibus. Nulla tincidunt neque tempor eros tempus sodales. Cras vel scelerisque arcu.
              </h3>
            </div>
          </div>
        </div>
      </CartContext.Provider>
      <Footer />
    </div>
  );
}
