import companyRouter from '@main/routes/company';
import { Router } from 'express';

const routes = Router();

routes.use('/company', companyRouter);

export default routes;
