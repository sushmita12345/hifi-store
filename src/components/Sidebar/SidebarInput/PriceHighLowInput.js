import { useProduct } from "../../../Context/productContext";

export function PriceHighLowInput() {
  const {
    filterState: { sortBy },
    filterDispatch
  } = useProduct();
  return (
    <div>
      <h3 className="content-1a">Sort by</h3>
      <div className="sidebar-content-4a">
        <div className="radio-content">
          <input
            type="radio"
            value="low"
            name="group"
            onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
            checked={sortBy === "LOW_TO_HIGH"}
          />
          <h3 className="content-3a">Price - Low to High</h3>
        </div>
        <div className="radio-content">
          <input
            type="radio"
            value="high"
            name="group"
            onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
            checked={sortBy === "HIGH_TO_LOW"}
          />
          <h3 className="content-3a">Price - High to Low</h3>
        </div>
      </div>
    </div>
  );
}
