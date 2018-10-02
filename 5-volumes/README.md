## Volumes

Docker allows you to easily mount any folder on your local file system into the container.  This can be useful for building or running files in an environment.

## Session

`docker run -it --rm -v $PWD:/usr/local/test busybox`