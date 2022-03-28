import "./wishList.css";
import { useWishlist } from "../../Context/wishlistContext";
import {WishListCard} from "./WishListCard.jsx";


export function WishList() {
  const {
    wishlistState: { wishlist },
  } = useWishlist();

  return (
    <div>
      {wishlist?.length > 0 ? (
        <div>
          <h1 className="wishlist-heading">My wishlist ({wishlist.length})</h1>
          <div className="wishlist-wrapper">
            {wishlist?.map((wishProd) => {
                return <WishListCard key={wishProd._id} wishlistDetail={wishProd} />
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
