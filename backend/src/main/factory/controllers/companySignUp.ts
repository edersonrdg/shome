import { CompanySignUpController } from '@presentation/controllers';
import { Controller } from '@presentation/protocols';

export const makeCompanySignUpController = (): Controller => new CompanySignUpController();
