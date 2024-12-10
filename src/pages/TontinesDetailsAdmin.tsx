import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

interface Member {
  id: number;
  name: string;
  email: string;
  details: string; // Détails supplémentaires sur le membre
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
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Simule l'API pour récupérer les détails de la tontine
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
              details:
                "Alice est ingénieure et aime économiser pour ses projets.",
              status: "approved",
            },
            {
              id: 2,
              name: "Bob",
              email: "bob@example.com",
              details: "Bob est étudiant et souhaite épargner pour un voyage.",
              status: "pending",
            },
            {
              id: 3,
              name: "Charlie",
              email: "charlie@example.com",
              details:
                "Charlie est entrepreneur et a une forte expérience financière.",
              status: "rejected",
            },
          ],
        });
      }, 500); // Simule un délai
    });
  };

  // Simule l'API pour mettre à jour le statut d'un membre
  const updateMemberStatus = (
    memberId: number,
    newStatus: "approved" | "rejected"
  ): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `Statut de l'utilisateur ${memberId} mis à jour à ${newStatus}`
        );
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
    if (tontine) {
      // Met à jour l'état local du statut du membre
      const updatedMembers = tontine.members.map((member) =>
        member.id === memberId ? { ...member, status: newStatus } : member
      );

      setTontine({
        ...tontine,
        members: updatedMembers,
      });

      // Met à jour le statut sur le serveur simulé
      updateMemberStatus(memberId, newStatus)
        .then(() => {
          alert(
            `Le statut de ${
              tontine.members.find((m) => m.id === memberId)?.name
            } a été mis à jour à ${newStatus}.`
          );
        })
        .catch((err) => console.error("Erreur de mise à jour :", err));
    }
  };

  return (
    <div className="max-w-full px-4 sm:px-6 md:px-8 py-6 bg-white shadow-lg rounded-lg mt-6 mx-auto">
      {loading ? (
        <p className="text-center text-gray-500">Chargement...</p>
      ) : tontine ? (
        <>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            {tontine.nom}
          </h1>
          <p className="mb-4 text-gray-700 text-center text-sm sm:text-base">
            {tontine.description}
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6">
            Participants
          </h2>
          <ul className="mt-4 grid gap-4 sm:gap-6">
            {tontine.members.map((member) => (
              <li
                key={member.id}
                className="flex flex-wrap items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm"
              >
                <span className="text-sm sm:text-base">
                  {member.name} - {member.email}
                </span>
                <div className="space-x-2 flex mt-2 sm:mt-0">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="bg-blue-500 border-none text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-600"
                  >
                    Détails
                  </button>
                  <button
                    onClick={() => handleStatusChange(member.id, "approved")}
                    className={`${
                      member.status === "approved"
                        ? "bg-green-500 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    } border-none text-white text-sm px-3 py-1 rounded-lg`}
                    disabled={member.status === "approved"}
                  >
                    Approuver
                  </button>
                  <button
                    onClick={() => handleStatusChange(member.id, "rejected")}
                    className={`${
                      member.status === "rejected"
                        ? "bg-red-500 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600"
                    } border-none text-white text-sm px-3 py-1 rounded-lg`}
                    disabled={member.status === "rejected"}
                  >
                    Rejeter
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <Link to={`/user/${userId}/tontines`}>
            <button className="mt-6 bg-blue-700 text-sm sm:text-base border-none text-white py-2 px-6 rounded-lg hover:bg-[#1c3b72] w-full sm:w-auto">
              Retour à mes tontines
            </button>
          </Link>
          {selectedMember && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2">
                <h3 className="text-xl font-bold mb-4">
                  Détails de {selectedMember.name}
                </h3>
                <p className="mb-4 text-gray-700">{selectedMember.details}</p>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-red-500">Tontine introuvable.</p>
      )}
    </div>
  );
};

export default TontineDetailsAdmin;
