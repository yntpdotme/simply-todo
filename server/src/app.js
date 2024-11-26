import compression from 'compression';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import requestIp from 'request-ip';

import {errorHandler} from './middlewares/index.js';
import {authRouter, healthCheckRouter, todoRouter} from './routes/index.js';
import {ApiError} from './utils/ApiError.js';

const app = express();

// global middlewares
const corsOptions = {
  origin:
    process.env.CORS_ORIGIN === '*' ? '*' : process.env.CORS_ORIGIN?.split(','),
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per minute)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: (req, res) => {
    return req.clientIp; // IP address from requestIp.mw(), as opposed to req.ip
  },
  handler: (_, __, ___, options) => {
    throw new ApiError(
      options.statusCode || 500,
      `There are too many requests. You are only allowed ${
        options.max
      } requests per ${options.windowMs / 60000} minutes`
    );
  },
});

app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(hpp());
app.use(requestIp.mw());
app.use('/api/', limiter);
app.use(express.json({limit: '16kb'}));

app.use('/api/healthcheck', healthCheckRouter);
app.use('/api/auth', authRouter);
app.use('/api/todos', todoRouter);

app.use('/', (req, res) => {
  res.send(
    `Welcome to Simply Todo Server.
      <a href="https://documenter.getpostman.com/view/31850881/2sA3Bt193p" target='_blank'>Explore API Docs</a>`
  );
});

// error handling middleware
app.use(errorHandler);

export default app;
