import { HttpResponse } from '@presentation/protocols';

export const appError = (MessageError: string, statusCode = 400): HttpResponse => ({
  statusCode,
  body: { error: MessageError },
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});