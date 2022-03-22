export const FilterByRating = (newRatingProduct, rating) => {
    if (rating) {
      return [...newRatingProduct].filter((product) => product.rating >= rating);
    }
    // console.log(newRatingProduct);
    return newRatingProduct;
  };
  