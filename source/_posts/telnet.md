---
title: Telnet
date: 2025-08-10 18:28:43
background: bg-indigo-400
tags:
  - network
  - scan
  - port
categories:
  - Linux Command
intro:
  This cheat sheet is intended to be a quick reminder for the main concepts involved in using the command line program
  telnet and assumes you already understand its usage.
plugins:
  - copyCode
---

## Getting Started

### Usage

Standard usage (i.e. a host to connect can be by ip or by domain)

```shell script
$ telnet [options] target [port]
```

communicate over http protocol
```shell script
$ telnet example.com 80
```

create traceroute file
```shell script
$ telnet example.com 80
```


### Option examples

| Option | Example                                   | Operation                                            |
| ------ | ----------------------------------------- | ---------------------------------------------------- |
| `-E`   | telnet -E target port                      | To treat all characters as data and prevent dropping to command
| `-e`   | telnet -e '^C' host                     | Set a custom escape character  instead of default ^]                   |
| `-l`   | telnet -l alice host           |   Pass a username to the remote host              |
| `-d`   | telnet -d host           |   Enable debug mode              |
| `-l`   | telnet -n host           |   Creates a trace file              |

## Also see

- [Telnet manpage](https://www.commandlinux.com/man-page/man1/telnet.1.html)

