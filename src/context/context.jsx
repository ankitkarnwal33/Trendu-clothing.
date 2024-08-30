"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export default function ContextWrapper({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const value = {
    cartCount,
    setCartCount,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
