---
title: Windows Command
date: 2025-06-30 18:28:43
background: bg-red-500
tags:
  - command
categories:
  - Programming
intro: |
  This windows command Cheat Sheet is a non exhaustive list of main windows command that you can use.
plugins:
  - copyCode
---


## Getting Started

### Basic {.col-span-3}

| CMD        | Description                                                 |
|:-----------|:------------------------------------------------------------|
| `cls`      | Clears the content of the screen.                           |
| `echo`     | Displays messages or enables/disables command echoing.      |
| `help`     | Provides help information for Windows commands.             |
| `exit`     | Exits the CMD.EXE program (command interpreter).            |
| `date`     | Displays or sets the date.                                  |
| `time`     | Displays or sets the system time.                           |
| `ver`      | Displays the Windows version.                               |
| `dir`      | Displays a list of files and subdir in a directory.         |
| `cd`       | Displays the name of or changes the current directory.      |
| `copy`     | Copies one or more files to another location.               |
| `move`     | Moves files and renames files and directories.              |
| `del`      | Deletes one or more files.                                  |
| `mkdir`    | Creates a directory.                                        |
| `rmdir`    | Removes a directory.                                        |
| `type`     | Displays the contents of a text file.                       |
| `ren`      | Renames a file or files.                                    |
| `start`    | Starts a separate window to run a specified program or cmd. |
| `shutdown` | Allows you to shut down or restart the computer.            |
| `tasklist` | Displays all currently running tasks including services.    |
| `taskkill` | Ends one or more tasks or processes.                        |

## Manage file : 

### File {.col-span-3}

| CMD        | Description                                                       |
|:-----------|:------------------------------------------------------------------|
| `attrib`   | Displays or changes file attributes.                              |
| `fc`       | Compares two files and displays the differences between them.     |
| `find`     | Searches for a text string in a file or files.                    |
| `findstr`  | Searches for strings in files.                                    |
| `xcopy`    | Copies files and directory trees.                                 |
| `robocopy` | Robust File Copy for Windows, a more advanced version of `xcopy`. |
| `compact`  | Displays or alters the compression of files on NTFS partitions.   |
| `expand`   | Expands one or more compressed files.                             |
| `replace`  | Replaces files.                                                   |
| `tree`     | Graphically displays the folder structure of a drive or path.     |
| `sort`     | Sorts input.                                                      |
| `more`     | Displays output one screen at a time.                             |
| `print`    | Prints a text file.                                               |
| `cipher`   | Displays or alters the encryption of dir [files] on NTFS parts.   |
| `diskcomp` | Compares the contents of two floppy disks.                        |
| `diskcopy` | Copies the contents of one floppy disk to another.                |
| `format`   | Formats a disk for use with Windows.                              |
| `chkdsk`   | Checks a disk and displays a status report.                       |
| `label`    | Creates, changes, or deletes the volume label of a disk.          |
| `recover`  | Recovers readable information from a bad or defective disk.       |


## System & Network

### System {.col-span-3}

| CMD           | Description                                                                               |
|:--------------|:------------------------------------------------------------------------------------------|
| `systeminfo`  | Displays detailed configuration information about a computer and its operating system.    |
| `driverquery` | Displays current device driver status and properties.                                     |
| `msinfo32`    | Starts the System Information tool.                                                       |
| `reg`         | Registry Console Tool, used to manage the Windows Registry.                               |
| `sc`          | Displays or configures services (background processes).                                   |
| `taskmgr`     | Starts the Task Manager.                                                                  |
| `wmic`        | Windows Management Instrumentation , used for managing Windows systems.                   |
| `sfc`         | System File Checker, scans and verifies the versions of all protected system files.       |
| `gpupdate`    | Refreshes local and Active Directory-based Group Policy settings.                         |
| `gpresult`    | Displays Group Policy settings and Resultant Set of Policy (RSoP) for a user or computer. |
| `powercfg`    | Configures power settings.                                                                |
| `dxdiag`      | Starts the DirectX Diagnostic Tool.                                                       |
| `msinfo32`    | Starts the Microsoft System Information tool.                                             |
| `perfmon`     | Starts the Performance Monitor.                                                           |
| `rsop`        | Resultant Set of Policy, used to view Group Policy settings.                              |
| `sigverif`    | Starts the File Signature Verification tool.                                              |
| `sysedit`     | Starts the System Configuration Editor.                                                   |
| `syskey`      | Secures the Windows XP account database.                                                  |
| `chgport`     | Displays or changes Com port mappings.                                                    |
| `chgusr`      | Changes the installed user mode.                                                          |

### Network {.col-span-3}

| CMD              | Description                                                                                                                                               |
|:-----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ipconfig`       | Displays all current TCP/IP network configuration values.                                                                                                 |
| `ping`           | Tests network connectivity to a specified host.                                                                                                           |
| `tracert`        | Traces the route taken by packets to a specified destination.                                                                                             |
| `netstat`        | Displays active TCP connections, ports on which the computer is listening.                                                                                |
| `nslookup`       | Displays information that you can use to diagnose Domain Name System (DNS) infrastructure.                                                                |
| `net`            | Manages network resources, services, and user accounts.                                                                                                   |
| `netsh`          | Network Shell, used to configure and monitor network devices.                                                                                             |
| `arp`            | Displays and modifies the IP-to-Physical address translation tables used by the Address Resolution Protocol (ARP).                                        |
| `route`          | Displays and modifies the entries in the local IP routing table.                                                                                          |
| `ftp`            | Starts the File Transfer Protocol (FTP) client.                                                                                                           |
| `telnet`         | Starts the Telnet client.                                                                                                                                 |
| `nbtstat`        | Displays protocol statistics and current TCP/IP connections using NBT (NetBIOS over TCP/IP).                                                              |
| `netuse`         | Displays information about network connections.                                                                                                           |
| `net session`    | Manages server computer connections.                                                                                                                      |
| `net start`      | Starts a network service.                                                                                                                                 |
| `net stop`       | Stops a network service.                                                                                                                                  |
| `net view`       | Displays a list of resources being shared on a specified computer.                                                                                        |
| `net user`       | Manages user accounts.                                                                                                                                    |
| `net localgroup` | Manages local groups.                                                                                                                                     |
| `net share`      | Manages shared resources.                                                                                                                                 |
| `net statistics` | Displays network statistics.                                                                                                                              |

## Miscellaneouss

### Process Management {.col-span-1}

| CMD            | Description                                                  |
|:---------------|:-------------------------------------------------------------| 
| `wmic process` | Manages processes using Windows Management Instrumentation . |
| `timeout`      | Waits for specified number of seconds / until a key pressed. |

### Disk Management {.col-span-1}

| CMD Command  | Description                         |
|:-------------|:------------------------------------|
| `diskpart`   | Manages disk partitions.            |
| `defrag`     | Defragments a disk.                 |
| `convert`    | Converts a FAT volume to NTFS.      |
| `diskperf`   | Manages disk performance counters.  |

### System Configuration {.col-span-1}

| CMD Command  | Description                                             |
|:-------------|:--------------------------------------------------------|
| `bcdedit`    | Manages the Boot Configuration Data (BCD) store.        |
| `bootcfg`    | Configures, queries, or changes Boot.ini file settings. |
| `msconfig`   | Starts the System Configuration utility.                |
| `regedit`    | Starts the Registry Editor.                             |
