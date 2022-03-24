import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Context/productContext.jsx";
import { WishlistProvider } from "./Context/wishlistContext";
import {CartProvider} from "./Context/cartContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById("root")
);
