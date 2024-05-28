---
title: Screen
date: 2021-01-02 20:03:55
background: bg-emerald-500
tags:
  - terminal
  - session
  - utility
categories:
  - Linux Command
intro: |
  This is a quick reference guide cheat sheet for the screen command.
plugins:
  - copyCode
---

## Getting Started

### Getting started

```shell script
$ screen
```

1\. Press <kbd>Ctrl-A</kbd> <kbd>D</kbd> to detach session

---

2\. List all screen sessions

```shell script
$ screen -ls
```

3\. Re-attach a screen Session

```shell script
$ screen -r <name/pid>
```

### Options {.col-span-2}

| Options | Example                               | Description                                             |
| ------- | ------------------------------------- | ------------------------------------------------------- |
| `-S`    | screen -S debug                       | Start a new session with session name                   |
| `-ls`   | screen -ls                            | List running sessions / screens                         |
| `-x`    | screen -x                             | Attach to a running session                             |
| `-r`    | screen -r debug                       | Attach to a running session with name                   |
| `-R`    | screen -R debug                       | Attach to a session _(Will create if it doesn't exist)_ |
| `-d`    | screen -d -m wget xxxx.com/large.file | Start screen in detached mode                           |
| `-X`    | screen -X -S debug kill               | Kill a running session                                  |

{.show-header}

### Help

| Command      | Description                    |
| ------------ | ------------------------------ |
| `Ctrl-A` `?` | See help _(Lists keybindings)_ |

{.shortcuts}

### Window Management {.col-span-2 .row-span-2}

| Command                                | Description                             |
| -------------------------------------- | --------------------------------------- |
| `Ctrl-A` `C`                           | Create new window                       |
| `Ctrl-A` `Ctrl-A`                      | Change to last-visited active window    |
| `Ctrl-A` `0...9`                       | Change to window by number              |
| `Ctrl-A` `'` `<0...9 or title>`        | Change to window by number or name      |
| `Ctrl-A` `N` or `Ctrl-A` `<space>`     | Change to next window in list           |
| `Ctrl-A` `P` or `Ctrl-A` `<backspace>` | Change to previous window in list       |
| `Ctrl-A` `"`                           | See window list                         |
| `Ctrl-A` `W`                           | Show window bar                         |
| `Ctrl-A` `K`                           | Kill current window _(not recommended)_ |
| `Ctrl-A` `\`                           | Kill all windows _(not recommended)_    |
| `Ctrl-A` `A`                           | Rename current window                   |

{.shortcuts}

### Getting Out

| Command          | Description                               |
| ---------------- | ----------------------------------------- |
| `Ctrl-A` `D`     | Detach                                    |
| `Ctrl-A` `D` `D` | Detach and logout <br>_(quick exit)_      |
| `Ctrl-A` `:`     | Exit all session                          |
| `Ctrl-A` `C-\`   | Force-exit screen <br>_(not recommended)_ |

{.shortcuts}

### Split screen

| Command        | Description                            |
| -------------- | -------------------------------------- | ------------------------ |
| `Ctrl-A` `S`   | Split display horizontally             |
| `Ctrl-A` `V`   | Split display vertically               |
| `Ctrl-A` `     | `                                      | Split display vertically |
| `Ctrl-A` `TAB` | Jump to next display region            |
| `Ctrl-A` `X`   | Remove current region                  |
| `Ctrl-A` `Q`   | Remove all regions but the current one |

{.shortcuts}

### Misc {.col-span-2 .row-span-2}

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `Ctrl-A` `C-l`    | Redraw window                              |
| `Ctrl-A` `[`      | Copy mode                                  |
| `Ctrl-A` `ESC`    | Copy mode                                  |
| `Ctrl-A` `]`      | Paste                                      |
| `Ctrl-A` `M`      | Monitor window for activity                |
| `Ctrl-A` `_`      | Monitor window for silence                 |
| `Ctrl-A` `Ctrl-V` | Enter digraph <br>_(non-ASCII characters)_ |
| `Ctrl-A` `X`      | Lock (password protect) display            |
| `Ctrl-A` `:`      | Enter screen command                       |
| `Ctrl-A` `H`      | Enable logging in the screen session       |

{.shortcuts}

### Screen tricks

SSH and attach in one line

```shell script
$ ssh -t user@host screen -x <name/pid>
```
