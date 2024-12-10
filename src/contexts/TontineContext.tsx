// src/contexts/TontineContext.tsx
import React, { createContext, useContext, useState } from "react";
import { Tontine } from "../pages/Tontine";

// Type pour le contexte
interface TontineContextType {
  tontines: Tontine[];
  setTontines: React.Dispatch<React.SetStateAction<Tontine[]>>;
}

// Créez le contexte
const TontineContext = createContext<TontineContextType | undefined>(undefined);

// Fournisseur de contexte
export const TontineProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tontines, setTontines] = useState<Tontine[]>([]);

  return (
    <TontineContext.Provider value={{ tontines, setTontines }}>
      {children}
    </TontineContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useTontines = (): TontineContextType => {
  const context = useContext(TontineContext);
  if (!context) {
    throw new Error("useTontines doit être utilisé dans un TontineProvider");
  }
  return context;
};
