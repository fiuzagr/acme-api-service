import packageJson from '../package.json';

export const packageName = packageJson.name;

export const packageVersion = packageJson.version;

export const port = process.env.PORT || packageJson.port;

export const logLevel = process.env.LOG_LEVEL || 'warn';
