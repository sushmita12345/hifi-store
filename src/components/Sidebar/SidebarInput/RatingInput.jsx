import { useProduct } from "../../../Context/productContext.jsx";

export function RatingInput() {
  const {
    filterState: { rating },
    filterDispatch
  } = useProduct();
  return (
    <div>
      <h3 className="content-1a">Rating</h3>
      <div className="sidebar-content-4a">
        <div className="radio-content">
          <input
            type="radio"
            value="4"
            name="rating"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_RATING",
                value: e.target.value
              })
            }
            checked={rating === 4}
          />
          <h3 className="content-3a">4 star & above</h3>
        </div>
        <div className="radio-content">
          <input
            type="radio"
            value="3"
            name="rating"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_RATING",
                value: e.target.value
              })
            }
            checked={rating === 3}
          />
          <h3 className="content-3a">3 star & above</h3>
        </div>
        <div className="radio-content">
          <input
            type="radio"
            value="2"
            name="rating"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_RATING",
                value: e.target.value
              })
            }
            checked={rating === 2}
          />
          <h3 className="content-3a">2 star & above</h3>
        </div>
        <div className="radio-content">
          <input
            type="radio"
            value="1"
            name="rating"
            onChange={(e) =>
              filterDispatch({
                type: "SORT_BY_RATING",
                value: e.target.value
              })
            }
            checked={rating === 1}
          />
          <h3 className="content-3a">1 star & above</h3>
        </div>
      </div>
    </div>
  );
}
