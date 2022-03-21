import { useProduct } from "../../../Context/productContext";

export function CategoryInput() {
  const { filterState, filterDispatch } = useProduct();
  const { ethnic, saree, dress, sweatshirt } = filterState.byCategory;

  return (
    <div>
      <h3 className="content-1a">Category</h3>
      <div className="sidebar-content-3a">
        <div className="checkbox-content">
          <input
            type="checkbox"
            value="cat-ethnic"
            name="category"
            className="checkbox-type"
            onChange={() => filterDispatch({ type: "ETHNIC" })}
            checked={ethnic}
          />
          <h3 className="content-3a">ETHNIC</h3>
        </div>
        <div className="checkbox-content">
          <input
            type="checkbox"
            value="cat-saree"
            name="category"
            className="checkbox-type"
            onChange={() => filterDispatch({ type: "SAREE" })}
            checked={saree}
          />
          <h3 className="content-3a">SAREE</h3>
        </div>
        <div className="checkbox-content">
          <input
            type="checkbox"
            value="cat-dress"
            name="category"
            className="checkbox-type"
            onChange={() => filterDispatch({ type: "DRESS" })}
            checked={dress}
          />
          <h3 className="content-3a">DRESS</h3>
        </div>
        <div className="checkbox-content">
          <input
            type="checkbox"
            value="cat-sweatshirt"
            name="category"
            className="checkbox-type"
            onChange={() => filterDispatch({ type: "SWEATSHIRT" })}
            checked={sweatshirt}
          />
          <h3 className="content-3a">SWEATSHIRT</h3>
        </div>
      </div>
    </div>
  );
}
