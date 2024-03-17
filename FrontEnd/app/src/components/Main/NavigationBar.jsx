import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './NavBar.css';
import Login from './Login';
import Register from './Register';

// function Homes()
// {
//   return(
//    <div>
//   hii
//    </div>
//   )
// }

export default function NavigationBar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img width="50" height="50" src="https://asset.brandfetch.io/idHx7ZZZxE/idzzh0l_ji.png" alt="gift" className="logo" />
        <span>THE GIFT CRAFT</span>
      </div>
      <div className="navbar-right">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
       <Link to="/" style={{textDecoration:'none'}}> <span>Home</span></Link>
       <Link to="/login" style={{textDecoration:'none'}}> <span>Login</span></Link>
        <Link to="/register" style={{textDecoration:'none'}}><span>Sign Up</span></Link>
      </div>
    </div>
    
  )
}



