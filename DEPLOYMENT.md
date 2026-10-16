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

### Investment concept catalog and map

The public catalog is committed in `resources/data/projects.json`; national figures and their provenance are in `resources/data/statistics.json`. Wikimedia originals and licenses are recorded in `public/images/concepts/credits.json`. Local WebP derivatives are context imagery; they do not depict funded or completed facilities.

Run `npm ci` in the environment that serves Vite after updating dependencies, then `npm run build` for production. An old `public/hot` file directs Laravel to a development server instead of the build manifest; remove it when serving production assets.

`MAP_TILE_URL` defaults to `https://tile.openstreetmap.org/{z}/{x}/{y}.png`; `MAP_ATTRIBUTION` can be configured for another provider. Preserve provider attribution and normal browser caching. Do not prefetch or download tiles for offline use. The homepage map initializes only near the viewport. Browser acceptance checks mock tiles; any live tile checks must allow only the configured provider host.
