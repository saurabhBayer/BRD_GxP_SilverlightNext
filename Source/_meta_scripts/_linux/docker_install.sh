#!/bin/bash
# this script is for installing latest docker  
# version 1.0
# author: saurabh 26 sep 2021

echo docker installation started................................

sudo apt-get update
sudo apt update
sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
sudo apt update && sudo apt upgrade
sudo usermod -aG docker $USER
# sudo systemctl status docker
sudo docker --version

if [[ $(which docker) && $(docker --version) ]]; then
    echo current docker version installed...............
    echo installing docker composer.....................
    #https://docs.docker.com/compose/install/
    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    docker-compose --version
    echo script execution complete...................
    # wait...
    echo sleeping 3 seconds 3 2 1...rebooting........
    sleep 3
    reboot
  else
    echo "docker installation failed!!"
    echo "script exited with error"
fi




