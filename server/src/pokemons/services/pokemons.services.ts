// src/pokemon/pokemon.service.ts
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Pokemons from '../entity/pokemons.entity';

import * as fs from 'fs';
import path from 'path';
import { AppDataSource } from '../../ormconfig';
import { PokemonDetailedDto, PokemonSimpleDto } from '../dto/pokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemons)
    private readonly pokemonRepository: Repository<Pokemons>,
  ) {}

  //Services to  inyect data on database if there not exist
   async onModuleInit() {
    const count = await this.pokemonRepository.count();
    if (count === 0) {
      // Construct the path to the JSON file
      const dataFilePath = path.resolve(__dirname, '../../data/pokemons.json');
     

    if (fs.existsSync(dataFilePath)) {
    console.log('Data file found.');
    
    // Read data from JSON file
    const rawData = fs.readFileSync(dataFilePath, 'utf-8');
    const jsonData = JSON.parse(rawData);
    const pokemons = jsonData.pokemon;
    console.log('Data file read and parsed successfully.');

    // Insert data into the database
    const pokemonRepository = AppDataSource.getRepository(Pokemons);
    await pokemonRepository.save(pokemons);
    console.log('Data has been imported successfully!');

    // Confirm the number of records in the table
    const count = await pokemonRepository.count();
    console.log(`There are now ${count} records in the Pokemons table.`);
  } else {
    console.log('No data file found.');
  }
    }
  }

  // Services to get all pokemons
async findAll(): Promise<PokemonSimpleDto[]> {
    const pokemons = await this.pokemonRepository.find({
      select: ['id', 'name', 'imageUrl'],
    });
    return pokemons.map(pokemon => ({
      id: pokemon.id,
      name: pokemon.name,
      imageUrl: pokemon.imageUrl,
    }));
  }
  // Services to get pokemon by id
 async findOne(id: string): Promise<PokemonDetailedDto> {
    try {
      const pokemon = await this.pokemonRepository.findOne({ where: { id } });
      if (!pokemon) {
        throw new NotFoundException(`Pokemon not found`);
      }
      return {
        id: pokemon.id,
        name: pokemon.name,
        attack: pokemon.attack,
        defense: pokemon.defense,
        hp: pokemon.hp,
        speed: pokemon.speed,
        type: pokemon.type,
        imageUrl: pokemon.imageUrl,
      };
    } catch (error) {
      throw new InternalServerErrorException('Internal pokemon server error');
    }
  }
}
