import { Router } from 'express';
import ConnectionsController from '../controllers/ConnectionsController';

const connectionsController = new ConnectionsController();
const routes = Router();

routes.get('/', connectionsController.index);
routes.post('/', connectionsController.create);

export default routes;
