import { CompanyListService } from '@application/services';
import { CompanyRepositoryMongo } from '@infra/orm/mongoose/repository/companyRepository';
import { CompanyListController } from '@presentation/controllers';
import { Controller } from '@presentation/protocols';

export const makeCompanyListController = (): Controller => {
  const companyRepository = new CompanyRepositoryMongo();
  const service = new CompanyListService(companyRepository);
  return new CompanyListController(service);
};
