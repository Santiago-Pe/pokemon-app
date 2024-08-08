// src/battle/battle.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Pokemons from '../../pokemons/entity/pokemons.entity';

@Entity()
export class Battles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pokemon1Id: string;

  @Column()
  pokemon2Id: string;

  @Column()
  winnerId: string;

  @ManyToOne(() => Pokemons)
  pokemon1: Pokemons;

  @ManyToOne(() => Pokemons)
  pokemon2: Pokemons;

  @ManyToOne(() => Pokemons)
  winner: Pokemons;
}
