---
title: IntelliJ IDEA
date: 2020-12-17 21:51:44
background:
  bg-gradient-to-r from-pink-500 via-violet-400 to-blue-400 hover:from-pink-700 hover:via-violet-600 hover:to-blue-500
tags:
  - jetbrains
  - java
  - shortcut
categories:
  - Keyboard Shortcuts
intro: |
  IntelliJ IDEA is a very good Java IDE, most of its commands have shortcuts to keep your hands from leaving the keyboard
---

## IDEA Windows & Linux Keymap

### Editing {.row-span-5}

| shortcut                   | description                                      |
| -------------------------- | :----------------------------------------------- |
| `Ctrl` `Space`             | Basic code completion                            |
| `Ctrl` `Shift` `Space`     | Smart code completion                            |
| `Ctrl` `Shift` `Enter`     | Complete statement                               |
| `Ctrl` `P`                 | Parameter info                                   |
| `Ctrl` `Q`                 | Quick documentation lookup                       |
| `Shift` `F1`               | External Doc                                     |
| `Ctrl` `hover`             | Brief Info                                       |
| `Ctrl` `F1`                | Error or warning at caret                        |
| `Alt` `Insert`             | Generate code                                    |
| `Ctrl` `O`                 | Override methods                                 |
| `Ctrl` `I`                 | Implement methods                                |
| `Ctrl` `Alt` `T`           | Surround with                                    |
| `Ctrl` `/`                 | Comment or uncomment line                        |
| `Ctrl` `Shift` `/`         | Comment or uncomment block                       |
| `Ctrl` `W`                 | Select successively increasing code blocks       |
| `Ctrl` `Shift` `W`         | Decrease current selection to previous state     |
| `Alt` `Q`                  | Context info                                     |
| `Alt` `Enter`              | Show intention actions and quick-fixes           |
| `Ctrl` `Alt` `L`           | Reformat code                                    |
| `Ctrl` `Alt` `O`           | Optimize imports                                 |
| `Ctrl` `Alt` `I`           | Auto-indent line(s)                              |
| `Tab`                      | Indent selected lines                            |
| `Shift` `Tab`              | Unindent selected lines                          |
| `Ctrl` `X`                 | Cut current line or selected block to clipboard  |
| `Ctrl` `C`                 | Copy current line or selected block to clipboard |
| `Ctrl` `V`                 | Paste from clipboard                             |
| `Ctrl` `Shift` `V`         | Paste from recent buffers                        |
| `Ctrl` `D`                 | Duplicate current line or selected block         |
| `Ctrl` `Y`                 | Delete line at caret                             |
| `Ctrl` `Shift` `J`         | Smart line join                                  |
| `Ctrl` `Enter`             | Smart line split                                 |
| `Shift` `Enter`            | Start new line                                   |
| `Ctrl` `Shift` `U`         | Toggle case for word at caret or selected block  |
| `Ctrl` `Shift` `]` _/_ `[` | Select till code block end/start                 |
| `Ctrl` `Backspace`         | Delete to word end/start                         |
| `Ctrl` `+` _/_ `-`         | Expand/collapse code block                       |
| `Ctrl` `Shift` `+`         | Expand all                                       |
| `Ctrl` `Shift` `-`         | Collapse all                                     |
| `Ctrl` `F4`                | Close active editor tab                          |

{.shortcuts}

### Usage Search

| shortcut                   | description                     |
| -------------------------- | :------------------------------ |
| `Alt` `F7` _/_ `Ctrl` `F7` | Find usages/Find usages in file |
| `Ctrl` `Shift` `F7`        | Highlight usages in file        |
| `Ctrl` `Alt` `F7`          | Show usages                     |

{.shortcuts}

### Navigation {.row-span-4}

| shortcut                        | description                               |
| ------------------------------- | :---------------------------------------- |
| `Ctrl` `N`                      | Go to class                               |
| `Ctrl` `Shift` `N`              | Go to file                                |
| `Ctrl` `Alt` `Shift` `N`        | Go to symbol                              |
| `Alt` `Right` _/_ `Left`        | Go to next / previous editor tab          |
| `F12`                           | Go back to previous tool window           |
| `Esc`                           | Go to editor                              |
| `Shift` `Esc`                   | Hide active or last active window         |
| `Ctrl` `Shift` `F4`             | Close active run, messages...             |
| `Ctrl` `G`                      | Go to line                                |
| `Ctrl` `E`                      | Recent files popup                        |
| `Ctrl` `Alt` `Left` _/_ `Right` | Navigate back / forward                   |
| `Ctrl` `Shift` `Backspace`      | Navigate to last edit location            |
| `Alt` `F1`                      | Select current file or symbol in any view |
| `Ctrl` `B` _/_ `Ctrl` `Click`   | Go to declaration                         |
| `Ctrl` `Alt` `B`                | Go to implementation(s)                   |
| `Ctrl` `Shift` `I`              | Open quick definition lookup              |
| `Ctrl` `Shift` `B`              | Go to type declaration                    |
| `Ctrl` `U`                      | Go to super-method / super-class          |
| `Alt` `Up` _/_ `Down`           | Go to previous / next method              |
| `Ctrl` `]/[`                    | Move to code block end/start              |
| `Ctrl` `F12`                    | File structure popup                      |
| `Ctrl` `H`                      | Type hierarchy                            |
| `Ctrl` `Shift` `H`              | Method hierarchy                          |
| `Ctrl` `Alt` `H`                | Call hierarchy                            |
| `F2` _/_ `Shift` `F2`           | Next/previous highlighted error           |
| `F4` _/_ `Ctrl` `Enter`         | Edit source / View source                 |
| `Alt` `Home`                    | Show navigation bar                       |
| `F11`                           | Toggle bookmark                           |
| `Ctrl` `F11`                    | Toggle bookmark with mnemonic             |
| `Ctrl` `0...9`                  | Go to numbered bookmark                   |
| `Shift` `F11`                   | Show bookmarks                            |

