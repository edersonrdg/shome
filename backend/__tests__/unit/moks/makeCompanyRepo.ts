import { CompanyRepository } from '@application/protocols/db';
import { Company } from '@domain/entities';
import { CompanySignUpParams } from '@domain/useCases';

export const makeCompanyRepository = () => {
  class CompanyRepositoryStub implements CompanyRepository {
    async create(data: CompanySignUpParams): Promise<void> {
      return new Promise((resolve) => resolve());
    }

    async findByOwnerCpf(cpf: number): Promise<boolean> {
      return new Promise((resolve) => resolve(false));
    }

    async getAll(): Promise<Company[]> {
      return new Promise((resolve) => resolve([]));
    }

    async findById(companyId: string): Promise<boolean> {
      return new Promise((resolve) => resolve(true));
    }
  }
  return new CompanyRepositoryStub();
};
