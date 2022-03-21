import "./Sidebar.css";
import { useProduct } from "../../Context/productContext";
import { BrandInput } from "../Sidebar/SidebarInput/BrandInput";
import { DiscountInput } from "../Sidebar/SidebarInput/DiscountInput";
import { PriceHighLowInput } from "../Sidebar/SidebarInput/PriceHighLowInput";
import { PriceInput } from "../Sidebar/SidebarInput/PriceInput";
import { RatingInput } from "../Sidebar/SidebarInput/RatingInput";
import { CategoryInput } from "../Sidebar/SidebarInput/CategoryInput";

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
