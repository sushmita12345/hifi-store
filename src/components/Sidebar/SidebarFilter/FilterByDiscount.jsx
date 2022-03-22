export const FilterByDiscount = (newDiscountProducts, discount) => {
    if (discount) {
      return [...newDiscountProducts].filter(
        (product) => product.discount >= discount
      );
    }
    return newDiscountProducts;
  };
  