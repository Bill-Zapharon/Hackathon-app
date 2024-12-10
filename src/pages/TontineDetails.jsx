import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const TontineDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tontine, setTontine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTontineDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/tontines/${id}`);
      if (!response.ok) {
        throw new Error("Tontine non trouvée ou erreur serveur.");
      }
      const data = await response.json();
      setTontine(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Erreur lors de la récupération des données.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTontineDetails();
    }
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Chargement des détails...</p>;
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 font-semibold">{error}</p>
        <Link to="/listestontine">
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Retour à la liste des tontines
          </button>
        </Link>
      </div>
    );
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
          <button className="w-full max-w-xs bg-blue-700 border-none text-white py-3 px-6 rounded-lg hover:bg-[#1c3b72] transition-transform transform hover:scale-105 cursor-pointer">
            Retour à la liste
          </button>
        </Link>
        <button
          onClick={() =>
            navigate(`/en-attente/${tontine.id}`, {
              state: { tontineNom: tontine.nom },
            })
          }
          className="w-full max-w-xs bg-[#93d500] border-none text-white py-3 px-6 rounded-lg hover:bg-[#628d00] transition-transform transform hover:scale-105 cursor-pointer"
        >
          Rejoindre cette Tontine
        </button>
      </div>
    </div>
  );
};

export default TontineDetails;
