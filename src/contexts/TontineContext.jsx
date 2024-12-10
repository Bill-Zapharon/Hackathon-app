// src/contexts/TontineContext.jsx
import React, { createContext, useContext, useState } from "react";

// Créez le contexte
const TontineContext = createContext(undefined);

// Fournisseur de contexte
export const TontineProvider = ({ children }) => {
  const [tontines, setTontines] = useState([]);

  return (
    <TontineContext.Provider value={{ tontines, setTontines }}>
      {children}
    </TontineContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useTontines = () => {
  const context = useContext(TontineContext);
  if (!context) {
    throw new Error("useTontines doit être utilisé dans un TontineProvider");
  }
  return context;
};
