import express from 'express';

import {healthCheckRouter} from './routes/index.js';
import {errorHandler} from './middlewares/index.js';

const app = express();

// global middlewares
app.use(express.json({limit: '16kb'}));

// healthcheck
app.use('/api/healthcheck', healthCheckRouter);

// error handling middleware
app.use(errorHandler);

export default app;