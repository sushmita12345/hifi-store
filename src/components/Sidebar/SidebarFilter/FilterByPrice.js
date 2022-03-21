export const FilterByPrice = (priceProduct, originalPrice) => {
    if (originalPrice) {
      return [...priceProduct].filter(
        (product) => product.originalPrice >= originalPrice
      );
    }
    // console.log(priceProduct);
    return priceProduct;
  };
  