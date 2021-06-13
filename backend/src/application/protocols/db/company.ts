import { Company } from '@domain/entities';
import { CompanySignUpParams } from '@domain/useCases';

export interface CompanyRepository {
  create: (data: CompanySignUpParams) => Promise<void>

  findByOwnerCpf: (ownercpf: number) => Promise<boolean>

  findById: (companId: string) => Promise<boolean>

  getAll: () => Promise<Company[]>
}
