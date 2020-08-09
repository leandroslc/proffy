import { Router } from 'express';
import classes from './classes';
import connections from './connections';

const routes = Router();

routes.use('/classes', classes);
routes.use('/connections', connections);

export default routes;
