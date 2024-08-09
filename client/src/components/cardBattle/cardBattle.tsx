import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, LinearProgress } from "@mui/material";

import { useApi } from "../../context/apiContext";
import { CardBattleProps } from "./cardBattle.inetrface";
import { Pokemon } from "../../interfaces/global.interfaces";
import Loading from "../loader/loading/loading";

const CardBattle: React.FC<CardBattleProps> = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { getPokemonById } = useApi();

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!pokemonId) return;

      setLoading(true);
      try {
        const data = await getPokemonById(pokemonId);
        setPokemon(data);
      } catch (error) {
        console.error(`Error fetching Pokemon`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonId, getPokemonById]);

  if (loading) {
    return <Loading />;
  }

  if (!pokemon) {
    return (
      <Card style={{ backgroundColor: "#e0e0e0" }}>
        <CardContent>
          <Typography variant="h6">No Pokémon Selected</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card style={{ height: "auto", width: "200px" }}>
      <CardContent>
        <img
          src={pokemon?.imageUrl}
          alt={pokemon?.name}
          style={{ width: "100%" }}
        />
        <Typography variant="h6">{pokemon.name}</Typography>
        <Typography variant="body2">Attack: {pokemon.attack ?? 0}</Typography>
        <LinearProgress
          variant="determinate"
          value={((pokemon.attack ?? 0) / 10) * 100}
        />

        <Typography variant="body2">Defense: {pokemon.defense ?? 0}</Typography>
        <LinearProgress
          variant="determinate"
          value={((pokemon.defense ?? 0) / 10) * 100}
        />

        <Typography variant="body2">HP: {pokemon.hp ?? 0}</Typography>
        <LinearProgress
          variant="determinate"
          value={((pokemon.hp ?? 0) / 10) * 100}
        />

        <Typography variant="body2">Speed: {pokemon.speed ?? 0}</Typography>
        <LinearProgress
          variant="determinate"
          value={((pokemon.speed ?? 0) / 10) * 100}
        />

        <Typography variant="body2">Type: {pokemon.type}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardBattle;
