import React, { useEffect } from "react";
import TontineList from "./TontineList";
import { useTontines } from "../contexts/TontineContext";
import { fetchTontines } from "../services/tontineServices";

const TontinePage = () => {
  const { tontines, setTontines } = useTontines();

  useEffect(() => {
    const loadTontines = async () => {
      const tontinesData = await fetchTontines();
      setTontines(tontinesData);
    };
    loadTontines();
  }, [setTontines]);

  return (
    <div>
      {tontines.length > 0 ? (
        <TontineList tontines={tontines} />
      ) : (
        <p>Chargement des tontines...</p>
      )}
    </div>
  );
};

export default TontinePage;
