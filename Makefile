run:
	docker compose -f local.yaml --env-file=.env up -d --remove-orphans
build:
	docker compose -f local.yaml --env-file=.env build --no-cache
makeMigrations:
	docker exec -it shop-server npx drizzle-kit generate

migrate:
	docker exec -it shop-server npx drizzle-kit migrate

down:
	docker compose -f local.yaml --env-file=.env down

down-v:
	docker compose -f local.yaml --env-file=.env down -v
