import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  async battle(pokemon1Id: number, pokemon2Id: number): Promise<any> {
    // Obtiene los Pokémon por sus IDs
    const [pokemon1, pokemon2] = await Promise.all([
      this.pokemonRepository.findOne(pokemon1Id),
      this.pokemonRepository.findOne(pokemon2Id),
    ]);

    // Verifica si ambos Pokémon existen
    if (!pokemon1 || !pokemon2) throw new Error('Pokémon not found');

    // Determina el orden de los turnos
    let turnOrder = [pokemon1, pokemon2];
    if (pokemon1.speed === pokemon2.speed) {
      turnOrder =
        pokemon1.attack >= pokemon2.attack
          ? [pokemon1, pokemon2]
          : [pokemon2, pokemon1];
    } else {
      turnOrder =
        pokemon1.speed > pokemon2.speed
          ? [pokemon1, pokemon2]
          : [pokemon2, pokemon1];
    }

    // Ejecuta la batalla
    let winner = null;
    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
      for (const attacker of turnOrder) {
        const defender = attacker === pokemon1 ? pokemon2 : pokemon1;
        const damage = Math.max(attacker.attack - defender.defense, 1);
        defender.hp -= damage;
        if (defender.hp <= 0) {
          winner = attacker;
          break;
        }
      }
      if (winner) break;
    }

    // Guarda el resultado de la batalla (opcional)
    // Implementa la lógica de almacenamiento si es necesario

    return winner;
  }
}
