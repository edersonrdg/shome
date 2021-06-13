import { CompanyRepository } from '@application/protocols/db';
import { BaseError } from '@domain/errors';
import { DeleteCompany } from '@domain/useCases/deleteCompay';

export class DeleteCompanyService implements DeleteCompany {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(companyId: string): Promise<void> {
    const company = await this.companyRepository.findById(companyId);
    if (!company) throw new BaseError('Company does not exist');

    await this.companyRepository.delete(companyId);
  }
}
