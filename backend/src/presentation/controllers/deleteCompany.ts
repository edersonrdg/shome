import { noContent } from '@presentation/helpers/httpHelper';
import { Controller, HttpResponse } from '@presentation/protocols';

export class DeleteCompanyController implements Controller {
  async handle(): Promise<HttpResponse> {
    return noContent();
  }
}
