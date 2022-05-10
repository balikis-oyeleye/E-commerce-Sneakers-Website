import { createContext, useContext, useReducer } from "react";
import { reducer } from "./Reducers";
import { Data } from "../components/data";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: Data,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
