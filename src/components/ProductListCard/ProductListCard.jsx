import { MdiStar, MdiCart } from "../../assets/Icon/icon";
import { useProduct } from "../../Context/productContext.jsx";
export function ProductListCard({ details }) {
  const {
    filterState: { cart, wishlist },
    filterDispatch
  } = useProduct();
  const {
    name,
    rating,
    description,
    url,
    originalPrice,
    discountedPrice,
    discount
  } = details;
  
  return (
    <div className="product-card">
      <div className="product-card-cont-a">
        <img className="product-image" src={url} alt="avatar" />
        <div className="product-rating-container">
          <span className="product-rating">{rating}</span>
          <MdiStar />
        </div>
      </div>
      <div className="product-card-cont-b">
        <h3 className="product-name">{name}</h3>
        <p className="product-type">{description}</p>
        <div className="product-price-container">
          <span className="product-price">Rs. {originalPrice}</span>
          <span className="product-original-price">Rs. {discountedPrice}</span>
          <span className="product-discount">{discount}% OFF</span>
        </div>
        <div className="product-btn">
          <div className="product-cart-btn-container">
            {cart.some((item) => item.id === details.id) ? (
              <button
                onClick={() => {
                  filterDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: details
                  });
                }}
                className="product-cart-btn"
              >
                Remove to cart
              </button>
            ) : (
              <button
                onClick={() => {
                  filterDispatch({ type: "ADD_TO_CART", payload: details });
                }}
                className="product-cart-btn"
              >
                <MdiCart />
                Add to Cart
              </button>
            )}
          </div>
          {wishlist.some((item) => item.id === details.id) ? (
            <button
              onClick={() => {
                filterDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: details
                });
              }}
              className="product-wish-btn"
            >
              Wishlisted
            </button>
          ) : (
            <button
              className="product-wish-btn"
              onClick={() => {
                filterDispatch({ type: "ADD_TO_WISHLIST", payload: details });
              }}
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
