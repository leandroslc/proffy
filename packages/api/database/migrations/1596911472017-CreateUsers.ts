import { MigrationInterface, QueryRunner, Table } from 'typeorm';

let table: Table;

export class CreateUsers1596911472017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    table = new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'avatar',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'whatsapp',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'bio',
          type: 'varchar',
          isNullable: false,
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(table);
  }
}
