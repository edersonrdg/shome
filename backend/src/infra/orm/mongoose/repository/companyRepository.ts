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
    const company = await CompanySchema.find();
    return company;
  }

  async findById(companyId: string): Promise<boolean> {
    const company = await CompanySchema.findById(companyId);
    if (company) return true;
    return false;
  }

  async delete(companyId: string): Promise<void> {
    await CompanySchema.findByIdAndDelete(companyId);
  }
}
