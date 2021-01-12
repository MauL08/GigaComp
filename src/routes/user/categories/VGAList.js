import React, {useEffect} from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import product1 from "../../../img/product/vga1.jpg";
import product2 from "../../../img/product/ssd1.jpg";
import product3 from "../../../img/product/processor1.jpg";
import "../../../styles/user/categories/productList.css";
import { Link } from "react-router-dom";
import { fetchVGA } from "../../../redux";
import { connect } from "react-redux";

function VGAList({ vgaData, fetchVGA}) {

  useEffect(() => {
    fetchVGA();
  }, []);

  const getList = (data) => {
    var out=[];
    var count = 0;
    for (let i = 0; i < data.length; i += 4) {
      out[count] = data.slice(i, i + 4);
      count++;
    }
    return out;
  };

  const data = getList(vgaData.data);
  return (
    <div>
      <NavBar />
      <div className="categoryTitle">
        <h1>VGA List</h1>
      </div>
      <div className="allProduct-content">
        <table className="product-table">
        {data.map(row => (
            <tr>
              {row.map(item => (
                <td>
                  <Link to={`/product/${item._id.$oid}`}>
                <div className="image-product">
                  <img src={product3} width="180"></img>
                  <br></br>
                  <span>{item.nama_produk}</span>
                </div>
                </Link>
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
    vgaData: state.vga,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVGA: () => dispatch(fetchVGA()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VGAList);
