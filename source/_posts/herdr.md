---
title: Herdr
date: 2026-08-24 00:00:00
background: bg-stone-700
tags:
  - utility
  - terminal
  - agent
  - multiplexer
categories:
  - Linux Command
intro: |
  Herdr quick reference - a terminal multiplexer runtime for coding agents (Claude Code, Codex, Cursor, opencode, and more)
plugins:
  - copyCode
---

## Herdr CLI

### Install

```shell script
$ curl -fsSL https://herdr.dev/install.sh | sh
```

Or via Homebrew

```shell script
$ brew install herdr
```

Or via mise

```shell script
$ mise use -g herdr
```

### Session

Start or attach to the default session

```shell script
$ herdr
```

Stop the background server

```shell script
$ herdr server stop
```

### Pane input

Set the focused pane to receive right-clicks

```shell script
$ herdr pane input --current --right-click pane
```

## Herdr Shortcuts

### Start here {.secondary}

| Shortcuts    | Description           |
| ------------ | --------------------- |
| `prefix` `?` | Show all keybindings  |
| `prefix` `q` | Detach (keep running) |

{.shortcuts .show-header}

Default prefix: `Ctrl+b`

<br/>

---

### Essential five {.row-span-2}

| Shortcuts          | Description          |
| ------------------ | -------------------- |
| `prefix` `c`       | New tab              |
| `prefix` `v`       | Split right          |
| `prefix` `-`       | Split down           |
| `prefix` `h/j/k/l` | Move between panes   |
| `prefix` `w`       | Workspace navigation |

{.shortcuts}

### Panes {.row-span-2}

| Shortcuts                | Description       |
| ------------------------ | ----------------- |
| `prefix` `z`             | Zoom focused pane |
| `prefix` `x`             | Close pane        |
| `prefix` `Shift+h/j/k/l` | Swap panes        |
| `prefix` `r`             | Resize mode       |
| `prefix` `[`             | Copy mode         |

{.shortcuts}

### Tabs

| Shortcuts          | Description   |
| ------------------ | ------------- |
| `prefix` `n`       | Next tab      |
| `prefix` `p`       | Previous tab  |
| `prefix` `1`...`9` | Jump to tab # |
| `prefix` `Shift+T` | Rename tab    |
| `prefix` `Shift+X` | Close tab     |

{.shortcuts}

### Workspaces & Session

| Shortcuts          | Description      |
| ------------------ | ---------------- |
| `prefix` `Shift+N` | New workspace    |
| `prefix` `Shift+W` | Rename workspace |
| `prefix` `Shift+D` | Close workspace  |
| `prefix` `g`       | Goto picker      |
| `prefix` `b`       | Toggle sidebar   |

{.shortcuts}

## Copy Mode

### Usage

| Key               | Description             |
| ----------------- | ----------------------- |
| `prefix` `[`      | Enter copy mode         |
| `h/j/k/l`         | Navigate                |
| `w` / `b` / `e`   | Word forward/back/end   |
| `W` / `B` / `E`   | WORD variants           |
| `{` / `}`         | Jump paragraphs         |
| `PageUp/PageDown` | Scroll pages            |
| `Ctrl+u/d`        | Half-page up/down       |
| `/` / `?`         | Search forward/backward |
| `n` / `N`         | Next/previous match     |
| `v` or `Space`    | Start selection         |
| `y` or `Enter`    | Copy selection          |
| `q` or `Esc`      | Exit copy mode          |

{.shortcuts}

Mouse drag-select copies without entering copy mode.

## Configuration

### Keybinding

Change prefix in `~/.config/herdr/config.toml`

```toml
[keys]
prefix = "ctrl+a"
```

### Prefix-free direct chords

```toml
[keys]
focus_pane_left  = ["prefix+h", "ctrl+alt+h"]
focus_pane_down  = ["prefix+j", "ctrl+alt+j"]
focus_pane_up    = ["prefix+k", "ctrl+alt+k"]
focus_pane_right = ["prefix+l", "ctrl+alt+l"]
previous_tab     = ["prefix+p", "ctrl+alt+["]
next_tab         = ["prefix+n", "ctrl+alt+]"]
new_tab          = ["prefix+c", "ctrl+alt+c"]
split_vertical   = ["prefix+v", "ctrl+alt+d"]
split_horizontal = ["prefix+minus", "ctrl+alt+shift+d"]
zoom             = ["prefix+z", "ctrl+alt+z"]
```

### Avoid these `ctrl+alt` chords

| Chord              | Owned by                           |
| ------------------ | ---------------------------------- |
| `ctrl+alt+arrows`  | GNOME workspaces, Ghostty, Konsole |
| `ctrl+alt+t`       | Launch terminal (Ubuntu/Fedora)    |
| `ctrl+alt+l/a`     | KDE lock screen / attention window |
| `ctrl+alt+s/u`     | Konsole                            |
| `ctrl+alt+f1..f12` | Linux virtual console switching    |

## Mouse

### Click & Drag

| Action              | Description                      |
| ------------------- | -------------------------------- |
| Click pane          | Focus pane                       |
| Click tab/workspace | Switch to it                     |
| Drag split border   | Resize pane                      |
| Right-click         | Context menu (split, new tab...) |
| Drag-select text    | Copy to clipboard                |
| Double-click token  | Copy token                       |
| `Ctrl`+click URL    | Open link in pane                |

## Agent States

Herdr marks each detected agent in the sidebar:

| State     | Meaning                            |
| --------- | ---------------------------------- |
| `working` | Agent is actively running a task   |
| `blocked` | Agent stopped and needs your input |
| `done`    | Agent finished its task            |
| `idle`    | Agent is open but not running      |

Supported agents detected automatically: Claude Code, Codex, Cursor, opencode, Grok, Copilot, Hermes, and more.
