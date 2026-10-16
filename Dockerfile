FROM php:8.4-fpm-alpine AS composer-production
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

WORKDIR /var/www/html

COPY composer.json composer.lock ./
RUN composer install --no-dev --no-interaction --no-progress --prefer-dist --no-scripts --optimize-autoloader

FROM node:22-alpine AS assets

WORKDIR /var/www/html

COPY package.json package-lock.json ./
RUN npm ci

COPY resources ./resources
COPY public ./public
COPY vite.config.js ./
RUN npm run build

FROM php:8.4-fpm-alpine AS runtime

RUN apk add --no-cache nginx sqlite-libs \
    && php -r 'exit(extension_loaded("pdo_sqlite") ? 0 : 1);' \
    && mkdir -p /run/nginx /var/lib/nginx/tmp

WORKDIR /var/www/html

COPY . .
COPY --from=composer-production /var/www/html/vendor ./vendor
COPY --from=assets /var/www/html/public/build ./public/build
COPY docker/nginx/default.conf /etc/nginx/http.d/default.conf
COPY docker/php/conf.d/panjinvest.ini /usr/local/etc/php/conf.d/panjinvest.ini
COPY docker/entrypoint.sh /usr/local/bin/panjinvest-entrypoint
COPY database/migrations /opt/panjinvest-migrations

RUN chmod +x /usr/local/bin/panjinvest-entrypoint \
    && mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views storage/logs bootstrap/cache database \
    && chown -R www-data:www-data storage bootstrap/cache database

EXPOSE 8080

ENTRYPOINT ["panjinvest-entrypoint"]
CMD ["sh", "-c", "php-fpm -D && nginx -g 'daemon off;'"]

FROM runtime AS local

COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer
