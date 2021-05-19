import { Validation } from './protocols/validation';
import { RequiredFieldValidation } from './validators/requireFields';

type requiredValid = {
  [key: string]: string,
}

export class CompanyValidationSignUp implements Validation {
  validate(data: any) {
    const requiredValidData:requiredValid = data;
    const requiredFields = ['owner_company_name', 'owner_company_phonenumber',
      'owner_company_cpf', 'owner_company_role',
      'company_cnpj', 'company_name', 'company_email',
      'company_phonenumber', 'company_area'];
    for (const field of requiredFields) {
      new RequiredFieldValidation(requiredValidData[field], field).validate();
    }
  }
}
