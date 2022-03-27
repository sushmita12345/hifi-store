import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reducer/cartReducer";
import {useAuth} from "../Context/authContext";
import { useEffect } from "react";
import axios from "axios";



const CartContext = createContext();

const CartProvider = ({children}) => {

   
   
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cart: []
    })
    const {token, user} = useAuth();

    useEffect(() => {
        {
            token && 
            (async() => {
                try {
                    const {data: {cart} } = await axios("api/user/cart", {
                        headers: {
                            authorization: token,
                        }                   
                    })
                    console.log(cart)
                    cartDispatch({type: "GET_CARTITEM_FROM_BACKEND_DATA", payload: cart})
                }catch(error){
                console.log(error);
                }
            })();
        }
    }, [token, user])

    const addCart = (product) => {
        if (cartState.cart.find((item) => item._id === product._id)){
            return 
        }else {
            (async() => {
                try {
                    const {status, data: {cart}} = await axios.post("api/user/cart", {product}, {
                        headers: {
                            authorization: token,
                        }
                    })

                    // status = 201 ? alert("Added to cart") : null
                    cartDispatch({type: "ADD_TO_CART", payload: cart, productId: product._id},)
                    
                } catch(error){
                    console.log(error)
                }

                
            })();
        }
    }

    const incrementQty = async (product, type) => {
        const productId = product._id
        
        try {
            const {data: {cart}, } = await axios.post(`/api/user/cart/${productId}`, {
                action: {
                    type: type,
                },
            },
            {
                headers: {
                    authorization: token,
                }
            })

            cartDispatch({type: "INCREMENT_CART_QUANTITY", payload: cart})


        }catch(error){
            console.log(error)
        }
    }

    const decrementQty = async (product, type) => {
        const productId = product._id
        
        try {
            const {data: {cart}, } = await axios.post(`/api/user/cart/${productId}`, {
                action: {
                    type: type
                },
            },
            {
                headers: {
                    authorization: token,
                }
            })

            cartDispatch({type: "DECREMENT_CART_QUANTITY", payload: cart})


        }catch(error){
            console.log(error)
        }
    }

    const removeCartItem = async (product) => {
        const productId = product._id 
        try {
            const {status, data: {cart}, } = await axios.delete(`/api/user/cart/${productId}`, {
                headers: {
                    authorization: token,
                }
            })

            // status === 201 ? alert("Cart Item removed"): null 
            cartDispatch({type: "REMOVE_CART_CARD", payload: cart})
        }catch(error){
            console.log(error)
        }
    } 


    return <CartContext.Provider value={{cartState, cartDispatch, addCart, incrementQty, decrementQty, removeCartItem}}>
        {children}
    </CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export {useCart, CartProvider}
