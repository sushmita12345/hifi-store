import './Navbar.css';
import React from "react";
import {IcRoundFavoriteBorder, IcOutlineShoppingCart, MdiMagnify} from '../../assets/Icon/icon';
import logo from '../../assets/Image/Logo/HIFI.png';
import {Link} from 'react-router-dom'

export function Navbar() {
  return (
    
    <nav className="home-navbar">
      <Link to="/"><img src={logo} class="logo" alt="logo" /></Link>
      <div className="nav-search-container">
        <input className="search-bar" type="search" placeholder="Search" />
        <MdiMagnify className="nav-search-icon"/>
      </div>
      <div className="btn-left">
        <button class="nav-btn">Login</button>
        <IcRoundFavoriteBorder className="nav-heart-icon" />
        <Link to="/cart"><IcOutlineShoppingCart className="nav-cart-icon" /></Link>
        {/* <IcRoundLogout className="nav-logout-icon"/> */}
      </div>
    </nav>
    
  )
}

