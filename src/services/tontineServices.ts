// src/services/tontineService.ts
import { Tontine } from "../pages/Tontine";

export const fetchTontines = async (): Promise<Tontine[]> => {
  // Simuler une requête réseau
  return new Promise((resolve) => {
    setTimeout(() => {
      const frequenceOptions: ("Hebdomadaire" | "Mensuelle")[] = [
        "Hebdomadaire",
        "Mensuelle",
      ];
      const descriptions = [
        "Une tontine hebdomadaire où les participants se retrouvent chaque semaine pour contribuer et recevoir une somme.",
        "Cette tontine mensuelle permet aux participants de se réunir une fois par mois pour contribuer.",
        "Participez à une tontine dynamique avec un fort esprit de camaraderie et de partage.",
        "Une tontine avec un faible nombre de participants pour créer une communauté plus intime.",
        "Rejoignez une tontine avec des rendements attractifs et une forte participation.",
      ];

      const tontines: Tontine[] = Array.from({ length: 5 }, (_, i) => {
        const frequence =
          frequenceOptions[Math.floor(Math.random() * frequenceOptions.length)];
        const participantsMax = Math.floor(Math.random() * 10) + 5;
        const participantsActuels = Math.floor(Math.random() * participantsMax);
        const montant = Math.floor(Math.random() * 100) + 20;
        const description =
          descriptions[Math.floor(Math.random() * descriptions.length)];

        return {
          id: i + 1,
          nom: `Tontine ${i + 1}`,
          frequence,
          participantsActuels,
          participantsMax,
          montant,
          description,
        };
      });

      resolve(tontines);
    }, 1000); // Simule une attente de 1 seconde
  });
};
