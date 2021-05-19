import { CompanySignUpParams } from '@domain/entities/company';
import { CompanySignUp } from '@domain/useCases';
import { appError, noContent } from '@presentation/helpers/httpHelper';
import { Controller, HttpResponse } from '@presentation/protocols';
import { Validation } from '@validation/protocols/validation';

export class CompanySignUpController implements Controller {
  constructor(private readonly companySignUp: CompanySignUp,
    private readonly companySignUpValidation: Validation) {}

  async handle(request: CompanySignUpParams): Promise<HttpResponse> {
    try {
      this.companySignUpValidation.validate(request);
      await this.companySignUp.execute(request);
    } catch (error) {
      return appError(error.message, error.statusCode);
    }

    return noContent();
  }
}
