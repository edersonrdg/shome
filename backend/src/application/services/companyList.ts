import { Company } from '@domain/entities';
import { CompanyList } from '@domain/useCases/companyList';

export class CompanyListService implements CompanyList {
  async execute(): Promise<Company[]> {
    return [];
  }
}
