// src/scripts/list-pokemons.ts
import { AppDataSource } from '../ormconfig'; // Ajusta la ruta según tu estructura de carpetas
import Pokemons from '../pokemons/entity/pokemons.entity'; // Ajusta la ruta según tu estructura de carpetas

async function listPokemons() {
  await AppDataSource.initialize();

  const pokemonRepository = AppDataSource.getRepository(Pokemons);

  // Retrieve all pokemons
  const pokemons = await pokemonRepository.find();

  // Display the pokemons
  console.log('List of Pokemons:');
  pokemons.forEach(pokemon => {
    console.log(pokemon);
  });

  await AppDataSource.destroy();
}

listPokemons().catch(error => console.error('Error listing pokemons:', error));
