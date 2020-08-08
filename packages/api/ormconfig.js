/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const models = path.join('.', 'src', 'models', '*.ts');
const databaseDir = path.join('.', 'database');
const migrationsDir = path.join(databaseDir, 'migrations');
const migrations = path.join(migrationsDir, '*.ts');
const databaseFile = (name) => path.join(databaseDir, `db-${name}.sqlite`);

module.exports = [
  {
    name: 'development',
    type: 'sqlite',
    database: databaseFile('dev'),
    migrations: [migrations],
    entities: [models],
    synchronize: false,
    cli: {
      migrationsDir,
    },
  },
];