{.shortcuts}

### Search/Replace

| shortcut           | description               |
| ------------------ | :------------------------ |
| `Double Shift`     | Search everywhere         |
| `Ctrl` `F`         | Find                      |
| `F3` `Shift` `F3`  | Find next / Find previous |
| `Ctrl` `R`         | Replace                   |
| `Ctrl` `Shift` `F` | Find in path              |
| `Ctrl` `Shift` `R` | Replace in path           |

{.shortcuts}

### Live Templates

| shortcut         | description                                       |
| ---------------- | :------------------------------------------------ |
| `Ctrl` `Alt` `J` | Surround with Live Template                       |
| `Ctrl` `J`       | Insert Live Template                              |
| `iter`           | Iteration according to Java SDK 1.5 style         |
| `inst`           | Check object type with instanceof and downcast it |
| `itco`           | Iterate elements of java.util.Collection          |
| `itit`           | Iterate elements of java.util.Iterator            |
| `itli`           | Iterate elements of java.util.List                |
| `psf`            | public static final                               |
| `thr`            | throw new                                         |

{.shortcuts}

### Refactoring

| shortcut         | description       |
| ---------------- | :---------------- |
| `F5`             | Copy              |
| `F6`             | Move              |
| `Alt` `Delete`   | Safe Delete       |
| `Shift` `F6`     | Rename            |
| `Ctrl` `F6`      | Change Signature  |
| `Ctrl` `Alt` `N` | Inline            |
| `Ctrl` `Alt` `M` | Extract Method    |
| `Ctrl` `Alt` `V` | Extract Variable  |
| `Ctrl` `Alt` `F` | Extract Field     |
| `Ctrl` `Alt` `C` | Extract Constant  |
| `Ctrl` `Alt` `P` | Extract Parameter |

{.shortcuts}

### Debugging

| shortcut                      | description              |
| ----------------------------- | :----------------------- |
| `F8/F7`                       | Step over/Step into      |
| `Shift` `F7` _/_ `Shift` `F8` | Smart step into/Step out |
| `Alt` `F9`                    | Run to cursor            |
| `Alt` `F8`                    | Evaluate expression      |
| `F9`                          | Resume program           |
| `Ctrl` `F8`                   | Toggle breakpoint        |
| `Ctrl` `Shift` `F8`           | View breakpoints         |

{.shortcuts}

### Compile and Run

| shortcut                     | description                              |
| ---------------------------- | :--------------------------------------- |
| `Ctrl` `F9`                  | Make project                             |
| `Ctrl` `Shift` `F9`          | Compile selected file, package or module |
| `Alt` `Shift` `F10` _/_ `F9` | Select configuration and run/and debug   |
| `Shift` `F10` _/_ `F9`       | Run/Debug                                |
| `Ctrl` `Shift` `F10`         | Run context configuration from editor    |

{.shortcuts}

### VCS/Local History

| shortcut            | description           |
| ------------------- | :-------------------- |
| `Ctrl` `K`          | Commit project to VCS |
| `Ctrl` `T`          | Update from VCS       |
| `Alt` `Shift` `C`   | View recent changes   |
| `Alt` <kbd>\`</kbd> | VCS Operations Popup  |

{.shortcuts}

### General

| shortcut                 | description                    |
| ------------------------ | :----------------------------- |
| `Alt` `0...9`            | Open corresponding tool window |
| `Ctrl` `S`               | Save all                       |
| `Ctrl` `Alt` `Y`         | Synchronize                    |
| `Ctrl` `Shift` `F12`     | Toggle maximizing editor       |
| `Alt` `Shift` `F`        | Add to Favorites               |
| `Alt` `Shift` `I`        | Inspect current file           |
| `Ctrl` <kbd>\`</kbd>     | Quick switch current scheme    |
| `Ctrl` `Alt` `S`         | Open Settings dialog           |
| `Ctrl` `Alt` `Shift` `S` | Open Project Structure dialog  |
| `Ctrl` `Shift` `A`       | Find Action                    |
| `Ctrl` `Tab`             | Switch between tool and tabs   |

{.shortcuts}
