import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export default class Pokemons {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

 @Column({ type: 'float' })
  attack: number;

  @Column({ type: 'float' })
  defense: number;

   @Column({ type: 'float' })
  hp: number;

   @Column({ type: 'float' })
  speed: number;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'varchar', length: 2048 }) 
  imageUrl: string
}