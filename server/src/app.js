import express from 'express';

import {authRouter, healthCheckRouter, todoRouter} from './routes/index.js';
import {errorHandler} from './middlewares/index.js';

const app = express();

// global middlewares
app.use(express.json({limit: '16kb'}));

// healthcheck
app.use('/api/healthcheck', healthCheckRouter);
app.use('/api/auth', authRouter);
app.use('/api/todos', todoRouter);

// error handling middleware
app.use(errorHandler);

export default app;
