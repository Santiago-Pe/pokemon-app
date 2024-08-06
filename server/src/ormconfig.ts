// ormconfig.ts
import { DataSource } from 'typeorm';
import Pokemons from './pokemons/entity/pokemons.entity';
import { Battles } from './battles/entity/battles.entity';


export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'pokemon_battle.db',
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
