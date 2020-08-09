import { getCustomRepository } from '../database';

import ClassRepository from './ClassRepository';
import ConnectionRepository from './ConnectionRepository';

export const getClassRepository = () => getCustomRepository(ClassRepository);

export const getConnectionRepository = () =>
  getCustomRepository(ConnectionRepository);
