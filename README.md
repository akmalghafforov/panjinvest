# Invest Panjakent

Laravel 13 and Blade presentation portal, migrated from the original React prototype. PHP 8.4+, Composer 2, and Node 22+ are required. No database or authentication starter kit is required.

## Docker local environment

The project lives at `/home/aghafforov/Projects/investinpanjakent`. The retained Docker environment uses SQLite for sessions, cache, and queues. `APP_ENV` in `.env` selects the Docker stack. With the default local environment, run `make build` and `make up`; see [Docker operations](DEPLOYMENT.md). Existing environment files and database must be retained; migration is an explicit operator action.

Run `make help` to see all shortcuts. Frequently used commands are `make install`, `make assets`, `make test`, `make lint`, `make serve`, and `make vite`. Docker commands detect `APP_ENV` from `.env`; use `make environment` to confirm the selected stack. Commands accept `SERVICE`, for example `make logs SERVICE=app`; use `make exec COMMAND='php artisan route:list'` for ad-hoc container commands.

## Install and run

```bash
composer install
cp .env.example .env
php artisan key:generate
npm ci
npm run build
php artisan serve
```

Open http://127.0.0.1:8000. For asset development, run `npm run dev` in a second terminal. Sessions and cache use files; the queue uses the synchronous driver. Ensure `storage` and `bootstrap/cache` are writable. For deployment, serve the `public` directory and set `APP_URL`, `APP_ENV=production`, and `APP_DEBUG=false`.

## Architecture

- `routes/web.php`: all 26 original page URLs, then admin/public 404 routes. Route names use `frontend.*` and `backend.*`.
- `app/Http/Controllers/Frontend` and `Backend`: one invokable controller per page.
- `resources/views/frontend` and `backend`: separate layouts, pages, and partials.
- `resources/views/components`: shared cards, badges, timelines, stepper, SVG charts/icons, buttons, and form controls.
- `resources/fixtures/pages.json` and `charts.php`: original mock presentation data, loaded by Blade. Detail parameters retain prototype behavior rather than looking up records.
- `resources/js/frontend`, `backend`, and `shared`: Alpine controls, with separate frontend/backend Vite entry points and a shared theme.
- `resources/css/utility-candidates.txt`: preserves computed utility names embedded in escaped Alpine expressions.
- `resources/images`: local original image variants. `resources/js/images.json` maps original URLs to local Vite assets.
- `reference/react`: unchanged original source and its isolated build configuration, excluded from the Laravel build and Tailwind scan.

Forms, file selections, messages, status controls, and settings remain browser-only demos. They do not persist or send data. Links that originally pointed to unimplemented pages still reach the appropriate 404 screen.

## Verify

```bash
php artisan test
php artisan route:list --except-vendor
php artisan route:cache
php artisan route:clear
php artisan view:cache
npm run build
```

With Laravel running, execute `npm run test:browser`. The browser scripts use installed Chrome at `/usr/bin/google-chrome`; override with `CHROME_PATH=/path/to/chrome` if needed.

For visual comparisons, run the reference app separately:

```bash
cd reference/react
npm ci
npm run dev -- --host 127.0.0.1 --port 5174
```

Then from the project root run:

```bash
node tests/browser/compare.mjs
node tests/browser/alternate-states.mjs
```

Screenshots and the comparison matrix are written to `storage/app/verification` (ignored by Git). The comparison uses local source images for the reference app so image delivery is deterministic. See [verification notes](docs/verification.md).

## Image availability

18 exact Unsplash variants are stored locally. Both original `photo-1587049352846-4a222e784720` variants (`w=400`, `w=800`) return HTTP 404; they map to a local copy of the original prototype's fallback SVG. Original source URLs remain recorded in the image manifest.

Original Figma source: https://www.figma.com/design/uOXVGCAPVO6QIvL83F3Cnx/Invest-Panjakent
# panjinvest

## Public news

Public news lives in `resources/data/news.json`; the admin news screen remains a demo. Each entry has a unique readable `id` slug (used in `/news/{id}`), `title`, ISO `date` (`YYYY-MM-DD`), `excerpt`, `body` (an array of plain-text paragraphs), numeric `image`, descriptive `alt`, and boolean `sample`. Articles sort newest first; equal dates sort by slug. The homepage shows up to three articles. An empty array hides the preview and shows “No news yet” on the listing.

To add or replace an article, edit the JSON and validate it with `php artisan test --filter=NewsTest`. Replace the initial illustrative copy with verified, approved content and set `sample` to `false` for real articles. Never place HTML in article text; Blade escapes it. Image references reuse `public/images/concepts/{image}-{width}.webp` (480 and 960 variants). Keep descriptive alt text and maintain the existing source/license records in `public/images/concepts/credits.json` and `ATTRIBUTIONS.md` when changing photographs.
