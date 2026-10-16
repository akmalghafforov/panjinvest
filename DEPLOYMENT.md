# Docker environments

Panj Invest runs behind the external `traefik-net` managed by
`mrstairs-backend`. Its database, cache, sessions, and queue use SQLite.

## Local

Copy `.env.example` to `.env`, generate an application key if needed, then run:

```sh
make hosts
make build
make up
make migrate
```

Open `http://panjinvest.test`; Vite HMR listens on port `5173`. Use
`make logs`, `make shell`, `make test-docker`, and `make down`
for the remaining local workflow. `make hosts` idempotently adds only the
exact `127.0.0.1 panjinvest.test` entry when it is missing.

## Development and production

To select a deployment environment, copy its template to `.env` and set a real
`APP_KEY` and immutable `PANJINVEST_IMAGE` in that file:

```sh
cp .env.development.example .env  # sets APP_ENV=development
# or
cp .env.production.example .env   # sets APP_ENV=production
```

Build and publish that exact tag, then deploy it. The Makefile selects
`compose.development.yml` or `compose.production.yml` from `APP_ENV` in `.env`:

```sh
make build
docker push "$(sed -n 's/^PANJINVEST_IMAGE=//p' .env)"
make deploy
```

Use `make environment` to inspect the selection. The shared targets are `up`,
`down`, `logs`, `shell`, `migrate`, and `validate`. Development serves
`dev.panjinvest.com`; production serves `panjinvest.com` and redirects
`www.panjinvest.com` to the apex. The deployment stacks publish no app ports
and retain SQLite and `storage` in named volumes.
