import "./wishList.css";
import { useWishlist } from "../../Context/wishlistContext";
import {WishListCard} from "./WishListCard.jsx";


export function WishList() {
  // const {
  //   filterState: { wishlist },
  //   filterDispatch
  // } = useProduct();

  const {
    wishlistState: {wishlist}, wishlistDispatch
  } = useWishlist();
  return (
    <div>
      {wishlist.length > 0 ? (
        <div>
          <h1 className="wishlist-heading">My wishlist ({wishlist.length})</h1>
          <div className="wishlist-wrapper">
            {wishlist.map((prod) => {
                return <WishListCard key={prod.id} wishlistDetail={prod} />
            }
              
            )}
          </div>
        </div>
      ) : (
        <h1 class="wishlist-empty">Opps! WishList is Empty</h1>
      )}
    </div>
  );
}
