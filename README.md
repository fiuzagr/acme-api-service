# ACME API Service repository

## Quick start

### Run the dev server

```shell
docker compose up --build
```

Docker compose up is configured to watch files in the `src` folder. Can be used
for the application server in development mode. To configure IDE/Editors, run
`npm install` locally.

> :warning: When running with "docker compose" it will be necessary to built
> the application image every time a new NPM package is installed, because the
> node_modules can be specific for each OS. Just run the above command again.

or

```shell
npm install
npm run dev
```

Requires `Node.JS >= 18.12.1`, `NPM >= 9.2.0`.

## Environment variables

Default values:

```shell
PORT=8000
LOG_LEVEL=warn
```

_See [configuration.ts](./src/configuration.ts)._

## MongoDB Express

If running with `docker compose up`, the MongoDB Express is served at
[http://localhost:8001](http://localhost:8001).

## Running in production

```shell
docker build -t=acme-api-service -f=./Dockerfile .
docker run -i --rm --init --name=acme-api-service --env=<env_var>=<value> acme-api-service
```

or

```shell
npm run build
npm start
```

Requires `Node.JS >= 18.12.1` and `NPM >= 9.2.0`.
