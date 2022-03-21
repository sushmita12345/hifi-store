export const FilterByPriceHighLow = (newPriceHighLow, sortBy) => {
    if (sortBy === "LOW_TO_HIGH") {
      return [...newPriceHighLow].sort(
        (a, b) => a.originalPrice - b.originalPrice
      );
    }
  
    if (sortBy === "HIGH_TO_LOW") {
      return [...newPriceHighLow].sort(
        (a, b) => b.originalPrice - a.originalPrice
      );
    }
    return newPriceHighLow;
  };
  