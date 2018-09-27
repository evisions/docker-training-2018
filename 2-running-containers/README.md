
## Containers

Containers are initialized instances of software that are runnable by docker. All containers are initialized from images.

Images are stored in docker image registries.  By default, docker pulls its images from [https://hub.docker.com](https://hub.docker.com)

When a container is started, it MUST run a single command. All containers have an associated command that they are designated to run. Once the command as been executed, The container will continue to run until it is either killed externally, or the command exits.  If either of these two events happen, the container is considered to be stopped.

Once a container is stopped, it can either be started again, which causes its command to be invoked in the same container, or it can be removed which will cause that container instance to be lost forever.

The output of a container can easily be accessed through the `docker logs` command or by running the command in interactive mode.


## Session

`docker run ubuntu`

`docker run -it ubuntu`

`docker ps`

`docker ps -a`

`docker rm <container_ids>`

`docker run -it --rm ubuntu ls`

`docker run -it --rm ubuntu ls -a`

`docker ps -a`

## Challenge

Create a docker image that uses python to print the output of 5 + 5: `python -c "print(5+5)"`

Hint: the ubuntu image does not have python installed
