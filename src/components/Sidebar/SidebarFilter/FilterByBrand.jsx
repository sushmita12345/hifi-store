export const FilterByBrand = (
    newProducts,
    ziyaa,
    fabindia,
    anouk,
    libas,
    varanga
  ) => {
    let newFilteredArray = [];
  
    if (!ziyaa && !fabindia && !anouk && !libas && !varanga) {
      return newProducts;
    } else {
      if (ziyaa) {
        let newFilterList = newProducts.filter(
          (product) => "ziyaa" === product.name.toLowerCase()
        );
  
        newFilteredArray.push(...newFilterList);
      }
  
      if (fabindia) {
        let newFilterList = newProducts.filter(
          (product) => "fabindia" === product.name.toLowerCase()
        );
  
        newFilteredArray.push(...newFilterList);
      }
  
      if (anouk) {
        let newFilterList = newProducts.filter(
          (product) => "anouk" === product.name.toLowerCase()
        );
  
        newFilteredArray.push(...newFilterList);
      }
      if (libas) {
        let newFilterList = newProducts.filter(
          (product) => "libas" === product.name.toLowerCase()
        );
  
        newFilteredArray.push(...newFilterList);
      }
  
      if (varanga) {
        let newFilterList = newProducts.filter(
          (product) => "varanga" === product.name.toLowerCase()
        );
  
        newFilteredArray.push(...newFilterList);
      }
      // console.log(newFilteredArray);
      return newFilteredArray;
    }
  };
  