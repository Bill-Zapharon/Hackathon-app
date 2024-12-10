// src/context/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Définition du type pour l'utilisateur
interface User {
  id: string;
  nom: string;
  email: string;
}

// Définir le type du contexte
interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Création du contexte avec une valeur par défaut
const UserContext = createContext<UserContextType | undefined>(undefined);

// Création du provider pour l'utilisateur
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null); // Initialiser l'utilisateur à null

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte de l'utilisateur
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
