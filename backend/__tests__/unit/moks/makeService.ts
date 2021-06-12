import { CompanySignUp, CompanySignUpParams } from '@domain/useCases';

export class CompanySignUpStub implements CompanySignUp {
  async execute(account: CompanySignUpParams): Promise<void> {
    return new Promise((resolve) => resolve());
  }
}
