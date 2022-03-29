import { MdiClose, MdiStar } from "../../assets/Icon/icon";
import { useWishlist } from "../../Context/wishlistContext";
import "./WishList.css";
import {useProduct} from "../../Context/productContext"
import {useCart} from "../../Context/cartContext";


export function WishListCard({wishlistDetail}) {

    const {addCart} = useCart();
    const { removeWishlist} = useWishlist();

    const {url, rating, name, description, originalPrice, discountedPrice, discount} = wishlistDetail

    return (
        <div className="product-card">
            <div className="product-card-cont-a">
                <img className="product-image" src={url} alt="avatar" />
                <div className="product-rating-container">
                <span className="product-rating">{rating}</span>
                <MdiStar />
                </div>
                <MdiClose
                className="wishlist-close"
                onClick={() =>
                    removeWishlist(wishlistDetail)
                }
                />
            </div>
            <div className="product-card-cont-b">
                <h3 className="product-name">{name}</h3>
                <p className="product-type">{description}</p>
                <div className="product-price-container">
                <span className="product-price">
                    Rs. {originalPrice}
                </span>
                <span className="product-original-price">
                    Rs. {discountedPrice}
                </span>
                <span className="product-discount">
                    {discount}% OFF
                </span>
                </div>
                <div className="product-btn">
                <div className="product-cart-btn-container">
                    <button className="product-cart-btn" onClick={()=>{addCart(wishlistDetail), removeWishlist(wishlistDetail)}}>Move to Cart</button>
                </div>
                </div>
            </div>
        </div>
    )
}