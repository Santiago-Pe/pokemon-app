export interface Pokemon {
  id: string;         
  name: string;       
  type: string;       
  imageUrl: string;   
  attack?: number;   
  defense?: number;  
  hp?: number;       
  speed?: number;    
}


export interface BattleStore {
  allPokemons: Pokemon[]; 
  selectedPokemon: Pokemon | null; 
  randomPokemon: Pokemon | null;
  result: BattleResult | null; 
  setAllPokemons: (pokemons: Pokemon[]) => void;
  setSelectedPokemon: (pokemon: Pokemon) => void;
  setRandomPokemon: (pokemon: Pokemon) => void;
  setResult: (result: BattleResult) => void; 
  resetBattle: () => void; 
}
export interface BattleResult {
  id: number;
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  winner: Pokemon; 
}