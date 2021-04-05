# START YOUR PROJECT WITH DOCKER

## DOCKER / React / NodeJS / Express / MongoDB / DashboardDB / nginx

### config :

- Create ./db folder,
- create .env file inside ./db/
  - See Docker hub to init ( image mongo ) (2arg)
  - See image mongo-express (3arg)

- create .env file inside ./api/
  - DB_USER=
  - DB_PWD=

***

### Dev :

- docker-compose -f docker-compose.dev.yml up --build

***

### Prod :

Create new user in mongo to use db for prod, u can add a script or use cli
- run db & add user : 
  - docker-compose -f docker-compose.prod.yml run db
  - exec it with -it & sh (docker container ls to see the name)
  - "mongo" 
  - auth (with db/.env) to add user (this user: api/.env)
- docker-compose -f docker-compose.prod.yml up --build