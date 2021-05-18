import { bodyParser } from '@main/middlewares';
import { Express } from 'express';

export default (midlewares: Express): void => {
  midlewares.use(bodyParser);
};
