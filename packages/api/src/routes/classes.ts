import { Router } from 'express';
import ClassesController from '../controllers/ClassesController';

const classesController = new ClassesController();
const routes = Router();

routes.post('/', classesController.create);

export default routes;
