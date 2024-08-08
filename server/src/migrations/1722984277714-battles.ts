import { MigrationInterface, QueryRunner } from 'typeorm';

export class Battles1722984277714 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE "battles" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            "pokemon1Id" VARCHAR NOT NULL,
            "pokemon2Id" VARCHAR NOT NULL,
            "winnerId" VARCHAR NOT NULL,
            CONSTRAINT "FK_pokemon1" FOREIGN KEY ("pokemon1Id") REFERENCES "pokemons"("id") ON DELETE CASCADE,
            CONSTRAINT "FK_pokemon2" FOREIGN KEY ("pokemon2Id") REFERENCES "pokemons"("id") ON DELETE CASCADE,
            CONSTRAINT "FK_winner" FOREIGN KEY ("winnerId") REFERENCES "pokemons"("id") ON DELETE CASCADE
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "battles"`);
  }
}
