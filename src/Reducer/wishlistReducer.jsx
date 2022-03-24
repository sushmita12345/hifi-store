export function wishlistReducer(state, action) {
    switch(action.type) {

        case "ADD_TO_WISHLIST":
            return {
              ...state,
              wishlist: [...state.wishlist, { ...action.payload, qty: 1 }]
            };
      
          case "REMOVE_FROM_WISHLIST":
            return {
              ...state,
              wishlist: [
                ...state.wishlist.filter((item) => item.id !== action.payload.id)
              ]
            };

        // case "MOVE_TO_CART":
        //     return {
        //       ...state, cart: [...state.cart, {...action.payload, qty: 1}]
        //     }
        default:
        return state;
    }
}