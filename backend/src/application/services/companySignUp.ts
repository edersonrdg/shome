import { CompanyRepository } from '@application/protocols/db';
import { CompanySignUpParams } from '@domain/entities';
import { BaseError } from '@domain/errors';
import { CompanySignUp } from '@domain/useCases';

export class CompanySignUpService implements CompanySignUp {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(data: CompanySignUpParams): Promise<void> {
    const useCpf = await this.companyRepository.findByOwnerCpf(data.owner_company_cpf);

    if (useCpf) throw new BaseError('Owner cpf is already using on another company');

    await this.companyRepository.create(data);
  }
}
