import { DataSource } from 'typeorm';
import Pokemons from './pokemons/entity/pokemons.entity';
import { Battles } from './battles/entity/battles.entity';
import * as dotenv from 'dotenv';

dotenv.config();

const databaseType = process.env.DATABASE_TYPE as 'sqlite';
const databaseFile = process.env.DATABASE_FILE || 'pokemon_battle.db'; 

if (!databaseType) {
  throw new Error('DATABASE_TYPE must be defined in the .env file');
}

export const AppDataSource = new DataSource({
  type: databaseType,
  database: databaseFile,
  entities: [Pokemons, Battles],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // Cambiar a false para producción
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
