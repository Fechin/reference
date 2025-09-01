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

-- Now x = 1, y = 2, z = 3, and 4 is thrown away.
x, y, z = 1, 2, 3, 4

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

### Global functions

Assert

```lua
local my_table = {}
assert(my_table, "my_table should exist!") -- This will not fail

local a = nil
-- This will cause a runtime error with the message "a is nil"
assert(a, "a is nil")
```

Type

```lua
local my_var = 10
print(type(my_var)) -- "number"

local my_str = "hello"
print(type(my_str)) -- "string"

local my_func = function() end
print(type(my_func)) -- "function"
```

Dofile & Loadfile

```lua
-- Using dofile
dofile("my_file.lua") -- Executes my_file.lua immediately

-- Using loadfile
local my_func = loadfile("my_file.lua")
if my_func then
  -- my_file.lua is valid, now execute it
  my_func()
else
  print("Error loading file.")
end
```

Pairs

```lua
local my_table = {10, "hello", 20, name = "Lua"}

print("Using pairs:")
for key, value in pairs(my_table) do
  print(key, value)
end

print("Using ipairs:")
for key, value in ipairs(my_table) do
  print(key, value)
end
```

To number

```lua
local num1 = tonumber("34")
print(num1, type(num1)) -- 34 number

local num2 = tonumber("34.5")
print(num2, type(num2)) -- 34.5 number

local num3 = tonumber("abc")
print(num3) -- nil (conversion failed)

local hex_num = tonumber("8f", 16)
print(hex_num) -- 143 (8 * 16 + 15)
```

### Strings

```lua
s = "Hello"
```

Concatenation

```lua
s .. " there" -- => Hello there
```

Commonly used methods

```lua
s:upper() -- => HELLO
s:lower() -- => hello
s:len()   -- => 5
s:find("o") -- => 5
s:reverse() -- => olleH
```

Sub

```lua
local s = "programming"
s:sub(3, 7) -- (extracts substring) => "ogram"
```

Gsub

```lua
s:gsub() --> (substitutes all matches)
```

Char

```lua
s = "ha"
s:rep(3) -- // repeats 3 times -> "hahaha"
local s_char = string.char(72, 101, 108, 108, 111)
print(s_char) -- "Hello"
```

Format

```lua
local name = "Alice"
local age = 30
local formatted = string.format("My name is %s and I am %d years old.", name, age)
print(formatted) -- "My name is Alice and I am 30 years old."
```

Others

```lua
s:match()
s:gmatch()
s:dump()
s:byte()
```

### Table basics

```lua
-- Array-like table (one-indexed)
local colors = {"red", "green", "blue"}
print(colors[1]) -- "red"

-- Dictionary-like table
local user = {name = "Jane", age = 25}
print(user.name) -- "Jane"
print(user["age"]) -- 25

-- Mixed table
local mixed = {1, "two", key = "value"}
print(mixed[1]) -- 1
print(mixed.key) -- "value"

-- Getting the length of an array-like table
print(#colors) -- 3
```

### Tables

```lua
local my_table = {10, 20}

-- insert (appends 30 to the end)
table.insert(my_table, 30)

-- insertion (inserts 2 in position 1)
table.insert(my_table, 1, 2)

-- remove (remove item in position 3)
table.remove(my_table, 3)

-- Default numerical sort
local numbers = {5, 2, 8, 1}
table.sort(numbers) -- {1, 2, 5, 8}

-- Custom sort for descending order
local numbers_desc = {5, 2, 8, 1}
table.sort(numbers_desc, function(a, b)
  return a > b
end) -- {8, 5, 2, 1}

-- concat
local fruit = {"apple", "banana", "cherry"}
local fruit_string = table.concat(fruit, ", ")
print(fruit_string) -- apple, banana, cherry
```

### Math

```lua
math.abs(-5) -- => 5
-- Returns the absolute value of x.
```

---

```lua
math.acos(1) -- => 0
-- Returns the arc cosine of x in radians.
```

---

```lua
math.asin(0) -- => 0
-- Returns the arc sine of x in radians.
```

---

```lua
math.atan(y, x)` -- => arctangent of y/x
-- Returns the arctangent of `y/x` in radians, using the signs of both arguments to determine the correct quadrant.
```

---

```lua
math.ceil(x)` -- => smallest integer greater than or equal to x
-- Returns the smallest integer value not less than `x`.
```

