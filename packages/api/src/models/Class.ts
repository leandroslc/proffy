import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '.';

interface NewClass {
  subject: string;
  cost: number;
  userId?: number;
}

@Entity('classes')
export class Class {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  subject: string;

  @Column({ type: 'decimal' })
  cost: number;

  @Column()
  userId: number;

  @ManyToOne((_type) => User)
  user?: User;

  setUser(user: User) {
    this.userId = user.id;
    this.user = user;
  }

  constructor(newClass: NewClass) {
    const teacherClass = newClass || {};

    this.subject = teacherClass.subject;
    this.cost = teacherClass.cost;
    this.userId = teacherClass.userId || 0;
  }
}
