import "./App.css";
import {Navbar} from './components/Navbar/Navbar.jsx';
import {Header} from './components/Header/Header.jsx';
import { Route, Routes } from "react-router-dom";
import Mockman from '../src/assets/Mockman.jsx'
import {ProductList} from "../src/pages/ProductList/ProductList.jsx"
import {Cart} from "../src/pages/CartPage/Cart.jsx";
import {WishList} from "../src/pages/WishList/WishList.jsx";
import {Login} from "../src/pages/Login/Login";
import {Signup} from "../src/pages/Signup/Signup"


function App() {
  return (
    <div className="App">
  
      <Navbar />

      <Routes>
        <Route  exact path="/" element={<Header />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock-api" element={<Mockman />} />
        </Routes>
    </div>
  );
}

export default App;
