import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import '../../../styles/user/form/auth.css';

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  const [token, setToken] = useState('');

  const loginAuth = () => {};

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
              setLoginEmail(event.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <input
            type='password'
            placeholder='Password'
            className='crusialInput'
            onChange={event => {
              setLoginPass(event.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <Link to='/'>
            <button className='crusialButton' onClick={loginAuth}>
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
