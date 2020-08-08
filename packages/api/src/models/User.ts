import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  whatsapp: string;

  @Column()
  bio: string;

  constructor(newUser: Omit<User, 'id'>) {
    const user = newUser || {};

    this.name = user.name;
    this.avatar = user.avatar;
    this.whatsapp = user.whatsapp;
    this.bio = user.bio;
  }
}
