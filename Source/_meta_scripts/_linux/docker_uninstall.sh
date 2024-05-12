#!/bin/bash
# this script is for uninstalling latest docker  
# version 1.0
# author: saurabh 13 sep 2021

echo docker uninstallation started................................

#Uninstall the Docker Engine, CLI, and Containerd packages:
sudo apt-get purge docker-ce docker-ce-cli containerd.io

#Delete all images, containers, and volumes:

sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd

Remove previous versions:
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo docker --version
if [[ $(which docker) && $(docker --version) ]]; then
    echo "docker installation failed!!"
    echo "script exited with error"
  else
    echo current docker version uninstalled...................
    echo script execution complete.........................
fi




