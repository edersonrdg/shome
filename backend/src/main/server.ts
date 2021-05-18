/* eslint-disable no-console */

import app from './config/app';

const expressServer = () => {
  try {
    app.listen('3333', () => console.log('server start'));
  } catch (error) {
    console.error(error);
  }
};

export default expressServer;
