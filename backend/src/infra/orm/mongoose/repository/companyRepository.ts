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

  async findById(_id: string): Promise<boolean> {
    const company = await CompanySchema.findOne({ _id });
    if (company) return true;
    return false;
  }

  async delete(_id: string): Promise<void> {
    await CompanySchema.findOneAndDelete({ _id });
  }
}
