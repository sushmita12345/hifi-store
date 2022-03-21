import { useProduct } from "../../../Context/productContext";

export function PriceInput() {
  const {
    filterState: { originalPrice },
    filterDispatch
  } = useProduct();
  return (
    <div>
      <h3 className="content-1a">Price</h3>
      <div className="sidebar-content-4a">
        <div className="radio-content">
          <input
            type="radio"
            value="10000"
            name="price"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_PRICE",
                value: e.target.value
              })
            }
            checked={originalPrice === 10000}
          />
          <h3 className="content-3a">Rs.10000 & above</h3>
        </div>
        <div className="radio-content">
          <input
            type="radio"
            value="8000"
            name="price"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_PRICE",
                value: e.target.value
              })
            }
            checked={originalPrice === 8000}
          />
          <h3 className="content-3a">Rs.8000 & above</h3>
        </div>
        <div className="radio-content">
          <input
            type="radio"
            value="5000"
            name="price"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_PRICE",
                value: e.target.value
              })
            }
            checked={originalPrice === 5000}
          />
          <h3 className="content-3a">Rs.5000 & above</h3>
        </div>
        <div className="radio-content">
          <input
            type="radio"
            value="2000"
            name="price"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_PRICE",
                value: e.target.value
              })
            }
            checked={originalPrice === 2000}
          />
          <h3 className="content-3a">Rs.2000 & above</h3>
        </div>

        <div className="radio-content">
          <input
            type="radio"
            value="1000"
            name="price"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_PRICE",
                value: e.target.value
              })
            }
            checked={originalPrice === 1000}
          />
          <h3 className="content-3a">Rs.1000 & above</h3>
        </div>

        <div className="radio-content">
          <input
            type="radio"
            value="500"
            name="price"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_PRICE",
                value: e.target.value
              })
            }
            checked={originalPrice === 500}
          />
          <h3 className="content-3a">Rs.500 & above</h3>
        </div>
      </div>
    </div>
  );
}
