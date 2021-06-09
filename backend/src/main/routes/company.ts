import { adapt } from '@main/adapters/express_router';
import { makeCompanySignUpController } from '@main/factory/controllers/companySignUp';
import { Router } from 'express';

const companyRouter = Router();

companyRouter.post('/signup', adapt(makeCompanySignUpController()));

export default companyRouter;
