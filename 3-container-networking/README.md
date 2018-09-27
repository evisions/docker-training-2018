
## Container Networking

All containers are started within a network.  Each network is isolated so that network communication can only take place between the containers within.  Docker provides a default network that all new containers are attached to.  You do have the ability to create your own network.  Generally you don't need to do this unless you are concerned about security or you are running a docker cluster.

Since the default behavior for docker is to start containers in the default network, containers can communicate with each other once started.  The tricky part is knowing how to reference one another.  Docker dynamically assigns an IP address to a container from an available pool of addresses in the network on start.  Because this is dynamic, there is no dependable way to hard-code an IP address for easy reference.  The best way is to "link" a container to another when it is started.  Linking a container allows a host entry to be added such that the container can resolve the IP Address of another container by an easily referenced name.

## Session

`docker run --name mothership -it --rm busybox nc -lv -p 8080`

open new terminal

`docker inspect mothership`

`docker run -it --rm busybox ping <mothership_ip>`

`docker run -it --rm busybox cat /etc/hosts`

`docker run -it --rm --link mothership busybox ping mothership`

`docker run -it --rm --link mothership busybox cat /etc/hosts`

## Challenge

Create a container using the `httpd` image such that the following command will work:

`docker run -it --rm --link httpd-server tutum/curl curl http://httpd-server`
