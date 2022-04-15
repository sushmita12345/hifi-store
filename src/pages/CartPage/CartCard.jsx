import { MdiClose } from "../../assets/Icon/icon";
import { useCart } from "../../Context/cartContext";
import {MdiPlus, MdiMinus, IcRoundFavoriteBorder} from "../../assets/Icon/icon"


export function CartCard({cartDetail}) {

    const {incrementQty, decrementQty, removeCartItem} = useCart();

    const {url, name, description, originalPrice, discountedPrice, discount} = cartDetail
    return (
        <div class="product-card horizontal-card horizontal-cart-card">
            <div class="horizontal-wrapper">
            <div class="product-card-cont-a horizontal-card-a">
                <img
                class="product-image cart-image"
                src={url}
                alt="product"
                />
            </div>
            <div class="product-card-cont-b horizontal-card-b">
                <div class="product-horizontal-container">
                    <h3 class="product-name">{name}</h3>
                    <p class="product-type">{description}</p>
                    <div class="product-price-container">
                        <span class="product-price">
                        Rs. {originalPrice}
                        </span>
                        <span class="product-original-price">
                        Rs. {discountedPrice}
                        </span>
                        <span class="product-discount">
                        ({discount}% OFF)
                        </span>
                    </div>
                    <div className="cart-option">
                        <MdiPlus class="cart-increment" onClick={() => incrementQty(cartDetail, "increment")}/>
                        <span className="cart-count">{cartDetail.qty}</span>
                        <MdiMinus class="cart-decrement" onClick={() => {cartDetail.qty <= 1 ? removeCartItem(cartDetail) : decrementQty(cartDetail, "decrement")}}/>
                        
                    </div>
               
                </div>
            </div>
            </div>
            <MdiClose
            className="product-remove"
            onClick={() =>
                removeCartItem(cartDetail)
                
            }
            />
            {/* <IcRoundFavoriteBorder /> */}
        </div>
    )
}