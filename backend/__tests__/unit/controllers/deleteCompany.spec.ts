import { DeleteCompanyController } from '@presentation/controllers/deleteCompany';

const makeSut = () => {
  const controller = new DeleteCompanyController();
  return controller;
};

describe('Delete Company', () => {
  it('Should return 204 when delete company', async () => {
    const { handle } = makeSut();

    const response = await handle();
    expect(response.statusCode).toBe(204);
  });
});
