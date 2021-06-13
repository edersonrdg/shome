import { DeleteCompany } from '@domain/useCases/deleteCompay';
import { noContent } from '@presentation/helpers/httpHelper';
import { Controller, HttpResponse } from '@presentation/protocols';

export class DeleteCompanyController implements Controller {
  constructor(private readonly deleteCompany: DeleteCompany) {}

  async handle(companyId: string): Promise<HttpResponse> {
    await this.deleteCompany.execute(companyId);
    return noContent();
  }
}
