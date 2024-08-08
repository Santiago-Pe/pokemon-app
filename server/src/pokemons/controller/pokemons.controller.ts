// src/pokemon/pokemon.controller.ts

import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PokemonsService } from '../services/pokemons.services';
import { PokemonSimpleDto, PokemonDetailedDto } from '../dto/pokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  // Obtener todos los Pokémon (id, name, imageUrl)
  @Get()
  findAll(): Promise<PokemonSimpleDto[]> {
    return this.pokemonService.findAll();
  }

  // Obtener un Pokémon por ID con todos los detalles
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PokemonDetailedDto> {
    const pokemon = await this.pokemonService.findOne(id);
    if (!pokemon) {
      throw new NotFoundException(`Pokemon with ID ${id} not found`);
    }
    return pokemon;
  }
}
