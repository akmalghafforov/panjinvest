PROJECT_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

COMPOSE_LOCAL := docker compose --project-directory "$(PROJECT_DIR)" -f "$(PROJECT_DIR)compose.local.yml"
COMPOSE_DEVELOPMENT := docker compose --project-directory "$(PROJECT_DIR)" --env-file "$(PROJECT_DIR).env.development" -f "$(PROJECT_DIR)compose.development.yml"
COMPOSE_PRODUCTION := docker compose --project-directory "$(PROJECT_DIR)" --env-file "$(PROJECT_DIR).env.production" -f "$(PROJECT_DIR)compose.production.yml"

.PHONY: preflight preflight-local preflight-development preflight-production validate-local validate-development validate-production build-local build-image up-local down-local logs-local shell-local migrate-local test-local hosts-local up-development down-development logs-development shell-development migrate-development deploy-development up-production down-production logs-production shell-production migrate-production deploy-production

preflight:
	@docker network inspect traefik-net >/dev/null || (echo "Missing external Docker network: traefik-net"; exit 1)

preflight-local: preflight
	@test -f "$(PROJECT_DIR).env" || (echo "Missing .env; copy .env.example first"; exit 1)

preflight-development: preflight
	@test -f "$(PROJECT_DIR).env.development" || (echo "Missing .env.development; copy .env.development.example first"; exit 1)
	@test -n "$(PANJINVEST_IMAGE)" || (echo "Set PANJINVEST_IMAGE to an immutable image tag"; exit 1)

preflight-production: preflight
	@test -f "$(PROJECT_DIR).env.production" || (echo "Missing .env.production; copy .env.production.example first"; exit 1)
	@test -n "$(PANJINVEST_IMAGE)" || (echo "Set PANJINVEST_IMAGE to an immutable image tag"; exit 1)

validate-local: preflight-local
	$(COMPOSE_LOCAL) config --quiet

validate-development: preflight-development
	$(COMPOSE_DEVELOPMENT) config --quiet

validate-production: preflight-production
	$(COMPOSE_PRODUCTION) config --quiet

build-local: preflight-local
	$(COMPOSE_LOCAL) build

build-image:
	@test -n "$(PANJINVEST_IMAGE)" || (echo "Set PANJINVEST_IMAGE to an immutable image tag"; exit 1)
	docker build --target runtime --tag $(PANJINVEST_IMAGE) "$(PROJECT_DIR)"

up-local: validate-local
	$(COMPOSE_LOCAL) up -d

down-local:
	$(COMPOSE_LOCAL) down

logs-local:
	$(COMPOSE_LOCAL) logs -f

shell-local:
	$(COMPOSE_LOCAL) exec app sh

migrate-local:
	$(COMPOSE_LOCAL) exec app php artisan migrate --force

test-local:
	$(COMPOSE_LOCAL) exec app php artisan test --compact

hosts-local:
	@grep -qxF '127.0.0.1 panjinvest.test' /etc/hosts || echo '127.0.0.1 panjinvest.test' | sudo tee -a /etc/hosts >/dev/null

up-development: validate-development
	$(COMPOSE_DEVELOPMENT) up -d

down-development:
	$(COMPOSE_DEVELOPMENT) down

logs-development:
	$(COMPOSE_DEVELOPMENT) logs -f

shell-development:
	$(COMPOSE_DEVELOPMENT) exec app sh

migrate-development:
	$(COMPOSE_DEVELOPMENT) exec app php artisan migrate --force

deploy-development: up-development migrate-development

up-production: validate-production
	$(COMPOSE_PRODUCTION) up -d

down-production:
	$(COMPOSE_PRODUCTION) down

logs-production:
	$(COMPOSE_PRODUCTION) logs -f

shell-production:
	$(COMPOSE_PRODUCTION) exec app sh

migrate-production:
	$(COMPOSE_PRODUCTION) exec app php artisan migrate --force

deploy-production: up-production migrate-production
