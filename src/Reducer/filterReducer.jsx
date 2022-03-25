
export function filterReducer(state, action) {
    switch (action.type) {
      case "CLEAR_FILTER":
        return {
          searchQuery: "",
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
          cartCount: ""
        };
      case "SORT_BY_RATING":
        return { ...state, rating: parseInt(action.value, 10) };
      case "SORT_BY_PRICE":
        return { ...state, originalPrice: parseInt(action.value, 10) };
      case "LOW_TO_HIGH":
        return { ...state, sortBy: action.type };
      case "HIGH_TO_LOW":
        return { ...state, sortBy: action.type };
      case "SORT_BY_DISCOUNT":
        return { ...state, discount: parseInt(action.value, 10) };
      case "FILTER_BY_SEARCH":
        return {...state, searchQuery: action.payload};
      case "ZIYAA":
        return {
          ...state,
          byBrand: {
            ...state["byBrand"],
  
            ziyaa: !state.byBrand.ziyaa
          }
        };
      case "FABINDIA":
        return {
          ...state,
          byBrand: {
            ...state["byBrand"],
            fabindia: !state.byBrand.fabindia
          }
        };
      case "ANOUK":
        return {
          ...state,
          byBrand: {
            ...state["byBrand"],
  
            anouk: !state.byBrand.anouk
          }
        };
      case "LIBAS":
        return {
          ...state,
          byBrand: {
            ...state["byBrand"],
            libas: !state.byBrand.libas
          }
        };
      case "VARANGA":
        return {
          ...state,
          byBrand: {
            ...state["byBrand"],
            varanga: !state.byBrand.varanga
          }
        };
  
      case "ETHNIC":
        return {
          ...state,
          byCategory: { ...state["byCategory"], ethnic: !state.byCategory.ethnic }
        };
  
      case "SAREE":
        return {
          ...state,
          byCategory: { ...state["byCategory"], saree: !state.byCategory.saree }
        };
  
      case "DRESS":
        return {
          ...state,
          byCategory: { ...state["byCategory"], dress: !state.byCategory.dress }
        };
  
      case "SWEATSHIRT":
        return {
          ...state,
          byCategory: {
            ...state["byCategory"],
            sweatshirt: !state.byCategory.sweatshirt
          }
        };
  
      
      default:
        return state;
    }
  }
  