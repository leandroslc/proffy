import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

let table: Table;
let foreignKey: TableForeignKey;

export class CreateConnections1596914144963 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    table = new Table({
      name: 'connections',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          isNullable: false,
          default: 'now()',
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
