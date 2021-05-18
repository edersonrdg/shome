import { CompanyRepository } from '@application/protocols/db';
import { CompanySignUpDTO } from '@application/protocols/dtos';
import { CompanySignUpService } from '@application/services';

const makeCompanyRepository = () => {
  class CompanyRepositoryStub implements CompanyRepository {
    async create(data: CompanySignUpDTO): Promise<void> {
      return new Promise((resolve) => resolve());
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
      owner_company_phonenumber: 0,
      owner_company_cpf: 0,
      owner_company_role: 'any',
      company_cnpj: 0,
      company_name: 'any',
      company_email: 'any',
      company_phonenumber: 0,
      company_area: 'any',
    };

    const response = await sut.execute(data);
    expect(response).toBe(undefined);
  });
});
