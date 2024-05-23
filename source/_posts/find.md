---
title: Find
date: 2020-12-28 16:52:20
tags:
  - search
  - file
  - directory
categories:
  - Linux Command
intro: |
  This is a quick reference list of cheatsheet for linux find command, contains common options and examples.
plugins:
  - copyCode
---

## Getting Started

### Usage

```shell script
$ find [path...] [options] [expression]
```

Wildcard

```shell script
$ find . -name "*.txt"
$ find . -name "2020*.csv"
$ find . -name "json_*"
```

---

- [Regex reference](/regex) _(cheatsheets.zip)_
- [Find cheatsheet](https://gist.github.com/gr1ev0us/3a9b9d9dbdd38f6379288eb2686fc538) _(gist.github.com)_

### Option Examples {.col-span-2}

| Option      | Example                                    | Description                                 |
| ----------- | ------------------------------------------ | ------------------------------------------- |
| `-type`     | find . -type d                             | Find only directories                       |
| `-name`     | find . -type f -name "\*.txt"              | Find file by name                           |
| `-iname`    | find . -type f -iname "hello"              | Find file by name (case-insensitive)        |
| `-size`     | find . -size +1G                           | Find files larger than 1G                   |
| `-user`     | find . -type d -user jack                  | Find jack's file                            |
| `-regex`    | find /var -regex '.\*/tmp/.\*[0-9]\*.file' | Using Regex with find. See [regex](/regex)  |
| `-maxdepth` | find . -maxdepth 1 -name "a.txt"           | In the current directory and subdirectories |
| `-mindepth` | find / -mindepth 3 -maxdepth 5 -name pass  | Between sub-directory level 2 and 4         |

{.show-header}

### Type

|           |                      |
| --------- | -------------------- |
| `-type d` | Directory            |
| `-type f` | File                 |
| `-type l` | Symbolic link        |
| `-type b` | Buffered block       |
| `-type c` | Unbuffered character |
| `-type p` | Named pipe           |
| `-type s` | Socket               |

### Size

|           |                           |
| --------- | ------------------------- |
| `-size b` | 512-byte blocks (default) |
| `-size c` | Bytes                     |
| `-size k` | Kilobytes                 |
| `-size M` | Megabytes                 |
| `-size G` | Gigabytes                 |
| `-size T` | Terabytes _(only BSD)_    |
| `-size P` | Petabytes _(only BSD)_    |

### Size +/-

Find all bigger than 10MB files

```shell script
$ find / -size +10M
```

Find all smaller than 10MB files

```shell script
$ find / -size -10M
```

Find all files that are exactly 10M

```shell script
$ find / -size 10M
```

Find Size between 100MB and 1GB

```shell script
$ find / -size +100M -size -1G
```

The `+` and `-` prefixes signify greater than and less than, as usual.

### Names

Find files using name in current directory

```shell script
$ find . -name tecmint.txt
```

Find files under home directory

```shell script
$ find /home -name tecmint.txt
```

Find files using name and ignoring case

```shell script
$ find /home -iname tecmint.txt
```

Find directories using name

```shell script
$ find / -type d -name tecmint
```

Find php files using name

```shell script
$ find . -type f -name tecmint.php
```

Find all php files in directory

```shell script
$ find . -type f -name "*.php"
```

### Permissions

Find the files whose permissions are 777.

```shell script
$ find . -type f -perm 0777 -print
```

Find the files without permission 777.

```shell script
$ find / -type f ! -perm 777
```

Find SUID set files.

```shell script
$ find / -perm /u=s
```

Find SGID set files.

```shell script
$ find / -perm /g=s
```

Find Read Only files.

```shell script
$ find / -perm /u=r
```

Find Executable files.

```shell script
$ find / -perm /a=x
```

### Owners and Groups

Find single file based on user

```shell script
$ find / -user root -name tecmint.txt
```

Find all files based on user

```shell script
$ find /home -user tecmint
```

Find all files based on group

```shell script
$ find /home -group developer
```

Find particular files of user

```shell script
$ find /home -user tecmint -iname "*.txt"
```

### Multiple filenames

```shell script {.wrap}
$ find . -type f \( -name "*.sh" -o -name "*.txt" \)
```

Find files with `.sh` and `.txt` extensions

### Multiple dirs

```shell script {.wrap}
$ find /opt /usr /var -name foo.scala -type f
```

Find files with multiple dirs

### Empty

```shell script
$ find . -type d -empty
```

Delete all empty files in a directory

```shell script
$ find . -type f -empty -delete
```

## Find Date and Time

### Means {.col-span-2}

| Option  | Description                                                     |
| ------- | --------------------------------------------------------------- |
| `atime` | access time (last time file <yel>opened</yel>)                  |
| `mtime` | modified time (last time file <yel>contents was modified</yel>) |
| `ctime` | changed time (last time file <yel>inode was changed</yel>)      |

#### Example

| Option          | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `-mtime +0`     | Modified greater than 24 hours ago                         |
| `-mtime 0`      | Modified between now and 1 day ago                         |
| `-mtime -1`     | Modified less than 1 day ago (same as `-mtime 0`)          |
| `-mtime 1`      | Modified between 24 and 48 hours ago                       |
| `-mtime +1`     | Modified more than 48 hours ago                            |
| `-mtime +1w`    | Last modified more than 1 week ago                         |
| `-atime 0`      | Last accessed between now and 24 hours ago                 |
| `-atime +0`     | Accessed more than 24 hours ago                            |
| `-atime 1`      | Accessed between 24 and 48 hours ago                       |
| `-atime +1`     | Accessed more than 48 hours ago                            |
| `-atime -1`     | Accessed less than 24 hours ago (same as `-atime 0`)       |
| `-ctime -6h30m` | File status changed within the last 6 hours and 30 minutes |

### Examples

Find last 50 days modified files

```shell script
$ find / -mtime 50
```

find last 50 days accessed files

```shell script
$ find / -atime 50
```

find last 50-100 days modified files

```shell script
$ find / -mtime +50 –mtime -100
```

find changed files in last 1 hour

```shell script
$ find / -cmin -60
```

find modified files in last 1 hour

```shell script
$ find / -mmin -60
```

find accessed files in last 1 hour

```shell script
$ find / -amin -60
```

## Find and {.cols-2}

### Find and delete {.row-span-2}

Find and remove multiple files

```shell script
$ find . -type f -name "*.mp3" -exec rm -f {} \;
```

Find and remove single file

```shell script
$ find . -type f -name "tecmint.txt" -exec rm -f {} \;
```

Find and delete 100mb files

```shell script
$ find / -type f -size +100m -exec rm -f {} \;
```

Find specific files and delete

```shell script
$ find / -type f -name *.mp3 -size +10m -exec rm {} \;
```

### Find and replace

Find all files and modify the content `const` to `let`

```shell script {.wrap}
$ find ./ -type f -exec sed -i 's/const/let/g' {} \;
```

Find readable and writable files and modify the content `old` to `new`

```shell script {.wrap}
$ find ./ -type f -readable -writable -exec sed -i "s/old/new/g" {} \;
```

See also: [sed cheatsheet](/sed)

### Find and rename

Find and suffix (added `.bak`)

```shell script {.wrap}
$ find . -type f -name 'file*' -exec mv {} {}.bak\;
```

Find and rename extension (`.html` => `.gohtml`)

```shell script {.wrap}
$ find ./ -depth -name "*.html" -exec sh -c 'mv "$1" "${1%.html}.gohtml"' _ {} \;
```

### Find and move

```shell script
$ find . -name '*.mp3' -exec mv {} /tmp/music \;
```

Find and move it to a specific directory (`/tmp/music`)

### Find and copy

```shell script
$ find . -name '*2020*.xml' -exec cp -r "{}" /tmp/backup \;
```

Find matching files and copy to a specific directory (`/tmp/backup`)

### Find and concatenate

Merge all csv files in the download directory into `merged.csv`

```shell script
$ find download -type f -iname '*.csv' | xargs cat > merged.csv
```

Merge all sorted csv files in the download directory into `merged.csv`

```shell script {.wrap}
$ find download -type f -iname '*.csv' | sort | xargs cat > merged.csv
```

### Find and sort

Find and sort in ascending

```shell script
$ find . -type f | sort
```

find and sort descending

```shell script
$ find . -type f | sort -r
```

### Find and chmod {.row-span-1}

Find files and set permissions to 644.

```shell script
$ find / -type f -perm 0777 -print -exec chmod 644 {} \;
```

Find directories and set permissions to 755.

```shell script
$ find / -type d -perm 777 -print -exec chmod 755 {} \;
```

### Find and compress

Find all `.java` files and compress it into `java.tar`

```shell script
$ find . -type f -name "*.java" | xargs tar cvf java.tar
```

Find all `.csv` files and compress it into `cheatsheets.zip`

```shell script
$ find . -type f -name "*.csv" | xargs zip cheatsheets.zip
```
