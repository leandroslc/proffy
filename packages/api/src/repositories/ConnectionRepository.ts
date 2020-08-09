import { AbstractRepository, EntityRepository } from 'typeorm';
import { Connection } from '../models';

@EntityRepository(Connection)
export default class ClassRepository extends AbstractRepository<Connection> {
  async create(connection: Connection) {
    await this.manager.save(connection);
  }
}
