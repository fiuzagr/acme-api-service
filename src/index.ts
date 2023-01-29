import server from './server';
import { port } from './configuration';
import logger from './logger';

const serverListen = server.listen(port, () => {
  logger.info(`api running on ${port}`);
});

['SIGTERM', 'SIGINT'].forEach((signal) => {
  process.on(signal, () => {
    logger.info(`${signal} signal received: graceful shutdown...`);
    serverListen.close(() => {
      logger.debug('HTTP server closed.');
      // TODO close another connections (e.g.: db, socket)
    });
  });
});
