import "../../App.css";
import { useProduct } from "./product-context";

export function Sidebar() {
  const {
    filterState: { sort, discount, ziyaa, fabindia, anouk, libas, varanga },
    filterDispatch
  } = useProduct();

  return (
    <div className="sidebar">
      <div className="sidebar-content-1 display-space-between">
        <h3 className="content-1a">Filters</h3>
        <h5 className="clear-content">Clear</h5>
      </div>

      <div className="sidebar-content-2 display-column">
        <h3 className="content-1a">Price</h3>
        <div className="sidebar-content-2a display-space-between">
          <span className="range-input">50</span>
          <span className="range-input">150</span>
          <span className="range-input">200</span>
        </div>
        <div className="sidebar-content-2b">
          <input className="range" type="range" />
        </div>
      </div>

      <div className="sidebar-content-2">
        <h3 className="content-1a">Brand</h3>
        <div className="sidebar-content-3a">
          <div className="checkbox-content">
            <input
              type="checkbox"
              value="ziya-brand"
              name="brand"
              className="checkbox-type"
              onChange={() => filterDispatch({ type: "ZIYAA" })}
              checked={ziyaa}
            />
            <h3 className="content-3a">ZIYA</h3>
          </div>
          <div className="checkbox-content">
            <input
              type="checkbox"
              value="fabindia-brand"
              name="brand"
              className="checkbox-type"
              onChange={() => filterDispatch({ type: "FABINDIA" })}
              checked={fabindia}
            />
            <h3 className="content-3a">FABINDIA</h3>
          </div>
          <div className="checkbox-content">
            <input
              type="checkbox"
              value="anouk"
              name="brand"
              className="checkbox-type"
              onChange={() => filterDispatch({ type: "ANOUK" })}
              checked={anouk}
            />
            <h3 className="content-3a">ANOUK</h3>
          </div>
          <div className="checkbox-content">
            <input
              type="checkbox"
              value="libas"
              name="brand"
              className="checkbox-type"
              onChange={() => filterDispatch({ type: "LIBAS" })}
              checked={libas}
            />
            <h3 className="content-3a">LIBAS</h3>
          </div>
          <div className="checkbox-content">
            <input
              type="checkbox"
              value="varanga"
              name="brand"
              className="checkbox-type"
              onChange={() => filterDispatch({ type: "VARANGA" })}
              checked={varanga}
            />
            <h3 className="content-3a">VARANGA</h3>
          </div>
        </div>
      </div>

      <div className="sidebar-content-2">
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

      <div className="sidebar-content-2">
        <h3 className="content-1a">Sort by</h3>
        <div className="sidebar-content-4a">
          <div className="radio-content">
            <input
              type="radio"
              value="low"
              name="group"
              onChange={() =>
                filterDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
              }
              checked={sort === "lowToHigh" ? true : false}
            />
            <h3 className="content-3a">Price - Low to High</h3>
          </div>
          <div className="radio-content">
            <input
              type="radio"
              value="high"
              name="group"
              onChange={() =>
                filterDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
              }
              checked={sort === "highToLow" ? true : false}
            />
            <h3 className="content-3a">Price - High to Low</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
