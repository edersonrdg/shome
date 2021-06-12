import { CompanyRepository } from '@application/protocols/db';
import { Company } from '@domain/entities';
import { CompanyList } from '@domain/useCases/companyList';

export class CompanyListService implements CompanyList {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(): Promise<Company[]> {
    const response = await this.companyRepository.getAll();
    return response;
  }
}
