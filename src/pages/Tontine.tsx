// src/types/Tontine.ts
export interface Tontine {
  id: number;
  nom: string;
  frequence: "Hebdomadaire" | "Mensuelle";
  participantsActuels: number;
  participantsMax: number;
  montant: number;
  description: string;
}
