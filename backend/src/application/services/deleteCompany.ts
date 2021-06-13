import { CompanyRepository } from '@application/protocols/db';
import { BaseError } from '@domain/errors';
import { DeleteCompany } from '@domain/useCases/deleteCompay';

export class DeleteCompanyService implements DeleteCompany {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(companyId: string): Promise<void> {
    try {
      await this.companyRepository.findById(companyId);
      await this.companyRepository.delete(companyId);
    } catch (error) {
      throw new BaseError('Company does not exist');
    }
  }
}
