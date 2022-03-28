import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../Reducer/wishlistReducer";
import {useAuth} from "../Context/authContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


const WishlistContext = createContext(null);

const WishlistProvider = ({children}) => {
    const {token} = useAuth()
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
        wishlist: [],
    })

    const addWishlist = (product) => {
        if(wishlistState.wishlist.find((item) => item._id === product._id)){
            return 
        } else {
            (async () => {
                try {
                    const {status, data: {wishlist}} = await axios.post("/api/user/wishlist", {product}, {
                        headers: {
                            authorization: token,
                        },
                    })

                    {status === 201 ? toast.success("added to wishlist") : null}
                    console.log(wishlist)
                    wishlistDispatch({type: "WISHLIST", payload: wishlist})
                }catch(error) {
                    console.log(error)
                }
            })();
        }
    }
    

    const removeWishlist = (product) => {
        (async () => {
            try {
                const {status, data: {wishlist}} = await axios.delete(`/api/user/wishlist/${product._id}`, {
                    headers: {
                        authorization: token,
                    },
                })

                {status === 201 ? toast.info("remove from wishlist") : null}
                wishlistDispatch({type: "WISHLIST", payload: wishlist})
            }catch(error){
                console.log(error)
            }
        })();
    }

    return <WishlistContext.Provider value={{wishlistState, wishlistDispatch, addWishlist, removeWishlist}}>
        {children}
    </WishlistContext.Provider>
}

const useWishlist = () => useContext(WishlistContext)

export {useWishlist, WishlistProvider}