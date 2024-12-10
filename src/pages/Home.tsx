import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Gérez vos tontines en toute simplicité
          </h1>
          <p className="text-lg sm:text-2xl mb-8">
            Rejoignez une communauté transparente et efficace. Planifiez, suivez
            et collaborez sans effort.
          </p>
          <button className="px-6 py-3 bg-white text-blue-700 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-200">
            Commencer maintenant
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Fonctionnalités</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <img
                src="/path/to/icon1.svg"
                alt="Gestion transparente"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Gestion transparente
              </h3>
              <p className="text-gray-600">
                Gardez une vue claire sur les participants, les paiements et les
                cycles de tontine.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <img
                src="/path/to/icon2.svg"
                alt="Paiements sécurisés"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Paiements sécurisés
              </h3>
              <p className="text-gray-600">
                Automatisez et sécurisez les contributions et la répartition des
                fonds.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <img
                src="/path/to/icon3.svg"
                alt="Support client"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Support dédié</h3>
              <p className="text-gray-600">
                Une équipe disponible pour répondre à toutes vos questions en
                temps réel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Comment ça fonctionne</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">1. Inscrivez-vous</h3>
              <p className="text-gray-600">
                Créez un compte et accédez à toutes les fonctionnalités.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">2. Créez ou rejoignez</h3>
              <p className="text-gray-600">
                Lancez votre propre tontine ou participez à une existante.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">3. Gérez et collaborez</h3>
              <p className="text-gray-600">
                Suivez les paiements, les ordres et les cycles en toute
                transparence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à transformer votre tontine ?
          </h2>
          <button className="px-6 py-3 bg-white text-blue-700 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-200">
            Rejoindre maintenant
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
