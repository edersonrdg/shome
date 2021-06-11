import { BaseError } from '@domain/errors';
import { HttpResponse } from '@presentation/protocols';

export const appError = (MessageError: string, statusCode = 400): HttpResponse => ({
  statusCode,
  body: { error: MessageError },
});

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: { error: 'Internal server error' },
});

export const errorTreatment = (error: Error): HttpResponse => {
  if (error instanceof BaseError) return appError(error.message, error.statusCode);
  return serverError();
};

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const created = (): HttpResponse => ({
  statusCode: 201,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
});
