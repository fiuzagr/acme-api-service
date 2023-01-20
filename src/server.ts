import { json, urlencoded } from 'body-parser';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import pinoHttp from 'pino-http';

import logger from './logger';
import { packageName, packageVersion } from './configuration';

const server = express();

server
  .disable('x-powered-by')
  .use(urlencoded({ extended: true }))
  .use(helmet())
  .use(compression())
  .use(json())
  .use(cors())
  .use(
    pinoHttp({
      logger,
    })
  )
  .get('/version', (_req, res) => res.send(`${packageName}@${packageVersion}`))
  .get('/health', (_req, res) => res.send('ok'));

export default server;
