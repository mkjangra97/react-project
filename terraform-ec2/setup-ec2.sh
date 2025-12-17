#!/bin/bash
# SYSTEM UPDATE
sudo apt update

# DOCKER INSTALLATION
sudo apt install docker.io -y

# DOCKER SERVICE START AND ENABLE
sudo systemctl start docker
sudo systemctl enable docker

# ADDING 'ubuntu' USER TO 'docker' GROUP
sudo usermod -aG docker ubuntu

# APPLY GROUP CHANGES
newgrp docker

# RESTART DOCKER SERVICE TO APPLY CHANGES
sudo systemctl restart docker