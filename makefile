run:
	docker-compose up --build

stop:
	docker compose --file 'docker-compose.yml' --project-name 'reference' stop

clean: stop
	docker compose --file 'docker-compose.yml' --project-name 'reference' down