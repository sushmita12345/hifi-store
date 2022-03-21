import { useProduct } from "../../../Context/productContext";

export function DiscountInput() {
  const {
    filterState: { discount },
    filterDispatch
  } = useProduct();
  return (
    <div>
      <h3 className="content-1a">Discount</h3>
      <div className="sidebar-content-4a">
        <div className="radio-content">
          <input
            type="radio"
            value="80"
            name="price-discount"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_DISCOUNT",
                value: e.target.value
              })
            }
            checked={discount === 80}
          />
          <h3 className="content-3a">80% & above</h3>
        </div>
        <div className="radio-content">
          <input
            type="radio"
            value="60"
            name="price-discount"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_DISCOUNT",
                value: e.target.value
              })
            }
            checked={discount === 60}
          />
          <h3 className="content-3a">60% & above</h3>
        </div>
        <div className="radio-content">
          <input
            type="radio"
            value="40"
            name="price-discount"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_DISCOUNT",
                value: e.target.value
              })
            }
            checked={discount === 40}
          />
          <h3 className="content-3a">40% & above</h3>
        </div>
        <div className="radio-content">
          <input
            type="radio"
            value="20"
            name="price-discount"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_DISCOUNT",
                value: e.target.value
              })
            }
            checked={discount === 20}
          />
          <h3 className="content-3a">20% & above</h3>
        </div>
      </div>
    </div>
  );
}
