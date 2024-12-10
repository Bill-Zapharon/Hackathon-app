import DataTable from "../components/DataTable";

const Historique = () => {

    const historiquePaiements = [
        {
          date: "01/12/2024",
          tontine: "Tontine A",
          montant: "5 000 FCFA",
          statut: "Payé",
        },
        {
          date: "05/12/2024",
          tontine: "Tontine B",
          montant: "10 000 FCFA",
          statut: "En attente",
        },
        {
          date: "08/12/2024",
          tontine: "Tontine C",
          montant: "7 000 FCFA",
          statut: "Retard",
        },
      ];

  return (
    <div>
        <section className="w-full mt-8">
        <h2 className="text-lg font-semibold text-textPrimary mb-4">
          Historique des Paiements
        </h2>
        <div className="overflow-x-auto">
          <DataTable
            title="Historique des Paiements"
            headers={["Date", "Tontine", "Montant", "Statut"]}
            data={historiquePaiements}
          />
        </div>
      </section>
    </div>
  )
}

export default Historique