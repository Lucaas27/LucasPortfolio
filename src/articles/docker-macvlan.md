---
title: Create a MACVLAN
author: Lucas Gomes
date: 2023-02-18
tags: "docker"
categories: "docker"
description: MACVLAN
---


Macvlan and ipvlan are Linux network drivers that exposes underlay or host interfaces directly to VMs or Containers running in the host.

In this example we are using subnet: ==10.0.0.8/29== - ***8 hosts only** and assigning that to docker containers.
 Change the subnet if needed* (reserve this range in the dhcp server as docker will assign it to containers)

### Create the MACVLAN to assign to containers

   ```docker
docker network create -d macvlan -o parent=eth0 \
   --subnet 10.0.0.0/24 \
   --gateway 10.0.0.1 \
   --ip-range 10.0.0.8/29  \
   --aux-address 'host=10.0.0.8' \
   docker-lan
```

### If using a recent ubuntu distro you will need to install ifupdown (it can co-exist with netplan)

   ```linux
sudo apt install ifupdown
```

### Create a macvlan bridge for the host to communicate with containers

   ```docker
ip link add host-lan-comm link eth0 type macvlan mode bridge
```

### Add the reserved address from the `docker-lan` to the docker host and bring the interface up

   ```docker
ip addr add 10.0.0.8/32 dev host-lan-comm
   ip link set host-lan-comm up
```

### Add a static route for the host to communicate with containers and the other way

```docker
   ip route add 10.0.0.8/29 dev host-lan-comm
```

### Add the following to `/etc/network/interfaces`file so the new interface can persist after reboot  

```linux
printf "post-up ip link add host-lan-comm link eth0 type macvlan mode bridge

post-up ip addr add 10.0.0.8/32 dev host-lan-comm

post-up ip link set host-lan-comm up

post-up ip route add 10.0.0.8/29 dev host-lan-comm" >> /etc/network/interfaces
```
