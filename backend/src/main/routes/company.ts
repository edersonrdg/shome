import { adapt } from '@main/adapters/express_router';
import { makeCompanySignUpController } from '@main/factory/controllers/companySignUp';
import { Router } from 'express';

const companyRouter = Router();

companyRouter.post('/', adapt(makeCompanySignUpController()));

companyRouter.get('/', (req, res) => res.send('companies'));

export default companyRouter;
