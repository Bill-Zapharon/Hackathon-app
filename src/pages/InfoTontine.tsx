import React, { useEffect, useState } from "react";
import axios from "axios";

interface Member {
  id: number;
  name: string;
  order: number;
  status: "done" | "pending";
  receivedDate: string | null; // Date réelle de mise
}

const InfoTontine: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextPickupDate, setNextPickupDate] = useState<string | null>(null);

  const frequency = 7; // En jours (hebdomadaire dans cet exemple)

  // Calcul de la prochaine date de ramassage
  const calculateNextPickupDate = (members: Member[]) => {
    const today = new Date();
    const pendingMembers = members.filter(
      (member) => member.status === "pending"
    );

    if (pendingMembers.length > 0) {
      const firstPending = pendingMembers[0]; // Premier membre en attente
      const startDate = firstPending.receivedDate
        ? new Date(firstPending.receivedDate)
        : today;

      const nextDate = new Date(startDate);
      nextDate.setDate(
        nextDate.getDate() + frequency * (firstPending.order - 1)
      );
      return nextDate.toISOString();
    }
    return null;
  };

  // Récupération des membres depuis l'API JSON Server
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/members")
      .then((response) => {
        const membersData = response.data;
        setMembers(membersData);
        setNextPickupDate(calculateNextPickupDate(membersData));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des membres :", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-full px-4 py-6 bg-gray-50 shadow-md rounded-lg mt-6 mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        Ordre de Ramassage
      </h1>
      {loading ? (
        <p className="text-center text-gray-500">Chargement...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {members
              .sort((a, b) => a.order - b.order) // Trier par ordre de ramassage
              .map((member) => {
                const today = new Date();
                const expectedDate = new Date(today);
                expectedDate.setDate(
                  today.getDate() + frequency * (member.order - 1)
                );

                return (
                  <div
                    key={member.id}
                    className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-xl font-semibold text-gray-700">
                        #{member.order} - {member.name}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          member.status === "done"
                            ? "bg-green-100 text-green-600"
                            : "bg-orange-100 text-orange-500"
                        }`}
                      >
                        {member.status === "done" ? "Mise prise" : "En attente"}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>
                        {member.status === "done" ? (
                          <>
                            <span className="font-medium text-gray-800">
                              A reçu sa mise le :
                            </span>{" "}
                            {member.receivedDate
                              ? new Date(
                                  member.receivedDate
                                ).toLocaleDateString()
                              : "—"}
                          </>
                        ) : (
                          <>
                            <span className="font-medium text-gray-800">
                              Obtiendra sa mise le :
                            </span>{" "}
                            {expectedDate.toLocaleDateString()}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="mt-6 bg-blue-100 text-blue-800 text-center py-3 rounded-lg">
            <p className="font-medium">
              Prochain Ramassage :{" "}
              <span className="font-semibold">
                {nextPickupDate
                  ? new Date(nextPickupDate).toLocaleDateString()
                  : "Non défini"}
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoTontine;
