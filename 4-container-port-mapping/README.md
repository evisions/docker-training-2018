## Container Port Mapping

Even though a container may be attached to a network and it can communicate with other containers within that network, this does not mean that external entities can talk to you.  If you are running some form of service container, the whole point is to allow external communication.  This problem is solved my port mapping.  This allows an external port on the host machine to mapped to an internal port on the container.  The external port can be specified or left blank which cause a random port to be used.

## Session

`docker run --rm -p 9090:80 httpd`

open [http://localhost:9090/](http://localhost:9090/)

`docker run --name httpd --rm -p 80 httpd`

open another terminal

`docker inspect httpd`

look in Ports.[0/tcp].[0].HostPort

## Challenge
