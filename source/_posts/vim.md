---
title: Vim
date: 2020-11-25 18:28:43
background: bg-[#46933f]
tags:
  - vi
  - text
  - editor
  - terminal
  - shortcut
categories:
  - Toolkit
intro: |
  A useful collection of [Vim](http://www.vim.org/) 8.2 quick reference cheat sheets to help you learn vim editor faster.
plugins:
  - copyCode
---

## Getting Started

### Motion Diagrams {.row-span-2}

```bash
▼/▶ Cursor   ▽/▷ Target
```

#### Left-right motions

```bash
┌───────────── |
├───────────── 0      $ ──────────────┐
│  ┌────────── ^      fe ────────┐    │
│  │  ┌─────── Fo     te ───────┐│    │
│  │  │┌────── To     30| ───┐  ││    │
│  │  ││ ┌──── ge     w ───┐ │  ││    │
│  │  ││ │ ┌── b      e ─┐ │ │  ││    │
│  │  ││ │ │  ┌h      l┐ │ │ │  ││    │
▽  ▽  ▽▽ ▽ ▽  ▽▼      ▼▽ ▽ ▽ ▽  ▽▽    ▽
   echo "A cheatsheet from quickref.me"
```

#### Up-down motions

```bash
                 - SCREEN 1 START
   ┌─┬─────────▷ #!/usr/bin/python
   │ │     ┌───▷
   │ │     │     print("Hello")
   │ │     { } ▶ print("Vim")
   │ │       │   print("!")
   │ │       └─▷
   │ │ ┌───┬───▷ print("Welcome")
G gg H M L k j ▶ print("to")
│        │   └─▷ print("cheatsheets.zip")
│        │       print("/vim")
│        │
│        └─────▷
│                - SCREEN 1 END
└──────────────▷ print("SCREEN 2")
```

### Motions {.row-span-2}

| Shortcut                       | Description       |
| ------------------------------ | :---------------- |
| `h` _\|_ `j` _\|_ `k` _\|_ `l` | Arrow keys        |
| `<C-u>` _/_ `<C-d>`            | Half-page up/down |
| `<C-b>` _/_ `<C-f>`            | Page up/down      |

{.shortcuts}

#### Words{.left-text}

| Shortcut     | Description               |
| ------------ | :------------------------ |
| `b` _/_ `w`  | Previous/Next word        |
| `ge` _/_ `e` | Previous/Next end of word |

{.shortcuts}

#### Line

| Shortcut             | Description                 |
| -------------------- | :-------------------------- |
| `0` _(zero)_ _/_ `$` | Start/End of line           |
| `^`                  | Start of line _(non-blank)_ |

{.shortcuts}

#### Character

| Shortcut                            | Description                         |
| ----------------------------------- | :---------------------------------- |
| `Fe` _/_ `fe`                       | Move to previous/next `e`           |
| `To` _/_ `to`                       | Move before/after previous/next `o` |
| <code>\|</code>_/_ <code>n\|</code> | Go to first/`n`th column            |

{.shortcuts}

#### Document

| Shortcut       | Description              |
| -------------- | :----------------------- |
| `gg` _/_ `G`   | First/Last line          |
| `:n` _\|_ `nG` | Go to line `n`           |
| `}` _/_ `{`    | Next/Previous empty line |

{.shortcuts}

#### Window

| Shortcut               | Description                 |
| ---------------------- | :-------------------------- |
| `H` _/_ `M` _/_ `L`    | Top/Middle/Bottom screen    |
| `zt` _/_ `zz` _/_ `zb` | Top/Center/Bottom this line |

{.shortcuts}

### Insert Mode

| Shortcut               | Description                   |
| ---------------------- | :---------------------------- |
| `i` _/_ `a`            | Insert before/after cursor    |
| `I` _/_ `A`            | Insert start/end of line      |
| `o` _/_ `O` _(letter)_ | Insert new line below/above   |
| `s` _/_ `S`            | Delete char/line and insert   |
| `C` _/_ `cc`           | Change to end of/current line |
| `gi`                   | Insert at last insert point   |
| `Esc` _\|_ `<C-[>`     | Exit insert mode              |

{.shortcuts}

### Saving and Exiting

| Shortcut                  | Description             |
| ------------------------- | :---------------------- |
| `:w`                      | Save                    |
| `:q`                      | Close file              |
| `:wq` _\|_ `:x` _\|_ `ZZ` | Save and quit           |
| `:wqa`                    | Save and quit all files |
| `:q!` _\|_ `ZQ`           | Force quit              |
| `:qa`                     | Close all files         |
| `:qa!`                    | Force quit all files    |
| `:w` now.txt              | Write to `now.txt`      |
| `:sav` new.txt            | Save and edit `new.txt` |
| `:w` !sudo tee %          | Write to readonly file  |

{.shortcuts}

### Normal Mode

| Shortcut              | Description                  |
| --------------------- | :--------------------------- |
| `r`                   | Replace one character        |
| `R`                   | Enter Replace mode           |
| `u` _/_ `3u`          | Undo changes `1` / `3` times |
| `U`                   | Undo changes on one line     |
| `J`                   | Join with next line          |
| `<C-r>` _/_ 5 `<C-r>` | Redo changes `1` / `5` times |

{.shortcuts}

### Cut and paste {.row-span-2}

| Shortcut         | Description                   |
| ---------------- | :---------------------------- |
| `x`              | Delete character _(Cut)_      |
| `p` _/_ `P`      | Paste after/before            |
| `xp`             | Swap two characters           |
| `D`              | Delete to end of line _(Cut)_ |
| `dw`             | Delete word _(Cut)_           |
| `dd`             | Delete line _(Cut)_           |
| `ddp`            | Swap two lines                |
| `yy`             | Yank line _(Copy)_            |
| `"*p` _\|_ `"+p` | Paste from system clipboard   |
| `"*y` _\|_ `"+y` | Paste to system clipboard     |

{.shortcuts}

#### In visual mode

| Shortcut     | Description              |
| ------------ | :----------------------- |
| `d` _\|_ `x` | Delete selection _(Cut)_ |
| `s`          | Replace selection        |
| `y`          | Yank selection _(Copy)_  |

{.shortcuts}

### Repeating

| Shortcut | Description                                 |
| -------- | :------------------------------------------ |
| `.`      | Repeat last command                         |
| `;`      | Repeat latest `f`, `t`, `F` or `T`          |
| `,`      | Repeat latest `f`, `t`, `F` or `T` reversed |
| `&`      | Repeat last `:s`                            |
| `@:`     | Repeat a command-line command               |

{.shortcuts}

### Visual mode

| Shortcut    | Description             |
| ----------- | :---------------------- |
| `v`         | Enter visual mode       |
| `V`         | Enter visual line mode  |
| `<C-v>`     | Enter visual block mode |
| `ggVG`      | Select all text         |
| `>` _/_ `<` | Shift text right/left   |

{.shortcuts}

### Macros

| -     | -                     |
| ----- | :-------------------- |
| `qi`  | Record macro `i`      |
| `q`   | Stop recording macro  |
| `@i`  | Run macro `i`         |
| `7@i` | Run macro `i` 7 times |
| `@@`  | Repeat last macro     |

{.shortcuts}

You can save macro for any letters not just `i`

## Vim Operators

### Usage {.secondary}

| Shortcut | Description  |
| -------- | :----------- |
| `d`      | <yel>w</yel> |
| Operator | Motion       |

Combine [operators](#available-operators) with [motions](#motions) to use them

### Available Operators {.row-span-2}

| Shortcut | Description                     |
| -------- | :------------------------------ |
| `d`      | Delete                          |
| `y`      | Yank _(copy)_                   |
| `c`      | Change _(delete then insert)_   |
| `p`      | Paste                           |
| `=`      | Formats code                    |
| `g~`     | Toggle case                     |
| `gU`     | Uppercase                       |
| `gu`     | Lowercase                       |
| `>`      | Indent right                    |
| `<`      | Indent left                     |
| `!`      | Filter through external program |

### Examples {.row-span-2}

| Combination          | Description                           |
| -------------------- | :------------------------------------ |
| `d`<yel>d</yel>      | Delete current line                   |
| `d`<yel>j</yel>      | Delete two lines                      |
| `d`<yel>w</yel>      | Delete to next word                   |
| `d`<yel>b</yel>      | Delete to beginning of word           |
| `d`<yel>fa</yel>     | Delete until `a` char                 |
| `d`<yel>/hello</yel> | Delete until `hello`                  |
| `c`<yel>c</yel>      | Change current line, synonym with `S` |
| `y`<yel>y</yel>      | Copy current line                     |
| `>`<yel>j</yel>      | Indent 2 lines                        |
| gg`d`<yel>G</yel>    | Delete a complete document            |
| gg`=`<yel>G</yel>    | Indent a complete document            |
| gg`y`<yel>G</yel>    | Copy a whole document                 |

{.show-header}

### Counts

```
[count] <operator> <motion>
<operator> [count] <motion>
```

---

| Combination      | Description                |
| ---------------- | :------------------------- |
| 2`d`<yel>d</yel> | Delete `2` lines           |
| 6`y`<yel>y</yel> | Copy `6` lines             |
| `d`3<yel>w</yel> | Delete `3` words           |
| `d`5<yel>j</yel> | Delete `5` lines downwards |
| `>`4<yel>k</yel> | Indent `4` lines upwards   |

## Vim Text objects

### Usage {.secondary}

<!-- Confusing and should be fixed -->

| Shortcut |              Description               | -            |
| -------- | :------------------------------------: | :----------- |
| `v`      |     <pur>i</pur> _/_ <pur>a</pur>      | <yel>p</yel> |
| Operator | <pur>i</pur>nner _/_ <pur>a</pur>round | Text object  |

Operate with an [operator](#available-operators) inner or around text blocks

### Text objects {.row-span-2}

| Shortcut                                             | Description                            |
| ---------------------------------------------------- | :------------------------------------- |
| <yel>p</yel>                                         | Paragraph                              |
| <yel>w</yel>                                         | Word                                   |
| <yel>W</yel>                                         | WORD <br/>_(surrounded by whitespace)_ |
| <yel>s</yel>                                         | Sentence                               |
| <yel>[</yel> <yel>(</yel> <yel>{</yel> <yel>\<</yel> | A [], (), or {} block                  |
| <yel>]</yel> <yel>)</yel> <yel>}</yel> <yel>\></yel> | A [], (), or {} block                  |
| <yel>'</yel> <yel>"</yel> <yel>\`</yel>              | A quoted string                        |
| <yel>b</yel>                                         | A block [(                             |
| <yel>B</yel>                                         | A block in [{                          |
| <yel>t</yel>                                         | A HTML tag block                       |

See `:help text-objects`

### Delete

| Shortcut                    | Description                           |
| --------------------------- | :------------------------------------ |
| `d`<pur>i</pur><yel>w</yel> | Delete inner word                     |
| `d`<pur>i</pur><yel>s</yel> | Delete inner sentence                 |
| `d`<pur>i</pur><yel>"</yel> | Delete in quotes                      |
| `d`<pur>a</pur><yel>"</yel> | Delete in quotes _(including quotes)_ |
| `d`<pur>i</pur><yel>p</yel> | Delete a paragraph                    |

### Selections

| Shortcut                                            | Description                               |
| --------------------------------------------------- | :---------------------------------------- |
| `v`<pur>i</pur><yel>"</yel>                         | Select inner quotes "`...`{.underline}"   |
| `v`<pur>a</pur><yel>"</yel>                         | Select quotes `"..."`{.underline}         |
| `v`<pur>i</pur><yel>[</yel>                         | Select inner brackets [`...`{.underline}] |
| `v`<pur>a</pur><yel>[</yel>                         | Select brackets `[...]`{.underline}       |
| `v`<pur>i</pur><yel>w</yel>                         | Select inner word                         |
| `v`<pur>i</pur><yel>p</yel>                         | Select inner paragraph                    |
| `v`<pur>i</pur><yel>p</yel><pur>i</pur><yel>p</yel> | Select more paragraph                     |

### Misc

| Shortcut                    | Description                          |
| --------------------------- | :----------------------------------- |
| `c`<pur>i</pur><yel>w</yel> | Change inner word                    |
| `c`<pur>i</pur><yel>"</yel> | Change inner quotes                  |
| `c`<pur>i</pur><yel>t</yel> | Change inner tags (HTML)             |
| `c`<pur>i</pur><yel>p</yel> | Change inner paragraph               |
| `y`<pur>i</pur><yel>p</yel> | Yank inner paragraph                 |
| `y`<pur>a</pur><yel>p</yel> | Yank paragraph _(including newline)_ |

## Vim Multiple files

### Buffers

| -          | -                                |
| ---------- | :------------------------------- |
| `:e file`  | Edit a file in a new buffer      |
| `:bn`      | Go to the next buffer            |
| `:bp`      | Go to the previous buffer        |
| `:bd`      | Remove file from buffer list     |
| `:b 5`     | Open buffer #5                   |
| `:b file`  | Go to a buffer by file           |
| `:ls`      | List all open buffers            |
| `:sp file` | Open and split window            |
| `:vs file` | Open and vertically split window |
| `:hid`     | Hide this buffer                 |
| `:wn`      | Write file and move to next      |
| `:tab ba`  | Edit all buffers as tabs         |

### Windows

| -                       | -                           |
| ----------------------- | :-------------------------- |
| `<C-w>` `s`             | Split window                |
| `<C-w>` `v`             | Split window vertically     |
| `<C-w>` `w`             | Switch windows              |
| `<C-w>` `q`             | Quit a window               |
| `<C-w>` `T`             | Break out into a new tab    |
| `<C-w>` `x`             | Swap current with next      |
| `<C-w>` `-` _/_ `+`     | Decrease/Increase height    |
| `<C-w>` `<` _/_ `>`     | Decrease/Increase width     |
| `<C-w>` <code>\|</code> | Max out the width           |
| `<C-w>` `_`	  	  | Max out the height          |
| `<C-w>` `=`             | Equally high and wide       |
| `<C-w>` `h` _/_ `l`     | Go to the left/right window |
| `<C-w>` `j` _/_ `k`     | Go to the up/down window    |

{.shortcuts}

### Tabs

| Shortcut       | Description                       |
| -------------- | :-------------------------------- |
| `:tabe [file]` | <yel>E</yel>dit file in a new tab |
| `:tabf [file]` | Open if exists in new tab         |
| `:tabc`        | <yel>C</yel>lose current tab      |
| `:tabo`        | Close <yel>o</yel>ther tabs       |
| `:tabs`        | List all <yel>tabs</yel>          |
| `:tabr`        | Go to fi<yel>r</yel>st tab        |
| `:tabl`        | Go to <yel>l</yel>ast tab         |
| `:tabm 0`      | <yel>M</yel>ove to position `0`   |
| `:tabn`        | Go to <yel>n</yel>ext tab         |
| `:tabp`        | Go to <yel>p</yel>revious tab     |

#### Normal mode

| Shortcut | Description                   |
| -------- | :---------------------------- |
| `gt`     | Go to <yel>n</yel>ext tab     |
| `gT`     | Go to <yel>p</yel>revious tab |
| `2gt`    | Go to tab number `2`          |

{.shortcuts}

## Vim Search and Replace

### Search

| -        | -                                   |
| -------- | :---------------------------------- |
| `/foo`   | Search forward                      |
| `/foo\c` | Search forward _(case insensitive)_ |
| `?foo`   | Search backward                     |
| `/\v\d+` | Search with [regex](/regex)         |
| `n`      | Next matching search pattern        |
| `N`      | Previous match                      |
| `*`      | Search for current word forward     |
| `#`      | Search for current word backward    |

{.shortcuts}

### Replace LINE

```vim
:[range]s/{pattern}/{str}/[flags]
```

---

|                   |                                  |
| ----------------- | :------------------------------- |
| `:s/old/new`      | Replace first                    |
| `:s/old/new/g`    | Replace all                      |
| `:s/\vold/new/g`  | Replace all with [regex](/regex) |
| `:s/old/new/gc`   | replace all _(Confirm)_          |
| `:s/old/new/i`    | Ignore case replace first        |
| `:2,6s/old/new/g` | Replace between lines `2`-`6`    |

### Replace FILE

```vim
:%s/{pattern}/{str}/[flags]
```

---

|                   |                                  |
| ----------------- | :------------------------------- |
| `:%s/old/new`     | Replace first                    |
| `:%s/old/new/g`   | Replace all                      |
| `:%s/old/new/gc`  | Replace all _(Confirm)_          |
| `:%s/old/new/gi`  | Replace all _(ignore case)_      |
| `:%s/\vold/new/g` | Replace all with [regex](/regex) |

### Ranges {.row-span-2}

| -       | -                 |
| ------- | :---------------- |
| `%`     | Entire file       |
| `’<,’>` | Current selection |
| `5`     | Line `5`          |
| `5,10`  | Lines `5` to `10` |
| `$`     | Last line         |
| `2,$`   | Lines `2` to Last |
| `.`     | Current line      |
| `,3`    | Next `3` lines    |
| `-3,`   | Forward `3` lines |

### Global command {.row-span-2}

```vim
:[range]g/{pattern}/[command]
```

---

|              |                                    |
| ------------ | :--------------------------------- |
| `:g/foo/d`   | Delete lines containing `foo`      |
| `:g!/foo/d`  | Delete lines not containing `foo`  |
| `:g/^\s*$/d` | Delete all blank lines             |
| `:g/foo/t$`  | Copy lines containing `foo` to EOF |
| `:g/foo/m$`  | Move lines containing `foo` to EOF |
| `:g/^/m0`    | Reverse a file                     |
| `:g/^/t.`    | Duplicate every line               |

### Inverse :g

```vim
:[range]v/{pattern}/[command]
```

---

|            |                                                            |
| ---------- | :--------------------------------------------------------- |
| `:v/foo/d` | Delete lines not containing `foo`<br/>_(also `:g!/foo/d`)_ |

### Flags

| -   | -                         |
| --- | :------------------------ |
| `g` | Replace all occurrences   |
| `i` | Ignore case               |
| `I` | Don't ignore case         |
| `c` | Confirm each substitution |

### Substitute expression (magic)

| -             | -                                |
| ------------- | :------------------------------- |
| `&` _\|_ `\0` | Replace with the whole matched   |
| `\1`...`\9`   | Replace with the group 0-9       |
| `\u`          | Uppercase next letter            |
| `\U`          | Uppercase following characters   |
| `\l`          | Lowercase next letter            |
| `\L`          | Lowercase following characters   |
| `\e`          | End of `\u`, `\U`, `\l` and `\L` |
| `\E`          | End of `\u`, `\U`, `\l` and `\L` |

### Examples {.col-span-2}

```c {.wrap}
:s/a\|b/xxx\0xxx/g		         # Modifies "a b"      to "xxxaxxx xxxbxxx"
:s/test/\U& file/                # Modifies "test"     to "TEST FILE"
:s/\(test\)/\U\1\e file/         # Modifies "test"     to "TEST file"
:s/\v([abc])([efg])/\2\1/g	     # Modifies "af fa bg" to "fa fa gb"
:s/\v\w+/\u\0/g		             # Modifies "bla bla"  to "Bla Bla"
:s/\v([ab])|([cd])/\1x/g         # Modifies "a b c d"  to "ax bx x x"
:%s/.*/\L&/                      # Modifies "HTML"     to "html"
:s/\v<(.)(\w*)/\u\1\L\2/g        # Make every first letter of a word uppercase
:%s/^\(.*\)\n\1/\1/              # Remove duplicate lines
:%s/<\/\=\(\w\+\)\>/\U&/g        # Convert HTML-Tags to uppercase
:g/^pattern/s/$/mytext           # Find and append text to the end
:g/pattern/norm! @i              # Run a macro on matching lines
/^\(.*\)\(\r\?\n\1\)\+$          # View the duplicates lines
/\v^(.*)(\r?\n\1)+$              # View the duplicates lines (very magic)
:v/./,/./-j                      # Compress blank lines into a blank line
:g/<p1>/,/<p2>/d                 # Delete inclusively from <p1> to <p2>
```

## Vimdiff

### Usage {.secondary}

```shell script

$ vimdiff file1 file2 [file3]
$ vim -d file1 file2 [file3]
```

### Editing {.row-span-2}

```
:[range]diffget [bufspec]
:[range]diffput [bufspec]
```

---

| Shortcut            | Description             |
| ------------------- | :---------------------- |
| `do` _/_ `:diffget` | Obtain (get) difference |
| `dp` _/_ `:diffput` | Put difference          |
| `:dif`              | Re-scan differences     |
| `:diffo`            | Switch off diff mode    |
| `:1,$+1diffget`     | Get all differences     |
| `ZQ`                | Quit without changes    |

{.shortcuts}

See: [Ranges](#ranges)

### Folds {.row-span-2}

| Shortcut      | Description                  |
| ------------- | :--------------------------- |
| `zo` _/_ `zO` | Open                         |
| `zc` _/_ `zC` | Close                        |
| `za` _/_ `zA` | Toggle                       |
| `zv`          | Open folds for this line     |
| `zM`          | Close all                    |
| `zR`          | Open all                     |
| `zm`          | Fold more _(foldlevel += 1)_ |
| `zr`          | Fold less _(foldlevel -= 1)_ |
| `zx`          | Update folds                 |

{.shortcuts}

### Jumping

<br>

| Shortcut | Description         |
| -------- | :------------------ |
| `]c`     | Next difference     |
| `[c`     | Previous difference |

{.shortcuts}

## Miscellaneous

### Case {.row-span-2}

| Shortcut       | Description             |
| -------------- | :---------------------- |
| `vU`           | _Uppercase_ character   |
| `vu`           | _Lowercase_ character   |
| `~`            | _Toggle case_ character |
| `viw` `U`      | _Uppercase_ word        |
| `viw` `u`      | _Lowercase_ word        |
| `viw` `~`      | _Toggle case_ word      |
| `VU` _/_ `gUU` | _Uppercase_ line        |
| `Vu` _/_ `guu` | _Lowercase_ line        |
| `V~` _/_ `g~~` | _Toggle case_ line      |
| `gggUG`        | _Uppercase_ all text    |
| `ggguG`        | _Lowercase_ all text    |
| `ggg~G`        | _Toggle case_ all text  |

{.shortcuts}

### Jumping

| Shortcut | Description              |
| -------- | :----------------------- |
| `<C-o>`  | Go back to previous      |
| `<C-i>`  | Go forward               |
| `gf`     | Go to file in cursor     |
| `ga`     | Display hex, ascii value |

{.shortcuts}

### Misc command-lines {.row-span-2}

| -              | -                                          |
| -------------- | :----------------------------------------- |
| `:h`           | Help open help view                        |
| `:edit!`       | Reload current file                        |
| `:2,8m0`       | Move lines `2`-`8` to `0`                  |
| `:noh`         | Clear search highlights                    |
| `:sort`        | Sort lines                                 |
| `:ter`         | Open a terminal window                     |
| `:set paste`   | Enable Insert Paste sub-mode               |
| `:set nopaste` | disable Insert Paste sub-mode              |
| `:cq`          | Exiting with an error<br/>_(aborting Git)_ |

### Navigating

| Shortcut       | Description               |
| -------------- | :------------------------ |
| `%`            | Nearest/matching `{[()]}` |
| `[(` _\|_ `[{` | Previous `(` or `{`       |
| `])` _\|_ `]{` | Next `)` or `}`           |
| `[m`           | Previous method start     |
| `[M`           | Previous method end       |

{.shortcuts}

### Counters

| Shortcut | Description     |
| -------- | :-------------- |
| `<C-a>`  | Increase number |
| `<C-x>`  | Decrease number |

{.shortcuts}

### Tags {.row-span-2 .col-span-2}

| Shortcut             | Description                                     |
| -------------------- | :---------------------------------------------- |
| `:tag Classname`     | Jump to first definition of Classname           |
| `<C-]>`              | Jump to definition                              |
| `g]`                 | See all definitions                             |
| `<C-t>`              | Go back to last tag                             |
| `<C-o> <C-i>`        | Back/forward                                    |
| `:tselect Classname` | Find definitions of Classname                   |
| `:tjump Classname`   | Find definitions of Classname (auto-select 1st) |

{.shortcuts}

### Formatting

| -       | -                                |
| ------- | -------------------------------- |
| `:ce 8` | Center lines between `8` columns |
| `:ri 4` | Right-align lines at `4` columns |
| `:le`   | Left-align lines                 |

See `:help formatting`

### Marks {.col-span-2 .row-span-4}

| Shortcut            | Description                                          |
| ------------------- | :--------------------------------------------------- |
| <code>\`^</code>    | Last position of cursor in insert mode               |
| <code>\`.</code>    | Last change in current buffer                        |
| <code>\`"</code>    | Last exited current buffer                           |
| <code>\`0</code>    | In last file edited                                  |
| <code>''</code>     | Back to line in current buffer where jumped from     |
| <code>\`\`</code>   | Back to position in current buffer where jumped from |
| <code>\`[</code>    | To beginning of previously changed or yanked text    |
| <code>\`]</code>    | To end of previously changed or yanked text          |
| <code>\`&lt;</code> | To beginning of last visual selection                |
| <code>\`&gt;</code> | To end of last visual selection                      |
| `ma`                | Mark this cursor position as `a`                     |
| <code>\`a</code>    | Jump to the cursor position `a`                      |
| `'a`                | Jump to the beginning of the line with position `a`  |
| <code>d'a</code>    | Delete from current line to line of mark `a`         |
| <code>d\`a</code>   | Delete from current position to position of mark `a` |
| <code>c'a</code>    | Change text from current line to line of `a`         |
| <code>y\`a</code>   | Yank text from current position to position of `a`   |
| `:marks`            | List all current marks                               |
| `:delm a`           | Delete mark `a`                                      |
| `:delm a-d`         | Delete marks `a`, `b`, `c`, `d`                      |
| `:delm abc`         | Delete marks `a`, `b`, `c`                           |

{.shortcuts}

### Calculator

| Shortcut         | Description      |
| ---------------- | :--------------- |
| `<C-r>` `=` 7\*7 | Shows the result |
| `<C-r>` `=` 10/2 | Shows the result |

{.shortcuts}

Do this in INSERT mode

### Shell

| -            | -                              |
| ------------ | :----------------------------- |
| `:!<shell>`  | Interpret Shell Command        |
| `:r!<shell>` | Read in output of shell        |
| `:r!date`    | Insert date                    |
| `:!!date`    | Replace current line with date |

### Command line

| Shortcut     | Description                               |
| ------------ | :---------------------------------------- |
| `<C-r><C-w>` | Insert current word into the command line |
| `<C-r>"`     | Paste from " register                     |
| `<C-x><C-f>` | Auto-completion of path in insert mode    |

{.shortcuts}

### Tricks

Remove duplicate lines

```shell script
:sort | %!uniq -u
```

To number the lines in the file

```shell script
:%!cat -n
```

Copy whole doc to clipboard

```shell script
:%w !pbcopy            # Mac OS X
:%w !xclip -i -sel c   # GNU/Linux
:%w !xsel -i -b        # GNU/Linux
```

## Also see

- [Devhints](https://devhints.io/vim) _(devhints.io)_
- [Vim cheatsheet](https://vim.rtorr.com/) _(vim.rotrr.com)_
- [Vim documentation](http://vimdoc.sourceforge.net/htmldoc/) _(vimdoc.sourceforge.net)_
- [Interactive Vim tutorial](http://openvim.com/) _(openvim.com)_
