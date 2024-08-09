import React, { useState } from "react";
// Asegúrate de que la ruta sea correcta
import styles from "./battle.module.css";
import { CardBattle } from "../../components";
import { useBattleStore } from "../../store/battle/battle.store";
import { isNotNullOrUndefined } from "../../utils/utils";
import { useApi } from "../../context/apiContext";
import { Alert, Button } from "@mui/material";

const Battle: React.FC = () => {
  const {
    selectedPokemon,
    randomPokemon,
    allPokemons,
    setRandomPokemon,
    setResult,
    result,
    resetBattle,
  } = useBattleStore();
  const { postBattle } = useApi();
  const [loading, setLoading] = useState<boolean>(false);

  // Functions
  const handleStartBattle = async () => {
    if (selectedPokemon && !randomPokemon) {
      setLoading(true);
      try {
        const filteredPokemons = allPokemons.filter(
          (pokemon) => pokemon.id !== selectedPokemon.id
        );
        const randomIndex = Math.floor(Math.random() * filteredPokemons.length);
        const newRandomPokemon = filteredPokemons[randomIndex];

        setRandomPokemon(newRandomPokemon);

        const battleResult = await postBattle(
          selectedPokemon.id,
          newRandomPokemon.id
        );
        setResult(battleResult);
      } catch (error) {
        console.error("Error starting battle:", error);
      } finally {
        setLoading(false); // Oculta el indicador de carga
      }
    }
  };

  return (
    <>
      {result && (
        <Alert severity="success">The Winner is {result.winner.name}</Alert>
      )}
      <section className={styles.battleContainer}>
        {isNotNullOrUndefined(selectedPokemon) && (
          <CardBattle pokemonId={selectedPokemon?.id} />
        )}
        {isNotNullOrUndefined(selectedPokemon) && (
          <div className={styles.buttonsContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartBattle}
              disabled={!selectedPokemon || !!randomPokemon || loading}
              className={styles.startBattleButton}
            >
              VS
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={resetBattle}
              disabled={!result}
              className={styles.startBattleButton}
            >
              RESTART
            </Button>
          </div>
        )}
        {isNotNullOrUndefined(randomPokemon) && (
          <CardBattle pokemonId={randomPokemon?.id} />
        )}
      </section>
    </>
  );
};

export default Battle;
