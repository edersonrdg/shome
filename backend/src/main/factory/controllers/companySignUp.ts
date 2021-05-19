import { CompanySignUpService } from '@application/services';
import { CompanyRepositoryMemory } from '@infra/orm/memory/companyRepository';
import { CompanySignUpController } from '@presentation/controllers';
import { Controller } from '@presentation/protocols';
import { CompanyValidationSignUp } from '@validation/CompanySignUp';

export const makeCompanySignUpController = (): Controller => {
  const companyRepository = new CompanyRepositoryMemory();
  const companySignUpService = new CompanySignUpService(companyRepository);
  const validation = new CompanyValidationSignUp();
  return new CompanySignUpController(companySignUpService, validation);
};
