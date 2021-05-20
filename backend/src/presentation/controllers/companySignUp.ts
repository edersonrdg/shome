import { CompanySignUpParams } from '@domain/entities/company';
import { BaseError } from '@domain/errors';
import { CompanySignUp } from '@domain/useCases';
import { appError, noContent, serverError } from '@presentation/helpers/httpHelper';
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
      if (error instanceof BaseError) return appError(error.message, error.statusCode);
      return serverError();
    }
    return noContent();
  }
}
