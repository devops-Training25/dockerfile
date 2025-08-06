#!/bin/bash
cd ~/dockerfile/nginx-gitops
git pull origin main
docker exec gitops-nginx nginx -s reload
