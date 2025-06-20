---
title: Nmap
date: 2025-06-17 08:30:00
background: bg-[#2a0d45]
tags:
  - network
  - scan
  - port
categories:
  - Linux Command
intro: 
  The [Nmap](https://nmap.org/) cheat sheet is a one-page reference sheet for the famous Network Mapper tool.
plugins:
  - copyCode
  
---

## Getting Started


### Basic Usage : 

```bash
# set your target in etc/hosts

# fast scan of all port of your target
nmap -p- -T5 target 

# fast scan on port 80 with os detection  
namp -p, 80 -T5 -O target 
```


### Basic Options : {.col-span-2}

| Options                  | Purpose                                   |
|:-------------------------|:------------------------------------------|
| `-p-`                    | all ports                                 |
| `-p1-1023`               | scan ports 1 to 1023                      |
| `-F`                     | 100 most common ports                     |
| `-r`                     | scan ports in consecutive order           |
| `-T<0-5>`                | -T0 being the slowest and T5 the fastest  |
| `--max-rate 50`          | rate <= 50 packets/sec                    |
| `--min-rate 15`          | rate >= 15 packets/sec                    |
| `--min-parallelism 100`  | at least 100 probes in parallel           |

## Nmap Intermediate Options

### Service Detections : {.col-span-2}

| Option                       | Meaning                                  |
|:-----------------------------|:-----------------------------------------|
| `--traceroute`               | run traceroute to target                 |
| `--script=SCRIPTS`           | Nmap scripts to run                      |
| `-sC` or `--script=default`  | run default scripts                      |
| `-O`                         | OS detection                             |
| `-sV`                        | Service version detection                |
| `-A`                         | equivalent to `-sV -O -sC --traceroute`  |


### Timing  {.col-span-3}

| Option                                                              | Meaning                                                                                            |
|:--------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------|
| `-T<0-5>`                                                           | Timing template – paranoid (0), sneaky (1), polite (2), normal (3), aggressive (4), and insane (5) |
| `--min-parallelism <numprobes>` and `--max-parallelism <numprobes>` | Minimum and maximum number of parallel probes                                                      |
| `--min-rate <number>` and `--max-rate <number>`                     | Minimum and maximum rate (packets/second)                                                          |
| `--host-timeout`                                                    | Maximum amount of time to wait for a target host                                                   |

## Formating answers

### Details & Report {.col-span-2}

| Option            | Purpose                                |
|:------------------|:---------------------------------------|
| `--reason`        | explains how Nmap made its conclusion  |
| `-v`              | verbose                                |
| `-vv`             | very verbose                           |
| `-d`              | debugging                              |
| `-dd`             | more details for debugging             |
| `-oN <filename>`  | Normal output                          |
| `-oX <filename>`  | XML output                             |
| `-oG <filename>`  | `grep`-able output                     |
| `-oA <basename>`  | Output in all major formats            |

## Advanced Technic

### Advanced Scan {.col-span-3}

| Options    | Protocol | Main Function     | Typical Use Case                               |
|------------|:---------|:------------------|:-----------------------------------------------|
| `-PR -sn`  | **ARP**  | Scan              | Discovering devices on the local network (LAN) |
| `-PE -sn`  | **ICMP** | Echo Scan         | Checking if hosts are reachable (pinging)      |
| `-PP -sn`  | **ICMP** | Timestamp Scan    | Gathering device time info (less common)       |
| `-PM -sn`  | **ICMP** | Address Mask Scan | Determining subnet mask info from hosts        |
| `-PS -sn`  | **TCP**  | SYN Ping Scan     | Detecting open TCP ports and live hosts        |
| `-PA -sn ` | **TCP**  | ACK Ping Scan     | Identifying firewall rules and open ports      |
| `-PU -sn`  | **ICMP** | Ping Scan         | Finding hosts with open UDP services           |


##  Investigation Exemple 

### Verbose Os Quick port scan {.col-span-3}

```bash
nmap -sV -O -p- -T5 target 
 
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-11-02 15:17 CET

Nmap scan report for target (10.10.158.161)
Host is up (0.021s latency).
Not shown: 65532 closed tcp ports (reset)

PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
8009/tcp open  ajp13   Apache Jserv (Protocol v1.3)
8080/tcp open  http    Apache Tomcat 8.5.5

Aggressive OS guesses: Linux 3.10 - 3.13 (95%), Linux 5.4 (95%), ASUS RT-N56U WAP (Linux 3.4) (95%),
Linux 3.16 (95%), Linux 3.1 (93%), Linux 3.2 (93%), AXIS 210A or 211 Network Camera (Linux 2.6.17) (93%), 
Sony Android TV (Android 5.0) (93%), Android 5.0 - 6.0.1 (Linux 3.4) (93%), Android 5.1 (93%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 39.94 seconds


# you can then use `nmap -A -p 22, 8009, 8080 target` on discovered ports
```
Do not use this tool without consent. For educational purposes, this example is coming from a Try Hack Me [machine](https://tryhackme.com/room/bsidesgtthompson).



## Also See

- [Nmap](https://nmap.org/)