import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "../../styles/admin/page.css";

function AdminPage() {
  return (
    <div>
      <div className="adminPage">
        <h1>Welcome, Admin</h1>
        <h3>User Confirmation Table</h3>
        <table className="tableAdmin">
          <tr className="trTitle">
            <td>No</td>
            <td>User</td>
            <td>Confirmation</td>
            <td>Status</td>
          </tr>
          <tr>
            <td>1</td>
            <td>user_name</td>
            <td>user_image</td>
            <td className="test">
              <button className="adminConfirmButton">Confirm</button>
              <button className="adminCancelButton">Cancel</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>user_name</td>
            <td>user_image</td>
            <td>
              <button className="adminConfirmButton">Confirm</button>
              <button className="adminCancelButton">Cancel</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>user_name</td>
            <td>user_image</td>
            <td className="test">
              <button className="adminConfirmButton">Confirm</button>
              <button className="adminCancelButton">Cancel</button>
            </td>
          </tr>
        </table>
        <div className='adminProduct'>
        <h1>Add Product</h1>
            <div className='adminAddControl'>    
                <h2>Image </h2>
                <input type='file'></input>
                <br/>
                <h2>Name </h2>
                <input type='text' className='inputAddProduct' placeholder='Type Here!'></input>
                <br/>
                <h2>Price </h2>
                <input type='text' className='inputAddProduct' placeholder='Type Here!'></input>
                <br/>
                <h2>Stock </h2>
                <input type='number' className='inputAddProduct' placeholder='Type Here!'></input>
                <br/>
                <h2>Description </h2>
                <textarea type='text' className='inputAddProduct' placeholder='Type Here!'></textarea>
                <br/>
                <br/>
                <button className='addProductButton'>Add Product</button>
            </div>
        </div>
        <button className='adminLogOut'>Log Out</button>
      </div>
      <Footer />
    </div>
  );
}

export default AdminPage;
