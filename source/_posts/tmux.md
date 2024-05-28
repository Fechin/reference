---
title: Tmux
date: 2021-02-20 14:31:24
background: bg-emerald-600
tags:
  - utility
  - terminal
  - session
categories:
  - Linux Command
intro: |
  The tmux cheat sheet quick reference of most commonly used shortcuts and commands
plugins:
  - copyCode
---

## Tmux CLI

### New session {.row-span-2}

Start a new session

```shell script
$ tmux
```

Start a new named session

```shell script
$ tmux new -s myname
```

Show all sessions

```shell script
$ tmux ls
```

### Attach session

Attach to last session

```shell script
$ tmux a
```

Attach to named

```shell script
$ tmux a -t myname
```

### Kill session {.row-span-2}

Kill a session by name

```shell script
$ tmux kill-ses -t myname
```

Kill sessions but the current

```shell script
$ tmux kill-ses -a
```

Kill sessions but 'myname'

```shell script
$ tmux kill-ses -a -t myname
```

### Tmux help

```shell script
$ tmux info
```

### Config

Reload config

```shell script
$ tmux source-file ~/.tmu­x.conf
```

Show config

```shell script
$ tmux show-options -g
```

### Copy Mode

| Command      | Description                |
| ------------ | -------------------------- |
| `Ctrl+b` `[` | Enter copy mode            |
| `<Space>`    | Start selection            |
| `Enter`      | Copy selection             |
| `q`          | Quit copy mode             |
| `Ctrl+b` `]` | Paste contents of buffer_0 |

{.shortcuts}

Mainly works like selecting text in [Vim](/vim#motions)

## Tmux shortcuts

### Getting started {.secondary}

| Shortcuts    | Description        |
| ------------ | ------------------ |
| `Ctrl+b` `?` | List all shortcuts |

{.shortcuts .show-header}

<br/>

---

Show every session, window, pane, etc.

```shell script
$ tmux info
```

### Panes (Splits) {.row-span-2}

| Shortcuts              | Description        |
| ---------------------- | ------------------ |
| `Ctrl+b` `"` _/_ `%`   | Split Horiz/Vert   |
| `Ctrl+b` `!`           | Pane -> Window     |
| `Ctrl+b` `x`           | Kill pane          |
| `Ctrl+b` <Arrow\>      | Navigate panes     |
| `Ctrl+b` <Space\>      | Toggle layouts     |
| `Ctrl+b` `{` _/_ `}`   | Move to Left/Right |
| `Ctrl+b` `o`           | Go to next panes   |
| `Ctrl+b` `z`           | Toggle full-screen |
| `Ctrl+b` `;`           | Toggle Last pane   |
| `Ctrl+b` `q`           | Show numbers       |
| `Ctrl+b` `q` `0`...`9` | Go to # pane       |

{.shortcuts}

### Window (Tabs) {.row-span-2}

| -                    | -                    |
| -------------------- | -------------------- |
| `Ctrl+b` `c`         | Create window        |
| `Ctrl+b` `p` _/_ `n` | Previous/Next window |
| `Ctrl+b` `"` _/_ `%` | Split Horiz/Vert     |
| `Ctrl+b` `w`         | List window          |
| `Ctrl+b` `,`         | Rename window        |
| `Ctrl+b` `f`         | Find window          |
| `Ctrl+b` `l`         | Last window          |
| `Ctrl+b` `.`         | Move window          |
| `Ctrl+b` `&`         | Close window         |
| `Ctrl+b` `0`...`9`   | Go to # window       |

{.shortcuts}

### Session (Set of Windows)

| -                    | -                              |
| -------------------- | ------------------------------ |
| `Ctrl+b` `d`         | <red>Detach from session</red> |
| `Ctrl+b` `s`         | Show all sessions              |
| `Ctrl+b` `$`         | Rename session                 |
| `Ctrl+b` `(` _/_ `)` | Previous/Next session          |

{.shortcuts}

## Tmux Command Mode

### Usage {.secondary}

| Command      | Description        |
| ------------ | ------------------ |
| `Ctrl+b` `:` | Enter command mode |

{.shortcuts}

### Resizing

| Command             | Description  |
| ------------------- | ------------ |
| `resize-pane -D 20` | Resize down  |
| `resize-pane -U 20` | Resize up    |
| `resize-pane -L 20` | Resize left  |
| `resize-pane -R 20` | Resize right |

### Listing

| Command        | Description  |
| -------------- | ------------ |
| `list-keys`    | All commands |
| `list-panes`   | All panes    |
| `list-windows` | All Windows  |

### Copying

| Command              | Description      |
| -------------------- | ---------------- |
| `list-buffers`       | List all buffers |
| `show-buffer`        | Show #0 contents |
| `capture-pane`       | Copy of pane     |
| `choose-buffer`      | Show and paste   |
| `save-buffer a.txt`  | Save to file     |
| `delete-buffer -b 1` | Delete buffer 1  |

### Setting

| Command                | Description          |
| ---------------------- | -------------------- |
| `set -g OPTION`        | Set for all sessions |
| `setw -g OPTION`       | Set for all windows  |
| `setw -g mode-keys vi` | Enable vi-mode       |
| `set -g prefix C-a`    | Set prefix           |

### Misc

| Command                  | Description  |
| ------------------------ | ------------ |
| `swap-pane -s 3 -t 1`    | Swap pane    |
| `swap-window -t -1`      | Move to left |
| `setw synchronize-panes` | Sync Panes   |
| `join-pane -t :#`        | Join pane    |
