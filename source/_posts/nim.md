---
title: Nim
date: 2025-11-15 2:06:33
background: bg-[#eed547]
tags:
categories:
  - Programming
intro: |
  The Nim quick reference cheat sheet that aims at providing help on writing basic syntax and methods.
plugins:
  - copyCode
---

## Getting Started

### helloworld.nim {.row-span-2}

```nim
echo "Hello World!"

# This is a comment
echo "What's your name? "
var name: string = readLine(stdin)
# readLine(stdin) asks you to type in a string.

echo "Hi, ", name, "!"
```

Compile `helloworld.nim` with `nim compile`

```bash
$ nim compile helloworld.nim
```

Run the compiled binary `helloworld` (or `helloworld.exe` if you're on Windows)

```
./helloworld
Hello, World!
What's your name?
Hi, <name>!
```

There is also a possibility
to both compile and run the
program with just one command.
We need to type:
`$ nim c -r helloworld.nim`

#### Common compile commands (terminal)

```sh
nim c -r main.nim          # debug build, run after compile
nim c -d:release main.nim  # optimized release build
nim c --mm:arc main.nim    # ARC memory management (Nim 2 default)
```

### Useful Resources {.col-span-2}

- [Nim](https://www.nim-lang.org/) _(nim-lang.org)_
- [The Nim Manual](https://nim-lang.org/docs/manual.html) _(../docs/manual.html)_
- [Nim Basics](https://narimiran.github.io/nim-basics/) _(narimiran.github.io)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/nim/) _(learnxinyminutes.com)_

### Variables {.row-span-1}

```nim
# 'var' declares mutable variables.

var number: int = 100 # Single line declaration

# A 'var' block can declare multiple variables at once.

var
  letter: char = 'n'
  lang = "N" & "im"
  length = len(lang)
  counter: int = 7
  boat: float
  truth = true
```

### Immutable Variables (let)

```nim
# 'let' declares immutable variables.
let
  salute: string = "Hello!"
  x: int = 10
  y = x + 5

let z = 20
z = 500   # Error: 'z' is immutable
```

### Comments

```nim
# This is a comment

#[
  This is a multiline comment.
  In Nim, multiline comments can be nested, beginning with #[
  ... and ending with ]#
]#
```

### Constants {.row-span-1}

```nim
const
  debug = true
  compileBadCode = false

# Constants are declared at compile time and cannot be changed.
```

### "For" Loops

```nim
for item in (1 ..< 6):
  if item == 3: break
  echo item

echo "All done!"
```

See: [Loops](#loops)

### If Statements

```nim
import std/strutils
let number = parseInt(readLine(stdin))

if number <= 5:
  echo "Small sized number."
elif number > 5 and number <= 25:
  echo "Medium sized number."
else:
  echo "Big number."
```

See: [Flow Control](#flow-control)

### Procedures / Functions

```nim
proc myFunction() =
  echo "Hello, this is my function"

myFunction()

# prints "Hello, this is my function"
```

See: [Procedures](#procedures)

### Formatted Strings

```nim
import std/strformat

let
  a = "Hello there."
  b = "How's it going?"
  c = "These are variables."

echo fmt"{a} {b} {c}" # "Hello there. How's it going? These are variables."
```

See: [Imports](#imports-and-modules)

## Data Types

### Integers

```nim
let
  a = 11
  b = 4

echo "a + b = ", a + b # 15
echo "a - b = ", a - b # 7
echo "a * b = ", a * b # 44
echo "a / b = ", a / b # 2.75
echo "a div b = ", a div b # 2
echo "a mod b = ", a mod b # 3
```

### Floats

```nim
let
  c = 6.75
  d = 2.25

echo "c + d = ", c + d # 9.0
echo "c - d = ", c - d # 4.5
echo "c * d = ", c * d # 15.1875
echo "c / d = ", c / d # 3.0
```

### Strings {.row-span-3}

```nim
let
  m = "word"
  n = "A sentence with punctuation."
  o = ""
  p = "32"
  q = "!"

echo m
# prints "word"
echo p, " is a string."
# prints "32 is a string."
```

#### String Concatenation

```nim
var
  p = "abc"
  q = "xy"
  r = 'z'

p.add("def")   # modifies p
q.add(r)       # chars can be added to strings

echo p         # "abcdef"
echo q         # "xyz"

# `&` creates a new string:
echo p & q     # "abcdefxyz"
```

#### Special Escape Sequences

```nim
echo "line1\nline2"     # newline
echo "col1\tcol2"       # tab
echo "A\\B\\C"          # backslash

# Raw strings ignore escapes:
echo r"line1\nline2"
```

See also: [Escape Sequences](https://nim-lang.org/docs/manual.html#lexical-analysis-string-literals)

### Characters

```nim
let
  h = 'z'
  i = '+'
  j = '2'
  k = '35'   # error: too many characters
  l = 'xy'   # error: too many characters
```

### Booleans

```nim
let x = true
let y = false

# Boolean literals are lowercase.
```

### Type Conversion {.col-span-2}

```nim

let e = 5
let f = 23.987

# Converting between ints and floats:
echo float(e)    # 5.0
echo int(f)      # 23

# Mixed operations require explicit conversion:
echo float(e) + f    # 28.987
echo e + int(f)      # 28
```

## Compound Types

### Arrays

```nim
type IntArray = array[0..3, int]

let a: IntArray = [10, 20, 30, 40]

echo a[0]      # 10
echo a.len     # 4
```

### Sequences

```nim
var s: seq[int] = @[1, 2, 3]
s.add(4)

echo s         # @[1, 2, 3, 4]
echo s.len     # 4
```

### Objects

```nim
type Person = object
  name: string
  age: int

let p = Person(name: "Ana", age: 20)
echo p.name
```

### Tuples

```nim
var person = (name: "Sophie", age: 18)

echo person.name # Sophie
echo person.age  # 18

# swapping values:
var (x, y) = (1, 2)
(x, y) = (y, x)
echo x, " ", y     # 2 1
```

### Sets

```nim
type CharSet = set[char]

let letters: CharSet = {'a'..'z'}

echo 'a' in letters    # true
echo 'Z' in letters    # false
```

### Reference Objects

```nim
type Node = ref object
  value: int
  next: Node     # linked list style

var n = Node(value: 10)
echo n.value
```

Needed for Object Oriented Programming within Nim.

### Slicing Sequences and Strings {.col-span-2}

```nim
let xs = @[10, 20, 30, 40]

echo xs[1..2]    # @[20, 30]
echo xs[^2..^1]  # @[30, 40]
```

---

```nim
let s = "abcdef"

echo s[0..2]     # "abc"
echo s[3..^1]    # "def" (^1 = last char)
echo s[1..<4]    # "bcd"
```

### Tables/Dictionaries

```nim
import std/tables

var ages = initTable[string, int]()
ages["Ana"] = 20
ages["Sophie"] = 18

echo ages["Ana"]                 # 20
echo ages.getOrDefault("X", -1)  # -1

for name, age in ages:
  echo name, ": ", age
```

## Operators

### Arithmetic Operators {.row-span-1}

```nim
var
  a = 10
  b = 3

echo a + b      # 13
echo a - b      # 7
echo a * b      # 30
echo a / b      # 3.333333
echo a div b    # 3
echo a mod b    # 1
echo a ^ b      # 1000
```

---

| Operator | Name           | Example   |
| -------- | -------------- | --------- |
| `+`      | Add            | `x + y`   |
| `-`      | Subtract       | `x - y`   |
| `*`      | Multiply       | `x * y`   |
| `/`      | Float Divide   | `x / y`   |
| `div`    | Integer Divide | `x div y` |
| `mod`    | Modulo         | `x mod y` |
| `^`      | Power          | `x ^ y`   |

{.show-header}

### Assignment

These only work on mutable (`var`) variables, not on `let` or `const`.

```nim
var value = 1990
echo value # 1990

value = 2
echo value # 2
```

---

| Operator | Description  | Example |
| -------- | ------------ | ------- |
| `=`      | Assign value | `x = y` |

{.show-header}

#### Update operations

| Syntax   | Expands to  | Meaning          |
| -------- | ----------- | ---------------- |
| `x += y` | `x = x + y` | add, assign      |
| `x -= y` | `x = x - y` | subtract, assign |
| `x *= y` | `x = x * y` | multiply, assign |

{.show-header}

Other variants like `/=` or `mod=` are not available,  
so just write them out explicitly, e.g. `x = x / y`.

### Comparison Operators {.row-span-2}

```nim
let
  x = 5
  y = 3

echo x > y
# prints "true" because 5 is greater than 3
```

---

| Symbol | Meaning                  | Example        |
| ------ | ------------------------ | -------------- |
| `==`   | equals                   | `if x == y`... |
| `!=`   | not equal to             | `if x != y`... |
| `>`    | greater than             | `if x > y`...  |
| `<`    | less than                | `if x < y`...  |
| `>=`   | greater than or equal to | `if x >= y`... |
| `<=`   | less than or equal to    | `if x <= y`... |

{.show-header}

Comparison operators are used to compare two values.

#### Lexicographical Comparison

They also work on `char` and `string` values via lexicographic order.

```nim
echo "apple" < "banana"  # true
echo "axyz" < "axyb"     # true
echo "ooooo" > "o"       # true
echo "abc" < "ab"        # false

echo 'a' < 'd'           # true
echo 'a' < 'Z'           # false
```

### Logical Operators {.row-span-2} {.col-span-2}

| Operator | Example                | Meaning                  |
| -------- | ---------------------- | ------------------------ |
| `and`    | `if a > 0 and a < 10:` | From 1 to 9              |
| `or`     | `if x == 0 or y == 0:` | Either one of them is 0  |
| `not`    | `if not isValid:`      | If `isValid` is not true |
| `xor`    | `if flagA xor flagB:`  | Only one of them is true |

{.show-header}

Logical operators work on `bool`.

#### Extra Bitwise Operators

| Operator | Example   | Result (with a = 60, b = 13) |
| -------- | --------- | ---------------------------- |
| `and`    | `a and b` | `12`                         |
| `or`     | `a or b`  | `61`                         |
| `xor`    | `a xor b` | `49`                         |
| `not`    | `not a`   | `-61`                        |
| `shl`    | `a shl 2` | `240`                        |
| `shr`    | `a shr 2` | `15`                         |

{.show-header}

These work on integers bit-by-bit; use them for flags, masks, low-level code, etc.

## Flow Control

### Match Case {.row-span-3}

```nim
let x = 5
case x:
of 0, 1:
  echo "small"
of 2, 3, 4:
  echo "medium"
else:
  echo "large"
```

---

`case of` can look for ranges too.

```nim
let age = 17

case age:
of 0..12:
  echo "child"
of 13..19:
  echo "teen"
else:
  echo "adult"
```

---

...and `strings` and `chars`, too

```nim
let cmd = "quit"

case cmd:
of "help":
  echo "show help"
of "quit", "exit":
  echo "bye!"
else:
  echo "unknown command"
```

---

```nim
let ch = 'g'
case ch:
of {'a', 'e', 'i', 'o', 'u'}:
  echo "vowel"
else:
  echo "consonant or symbol"
```

### Basic If-Else {.col-span-2}

```nim
let num = 5

if num > 10:
  echo "num is bigger than 10"
elif num < 10:
  echo "num is smaller than 10"
else:
  echo "num is exactly 10"
```

### One Liners {.col-span-2}

```nim
let
  a = 330
  b = 200

let r = if a > b: a else: b

echo r # 330
```

### Compile-Time Conditions {.col-span-2}

```nim
when defined(linux):
  echo "Compiled on Linux"
elif defined(windows):
  echo "Compiled on Windows"
else:
  echo "Unknown OS"
```

## Loops

### For Loops {.row-span-2}

```nim
for i in 1..5:
  echo i
# 1 2 3 4 5
```

---

```nim
for i in 0..<3:
  echo i
# 0 1 2
```

---

```nim
# i = index, v = value in sequence
for i, v in @[10, 20, 30]:
  echo i, ": ", v
# 0: 10
# 1: 20
# 2: 30
```

**Keep in mind**: \
1..5 = Inclusive (1 2 3 4 5) \
1..<5 = Exclusive (1 2 3 4)

### While Loops

```nim
var counter = 0

while counter <= 10:
  counter = counter + 1
  echo counter # prints 1..10
```

### Infinite Loops

```nim
while true:
  echo "ay! "
```

---

```nim
while 1 > 0:
  echo "echo... "
```

### Break Statements

```nim
var query = ""
while true:
  echo "Do you want out?"
  query = readLine(stdin)
  if query == "yes":
    echo "Well then."
    break
  else:
    echo "I'll ask again."

```

### Continue Statements

```nim
for i in 1..5:
  if i mod 2 == 0: continue
  echo i
# prints only odd numbers: 1 3 5
```

## Procedures

### Simple Procedure

```nim
proc salute() =
  echo "Hello!"

salute() # prints "Hello!"
```

### Procedures with Parameters

```nim
proc addition(a: int, b: int): int =
  a + b

echo addition(20, 30) # returns 50
```

### Using result {.row-span-2}

```nim
proc double(x: int): int =
  result = x * 2

echo double(5) # returns 10
```

---

Useful when building results step-by-step:

```nim
proc sumAll(xs: seq[int]): int =
  for n in xs:
    result += n

echo sumAll(@[1,1,1,1,1]) # returns 5
```

### Default Parameters {.col-span-2}

```nim
proc welcome(name = "stranger") =
  echo "Hi, ", name

welcome("Sophie") # prints "Hi, Sophie"
welcome()         # uses default, prints "Hi, stranger"
```

### Procedures returning multiple values

```nim
proc divmod(a, b: int): (int, int) =
  (a div b, a mod b)

let (q, r) = divmod(10, 3)
echo q, " ", r   # 3 1
```

### Anonymous Procedures (Lambdas)

```nim
let square = proc(x: int): int = x * x
echo square(5) # 25
```

### Procedures within Procedures {.row-span-2}

```nim
proc outer() =
  var count = 0

  proc inner() =
    inc(count)
    echo count

  inner()
  inner()

outer()   # prints 1 then 2
```

### Overloading

```nim
proc show(x: int) = echo "int: ", x
proc show(x: string) = echo "string: ", x

show(10)
show("hi")
```

### Discardable Procedure Returns

```nim
proc doSomething(): int {.discardable.} =
  123

doSomething()      # allowed now
```

## Object-Oriented Programming

### Ref Objects and Inheritance {.row-span-2}

```nim
type
  Animal = ref object of RootObj
    name: string

  Dog = ref object of Animal
    breed: string

method speak(a: Animal) {.base.} =
  echo a.name, " makes a sound."

method speak(d: Dog) =
  echo d.name, " barks!"

var
  a: Animal = Animal(name: "Creature")
  d: Animal = Dog(name: "Fido", breed: "Mutt")  # Dog upcasted to Animal

speak(a)  # Creature makes a sound.
speak(d)  # Fido barks!
```

Use `ref object of RootObj` + `method` when you need runtime polymorphism.

### Procs as Methods

```nim
type
  Counter = ref object
    value: int

proc inc(c: var Counter) =
  inc c.value

var c = Counter(value: 0)
inc(c)
echo c.value  # 1
```

### Constructor Procs

```nim
type
  Dog = ref object
    name: string
    age: int

proc newDog(name: string; age: int): Dog =
  Dog(name: name, age: age)

let d = newDog("Fido", 3)
echo d.name, " is ", d.age, " years old"
```

### Type tests and Downcasting {.col-span-2}

```nim
type
  Animal = ref object of RootObj
    name: string

  Dog = ref object of Animal
    breed: string

proc newDog(name, breed: string): Dog =
  Dog(name: name, breed: breed)

var a: Animal = newDog("Fido", "mutt")

if a of Dog:                       # runtime type check
  let d = Dog(a)                   # downcast
  echo d.name, " is a ", d.breed

```

`x of Type` checks the dynamic type; `Type(x)` downcasts (unsafe if you lie).

## Imports and Modules

### Basic Imports

```nim
import std/math

echo sqrt(9.0) # 3.0
```

See also: [Standard Library](https://nim-lang.org/docs/lib.html)

### Importing Multiple Modules

```nim
import std/[strutils, sequtils]

echo "hi".toUpperAscii()    # "HI"
echo @[1,2,3].mapIt(it * 2) # @[2, 4, 6]
```

### Importing Specific Modules

```nim
from std/strutils import toLowerAscii

echo toLowerAscii("ABC")  # "abc"
```

### Renaming Modules

```nim
import std/random as rng

rng.randomize()

echo rng.rand(1..10) # anywhere from 1 to 10
```

_Don't forget to use randomize() if you're using the std/random library, or else you won't have randomness._

### Creating Modules {.col-span-2}

```nim
# utils.nim
proc greet*(name: string) =
  echo "Hello, ", name
```

(The asterisk means "export this procedure from the module".)

---

```nim
# main.nim
import utils

greet("John") # prints "Hello, John"
```

### `when isMainModule`

```nim
proc run() =
  echo "Running..."

when isMainModule:
  run()  # Only runs when this file is the program entry point
```

_Code inside when isMainModule: is skipped when the file is imported._

### Re-exporting {.col-span-2}

```nim
# utils.nim
import std/strutils
export strutils    # re-export everything from strutils
```

---

Now main.nim can use toUpperAscii directly, through utils.

```nim
# main.nim
import utils

echo "hi".toUpperAscii()
```

### Prelude Module {.col-span-3}

```nim
import std/prelude
include std/prelude
  # same as:
  # import std/[os, strutils, times, parseutils, hashes, tables, sets, sequtils, parseopt, strformat]
let x = 1
assert "foo $# $#" % [$x, "bar"] == "foo 1 bar"
assert toSeq(1..3) == @[1, 2, 3]
when not defined(js) or defined(nodejs):
  assert getCurrentDir().len > 0
  assert ($now()).startsWith "20"
```

## Error Handling

### Try - Except - Finally {.row-span-2}

```nim
import std/strutils

try:
  let x = parseInt("42a")         # invalid integer
  echo x
except ValueError as e:
  echo "Value error: ", e.msg     # catch conversion error
except IOError:
  echo "I/O error!"
finally:
  echo "This always runs"
```

### Raising Exceptions

```nim
type
  MyError* = object of Exception

proc loadData(name: string) =
  if name == "":
    raise newException(MyError, "No name provided")
  # ... else proceed

loadData("")  # raises MyError
```

### `defer` for Cleanup

```nim
proc processFile(path: string) =
  var f = open(path, fmRead)
  defer:
    close(f)
  # work with f …
```

### Try as Exception

```nim
import std/strutils

let result = try: parseInt("bad")
             except ValueError: -1

echo result  # prints -1
```

### Exception Tracking with raises

```nim
proc riskyOperation() {.raises: [IOError].} =
  # this proc may raise IOError
  raise newException(IOError, "fail")

# A proc with {.raises: []} must not raise any catchable exception.
```

## Enums

### Basic Usage

```nim
type
  Direction = enum
    north, east, south, west

var d = north

if d == north:
  echo "Going up!"
```

### Enums and `case`

```nim
# with the same Direction enum:

var d = north

case d:
  of north: echo "N"
  of south: echo "S"
  of east:  echo "E"
  of west:  echo "W"
```

### Enum as an Ordinal

```nim
# with the same Direction enum:
echo ord(north)   # 0
echo succ(north)  # east
echo pred(south)  # east
```

## Iterators

### Basic Iterator {.row-span-2}

```nim
iterator countUp(a, b: int): int =
  var i = a
  while i <= b:
    yield i      # `yield` produces a value for the `for` loop
    inc i

for n in countUp(1, 5):
  echo n
# 1 2 3 4 5
```

### Common Built-In Iterators

```nim
for i in countup(1, 3):
  echo i               # 1 2 3

for i in countdown(3, 1):
  echo i               # 3 2 1
```

### Defining your own Iterator {.row-span-2}

```nim
iterator evensUpTo(n: int): int =
  var x = 0
  while x <= n:
    yield x
    x += 2

for e in evensUpTo(10):
  echo e        # 0 2 4 6 8 10
```

## Files & IO

### Check Paths and Existence {.row-span-2}

```nim
import std/os

if fileExists("data.txt"):
  echo "File exists!"

if dirExists("configs"):
  echo "Directory exists!"

echo getCurrentDir()
echo absolutePath("data.txt")
```

### Read / Write Whole File {.row-span-1}

```nim
# Write whole file
writeFile("out.txt", "Hello Nim!\n")

# Read whole file
let text = readFile("out.txt")
echo text
```

### Manual Open/Close with `defer` {.row-span-2}

```nim
import std/syncio

proc writeLog() =
  var f = open("log.txt", fmWrite)
  defer: f.close()
  f.writeLine("entry 1")
  f.writeLine("entry 2")

when isMainModule:
  writeLog()
```

### Read a File Line-By-Line

```nim
for line in lines("data.txt"):
  echo line
```

## Generics

### Generic Types and Procedures {.col-span-3}

```nim
type
  Box[T] = object
    value: T

proc wrap[T](x: T): Box[T] =
  Box[T](value: x)

let a = wrap(10)        # Box[int]
let b = wrap("hello")   # Box[string]

echo a.value            # 10
echo b.value            # hello
```

## Templates and Macros

### Templates

```nim
# Template = macro-like, expanded at compile time
template times2(x: untyped): untyped = (x) * 2
echo times2(21)  # 42
```

### Macros {.row-span-2} {.col-span-2}

```nim
import std/macros

macro dbg(expr: untyped): untyped =
  # prints both the expression and its value
  result = quote do:
    echo astToStr(`expr`), " = ", `expr`

let x = 10
dbg(x * 2)
# prints: x * 2 = 20
```
