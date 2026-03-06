run:
	docker compose -f local.yaml --env-file=.env up -d --remove-orphans
build:
	docker compose -f local.yaml --env-file=.env build --no-cache
