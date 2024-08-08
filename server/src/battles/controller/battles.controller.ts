// src/battle/battle.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BattlesService } from '../services/battles.services';
import { Battles } from '../entity/battles.entity';

@Controller('battle')
export class BattlesController {
  constructor(private readonly battleService: BattlesService) {}

@Get()
  async findAllWithDetails() {
    return this.battleService.findAllWithDetails();
  }

  @Post()
  async createBattle(
    @Body('pokemon1Id') pokemon1Id: string,
    @Body('pokemon2Id') pokemon2Id: string,
  ): Promise<Battles> {
    return this.battleService.createBattle(pokemon1Id, pokemon2Id);
  }
}
