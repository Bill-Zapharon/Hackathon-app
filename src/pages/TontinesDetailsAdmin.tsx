// src/pages/TontineDetailsAdmin.tsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

interface Member {
  id: number;
  name: string;
  email: string;
  status: "pending" | "approved" | "rejected";
}

interface Tontine {
  id: number;
  nom: string;
  description: string;
  frequence: string;
  montant: number;
  participantsActuels: number;
  participantsMax: number;
  members: Member[];
}

const TontineDetailsAdmin: React.FC = () => {
  const { userId, tontineId } = useParams<{
    userId: string;
    tontineId: string;
  }>();
  const [tontine, setTontine] = useState<Tontine | null>(null);
  const [loading, setLoading] = useState(true);

  // Simuler une API pour récupérer les détails de la tontine
  const fetchTontineDetails = (tontineId: string): Promise<Tontine> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: parseInt(tontineId, 10),
          nom: "Tontine Épargne Été",
          description: "Une tontine pour économiser pour les vacances.",
          frequence: "Mensuelle",
          montant: 100,
          participantsActuels: 5,
          participantsMax: 10,
          members: [
            {
              id: 1,
              name: "Alice",
              email: "alice@example.com",
              status: "approved",
            },
            { id: 2, name: "Bob", email: "bob@example.com", status: "pending" },
            {
              id: 3,
              name: "Charlie",
              email: "charlie@example.com",
              status: "rejected",
            },
          ],
        });
      }, 500); // Simule un délai
    });
  };

  // Simuler une API pour mettre à jour le statut d'un membre
  const updateMemberStatus = (
    memberId: number,
    newStatus: "approved" | "rejected"
  ): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500); // Simule un délai
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchTontineDetails(tontineId || "")
      .then((data) => {
        setTontine(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur :", error);
        setLoading(false);
      });
  }, [tontineId]);

  const handleStatusChange = (
    memberId: number,
    newStatus: "approved" | "rejected"
  ) => {
    // Mettre à jour le statut dans le backend (simulé ici)
    updateMemberStatus(memberId, newStatus)
      .then(() => {
        // Mettre à jour localement l'état après l'action
        if (tontine) {
          setTontine({
            ...tontine,
            members: tontine.members.map((member) =>
              member.id === memberId ? { ...member, status: newStatus } : member
            ),
          });
        }
      })
      .catch((err) => console.error("Erreur de mise à jour :", err));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {loading ? (
        <p className="text-center text-gray-500">Chargement...</p>
      ) : tontine ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{tontine.nom}</h1>
          <p className="mb-4 text-gray-700">{tontine.description}</p>
          <h2 className="text-xl font-semibold mt-6">Participants</h2>
          <ul className="mt-4 space-y-4">
            {tontine.members.map((member) => (
              <li key={member.id} className="flex items-center justify-between">
                <span>
                  {member.name} - {member.email}
                </span>
                {member.status === "pending" ? (
                  <div className="space-x-2">
                    <button
                      onClick={() => handleStatusChange(member.id, "approved")}
                      className="bg-green-500 border-none text-white py-1 px-3 rounded-lg hover:bg-green-600"
                    >
                      Approuver
                    </button>
                    <button
                      onClick={() => handleStatusChange(member.id, "rejected")}
                      className="bg-red-500 border-none text-white py-1 px-3 rounded-lg hover:bg-red-600"
                    >
                      Rejeter
                    </button>
                  </div>
                ) : (
                  <span
                    className={`${
                      member.status === "approved"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {member.status === "approved" ? "Approuvé" : "Rejeté"}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <Link to={`/user/${userId}/tontines`}>
            <button className="mt-6 bg-blue-700 border-none text-white py-2 px-6 rounded-lg hover:bg-[#1c3b72]">
              Retour à mes tontines
            </button>
          </Link>
        </>
      ) : (
        <p className="text-center text-red-500">Tontine introuvable.</p>
      )}
    </div>
  );
};

export default TontineDetailsAdmin;
