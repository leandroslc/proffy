import { User, Class, ClassSchedule } from '.';

interface Schedule {
  weekDay: number;
  from: string;
  to: string;
}

interface Data {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedules: Schedule[];
}

export class CreateClassCommand {
  user: User;

  userClass: Class;

  schedules: ClassSchedule[];

  constructor(data: Data) {
    this.user = new User({
      name: data.name,
      avatar: data.avatar,
      whatsapp: data.whatsapp,
      bio: data.bio,
    });

    this.userClass = new Class({
      subject: data.subject,
      cost: data.cost,
    });

    this.schedules = data.schedules.map((schedule) => {
      return new ClassSchedule({
        weekDay: schedule.weekDay,
        from: schedule.from,
        to: schedule.to,
      });
    });
  }
}
