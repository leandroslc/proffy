import { Router } from 'express';
import classes from './classes';

const routes = Router();

routes.use('/classes', classes);

export default routes;
