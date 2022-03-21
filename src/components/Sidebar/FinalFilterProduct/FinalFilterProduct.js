import {useEffect, useState} from 'react';
import "./FinalFilterProduct.css";
import { ProductListCard } from "../../../components/ProductListCard/ProductListCard";
import { FilterByBrand } from "../SidebarFilter/FilterByBrand";
import { FilterByDiscount } from "../SidebarFilter/FilterByDiscount";
import { FilterByPriceHighLow } from "../SidebarFilter/FilterByPriceHighLow";
import { FilterByPrice } from "../SidebarFilter/FilterByPrice";
import { FilterByRating } from "../SidebarFilter/FilterByRating";
import { FilterByCategory } from "../SidebarFilter/FilterByCategory";
import { useProduct } from "../../../Context/productContext";
import axios from 'axios';

export function FinalFilterProduct() {

  const { filterState } = useProduct();
        const [productsList, setProductsList] = useState();

  console.log(productsList);

  useEffect(() => {
    
    const fetchData = async () =>{
      try {
        const response = await axios.get("/api/products");
        setProductsList(response.data.products);
      } catch (error) {
        console.error(error.message);
      }
    }
    
    fetchData();
  },[]);

  const filterRating = FilterByRating(productsList, filterState.rating);

  const filterPrice = FilterByPrice(filterRating, filterState.originalPrice);

  const filterHighLow = FilterByPriceHighLow(filterPrice, filterState.sortBy);

  const filterDiscount = FilterByDiscount(filterHighLow, filterState.discount);

  const filterBrand = FilterByBrand(
    filterDiscount,
    filterState.byBrand.ziyaa,
    filterState.byBrand.fabindia,
    filterState.byBrand.anouk,
    filterState.byBrand.libas,
    filterState.byBrand.varanga
  );

  const filterCategory = FilterByCategory(
    filterBrand,
    filterState.byCategory.ethnic,
    filterState.byCategory.saree,
    filterState.byCategory.dress,
    filterState.byCategory.sweatshirt
  );
  
console.log(filterCategory)
  
  return (
    <div className="container-wrapper">
      <div className="result-wrapper">
        <h3 className="show-result-1">Showing all products</h3>
        <span className="show-result-2">
          (showing {filterCategory && filterCategory.length} products)
        </span>
      </div>
      <div className="productlist-container">
        <div className="product-card-wrapper">
          {filterCategory && filterCategory.map((product) => {
            return <ProductListCard key={product.id} details={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
