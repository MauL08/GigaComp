import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

function Redirect() {
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: 'center', marginTop: '20vh' }}>URL NOT FOUND</h1>
      <Footer />
    </div>
  );
}

export default Redirect;
