# Development

[Top](./README.md)

<br>

# Table of Contents
1. [Development](#Development)

<br>

# 1. Development <a name="Development"></a>

# 1.1. Run Dev Docker Container
NOTES: 
- Development is done inside the docker container
- The docker image is capable of change dependent framework version (e.g. Node, Ionic)

```console
$ cd ${PROJECT_PATH}

$ # Run Development docker container
$ docker compose run --rm dev bash

dev-docker$ ## Develop within docker container..
```

# 1.2. Web Development
```console
dev-docker$ cd ${PROJECT_PATH}/workspace

dev-docker$ # Ionic Serve
dev-docker$ ionic serve

dev-docker$ # Anguler Serve (ng serve)
dev-docker$ npm run start

```

<br>

