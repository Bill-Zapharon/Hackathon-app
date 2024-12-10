export interface Tontine {
  id: number;
  nom: string;
  frequence: string;
  participantsActuels: number;
  participantsMax: number;
  montant: number;
  description: string;
  status: string;
  nextPaymentDate: string;
  ownerId: number;
  participants: number[];
  details?: { title: string; status: string }[];
}
