import { CompanySignUpParams } from '@domain/entities/company';
import { CompanySignUp } from '@domain/useCases';
import { Controller, HttpResponse } from '@presentation/protocols';

export class CompanySignUpController implements Controller {
  constructor(private readonly companySignUp: CompanySignUp) {}

  async handle(request: CompanySignUpParams): Promise<HttpResponse> {
    this.companySignUp.execute(request);
    return { statusCode: 200 };
  }
}
