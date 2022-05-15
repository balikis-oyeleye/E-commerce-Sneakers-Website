import { nanoid } from "nanoid";

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload.id),
      };
    case "INCREASE_ITEM":
      const increaseItem = state.cart.map((item) => {
        if (item.name === action.payload.name) {
          return { ...item, qty: item.qty + 1, id: nanoid() };
        }
        return item;
      });
      return { ...state, cart: increaseItem };
    default:
      return state;
  }
};
