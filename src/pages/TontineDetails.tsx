// src/pages/TontineDetails.tsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTontines } from "../contexts/TontineContext";
import { Tontine } from "./Tontine";

const TontineDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tontines } = useTontines();
  const [tontine, setTontine] = useState<Tontine | null>(null);
  const [loading, setLoading] = useState(true);

  const handleJoinTontine = (tontineId) => {
    alert(`Rejoindre la Tontine avec ID: ${tontineId}`);
    // Plus tard, cette fonction déclenchera un appel API
  };

  useEffect(() => {
    if (tontines && id) {
      const foundTontine = tontines.find((t) => t.id === parseInt(id, 10));
      setTontine(foundTontine || null);
      setLoading(false);
    }
  }, [tontines, id]);

  if (loading) {
    return <p className="text-center mt-10">Chargement des détails...</p>;
  }

  if (!tontine) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 font-semibold">Tontine non trouvée.</p>
        <Link to="/listestontine">
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Retour à la liste des tontines
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{tontine.nom}</h1>
      <p className="text-lg mb-2">
        <span className="font-semibold">Fréquence :</span> {tontine.frequence}
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Description :</span>{" "}
        {tontine.description || "Aucune description disponible."}
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Participants :</span>{" "}
        {tontine.participantsActuels} / {tontine.participantsMax}
      </p>
      <p className="text-lg mb-4">
        <span className="font-semibold">Montant :</span>{" "}
        {tontine.montant.toLocaleString()} €
      </p>

      <div className="flex flex-col items-center space-y-4 mt-4">
        <Link to="/listestontine">
          <button className="w-full max-w-xs bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 cursor-pointer">
            Retour à la liste
          </button>
        </Link>
        <button
          onClick={() => handleJoinTontine(tontine.id)}
          className="w-full max-w-xs bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 cursor-pointer"
        >
          Rejoindre cette Tontine
        </button>
      </div>
    </div>
  );
};

export default TontineDetails;
