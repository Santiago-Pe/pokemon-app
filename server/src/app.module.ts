import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemons/module/pokemons.module';
import { BattlesModule } from './battles/module/battles.module';
import { AppDataSource } from './ormconfig';


@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    PokemonModule,
    BattlesModule,
  ],
})
export class AppModule {}
