import { Schedule } from '.';

export interface CreateClass {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedules: Schedule[];
}
