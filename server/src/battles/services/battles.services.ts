// src/battle/battle.service.ts
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBattleDto, BattleDto, BattleDtoResponse } from '../dto/dto.battle';
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

  async findAllWithDetails(): Promise<BattleDto[]> {
    const battles = await this.battleRepository.createQueryBuilder('battle')
      .leftJoinAndSelect('battle.pokemon1', 'pokemon1')
      .leftJoinAndSelect('battle.pokemon2', 'pokemon2')
      .leftJoinAndSelect('battle.winner', 'winner')
      .getMany();

    return battles.map(battle => ({
      id: battle.id,
      pokemon1: {
        id: battle.pokemon1.id,
        name: battle.pokemon1.name,
        type: battle.pokemon1.type,
        imageUrl: battle.pokemon1.imageUrl,
      },
      pokemon2: {
        id: battle.pokemon2.id,
        name: battle.pokemon2.name,
        type: battle.pokemon2.type,
        imageUrl: battle.pokemon2.imageUrl,
      },
      winner: {
        id: battle.winner.id,
        name: battle.winner.name,
        type: battle.winner.type,
        imageUrl: battle.winner.imageUrl,
      },
    }));
  }

  async createBattle(createBattleDto: CreateBattleDto): Promise<BattleDtoResponse> {
    const { pokemon1Id, pokemon2Id } = createBattleDto;

    if (!pokemon1Id || !pokemon2Id) {
      throw new BadRequestException('Both Pokémon IDs must be provided.');
    }

    try {
      const [pokemon1, pokemon2] = await Promise.all([
        this.pokemonRepository.findOne({ where: { id: pokemon1Id } }),
        this.pokemonRepository.findOne({ where: { id: pokemon2Id } }),
      ]);

      if (!pokemon1) {
        throw new NotFoundException(`Pokémon with ID ${pokemon1Id} not found.`);
      }

      if (!pokemon2) {
        throw new NotFoundException(`Pokémon with ID ${pokemon2Id} not found.`);
      }

      let winner: Pokemons | null = null;

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

      if (!winner) {
        throw new InternalServerErrorException('No winner could be determined.');
      }

      const battle = this.battleRepository.create({
        pokemon1Id: pokemon1.id,
        pokemon2Id: pokemon2.id,
        winnerId: winner.id,
      });

      const savedBattle = await this.battleRepository.save(battle);

      return {
        id: savedBattle.id,
        pokemon1Id: pokemon1.id,
        pokemon2Id: pokemon2.id,
        winnerId: winner.id,
      };
    } catch (error) {
      console.error('Error creating battle:', error);
      throw new InternalServerErrorException('An error occurred while creating the battle.');
    }
  }
}
