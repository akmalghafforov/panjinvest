PROJECT_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

# APP_ENV in .env chooses the Compose stack: local, development, or production.
override APP_ENV := $(shell test -f "$(PROJECT_DIR).env" && sed -n 's/^APP_ENV=//p' "$(PROJECT_DIR).env" | head -n 1 | tr -d '[:space:]"')
COMPOSE := docker compose --project-directory "$(PROJECT_DIR)" --env-file "$(PROJECT_DIR).env" -f "$(PROJECT_DIR)compose.$(APP_ENV).yml"

# Optional arguments for Docker targets, for example:
#   make logs SERVICE=app
#   make exec COMMAND='php artisan route:list'
SERVICE ?=
COMMAND ?= sh

.DEFAULT_GOAL := help

.PHONY: help environment install assets vite serve test test-browser lint format route-list cache clear-cache \
	preflight validate build up down restart ps logs shell exec migrate test-docker deploy hosts

help: ## Show available commands.
	@awk 'BEGIN {FS = ":.*##"; printf "Usage: make <target>\n\nTargets:\n"} /^[a-zA-Z0-9_.-]+:.*##/ {printf "  %-20s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

environment: ## Show the environment selected by .env.
	@echo "APP_ENV=$(APP_ENV)"
	@echo "Compose file: compose.$(APP_ENV).yml"

install: ## Install PHP and JavaScript dependencies (does not alter .env).
	composer install
	npm ci

assets: ## Build production frontend assets.
	npm run build

vite: ## Start the Vite development server.
	npm run dev

serve: ## Start the Laravel development server at http://127.0.0.1:8000.
	php artisan serve

test: ## Run the Laravel test suite.
	php artisan test --compact

test-browser: ## Run browser checks (Laravel must already be running).
	npm run test:browser

lint: ## Check PHP style without changing files.
	./vendor/bin/pint --test

format: ## Format PHP files with Laravel Pint.
	./vendor/bin/pint

route-list: ## List application routes, excluding vendor routes.
	php artisan route:list --except-vendor

cache: ## Cache Laravel configuration, routes, events, and views.
	php artisan optimize

clear-cache: ## Remove Laravel's generated caches.
	php artisan optimize:clear

preflight: ## Check .env, its APP_ENV value, and Docker prerequisites.
	@test -f "$(PROJECT_DIR).env" || (echo "Missing .env; copy the appropriate .env.*.example file first"; exit 1)
	@test -n "$(APP_ENV)" || (echo "Missing APP_ENV in .env"; exit 1)
	@test "$(APP_ENV)" = local -o "$(APP_ENV)" = development -o "$(APP_ENV)" = production || (echo "Unsupported APP_ENV: $(APP_ENV) (expected local, development, or production)"; exit 1)
	@test -f "$(PROJECT_DIR)compose.$(APP_ENV).yml" || (echo "Missing Compose file for APP_ENV=$(APP_ENV)"; exit 1)
	@docker network inspect traefik-net >/dev/null || (echo "Missing external Docker network: traefik-net"; exit 1)
	@if test "$(APP_ENV)" != local; then test -n "$$PANJINVEST_IMAGE" || grep -q '^PANJINVEST_IMAGE=.' "$(PROJECT_DIR).env" || (echo "Set PANJINVEST_IMAGE to an immutable image tag in .env"; exit 1); fi

validate: preflight ## Validate the selected Docker Compose configuration.
	$(COMPOSE) config --quiet

build: preflight ## Build the local stack or the selected environment's runtime image.
	@if test "$(APP_ENV)" = local; then \
		$(COMPOSE) build; \
	else \
		test -n "$$PANJINVEST_IMAGE" || PANJINVEST_IMAGE=$$(sed -n 's/^PANJINVEST_IMAGE=//p' "$(PROJECT_DIR).env" | head -n 1); \
		test -n "$$PANJINVEST_IMAGE" || (echo "Set PANJINVEST_IMAGE to an immutable image tag in .env"; exit 1); \
		docker build --target runtime --tag "$$PANJINVEST_IMAGE" "$(PROJECT_DIR)"; \
	fi

up: validate ## Start the Docker stack selected by .env.
	$(COMPOSE) up -d

down: preflight ## Stop the selected Docker stack (preserves volumes).
	$(COMPOSE) down

restart: preflight ## Restart selected services; optionally set SERVICE.
	$(COMPOSE) restart $(SERVICE)

ps: preflight ## Show selected Docker service status.
	$(COMPOSE) ps

logs: preflight ## Follow selected logs; optionally set SERVICE.
	$(COMPOSE) logs -f $(SERVICE)

shell: preflight ## Open a shell in the selected app container.
	$(COMPOSE) exec app sh

exec: preflight ## Run COMMAND in the selected app container.
	$(COMPOSE) exec app $(COMMAND)

migrate: preflight ## Run pending migrations in the selected environment.
	$(COMPOSE) exec app php artisan migrate --force

test-docker: preflight ## Run tests in the selected app container.
	$(COMPOSE) exec app php artisan test --compact

deploy: up migrate ## Start and migrate the environment selected by .env.

hosts: preflight ## Add panjinvest.test to /etc/hosts for APP_ENV=local.
	@test "$(APP_ENV)" = local || (echo "hosts is only available when APP_ENV=local"; exit 1)
	@grep -qxF '127.0.0.1 panjinvest.test' /etc/hosts || echo '127.0.0.1 panjinvest.test' | sudo tee -a /etc/hosts >/dev/null
