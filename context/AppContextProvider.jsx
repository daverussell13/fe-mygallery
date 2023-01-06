import { createContext, useState } from "react";

export const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  const [isLogged, setLogged] = useState(false);

  const value = {
    isLogged,
    setLogged,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
