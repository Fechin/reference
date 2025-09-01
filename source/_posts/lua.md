---
title: Lua
date: 2025-09-01 10:07:20
background: bg-[##00007f]
tags:
  - script
  - interpret
categories:
  - Programming
intro: |
  The [Lua](https://www.lua.org/) cheat sheet is a one-page reference sheet for the Lua 5.4 programming language.
plugins:
  - copyCode
  - runCode
---

## Getting Started

### Introduction

- [Lua](https://www.lua.org/) _(lua.org)_
- [Lua Document](https://www.lua.org/docs.html) _(lua.org/docs.html)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/lua/) _(learnxinyminutes.com)_

### Hello World

```lua

print("Hello, World!") -- Hello, World!

-- You can omit parentheses if the argument is one string or table literal
print "Hello, World!"  -- Hello, World!

print [[multi-line
 Hello
 World]]


```

The famous "Hello World" program in Lua

### Variables

```lua

local age = 18 -- local variable
boys, girls = 2, 3 -- global variables

-- Variables are global by default unless declared with local.

```

Lua is a dynamically typed language and hence only the values will have types not the variables.

### Comments

```lua
-- This is a single line comments
```

```lua
--[[
 Comments (multi-line) could also be written like this
--]]
```

### Data Types {.col-span-2 .row-span-2}

| Value Type | Description                                    |
| ---------- | ---------------------------------------------- |
| `number`   | Represent (double-precision) numbers           |
| `string`   | Represents text                                |
| `nil`      | Differentiates between values with data or not |
| `boolean`  | true or false value                            |
| `function` | Represents a sub routine                       |
| `userdata` | Represents arbitrary C data                    |
| `thread`   | Represents independent threads of execution    |
| `table`    | key-value pair, or array.                      |

## Operators

### Arithmetic

```lua
-- add
  result = 10 + 30  -- => 40

-- subtract
result = 40 - 10  -- => 30

-- multiply
result = 50 * 5   -- => 250

-- divide (float division)
result = 16 / 4   -- => 4.0

-- divide (integer division, Lua 5.3+)
result = 16 // 4  -- => 4

-- modulo
result = 25 % 2   -- => 1

-- power
result = 5 ^ 3    -- => 125

-- unary minus
a = 12
result = -a -- => -12
```

### Relational

```lua
a = 10
b = 20

-- equals
print(a == b) -- false

-- not equals
print(a ~= b) -- true

-- greater than
print(a > b) -- false

-- less than
print(a < b) -- true

-- greater than or equals
print(a >= b) -- false

-- less than or equals
print(a <= b) -- true
```

### Logical

```lua
-- and
false and nil  --> false
0 and 20       --> 20
10 and 20      --> 20

-- or
true or false  --> true
10 or 0        --> 10
12 or 4        --> 12

  -- not
not true       --> false

```
