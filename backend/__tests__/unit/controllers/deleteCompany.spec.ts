import { DeleteCompanyController } from '@presentation/controllers/deleteCompany';
import { DeleteCompanyStub } from '../moks/makeService';

const makeSut = () => {
  const service = new DeleteCompanyStub();
  const sut = new DeleteCompanyController(service);
  return { service, sut };
};

describe('Delete Company', () => {
  it('Should return 204 when delete company', async () => {
    const { sut } = makeSut();
    const request = {
      params: {
        companyId: '3333',
      },
    };

    const response = await sut.handle(request.params);
    expect(response.statusCode).toBe(204);
  });
  it('Should calls service with correct params', async () => {
    const { sut, service } = makeSut();
    const spyService = jest.spyOn(service, 'execute');
    const request = {
      params: {
        companyId: '3333',
      },
    };

    await sut.handle(request.params);
    expect(spyService).toHaveBeenCalledWith('3333');
  });
  it('Should return server error if service throws', async () => {
    const { sut, service } = makeSut();
    jest.spyOn(service, 'execute').mockImplementation(() => {
      throw new Error('error');
    });
    const request = {
      params: {
        companyId: '3333',
      },
    };

    try {
      await sut.handle(request.params);
    } catch (error) {
      expect(error.statusCode).toBe(500);
    }
  });
});
