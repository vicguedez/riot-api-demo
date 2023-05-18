## Description

Microscopic API test project that introduced me into NestJS, TypeORM and RIOT APIs.

There are things like input validation/sanitization, entity indexes and better configurations that are not in place as those are
out of the scope for this project.

# API

/summoner/:region/:name
200 -> Basic summoner data.
404 -> Summoner not found.

# Technologies used

PostgreSQL 15
NodeJS 16

# Required ENVs

RIOT_TOKEN
PG_DB_HOST
PG_DB_PORT
PG_DB_USERNAME
PG_DB_PASSWORD
PG_DB_NAME