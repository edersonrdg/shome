import express from 'express';
import middlewares from './middlewares';
import routes from './routes';

const app = express();

middlewares(app);
app.use(routes);

export default app;
