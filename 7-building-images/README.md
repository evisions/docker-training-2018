## Building Images

Docker provides a rich and easy way of building images via a Dockerfile.  How images are built is extremely complicated but through the use of the Dockerfile, custom images can be created very easily.

In order to build an image, docker needs two things, a folder context and a Dockerfile.  Any local paths reference in the Dockerfile will be resolved against the folder context.

Every Dockerfile must contain a FROM keyword which is usually located at the top of the file.  This indicates the base image that you want to start with when building your custom image.  If you were building a nodejs app, you would most likely want a base image that has node installed.  This feature allows images to be composed off of each other.

Previously I stated that every image has a primary command associated with it that will be executed when the container instance is started.  You can specify this command in a Dockerfile.  If you do not specify it, then the command from the parent image will be used.

Other common commands in a Dockerfile are COPY directives which copy files into the final image binary, and RUN directives which allow execution of commands as part of the image creation

## Session

`docker build -t example-app:latest example-app`

`docker run -it -p 8080:8080 --rm example-app:latest`

## Challenge

Modify the docker file in `challenge-app/DockerFile` so that the following command will build a working spring boot app

`docker build -t challenge-app:latest challenge-app`

`docker run -it -p 8080:8080 --rm challenge-app:latest`
