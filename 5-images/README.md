## Docker Images

Whenever a container is started, it is initialized from an image.  At first docker will attempt to load an image by name from your local machine.  If it does not exist locally, it will attempt to pull it from an image registry server.  By default docker will use the `hub.docker.com` image registry server.  It will only ever use a different registry server if it is specified in the image name.  For example, specifying `ubuntu` as the image name will pull from `hub.docker.com` whereas `registry.evisions.com/ubuntu` will pull from an imaginary evisions image registry.

All docker images have an associated tag.  When a tag is omitted, the tag of `latest` is used which is a docker convention for tip.  Outside of the `latest` tag, the name of a tag can be almost anything.  It is common practice to name your tag after a version in your source code.

Images are referenced by a naming convention that allows for a lot of flexibility: `[REGISTRY_URL/]IMAGE_NAME[:IMAGE_TAG]`.  Leaving the registry url out of the name means that you want to use the default image registry `hub.docker.com`.  Leaving the image tag out of the name means you want to use the tag of `latest`.

Because using a custom registry is so common, docker provides an image of a docker registry for free.  The name of the image is `registry`.

## Session

`docker images`

`docker run -it --rm -p 5000:5000 --rm --name registry registry:2`

open new terminal

`docker pull ubuntu:latest`

`docker tag ubuntu:latest localhost:5000/ubuntu:lts`

`docker push localhost:5000/ubuntu:lts`

`docker rmi localhost:5000/ubuntu:lts`

`docker run -it --rm localhost:5000/ubuntu:lts`


## Challenge

Tag and push the `mysql:8.0.12` image so that the following command will work:

`docker run -it --rm -e MYSQL_RANDOM_ROOT_PASSWORD=1 localhost:5000/mysql:develop`
