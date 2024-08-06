// src/pokemon/pokemon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Pokemons from '../entity/pokemons.entity';

import * as fs from 'fs';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemons)
    private readonly pokemonRepository: Repository<Pokemons>,
  ) {}

  async onModuleInit() {
    const count = await this.pokemonRepository.count();
    if (count === 0) {
      const data = fs.readFileSync('../../data/pokemon.json', 'utf8');
      const pokemons: Pokemons[] = JSON.parse(data);
      await this.pokemonRepository.save(pokemons);
    }
  }

  findAll(): Promise<Pokemons[]> {
    return this.pokemonRepository.find();
  }
}
