export function cartReducer(state, action) {

    switch(action.type){
        case "GET_CARTITEM_FROM_BACKEND_DATA":
            return {...state, cart: action.payload}
            
        case "ADD_TO_CART":
            return {...state, cart: action.payload}

        case "REMOVE_CART_CARD":
            return {...state, cart: action.payload}

        case "INCREMENT_CART_QUANTITY":
            return {...state, cart: action.payload}

        case "DECREMENT_CART_QUANTITY":
            return {...state, cart: action.payload}

        default:
            return state
    }
}