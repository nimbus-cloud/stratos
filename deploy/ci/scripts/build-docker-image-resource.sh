#!/bin/bash

# Builds the Docker resource image used by our Concourse pipelines

# Our version allows the docker registry/tag to be patched during build

rm -rf ./tmp
mkdir -p ./tmp
cd ./tmp
git clone https://github.com/concourse/docker-image-resource.git
cp ../docker-image-out-asset ./docker-image-resource/assets/out
chmod +x ./docker-image-resource/assets/out

docker build ./docker-image-resource -t splatform/stratos-concourse-docker-image-resource:latest
docker push splatform/stratos-concourse-docker-image-resource:latest
rm -rf ./tmp
echo "All done"
