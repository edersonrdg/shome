import { DeleteCompany } from '@domain/useCases/deleteCompay';
import { errorTreatment, noContent } from '@presentation/helpers/httpHelper';
import { Controller, HttpResponse } from '@presentation/protocols';

interface id {
  companyId: string
}

export class DeleteCompanyController implements Controller {
  constructor(private readonly deleteCompany: DeleteCompany) {}

  async handle(request: id): Promise<HttpResponse> {
    try {
      await this.deleteCompany.execute(request.companyId);
    } catch (error) {
      return errorTreatment(error);
    }
    return noContent();
  }
}
