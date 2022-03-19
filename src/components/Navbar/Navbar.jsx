import './Navbar.css';
import React from "react";
import {IcRoundFavoriteBorder, IcOutlineShoppingCart, MdiMagnify} from '../../assets/Icon/icon';

import logo from '../../assets/Image/Logo/HIFI.png';




export function Navbar() {
  return (
    <nav class="home-navbar">
      <img src={logo} class="logo" alt="logo" />
      <div className="nav-search-container">
        <input class="search-bar" type="search" placeholder="Search" />
        <MdiMagnify className="nav-search-icon"/>
      </div>
      <div class="btn-left">
        <button class="nav-btn">Login</button>
       
        <IcRoundFavoriteBorder className="nav-heart-icon" />
        <IcOutlineShoppingCart className="nav-cart-icon" />
        {/* <IcRoundLogout className="nav-logout-icon"/> */}
       
        <span class="material-icons nav-hamburger-icon">menu</span>
      </div>
    </nav>
  );
}
