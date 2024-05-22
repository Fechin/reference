---
title: PhpStorm
date: 2022-11-23 16:23:31.703719
background: bg-gradient-to-r from-[#be4fe9] to-[#715bef] hover:from-emerald-400 hover:to-blue-500
label:
tags:
  - jetbrains
categories:
  - Keyboard Shortcuts
intro: |
  A visual cheat-sheet for the 96 keyboard shortcuts found in JetBrains PhpStorm
---

## Keyboard Shortcuts

### Editing {.row-span-4}

| Shortcut                   | Action                                            |
| -------------------------- | ------------------------------------------------- |
| `Ctrl` `Space`             | Basic code completion                             |
| `Alt` `Enter`              | Show intention actions and quick-fixes            |
| `Ctrl` `P`                 | Parameter info (within method call arguments)     |
| `Ctrl` `Q`                 | Quick documentation lookup                        |
| `Ctrl` `(mouse over code)` | Brief Info                                        |
| `Alt` `Insert`             | Generate code... (Getters, Setters, Constructors) |
| `Ctrl` `O`                 | Override methods                                  |
| `Ctrl` `I`                 | Implement methods                                 |
| `Ctrl` `Alt` `T`           | Surround with...(if..else, try..catch, for, etc.) |
| `Ctrl` `/`                 | Comment/uncomment with line comment               |
| `Ctrl` `Shift` `/`         | Comment/uncomment with block comment              |
| `Ctrl` `W`                 | Select successively increasing code blocks        |
| `Ctrl` `Shift` `W`         | Decrease current selection to previous state      |
| `Ctrl` `Alt` `L`           | Reformat code                                     |
| `Ctrl` `Alt` `I`           | Auto-indent line(s)                               |
| `Ctrl` `D`                 | Duplicate current line or selected block          |
| `Ctrl` `Y`                 | Delete line at caret                              |
| `Ctrl` `Shift` `J`         | Smart line join (HTML and JavaScript only)        |
| `Ctrl` `Enter`             | Smart line split (HTML and JavaScript only)       |
| `Shift` `Enter`            | Start a new line                                  |
| `Ctrl` `Shift` `U`         | Toggle case for word at caret or selected block   |
| `Ctrl` `Shift` `[`         | Select till code block start                      |
| `Ctrl` `Shift` `]`         | Select till code block end                        |
| `Ctrl` `Delete`            | Delete to word end                                |
| `Ctrl` `Backspace`         | Delete to word start                              |
| `Ctrl` `+/-`               | Expand/collapse code block                        |
| `Ctrl` `F4`                | Close active editor tab                           |
| `Ctrl` `Shift` `V`         | Paste from history                                |

{.shortcuts}

### Debugging

| Shortcut            | Action              |
| ------------------- | ------------------- |
| `F8`                | Step over           |
| `F7`                | Step into           |
| `Shift` `F8`        | Step out            |
| `Alt` `F8`          | Evaluate expression |
| `F9`                | Resume program      |
| `Ctrl` `F8`         | Toggle breakpoint   |
| `Ctrl` `Shift` `F8` | View breakpoints    |

{.shortcuts}

### Running

| Shortcut             | Action                                |
| -------------------- | ------------------------------------- |
| `Shift` `F10`        | Run                                   |
| `Shift` `F9`         | Debug                                 |
| `Ctrl` `Shift` `F10` | Run context configuration from editor |
| `Ctrl` `Shift` `X`   | Run command line                      |

{.shortcuts}

### Search/Replace

| Shortcut             | Action               |
| -------------------- | -------------------- |
| `Ctrl` `F/R`         | Find/Replace         |
| `F3`                 | Find next            |
| `Shift` `F3`         | Find previous        |
| `Ctrl` `Shift` `F/R` | Find/Replace in path |

{.shortcuts}

### Usage Search

| Shortcut            | Action                   |
| ------------------- | ------------------------ |
| `Alt` `F7`          | Find usages              |
| `Ctrl` `F7`         | Find usages in file      |
| `Ctrl` `Shift` `F7` | Highlight usages in file |
| `Ctrl` `Alt` `F7`   | Show usages              |

{.shortcuts}

### Navigation {.row-span-2}

| Shortcut                   | Action                                    |
| -------------------------- | ----------------------------------------- |
| `Ctrl` `N`                 | Go to class                               |
| `Ctrl` `Shift` `N`         | Go to file                                |
| `Ctrl` `Shift` `Alt` `N`   | Go to symbol                              |
| `Ctrl` `G`                 | Go to line                                |
| `Alt` `Left/Right`         | Go to next/previous editor tab            |
| `Esc`                      | Go to editor (from tool window)           |
| `Ctrl` `E`                 | Recent files popup                        |
| `Ctrl` `Alt` `Left/Right`  | Navigate back/forward                     |
| `Ctrl` `Shift` `Backspace` | Navigate to last edit location            |
| `Alt` `F1`                 | Select current file or symbol in any view |
| `Ctrl` `B`                 | Go to declaration                         |
| `Ctrl` `Alt` `B`           | Go to implementation(s)                   |
| `Ctrl` `Shift` `I`         | Open quick definition lookup              |
| `Ctrl` `Shift` `B`         | Go to type declaration                    |
| `Ctrl` `U`                 | Go to super-method/super-class            |
| `Alt` `Up/Down`            | Go to previous/next method                |
| `Ctrl` `]/[`               | Move to code block end/start              |
| `F2`                       | Next highlighted error                    |
| `Shift` `F2`               | Previous highlighted error                |
| `F4`                       | Edit/view source                          |

{.shortcuts}

### Refactoring

| Shortcut                 | Action                                           |
| ------------------------ | ------------------------------------------------ |
| `F5/F6`                  | Copy/Move                                        |
| `Alt` `Delete`           | Safe delete                                      |
| `Shift` `F6`             | Rename                                           |
| `Ctrl` `Alt` `N`         | Inline variable                                  |
| `Ctrl` `Alt` `M/V/F/C`   | Extract Method/Variable/Field/Constant           |
| `Ctrl` `Alt` `Shift` `T` | Refactor This (shows all available refactorings) |

{.shortcuts}

### VCS/Local History

| Shortcut              | Action                  |
| --------------------- | ----------------------- |
| `Alt` <code>\`</code> | VCS quick popup         |
| `Ctrl` `K`            | Commit project to VCS   |
| `Ctrl` `T`            | Update project from VCS |
| `Alt` `Shift` `C`     | View recent changes     |

{.shortcuts}

### General

| Shortcut             | Action                                    |
| -------------------- | ----------------------------------------- |
| `Shift x2`           | Search everywhere                         |
| `Ctrl` `Shift` `A`   | Find Action                               |
| `Alt` `1-9`          | Open corresponding tool window            |
| `Ctrl` `Alt` `F11`   | Toggle full screen mode                   |
| `Ctrl` `Shift` `F12` | Toggle maximizing editor                  |
| `Alt` `Shift` `F`    | Add to Favorites                          |
| `Alt` `Shift` `I`    | Inspect current file with current profile |
| `Ctrl` `Alt` `S`     | Open Settings dialog                      |
| `Ctrl` `Tab`         | Switch between tabs and tool window       |

{.shortcuts}

### Live Templates/Snippets

| Shortcut   | Action                                         |
| ---------- | ---------------------------------------------- |
| `Ctrl` `J` | Insert Live Template                           |
| `eco`      | 'echo' statement                               |
| `fore`     | foreach(iterable_expr as $value) {...}         |
| `forek`    | foreach(iterable_expr as $key => $value) {...} |
| `inc/inco` | 'include'/'include_once' statement             |
| `prif`     | private function                               |
| `prof`     | protected function                             |
| `pubf`     | public function                                |
| `rqr/rqro` | 'require'/'require_once' statement             |

{.shortcuts}

### Misc

| Shortcut           | Action      |
| ------------------ | ----------- |
| `Ctrl` `Shift` `A` | Find Action |

{.shortcuts}

## Also see

- [Keyboard shortcuts for PhpStorm](https://resources.jetbrains.com/storage/products/phpstorm/docs/PhpStorm_ReferenceCard.pdf)
  _(resources.jetbrains.com)_
