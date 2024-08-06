// src/battle/battle.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battles } from '../entity/battles.entity';
import Pokemons from '../../pokemons/entity/pokemons.entity';
import { BattlesService } from '../services/battles.services';
import { BattlesController } from '../controller/battles.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Battles, Pokemons])],
  providers: [BattlesService],
  controllers: [BattlesController],
})
export class BattlesModule {}
