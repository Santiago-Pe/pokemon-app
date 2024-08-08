// src/pokemon/pokemon.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Pokemons from '../entity/pokemons.entity';
import { PokemonsService } from '../services/pokemons.services';
import { PokemonsController } from '../controller/pokemons.controller';



@Module({
  imports: [TypeOrmModule.forFeature([Pokemons])],
  providers: [PokemonsService],
  controllers: [PokemonsController],
})
export class PokemonModule {}
