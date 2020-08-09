import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

interface NewConnection {
  userId: number;
}

@Entity('connections')
export class Connection {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId: number;

  constructor(newConnection: NewConnection) {
    const connection = newConnection || {};

    this.userId = connection.userId;
  }
}
