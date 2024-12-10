// src/context/UserContext.jsx
import React, { createContext, useContext, useState } from "react";

// Création du contexte avec une valeur par défaut
const UserContext = createContext(undefined);

// Création du provider pour l'utilisateur
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialiser l'utilisateur à null

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte de l'utilisateur
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
