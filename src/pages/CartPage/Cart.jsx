import { useProduct } from "../../Context/productContext.jsx";
import "./cart.css";
import {CartCard} from "./CartCard.jsx"
import { CartPrice } from "./CartPrice.jsx";

export function Cart() {
    const {
        filterState: { cart},
        filterDispatch
      } = useProduct();
  
  return (
    <div>
      {cart.length > 0 ? (
        <div class="cart-container">
          <div class="my-cart-text">MY CART({cart.length})</div>
          <div className="product-bill">
            <div className="all-cart-product">
              {cart.map((prod) => {
                  return <CartCard key={prod.id} cartDetail={prod}/>
              })}
            </div>
            <div class="cart-wrapper">
            <CartPrice />
              
            </div>
          </div>
        </div>
      ) : (
        <h1 className="cart-empty-msg">Opps! Your Cart is Empty 😌</h1>
      )}
    </div>
  );
}
