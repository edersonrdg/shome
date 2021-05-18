import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.send('using on routes'));

export default routes;
