import { useProduct } from "../../../Context/productContext.jsx";

export function BrandInput() {
  const { filterState, filterDispatch } = useProduct();
  const { ziyaa, fabindia, anouk, libas, varanga } = filterState.byBrand;

  return (
    <div>
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
  );
}
