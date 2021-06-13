import { adapt } from '@main/adapters/express_router';
import { makeCompanyListController } from '@main/factory/controllers/companyList';
import { makeCompanySignUpController } from '@main/factory/controllers/companySignUp';
import { makeDeleteCompanyController } from '@main/factory/controllers/deleteCompany';
import { Router } from 'express';

const companyRouter = Router();

companyRouter.post('/', adapt(makeCompanySignUpController()));
companyRouter.get('/', adapt(makeCompanyListController()));
companyRouter.delete('/:companyId', adapt(makeDeleteCompanyController()));

export default companyRouter;
