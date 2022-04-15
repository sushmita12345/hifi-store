import './Navbar.css';
import React from "react";
import {IcRoundFavoriteBorder, IcOutlineShoppingCart, MdiMagnify} from '../../assets/Icon/icon';
import logo from '../../assets/Image/Logo/HIFI.png';
import {Link, useNavigate} from 'react-router-dom';
import { useProduct } from '../../Context/productContext';
import { useWishlist } from '../../Context/wishlistContext';
import {useCart} from "../../Context/cartContext";
import {useAuth} from "../../Context/authContext";

export function Navbar() {
  const navigate = useNavigate();
  const {
     filterDispatch
  } = useProduct();

  const {token, logoutFun} = useAuth();

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
        <button class="nav-btn" onClick={() => {logoutFun(), navigate("/login")}}>{token ? "Logout" : "Login"}</button>
        <IcRoundFavoriteBorder className="nav-heart-icon" onClick={() => {token ? navigate("/wishlist") : navigate("/Login")}}/>
          {wishlist?.length > 0 ? (
            <div className="wishlist-count-container">
            {
              token && (
                <span className="nav-wishlist-count">{wishlist?.length}</span>
              )
            }
              
            </div>
          ) : (
            ""
          )}
        <IcOutlineShoppingCart className="nav-cart-icon" onClick={() => {token ? navigate("/cart") : navigate("/Login")}}/>
          {cart?.length > 0 ? (
            <div className="cart-count-container">
            {
              token && (
                <span className="nav-cart-count">{cart?.length}</span>
              )
            }
             
            </div>
          ) : (
            ""
          )}
      </div>
    </nav>
    
  )
}

