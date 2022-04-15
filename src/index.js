import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Context/productContext.jsx";
import { WishlistProvider } from "./Context/wishlistContext";
import {CartProvider} from "./Context/cartContext";
import {AuthProvider} from "./Context/authContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <ProductProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ProductProvider>
  </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById("root")
);
