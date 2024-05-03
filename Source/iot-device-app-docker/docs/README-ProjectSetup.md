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

## 2.1. Create Dev Docker Image
```console
$ cd ${PROJECT_PATH}

$ # Build dev docker image
$ docker compose build dev
```

## 2.2. Setup Environment
> Use DEV Docker Image to setup the project
```console
$ cd ${PROJECT_PATH}

$ # Ensure permission access is resolved between host and docker environment
$ sudo chmod -R o+w . 

$ # Run dev docker container
$ docker compose run --rm dev bash

dev-docker$ ## Develop within docker container..
```

## 2.3. Setup Project

### 2.3.1. Create Ionic Project
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

### 2.3.2. Setup iOS
- Reference: https://github.com/imaxeon-bayer-connect/portal-app/blob/main/doc/setup.md
- Prerequisites: macOS, XCode
- Steps:
    ```console
    dev-docker$ cd ${PROJECT_PATH}/workspace
    dev-docker$ ionic capacitor add ios
    ```

### 2.3.3. Setup Android
- Reference: https://github.com/imaxeon-bayer-connect/portal-app/blob/main/doc/setup.md
- Prerequisites: macOS/Linux/Windows, Android Studio
- Steps:
    ```console
    dev-docker$ cd ${PROJECT_PATH}/workspace
    dev-docker$ ionic capacitor add android
    ```

<br>

