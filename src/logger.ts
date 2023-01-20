import pino from 'pino';

import { logLevel, packageName } from './configuration';

const logger = pino({
  name: packageName,
  level: logLevel,
});

export default logger;