---

```lua
math.cos(x)` -- => cosine of x
-- Returns the cosine of `x` (assumed to be in radians).
```

---

```lua
math.deg(x)` -- => radians to degrees
-- Returns the angle `x` (in radians) converted to degrees.
```

---

```lua
math.exp(x)` -- => e^x
-- Returns the value of $e^x$, where $e$ is the base of natural logarithms.
```

---

```lua
math.floor(x)` -- => largest integer less than or equal to x
-- Returns the largest integer value not greater than `x`.
```

---

```lua
math.fmod(x, y)` -- => remainder of x divided by y
-- Returns the remainder of `x` divided by `y`, with the same sign as `x`.
```

---

```lua
math.log(x, base)` -- => logarithm of x
-- Returns the logarithm of `x` in the given `base`. If `base` is not provided, it defaults to the natural logarithm.
```

---

```lua
math.max(x, ...)` -- => largest argument
-- Returns the largest among its arguments.
```

---

```lua
math.min(x, ...)` -- => smallest argument
-- Returns the smallest among its arguments.
```

---

```lua
math.modf(x)` -- => integer and fractional parts
-- Returns two numbers: the integer part of `x` and the fractional part.
```

---

```lua
math.pow(x, y)` -- => x^y
-- Returns `x` raised to the power of `y`.
```

---

```lua
math.rad(x)` -- => degrees to radians
-- Returns the angle `x` (in degrees) converted to radians.
```

---

```lua
math.random(m, n)` -- => random number
-- Returns a pseudo-random number. When called without arguments, returns a float in the range $[0, 1)$. With one argument `n`, returns an integer in the range $[1, n]$. With two arguments `m` and `n`, returns an integer in the range $[m, n]$.
```

---

```lua
math.sin(x)` -- => sine of x
-- Returns the sine of `x` (assumed to be in radians).
```

---

```lua
math.sqrt(x)` -- => square root of x
-- Returns the non-negative square root of `x`.
```

---

```lua
math.tan(x)` -- => tangent of x
-- Returns the tangent of `x` (assumed to be in radians).

```

## Misc

### Classes {.col-span-2 .row-span-2}

Classes aren't built in; there are different ways to make them using tables and metatables.

```lua

```

Short explanation; what we are trying to do is basically making a table that can hold data and functions

```lua

Dog = {}

function Dog:new()
  newObj = {sound = 'woof'}
  self.__index = self
  return setmetatable(newObj, self)
end

function Dog:makeSound()
  print('I say ' .. self.sound)
end

mrDog = Dog:new()
mrDog:makeSound()  -- 'I say woof'

```

Inheritance

```lua
LoudDog = Dog:new()

function LoudDog:makeSound()
  s = self.sound .. ' '
  print(s .. s .. s)
end

seymour = LoudDog:new()
seymour:makeSound()  -- 'woof woof woof'
```

Another example

```lua
Account = {}

function Account:new(balance)
  local t = setmetatable({}, { __index = Account })

  -- Your constructor stuff
  t.balance = (balance or 0)
  return t
end

function Account:withdraw(amount)
  print("Withdrawing " .. amount .. "...")
  self.balance = self.balance - amount
  self:report()
end

function Account:report()
  print("Your current balance is: "..self.balance)
end

a = Account:new(9000)
a:withdraw(200)    -- method call
```

### Meta-tables

A metatable is simply a table with functions in it.

```lua
mt = {}

mt.__tostring = function() return "lol" end
mt.__add      = function(b) ... end       -- a + b
mt.__mul      = function(b) ... end       -- a * b
mt.__index    = function(k) ... end       -- Lookups (a[k] or a.k)
mt.__newindex = function(k, v) ... end    -- Setters (a[k] = v)
```

Metatables allow you to override behavior of another table.

```lua

mytable = {}
setmetatable(mytable, mt)

print(myobject)
```

### Files

```lua
local file = io.open("test.txt", "w")
if file then
  file:write("Hello from Lua!")
  io.close(file)
end

local file = io.open("test.txt", "r")
if file then
  local content = file:read("*a") -- read all content
  print(content)
  io.close(file)
end
```
