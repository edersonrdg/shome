import { CompanyListController } from '@presentation/controllers/companyList';

const makeSut = () => {
  const sut = new CompanyListController();
  return { sut };
};

describe('Company list', () => {
  it('Should return 200', async () => {
    const { sut } = makeSut();

    const response = await sut.handle();
    expect(response.statusCode).toBe(200);
  });
});
