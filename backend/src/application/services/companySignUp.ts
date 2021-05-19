import { CompanyRepository } from '@application/protocols/db';
import { CompanySignUpParams } from '@domain/entities';
import { BaseError } from '@domain/errors';
import { CompanySignUp } from '@domain/useCases';

export class CompanySignUpService implements CompanySignUp {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(data: CompanySignUpParams): Promise<void> {
    if (data.owner_company_name !== 'joao') throw new BaseError('O nome precisa ser joao :)');

    await this.companyRepository.create(data);
  }
}
