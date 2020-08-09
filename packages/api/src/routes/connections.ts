import { Router } from 'express';
import ConnectionsController from '../controllers/ConnectionsController';

const connectionsController = new ConnectionsController();
const routes = Router();

routes.post('/', connectionsController.create);

export default routes;
