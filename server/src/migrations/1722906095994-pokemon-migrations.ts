import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PokemonMigrations1722906095994 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'pokemon',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'attack',
          type: 'int',
        },
        {
          name: 'defense',
          type: 'int',
        },
        {
          name: 'hp',
          type: 'int',
        },
        {
          name: 'speed',
          type: 'int',
        },
        {
          name: 'type',
          type: 'varchar',
        },
        {
          name: 'imageUrl',
          type: 'varchar',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemon');
  }

}
