---
title: NetworkPort
date: 2025-06-19 15:00:00
background: bg-[#71d1f9]
tags:
  - Network
categories:
  - Other
intro: |
  A network port cheat sheet with non-exhaustive list of ports used according to their field of application.
plugins:
---


## Networking and Infrastructure

### Web Ports 

| **Port**     | **Nom**          | **Description**             |
|:-------------| :--------------- |:----------------------------|
| `80`         | HTTP             | HyperText Transfer Protocol |
| `443`        | HTTPS            | HTTP Secure                 |
| `8080`       | HTTP-Alt         | Alternative HTTP Port       |
| `8443`       | HTTPS-Alt        | Alternative HTTPS Port      |
| `8000`       | HTTP-Proxy       | For proxy server HTTP       |
| `8008`       | HTTP-Backup      | Backup port for HTTP        |
| `8888`       | HTTP-Alternative | Alternative port for HTTP   |

### Network and Infrastructure Service Ports

| **Port** | **Nom**   | **Description**                     |
|:---------| :-------- |:------------------------------------|
| `53`     | DNS       | Domain Name System                  |
| `67`/`68`| DHCP      | Dynamic Host Configuration Protocol |
| `123`    | NTP       | Network Time Protocol               |
| `161`    | SNMP      | Simple Network Management Protocol  |
| `162`    | SNMP-Trap | SNMP Trap Messages                  |
| `514`    | Syslog    | Logging system                      |
| `69`     | TFTP      | Trivial File Transfer Protocol      |

### Virtualization and Containerization Service Ports

| **Port**  | **Nom**       | **Description**                 |
|:----------| :------------ |:--------------------------------|
| `2375`    | Docker        | Docker without  TLS             |
| `2376`    | Docker        | Docker with TLS                 |
| `6443`    | Kubernetes    | Kubernetes API Server           |
| `8443`    | Kubernetes    | Alternative Kubernetes API port |
| `9100`    | Node Exporter | Prometheus Node Exporter        |
| `9090`    | Prometheus    | Prometheus Monitoring           |
| `5672`    | RabbitMQ      | Message Broker RabbitMQ         |

### Monitoring and Management Service Ports {.col-span-2}

| **Port** | **Nom**    | **Description**                           |
|:---------| :--------- |:------------------------------------------|
| `631`    | IPP        | Internet Printing Protocol                |
| `873`    | rsync      | Remote Sync                               |
| `8086`   | InfluxDB   | Time Series Database InfluxDB             |
| `9093`   | Prometheus | Prometheus Alertmanager Alert Management  |



## Data Management

### Data Base Ports {.col-span-2}

| **Port**  | **Nom**              | **Description**                       |
|:----------| :------------------- |:--------------------------------------|
| `1433`    | Microsoft SQL Server | Microsoft SQL Database Server         |
| `3306`    | MySQL                | MySQL Database Management System      |
| `5432`    | PostgreSQL           | PostgreSQL Database Management System |
| `1521`    | Oracle               | Oracle Database Management System     |
| `27017`   | MongoDB              | MongoDB NoSQL Database                |
| `11211`   | Memcached            | Memcached Memory Caching System       |
| `6379`    | Redis                | Redis In-Memory Database              |




## Communication Services

### Remote Ports

| **Port** | **Nom** | **Description**                    |
|:---------| :------ |:-----------------------------------|
| `22`     | SSH     | Secure Shell                       |
| `23`     | Telnet  | Unsecure remote terminal protocol  |
| `3389`   | RDP     | Remote Desktop Protocol            |
| `5900`   | VNC     | Virtual Network Computing          |
| `69`     | TFTP    | Trivial File Transfer Protocol     |
| `179`    | BGP     | Border Gateway Protocol            |
| `113`    | Ident   | Ident Protocol                     |

### Messagerie Service Ports

| **Port** | **Nom**         | **Description**                  |
|:---------| :-------------- |:---------------------------------|
| `25`     | SMTP            | Simple Mail Transfer Protocol    |
| `465`    | SMTPS           | SMTP Secure                      |
| `587`    | SMTP-Submission | Port for email submission        |
| `110`    | POP3            | Post Office Protocol v3          |
| `995`    | POP3S           | POP3 Secure                      |
| `143`    | IMAP            | Internet Message Access Protocol |
| `993`    | IMAPS           | IMAP Secure                      |


### Instant Messaging and VoIP Service Ports

| **Port** | **Nom**     | **Description**                            |
|:---------| :---------- |:-------------------------------------------|
| `5060`   | SIP         | Session Initiation Protocol                |
| `5061`   | SIP-Secure  | SIP over TLS                               |
| `1720`   | H.323       | Communication protocol for VoIP            |
| `3478`   | STUN        | Session Traversal Utilities for NAT        |
| `1234`   | Skype       | Communication VoIP via Skype               |
| `5222`   | XMPP        | Extensible Messaging and Presence Protocol |
| `5223`   | XMPP-Secure | XMPP over SSL                              |


### Voice and Video Service Ports {.col-span-2}

| **Port**        | **Nom**    | **Description**                                         |
|:----------------| :--------- |:--------------------------------------------------------|
| `5060`          | SIP        | Session Initiation Protocol pour VoIP                   |
| `5061`          | SIP Secure | SIP sur TLS                                             |
| `16384`-`32767` | RTP        | Real-time Transport Protocol pour streaming audio/vidéo |
| `3478`          | STUN       | Session Traversal Utilities for NAT                     |
| `5004`          | RTP        | Real-time Transport Protocol for media                  |
| `5222`          | XMPP       | Extensible messaging protocol for instant messaging     |
| `9000`          | WebRTC     | Protocols for real-time communication via browser       |


### P2P Download and Sharing Service Ports

| **Port**      | **Nom**    | **Description**                        |
|:--------------| :--------- |:---------------------------------------|
| `6881`-`6889` | BitTorrent | Ports used by BitTorrent clients       |
| `51413`       | BitTorrent | Default port for BitTorrent            |
| `6969`        | BitTorrent | Default port for BitTorrent trackers   |
| `1194`        | OpenVPN    | Also used for VPNs and some P2P        |
| `4661`        | uTorrent   | Port used by uTorrent client           |
| `37152`       | Steam      | Used by Steam platform for downloads   |




## Security Services

### Security Ports {.col-span-2}

| **Port** | **Nom**     | **Description**                            |
|:---------| :---------- | :----------------------------------------- |
| `1194`   | OpenVPN     | Virtual Private Network                    |
| `1701`   | L2TP        | Layer 2 Tunneling Protocol                 |
| `1723`   | PPTP        | Point-to-Point Tunneling Protocol          |
| `4500`   | IPsec-NAT-T | IPsec NAT Traversal                        |
| `500`    | IKE         | Internet Key Exchange                      |
| `1812`   | RADIUS      | Remote Authentication Dial-In User Service |
| `3306`   | MySQL SSL   | MySQL avec chiffrement SSL                 |


### Cryptography and Security Service Ports

| **Port** | **Nom**   | **Description**                        |
|:---------| :-------- |:---------------------------------------|
| `443`    | HTTPS     | HTTP Secure avec SSL/TLS               |
| `993`    | IMAPS     | IMAP sécurisé avec SSL/TLS             |
| `995`    | POP3S     | POP3 sécurisé avec SSL/TLS             |
| `636`    | LDAPS     | LDAP sécurisé avec SSL/TLS             |
| `8443`   | HTTPS-Alt | Alternative port for HTTPS             |
| `8888`   | SSL Proxy | Secure proxy using SSL/TLS             |
| `563`    | SNEWS     | Secure Network News Transfer Protocol  |


## System and Application Services

### File Service Ports {.col-span-2}

| **Port** | **Nom**     | **Description**                         |
|:---------| :---------- |:----------------------------------------|
| `20`     | FTP-DATA    | FTP data transfer                       |
| `21`     | FTP         | File Transfer Protocol                  |
| `22`     | SFTP        | Secure File Transfer Protocol (via SSH) |
| `445`    | SMB         | Server Message Block (Windows Shares)   |
| `139`    | NetBIOS-SSN | NetBIOS Session Service                 |
| `2049`   | NFS         | Network File System                     |
| `548`    | AFP         | Apple Filing Protocol                   |


### Miscellaneous System and App Ports

| **Port**    | **Nom** | **Description**                               |
|:------------| :------ |:----------------------------------------------|
| `137`-`139` | NetBIOS | NetBIOS services for naming and file sharing  |
| `1900`      | UPnP    | Universal Plug and Play                       |
| `24800`     | Vuze    | Client BitTorrent Vuze                        |
| `32400`     | Plex    | Serveur multimédia Plex                       |


## Miscellaneous Services


### Gaming Service Ports {.col-span-2}

| **Port**  | **Nom**       | **Description**                  |
|:----------| :------------ |:---------------------------------|
| `27015`   | Steam         | Steam gaming platform            |
| `7777`    | Unreal Engine | Game servers using Unreal Engine |
| `27020`   | Source Engine | Game servers using Source Engine |
| `28910`   | Various Games | Various multiplayer games        |
| `27000`   | Various Games | Additional multiplayer games     |


### Miscellaneous Service Ports

| **Port**  | **Nom** | **Description**                                           |
|:----------| :------ | :-------------------------------------------------------- |
| `500`     | ISAKMP  | Internet Security Association and Key Management Protocol |
| `520`     | RIP     | Routing Information Protocol                              |
| `1900`    | UPnP    | Universal Plug and Play                                   |
| `3659`    | RADIUS  | Remote Authentication Dial-In User Service                |





