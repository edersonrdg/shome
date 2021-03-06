import { CompanyValidationSignUp } from '@validation/CompanySignUp';

const makeSut = () => new CompanyValidationSignUp();

describe('Company SignUp Validation', () => {
  it('should return error if no owner name is provided', () => {
    const { validate } = makeSut();

    const data = {
      owner_company_cpf: 0,
      owner_company_role: 'any',
      company_cnpj: 0,
      company_name: 'any',
      email: 'any',
      phonenumber: 0,
      company_area: 'any',
    };

    try {
      validate(data);
    } catch (error) {
      expect(error.message).toBe('owner_company_name is required');
      expect(error.statusCode).toBe(400);
    }
  });
  it('should return error if no phonenumber is provided', () => {
    const { validate } = makeSut();

    const data = {
      owner_company_name: 'any',
      owner_company_cpf: 0,
      owner_company_role: 'any',
      company_cnpj: 0,
      company_name: 'any',
      email: 'any',
      company_area: 'any',
    };

    try {
      validate(data);
    } catch (error) {
      expect(error.message).toBe('phonenumber is required');
      expect(error.statusCode).toBe(400);
    }
  });
  it('should return error if no owner role is provided', () => {
    const { validate } = makeSut();

    const data = {
      owner_company_name: 'any',
      owner_company_cpf: 2,
      company_cnpj: 2,
      company_name: 'any',
      email: 'any',
      phonenumber: 2,
      company_area: 'any',
    };

    try {
      validate(data);
    } catch (error) {
      expect(error.message).toBe('owner_company_role is required');
      expect(error.statusCode).toBe(400);
    }
  });
  it('should return error if no owner cpf is provided', () => {
    const { validate } = makeSut();

    const data = {
      owner_company_name: 'any',
      owner_company_role: 'any',
      company_cnpj: 2,
      company_name: 'any',
      email: 'any',
      phonenumber: 2,
      company_area: 'any',
    };

    try {
      validate(data);
    } catch (error) {
      expect(error.message).toBe('owner_company_cpf is required');
      expect(error.statusCode).toBe(400);
    }
  });
  it('should return error if no company cnpj is provided', () => {
    const { validate } = makeSut();

    const data = {
      owner_company_name: 'any',
      owner_company_role: 'any',
      owner_company_cpf: 2,
      company_name: 'any',
      email: 'any',
      phonenumber: 2,
      company_area: 'any',
    };

    try {
      validate(data);
    } catch (error) {
      expect(error.message).toBe('company_cnpj is required');
      expect(error.statusCode).toBe(400);
    }
  });
  it('should return error if no company name is provided', () => {
    const { validate } = makeSut();

    const data = {
      owner_company_name: 'any',
      owner_company_role: 'any',
      owner_company_cpf: 2,
      company_cnpj: 2,
      email: 'any',
      phonenumber: 2,
      company_area: 'any',
    };

    try {
      validate(data);
    } catch (error) {
      expect(error.message).toBe('company_name is required');
      expect(error.statusCode).toBe(400);
    }
  });
  it('should return error if no company email is provided', () => {
    const { validate } = makeSut();

    const data = {
      owner_company_name: 'any',
      owner_company_role: 'any',
      owner_company_cpf: 2,
      company_name: 'any',
      company_cnpj: 2,
      phonenumber: 2,
      company_area: 'any',
    };

    try {
      validate(data);
    } catch (error) {
      expect(error.message).toBe('email is required');
      expect(error.statusCode).toBe(400);
    }
  });
  it('should return error if no company area is provided', () => {
    const { validate } = makeSut();

    const data = {
      owner_company_name: 'any',
      owner_company_role: 'any',
      owner_company_cpf: 2,
      company_name: 'any',
      email: 'any',
      company_cnpj: 2,
      phonenumber: 2,
    };

    try {
      validate(data);
    } catch (error) {
      expect(error.message).toBe('company_area is required');
      expect(error.statusCode).toBe(400);
    }
  });
});
