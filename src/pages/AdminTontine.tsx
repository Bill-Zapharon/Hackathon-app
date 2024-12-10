// src/pages/AdminTontine.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Member {
  id: number;
  name: string;
  email: string;
  status: "pending" | "approved" | "rejected";
}

const AdminTontine: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  // Charger les membres depuis l'API
  useEffect(() => {
    fetch(`/api/tontines/${id}/members`)
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur de chargement des membres :", err);
        setLoading(false);
      });
  }, [id]);

  // Mettre à jour le statut d'un membre
  const handleUpdateStatus = (
    memberId: number,
    newStatus: "approved" | "rejected"
  ) => {
    fetch(`/api/members/${memberId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors de la mise à jour");
        setMembers((prevMembers) =>
          prevMembers.map((member) =>
            member.id === memberId ? { ...member, status: newStatus } : member
          )
        );
      })
      .catch((err) => console.error("Erreur de mise à jour du statut :", err));
  };

  if (loading) {
    return <p className="text-center mt-10">Chargement des membres...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">Gestion des membres</h1>
      {members.length === 0 ? (
        <p className="text-center text-gray-500">
          Aucun membre inscrit pour cette tontine.
        </p>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Nom</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Statut</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {member.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {member.status === "pending" && (
                    <span className="text-yellow-500">En attente</span>
                  )}
                  {member.status === "approved" && (
                    <span className="text-green-500">Approuvé</span>
                  )}
                  {member.status === "rejected" && (
                    <span className="text-red-500">Rejeté</span>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2 space-x-2">
                  {member.status === "pending" && (
                    <>
                      <button
                        onClick={() =>
                          handleUpdateStatus(member.id, "approved")
                        }
                        className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600"
                      >
                        Approuver
                      </button>
                      <button
                        onClick={() =>
                          handleUpdateStatus(member.id, "rejected")
                        }
                        className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                      >
                        Rejeter
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminTontine;
