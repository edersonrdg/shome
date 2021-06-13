import { DeleteCompanyService } from '@application/services/deleteCompany';
import { BaseError } from '@domain/errors';
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
  it('Should returns Error if company does not exist', async () => {
    const { service, companyRepository } = makeSut();
    jest.spyOn(companyRepository, 'findById').mockImplementation(() => new Promise((resolve) => resolve(false)));
    const companyId = '123';

    try {
      await service.execute(companyId);
    } catch (error) {
      expect(error instanceof BaseError).toBe(true);
      expect(error.message).toBe('Company does not exist');
      expect(error.statusCode).toBe(400);
    }
  });
  it('Should calls delete of companyRepository with correct data', async () => {
    const { service, companyRepository } = makeSut();
    const spyRepo = jest.spyOn(companyRepository, 'delete');
    const companyId = '123';

    await service.execute(companyId);
    expect(spyRepo).toHaveBeenCalledWith(companyId);
  });
});
