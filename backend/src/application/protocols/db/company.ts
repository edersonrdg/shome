import { CompanySignUpParams } from '@domain/useCases';

export interface CompanyRepository {
  create: (data: CompanySignUpParams) => Promise<void>

  findByOwnerCpf: (ownercpf: number) => Promise<boolean>
}
