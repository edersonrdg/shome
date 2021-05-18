import { CompanySignUpParams } from '@domain/entities/company';
import { Controller, HttpResponse } from '@presentation/protocols';

export class CompanySignUpController implements Controller {
  async handle(request: CompanySignUpParams): Promise<HttpResponse> {
    return {
      body: request,
      statusCode: 200,
    };
  }
}
