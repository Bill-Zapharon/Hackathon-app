// src/pages/TontinePage.tsx
import React, { useState, useEffect } from "react";
import TontineList from ".//TontineList";
import { Tontine } from "./Tontine";

// Fonction pour générer des données aléatoires pour les tontines
const generateRandomTontines = (): Tontine[] => {
  const tontines: Tontine[] = [];
  const frequenceOptions: ("Hebdomadaire" | "Mensuelle")[] = [
    "Hebdomadaire",
    "Mensuelle",
  ];

  // Liste de descriptions possibles
  const descriptions = [
    "Une tontine hebdomadaire où les participants se retrouvent chaque semaine pour contribuer et recevoir une somme.",
    "Cette tontine mensuelle permet aux participants de se réunir une fois par mois pour contribuer.",
    "Participez à une tontine dynamique avec un fort esprit de camaraderie et de partage.",
    "Une tontine avec un faible nombre de participants pour créer une communauté plus intime.",
    "Rejoignez une tontine avec des rendements attractifs et une forte participation.",
  ];

  // Générer 5 tontines aléatoires
  for (let i = 1; i <= 5; i++) {
    const frequence =
      frequenceOptions[Math.floor(Math.random() * frequenceOptions.length)];
    const participantsMax = Math.floor(Math.random() * 10) + 5; // Nombre de participants max entre 5 et 15
    const participantsActuels = Math.floor(Math.random() * participantsMax);
    const montant = Math.floor(Math.random() * 100) + 20; // Montant entre 20€ et 120€
    const description =
      descriptions[Math.floor(Math.random() * descriptions.length)];

    tontines.push({
      id: i,
      nom: `Tontine ${i}`,
      frequence,
      participantsActuels,
      participantsMax,
      montant,
      description, // Ajout de la description
    });
  }

  return tontines;
};

const TontinePage: React.FC = () => {
  const [tontines, setTontines] = useState<Tontine[]>([]);

  useEffect(() => {
    // Simuler la récupération de données aléatoires en attendant le backend
    const tontinesData = generateRandomTontines();
    setTontines(tontinesData);
  }, []);

  return (
    <div>
      {/* Vérification que tontines est défini et n'est pas vide */}
      {tontines.length > 0 ? (
        <TontineList tontines={tontines} />
      ) : (
        <p>Chargement des tontines...</p>
      )}
    </div>
  );
};

export default TontinePage;
