import { CompanyRepository } from '@application/protocols/db';
import { Company } from '@domain/entities';
import { CompanySignUpParams } from '@domain/useCases';
import CompanySchema from '../schemas/Company';

export class CompanyRepositoryMongo implements CompanyRepository {
  async create(data: CompanySignUpParams): Promise<void> {
    const company = new CompanySchema(data);

    await company.save();
  }

  async findByOwnerCpf(cpf: number): Promise<boolean> {
    const company = await CompanySchema.findOne({ owner_company_cpf: cpf });

    if (company) return true;
    return false;
  }

  async getAll(): Promise<Company[]> {
    return await CompanySchema.find()
  }
}
