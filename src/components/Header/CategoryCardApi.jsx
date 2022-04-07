
import {useState, useEffect} from "react";
import axios from "axios";

export function CategoryCardApi() {

  
    const [catProduct, setCatProduct] = useState([])

    useEffect(() => {

        const fetchCatData = async () =>{
            try {
              const response = await axios.get("/api/categories");
              setCatProduct(response.data.categories)
            } catch (error) {
              console.error(error.message);
            }
          }
          
        fetchCatData();

    },[]) 
    return {catProduct}
  
}