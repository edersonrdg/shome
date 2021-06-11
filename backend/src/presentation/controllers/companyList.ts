import { ok } from '@presentation/helpers/httpHelper';
import { Controller, HttpResponse } from '@presentation/protocols';

export class CompanyListController implements Controller {
  async handle(): Promise<HttpResponse> {
    return ok([]);
  }
}
