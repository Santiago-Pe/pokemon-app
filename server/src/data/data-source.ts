import { DataSource } from 'typeorm';
import Pokemon from './pokemon/pokemon.entity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Pokemon],
  migrations: ['src/migrations/**/*.{ts}'],
  synchronize: true,
  migrationsTableName: 'pokemons',
});
