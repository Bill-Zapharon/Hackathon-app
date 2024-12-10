// src/pages/TontineList.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Tontine } from "./Tontine";

interface TontineListProps {
  tontines: Tontine[];
}

const TontineList: React.FC<TontineListProps> = ({ tontines }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Liste des Tontines
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {tontines.map((tontine) => (
          <div
            key={tontine.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {tontine.nom}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-medium">Fréquence :</span>{" "}
              {tontine.frequence}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Participants :</span>{" "}
              {tontine.participantsActuels} / {tontine.participantsMax}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Montant :</span> {tontine.montant} €
            </p>
            <Link to={`/tontine/${tontine.id}`}>
              <button className="mt-4 w-full bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform cursor-pointer">
                Voir Détails
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exportation par défaut du composant
export default TontineList;
