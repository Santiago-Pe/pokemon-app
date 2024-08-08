// src/pokemon/pokemon.controller.ts
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import Pokemons from '../entity/pokemons.entity';
import { PokemonsService } from '../services/pokemons.services';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  // Get all pokemons
  @Get()
  findAll(): Promise<Pokemons[]> {
    return this.pokemonService.findAll();
  }

  // Get by id
  @Get(':id')
    async findOne(@Param('id') id: string): Promise<Pokemons> {
    const pokemon = await this.pokemonService.findOne(id);
    if (!pokemon) {
      throw new NotFoundException(`Pokemon with ID ${id} not found`);
    }
    return pokemon;
  }
}
