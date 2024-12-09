// src/components/TontineList.tsx
import React from "react";
import { Link } from "react-router-dom"; // Importer Link pour la navigation
import { Tontine } from "./Tontine";

interface TontineListProps {
  tontines: Tontine[];
}

const TontineList: React.FC<TontineListProps> = ({ tontines }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl text-center font-bold mb-6">
        Tontines disponibles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tontines.map((tontine) => (
          <div
            key={tontine.id}
            className="bg-white p-4 shadow-lg rounded-lg flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold mb-2">{tontine.nom}</h3>
            <p className="text-gray-600 mb-2">Fréquence: {tontine.frequence}</p>
            <p className="text-gray-600 mb-2">
              Nombre de participants: {tontine.participantsActuels}/
              {tontine.participantsMax}
            </p>
            <p className="text-gray-600 mb-4">
              Montant à verser: {tontine.montant}€
            </p>

            {/* Lien vers la page des détails de la tontine */}
            <Link
              to={`/tontine/${tontine.id}`}
              className="bg-[#1c3b72] text-center no-underline text-white py-2 px-4 rounded-md transition-all transform hover:scale-105 hover:bg-[#16448e] duration-300"
            >
              Détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TontineList;
