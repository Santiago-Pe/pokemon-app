import { MigrationInterface, QueryRunner } from "typeorm";

export class PokemonsMigration1722976805203 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "pokemons" (
                "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" VARCHAR(255) NOT NULL,
                "attack" FLOAT NOT NULL,
                "defense" FLOAT NOT NULL,
                "hp" FLOAT NOT NULL,
                "speed" FLOAT NOT NULL,
                "type" VARCHAR(255) NOT NULL,
                "imageUrl" VARCHAR(2048) NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pokemons"`);
    }
}
