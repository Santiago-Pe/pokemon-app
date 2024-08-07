// src/pokemon/pokemon.controller.ts
import { Controller, Get } from '@nestjs/common';
import Pokemons from '../entity/pokemons.entity';
import { PokemonsService } from '../services/pokemons.services';


@Controller('pokemon')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  @Get()
  findAll(): Promise<Pokemons[]> {
    return this.pokemonService.findAll();
  }
}
