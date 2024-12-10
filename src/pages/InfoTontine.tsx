import React, { useEffect, useState } from "react";
import axios from "axios";

interface Member {
  id: number;
  name: string;
  order: number;
  status: "done" | "pending";
  pickupDate: string | null;
  nextPickupDate: string | null;
}

const InfoTontine: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  // Récupération des membres depuis l'API JSON Server
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/members")
      .then((response) => {
        setMembers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des membres :", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-full px-4 py-6 bg-gray-100 shadow-md rounded-lg mt-6 mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Ordre de Ramassage
      </h1>
      {loading ? (
        <p className="text-center text-gray-500">Chargement...</p>
      ) : (
        <table className="w-full table-auto bg-white shadow rounded-lg">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Nom</th>
              <th className="px-4 py-2">Statut</th>
              <th className="px-4 py-2">Date de Mise</th>
              <th className="px-4 py-2">Prochain Ramassage</th>
            </tr>
          </thead>
          <tbody>
            {members
              .sort((a, b) => a.order - b.order) // Trier par ordre de ramassage
              .map((member) => (
                <tr
                  key={member.id}
                  className="border-b text-center hover:bg-gray-100"
                >
                  <td className="px-4 py-2">{member.order}</td>
                  <td className="px-4 py-2">{member.name}</td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      member.status === "done"
                        ? "text-green-600"
                        : "text-orange-500"
                    }`}
                  >
                    {member.status === "done" ? "Mise prise" : "En attente"}
                  </td>
                  <td className="px-4 py-2">
                    {member.pickupDate
                      ? new Date(member.pickupDate).toLocaleDateString()
                      : "—"}
                  </td>
                  <td className="px-4 py-2">
                    {member.nextPickupDate
                      ? new Date(member.nextPickupDate).toLocaleDateString()
                      : "—"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InfoTontine;
