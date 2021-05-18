import { CompanySignUpParams } from '@domain/entities/company';
import { Controller } from '@presentation/protocols/controller';

export class CompanySignUpController implements Controller {
  async handle(request: CompanySignUpParams): Promise<void> {
    console.log(request);
  }
}
