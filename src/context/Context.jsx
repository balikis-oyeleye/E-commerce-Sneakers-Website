import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { reducer } from "./Reducers";
import { Data } from "../components/data";

const Cart = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: Data,
    cart: [],
  });

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(
      state.cart.reduce((prev, current) => prev + Number(current.qty), 0)
    );
  }, [state.cart]);

  return (
    <Cart.Provider value={{ state, itemCount, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Cart);
};

export default AppContextProvider;
