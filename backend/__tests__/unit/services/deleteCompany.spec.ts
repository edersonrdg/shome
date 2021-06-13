import { DeleteCompanyService } from '@application/services/deleteCompany';
import { makeCompanyRepository } from '../moks/makeCompanyRepo';

const makeSut = () => {
  const companyRepository = makeCompanyRepository();
  const service = new DeleteCompanyService(companyRepository);
  return { service, companyRepository };
};

describe('Delete company', () => {
  it('Should calls findById of companyRepository with correct data', async () => {
    const { service, companyRepository } = makeSut();
    const spyRepo = jest.spyOn(companyRepository, 'findById');
    const companyId = '123';

    await service.execute(companyId);
    expect(spyRepo).toHaveBeenCalledWith(companyId);
  });
});
