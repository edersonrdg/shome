import { CompanyList } from '@domain/useCases/companyList';
import { ok } from '@presentation/helpers/httpHelper';
import { Controller, HttpResponse } from '@presentation/protocols';

export class CompanyListController implements Controller {
  constructor(private readonly companyList: CompanyList) {}

  async handle(): Promise<HttpResponse> {
    const response = this.companyList.execute();
    return ok(response);
  }
}
