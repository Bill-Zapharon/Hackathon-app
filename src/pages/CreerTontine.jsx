import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importer les icônes

function CreateTontine() {
  const [formData, setFormData] = useState({
    name: '',
    frequency: 'hebdomadaire',
    numberOfParticipants: 1,
    amount: 0,
    description: '', // Nouveau champ pour la description
  });

  const [step, setStep] = useState(1); // 1: Formulaire, 2: Résumé

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2); // Passer à la deuxième étape (Résumé)
    } else {
      console.log('Form Data:', formData);
      // Ici, tu peux ajouter la logique pour envoyer les données au backend ou les traiter
    }
  };

  const handlePrev = () => {
    setStep(1); // Retourner à l'étape 1
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#1c3b72]">
        Créer une Tontine
      </h2>
      
      {step === 1 ? (
        // Étape 1 : Remplir le formulaire
        <form onSubmit={handleSubmit} className="transition-all duration-500 ease-in-out">
          {/* Nom de la tontine */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom de la tontine
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border-blue-600 shadow-xl rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Choix de la fréquence */}
          <div className="mb-4">
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
              Fréquence
            </label>
            <select
              id="frequency"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="hebdomadaire">Hebdomadaire</option>
              <option value="mensuel">Mensuel</option>
            </select>
          </div>

          {/* Nombre de participants */}
          <div className="mb-4">
            <label htmlFor="numberOfParticipants" className="block text-sm font-medium text-gray-700">
              Nombre de participants
            </label>
            <input
              type="number"
              id="numberOfParticipants"
              name="numberOfParticipants"
              value={formData.numberOfParticipants}
              onChange={handleChange}
              min="1"
              required
              className="mt-1 block w-full p-2 border border-blue-600 rounded-md shadow-xl focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Montant à payer */}
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Montant à payer
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              min="0"
              required
              className="mt-1 block w-full p-2 border border-blue-600 rounded-md shadow-xl focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Description de la tontine (nouveau champ) */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description de la Tontine
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-blue-600 rounded-md shadow-xl focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>

          {/* Boutons : Suivant */}
          <div className="flex justify-between">
            <div></div>
            <div>
              <button
                type="submit"
                className="bg-[#93d500] border-none text-white font-bold py-2 px-4 rounded-md hover:bg-[#628d00] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              >
                <FaArrowRight className="inline mr-2" />
                Suivant
              </button>
            </div>
          </div>
        </form>
      ) : (
        // Étape 2 : Résumé des informations
        <div className="transition-all duration-500 ease-in-out">
          <h3 className="text-xl font-semibold mb-4 text-[#1c3b72]">Résumé</h3>
          <ul>
            <li><strong>Nom de la Tontine:</strong> {formData.name}</li>
            <li><strong>Fréquence:</strong> {formData.frequency}</li>
            <li><strong>Nombre de participants:</strong> {formData.numberOfParticipants}</li>
            <li><strong>Montant à payer:</strong> {formData.amount} FCFA</li>
            <li><strong>Description:</strong> {formData.description}</li> {/* Afficher la description */}
          </ul>

          {/* Boutons : Précédent et Créer */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={handlePrev}
              className="bg-blue-700 border-none text-white font-bold py-2 px-4 rounded-md hover:bg-[#1c3b72] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            >
              <FaArrowLeft className="inline mr-2" />
              Précédent
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#93d500] border-none text-white font-bold py-2 px-4 rounded-md hover:bg-[#628d00] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            >
              Créer la Tontine
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateTontine;
