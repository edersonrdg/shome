import { CompanySignUpController } from '@presentation/controllers';
import { Controller } from '@presentation/protocols/controller';

export const makeCompanySignUpController = (): Controller => new CompanySignUpController();
