import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './models/pokemons/pokemon.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PokemonModule],
})
export class AppModule {}
