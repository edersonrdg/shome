import { Company } from '@domain/entities';
import { CompanySignUp, CompanySignUpParams } from '@domain/useCases';
import { CompanyList } from '@domain/useCases/companyList';
import { DeleteCompany } from '@domain/useCases/deleteCompay';

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

export class DeleteCompanyStub implements DeleteCompany {
  async execute(companyId: string): Promise<void> {
    return new Promise((resolve) => resolve());
  }
}
