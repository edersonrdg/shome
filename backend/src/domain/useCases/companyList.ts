import { Company } from '@domain/entities';

export interface CompanyList {
  execute: () => Promise<Company[]>
}
