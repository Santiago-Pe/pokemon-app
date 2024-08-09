// src/sections/battleLog/battleLogSection.tsx
import React, { useEffect, useState } from "react";
import { useApi } from "../../context/apiContext";

import { BattleResult } from "../../interfaces/global.interfaces";
import DataTable from "../../components/dataTable/dataTable";
import { Loading } from "../../components";

const BattleLogSection = () => {
  const [battles, setBattles] = useState<BattleResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { getBattles } = useApi();

  useEffect(() => {
    const fetchBattles = async () => {
      try {
        const data = await getBattles();
        setBattles(data);
      } catch (err) {
        setError("Error fetching battles");
      } finally {
        setLoading(false);
      }
    };

    fetchBattles();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return <DataTable rows={battles} />;
};

export default BattleLogSection;
