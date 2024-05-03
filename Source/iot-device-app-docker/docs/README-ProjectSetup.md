# Setup Project

[Top](./README.md)

<br>

# Table of Contents
1. [Project Info](#ProjectInfo)
2. [Project Setup](#ProjectSetup)

<br>

# 1. Project Info <a name="ProjectInfo"></a>
- Type: IONIC - Capacitor
- Description: IoT Device Mobile App for iOS and Android

<br>

# 2. Project Setup <a name="ProjectSetup"></a>

## 2.1. Setup Environment
> Use DEV Docker Image to setup the project
```console
$ cd ${PROJECT_PATH}

$ # Ensure permission access is resolved between host and docker environment
$ sudo chmod -R o+w . 

$ # Run Development docker container
$ docker compose run --rm dev bash

dev-docker$ ## Develop within docker container..
```

## 2.2. Steps

### 2.2.1. Create Ionic Project
- Reference: https://capacitorjs.com/docs/getting-started/with-ionic
- Steps:
    ```console

    dev-docker$ cd ${PROJECT_PATH}/workspace

    dev-docker$ # Create Ionic Project, PROJECT_NAME=iot-device-app
    dev-docker$ ionic start $PROJECT_NAME blank --type=angular --capacitor # Select standalone component type

    dev-docker$ # Move project files to workspace folder
    dev-docker$ mv $PROJECT_NAME/* $PROJECT_NAME/.* .
    dev-docker$ rm -rf $PROJECT_NAME

    dev-docker$ rm -rf .git # Delete git folder inside workspace
    dev-docker$ chmod -R 777 * # Optional: Set permission
    ```

<br>

