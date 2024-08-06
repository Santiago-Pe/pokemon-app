import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import Pokemon from '../entities/pokemons/pokemon.entity';


@Injectable()
export class DataSeederService {
  constructor(
    @InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>,
  ) {}

  async seedData() {
    try {
      const jsonData = fs.readFileSync('path/to/your/pokemon.json', 'utf8');
      const data = JSON.parse(jsonData);

      for (const pokemonData of data) {
        const pokemon = new Pokemon();
        pokemon.name = pokemonData.name;
        pokemon.attack = pokemonData.attack;
        pokemon.defense = pokemonData.defense;
        pokemon.hp = pokemonData.hp;
        pokemon.speed = pokemonData.speed;
        pokemon.type = pokemonData.type;
        pokemon.imageUrl = pokemonData.imageUrl;

        await this.pokemonRepository.save(pokemon);
      }

      console.log('Pokemon data seeded successfully');
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  }
}
