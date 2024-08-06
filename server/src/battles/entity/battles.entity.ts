// src/battle/battle.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Battles {
  @PrimaryGeneratedColumn()
  id: number;

 @Column({ type: 'float' })
  pokemon1Id: number;

 @Column({ type: 'float' })
  pokemon2Id: number;

 @Column({ type: 'float' })
  winnerId: number;
}
