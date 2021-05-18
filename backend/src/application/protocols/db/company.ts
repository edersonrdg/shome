import { CompanySignUpDTO } from '../dtos';

export interface CompanyRepository {
  create: (data: CompanySignUpDTO) => Promise<void>
}
