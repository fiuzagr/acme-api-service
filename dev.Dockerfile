FROM node:18-alpine

COPY ["package.json", "package-lock.json", "tsconfig.json", "/app/"]

WORKDIR /app

RUN \
  set -eux; \
  npm ci --ignore-scripts --omit=optional;

COPY src /app/src

ENV \
  NODE_ENV=development \
  PORT=8000

USER node
CMD ["npm", "run", "dev"]
