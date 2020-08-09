import { Request, Response } from 'express';
import { CreateClassCommand, SearchClassesCommand } from '../models';
import { getClassRepository } from '../repositories';

export default class ClassesController {
  async index(request: Request, response: Response) {
    const repository = getClassRepository();

    const command = new SearchClassesCommand({
      subject: request.query.subject,
      weekDay: request.query.weekDay,
      time: request.query.time,
    } as SearchClassesCommand);

    if (command.hasMissingValues()) {
      return response.status(400).json({
        error: 'Missing filters for searching classes',
      });
    }

    const classes = await repository.search(command);

    return response.status(200).json(classes);
  }

  async create(request: Request, response: Response) {
    const repository = getClassRepository();
    const command = new CreateClassCommand({ ...request.body });

    try {
      await repository.create(command);

      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }
}
