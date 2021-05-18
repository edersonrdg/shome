import { CompanySignUpParams } from '@domain/entities';
import { CompanySignUp } from '@domain/useCases';
import { CompanySignUpController } from '@presentation/controllers';

const makeCompanySignUpService = () => {
  class CompanySignUpStub implements CompanySignUp {
    async execute(account: CompanySignUpParams): Promise<void> {
      return new Promise((resolve) => resolve());
    }
  }
  return new CompanySignUpStub();
};

const makeSut = () => {
  const companySignUpservice = makeCompanySignUpService();
  const sut = new CompanySignUpController(companySignUpservice);
  return { sut, companySignUpservice };
};

describe('Company SignUp', () => {
  it('should return 200 if all data provided is valid', async () => {
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
    const { body, statusCode } = await sut.handle(data);
    expect(statusCode).toBe(200);
    expect(body).toBe(undefined);
  });
});
