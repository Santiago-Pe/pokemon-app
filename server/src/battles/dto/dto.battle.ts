// src/battle/dto/battle.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBattleDto {
  @IsNotEmpty()
  @IsString()
  pokemon1Id: string;

  @IsNotEmpty()
  @IsString()
  pokemon2Id: string;
}
export class PokemonDto {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
}

export class BattleDto {
  id: number;
  pokemon1: PokemonDto;
  pokemon2: PokemonDto;
  winner: PokemonDto;
}

export class BattleDtoResponse {
  id: number;
  pokemon1Id: string;
  pokemon2Id: string;
  winnerId: string;
}
