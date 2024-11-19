# Kairos BE
## Server Setup
### Prerequisites
- Docker Desktop installed
- .env file with DB_PASSWORD setup (get this from renaming template.env)

### Running DB
To get the database up and running, run the following bash commands.
```bash
docker compose up -d # Start postgres on docker

npx knex migrate:latest # Create tables

npx knex seed:run # Seed data
```
### Running the server
Once the database is setup, you can run the backend in dev mode using the following command:
`npm run dev`