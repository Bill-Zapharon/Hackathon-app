// src/services/tontineServices.ts

// Récupérer les tontines avec les détails des utilisateurs associés
export const fetchTontines = async () => {
  try {
    const response = await fetch("http://localhost:5000/tontines");
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des tontines");
    }
    const tontinesData = await response.json();

    // Récupérer les utilisateurs pour les associer aux tontines
    const usersResponse = await fetch("http://localhost:5000/users");
    if (!usersResponse.ok) {
      throw new Error("Erreur lors de la récupération des utilisateurs");
    }
    const usersData = await usersResponse.json();

    // Enrichir chaque tontine avec les informations des utilisateurs (propriétaire et participants)
    const enrichedTontines = tontinesData.map((tontine) => {
      const owner = usersData.find((user) => user.id === tontine.ownerId);
      const participants = tontine.participants.map((participantId) =>
        usersData.find((user) => user.id === participantId)
      );
      return { ...tontine, owner, participants };
    });

    return enrichedTontines;
  } catch (error) {
    console.error(error);
    return [];
  }
};
