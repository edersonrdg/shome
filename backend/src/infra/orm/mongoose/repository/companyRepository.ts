import { CompanyRepository } from '@application/protocols/db';
import { CompanySignUpParams } from '@domain/useCases';
import Company from '../schemas/Company';

export class CompanyRepositoryMongo implements CompanyRepository {
  async create(data: CompanySignUpParams): Promise<void> {
    const company = new Company(data);

    await company.save();
  }

  async findByOwnerCpf(cpf: number): Promise<boolean> {
    const company = await Company.findOne({ owner_company_cpf: cpf });

    if (company) return true;
    return false;
  }
}
