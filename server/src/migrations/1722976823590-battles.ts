import { MigrationInterface, QueryRunner } from "typeorm";

export class BattlesMigration1722976823590 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "battles" (
                "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                "pokemon1Id" FLOAT NOT NULL,
                "pokemon2Id" FLOAT NOT NULL,
                "winnerId" FLOAT NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "battles"`);
    }
}
