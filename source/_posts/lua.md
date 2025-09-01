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

-- Undefined variables return nil.
-- This is not an error:
foo = anUnknownVariable  -- Now foo = nil.

-- Variables are global by default unless declared with local.

```

Lua is a dynamically typed language and hence only the values will have types not the variables.

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

See: [Data Types](#data-types)

### IO

```lua
-- Writes data to the standard output or a file.
io.write("Enter your name: ")
-- Reads input from the user or a file. You can specify formats like "*l" (line), "*n" (number), or "*a" (all).
name = io.read()

io.write("Enter your age: ")
age = io.read()
```

### Comments

```lua
-- This is a single line comments
```

```lua
--[[
 Comments (multi-line) could also be written like this
--]]
```

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

Only nil and false are falsy; 0 and '' are true!

## Conditionals

### if-else {.col-span-3 .row-span-2}

```lua
num = 15
if num > 10 then
  print("num is greater than 10")
elseif num < 10 then
  print("num is smaller than 10")
else
  print("num is 10")
end

-- making a ternary operator
-- This is similar to the a?b:c operator in C/js:
ans = aBoolValue and 'yes' or 'no'  --> 'no'

```

## Loops

### While loop

```lua
i = 1
while i <= 5 do
  print(i)
  i = i + 1
end
```

### For loop

```lua
-- Numeric for loop (start, end, step)
for i = 1, 5, 1 do
  print(i)
end

-- Generic for loop for tables
t = {10, 20, 30}
for k, v in ipairs(t) do
  print(k, v) -- prints 1 10, 2 20, 3 30
end
```

### Repeat-until loop

```lua
i = 1
repeat
  print(i)
  i = i + 1
until i > 5
```

### Breaking out

```lua
while x do
  if condition then
    break
  end
end
```

### Continue

```lua
-- prints even numbers in [|1,10|]
for i=1,10 do
   if i % 2 == 1 then
    goto continue
  end
   print(i)
   ::continue::
end
```

## Functions

### Creating fns

```lua
function myFunction()
  return 1
end

function myFunctionWithArgs(a, b)
  -- ...
end

-- function as arg
function operate(a, b, func)
    return func(a, b)
end



-- anonymous function
function (parameters)
    -- body of the function
end


local greet = function(name)
    return "Hello, " .. name
end


-- Not exported in the module
local function myPrivateFunction()
end


-- Splats
function doAction(action, ...)
  print("Doing '"..action.."' to", ...)
end

```

### Invoking fns {.col-span-2}

```lua
myFunction()

print(greet("Lua")) -- Output: Hello, Lua


-- function as arg
local result = operate(5, 3, function(x, y)
    return x + y
end)

print(result) -- Output: 8


doAction('write', "Shirley", "Abed")
--> Doing 'write' to Shirley Abed
```

You can omit parentheses if the argument is one string or table literal

```lua
print "Hello World"     -->     print("Hello World")

dofile 'a.lua'          -->     dofile ('a.lua')

print [[a multi-line    -->     print([[a multi-line
 message]]                        message]])

f{x=10, y=20}           -->     f({x=10, y=20})

type{}                  -->     type({})
```

## Data Type APIs

### Strings

```lua
s = "Hello"

-- concatenation
s .. " there" -- => Hello there

s:upper() -- => HELLO
s:lower() -- => hello
s:len()   -- => 5
s:find("o") -- => 5
s:reverse() -- => olleH

-- others
s:match()
s:gmatch()

s:sub()
s:gsub()

s:rep()
s:char()
s:dump()
s:byte()
s:format()

```
