import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import {
  faMoneyBillWave,
  faUsers,
  faWallet,
  faChartPie,
  faChevronRight,
  faPlus, // Ajoutez cette ligne
  faSignInAlt, // Ajoutez cette ligne
} from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/creertontine");
  };
  const handleNavigate1 = () => {
    navigate("/listestontine");
  };

  const handleDetailsClick = () => {
    navigate("/infotontine");
  };
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

  return (
    <div className="bg-grisClair w-full">
      {/* Section Image */}
      <div className="relative h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-2xl">
        <img
          src="/src/assets/tontine.jpg" // Remplace avec ton URL d'image
          alt="Dashboard"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Les Cartes */}
      <section className="-mt-12 md:-mt-16 lg:-mt-20 z-10 relative px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Section Boutons */}
      <section className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Créer une Tontine */}
        <div
          onClick={handleNavigate}
          className="bg-[#93d500]  text-white font-semibold text-lg p-6 rounded-xl shadow-md flex items-center justify-center w-full md:w-1/2 lg:w-1/3 cursor-pointer transition-transform transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-3 text-2xl" />
          Créer une tontine
        </div>

        {/* Rejoindre une Tontine */}
        <div
          onClick={handleNavigate1}
          className="bg-blue-900  text-white font-semibold text-lg p-6 rounded-xl shadow-md flex items-center justify-center w-full md:w-1/2 lg:w-1/3 cursor-pointer transition-transform transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faSignInAlt} className="mr-3 text-2xl" />
          Rejoindre une tontine
        </div>
      </section>

      <section className="mt-8">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-textPrimary mb-6">
            Tontines Actives
          </h2>
          <a
            href="/user/:userId/tontines"
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
                <button
                  onClick={handleDetailsClick}
                  className="px-4 py-2 outline-none border-none cursor-pointer bg-[#93d500] text-white text-sm font-medium rounded-md hover:bg-[#628d00] transition-colors duration-200"
                >
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
    </div>
  );
};

export default Dashboard;
