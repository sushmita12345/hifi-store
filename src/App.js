import "./App.css";
import {useEffect} from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import Mockman from '../src/assets/Mockman'
import {ProductList} from "../src/pages/ProductList/ProductList"





function App() {

 
  return (
    <div className="App">
    

      <Navbar />

      <Routes>
        <Route  exact path="/" element={<Header />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/mock-api" element={<Mockman />} />
        </Routes>
    </div>
  );
}

export default App;
