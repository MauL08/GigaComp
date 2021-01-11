import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import '../../../styles/user/form/auth.css';
import { fetchRegister } from "../../../redux";
import { connect } from "react-redux";

function RegisterForm({ data, fetchRegister}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [phone, setPhone] = useState('');

  const regAuth = () => {fetchRegister(phone, password, email, name)};

  return (
    <div className='registerPage'>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <div className='register-auth'>
        <h1>~~ GigaComp ~~</h1>
        <br></br>
        <div className='formRegister'>
          <Link to='/'>
            <button className='crusialButton'>Back</button>
          </Link>
          <br></br>
          <br></br>
          <input
            type='text'
            className='crusialInput'
            placeholder='Username'
            onChange={event => {
              setName(event.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <input
            type='text'
            className='crusialInput'
            placeholder='Email'
            onChange={event => {
              setEmail(event.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <input
            type='password'
            className='crusialInput'
            placeholder='Password'
            onChange={event => {
              setPass(event.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <input
            type='text'
            className='crusialInput'
            placeholder='input phone'
            onChange={event => {
              setPhone(event.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <Link to='/'>
            <button className='crusialButton' onClick={regAuth}>
              Register
            </button>
          </Link>
          <br></br>
          <br></br>
          Have an Account?
          <br></br>
          <br></br>
          <Link to='/login'>
            <button className='crusialButton'>Login</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    data: state.register,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRegister: (phone, password, email, name) => dispatch(fetchRegister(phone, password, email, name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
