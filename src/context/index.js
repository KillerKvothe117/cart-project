import React, { useState, useContext, useReducer, useEffect } from "react";
import cartData from "../data";
import reducer from "../components/reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartData);

  return <AppContext.Provider value={{ cart }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
