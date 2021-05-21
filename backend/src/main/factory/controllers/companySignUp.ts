import { CompanySignUpService } from '@application/services';
import { CompanyRepositoryMongo } from '@infra/orm/mongoose/repository/companyRepository';
import { CompanySignUpController } from '@presentation/controllers';
import { Controller } from '@presentation/protocols';
import { CompanyValidationSignUp } from '@validation/CompanySignUp';

export const makeCompanySignUpController = (): Controller => {
  const companyRepository = new CompanyRepositoryMongo();
  const companySignUpService = new CompanySignUpService(companyRepository);
  const validation = new CompanyValidationSignUp();
  return new CompanySignUpController(companySignUpService, validation);
};
