import { CompanyRepository } from '@application/protocols/db';
import { DeleteCompany } from '@domain/useCases/deleteCompay';

export class DeleteCompanyService implements DeleteCompany {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(companyId: string): Promise<void> {
    const company = await this.companyRepository.findById(companyId);
  }
}
