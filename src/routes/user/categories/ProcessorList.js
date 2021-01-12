import React, {useEffect} from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import product1 from "../../../img/product/vga1.jpg";
import product2 from "../../../img/product/ssd1.jpg";
import product3 from "../../../img/product/processor1.jpg";
import "../../../styles/user/categories/productList.css";
import { Link } from "react-router-dom";
import { fetchProcessor } from "../../../redux";
import { connect } from "react-redux";

function ProcessorList({ processorData, fetchProcessor}) {

  useEffect(() => {
    fetchProcessor();
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

  const data = getList(processorData.data);
  return (
    <div>
      <NavBar />
      <div className="categoryTitle">
        <h1>Processor List</h1>
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
    processorData: state.processor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProcessor: () => dispatch(fetchProcessor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcessorList);
