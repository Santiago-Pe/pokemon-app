export interface Pokemon {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
}

export interface Battle {
  id: number;
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  winner: Pokemon;
}