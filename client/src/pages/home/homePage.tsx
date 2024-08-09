import React, { useEffect, useState } from "react";
import { useApi } from "../../context/apiContext";
import { Link, Typography } from "@mui/material";
import { Battle, PokemonList } from "../../sections";
import Loading from "../../components/loader/loading/loading";
import styles from "./homePage.module.css";
import { useBattleStore } from "../../store/battle/battle.store";

const Home: React.FC = () => {
  const { getPokemons } = useApi();
  const { setAllPokemons, allPokemons } = useBattleStore();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPokemons = await getPokemons();
        setAllPokemons(fetchedPokemons);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getPokemons, setAllPokemons]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className={styles.container}>
      <Typography variant="h4" component="h1" className={styles.title}>
        Pokémon Battles
      </Typography>
      <Link href="/battle-log" underline="none">
        Logs
      </Link>
      <Typography variant="h5" component="h2" className={styles.subtitle}>
        Select your pokemon
      </Typography>

      <PokemonList />
      {allPokemons.length > 0 && <Battle />}
    </section>
  );
};

export default Home;
