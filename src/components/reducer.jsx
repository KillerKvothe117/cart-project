const reducer = (state, action) => {
  switch (true) {
    case action.type === "CLEAR_CART":
      return { ...state, cart: [] };

    case action.type === "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };

    // case action.type === "INCREASE":
    //   const tempCart = state.cart.map((cartItem) => {
    //     if (cartItem.id === action.payload) {
    //       return { ...cartItem, amount: cartItem.amount + 1 };
    //     }
    //     return cartItem;
    //   });
    //   return { ...state, cart: tempCart };

    // case action.type === "DECREASE":
    //   const tempcart = state.cart
    //     .map((cartItem) => {
    //       if (cartItem.id === action.payload) {
    //         return { ...cartItem, amount: cartItem.amount - 1 };
    //       }
    //       return cartItem;
    //     })
    //     .filter((cartItem) => cartItem.amount !== 0);
    //   return { ...state, cart: tempcart };

    case action.type === "TOGGLE_AMOUNT":
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...cartItem, amount: cartItem.amount + 1 };
            } else if (action.payload.type === "dec") {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: tempCart };

    case action.type === "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));

      return { ...state, total, amount };

    case action.type === "LOADING":
      return { ...state, loading: true };

    case action.type === "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };

    default:
      throw new Error("No matching action type");
  }
};

export default reducer;
