---
title: Vim
date: 2020-11-25 18:28:43
icon: icon-vim
background: bg-green-600
tags: 
    - vi
    - editor
    - terminal
    - text
categories:
    - Toolkit
intro: |
 [Vim](http://www.vim.org/) is a very efficient text editor. This quick reference cheat sheet was made for Vim 8.0.   
---

Getting started {.cols-3}
---------------

### Visualization

```bash
▼/▶ Cursor   ▽/▷ Target
```
---
```bash
┌───────────── 0      
│  ┌────────── ^      $ ──────────────┐
│  │  ┌─────── Fo     fe ────────┐    │
│  │  │┌────── To     te ───────┐│    │
│  │  ││ ┌──── ge     w ───┐    ││    │
│  │  ││ │ ┌── b      e ─┐ │    ││    │ 
│  │  ││ │ │  ┌h      l┐ │ │    ││    │
▽  ▽  ▽▽ ▽ ▽  ▽▼      ▼▽ ▽ ▽    ▽▽    ▽
   echo "A cheatsheet from quickref.me"
```
---
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
│        │   └─▷ print("quickref.me")
│        │       print("/vim")
│        │     
│        └─────▷ 
│                - SCREEN 1 END
└──────────────▷ print("SCREEN 2")
``` 

### Navigating {.row-span-3}

| Shortcut            | Description        |
| ---                 | ---                |
| `h` `j` `k` `l`     | Arrow keys         |
| `<C-U>` _\|_ `<C-D>` | Half-page up/down |
| `<C-B>` _\|_ `<C-F>` | Page up/down      |
{.shortcuts}

#### Words

| Shortcut     | Description               |
| ---          | ---                       |
| `b` _\|_ `w`  | Previous/next word        |
| `ge` _\|_ `e` | Previous/next end of word |
{.shortcuts}

#### Line

| Shortcut     | Description                        |
| ---          | ---                                |
| `0` _(zero)_ | Start of line                      |
| `^`          | Start of line _(after whitespace)_ |
| `$`          | End of line                        |
{.shortcuts}

#### Character

| Shortcut | Description    |
| ---      | ---            |
| `fe`  | Go forward to character `e`  |
| `Fo`  | Go backward to character `o` |
{.shortcuts}

#### Document

| Shortcut | Description    |
| ---      | ---            |
| `gg`     | First line     |
| `G`      | Last line      |
| `:n`     | Go to line `n` |
| `nG`     | Go to line `n` |
{.shortcuts}

#### Window

| Shortcut | Description              |
| ---      | ---                      |
| `zz`     | Center this line         |
| `zt`     | Top this line            |
| `zb`     | Bottom this line         |
| `H`      | Move to top of screen    |
| `M`      | Move to middle of screen |
| `L`      | Move to bottom of screen |
{.shortcuts}

#### Search

| Shortcut  | Description                         |
| ---       | ---                                 |
| `n`       | Next matching search pattern        |
| `N`       | Previous match                      |
| `*`       | Next whole word under cursor        |
| `#`       | Previous whole word under cursor    |
{.shortcuts}

#### Tab pages

| Shortcut              | Description                     |
| ---                   | ---                             |
| `:tabedit [file]`     | Edit file in a new tab          |
| `:tabfind [file]`     | Open file if exists in new tab  |
| `:tabclose`           | Close current tab               |
| `:tabs`               | List all tabs                   | 
| `:tabfirst`           | Go to first tab                 |
| `:tablast`            | Go to last tab                  |
| `:tabn    `           | Go to next tab                  |
| `:tabp    `           | Go to previous tab              |


### Editing

| Shortcut | Description                         |
| ---      | ---                                 |
| `a`      | Append                              |
| `A`      | Append from end of line             |
| `i`      | Insert                              |
| `o`      | Next line                           |
| `O`      | Previous line                       |

| `s`      | Delete char and insert              |
| `S`      | Delete line and insert              |
| `C`      | Delete until end of line and insert |

| `r`      | Replace one character               |
| `R`      | Enter Replace mode                  |

| `u`      | Undo changes                        |
| `<C-R>`  | Redo changes                        |
{.shortcuts}


### Exiting

| Shortcut       | Description                      |
| -------------- | -------------------------------- |
| `:qa`          | Close all files                  |
| `:qa!`         | Close all files, abandon changes |

| `:w`           | Save                             |
| `:wq` _\|_ `:x` | Save and close file              |

| `:q`           | Close file                       |
| `:q!`          | Close file, abandon changes      |

| `ZZ`           | Save and quit                    |
| `ZQ`           | Quit without checking changes    |
{.shortcuts}


### Clipboard

| Shortcut        | Description                 |
| ---             | ---                         |
| `x`             | Delete character            |

| `dd`            | Delete line _(Cut)_         |
| `yy`            | Yank line _(Copy)_          |

| `p`             | Paste                       |
| `P`             | Paste before                |

| `"*p` _\|_ `"+p` | Paste from system clipboard |
| `"*y` _\|_ `"+y` | Paste to system clipboard   |
{.shortcuts}

### Visual mode

| Shortcut | Description             |
| ---      | ---                     |
| `v`      | Enter visual mode       |
| `V`      | Enter visual line mode  |
| `<C-V>`  | Enter visual block mode |
{.shortcuts}


#### In visual mode

| Shortcut    | Description             |
| ---         | ---                     |
| `d` _\|_ `x` | Delete selection        |
| `s`         | Replace selection       |
| `y`         | Yank selection _(Copy)_ |
{.shortcuts}


### Exiting insert mode

| Shortcut          | Description |
| ---               | ---         |
| `Esc` _\|_ `<C-[>` | Exit insert mode |
| `<C-C>`           | Exit insert mode, and abort current command |
{.shortcuts}

See [Operators](#operators) for other things you can do.







Operators {.cols-3}
---------

### Usage {.secondary}

Operators let you operate in a range of text (defined by *motion*). These are performed in normal mode.
| Shortcut | Description                     |
| ---      | ---                             |
| `d`      | `w`    |
| Operator | Motion |

### Operators list 

| Shortcut | Description                     |
| ---      | ---                             |
| `d`      | Delete                          |
| `y`      | Yank _(copy)_                   |
| `c`      | Change _(delete then insert)_   |

| `>`      | Indent right                    |
| `<`      | Indent left                     |
| `=`      | Autoindent                      |

| `g~`     | Swap case                       |
| `gU`     | Uppercase                       |
| `gu`     | Lowercase                       |

| `!`      | Filter through external program |
{.shortcuts}

See `:help operator`

### Examples

Combine operators with *motions* to use them.
{.setup}

| Shortcut               | Description                               |
| ---                    | ---                                       |
| `d`_d_                 | Delete current line |
| `d`_w_                 | Delete to next word                       |
| `d`_b_                 | Delete to beginning of word               |
| _2_`dd`                | Delete 2 lines                            |
| `d`_ip_                | Delete a text object _(inside paragraph)_ |
| `d`                    | Delete selection _(in visual mode)_       |

See `:help motion.txt`

Text objects {.cols-3}
------------

### Usage {.secondary}

Text objects let you operate (with an *operator*) in or around text blocks (*objects*).
{.setup}

| Shortcut               | Description          |
| -----------            | ---------            |
| `v`      | `i`                  | `p`         |
| Operator | [i]nside or [a]round | Text object |
{.css-breakdown}

### Text objects {.row-span-2}

| Shortcut               | Description           |
| ---                    | ---                   |
| `p`                    | Paragraph             |
| `w`                    | Word                  |
| `s`                    | Sentence              |

| `[` `(` `{` `<`        | A [], (), or {} block |
| `'` `"` <code>\`</code>     | A quoted string       |

| `b`                    | A block [(            |
| `B`                    | A block in [{         |
| `t`                    | A XML tag block       |
{.shortcuts}

### Examples {.row-span-2}

| Shortcut    | Description                        |
| ---         | ---                                |
| `vip`       | Select paragraph                   |
| `vipipipip` | Select more                        |

| `yip`       | Yank inner paragraph               |
| `yap`       | Yank paragraph (including newline) |

| `dip`       | Delete inner paragraph             |
| `cip`       | Change inner paragraph             |
{.shortcuts}

See [Operators](#operators) for other things you can do.

### Diff


```
vimdiff file1 file2 [file3]
```

See differences between files.
 

Misc {.cols-3}
----

### Folds {.row-span-3}

| Shortcut      | Description                  |
| ---           | ---                          |
| `zo` _\|_ `zO` | Open                         |
| `zc` _\|_ `zC` | Close                        |
| `za` _\|_ `zA` | Toggle                       |

| `zv`          | Open folds for this line     |

| `zM`          | Close all                    |
| `zR`          | Open all                     |

| `zm`          | Fold more _(foldlevel += 1)_ |
| `zr`          | Fold less _(foldlevel -= 1)_ |

| `zx`          | Update folds                 |
{.shortcuts}

Uppercase ones are recursive (eg, `zO` is open recursively).

### Navigation

| Shortcut            | Description                |
| ---                 | ---                        |
| `%`                 | Nearest/matching `{[()]}`  |
| `[(` `[{` `[<`      | Previous `(` or `{` or `<` |
| `])`                | Next                       |

| `[m`                | Previous method start      |
| `[M`                | Previous method end        |
{.shortcuts}


### Case

| Shortcut | Description                          |
| ---      | ---                                  |
| `~`      | Toggle case (Case => cASE)           |
| `gU`     | Uppercase                            |
| `gu`     | Lowercase                            |

| `gUU`    | Uppercase current line (also `gUgU`) |
| `guu`    | Lowercase current line (also `gugu`) |
{.shortcuts}

Do these in visual or normal mode.


### Counters

| Shortcut | Description      |
| ---      | ---              |
| `<C-A>`  | Increment number |
| `<C-X>`  | Decrement        |
{.shortcuts}

### Windows

| Shortcut              | Description                                     |
| ---                   | ---                                             |
| `z{height}<Cr>` | Resize pane to `{height}` lines tall |


### Text alignment {.row-span-1}

    :center [width]
    :right [width]
    :left

See `:help formatting`


### Calculator

| Shortcut      | Description                               |
| ---           | ---                                       |
| `<C-R>=128/2` | Shows the result of the division : '64'   |

Do this in insert mode.


### Tags {.row-span-2 .col-span-2}

| Shortcut              | Description                                     |
| ---                   | ---                                             |
| `:tag Classname`      | Jump to first definition of Classname           |

| `<C-]>`               | Jump to definition                              |
| `g]`                  | See all definitions                             |
| `<C-T>`               | Go back to last tag                             |
| `<C-O> <C-I>`         | Back/forward                                    |

| `:tselect Classname`  | Find definitions of Classname                   |
| `:tjump Classname`    | Find definitions of Classname (auto-select 1st) |
{.shortcuts}

### Exiting with an error

    :cq
    :cquit

Works like `:qa`, but throws an error. Great for aborting Git commands.


### Jumping

| Shortcut | Description                  |
| ---      | ---                          |
| `<C-O>`  | Go back to previous location |
| `<C-I>`  | Go forward                   |

| `gf`     | Go to file in cursor         |
{.shortcuts}

### Marks {.col-span-2 .row-span-2}

| Shortcut           | Description                                          |
| ---                | ---                                                  |
| <code>\`^</code>                | Last position of cursor in insert mode               |
| <code>\`.</code>    | Last change in current buffer                        |
| <code>\`"</code>    | Last exited current buffer                           |
| <code>\`0</code>    | In last file edited                                  |
| <code>''</code>    | Back to line in current buffer where jumped from     |
| <code>\`\`</code>    | Back to position in current buffer where jumped from |
| <code>\`[</code>    | To beginning of previously changed or yanked text    |
| <code>\`]</code>    | To end of previously changed or yanked text          |
| <code>\`&lt;</code> | To beginning of last visual selection                |
| <code>\`&gt;</code> | To end of last visual selection                      |

| `ma`               | Mark this cursor position as `a`                     |
| <code>\`a</code>    | Jump to the cursor position `a`                      |
| `'a`               | Jump to the beginning of the line with position `a`  |
| <code>d'a</code>   | Delete from current line to line of mark `a`         |
| <code>d\`a</code>   | Delete from current position to position of mark `a` |
| <code>c'a</code>   | Change text from current line to line of `a`         |
| <code>y\`a</code>   | Yank text from current position to position of `a`   |

| `:marks`           | List all current marks                               |
| `:delm a`          | Delete mark `a`                                      |
| `:delm a-d`        | Delete marks `a`, `b`, `c`, `d`                      |
| `:delm abc`        | Delete marks `a`, `b`, `c`                           |
{.shortcuts}

### Misc

| Shortcut   | Description                                       |
| ---        | ---                                               |
| `.`        | Repeat last command                               |
| `]p`       | Paste under the current indentation level         |

| `:set ff=unix` | Convert Windows line endings to Unix line endings |
{.shortcuts}

### Command line

| Shortcut     | Description                               |
| ---          | ---                                       |
| `<C-R><C-W>` | Insert current word into the command line |
| `<C-R>"`     | Paste from " register                     |
| `<C-X><C-F>` | Auto-completion of path in insert mode    |
{.shortcuts}



### Spell checking {.col-span-3}

| Shortcut                     | Description                                             |
| ---                          | ---                                                     |
| `:set spell spelllang=en_us` | Turn on US English spell checking                       |
| `]s`                         | Move to next misspelled word after the cursor           |
| `[s`                         | Move to previous misspelled word before the cursor      |
| `z=`                         | Suggest spellings for the word under/after the cursor   |
| `zg`                         | Add word to spell list                                  |
| `zw`                         | Mark word as bad/mispelling                             |
| `zu` / `C-X (Insert Mode)`   | Suggest words for bad word under cursor from spellfile  |
{.shortcuts}

See `:help spell`


Also see
--------

- [Devhints](https://devhints.io/vim) _(devhints.io)_
- [Vim cheatsheet](https://vim.rtorr.com/) _(vim.rotrr.com)_
- [Vim documentation](http://vimdoc.sourceforge.net/htmldoc/) _(vimdoc.sourceforge.net)_
- [Interactive Vim tutorial](http://openvim.com/) _(openvim.com)_
