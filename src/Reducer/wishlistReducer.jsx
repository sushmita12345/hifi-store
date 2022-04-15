export function wishlistReducer(state, action) {
    switch(action.type) {

        case "WISHLIST":
            return {
              ...state,
              wishlist: action.payload
            };

        default:
        return state;
    }
}