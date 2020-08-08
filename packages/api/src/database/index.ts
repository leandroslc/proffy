import {
  createConnection as createDbConnection,
  getManager,
  ObjectType,
} from 'typeorm';
import env from '../config/env';

export function getEntityManager() {
  return getManager(env.name);
}

export function getCustomRepository<T>(customRepository: ObjectType<T>) {
  return getEntityManager().getCustomRepository(customRepository);
}

export async function createConnection() {
  return createDbConnection(env.name);
}
