import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Menu from './Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-left">
          <img width="50" height="50" src="https://asset.brandfetch.io/idHx7ZZZxE/idzzh0l_ji.png" alt="gift" className="logo" />
          <span>THE GIFT CRAFT</span>
        </div>
        <div className="navbar-right">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <Link to="/" style={{ textDecoration: 'none' }}><span>Home</span></Link>
          <span className="menu-dropdown" onClick={toggleMenu}>
            <span>Menu</span>
          </span>
          <Link to="/cart" style={{ textDecoration: 'none' }}><span><ShoppingCartIcon/></span></Link>
          <span><AccountCircleIcon/></span>
          <Link to="/" style={{ textDecoration: 'none' }}><span>Login/Signup</span></Link>
        </div>
      </div>
      {/* Render the menu component below the navigation bar */}
      {showMenu && <Menu />}
    </nav>
  )
}
