import { Link } from "react-router-dom";
import Envato from "../Envato.png";
import "./Signin.css"
import React, { useState } from 'react';

const Signin = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          const authenticated = authentication(email, password);
      
          if (authenticated) {
            window.location.href = '/AfterSignin/Web';
          } else {
            alert('Invalid Email/Password');
          }
        };
      
        const authentication = (email, password) => {
          if (
            (email === 'email@example.com' && password === '123456') ||
            (email === 'roshaan.rashid.r50@gmail.com' && password === '654321')
          ) {
            return true;
          } else {
            return false;
          }
        };
  return (
    <>
      <div className="body">
        <div className="container-login">
          <Link to="/">
            <img src={Envato} alt="Envato Logo" className="logo-login" />
          </Link>
          <h1 className="heading-login">Great to have you back!</h1>
          <div className="detail-login">
            <a href="https://accounts.google.com">
              <button className="google-login">
                <i className="fa fa-google" />
                Continue with Google
              </button>
            </a>
            <br />
            <a href="https://www.icloud.com">
              <button className="apple-login">
                <i className="fa fa-apple" />
                Continue with Apple
              </button>
            </a>
            <br />
            <a href="https://www.facebook.com">
              <button className="facebook-login">
                <i className="fa fa-facebook" />
                Continue with Facebook
              </button>
            </a>
            <br />
            <br />
            <hr className="hr-text" />
            <br />
          </div>
          <form className="signin" onSubmit={handleSubmit} >
            <label htmlFor="email" className="lbl-email-pass">
              E-mail
            </label>
            <input type="text" name="email" className="ipt-email-pass" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password" className="lbl-email-pass">
              Password
            </label>
            <input type="password" name="password" className="ipt-email-pass" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" defaultValue="Sign in" className="login-btn" />
          </form>
        </div>
      </div>
    </>
  );
}
export default Signin;
