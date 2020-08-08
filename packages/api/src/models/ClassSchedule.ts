import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import convertHourToMinutes from '../utils/convertHourToMinutes';
import { Class } from '.';

interface NewSchedule {
  weekDay: number;
  from: string;
  to: string;
  classId?: number;
}

@Entity('class_schedules')
export class ClassSchedule {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  weekDay: number;

  @Column()
  from: number;

  @Column()
  to: number;

  @Column()
  classId: number;

  @ManyToOne((_type) => Class)
  class?: Class;

  setClass(userClass: Class) {
    this.classId = userClass.id;
    this.class = userClass;
  }

  constructor(newSchedule: NewSchedule) {
    const schedule = newSchedule || {};

    this.weekDay = schedule.weekDay;
    this.from = schedule.from ? convertHourToMinutes(schedule.from) : 0;
    this.to = schedule.to ? convertHourToMinutes(schedule.to) : 0;
    this.classId = schedule.classId || 0;
  }
}
