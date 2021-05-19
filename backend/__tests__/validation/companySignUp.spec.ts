import { CompanyValidationSignUp } from '@validation/CompanySignUp';

const makeSut = () => new CompanyValidationSignUp();

describe('Company SignUp Validation', () => {
  it('should return error if no owner name is provided', () => {
    const { validate } = makeSut();

    const data = {
      owner_company_phonenumber: 0,
      owner_company_cpf: 0,
      owner_company_role: 'any',
      company_cnpj: 0,
      company_name: 'any',
      company_email: 'any',
      company_phonenumber: 0,
      company_area: 'any',
    };

    try {
      validate(data);
    } catch (error) {
      expect(error.message).toEqual('owner_company_name is required');
      expect(error.statusCode).toBe(400);
    }
  });
  it('should return error if no owner phonenumber is provided', () => {
    const { validate } = makeSut();

    const data = {
      owner_company_name: 'any',
      owner_company_cpf: 0,
      owner_company_role: 'any',
      company_cnpj: 0,
      company_name: 'any',
      company_email: 'any',
      company_phonenumber: 0,
      company_area: 'any',
    };

    try {
      validate(data);
    } catch (error) {
      expect(error.message).toEqual('owner_company_phonenumber is required');
      expect(error.statusCode).toBe(400);
    }
  });
});
