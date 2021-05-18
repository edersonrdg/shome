import { CompanySignUpParams } from '@domain/entities';

export interface CompanySignUp {
  execute: (_: CompanySignUpParams) => Promise<void>
}
