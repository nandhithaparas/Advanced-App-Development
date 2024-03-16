import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className='fulllogin'>
    <div className="login">
    <div className="form">
    <div className="box">
      <div className="header">
      <img width="64" height="64" src="https://img.icons8.com/external-justicon-lineal-justicon/64/external-gift-thanksgiving-justicon-lineal-justicon.png" alt="external-gift-thanksgiving-justicon-lineal-justicon"/>
      {/*<img width="100" height="100" src="https://img.icons8.com/clouds/100/gift.png" alt="gift"/>*/}
      <h1>LOGIN</h1>
      </div>
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <input className="signup-btn" type="submit" value="LOGIN" />
      </form>
    <br/>
   <p> No Account? Signup Now!</p>   
    </div>
    </div>
    </div>
    </div>
  )
}
