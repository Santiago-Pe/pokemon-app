import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonController } from '../../controllers/pokemons/pokemon.controller';
import Pokemon from '../../entities/pokemons/pokemon.entity';
import { PokemonService } from '../../services/pokemons/pokemon.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
