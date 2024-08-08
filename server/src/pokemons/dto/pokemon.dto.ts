// src/pokemons/dto/pokemon.dto.ts

export class PokemonSimpleDto {
  id: string;
  name: string;
  imageUrl: string;
}

export class PokemonDetailedDto {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}
