import { CompanyListController } from '@presentation/controllers/companyList';
import { CompanyListStub } from '../moks/makeService';

const makeSut = () => {
  const service = new CompanyListStub();
  const sut = new CompanyListController(service);
  return { sut, service };
};

describe('Company list', () => {
  it('Should return 200', async () => {
    const { sut } = makeSut();

    const response = await sut.handle();
    expect(response.statusCode).toBe(200);
  });
  it('Should calls company list service', async () => {
    const { sut, service } = makeSut();
    const spyService = jest.spyOn(service, 'execute');

    await sut.handle();
    expect(spyService).toHaveBeenCalled();
  });
});
