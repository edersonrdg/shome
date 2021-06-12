import { CompanyListService } from '@application/services/companyList';

const makeSut = () => {
  const sut = new CompanyListService();
  return { sut };
};

describe('CompanyList Service', () => {
  it('should return an array', async () => {
    const { sut } = makeSut();
    const response = await sut.execute();
    expect(response).toEqual([]);
  });
});
