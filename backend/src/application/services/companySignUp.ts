import { CompanyRepository } from '@application/protocols/db';
import { CompanySignUpParams } from '@domain/entities';
import { CompanySignUp } from '@domain/useCases';

export class CompanySignUpService implements CompanySignUp {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(data: CompanySignUpParams): Promise<void> {
    await this.companyRepository.create(data);
  }
}
