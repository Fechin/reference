---
title: Screen
date: 2021-01-02 20:03:55
background: bg-green-500
tags:
    - terminal
    - session
    - utility
categories:
    - Linux Command
intro: |
    This is a quick reference guide cheat sheet for the screen command.
---


Getting started {.cols-3}
---------------

### Getting started

```shell script
$ screen 
```
1\. Press `Ctrl-a d` to detach session

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
| Options | Example                                 | Description                           |
|---------|-----------------------------------------|---------------------------------------|
| `-S`    | screen -S debug                        | Start a new session with session name |
| `-ls`   | screen -ls                             | List running sessions / screens       |
| `-x`    | screen -x                              | Attach to a running session           |
| `-r`    | screen -r debug                        | Attach to a running session with name |
| `-R`    | screen -R debug                        | Attach to a session _(Will create if it doesn't exist)_           |
| `-d`    | screen -d -m wget xxxx.com/large.file  | Start screen in detached mode         |
| `-X`    | screen -X -S debug kill                | Kill a running session                |
{.show-header}




### Help

| Command      | Description                     |
|--------------|---------------------------------|
| `Ctrl-a` `?` | See help _(Lists keybindings)_  |
{.shortcuts}



### Window Management {.col-span-2 .row-span-2}
| Command                              | Description                                   |
|--------------------------------------|-----------------------------------------------|
| `Ctrl-a` `c`                         | Create new window                             |
| `Ctrl-a` `Ctrl-a`                    | Change to last-visited active window          |
| `Ctrl-a` `0...9`                     | Change to window by number                    |
| `Ctrl-a` `'` `<0...9 or title>`      | Change to window by number or name            |
| `Ctrl-a` `n` or `Ctrl-a` `<space>`     | Change to next window in list               |
| `Ctrl-a` `p` or `Ctrl-a` `<backspace>` | Change to previous window in list           |
| `Ctrl-a` `"`                         | See window list                               |
| `Ctrl-a` `w`                         | Show window bar                               |
| `Ctrl-a` `k`                         | Kill current window _(not recommended)_       |
| `Ctrl-a` `\`                         | Kill all windows _(not recommended)_          |
| `Ctrl-a` `A`                         | Rename current window                         |
{.shortcuts}



### Getting Out

| Command      | Description                           |
|--------------|---------------------------------------|
| `Ctrl-a` `d`   | Detach                                |
| `Ctrl-a` `D` `D` | Detach and logout <br>_(quick exit)_        |
| `Ctrl-a` `:`   | Exit all session                      |
| `Ctrl-a` `C-\` | Force-exit screen <br>_(not recommended)_ |
{.shortcuts}




### Split screen
| Command        | Description                            |
|----------------|----------------------------------------|
| `Ctrl-a` `S`   | Split display horizontally             |
| `Ctrl-a` `V`   | Split display vertically               |
| `Ctrl-a` `|`   | Split display vertically               |
| `Ctrl-a` `TAB` | Jump to next display region            |
| `Ctrl-a` `X`   | Remove current region                  |
| `Ctrl-a` `Q`   | Remove all regions but the current one |
{.shortcuts}




### Misc {.col-span-2 .row-span-2}

| Command           | Description                          |
|-------------------|--------------------------------------|
| `Ctrl-a` `C-l`    | Redraw window                        |
| `Ctrl-a` `[`      | Copy mode                            |
| `Ctrl-a` `<esc>`  | Copy mode                            |
| `Ctrl-a` `]`      | Paste                                |
| `Ctrl-a` `M`      | Monitor window for activity          |
| `Ctrl-a` `_`      | Monitor window for silence           |
| `Ctrl-a` `Ctrl-v` | Enter digraph <br>_(non-ASCII characters)_ |
| `Ctrl-a` `x`      | Lock (password protect) display      |
| `Ctrl-a` `:`      | Enter screen command                 |
| `Ctrl-a` `H`      | Enable logging in the screen session |
{.shortcuts}


### Screen tricks
Ssh and attach in one line.
```shell script
$ ssh -t user@host screen -x <name/pid>
```
