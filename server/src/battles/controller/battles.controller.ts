// src/battle/battle.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BattlesService } from '../services/battles.services';
import { CreateBattleDto, BattleDto } from '../dto/dto.battle';

@Controller('battle')
export class BattlesController {
  constructor(private readonly battleService: BattlesService) {}

  @Get()
  async findAllWithDetails(): Promise<BattleDto[]> {
    return this.battleService.findAllWithDetails();
  }

  @Post()
  async createBattle(@Body() createBattleDto: CreateBattleDto): Promise<BattleDto> {
    return this.battleService.createBattle(createBattleDto);
  }
}
