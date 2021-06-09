import { BaseError } from '@domain/errors';

export const throwError = (): never => {
  throw new Error();
};

export const thowAppError = (): never => {
  throw new BaseError('App error');
};
