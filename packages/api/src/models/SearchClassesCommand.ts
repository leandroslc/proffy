import convertHourToMinutes from '../utils/convertHourToMinutes';

export class SearchClassesCommand {
  subject?: string;

  weekDay?: number;

  time?: string;

  getTimeInMinutes() {
    return this.time ? convertHourToMinutes(this.time) : 0;
  }

  hasMissingValues() {
    return !this.subject || !this.time || !this.weekDay;
  }

  constructor(command: SearchClassesCommand) {
    Object.assign(this, command);
  }
}
