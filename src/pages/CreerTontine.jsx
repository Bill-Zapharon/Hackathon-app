import { useState } from 'react';

function CreateTontine() {
  const [formData, setFormData] = useState({
    name: '',
    frequency: 'hebdomadaire',
    numberOfParticipants: 1,
    amount: 0,
    interval: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#1c3b72]">Créer une Tontine</h2>
      <form onSubmit={handleSubmit}>
        {/* Nom de la tontine */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom de la tontine</label>
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
          <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">Fréquence</label>
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
          <label htmlFor="numberOfParticipants" className="block text-sm font-medium text-gray-700">Nombre de participants</label>
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
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Montant à payer</label>
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

        {/* Intervalle de temps en heures */}
        <div className="mb-4">
          <label htmlFor="interval" className="block text-sm font-medium text-gray-700">Intervalle de temps (en heures)</label>
          <input
            type="number"
            id="interval"
            name="interval"
            value={formData.interval}
            onChange={handleChange}
            min="1"
            required
            className="mt-1 block w-full p-2 border border-blue-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Bouton de soumission */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-[#93d500] text-white font-bold py-2 px-4 border-none rounded-md hover:bg-[#628d00] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Créer la Tontine
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTontine;
