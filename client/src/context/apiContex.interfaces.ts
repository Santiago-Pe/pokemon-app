import { Battle, Pokemon } from "../interfaces/global.interfaces";


export interface ApiContextProps {
  getPokemons: () => Promise<Pokemon[]>;
  getPokemonById: (id: string) => Promise<Pokemon>;
  postBattle: (pokemon1Id: string, pokemon2Id: string) => Promise<Battle>;
  getBattles: () => Promise<Battle[]>;
}
