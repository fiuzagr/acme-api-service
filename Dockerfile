FROM node:18-alpine AS builder

COPY ["package.json", "package-lock.json", "tsconfig.json", "/builder/"]

WORKDIR /builder

RUN \
  set -eux; \
  npm ci --ignore-scripts --omit=optional;

COPY src /builder/src

RUN \
  set -eux; \
  npm run build;

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /builder/build /app
COPY --from=builder /builder/package-lock.json /app

ENV \
  NODE_ENV=production \
  PORT=8000

RUN \
  set -eux; \
  npm ci --ignore-scripts --omit=dev;

USER node
CMD ["node", "./src/index.js"]
