import { CompanyRepository } from '@application/protocols/db';
import { CompanySignUpDTO } from '@application/protocols/dtos';
import Company from '../schemas/Company';

export class CompanyRepositoryMongo implements CompanyRepository {
  async create(data: CompanySignUpDTO): Promise<void> {
    const company = new Company(data);

    await company.save();
  }
}
