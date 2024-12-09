import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Card";
import {
  faMoneyBillWave,
  faUsers,
  faWallet,
  faChartPie,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import DataTable from "../components/DataTable";
const Dashboard = () => {
  const cardData = [
    {
      title: "Contributions Totales",
      description: "250 000 FCFA",
      icon: faMoneyBillWave,
      iconClassName: "text-green-500",
    },
    {
      title: "Tontines Actives",
      description: 3,
      icon: faUsers,
      iconClassName: "text-blue-500",
    },
    {
      title: "Montant Collecté",
      description: "500 000 FCFA",
      icon: faWallet,
      iconClassName: "text-purple-500",
    },
    {
      title: "Taux de Participation",
      description: "75%",
      icon: faChartPie,
    },
  ];

  const tontines = [
    {
      name: "Tontine Mensuelle",
      nextPaymentDate: "2024-12-15",
      status: "En cours",
      isOwner: true,
      details: [
        { title: "Contributions reçues", status: "En cours" },
        { title: "Montant collecté", status: "Terminé" },
        { title: "Prochain participant", status: "En attente" },
      ],
    },
    {
      name: "Tontine Hebdomadaire",
      nextPaymentDate: "2024-12-10",
      status: "Terminé",
      isOwner: false,
      details: [
        { title: "Contributions reçues", status: "Terminé" },
        { title: "Montant collecté", status: "Terminé" },
      ],
    },
  ];

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
    <div className="bg-grisClair w-full">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((data) => {
            return (
              <Card
                key={data.title}
                title={data.title}
                description={data.description}
                icon={data.icon}
              />
            );
          })}
        </div>
      </section>

      <section className="mt-8">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-textPrimary mb-6">
            Tontines Actives
          </h2>
          <a
            href=""
            className="group no-underline flex items-center space-x-1 hover:underline text-textPrimary hover:text-secondary"
          >
            <span>Voir plus</span>

            <FontAwesomeIcon
              icon={faChevronRight}
              className="w-2 h-2 group-hover:translate-x-2 transition-transform duration-200"
            />
          </a>
        </div>

        <div className="space-y-4">
          {tontines.map((tontine, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <div>
                <h3 className="text-base font-medium text-gray-800">
                  {tontine.name}
                </h3>
                <p
                  className={`text-sm font-medium ${
                    tontine.status === "En cours"
                      ? "text-yellow-600"
                      : tontine.status === "Terminé"
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {tontine.status}
                </p>
              </div>
              <div>
                <button className="px-4 py-2 outline-none border-none cursor-pointer bg-[#93d500] text-white text-sm font-medium rounded-md hover:bg-[#628d00] transition-colors duration-200">
                  Voir détails
                  {tontine.isOwner && (
                    <span className="ml-2 text-xs font-light text-gray-200">
                      (Propriétaire)
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

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
  );
};

export default Dashboard;
