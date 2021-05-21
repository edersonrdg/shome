import { mongoConnect } from '@infra/config/database';
import expressServer from '@main/server';
import { config } from 'dotenv';

const start = () => {
  config();
  expressServer();
  mongoConnect();
};

start();
