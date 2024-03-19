import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Menubar from './Menubar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          <Link to="/home" style={{ textDecoration: 'none' }}><span>Home</span></Link>
          <span className="menu-dropdown" onClick={toggleMenu}>
            <span>Menu</span>
          </span>
          <Link to="/cart" style={{ textDecoration: 'none' }}><span><ShoppingCartIcon/></span></Link>
          <span onClick={handleClick}><AccountCircleIcon/></span>
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                My Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Login/Signup
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
      {/* Render the menu component below the navigation bar */}
      {showMenu && <Menubar />}
    </nav>
  )
}
