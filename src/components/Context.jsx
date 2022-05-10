import { createContext } from "react";
import { Data } from "./data";

const Cart = createContext();

const Context = ({ children }) => {
  return <Cart.Provider>{children}</Cart.Provider>;
};
