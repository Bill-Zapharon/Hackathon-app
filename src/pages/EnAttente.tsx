// src/pages/EnAttente.tsx
import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const EnAttente: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const tontineNom = location.state?.tontineNom || "Tontine inconnue";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-yellow-500 mb-4">
        Demande en attente
      </h1>
      <p className="text-center text-gray-700 max-w-md">
        Votre demande pour rejoindre la tontine <strong>{tontineNom}</strong> a
        été soumise avec succès. Veuillez patienter pendant que l’administrateur
        examine votre demande. Vous recevrez une notification dès qu’une
        décision sera prise.
      </p>
      <p className="text-center text-gray-500 mt-4 max-w-md">
        Si vous avez des questions, n’hésitez pas à consulter notre{" "}
        <Link to="/faq" className="text-blue-500 hover:underline">
          FAQ
        </Link>{" "}
        ou à contacter notre{" "}
        <Link to="/support" className="text-blue-500 hover:underline">
          support
        </Link>
        .
      </p>
      <Link to="/listestontine">
        <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
          Retour à la liste des tontines
        </button>
      </Link>
    </div>
  );
};

export default EnAttente;
