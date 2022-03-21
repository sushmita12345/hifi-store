import {useState, useEffect} from 'react';
import { MdiCurrencyInr } from "../../assets/Icon/icon";
import { useProduct } from '../../Context/productContext';

export function CartPrice() {

    const {
        filterState: { cart},
      } = useProduct();
    
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
    
    return(
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
    )
}