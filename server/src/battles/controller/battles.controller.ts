// src/battle/battle.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { BattlesService } from '../services/battles.services';
import { Battles } from '../entity/battles.entity';


@Controller('battle')
export class BattlesController {
  constructor(private readonly battleService: BattlesService) {}

  @Get()
  findAll(): Promise<Battles[]> {
    return this.battleService.findAll();
  }

  @Post()
  async createBattle(
    @Body('pokemon1Id') pokemon1Id: number,
    @Body('pokemon2Id') pokemon2Id: number,
  ): Promise<Battles> {
    return this.battleService.createBattle(pokemon1Id, pokemon2Id);
  }
}
