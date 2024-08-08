import React, { useEffect, useState } from "react";
import { Pokemon } from "../../interfaces/global.interfaces";
import { useApi } from "../../context/apiContext";
import { SmallCard } from "../../components";

import styles from "./homePage.module.css";

const Home: React.FC = () => {
  const { getPokemons, getBattles } = useApi();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPokemons = await getPokemons();
        setPokemons(allPokemons);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [getPokemons, getBattles]);

  return (
    <section>
      <h1>Pokémon Battles</h1>
      <ul className={styles.containerList}>
        {pokemons.map((pokemon) => (
          <SmallCard
            imageUrl={pokemon.imageUrl}
            name={pokemon.name}
            key={pokemon.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Home;
