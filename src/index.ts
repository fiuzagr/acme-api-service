import server from './server';
import { port } from './configuration';
import logger from './logger';

server.listen(port, () => {
  logger.info(`api running on ${port}`);
});
