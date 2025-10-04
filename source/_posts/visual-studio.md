---
title: Visual Studio
date: 2025-10-04 09:00:00
background: bg-[#2d6cdf]
tags:
  - editor
  - shortcut
  - visual-studio
categories:
  - Toolkit
intro: |
  This Visual Studio quick reference cheat sheet shows its keyboard shortcuts for code editing, navigation, debugging, refactoring, Git, and test running.
---

## Keyboard shortcuts for Windows

### Code editing {.row-span-2}

| Shortcut               | Action                    |
| ---------------------- | ------------------------- |
| `Ctrl` `Space`         | Complete word             |
| `Ctrl` `Shift` `Space` | Show signature help       |
| `Alt` `↑/↓`            | Move line up / down       |
| `Ctrl` `D`             | Duplicate line            |
| `Ctrl` `Shift` `L`     | Delete line               |
| `Ctrl` `Enter`         | Insert line below         |
| `Ctrl` `Shift` `Enter` | Insert line above         |
| `Ctrl` `↑/↓`           | Scroll line up / down     |
| `Ctrl` `PgUp/PgDn`     | Scroll page up / down     |
| `Shift` `mouse wheel`  | Scroll page horizontally  |
| `Ctrl` `/`             | Toggle line comment       |
| `Ctrl` `Shift` `/`     | Toggle block comment      |
| `Ctrl` `K` `D`         | Format document           |
| `Ctrl` `K` `F`         | Format selection          |
| `Ctrl` `I`             | Ask Copilot (inline chat) |
| `Ctrl` `E` `W`         | Toggle word wrap          |
| `Ctrl` `R` `W`         | Toggle view whitespace    |
| `Shift` `Alt` `L` `S`  | Sort lines                |
| `Shift` `Alt` `L` `J`  | Join lines                |

{.shortcuts}

### Search and replace

| Shortcut            | Action                      |
| ------------------- | --------------------------- |
| `Ctrl` `F`          | Find                        |
| `Ctrl` `H`          | Replace                     |
| `Ctrl` `Shift` `F`  | Find in files               |
| `Ctrl` `Shift` `H`  | Replace in files            |
| `F8` / `Shift` `F8` | Go to next / previous error |

{.shortcuts}

### Refactoring

| Shortcut                    | Action                        |
| --------------------------- | ----------------------------- |
| `Ctrl` `.` or `Alt` `Enter` | Show quick actions            |
| `Ctrl` `R` `M`              | Extract method                |
| `Ctrl` `R` `R`              | Rename                        |
| `Ctrl` `R` `I`              | Extract interface             |
| `Ctrl` `R` `G`              | Remove and sort usings        |
| `Ctrl` `K` `E`              | Code cleanup                  |
| `Ctrl` `K` `S`              | Surround with (if, try, etc.) |
| `Shift` `Alt` `L` `S`       | Sort lines                    |
| `Shift` `Alt` `L` `J`       | Join lines                    |

{.shortcuts}

### Navigation

| Shortcut                         | Action                        |
| -------------------------------- | ----------------------------- |
| `Ctrl` `Q` or `Ctrl` `Shift` `P` | Feature search                |
| `Ctrl` `T`                       | Code search                   |
| `Ctrl` `G`                       | Go to line                    |
| `F8` / `Shift` `F8`              | Go to next / prev error       |
| `F12`                            | Go to definition              |
| `Alt` `F12`                      | Peek definition               |
| `Ctrl` `F12`                     | Go to implementation          |
| `Shift` `F12`                    | Find all references           |
| `Alt` `Home`                     | Go to base class              |
| `Ctrl` `-` / `Ctrl` `Shift` `-`  | Navigate backward / forward   |
| `Ctrl` `Backspace`               | Go to last edit location      |
| `Ctrl` `K` `N` / `Ctrl` `K` `P`  | Go to next / prev bookmark    |
| `Ctrl` `K` `L`                   | Clear all bookmarks           |
| `F7` / `Shift` `F7`              | Toggle designer and code view |
| `F4`                             | Properties                    |

{.shortcuts}

### Debugging

| Shortcut            | Action                   |
| ------------------- | ------------------------ |
| `F5`                | Start/continue debugging |
| `Shift` `F5`        | Stop debugging           |
| `Ctrl` `F5`         | Start without debugging  |
| `F9`                | Toggle breakpoint        |
| `Ctrl` `Shift` `F9` | Clear all breakpoints    |
| `F11`               | Step into                |
| `F10`               | Step over                |
| `Shift` `F11`       | Step out                 |
| `Alt` `F5`          | Attach to process...     |
| `Alt` `R`           | Reattach to process      |
| `Alt` `F2`          | Launch profiler          |
| `Shift` `Alt` `F2`  | Relaunch profiler        |

{.shortcuts}

### Multi-caret and selection

| Shortcut                  | Action                      |
| ------------------------- | --------------------------- |
| `Alt` `mouse click`       | Insert caret                |
| `Shift` `Alt` `↑/↓`       | Insert caret above/below    |
| `Shift` `Alt` `,`         | Insert next matching caret  |
| `Shift` `Alt` `.`         | Insert all matching carets  |
| `Shift` `Alt` `PgUp/PgDn` | Move last caret up/down     |
| `Alt` `mouse drag`        | Column (box) selection      |
| `Shift` `Alt` `←/→/↑/↓`   | Column (box) selection      |
| `Ctrl` `Alt` `mouse`      | Expand / collapse selection |

{.shortcuts}

### Projects and solutions

| Shortcut           | Action         |
| ------------------ | -------------- |
| `Ctrl` `Shift` `N` | New project    |
| `Ctrl` `Shift` `O` | Open project   |
| `Ctrl` `B`         | Build solution |

{.shortcuts}

### File management

| Shortcut                 | Action                         |
| ------------------------ | ------------------------------ |
| `Ctrl` `N`               | New file                       |
| `Ctrl` `O`               | Open file                      |
| `Ctrl` `Shift` `S`       | Save all                       |
| `Ctrl` `Alt` `PgUp/PgDn` | Go to document on left/right   |
| `Ctrl` `F4`              | Close tab                      |
| `Ctrl` `K` `S`           | Save                           |
| `Ctrl` `TAB`             | Cycle through tabs             |
| `Ctrl` `K` `R`           | Reveal active file in Explorer |
| `F7` / `Shift` `F7`      | Toggle designer and code view  |
| `F4`                     | Properties                     |

{.shortcuts}

### Windows and display

| Shortcut                    | Action                          |
| --------------------------- | ------------------------------- |
| `Shift` `Alt` `Enter`       | Toggle full screen              |
| `Ctrl` `dblclick` on window | Toggle last dock/float location |
| `Ctrl` `Alt` `1-9`          | Switch saved window layout      |
| `Shift` `ESC`               | Close active tool window        |
| `Ctrl` `Alt` `L`            | Activate Solution Explorer      |
| `Ctrl` `+` `,` `C`          | Activate GitHub Copilot Chat    |
| `Ctrl` `+` `E`              | Activate Error List             |
| `Alt` `O`                   | Activate Output window          |
| `ESC`                       | Set focus on editor             |

{.shortcuts}

### Git

| Shortcut          | Action                |
| ----------------- | --------------------- |
| `Alt` `G` `C`     | Git Changes window    |
| `Alt` `G` `M`     | Git Repository window |
| `Ctrl` `Alt` `F3` | Branch picker         |
| `Ctrl` `Alt` `F4` | Repository picker     |
| `Ctrl` `E` `C`    | Git actions menu      |
| `Enter`           | Commit                |

{.shortcuts}

### Unit testing

| Shortcut         | Action            |
| ---------------- | ----------------- |
| `Ctrl` `\` `T`   | Test Explorer     |
| `Ctrl` `R` `A`   | Run all tests     |
| `Ctrl` `R` `T`   | Repeat last run   |
| `Ctrl` `R` `L`   | Run unit failure  |
| `Ctrl` `R` `F`   | Run failed tests  |
| `Ctrl` `R` `U`   | Run not run tests |
| `Ctrl` `R` `Del` | Clear all results |

{.shortcuts}

## Also see

- [Visual Studio — Keyboard Shortcuts (Windows, Official PDF)][pdf-windows]
- [Microsoft Learn — Default Keyboard Shortcuts (Windows)][learn-windows]

[pdf-windows]: https://visualstudio.microsoft.com/keyboard-shortcuts.pdf
[learn-windows]: https://learn.microsoft.com/en-us/visualstudio/ide/default-keyboard-shortcuts-in-visual-studio?view=vs-2022
