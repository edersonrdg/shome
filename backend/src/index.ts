import { mongoConnect } from '@infra/config/database';
import expressServer from '@main/server';

const start = () => {
  expressServer();
  mongoConnect();
};

start();
