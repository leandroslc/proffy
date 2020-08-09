/* eslint-disable no-param-reassign */

import { AbstractRepository, EntityRepository } from 'typeorm';
import {
  Class,
  CreateClassCommand,
  SearchClassesCommand,
  User,
  ClassSchedule,
} from '../models';

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

  async search(command: SearchClassesCommand) {
    const timeInMinutes = command.getTimeInMinutes();

    const query = this.manager
      .createQueryBuilder(Class, 'class')
      .innerJoinAndMapOne('class.user', User, 'user', 'class.userId = user.id')
      .where('class.subject = :subject', { subject: command.subject })
      .andWhere((qb) => {
        const schedules = qb
          .subQuery()
          .from(ClassSchedule, 'schedule')
          .where('schedule.weekDay = :weekDay', { weekDay: command.weekDay })
          .andWhere('schedule.from <= :timeInMinutes', { timeInMinutes })
          .andWhere('schedule.to > :timeInMinutes', { timeInMinutes })
          .take(1)
          .select('1')
          .getQuery();

        return `(${schedules}) = 1`;
      });

    return query.getMany();
  }
}
