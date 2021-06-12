import { CompanyListService } from '@application/services/companyList';
import { makeCompanyRepository } from '../moks/makeCompanyRepo';

const makeSut = () => {
  const companyRepository = makeCompanyRepository();
  const sut = new CompanyListService(companyRepository);
  return { sut, companyRepository };
};

describe('CompanyList Service', () => {
  it('should return an array', async () => {
    const { sut } = makeSut();
    const response = await sut.execute();
    expect(response).toEqual([]);
  });
  it('should calls company repository function', async () => {
    const { sut, companyRepository } = makeSut();
    const repoSpy = jest.spyOn(companyRepository, 'getAll');
    await sut.execute();
    expect(repoSpy).toHaveBeenCalled();
  });
});
