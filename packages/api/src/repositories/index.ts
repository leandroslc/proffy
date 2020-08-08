import { getCustomRepository } from '../database';

import ClassRepository from './ClassRepository';

export const getClassRepository = () => getCustomRepository(ClassRepository);
