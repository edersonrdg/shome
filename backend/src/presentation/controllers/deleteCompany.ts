import { DeleteCompany } from '@domain/useCases/deleteCompay';
import { errorTreatment, noContent } from '@presentation/helpers/httpHelper';
import { Controller, HttpResponse } from '@presentation/protocols';

export class DeleteCompanyController implements Controller {
  constructor(private readonly deleteCompany: DeleteCompany) {}

  async handle(companyId: string): Promise<HttpResponse> {
    try {
      await this.deleteCompany.execute(companyId);
    } catch (error) {
      return errorTreatment(error);
    }
    return noContent();
  }
}
