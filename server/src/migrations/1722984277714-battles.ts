import { MigrationInterface, QueryRunner } from 'typeorm';

export class Battles1722984277714 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "battles" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        "pokemon1Id" INTEGER NOT NULL,
        "pokemon2Id" INTEGER NOT NULL,
        "winnerId" INTEGER NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "battles"`);
  }
}
