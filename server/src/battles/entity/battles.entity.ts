// src/battle/battle.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Battles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  pokemon1Id: number;

  @Column({ type: 'int' })
  pokemon2Id: number;

  @Column({ type: 'int' })
  winnerId: number;
}
