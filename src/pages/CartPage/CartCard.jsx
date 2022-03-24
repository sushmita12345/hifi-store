import { MdiClose } from "../../assets/Icon/icon";
import { useCart } from "../../Context/cartContext";

export function CartCard({cartDetail}) {

    const {cartDispatch} = useCart();

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
                cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: cartDetail
                })
            }
            />
        </div>
    )
}