---
title: Chmod
date: 2021-07-01 10:51:44
background: bg-emerald-600
tags:
  - permission
categories:
  - Linux Command
intro: |
  This quick reference cheat sheet provides a brief overview of file permissions, and the operation of the chmod command
plugins:
  - copyCode
---

## Getting Started

### Syntax

```shell script
$ chmod [options] <permissions> <file>
```

#### Example

```shell
$ chmod 755 foo.txt
$ chmod +x cheatsheets.py
$ chmod u-x cheatsheets.py
$ chmod u=rwx,g=rx,o= cheatsheets.sh
```

#### Change files and directories recursively

```shell
$ chmod -R 755 my_directory
```

The `chmod` command stands for "change mode"

### Chmod Generator

<widget name="chmod"/>

Chmod Generator allows you to quickly and visually generate permissions in numerical and symbolic.

### Common Permissions

| Command | s         | Meaning                      |
| ------- | --------- | ---------------------------- |
| `400`   | r-------- | Readable by owner only       |
| `500`   | r-x------ | Avoid Changing               |
| `600`   | rw------- | Changeable by user           |
| `644`   | rw-r--r-- | Read and change by user      |
| `660`   | rw-rw---- | Changeable by user and group |
| `700`   | rwx------ | Only user has full access    |
| `755`   | rwxr-xr-x | Only changeable by user      |
| `775`   | rwxrwxr-x | Sharing mode for a group     |
| `777`   | rwxrwxrwx | Everybody can do everything  |

### Explains

```shell
$ ls -l
-rw-r--r--  1 root root 3 Jun 29 15:35 a.log
drwxr-xr-x  2 root root 2 Jun 30 18:06 dir
```

#### Permission analysis of "dir"

```text
d  rwx  r-x  r-x
┬  ─┬─  ─┬─  ─┬─
│   │    │    │
│   │    │    └─ 4. Other｜5 (4+0+1)
│   │    └────── 3. Group｜5 (4+0+1)
│   └─────────── 2. User ｜7 (4+2+1)
└─────────────── 1. File Type | directory
```

### Permission Modes {.col-span-2}

| Permission | Description             | Octal | Decimal   |
| ---------- | ----------------------- | ----- | --------- |
| `---`      | No Permission           | 000   | 0 (0+0+0) |
| `--x`      | Execute                 | 001   | 1 (0+0+1) |
| `-w-`      | Write                   | 010   | 2 (0+2+0) |
| `-wx`      | Execute and Write       | 011   | 3 (0+2+1) |
| `r--`      | Read                    | 100   | 4 (4+0+0) |
| `r-x`      | Read and Execute        | 101   | 5 (4+0+1) |
| `rw-`      | Read and Write          | 110   | 6 (4+2+0) |
| `rwx`      | Read, Write and Execute | 111   | 7 (4+2+1) |

{.show-header}

### Objects

| Who (abbr.) | Meaning            |
| ----------- | ------------------ |
| `u`         | `U`ser             |
| `g`         | `G`roup            |
| `o`         | `O`thers           |
| `a`         | `A`ll, same as ugo |

{.show-header}

### Permissions

| Abbreviation | Permission    | Value |
| ------------ | ------------- | ----- |
| `r`          | `R`ead        | 4     |
| `w`          | `W`rite       | 2     |
| `x`          | E`x`ecute     | 1     |
| `-`          | No permission | 0     |

{.show-header}

### File Types

| Abbreviation | File Type       |
| ------------ | --------------- |
| `d`          | `D`irectory     |
| `-`          | Regular file    |
| `l`          | Symbolic `L`ink |

{.show-header}

## Chmod Examples

### Operators

| Symbol | Description |
| ------ | ----------- |
| `+`    | Add         |
| `-`    | Remove      |
| `=`    | Set         |

### chmod 600

```shell
$ chmod 600 example.txt
$ chmod u=rw,g=,o= example.txt
$ chmod a+rwx,u-x,g-rwx,o-rwx example.txt
```

### chmod 664

```shell
$ chmod 664 example.txt
$ chmod u=rw,g=rw,o=r example.txt
$ chmod a+rwx,u-x,g-x,o-wx example.txt
```

### chmod 777

```shell
$ chmod 777 example.txt
$ chmod u=rwx,g=rwx,o=rwx example.txt
$ chmod a=rwx example.txt
```

### Symbolic mode {.row-span-3}

Deny execute permission to everyone.

```shell
$ chmod a-x chmodExampleFile.txt
```

Allow read permission to everyone.

```shell
$ chmod a+r chmodExampleFile.txt
```

Make a file readable and writable by the group and others.

```shell
$ chmod go+rw chmodExampleFile.txt
```

Make a shell script executable by the user/owner.

```shell
$ chmod u+x chmodExampleScript.sh
```

Allow everyone to read, write, and execute the file and turn on the set group-ID.

```shell
$ chmod =rwx,g+s chmodExampleScript.sh
```

### Removing Permissions {.row-span-3}

In order to remove read write permissions given to a file, use the following syntax:

```shell
$ chmod o-rw example.txt
```

For our file example.txt, we can remove read write permissions using chmod for group by running the following command:

```shell
$ chmod  g-rx example.txt
```

To remove chmod read write permissions from the group while adding read write permission to public/others, we can use
the following command:

```shell
$ chmod g-rx, o+rx example.txt
```

But, if you wish to remove all permissions for group and others, you can do so using the go= instead:

```shell
$ chmod go= example.txt
```

### Executable

```shell
$ chmod +x ~/example.py
$ chmod u+x ~/example.py
$ chmod a+x ~/example.py
```

### chmod 754

```shell
$ chmod 754 foo.sh
$ chmod u=rwx,g=rx,o=r foo.sh
```

## Chmod Practices

### SSH Permissions

```shell script
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/authorized_keys
$ chmod 600 ~/.ssh/id_rsa
$ chmod 600 ~/.ssh/id_rsa.pub
$ chmod 400 /path/to/access_key.pem
```

### Web Permissions

```shell script
$ chmod -R 644 /var/www/html/
$ chmod 644 .htaccess
$ chmod 644 robots.txt
$ chmod 755 /var/www/uploads/
$ find /var/www/html -type d -exec chmod 755 {} \;
```

### Batch Change

```shell script
$ chmod -R 644 /your_path
$ find /path -type d -exec chmod 755 {} \;
$ find /path -type f -exec chmod 644 {} \;
```

See: [Command Substitution](https://tldp.org/LDP/abs/html/commandsub.html)

## Also see

- [Modify File Permissions with chmod](https://www.linode.com/docs/guides/modify-file-permissions-with-chmod/)
  _(linode.com)_
