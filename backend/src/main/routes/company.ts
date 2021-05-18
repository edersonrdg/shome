import { Router } from 'express';

const companyRouter = Router();

companyRouter.get('/', (req, res) => res.send('companys'));

export default companyRouter;
