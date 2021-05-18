import { CompanySignUpParams } from '@domain/entities';
import { CompanySignUp } from '@domain/useCases';

export class CompanySignUpService implements CompanySignUp {
  async execute(data: CompanySignUpParams): Promise<void> {
    console.log(data);
  }
}
