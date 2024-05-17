---
title: INI
date: 2022-12-30 09:51:44
background: bg-[#6d94c7]
tags:
categories:
  - Programming
intro: |
  This is a quick reference cheat sheet for understanding and writing INI-format configuration files.
plugins:
  - copyCode
---

## Getting Started

### Introduction

- INI is a configuration file with a fixed standard format
- Base elements are keys or properties
- Each key consists of a **name** and a **value**, separated by an equal sign (`=`)
- **key name** is displayed to the **left side** of the equals sign
- Equal sign (`=`) and semicolon (`;`) are **reserved** characters
- INI configuration method comes from the MS-DOS operating system

Now an informal standard for many configurations, other operating systems may use `.conf` or `.cfg` as a suffix

### Example

```ini
; Here are the comments
[owner]
name=John Doe
organization=Acme Products

[database]
; Here are the comments
server=192.0.2.42
port=143
file="acme payroll.dat"

[section.subsection]
foo = bar
```

### Comments

Comment (`;`)

```ini
; This is the comment text and will be ignored
```

Comment (`#`)

```ini
# Here is the comment text, ⚠️ Some compilers support it
```

Comments after a line (`;`,`#`) _(not standard)_

```ini
var = a ; this is an inline comment
foo = bar # this is another inline comment
```

Comments must appear alone on lines in some cases

### Sections

- The name appears on a line by itself
- Names are enclosed in square brackets `[` and `]`
- No explicit `section end` delimiter
- End at the next `section` declaration or at the end of the file
- Section and attribute names are case insensitive
<!--rehype:className=style-round-->

```ini
[section]
key1 = a
key2 = b
```

The same as `JSON` below 👇

```json
{
  "section": {
    "key1": "a",
    "key2": "b"
  }
}
```

### Nesting (supported by some parsers)

```ini
[section]
domain = cheatsheets.zip
[section.subsection]
foo = bar
```

The same as `JSON` below 👇

```json
{
  "section": {
    "domain": "cheatsheets.zip"
    "subsection": {
      "foo": "bar"
    }
  }
}
```

Nest to previous section (shorthand)

```ini
[section]
domain = cheatsheets.zip
[.subsection]
foo = bar
```

### Escape character

| sequence | meaning                                                                                          |
| :------- | :----------------------------------------------------------------------------------------------- |
| `\\`     | \ (single backslash, escape escape character)                                                    |
| `\'`     | apostrophe                                                                                       |
| `\"`     | double quotes                                                                                    |
| `\0`     | null character                                                                                   |
| `\a`     | ringtone/alert/sound                                                                             |
| `\b`     | Backspace, [Bell character] for some applications (https://en.wikipedia.org/wiki/Bell_character) |
| `\t`     | tab character                                                                                    |
| `\r`     | carriage return                                                                                  |
| `\n`     | newline                                                                                          |
| `\;`     | semicolon                                                                                        |
| `\#`     | number sign                                                                                      |
| `\=`     | equal sign                                                                                       |
| `\:`     | colon                                                                                            |
| `\x????` | Unicode character for the hexadecimal code point corresponding to ????                           |

### Array

```ini
[section]
domain = cheatsheets.zip
array[]=first value
array[]=second value
```

The same as `JSON` below 👇

```json
{
  "section": {
    "domain": "cheatsheets.zip",
    "array": ["first value", "second value"]
  }
}
```

### Interpreter

- [@go-ini/ini](https://github.com/go-ini/ini) _(golang)_
- [@npm/ini](https://www.npmjs.com/package/ini) _(nodejs)_
- [@zonyitoo/rust-ini](https://github.com/zonyitoo/rust-inii) _(rust)_
- [@rxi/ini](https://www.npmjs.com/package/ini) _(c)_
- [@pulzed/mINI](https://github.com/pulzed/mINI) _(c++)_
- [@rickyah/ini-parser](https://github.com/rickyah/ini-parser) _(c#)_
- [@Enichan/Ini](https://github.com/Enichan/Ini) _(c#)_

## See also

- [INI file configuration](https://en.wikipedia.org/wiki/INI_file)_(wikipedia.org)_
