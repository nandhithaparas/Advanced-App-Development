import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.css';
import Menubar from './Menubar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const cart = useSelector((state) => state.allCart.carts);

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
          <Link to="/wishlist" style={{ textDecoration: 'none' }}><span><FavoriteBorderOutlinedIcon/></span></Link>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <span className='cart-box-in'>
              <ShoppingCartIcon/>
              {cart.length > 0 && <p className="badge">{cart.length}</p>}
            </span>
          </Link>
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
              <MenuItem onClick={handleClose}>
              <Link to="/" style={{ textDecoration: 'none', color: 'red' }}>
                Logout
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
