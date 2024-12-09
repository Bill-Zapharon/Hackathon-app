// src/pages/TontineDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Tontine } from "./Tontine";

interface TontineDetailsProps {
  tontines: Tontine[];
}

const TontineDetails: React.FC<TontineDetailsProps> = ({ tontines }) => {
  const { tontineId } = useParams<{ tontineId: string }>();
  const tontine = tontines.find((t) => t.id === parseInt(tontineId || ""));

  if (!tontine) {
    return <p>Tontine non trouvée</p>;
  }

  return (
    <div>
      <h1>{tontine.nom}</h1>
      <p>Fréquence: {tontine.frequence}</p>
      <p>Description: {tontine.description}</p>
      <p>
        Participants: {tontine.participantsActuels} / {tontine.participantsMax}
      </p>
      <p>Montant: {tontine.montant}€</p>
    </div>
  );
};

export default TontineDetails;
