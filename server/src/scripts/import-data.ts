import * as fs from 'fs';
import * as path from 'path';
import Pokemons from '../pokemons/entity/pokemons.entity'; // Ajusta la ruta según tu estructura de carpetas
import { AppDataSource } from '../ormconfig'; // Ajusta la ruta según tu estructura de carpetas

async function importData() {
  await AppDataSource.initialize();
  
  // Construct the path to the JSON file
  const dataFilePath = path.resolve(__dirname, '../../src/data/pokemons.json');
  console.log(`Looking for data file at: ${dataFilePath}`);
  
  // Check if data needs to be imported
  if (fs.existsSync(dataFilePath)) {
    console.log('Data file found.');
    
    // Read data from JSON file
    const rawData = fs.readFileSync(dataFilePath, 'utf-8');
    const jsonData = JSON.parse(rawData);
    const pokemons = jsonData.pokemon;
    console.log('Data file read and parsed successfully.');

    // Insert data into the database
    const pokemonRepository = AppDataSource.getRepository(Pokemons);
    await pokemonRepository.save(pokemons);
    console.log('Data has been imported successfully!');

    // Confirm the number of records in the table
    const count = await pokemonRepository.count();
    console.log(`There are now ${count} records in the Pokemons table.`);
  } else {
    console.log('No data file found.');
  }

  await AppDataSource.destroy();
}

importData().catch(error => console.error('Error importing data:', error));
