/* eslint-disable no-param-reassign */

import { AbstractRepository, EntityRepository } from 'typeorm';
import { Class, CreateClassCommand } from '../models';

@EntityRepository(Class)
export default class ClassRepository extends AbstractRepository<Class> {
  async create(command: CreateClassCommand) {
    const { user, userClass, schedules } = command;

    await this.manager.transaction(async (entities) => {
      await entities.save(user);

      userClass.setUser(user);

      await entities.save(userClass);

      schedules.forEach((schedule) => {
        schedule.setClass(userClass);
      });

      await entities.save(schedules);
    });
  }
}
