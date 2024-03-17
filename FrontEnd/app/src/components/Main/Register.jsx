import React from 'react'
import "./Login.css"

export default function Register() {

  return (
    <div className='fulllogin'>
    <div className="login">
    <div className="form">
    <div className="box">
      <div className="header">
      <img width="64" height="64" src="https://img.icons8.com/external-justicon-lineal-justicon/64/external-gift-thanksgiving-justicon-lineal-justicon.png" alt="external-gift-thanksgiving-justicon-lineal-justicon"/>
      <h1>SIGN UP</h1>
      </div>
    
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text"  placeholder="Name" />
        </div>
        <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email"  placeholder="Email" />
      </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <input className="signup-btn" type="submit" value="SIGNUP" />
      </form>
    <p style={{textDecoration:'none'}} > Already Have an account? Login</p>
      
    </div>
    </div>
    </div>
    </div>
  )
}
