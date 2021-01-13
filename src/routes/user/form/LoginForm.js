import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import '../../../styles/user/form/auth.css';
import { fetchLogin } from "../../../redux";
import { connect } from "react-redux";

function LoginForm({ data, fetchLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {fetchLogin(email, password)};

  return (
    <div className='loginPage'>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <div className='login-auth'>
        <h1>~~ GigaComp ~~</h1>
        <br></br>
        <div className='formLogin'>
          <Link to='/'>
            <button className='crusialButton'>Back</button>
          </Link>
          <br></br>
          <br></br>
          <input
            type='text'
            placeholder='Email'
            className='crusialInput'
            onChange={event => {
              setEmail(event.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <input
            type='password'
            placeholder='Password'
            className='crusialInput'
            onChange={event => {
              setPassword(event.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <Link to='/'>
            <button className='crusialButton' onClick={login}>
              Login
            </button>
          </Link>
          <br></br>
          <br></br>
          Don't have an Account?
          <br></br>
          <br></br>
          <Link to='/register'>
            <button className='crusialButton'>Register</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    data: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (email, password) => dispatch(fetchLogin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);