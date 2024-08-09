import React, { useCallback } from "react";
import styles from "./pokemonList.module.css";
import { SmallCard } from "../../components";
import { useBattleStore } from "../../store/battle/battle.store";
import { Pokemon } from "../../interfaces/global.interfaces";

const PokemonList: React.FC = () => {
  const { allPokemons, setSelectedPokemon, selectedPokemon } = useBattleStore(
    (state) => ({
      allPokemons: state.allPokemons,
      setSelectedPokemon: state.setSelectedPokemon,
      selectedPokemon: state.selectedPokemon,
      randomPokemon: state.randomPokemon,
    })
  );

  const handleSelectPokemon = useCallback(
    (currentPokemon: Pokemon) => {
      setSelectedPokemon(currentPokemon);
    },
    [selectedPokemon, setSelectedPokemon]
  );

  return (
    <div>
      <ul className={styles.containerList}>
        {allPokemons.map((pokemon) => {
          const isSelected = pokemon.id === selectedPokemon?.id;
          //const isDisabled = !!selectedPokemon;
          return (
            <SmallCard
              imageUrl={pokemon.imageUrl}
              name={pokemon.name}
              key={pokemon.id}
              onClick={() => handleSelectPokemon(pokemon)}
              isSelected={isSelected}
              //isDisabled={isDisabled && !isSelected}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonList;
