---
title: VSCode
date: 2021-12-16 13:41:00
icon: icon-vscode
background: bg-[#5ba3e6]
tags:
    - text
    - editor
    - shortcut
categories:
    - Toolkit
intro: |
    This VSCode (Visual Studio Code) quick reference cheat sheet shows its keyboard shortcuts and commands.
---


## Windows {.cols-3}


### General

| -                           | -                      |
|-----------------------------|------------------------|
| `Ctrl` `Shift` `P` _/_ `F1` | Show Command Palette   |
| `Ctrl` `P`                  | Quick Open, Go to File |
| `Ctrl` `Shift` `N`          | New window             |
| `Ctrl` `Shift` `W`          | Close window           |
| `Ctrl` `,`                  | User Settings          |
| `Ctrl` `K` `Ctrl` `S`       | Keyboard Shortcuts     |
{.shortcuts}


### Basic editing {.row-span-2}

| -                         | -                                  |
|---------------------------|------------------------------------|
| `Ctrl` `X`                | Cut line                           |
| `Ctrl` `C`                | Copy line                          |
| `Alt` `↑` _/_ `↓`         | Move line up/down                  |
| `Shift` `Alt` `↓` _/_ `↑` | Copy line up/down                  |
| `Ctrl` `Shift` `K`        | Delete line                        |
| `Ctrl` `Enter`            | Insert line below                  |
| `Ctrl` `Shift` `Enter`    | Insert line above                  |
| `Ctrl` `Shift` `\`        | Jump to matching bracket           |
| `Ctrl` `]` _/_ `[`        | Indent/outdent line                |
| `Home` _/_ `End`          | Go to beginning/end of line        |
| `Ctrl` `Home`             | Go to beginning of file            |
| `Ctrl` `End`              | Go to end of file                  |
| `Ctrl` `↑` _/_ `↓`        | Scroll line up/down                |
| `Alt` `PgUp` _/_ `PgDn`   | Scroll page up/down                |
| `Ctrl` `Shift` `[`        | Fold (collapse) region             |
| `Ctrl` `Shift` `]`        | Unfold (uncollapse) region         |
| `Ctrl` `K` `Ctrl` `[`     | Fold (collapse) all subregions     |
| `Ctrl` `K` `Ctrl` `]`     | Unfold (uncollapse) all subregions |
| `Ctrl` `K` `Ctrl` `0`     | Fold (collapse) all regions        |
| `Ctrl` `K` `Ctrl` `J`     | Unfold (uncollapse) all regions    |
| `Ctrl` `K` `Ctrl` `C`     | Add line comment                   |
| `Ctrl` `K` `Ctrl` `U`     | Remove line comment                |
| `Ctrl` `/`                | Toggle line comment                |
| `Shift` `Alt` `A`         | Toggle block comment               |
| `Alt` `Z`                 | Toggle word wrap                   |
{.shortcuts}


### Navigation

| -                    | -                             |
|----------------------|-------------------------------|
| `Ctrl` `T`           | Show all Symbols              |
| `Ctrl` `G`           | Go to Line                    |
| `Ctrl` `P`           | Go to File                    |
| `Ctrl` `Shift` `O`   | Go to Symbol                  |
| `Ctrl` `Shift` `M`   | Show Problems panel           |
| `F8`                 | Go to the next error          |
| `Shift` `F8`         | Go to previous error          |
| `Ctrl` `Shift` `Tab` | Navigate editor group history |
| `Alt` ` ←` _/_ `→`   | Go back / forward             |
| `Ctrl` `M`           | Toggle Tab moves the focus    |
{.shortcuts}


### Search and replace

| -                         | -                                          |
|---------------------------|--------------------------------------------|
| `Ctrl` `F`                | Find                                       |
| `Ctrl` `H`                | Replace                                    |
| `F3` _/_ `Shift` `F3`     | Find next/previous                         |
| `Alt` `Enter`             | Select all occurrences of Find match       |
| `Ctrl` `D`                | Add selection to next Find match           |
| `Ctrl` `K` `Ctrl` `D`     | Move last selection to next Find match     |
| `Alt` `C` _/_ `R` _/_ `W` | Toggle case-sensitive / regex / whole word |
{.shortcuts}


### Multi-cursor and selection

| -                                      | -                                               |
|----------------------------------------|-------------------------------------------------|
| `Alt` `Click`                          | Insert cursor                                   |
| `Ctrl` `Alt` `↑` _/_ `↓`               | Insert cursor above / below                     |
| `Ctrl` `U`                             | Undo last cursor operation                      |
| `Shift` `Alt` `I`                      | Insert cursor at end of each line selected      |
| `Ctrl` `I`                             | Select current line                             |
| `Ctrl` `Shift` `L`                     | Select all occurrences of the current selection |
| `Ctrl` `F2`                            | Select all occurrences of the current word      |
| `Shift` `Alt` `→`                      | Expand selection                                |
| `Shift` `Alt` `←`                      | Shrink selection                                |
| `Shift` `Alt` `<Drag>`                 | Column (box) selection                          |
| `Ctrl` `Shift` `Alt` `<Arrow>`         | Column (box) selection                          |
| `Ctrl` `Shift` `Alt` `PgUp` _/_ `PgDn` | Column (box) selection page up/down             |
{.shortcuts}


### Rich languages editing

| -                           | -                           |
|-----------------------------|-----------------------------|
| `Ctrl` `<Space>` `Ctrl` `I` | Trigger suggestion          |
| `Ctrl` `Shift` `<Space>`    | Trigger parameter hints     |
| `Shift` `Alt` `F`           | Format document             |
| `Ctrl` `K` `Ctrl` `F`       | Format selection            |
| `F12`                       | Go to Definition            |
| `Alt` `F12`                 | Peek Definition             |
| `Ctrl` `K` `F12`            | Open Definition to the side |
| `Ctrl` `.`                  | Quick Fix                   |
| `Shift` `F12`               | Show References             |
| `F2`                        | Rename Symbol               |
| `Ctrl` `K` `Ctrl` `X`       | Trim trailing whitespace    |
| `Ctrl` `K` `M`              | Change file language        |
{.shortcuts}


### Editor management

| -                                | -                                       |
|----------------------------------|-----------------------------------------|
| `Ctrl` `F4` `Ctrl` `W`           | Close editor                            |
| `Ctrl` `K` `F`                   | Close folder                            |
| `Ctrl` `\`                       | Split editor                            |
| `Ctrl` ` 1` _/_ `2` _/_ `3`      | Focus into 1st, 2nd or 3rd editor group |
| `Ctrl` `K` `Ctrl` `←` _/_ `→`    | Focus into previous/next editor group   |
| `Ctrl` `Shift` `PgUp` _/_ `PgDn` | Move editor left/right                  |
| `Ctrl` `K` `←` _/_ `→`           | Move active editor group                |
{.shortcuts}


### File management

| -                     | -                                         |
|-----------------------|-------------------------------------------|
| `Ctrl` `N`            | New File                                  |
| `Ctrl` `O`            | Open File                                 |
| `Ctrl` `S`            | Save                                      |
| `Ctrl` `Shift` `S`    | Save                                      |
| `Ctrl` `K` `S`        | Save All                                  |
| `Ctrl` `F4`           | Close                                     |
| `Ctrl` `K` `Ctrl` `W` | Close All                                 |
| `Ctrl` `Shift` `T`    | Reopen closed editor                      |
| `Ctrl` `K` `Enter`    | Keep preview mode editor open             |
| `Ctrl` `Tab`          | Open next                                 |
| `Ctrl` `Shift` `Tab`  | Open previous                             |
| `Ctrl` `K` `P`        | Copy path of an active file               |
| `Ctrl` `K` `R`        | Reveal active file in Explorer            |
| `Ctrl` `K` `O`        | Show active file in a new window/instance |
{.shortcuts}


### Display

| -                  | -                                          |
|--------------------|--------------------------------------------|
| `F11`              | Toggle full screen                         |
| `Shift` `Alt` `0`  | Toggle editor layout (horizontal/vertical) |
| `Ctrl` `=` _/_ `-` | Zoom in/out                                |
| `Ctrl` `B`         | Toggle Sidebar visibility                  |
| `Ctrl` `Shift` `E` | Show Explorer / Toggle focus               |
| `Ctrl` `Shift` `F` | Show Search                                |
| `Ctrl` `Shift` `G` | Show Source Control                        |
| `Ctrl` `Shift` `D` | Show Debug                                 |
| `Ctrl` `Shift` `X` | Show Extensions                            |
| `Ctrl` `Shift` `H` | Replace in files                           |
| `Ctrl` `Shift` `J` | Toggle Search details                      |
| `Ctrl` `Shift` `U` | Show Output panel                          |
| `Ctrl` `Shift` `V` | Open Markdown preview                      |
| `Ctrl` `K` `V`     | Open Markdown preview to the side          |
| `Ctrl` `K` `Z`     | Zen Mode (Esc Esc to exit)                 |
{.shortcuts}


### Debug

| -                              | -                             |
|--------------------------------|-------------------------------|
| `F9`                           | Toggle breakpoint             |
| `F5`                           | Start/Continue                |
| `Shift` `F5`                   | Stop                          |
| `Shift` `F11` _/_ `F11`        | Step into/out                 |
| `F10`                          | Step over                     |
| `Ctrl` `K` `Ctrl` `I`          | Show hover                    |
| `Ctrl` <code>\`</code>         | Show integrated terminal      |
| `Ctrl` `Shift` <code>\`</code> | Create a new terminal         |
| `Ctrl` `C`                     | Copy selection                |
| `Ctrl` `V`                     | Paste into an active terminal |
| `Ctrl` `↑` _/_ `↓`             | Scroll up/down                |
| `Shift` `PgUp` _/_ `PgDn`      | Scroll page up/down           |
| `Ctrl` `Home` _/_ `End`        | Scroll to the top/bottom      |
{.shortcuts}