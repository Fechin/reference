---
title: Grep
date: 2020-11-25 18:28:43
background: bg-emerald-400
tags:
  - egrep
  - search
  - pattern
  - text
categories:
  - Linux Command
intro:
  This cheat sheet is intended to be a quick reminder for the main concepts involved in using the command line program
  grep and assumes you already understand its usage.
plugins:
  - copyCode
---

## Getting Started {.cols-5}

### Usage {.col-span-2}

Search standard output (i.e. a stream of text)

```shell script
$ grep [options] search_string
```

Search for an exact string in file:

```shell script
$ grep [options] search_string path/to/file
```

Print lines in myfile.txt containing the string "mellon"

```shell script
$ grep 'mellon' myfile.txt
```

Wildcards are accepted in filename.

### Option examples {.col-span-3}

| Option | Example                                   | Operation                                            |
| ------ | ----------------------------------------- | ---------------------------------------------------- |
| `-i`   | grep -i ^DA demo.txt                      | Forgets about case sensitivity                       |
| `-w`   | grep -w "of" demo.txt                     | Search only for the full word                        |
| `-A`   | grep -A 3 'Exception' error.log           | Display 3 lines after matching string                |
| `-B`   | grep -B 4 'Exception' error.log           | Display 4 lines before matching string               |
| `-C`   | grep -C 5 'Exception' error.log           | Display 5 lines around matching string               |
| `-r`   | grep -r 'cheatsheets.zip' /var/log/nginx/ | Recursive search _(within subdirs)_                  |
| `-v`   | grep -v 'warning' /var/log/syslog         | Return all lines which don't match the pattern       |
| `-e`   | grep -e '^al' filename                    | Use regex _(lines starting with 'al')_               |
| `-E`   | grep -E 'ja(s\|cks)on' filename           | Extended regex _(lines containing jason or jackson)_ |
| `-c`   | grep -c 'error' /var/log/syslog           | Count the number of matches                          |
| `-l`   | grep -l 'robot' /var/log/\*               | Print the name of the file(s) of matches             |
| `-o`   | grep -o search_string filename            | Only show the matching part of the string            |
| `-n`   | grep -n "go" demo.txt                     | Show the line numbers of the matches                 |

## Grep regular expressions

### Refer

- [Regex syntax](/regex) _(cheatsheets.zip)_
- [Regex examples](/regex#regex-examples) _(cheatsheets.zip)_

Please refer to the full version of the regex cheat sheet for more complex requirements.

### Wildcards

| -               | -                                      |
| --------------- | -------------------------------------- |
| .               | Any character.                         |
| `?            ` | Optional and can only occur once.      |
| `*            ` | Optional and can occur more than once. |
| `+            ` | Required and can occur more than once. |

### Quantifiers

| -               | -                                            |
| --------------- | -------------------------------------------- |
| `{n}          ` | Previous item appears exactly n times.       |
| `{n,}         ` | Previous item appears n times or more.       |
| `{,m}         ` | Previous item appears n times maximum.       |
| `{n,m}        ` | Previous item appears between n and m times. |

### POSIX

| -               | -                                         |
| --------------- | ----------------------------------------- |
| `[:alpha:]   `  | Any lower and upper case letter.          |
| `[:digit:]   `  | Any number.                               |
| `[:alnum:]   `  | Any lower and upper case letter or digit. |
| `[:space:]    ` | Any whites­pace.                          |

### Character

| -               | -                                         |
| --------------- | ----------------------------------------- |
| `[A-Z­a-z]    ` | Any lower and upper case letter.          |
| `[0-9]        ` | Any number.                               |
| `[0-9­A-Z­a-z]` | Any lower and upper case letter or digit. |

### Position

|      |                    |
| ---- | ------------------ |
| `^ ` | Beginning of line. |
| `$ ` | End of line.       |
| `^$` | Empty line.        |
| `\<` | Start of word.     |
| `\>` | End of word.       |
