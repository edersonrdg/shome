import { CompanyRepository } from '@application/protocols/db';
import { CompanySignUpDTO } from '@application/protocols/dtos';

export class CompanyRepositoryMemory implements CompanyRepository {
  async create(data: CompanySignUpDTO): Promise<void> {

  }
}
