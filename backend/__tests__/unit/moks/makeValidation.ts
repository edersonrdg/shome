import { Validation } from '@validation/protocols/validation';

export const makeValidation = () => {
  class ValidationSignUpStub implements Validation {
    validate(data: any): Error | void {
    }
  }
  return new ValidationSignUpStub();
};
