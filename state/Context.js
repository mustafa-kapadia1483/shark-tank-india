import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  const [investments, setInvestments] = useState([]);
  return (
    <Context.Provider
      value={{ brands, setBrands, investments, setInvestments }}
    >
      {children}
    </Context.Provider>
  );
};
