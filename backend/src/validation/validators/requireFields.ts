import { BaseError } from '@domain/errors';
import { Validation } from '../protocols/validation';

export class RequiredFieldValidation implements Validation {
  constructor(private readonly input: string,
    private readonly field: string) {}

  validate(): Error | void {
    if (!this.input) throw new BaseError(`${this.field} is required`, 401);
  }
}
