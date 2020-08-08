import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

let table: Table;
let foreignKey: TableForeignKey;

export class ClassSchedule1596913270862 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    table = new Table({
      name: 'class_schedules',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'weekDay',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'from',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'to',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'classId',
          type: 'integer',
          isNullable: false,
        },
      ],
    });

    foreignKey = new TableForeignKey({
      columnNames: ['classId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'classes',
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
