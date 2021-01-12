import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import "../../styles/user/categories.css";

export default function Categories() {
  return (
    <div>
      <NavBar />
      <div className="categories-div">
        <div className="categories-list">
          <h1>CATEGORY LIST</h1>
          <br></br>
          <div className="table-div">
            <table className="categories-table">
              <tr>
                <td>
                  <Link to="/vgaList">
                    <a>VGA</a>
                  </Link>
                </td>
                <td>
                  <Link to="/productList">
                    <a>HDD</a>
                  </Link>
                </td>
                <td>
                  <Link to="/productList">
                    <a>SSD</a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/processorList">
                    <a>Processor</a>
                  </Link>
                </td>
                <td>
                  <Link to="/ramList">
                    <a>RAM</a>
                  </Link>
                </td>
                <td>
                  <Link to="/psuList">
                    <a>Power Supply</a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link to="/motherboardList">
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
