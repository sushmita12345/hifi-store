import {useEffect} from "react";
import "./ProductList.css";
import "../../assets/css/reset.css"
import { Sidebar } from "../../components/Sidebar/Sidebar.jsx";
import { FinalFilterProduct } from "../../components/Sidebar/FinalFilterProduct/FinalFilterProduct";

export function ProductList() {
 
  return (
    <div className="wrapper">
      <Sidebar />
      <FinalFilterProduct />
    </div>
  );
}
