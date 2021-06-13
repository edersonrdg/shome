import { DeleteCompanyService } from '@application/services/deleteCompany';
import { CompanyRepositoryMongo } from '@infra/orm/mongoose/repository/companyRepository';
import { DeleteCompanyController } from '@presentation/controllers/deleteCompany';
import { Controller } from '@presentation/protocols';

export const makeDeleteCompanyController = (): Controller => {
  const companyRepository = new CompanyRepositoryMongo();
  const deleteCompanyService = new DeleteCompanyService(companyRepository);
  return new DeleteCompanyController(deleteCompanyService);
};
