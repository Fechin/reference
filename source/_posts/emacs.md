---
title: Emacs
date: 2020-12-17 16:21:49
background: bg-[#7752a9]
tags:
  - editor
  - text
  - shortcut
categories:
  - Toolkit
intro: |
  [Emacs](https://www.gnu.org/software/emacs) is the extensible, customizable, self-documenting real time display text editor.
  This reference was made for Emacs 27.
plugins:
  - copyCode
---

## Getting started

### Starting Emacs

To enter Emacs, just type its name:

```shell
$ emacs
```

---

| -           | -                      |
| ----------- | :--------------------- |
| `C-z`       | Suspend Emacs          |
| `C-x` `C-c` | Exit Emacs permanently |

{.shortcuts}

### Global Description {.secondary}

| -         | -                                           |
| --------- | :------------------------------------------ |
| `C-<key>` | Means hold the control, and press `<key>`   |
| `M-<key>` | Means press the Esc once, and press `<key>` |

{.shortcuts}

NOTICE: This cheatsheet follows the above rules.

### Motion {.row-span-2}

| Backward  | Forward   | Entity to move over            |
| --------- | --------- | :----------------------------- |
| `C-b`     | `C-f`     | Haracter                       |
| `M-b`     | `M-f`     | Word                           |
| `C-p`     | `C-n`     | Line                           |
| `C-a`     | `C-e`     | Line beginning<br/>_(or end)_  |
| `M-a`     | `M-e`     | Sentence                       |
| `M-{`     | `M-}`     | Paragraph                      |
| `C-x` `[` | `C-x` `]` | Page                           |
| `C-M-b`   | `C-M-f`   | Sexp                           |
| `C-M-a`   | `C-M-e`   | Function                       |
| `M-<`     | `M->`     | Buffer beginning<br>_(or end)_ |

{.shortcuts .show-header}

### Case Change

| -           | -                |
| ----------- | :--------------- |
| `M-u`       | Uppercase word   |
| `M-l`       | Lowercase word   |
| `M-c`       | Capitalize word  |
| `C-x` `C-u` | Uppercase region |
| `C-x` `C-l` | Lowercase region |

{.shortcuts}

### Files

| -           | -                                                |
| ----------- | :----------------------------------------------- |
| `C-x` `C-f` | Read a file into Emacs                           |
| `C-x` `C-s` | Save a file back to disk                         |
| `C-x` `s`   | Save all files                                   |
| `C-x` `i`   | Insert contents of another file into this buffer |
| `C-x` `C-v` | Replace this file with your file                 |
| `C-x` `C-w` | Write buffer to a specified file                 |
| `C-x` `C-q` | Toggle read-only status of buffer                |

{.shortcuts}

### Error Recovery

| -                           | -                                          |
| --------------------------- | :----------------------------------------- |
| `C-g`                       | Abort partially typed or executing command |
| `M-x` recover-session       | Recover files lost by a system crash       |
| `C-x` `u`<br>`C-_`<br>`C-/` | Undo an unwanted change                    |
| `M-x` revert-buffer         | Restore a buffer to its original contents  |
| `C-l`                       | Redraw garbaged screen                     |

{.shortcuts}

### Transposing {.row-span-2}

| -           | -                    |
| ----------- | :------------------- |
| `C-t`       | Transpose characters |
| `M-t`       | Transpose words      |
| `C-x` `C-t` | Transpose lines      |
| `C-M-t`     | Transpose sexps      |

{.shortcuts .table-fixed}

#### Scroll

| -         | -                                              |
| --------- | :--------------------------------------------- |
| `C-v`     | Scroll to next screen                          |
| `M-v`     | Scroll to previous screen                      |
| `C-x` `<` | Scroll left                                    |
| `C-x` `>` | Scroll right                                   |
| `C-l`     | Scroll current line to <br>center, top, bottom |

{.shortcuts .table-fixed}

#### Goto

| -         | -                   |
| --------- | :------------------ |
| `M-g` `g` | Goto line           |
| `M-g` `c` | Goto char           |
| `M-m`     | Back to indentation |

{.shortcuts .table-fixed}

### Marking

| -                 | -                       |
| ----------------- | :---------------------- |
| `C-@`<br/>`C-SPC` | Uet mark here           |
| `C-x` `C-x`       | Exchange point and mark |
| `M-@`             | Set mark arg words away |
| `M-h`             | Mark paragraph          |
| `C-x` `C-p`       | Mark page               |
| `C-M-@`           | Mark sexp               |
| `C-M-h`           | Mark function           |
| `C-x` `h`         | Mark entire buffer      |

{.shortcuts}

### Killing and Deleting {.row-span-2}

| Backward      | Forward | Entity to kill           |
| ------------- | ------- | :----------------------- |
| `DEL`         | `C-d`   | Character <br>_(delete)_ |
| `M-DEL`       | `M-d`   | Word                     |
| `M-0` `C-k`   | `C-k`   | Line <br/> _(to end of)_ |
| `C-x` `DEL`   | `M-k`   | Sentence                 |
| `M--` `C-M-k` | `C-M-k` | Sexp                     |

{.shortcuts .show-header}

#### Killing

| -          | -                                    |
| ---------- | :----------------------------------- |
| `C-W`      | Kill region C-w                      |
| `M-w`      | Copy region to kill ring             |
| `M-z` char | Kill through next occurrence of char |
| `C-y`      | Yank back last thing killed          |
| `M-y`      | Replace last yank with previous kill |

{.shortcuts}

### Getting Help

| -         | -                                        |
| --------- | :--------------------------------------- |
| `C-x` `1` | Remove help window                       |
| `C-M-v`   | Scroll help window                       |
| `C-h` `a` | Apropos: show commands matching a string |
| `C-h` `k` | Describe the function a key runs         |
| `C-h` `f` | Describe a function                      |
| `C-h` `m` | Get mode-specific information            |

{.shortcuts}

The help system is simple. Type `C-h` (or `F1`) and follow the directions. If you are a first-time user, type `C-h` `t`
for a tutorial.

### Multiple Windows {.col-span-2}

When two commands are shown, the second is a similar command for a frame instead of a window.

| -               | -               | -                                   |
| --------------- | --------------- | :---------------------------------- |
| `C-x` `5` `1`   | `C-x` `1`       | Delete all other windows            |
| `C-x` `5` `2`   | `C-x` `2`       | Split window, above and below       |
| `C-x` `5` `0`   | `C-x` `0`       | Delete this window                  |
| `C-x` `3`       |                 | Split window, side by side          |
| `C-M-v`         |                 | Scroll other window                 |
| `C-x` `5` `o`   | `C-x` `o`       | Switch cursor to another window     |
| `C-x` `5` `b`   | `C-x` `4` `b`   | Select buffer in other window       |
| `C-x` `5` `C-o` | `C-x` `4` `C-o` | Display buffer in other window      |
| `C-x` `5` `f`   | `C-x` `4` `f`   | Find file in other window           |
| `C-x` `5` `r`   | `C-x` `4` `r`   | Find file read-only in other window |
| `C-x` `5` `d`   | `C-x` `4` `d`   | Run Dired in other window           |
| `C-x` `5` `.`   | `C-x` `4` `.`   | Find tag in other window            |
| `C-x` `^`       |                 | Grow window taller                  |
| `C-x` `{`       |                 | Shrink window narrower              |
| `C-x` `}`       |                 | Grow window wider                   |

{.shortcuts}

### Formatting

| -           | -                                        |
| ----------- | :--------------------------------------- |
| `TAB`       | Indent current line (mode-dependent)     |
| `C-M-\`     | Indent region (mode-dependent)           |
| `C-M-q`     | Indent sexp (mode-dependent)             |
| `C-x` `TAB` | Indent region rigidly arg columns        |
| `M-;`       | Indent for comment                       |
| `C-o`       | Insert newline after point               |
| `C-M-o`     | Move rest of line vertically down        |
| `C-x` `C-o` | Delete blank lines around point          |
| `M-^`       | Join line with previous (with arg, next) |
| `M-\`       | Delete all white space around point      |
| `M-SPC`     | Put exactly one space at point           |
| `M-q`       | Fill paragraph                           |
| `C-x` `f`   | Set fill column to arg                   |
| `C-x` `.`   | Set prefix each line starts with         |
| `M-o`       | Set face                                 |

{.shortcuts}

### Info {.row-span-2}

| -         | -                                           |
| --------- | :------------------------------------------ |
| `C-h` `i` | Enter the Info documentation reader         |
| `C-h` `S` | Find specified function or variable in Info |

{.shortcuts .table-fixed}

#### Moving within a node

| -     | -                 |
| ----- | :---------------- |
| `SPC` | Scroll forward    |
| `DEL` | Scroll reverse    |
| `b`   | Beginning of node |

{.shortcuts .table-fixed}

#### Moving between nodes

| -   | -                                      |
| --- | :------------------------------------- |
| `n` | Next node                              |
| `p` | Previous node                          |
| `u` | Move up                                |
| `m` | Select menu item by name               |
| `n` | Select nth menu item by number (1–9)   |
| `f` | Follow cross reference (return with l) |
| `l` | Return to last node you saw            |
| `d` | Return to directory node               |
| `t` | Go to top node of Info file            |
| `g` | Go to any node by name                 |

{.shortcuts .table-fixed}

#### Other

| -   | -                                |
| --- | :------------------------------- |
| `h` | Run Info tutorial                |
| `i` | Look up a subject in the indices |
| `s` | Search nodes for regexp          |
| `q` | Quit Info                        |

{.shortcuts .table-fixed}

### Minibuffer

The following keys are defined in the minibuffer.

| -     | -                                       |
| ----- | :-------------------------------------- |
| `TAB` | Complete as much as possible            |
| `SPC` | Complete up to one word                 |
| `RET` | Complete and execute                    |
| `?`   | Show possible completions               |
| `M-p` | Fetch previous minibuffer input         |
| `M-n` | Fetch later minibuffer input or default |
| `M-r` | Regexp search backward through history  |
| `M-s` | Regexp search forward through history   |
| `C-g` | Abort command                           |

{.shortcuts}

Type `C-x` `ESC` `ESC` to edit and repeat the last command that used the minibuffer. Type `F10` to activate menu bar
items on text terminals.

### Tags

| -                        | -                                          |
| ------------------------ | :----------------------------------------- |
| `M-.`                    | Find a tag (a definition)                  |
| `C-u` `M-.`              | Find next occurrence of tag                |
| `M-x` visit-tags-table   | Specify a new tags file                    |
| `M-x` tags-search        | Regexp search on all files in tags table   |
| `M-x` tags-query-replace | Run query-replace on all the files         |
| `M-,`                    | Continue last tags search or query-replace |

{.shortcuts}

### Rectangles

| -             | -                                   |
| ------------- | :---------------------------------- |
| `C-x` `r` `r` | Copy rectangle to register          |
| `C-x` `r` `k` | Kill rectangle                      |
| `C-x` `r` `y` | Yank rectangle                      |
| `C-x` `r` `o` | Open rectangle, shifting text right |
| `C-x` `r` `c` | Blank out rectangle                 |
| `C-x` `r` `t` | Prefix each line with a string      |

{.shortcuts}

### Keyboard Macros

| -                         | -                                   |
| ------------------------- | :---------------------------------- |
| `C-x` `(`                 | Start defining a keyboard macro     |
| `C-x` `)`                 | End keyboard macro definition       |
| `C-x` `e`                 | Execute last-defined keyboard macro |
| `C-u` `C-x` `(`           | Append to last keyboard macro       |
| `M-x` name-last-kbd-macro | Name last keyboard macro            |
| `M-x` insert-kbd-macro    | Insert Lisp definition in buffer    |

{.shortcuts}

### Buffers

| -           | -                     |
| ----------- | :-------------------- |
| `C-x` `b`   | Select another buffer |
| `C-x` `C-b` | List all buffers      |
| `C-x` `k`   | Kill a buffer         |

{.shortcuts}

## Emacs Search

### Regex (common) {.row-span-2}

| -             | -                                            |
| ------------- | :------------------------------------------- |
| `.` `(dot)`   | Any single character except a newline        |
| `*`           | Zero or more repeats                         |
| `+`           | One or more repeats                          |
| `?`           | Zero or one repeat                           |
| `\`           | Quote special characters                     |
| `\c`          | Quote regular expression special character c |
| `\|`          | Alternative (“or”)                           |
| `\(...\)`     | Grouping                                     |
| `\(:?...\)`   | Shy grouping                                 |
| `\(:NUM...\)` | Explicit numbered grouping                   |
| `\n`          | Same text as nth group                       |
| `\b`          | At word break                                |
| `\B`          | Not at word break                            |

### Regex (entry)

| Start | End   | Entity |
| ----- | ----- | :----- |
| `^`   | `$`   | Line   |
| `\<`  | `\>`  | Word   |
| `\_<` | `\_>` | Symbol |
| `\‘`  | `\’`  | Buffer |

{.show-header}

### Regex (conflict)

| These   | Others   | class                     |
| ------- | -------- | :------------------------ |
| `[...]` | `[^...]` | Explicit set              |
| `\w`    | `\W`     | Word-syntax character     |
| `\sc`   | `\Sc`    | Character with syntax c   |
| `\cc`   | `\Cc`    | Character with category c |

{.show-header}

### Incremental Search

| -       | -                                 |
| ------- | :-------------------------------- |
| `C-s`   | Search forward                    |
| `C-r`   | Search backward                   |
| `C-M-s` | Regular expression search         |
| `C-M-r` | Reverse regular expression search |
| `M-p`   | Select previous search string     |
| `M-n`   | Select next later search string   |
| `RET`   | Exit incremental search           |
| `DEL`   | Undo effect of last character     |
| `C-g`   | Abort current search              |

{.shortcuts}

Use `C-s` or `C-r` again to repeat the search in either direction. If Emacs is still searching, `C-g` cancels only the
part not matched.

### Query Replace

| -            | -                                    |
| ------------ | :----------------------------------- |
| `M-%`        | Interactively replace a text string  |
| `M-x` regexp | Using regular expressions            |
| `SPC` / `y`  | Replace this one, go on to next      |
| `,`          | Replace this one, don’t move         |
| `DEL` / `n`  | Skip to next without replacing       |
| `!`          | Replace all remaining matches        |
| `^`          | Back up to the previous match        |
| `RET`        | Exit query-replace                   |
| `C-r`        | Enter recursive edit (C-M-c to exit) |

{.shortcuts}

## Misc

### Shells

| -           | -                                      |
| ----------- | :------------------------------------- |
| `M-!`       | Execute a shell command                |
| `M-&`       | Execute a shell command asynchronously |
| `M-`        | Run a shell command on the region      |
| `C-u` `M-`  | Filter region through a shell command  |
| `M-x` shell | Start a shell in window shell          |

{.shortcuts}

### International Character Sets {.col-span-2}

| -                          | -                                  |
| -------------------------- | :--------------------------------- |
| `C-x` `RET` `l`            | specify principal language         |
| `M-x` list-input-methods   | show all input methods             |
| `C-\`                      | enable or disable input method     |
| `C-x` `RET` `c`            | set coding system for next command |
| `M-x` list-coding-systems  | show all coding systems            |
| `M-x` prefer-coding-system | choose preferred coding system     |

{.shortcuts}

### Registers

| -               | -                                    |
| --------------- | :----------------------------------- |
| `C-x` `r` `s`   | Save region in register              |
| `C-x` `r` `i`   | Insert register contents into buffer |
| `C-x` `r` `SPC` | Save value of point in register      |
| `C-x` `r` `j`   | Jump to point saved in register      |

{.shortcuts}

### Miscellaneous

| -          | -                 |
| ---------- | :---------------- |
| `C-u` num  | Numeric argument  |
| `M--`      | Negative argument |
| `C-q` char | Quoted insert     |

{.shortcuts}

### Commands Dealing with Emacs Lisp

| -                  | -                                  |
| ------------------ | :--------------------------------- |
| `C-x` `C-e`        | Eval sexp before point             |
| `C-M-x`            | Eval current defun                 |
| `M-x` eval-region  | Eval region                        |
| `M-:`              | Read and eval minibuffer           |
| `M-x` load-library | Load a Lisp library from load-path |

{.shortcuts}

### Simple Customization

| -                 | -                             |
| ----------------- | :---------------------------- |
| `M-x` `customize` | customize variables and faces |

Making global key bindings in Emacs Lisp:

```{.wrap}
(global-set-key (kbd "C-c g") ’search-forward)
(global-set-key (kbd "M-#") ’query-replace-regexp)
```

### Abbrevs

| -                 | -                                        |
| ----------------- | :--------------------------------------- |
| `C-x` `a` `g`     | Add global abbrev                        |
| `C-x` `a` `l`     | Add mode-local abbrev                    |
| `C-x` `a` `i` `g` | Add global expansion for this abbrev     |
| `C-x` `a` `i` `l` | Add mode-local expansion for this abbrev |
| `C-x` `a` `e`     | Explicitly expand abbrev                 |
| `M-/`             | Expand previous word dynamically         |

{.shortcuts}

### Spelling Check

| -                   | -                                     |
| ------------------- | :------------------------------------ |
| `M-$`               | Check spelling of current word        |
| `M-x` ispell-region | Check spelling of all words in region |
| `M-x` ispell-buffer | Check spelling of entire buffer       |
| `M-x` flyspell-mode | Toggle on-the-fly spell checking      |

{.shortcuts}

### Writing Commands {.col-span-2}

#### Syntax

```lisp
(defun command-name (args)
"documentation" (interactive "template")
body)
```

#### Example

```lisp
(defun this-line-to-top-of-window (line)
    "Reposition current line to top of window.
With prefix argument LINE, put point on LINE."
    (interactive "P")
    (recenter (if (null line)
                  0
              (prefix-numeric-value line))))
```

The interactive spec says how to read arguments interactively. Type `C-h` `f` interactive `RET` for more details.
