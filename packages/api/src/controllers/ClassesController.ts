import { Request, Response } from 'express';
import { CreateClassCommand } from '../models';
import { getClassRepository } from '../repositories';

export default class ClassesController {
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
