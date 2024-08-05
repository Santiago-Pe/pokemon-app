import { Controller, Get, Post, Body } from '@nestjs/common';
import { PokemonService } from '../../services/pokemons/pokemon.service';
import Pokemon from '../../entities/pokemons/pokemon.entity';


@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Post('battle')
  async battle(@Body() body: { pokemon1Id: number; pokemon2Id: number }) {
    const { pokemon1Id, pokemon2Id } = body;
    const winner = await this.pokemonService.battle(pokemon1Id, pokemon2Id);
    return { winner };
  }
}
