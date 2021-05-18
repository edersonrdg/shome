import { CompanySignUpService } from '@application/services';
import { CompanySignUpController } from '@presentation/controllers';
import { Controller } from '@presentation/protocols';

export const makeCompanySignUpController = (): Controller => {
  const companySignUpService = new CompanySignUpService();
  return new CompanySignUpController(companySignUpService);
};
