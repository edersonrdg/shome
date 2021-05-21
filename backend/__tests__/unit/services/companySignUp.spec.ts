import { CompanyRepository } from '@application/protocols/db';
import { CompanySignUpDTO } from '@application/protocols/dtos';
import { CompanySignUpService } from '@application/services';
import { BaseError } from '@domain/errors';

const makeCompanyRepository = () => {
  class CompanyRepositoryStub implements CompanyRepository {
    async create(data: CompanySignUpDTO): Promise<void> {
      return new Promise((resolve) => resolve());
    }

    async findByOwnerCpf(cpf: number): Promise<boolean> {
      return new Promise((resolve) => resolve(false));
    }
  }
  return new CompanyRepositoryStub();
};

const makeSut = () => {
  const companyRepository = makeCompanyRepository();
  const sut = new CompanySignUpService(companyRepository);
  return { sut, companyRepository };
};

describe('CompanySignUp Service', () => {
  it('should returns void if valid data is provided', async () => {
    const { sut } = makeSut();

    const data = {
      owner_company_name: 'any',
      owner_company_cpf: 0,
      owner_company_role: 'any',
      company_cnpj: 0,
      company_name: 'any',
      email: 'any',
      phonenumber: 0,
      company_area: 'any',
    };

    const response = await sut.execute(data);
    expect(response).toBe(undefined);
  });
  it('should returns error if owner cpf is already used', async () => {
    const { sut, companyRepository } = makeSut();
    jest.spyOn(companyRepository, 'findByOwnerCpf').mockImplementation((cpf: number) => new Promise((resolve) => resolve(true)));

    const data = {
      owner_company_name: 'any',
      owner_company_cpf: 0,
      owner_company_role: 'any',
      company_cnpj: 0,
      company_name: 'any',
      email: 'any',
      phonenumber: 0,
      company_area: 'any',
    };
    try {
      await sut.execute(data);
    } catch (error) {
      expect(error).toEqual(new BaseError('Owner cpf is already using on another company'));
      expect(error.statusCode).toBe(400);
    }
  });
  it('should call CompanyRepository with valid data', async () => {
    const { sut, companyRepository } = makeSut();
    const spyService = jest.spyOn(companyRepository, 'create');

    const data = {
      owner_company_name: 'any',
      owner_company_cpf: 0,
      owner_company_role: 'any',
      company_cnpj: 0,
      company_name: 'any',
      email: 'any',
      phonenumber: 0,
      company_area: 'any',
    };

    await sut.execute(data);
    expect(spyService).toHaveBeenCalledWith(data);
  });
});
