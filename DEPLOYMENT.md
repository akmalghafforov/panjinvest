# Docker environments

Panj Invest runs behind the external `traefik-net` managed by
`mrstairs-backend`. Its database, cache, sessions, and queue use SQLite.

## Local

Copy `.env.example` to `.env`, generate an application key if needed, then run:

```sh
make hosts-local
make build-local
make up-local
make migrate-local
```

Open `http://panjinvest.test`; Vite HMR listens on port `5173`. Use
`make logs-local`, `make shell-local`, `make test-local`, and `make down-local`
for the remaining local workflow. `make hosts-local` idempotently adds only the
exact `127.0.0.1 panjinvest.test` entry when it is missing.

## Development and production

Create the ignored environment files and set a real `APP_KEY` in each:

```sh
cp .env.development.example .env.development
cp .env.production.example .env.production
```

Build and publish an immutable image, then deploy that exact tag:

```sh
PANJINVEST_IMAGE=registry.example/panjinvest:2026-09-16 make build-image
PANJINVEST_IMAGE=registry.example/panjinvest:2026-09-16 make deploy-development
PANJINVEST_IMAGE=registry.example/panjinvest:2026-09-16 make deploy-production
```

Each environment also has `up-*`, `down-*`, `logs-*`, `shell-*`, `migrate-*`,
and `validate-*` targets. Development serves `dev.panjinvest.com`; production
serves `panjinvest.com` and redirects `www.panjinvest.com` to the apex. The
deployment stacks publish no app ports and retain SQLite and `storage` in named
volumes.
