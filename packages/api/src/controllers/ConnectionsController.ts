import { Request, Response } from 'express';
import { getConnectionRepository } from '../repositories';
import { Connection } from '../models';

export default class ConnectionsController {
  async create(request: Request, response: Response) {
    const repository = getConnectionRepository();

    const connection = new Connection({
      ...request.body,
    });

    await repository.create(connection);

    return response.status(201).send();
  }
}
