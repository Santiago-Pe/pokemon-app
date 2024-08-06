// src/battle/battle.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Battles } from '../entity/battles.entity';
import Pokemons from '../../pokemons/entity/pokemons.entity';


@Injectable()
export class BattlesService {
  constructor(
    @InjectRepository(Battles)
    private readonly battleRepository: Repository<Battles>,
    @InjectRepository(Pokemons)
    private readonly pokemonRepository: Repository<Pokemons>,
  ) {}

  findAll(): Promise<Battles[]> {
    return this.battleRepository.find();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createBattle(pokemon1Id: number, pokemon2Id: number): Promise<Battles> {
    const pokemon1 = await this.pokemonRepository.findOne( null);
    const pokemon2 = await this.pokemonRepository.findOne(null);
    let winner: Pokemons;

    if (!pokemon1 || !pokemon2) {
      throw new Error('Pokémon no encontrado');
    }

    // Determinar el ganador basado en las reglas
    const [first, second] = pokemon1.speed >= pokemon2.speed ? [pokemon1, pokemon2] : [pokemon2, pokemon1];

    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
      const damage1 = Math.max(first.attack - second.defense, 1);
      second.hp -= damage1;
      if (second.hp <= 0) {
        winner = first;
        break;
      }
      
      const damage2 = Math.max(second.attack - first.defense, 1);
      first.hp -= damage2;
      if (first.hp <= 0) {
        winner = second;
        break;
      }
    }

    const battle = this.battleRepository.create({
      pokemon1Id: pokemon1.id,
      pokemon2Id: pokemon2.id,
      winnerId: winner.id,
    });

    return this.battleRepository.save(battle);
  }
}
