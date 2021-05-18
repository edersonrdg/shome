import { Controller } from '@presentation/protocols/controller';

export class CompanySignUpController implements Controller {
  async handle(request: any): Promise<void> {
    console.log(request);
  }
}
