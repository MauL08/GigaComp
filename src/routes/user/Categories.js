import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import '../../styles/user/categories.css';

export default function Categories() {
  return (
    <div>
      <NavBar />
      <div className='categories-div'>
        <div className='categories-list'>
          <h1>CATEGORY LIST</h1>
          <br></br>
          <br></br>
          <div className='table-div'>
            <table className='categories-table'>
              <tr>
                <td>
                  <Link to='/vga'>
                    <a>VGA</a>
                  </Link>
                </td>
                <td>
                  <Link to='/hard-disk'>
                    <a>HDD</a>
                  </Link>
                </td>
                <td>
                  <Link to='/ssd'>
                    <a>SSD</a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to='/processor'>
                    <a>Processor</a>
                  </Link>
                </td>
                <td>
                  <Link to='/ram'>
                    <a>RAM</a>
                  </Link>
                </td>
                <td>
                  <Link to='/power-supply'>
                    <a>Power Supply</a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link to='/motherboard'>
                    <a>Motherboard</a>
                  </Link>
                </td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
