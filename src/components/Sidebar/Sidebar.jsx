import "./sidebar.css";
import { useProduct } from "../../Context/productContext.jsx";
import { BrandInput } from "../Sidebar/SidebarInput/BrandInput.jsx";
import { DiscountInput } from "../Sidebar/SidebarInput/DiscountInput.jsx";
import { PriceHighLowInput } from "../Sidebar/SidebarInput/PriceHighLowInput.jsx";
import { PriceInput } from "../Sidebar/SidebarInput/PriceInput.jsx";
import { RatingInput } from "../Sidebar/SidebarInput/RatingInput.jsx";
import { CategoryInput } from "../Sidebar/SidebarInput/CategoryInput.jsx";

export function Sidebar() {
  const { filterDispatch } = useProduct();
  return (
    <div className="sidebar">
      <div className="sidebar-content-1 display-space-between">
        <h3 className="content-1a">Filters</h3>
        <h5
          className="clear-content"
          onClick={() => filterDispatch({ type: "CLEAR_FILTER" })}
        >
          Clear
        </h5>
      </div>

      <div className="sidebar-content-2">
        <CategoryInput />
      </div>
      <div className="sidebar-content-2">
        <RatingInput />
      </div>

      <div className="sidebar-content-2 display-column">
        <PriceInput />
      </div>

      <div className="sidebar-content-2">
        <BrandInput />
      </div>

      <div className="sidebar-content-2">
        <DiscountInput />
      </div>

      <div className="sidebar-content-2">
        <PriceHighLowInput />
      </div>
    </div>
  );
}
