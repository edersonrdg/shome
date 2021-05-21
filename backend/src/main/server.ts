/* eslint-disable no-console */
import app from './config/app';

const expressServer = () => {
  try {
    app.listen(process.env.PORT || 3333, () => console.log('express server start'));
  } catch (error) {
    console.error(error);
  }
};

export default expressServer;
