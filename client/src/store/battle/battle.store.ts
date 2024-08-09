import { create } from 'zustand';
import { BattleStore } from '../../interfaces/global.interfaces';

export const useBattleStore = create<BattleStore>((set) => ({
  allPokemons: [],
  selectedPokemon: null,
  randomPokemon: null,
  result: null,
  setAllPokemons: (pokemons) => set({ allPokemons: pokemons }),
  setSelectedPokemon: (pokemon) => set({ selectedPokemon: pokemon }),
  setRandomPokemon: (pokemon) => set({ randomPokemon: pokemon }),
  setResult: (result) => set({ result }),
  resetBattle: () =>
    set({
      selectedPokemon: null,
      randomPokemon: null,
      result: null,
    }),
}));