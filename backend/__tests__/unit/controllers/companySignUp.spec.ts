import { CompanySignUpParams } from '@domain/entities';
import { CompanySignUp } from '@domain/useCases';
import { CompanySignUpController } from '@presentation/controllers';
import { makeValidation } from '../moks/makeValidation';

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
  const validation = makeValidation();
  const sut = new CompanySignUpController(companySignUpservice, validation);
  return { sut, companySignUpservice, validation };
};

describe('Company SignUp', () => {
  it('should return 204 if all data provided is valid', async () => {
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
    const { body, statusCode } = await sut.handle(data);
    expect(statusCode).toBe(201);
    expect(body).toBe(undefined);
  });

  it('should return Error if companySignUp validation throws', async () => {
    const { sut, validation } = makeSut();
    jest.spyOn(validation, 'validate').mockImplementation((data: any) => {
      throw new Error();
    });

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
      await sut.handle(data);
    } catch (error) {
      expect(error.message).toEqual('Internal server error');
      expect(error.statusCode).toBe(500);
    }
  });

  it('should call CompanySignUpService with valid data', async () => {
    const { sut, companySignUpservice } = makeSut();
    const spyService = jest.spyOn(companySignUpservice, 'execute');
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
    await sut.handle(data);
    expect(spyService).toHaveBeenCalledWith(data);
  });
  it('should return Error if companySignUp service throws', async () => {
    const { sut, companySignUpservice } = makeSut();
    jest.spyOn(companySignUpservice, 'execute').mockImplementation((data: any) => {
      throw new Error();
    });

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
      await sut.handle(data);
    } catch (error) {
      expect(error.message).toEqual('Internal server error');
      expect(error.statusCode).toBe(500);
    }
  });
});
