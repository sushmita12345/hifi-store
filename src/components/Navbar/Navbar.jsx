import './navbar.css';
import React from "react";
import {IcRoundFavoriteBorder, IcOutlineShoppingCart, MdiMagnify} from '../../assets/Icon/icon';
import logo from '../../assets/Image/Logo/HIFI.png';
import {Link} from 'react-router-dom';
import { useProduct } from '../../Context/productContext';
import { useWishlist } from '../../Context/wishlistContext';
import {useCart} from "../../Context/cartContext";

export function Navbar() {
  const {
     filterDispatch
  } = useProduct();

  const {wishlistState: {wishlist}, wishlistDispatch} = useWishlist();

  const {cartState: {cart}, cartDispatch} = useCart();
  return (
    
    <nav className="home-navbar">
      <Link to="/"><img src={logo} class="logo" alt="logo" /></Link>
      <div className="nav-search-container">
        <input className="search-bar" type="search" placeholder="Search" onChange={(e) => filterDispatch({type: "FILTER_BY_SEARCH", payload: e.target.value})}/>
        <MdiMagnify className="nav-search-icon"/>
      </div>
      <div className="btn-left">
        <Link to="/login"><button class="nav-btn">Login</button></Link>
        <Link to="/wishlist"><IcRoundFavoriteBorder className="nav-heart-icon" />
          {wishlist.length > 0 ? (
            <div className="wishlist-count-container">
              <span className="nav-wishlist-count">{wishlist.length}</span>
            </div>
          ) : (
            ""
          )}</Link>
        <Link to="/cart"><IcOutlineShoppingCart className="nav-cart-icon" />
          {cart.length > 0 ? (
            <div className="cart-count-container">
              <span className="nav-cart-count">{cart.length}</span>
            </div>
          ) : (
            ""
          )}</Link>
        {/* <IcRoundLogout className="nav-logout-icon"/> */}
      </div>
    </nav>
    
  )
}

