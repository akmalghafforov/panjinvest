#!/bin/sh
set -eu

cd /var/www/html

mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views storage/logs bootstrap/cache database

# A named production volume hides the image's database directory. Keep migration
# files available there so `artisan migrate` remains usable after deployment.
if [ ! -d database/migrations ] && [ -d /opt/panjinvest-migrations ]; then
    mkdir -p database/migrations
    cp -a /opt/panjinvest-migrations/. database/migrations/
fi

touch database/database.sqlite
chown -R www-data:www-data storage bootstrap/cache database

if [ ! -f vendor/autoload.php ] && command -v composer >/dev/null 2>&1; then
    composer install --no-interaction --prefer-dist
fi

exec "$@"
