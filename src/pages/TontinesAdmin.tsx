// src/pages/TontinesAdmin.tsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface Tontine {
  id: number;
  nom: string;
  frequence: string;
  participantsActuels: number;
  participantsMax: number;
}

const TontinesAdmin: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // Paramètre utilisateur
  const [tontines, setTontines] = useState<Tontine[]>([]);
  const [loading, setLoading] = useState(true);

  // Fonction simulée pour récupérer les tontines
  const fetchTontinesByUser = (userId: string): Promise<Tontine[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            nom: "Tontine Épargne Été",
            frequence: "Mensuelle",
            participantsActuels: 5,
            participantsMax: 10,
          },
          {
            id: 2,
            nom: "Tontine Vacances",
            frequence: "Hebdomadaire",
            participantsActuels: 8,
            participantsMax: 8,
          },
        ]);
      }, 500); // Simule un délai d'appel API
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchTontinesByUser(userId || "")
      .then((data) => {
        setTontines(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement :", error);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
        Mes Tontines
      </h1>
      {loading ? (
        <p className="text-center text-gray-500">Chargement...</p>
      ) : tontines.length === 0 ? (
        <p className="text-center text-gray-500">Aucune tontine créée.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tontines.map((tontine) => (
            <div
              key={tontine.id}
              className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {tontine.nom}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Fréquence :</strong> {tontine.frequence}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Participants :</strong> {tontine.participantsActuels}{" "}
                  / {tontine.participantsMax}
                </p>
                <Link
                  to={`/user/${userId}/tontines/${tontine.id}`}
                  className="block mt-4 text-center text-white no-underline bg-[#93d500] py-2 px-4 rounded-lg hover:bg-[#628d00] transition-colors"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TontinesAdmin;
