# Arguments 
ARG NODE_VERSION=18.13.0
ARG IONIC_CLI_VERSION=7.2.0

# ---- Builder ---
FROM node:${NODE_VERSION} AS base
ARG NODE_VERSION
ARG IONIC_CLI_VERSION
ARG DEBIAN_FRONTEND=noninteractive

LABEL node_version="$NODE_VERSION"

# Install apt packages
RUN apt-get update
RUN apt install -yq \
    protobuf-compiler

RUN apt-get purge -y --auto-remove
RUN rm -rf /var/lib/apt/lists/* 

# Install npm packages
#RUN npm install -g @ionic/cli@IONIC_CLI_VERSION cordova
RUN npm install -g @ionic/cli@$IONIC_CLI_VERSION


USER node
WORKDIR /home/node/workspace
