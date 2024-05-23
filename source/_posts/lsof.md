---
title: Lsof
date: 2021-02-05 16:12:47
background: bg-blue-400
tags:
  - port
  - processes
  - utility
categories:
  - Linux Command
intro: |
  This quick reference cheat sheet provides various for using lsof command.
plugins:
  - copyCode
---

## Getting Started

### Introduction

**lsof** meaning `L`i`S`t `O`pen `F`iles is used to find out which files are open by which process

```shell script
$ lsof
$ sudo lsof -u root
```

### Port-specific

```shell script
$ lsof -i :8080
$ lsof -i :80 -i :22
$ lsof -i TCP:22
$ lsof -i TCP:1-1024
$ lsof -i UDP
$ lsof -i @192.168.1.5
```

### Process-specific

```shell script
$ lsof -c mysql
$ lsof -c java
$ lsof -c ssh
$ lsof -c nginx
$ lsof -c ssh -c httpd
```

### User-specific

```shell script
$ lsof -u www-data
$ lsof -u www-data -u ubuntu
$ lsof -i -u ^root # Except certain user
```

### Network-specific

```shell script
$ lsof -i 4   # IPv4 only
$ lsof -i 6   # IPv6 only
```

### PID-specific

```shell script
$ lsof -p 1753
$ lsof -p ^3  # Except certain pids
```

### Filename-specific

```shell script
$ lsof /var/log/messages
$ lsof /etc/passwd
```

### Directory-specific

```shell script
$ lsof +D /var/log # Within a directory
```

### Kill

```shell script
$ kill -9 `lsof -t -u apache`
$ kill -9 $(lsof -t -i :8080)
```
