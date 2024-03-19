import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className='fulllogin'>
      <div className="login">
        <div className="form">
          <div className="box">
            <div className="header">
              <img width="64" height="64" src="https://img.icons8.com/external-justicon-lineal-justicon/64/external-gift-thanksgiving-justicon-lineal-justicon.png" alt="external-gift-thanksgiving-justicon-lineal-justicon"/>
              <h1>LOGIN</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input 
                  type="email" 
                  placeholder="Email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input 
                  type="password" 
                  placeholder="Password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <input className="signup-btn" type="submit" value="LOGIN" />
            </form>
            <br/>
            <Link to="/register" style={{textDecoration:'none'}}>
              <p>Don't have an Account? Register Now!</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
