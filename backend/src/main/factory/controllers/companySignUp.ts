import { CompanySignUpService } from '@application/services';
import { CompanyRepositoryMemory } from '@infra/orm/memory/companyRepository';
import { CompanySignUpController } from '@presentation/controllers';
import { Controller } from '@presentation/protocols';

export const makeCompanySignUpController = (): Controller => {
  const companyRepository = new CompanyRepositoryMemory();
  const companySignUpService = new CompanySignUpService(companyRepository);
  return new CompanySignUpController(companySignUpService);
};
