import { createContext } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const values = {
    a: "A value",
    b: "B value",
    c: "C value",
    d: "D value",
    e: "E value",
    f: "F value"
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
}
