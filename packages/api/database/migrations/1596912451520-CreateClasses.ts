import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

let table: Table;
let foreignKey: TableForeignKey;

export class CreateClasses1596911472017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    table = new Table({
      name: 'classes',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'subject',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'cost',
          type: 'decimal',
          isNullable: false,
        },
        {
          name: 'user_id',
          type: 'integer',
          isNullable: false,
        },
      ],
    });

    foreignKey = new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryRunner.createTable(table);
    await queryRunner.createForeignKey(table, foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(table, foreignKey);
    await queryRunner.dropTable(table);
  }
}
