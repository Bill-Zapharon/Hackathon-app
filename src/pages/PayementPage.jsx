import React, { useEffect, useState } from "react";
import axios from "axios";

const PayementPage = () => {
  const [tontines, setTontines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTontines = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tontines");
        setTontines(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des tontines", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTontines();
  }, []);

  const getPaymentAmount = (tontine) => {
    const today = new Date();
    const nextPaymentDate = new Date(tontine.nextPaymentDate);

    if (
      tontine.frequence === "Mensuelle" &&
      today.getMonth() === nextPaymentDate.getMonth()
    ) {
      return tontine.montant;
    }

    if (
      tontine.frequence === "Hebdomadaire" &&
      isSameWeek(today, nextPaymentDate)
    ) {
      return tontine.montant;
    }

    return 0;
  };

  const isSameWeek = (date1, date2) => {
    const startOfWeek1 = new Date(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate() - date1.getDay()
    );
    const startOfWeek2 = new Date(
      date2.getFullYear(),
      date2.getMonth(),
      date2.getDate() - date2.getDay()
    );

    return startOfWeek1.getTime() === startOfWeek2.getTime();
  };

  const handlePayment = async (amount) => {
    setLoading(true);
    try {
      await axios.post("https://api.celtis.com/payment", {
        amount,
        method: "card",
      });
      setPaymentStatus("Paiement effectué avec succès !");
    } catch (err) {
      setError("Le paiement a échoué. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Payer votre part de la tontine
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Voici les montants à payer pour les tontines auxquelles vous participez
        :
      </p>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        tontines.map((tontine) => {
          const amountToPay = getPaymentAmount(tontine);
          return amountToPay > 0 ? (
            <div
              key={tontine.id}
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-6 flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {tontine.nom}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Montant à payer : {amountToPay} FCFA
              </p>
              <button
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-300"
                onClick={() => handlePayment(amountToPay)}
                disabled={loading}
              >
                {loading ? "Paiement en cours..." : "Payer maintenant"}
              </button>
            </div>
          ) : null;
        })
      )}

      {paymentStatus && (
        <p className="mt-4 text-green-600 font-semibold text-lg">
          {paymentStatus}
        </p>
      )}
      {error && (
        <p className="mt-4 text-red-600 font-semibold text-lg">{error}</p>
      )}
    </div>
  );
};

export default PayementPage;
