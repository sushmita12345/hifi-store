import { useState, useEffect } from "react";
import { useProduct } from "../../Context/productContext";
import "./Cart.css";
import { MdiCurrencyInr, MdiClose } from "../../assets/Icon/icon";

export function Cart() {

  const {
    filterState: { cart},
    filterDispatch
  } = useProduct();

  console.log(cart);

  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();

//   Ignore the functionality for now

  useEffect(() => {
    setPrice(cart.reduce((acc, curr) => acc + Number(curr.originalPrice), 0));
  }, [cart]);

  useEffect(() => {
    setDiscount(
      cart.reduce((acc, curr) => acc + Number(curr.discountedPrice), 0)
    );
  }, [cart]);

  const total = discount - price;

  return (
    <div>
      {cart.length > 0 ? (
        <div class="cart-container">
          <div class="my-cart-text">MY CART({cart.length})</div>
          <div className="product-bill">
            <div className="all-cart-product">
              {cart.map((prod) => (
                <div class="product-card horizontal-card horizontal-cart-card">
                  <div class="horizontal-wrapper">
                    <div class="product-card-cont-a horizontal-card-a">
                      <img
                        class="product-image cart-image"
                        src={prod.url}
                        alt="product"
                      />
                    </div>
                    <div class="product-card-cont-b horizontal-card-b">
                      <div class="product-horizontal-container">
                        <h3 class="product-name">{prod.name}</h3>
                        <p class="product-type">{prod.description}</p>
                        <div class="product-price-container">
                          <span class="product-price">
                            Rs. {prod.originalPrice}
                          </span>
                          <span class="product-original-price">
                            Rs. {prod.discountedPrice}
                          </span>
                          <span class="product-discount">
                            ({prod.discount}% OFF)
                          </span>
                        </div>

                        <select className="cart-option">
                          <span>Qty:</span>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>

                        
                      </div>
                    </div>
                  </div>
                  <MdiClose
                    className="product-remove"
                    onClick={() =>
                      filterDispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod
                      })
                    }
                  />
                </div>
              ))}
            </div>
            <div class="cart-wrapper">
              <div class="cart-bill">
                <h3 class="price-detail">PRICE DETAILS</h3>
                <hr />
                <div class="product-price">
                  <span class="product-count">Price ({cart.length})</span>
                  <div class="cart-price">
                    <MdiCurrencyInr className="bill-rupee-icon" />
                    <span class="product-rupee">{discount}</span>
                  </div>
                </div>
                <div class="product-price">
                  <span class="product-count">Discount</span>
                  <div class="cart-price">
                    <span>-</span>
                    <MdiCurrencyInr className="bill-rupee-icon" />
                    <span class="product-rupee">{total}</span>
                  </div>
                </div>
                <div class="product-price">
                  <span class="product-count">Delivery Charges</span>
                  <div class="cart-price">
                    <MdiCurrencyInr className="bill-rupee-icon" />
                    <span class="product-rupee">49</span>
                  </div>
                </div>
                <hr />
                <div class="product-price">
                  <h3 class="total-amount">TOTAL AMOUNT</h3>
                  <div class="cart-price">
                    <MdiCurrencyInr className="total-rupee-icon" />
                    <span class="product-rupee-bold">{price + 49}</span>
                  </div>
                </div>
                <hr />
                <div class="savings-text">
                  <span>You will save </span>
                  <span class="cart-price">
                    <MdiCurrencyInr className="bill-rupee-icon" />
                    <span class="product-rupee">{total}</span>
                  </span>
                  <span class="last-text">on this order</span>
                </div>
                <button class="order-btn">PLACE ORDER</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="cart-empty-msg">Opps! Your Cart is Empty 😌</h1>
      )}
    </div>
  );
}
