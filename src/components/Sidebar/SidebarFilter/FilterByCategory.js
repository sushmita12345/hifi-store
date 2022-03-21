export const FilterByCategory = (
    newProducts,
    ethnic,
    saree,
    dress,
    sweatshirt
  ) => {
    let newFilteredCategory = [];
  
    if (!ethnic && !saree && !dress && !sweatshirt) {
      return newProducts;
    } else {
      if (ethnic) {
        let newFilterList = newProducts.filter(
          (product) => "ethnic" === product.category.toLowerCase()
        );
  
        newFilteredCategory.push(...newFilterList);
      }
  
      if (saree) {
        let newFilterList = newProducts.filter(
          (product) => "saree" === product.category.toLowerCase()
        );
  
        newFilteredCategory.push(...newFilterList);
      }
  
      if (dress) {
        let newFilterList = newProducts.filter(
          (product) => "dress" === product.category.toLowerCase()
        );
  
        newFilteredCategory.push(...newFilterList);
      }
      if (sweatshirt) {
        let newFilterList = newProducts.filter(
          (product) => "sweatshirt" === product.category.toLowerCase()
        );
  
        newFilteredCategory.push(...newFilterList);
      }
      // console.log(newFilteredCategory);
      return newFilteredCategory;
    }
  };
  