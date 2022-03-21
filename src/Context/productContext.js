import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filterReducer";


const ProductContext = createContext();

const ProductProvider = ({ children }) => {

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    
    originalPrice: "",
    discount: "",
    sortBy: "",
    rating: "",

    byBrand: {
      ziya: false,
      fabindia: false,
      anouk: false,
      libas: false,
      varanga: false
    },
    byCategory: {
      ethnic: false,
      saree: false,
      dress: false,
      sweatshirt: false
    },
    cart: [],
    wishlist: []
  });
  return (
    <ProductContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };
