import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = "Daulat";
  const age = 29;

  return (
    <BioContext.Provider value={{ myName, age }}>
      {children}
    </BioContext.Provider>
  );
};
