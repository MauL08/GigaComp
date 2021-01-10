import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import '../../../styles/user/form/auth.css';

export default function RegisterForm() {
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPass, setRegPass] = useState('');
  const [regRePass, setRegRePass] = useState('');

  const regAuth = () => {};

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
              setRegName(event.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <input
            type='text'
            className='crusialInput'
            placeholder='Email'
            onChange={event => {
              setRegEmail(event.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <input
            type='password'
            className='crusialInput'
            placeholder='Password'
            onChange={event => {
              setRegPass(event.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <input
            type='password'
            className='crusialInput'
            placeholder='Confirm Password'
            onChange={event => {
              setRegRePass(event.target.value);
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
