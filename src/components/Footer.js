import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer-detail'>
      <div className='footer-content'>
        <span style={{ fontSize: '36px' }}>GigaComp E-Commerce</span>
        <div className='contactUs'>
          <div className='contactContent'>
            <h2>Contact Us</h2>
            <p>Gmail : farhandewanta11@gmail.com</p>
            <p>Phone : +62 1839012894</p>
          </div>
        </div>
        <span>This is for Assignment Only!</span>
      </div>
    </div>
  );
}
