import { Company } from '@domain/entities';
import { CompanySignUp, CompanySignUpParams } from '@domain/useCases';
import { CompanyList } from '@domain/useCases/companyList';

export class CompanySignUpStub implements CompanySignUp {
  async execute(account: CompanySignUpParams): Promise<void> {
    return new Promise((resolve) => resolve());
  }
}

export class CompanyListStub implements CompanyList {
  async execute(): Promise<Company[]> {
    return new Promise((resolve) => resolve([]));
  }
}
