import { adapt } from '@main/adapters/express_router';
import { makeCompanyListController } from '@main/factory/controllers/companyList';
import { makeCompanySignUpController } from '@main/factory/controllers/companySignUp';
import { Router } from 'express';

const companyRouter = Router();

companyRouter.post('/', adapt(makeCompanySignUpController()));
companyRouter.get('/', adapt(makeCompanyListController()));

export default companyRouter;
