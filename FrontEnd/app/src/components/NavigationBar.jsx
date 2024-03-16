import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavigationBar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img width="50" height="50" src="https://img.icons8.com/quill/50/gift.png" alt="gift" className="logo" />
        <span>THE GIFT STUDIO</span>
      </div>
      <div className="navbar-right">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
        <span>Login</span>
        <span>Sign Up</span>
      </div>
    </div>
  );
}

export default NavigationBar;
