// import CartItem from "./cartItem";

const reducer = (state, action) => {
  switch (true) {
    case action.type === "CLEAR_CART":
      return { ...state, cart: [] };
    case action.type === "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
