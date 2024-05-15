---
title: Nim
date: 2024-05-15 8:03:44
background: bg-black
tags:
categories:
  - Programming
intro: |
  The Nim quick reference cheat sheet that aims at providing help on writing basic syntax and methods.
plugins:
  - copyCode
---

## Getting Started

### Helloworld.nim

```nim
echo "Hello World!"
```

#### Compiling and Running

```shell
$ nim c helloworld.nim
# if os is windows then
$ helloworld.exe
# if os is linux then
$ ./Hello_World
# output
Hello, World!

# There is also a possibility
# to both compile and run the
# program with just one command.
# We need to type:
$ nim c -r helloworld.nim

```

### comment

```nim
# This is a comment
#[
  This is a multiline comment.
  In Nim, multiline comments can be nested, beginning with #[
  ... and ending with ]#
]#
discard """
This can also work as a multiline comment.
Or for unparsable, broken code
"""
# Note: The compiler will complain if the result of an expression
              # is unused. `discard` bypasses this.
```

### Naming values

```nim
pi = 3.14, #the name pi is connected to the value 3.14
firstName = Alice, #where firstName is the name of a variable with the value Alice
```

### Variable declaration

```nim
#Nim is a statically
#typed programming language, meaning that the type of
#an assignment needs to be declared before using the value.
#The type of a variable can be declared by using the var keyword.

var <name>: <type> # syntax
var <name>: <type> = <value> # syntax
var <name> = <value>
#example
var                     # Declare (and assign) variables,
  letter: char = 'n'    # with or without type annotations
  lang = "N" & "im"
  nLength: int = len(lang)
  boat: float
  truth: bool = false
  b = 7
  c = -11
  d = "Hello"
  e = '!'
```

### Immutable assignment

#### Let

```nim
let            # Use let to declare and bind variables *once*.
  legs = 400   # legs is immutable.
  arms = 2_000 # _ are ignored and are useful for long numbers.
  aboutPi = 3.15
```

#### Const

```nim
const            # Constants are computed at compile time. This provides
  debug = true   # performance and is useful in compile time expressions.
  compileBadCode = false
```

### Basic data types

#### Integers

```nim
et
  a = 11
  b = 4

echo "a + b = ", a + b
echo "a - b = ", a - b
echo "a * b = ", a * b
echo "a / b = ", a / b
echo "a div b = ", a div b
echo "a mod b = ", a mod b
#output
#a + b = 15
#a - b = 7
#a * b = 44
#a / b = 2.75
#a div b = 2
#a mod b = 3
```

#### Floats

```nim
let
  c = 6.75
  d = 2.25

echo "c + d = ", c + d
echo "c - d = ", c - d
echo "c * d = ", c * d
echo "c / d = ", c / d
#output
#c + d = 9.0
#c - d = 4.5
#c * d = 15.1875
#c / d = 3.0
```

#### Strings

```nim
#Strings can be described
#as a series of characters.
#Their content is written between two double quotes (").
let
  m = "word"
  n = "A sentence with interpunction."
  o = ""
  p = "32"
  q = "!"
```

#### Characters

```nim
#Characters are single
#characters. They are
#written between two single quotes (').
let
  h = 'z'
  i = '+'
  j = '2'
  k = '35' # error
  l = 'xy' # error
```

#### Special characters

```nim
#\n is a newline character
#\t is a tab character
#\\ is a backslash (since one \ is used as the escape character)

echo "some\nim\tips"
echo "some\\nim\\tips"
echo r"some\nim\tips"
#output
#some
#im	ips
#some\nim\tips
#some\nim\tips
```

#### Boolean

```nim
#A boolean (or just bool)
# data type can only have
#two values: true or false.
let isEmpty = true
let isFull = false
```

### Converting floats and integers

```nim
let
  e = 5
  f = 23.987
echo e + f   # error
echo float(e)
echo int(f)

echo float(e) + f
echo e + int(f)
#output
#5.0
#23
#28.987
#28
```

### String concatenation

```nim
var
  p = "abc"
  q = "xy"
  r = 'z'

p.add("def")
echo "p is now: ", p

q.add(r)
echo "q is now: ", q

echo "concat: ", p & q

echo "p is still: ", p
echo "q is still: ", q
#output
#p is now: abcdef
#q is now: xyz
#concat: abcdefxyz
#p is still: abcdef
#q is still: xyz
```

### Relational operators

```nim
let
  g = 31
  h = 99

echo "g is greater than h: ", g > h
echo "g is smaller than h: ", g < h
echo "g is equal to h: ", g == h
echo "g is not equal to h: ", g != h
echo "g is greater or equal to h: ", g >= h
echo "g is smaller or equal to h: ", g <= h
#output
g is greater than h: false
g is smaller than h: true
g is equal to h: false
g is not equal to h: true
g is greater or equal to h: false
g is smaller or equal to h: true

#example
let
  i = 'a'
  j = 'd'
  k = 'Z'

echo i < j
echo i < k

let
  m = "axyb"
  n = "axyz"
  o = "ba"
  p = "ba "

echo m < n
echo n < o
echo o < p
#output
#false
#true
#true
#true
#true
```

### Logical operators

```nim
echo "T and T: ", true and true
echo "T and F: ", true and false
echo "F and F: ", false and false
echo "---"
echo "T or T: ", true or true
echo "T or F: ", true or false
echo "F or F: ", false or false
echo "---"
echo "T xor T: ", true xor true
echo "T xor F: ", true xor false
echo "F xor F: ", false xor false
echo "---"
echo "not T: ", not true
echo "not F: ", not false
#output
#T and T: true
#T and F: false
#F and F: false
---
#T or T: true
#T or F: true
#F or F: false
---
#T xor T: false
#T xor F: true
#F xor F: false
---
#not T: false
#not F: true
```

## Exercises

1.  create an immutable variable containing your age (in years). Print your age in days. (1 year = 365 days)

2.  Check if your age is divisible by 3. (Hint: use mod)

3.  Create an immutable variable containing your height in centimeters. Print your height in inches. (1 in = 2.54 cm)

4.  A pipe has a 3/8 inch diameter. Express the diameter in centimeters.

5.  Create an immutable variable containing your first name, and another one containing your last name. Make a variable fullName by concatenating the previous two variables. Don’t forget to put a whitespace in-between. Print your full name.

6.  Alice earns $400 every 15 days. Bob earns $3.14 per hour and works 8 hours a day, 7 days a week. After 30 days, has Alice earned more than Bob? (Hint: use relational operators)

### Control flow

```nim
#pseudocode
if eggPrice < wantedPrice:
  buyEggs

if isRaining:
  bring umbrella
else:
  bring sunglasses

#If statement
if <condition>:
  <indented block>
```

#### If statement

```nim
let
  a = 11
  b = 22
  c = 999

if a < b:
  echo "a is smaller than b"
  if 10*a < b:
    echo "not only that, a is *much* smaller than b"

if b < c:
  echo "b is smaller than c"
  if 10*b < c:
    echo "not only that, b is *much* smaller than c"

if a+b > c:
  echo "a and b are larger than c"
  if 1 < 100 and 321 > 123:
    echo "did you know that 1 is smaller than 100?"
    echo "and 321 is larger than 123! wow!"
#output
#a is smaller than b
#b is smaller than c
#not only that, b is *much* smaller than c
```
