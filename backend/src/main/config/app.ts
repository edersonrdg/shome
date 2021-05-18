import express from 'express';
import middlewares from './middlewares';
import routes from './routes';

const app = express();

app.use(routes);
app.use(middlewares);

export default app;
