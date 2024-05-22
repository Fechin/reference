---
title: Nim
date: 2024-05-15 8:03:44
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

### Helloworld.nim

```nim
echo "Hello World!"
#---------------------------#
# This is a comment
echo "What's your name? "
var name: string = readLine(stdin)
echo "Hi, ", name, "!"
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

```

### Variable declaration

```nim

var
  letter: char = 'n'
  lang = "N" & "im"
  nLength: int = len(lang)
  boat: float
  truth: bool = false
  b = 7
  c = -11
  d = "Hello"
  e = '!'
```

### Let

```nim
# Use let to declare and bind variables
let
  legs = 400
 #legs is immutable.
  arms = 2_000
  # are ignored and are useful for long numbers.
  aboutPi = 3.15
  let input = readLine(stdin)  # works
```

### Const

```nim
# Constants are computed at compile
const
  debug = true
   # performance and is useful in compile time expressions.
  compileBadCode = false
```

Basic data types

---

### Integers

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

### Floats

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

### Strings

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

### Characters

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

### Special characters

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

### Boolean

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

## Opatators

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

## Control flow

### If statement

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

### Case statement

```nim
let name = readLine(stdin)
case name
of "":
  echo "Poor soul, you lost your name?"
of "name":
  echo "Very funny, your name is name."
of "Dave", "Frank":
  echo "Cool name!"
else:
  echo "Hi, ", name, "!"

```

### While statement

```nim
echo "What's your name? "
var name = readLine(stdin)
while name == "":
  echo "Please tell me your name: "
  name = readLine(stdin) # no `var`, because we do not declare a new variable here
```

### For statement

```nim
echo "Counting to ten: "
for i in countup(1, 10):
  echo i
# --> Outputs 1 2 3 4 5 6 7 8 9 10 on different lines
```

### Scopes and the block statement

```nim
while false:
  var x = "hi"
echo x # does not work
#-----------------------#
block myblock:
  var x = "hi"
echo x # does not work either
```

### Break statement

```nim
block myblock:
  echo "entering block"
  while true:
    echo "looping"
    break # leaves the loop, but not the block
  echo "still in block"
echo "outside the block"

```

### Continue statement

```nim
for i in 1 .. 5:
  if i <= 3: continue
  echo i # will only print 4 and 5
```

### When statement

```nim
  when system.hostOS == "windows":
  echo "running on Windows!"
elif system.hostOS == "linux":
  echo "running on Linux!"
elif system.hostOS == "macosx":
  echo "running on Mac OS X!"
else:
  echo "unknown operating system"
```

### Statements and indentation

```nim
# no indentation needed for single-assignment statement:
if x: x = false

# indentation needed for nested if statement:
if x:
  if y:
    y = false
  else:
    y = true

# indentation needed, because two statements follow the condition:
if x:
  x = false
  y = false
```

### Procedures

```nim
proc yes(question: string): bool =
  echo question, " (y/n)"
  while true:
    case readLine(stdin)
    of "y", "Y", "yes", "Yes": return true
    of "n", "N", "no", "No": return false
    else: echo "Please be clear: yes or no"

if yes("Should I delete all your important files?"):
  echo "I'm sorry Dave, I'm afraid I can't do that."
else:
  echo "I think you know what the problem is just as well as I do."
```

### Result variable

```nim
proc sumTillNegative(x: varargs[int]): int =
  for i in x:
    if i < 0:
      return
    result = result + i

echo sumTillNegative() # echoes 0
echo sumTillNegative(3, 4, 5) # echoes 12
echo sumTillNegative(3, 4 , -1 , 6) # echoes 7
```

### Parameters

```nim
proc printSeq(s: seq, nprinted: int = -1) =
  var nprinted = if nprinted == -1: s.len else: min(nprinted, s.len)
  for i in 0 ..< nprinted:
    echo s[i]
#------------------- #
proc divmod(a, b: int; res, remainder: var int) =
  res = a div b        # integer division
  remainder = a mod b  # integer modulo operation

var
  x, y: int
divmod(8, 5, x, y) # modifies x and y
echo x
echo y
```

### Discard statement

```nim
discard yes("May I ask a pointless question?")

proc p(x, y: int): int {.discardable.} =
  return x + y

p(3, 4) # now valid
```

### Named arguments

```nim
proc createWindow(x, y, width, height: int; title: string;  show: bool): Window = ...

var w = createWindow(show = true, title = "My Application", x = 0, y = 0, height = 600, width = 800)

var w = createWindow(0, 0, title = "My Application",
                     height = 600, width = 800, true)
```

### Default values

```nim
proc createWindow(x = 0, y = 0, width = 500, height = 700,
                  title = "unknown",
                  show = true): Window =


var w = createWindow(title = "My Application", height = 600, width = 800)
```

### Overloaded procedures

```nim
proc toString(x: int): string =
  result =
    if x < 0: "negative"
    elif x > 0: "positive"
    else: "zero"

proc toString(x: bool): string =
  result =
    if x: "yep"
    else: "nope"

assert toString(13) == "positive"
 # calls the toString(x: int) proc
assert toString(true) == "yep"
 # calls the toString(x: bool) proc
```

### Forward declarations

```nim
proc odd(n: int): bool =
  assert(n >= 0) # makes sure we don't run into negative recursion
  if n == 0: false
  else:
    n == 1 or even(n-1)

proc even(n: int): bool =
  assert(n >= 0) # makes sure we don't run into negative recursion
  if n == 1: false
  else:
    n == 0 or odd(n-1)
```

### Iterators

```nim
echo "Counting to ten: "
for i in countup(1, 10):
  echo i

proc countup(a, b: int): int =
  var res = a
  while res <= b:
    return res
    inc(res)

iterator countup(a, b: int): int =
  var res = a
  while res <= b:
    yield res
    inc(res)
```

### Type Conversion

```nim
var
  x: int32 = 1.int32   # same as calling int32(1)
  y: int8  = int8('a') # 'a' == 97'i8
  z: float = 2.5       # int(2.5) rounds down to 2
  sum: int = int(x) + int(y) + int(z) # sum == 100
```

### Internal type representation

```nim
var
  myBool = true
  myCharacter = 'n'
  myString = "nim"
  myInteger = 42
  myFloat = 3.14
echo myBool, ":", repr(myBool)
# --> true:true
echo myCharacter, ":", repr(myCharacter)
# --> n:'n'
echo myString, ":", repr(myString)
# --> nim:0x10fa8c050"nim"
echo myInteger, ":", repr(myInteger)
# --> 42:42
echo myFloat, ":", repr(myFloat)
# --> 3.14:3.14
```

### Enumerations

```nim
type
  Direction = enum
    north, east, south, west

var x = south
# `x` is of type `Direction`; its value is `south`
#prints "south"
echo x
```

### Ordinal types

| Operation  |                            Comment                            |
| :--------- | :-----------------------------------------------------------: |
| ord(x)     | returns the integer value that is used to represent x's value |
| inc(x)     |                      increments x by one                      |
| inc(x, n)  |              increments x by n; n is an integer               |
| dec(x)     |                      decrements x by one                      |
| dec(x, n)  |              decrements x by n; n is an integer               |
| succ(x)    |                  returns the successor of x                   |
| succ(x, n) |                returns the n'th successor of x                |
| pred(x)    |                 returns the predecessor of x                  |
| pred(x, n) |               returns the n'th predecessor of x               |

### Subranges

```nim
type
  MySubrange = range[0..5]
```

### Sets

```nim
  var s: set[int64]
  # Error: set is too large; use `std/sets` for ordinal types
  # with more than 2^16 elements
 type
  CharSet = set[char]
var
  x: CharSet
x = {'a'..'z', '0'..'9'}
 # This constructs a set that contains the
 # letters from 'a' to 'z' and the digits
 # from '0' to '9'
```

### Bit fields

```nim
type
 MyFlag* {.size: sizeof(cint).} = enum
   A
   B
   C
   D
 MyFlags = set[MyFlag]

proc toNum(f: MyFlags): int = cast[cint](f)
proc toFlags(v: int): MyFlags = cast[MyFlags](v)

assert toNum({}) == 0
assert toNum({A}) == 1
assert toNum({D}) == 8
assert toNum({A, C}) == 5
assert toFlags(0) == {}
assert toFlags(7) == {A, B, C}
```

### Arrays

```nim
type
  IntArray = array[0..5, int] # an array that is indexed with 0..5
var
  x: IntArray
x = [1, 2, 3, 4, 5, 6]
for i in low(x) .. high(x):
  echo x[i]
```

### Sequences

```nim
  var
  x: seq[int] # a reference to a sequence of integers
x = @[1, 2, 3, 4, 5, 6] # the @ turns the array into a sequence allocated on the heap
for value in @[3, 4, 5]:
  echo value
# --> 3
# --> 4
# --> 5

for i, value in @[3, 4, 5]:
  echo "index: ", $i, ", value:", $value
# --> index: 0, value:3
# --> index: 1, value:4
# --> index: 2, value:5
```

### Open arrays

```nim
var
  fruits:   seq[string]
 # reference to a sequence of strings that is initialized with '@[]'
  capitals: array[3, string]

 # array of strings with a fixed size

capitals = ["New York", "London", "Berlin"]
 # array 'capitals' allows assignment of only three elements
fruits.add("Banana")
 # sequence 'fruits' is dynamically expandable during runtime
fruits.add("Mango")

proc openArraySize(oa: openArray[string]): int =
  oa.len

assert openArraySize(fruits) == 2
  # procedure accepts a sequence as parameter
assert openArraySize(capitals) == 3
  # but also an array type
```

### Varargs

```nim
proc myWriteln(f: File, a: varargs[string]) =
  for s in items(a):
    write(f, s)
  write(f, "\n")

myWriteln(stdout, "abc", "def", "xyz")
# is transformed by the compiler to:
myWriteln(stdout, ["abc", "def", "xyz"])
```

### Slices

```nim
var
  a = "Nim is a programming language"
  b = "Slices are useless."

echo a[7 .. 12] # --> 'a prog'
b[11 .. ^2] = "useful"
echo b # --> 'Slices are useful.'
```

### Objects

```nim
type
  Person = object
    name: string
    age: int

var person1 = Person(name: "Peter", age: 30)

echo person1.name # "Peter"
echo person1.age  # 30

var person2 = person1 # copy of person 1

person2.age += 14

echo person1.age # 30
echo person2.age # 44


# the order may be changed
let person3 = Person(age: 12, name: "Quentin")

# not every member needs to be specified
let person4 = Person(age: 3)
# unspecified members will be initialized with their default
# values. In this case it is the empty string.
doAssert person4.name == ""
```

### Tuples

```nim
type
  Person = tuple
    name: string
    age: int

  PersonX = tuple[name: string, age: int]

  PersonY = (string, int)

var
  person: Person
  personX: PersonX
  personY: PersonY

person = (name: "Peter", age: 30)
# Person and PersonX are equivalent
personX = person

# Create a tuple with anonymous fields:
personY = ("Peter", 30)

person = personY
personY = person

person = ("Peter", 30)

echo person.name # "Peter"
echo person.age  # 30

echo person[0] # "Peter"
echo person[1] # 30

var building: tuple[street: string, number: int]
building = ("Rue del Percebe", 13)
echo building.street

```

### Reference and pointer types

```nim
type
  Node = ref object
    le, ri: Node
    data: int

var n = Node(data: 9)
echo n.data
# no need to write n[].data; in fact n[].data is highly discouraged!
```

### Procedural type

```nim
proc greet(name: string): string =
  "Hello, " & name & "!"

proc bye(name: string): string =
  "Goodbye, " & name & "."

proc communicate(greeting: proc (x: string): string, name: string) =
  echo greeting(name)

communicate(greet, "John")
communicate(bye, "Mary")
```

### Modules

```nim
# Module A
var
  x*, y: int

proc `*` *(a, b: seq[int]): seq[int] =
  # allocate a new sequence:
  newSeq(result, len(a))
  # multiply two int sequences:
  for i in 0 ..< len(a): result[i] = a[i] * b[i]

when isMainModule:
  # test the new `*` operator for sequences:
  assert(@[1, 2, 3] * @[1, 2, 3] == @[1, 4, 9])


```

### Excluding symbols

```nim
import mymodule except y

# From statement
from mymodule import x, y, z
from mymodule import x, y, z

x()
  # use x without any qualification

#Include statement
include fileA, fileB, fileC

```

### Inheritance

```nim
type
  Person = ref object of RootObj
    name*: string  # the * means that `name` is accessible from other modules
    age: int       # no * means that the field is hidden from other modules

  Student = ref object of Person # Student inherits from Person
    id: int                      # with an id field

var
  student: Student
  person: Person
assert(student of Student) # is true
# object construction:
student = Student(name: "Anton", age: 5, id: 2)
echo student[]
```

### Mutually recursive types

```nim
type
  Node = ref object
 # a reference to an object with the following field:
    le, ri: Node
   # left and right subtrees
    sym: ref Sym
  # leaves contain a reference to a Sym

  Sym = object
    # a symbol
    name: string
     # the symbol's name
    line: int
   # the line the symbol was declared in
    code: Node
    # the symbol's abstract syntax tree
```

### Object variants

```nim
# This is an example how an abstract syntax tree could be modelled in Nim
type
  NodeKind = enum  # the different node types
    nkInt,          # a leaf with an integer value
    nkFloat,        # a leaf with a float value
    nkString,       # a leaf with a string value
    nkAdd,          # an addition
    nkSub,          # a subtraction
    nkIf            # an if statement
  Node = ref object
    case kind: NodeKind  # the `kind` field is the discriminator
    of nkInt: intVal: int
    of nkFloat: floatVal: float
    of nkString: strVal: string
    of nkAdd, nkSub:
      leftOp, rightOp: Node
    of nkIf:
      condition, thenPart, elsePart: Node

var n = Node(kind: nkFloat, floatVal: 1.0)
# the following statement raises an `FieldDefect` exception, because
# n.kind's value does not fit:
n.strVal = ""
```

### Method call syntax

```nim
import std/strutils

echo "abc".len # is the same as echo len("abc")
echo "abc".toUpperAscii()
echo({'a', 'b', 'c'}.card)
stdout.writeLine("Hallo") # the same as writeLine(stdout, "Hallo")
##############################
import std/[strutils, sequtils]

stdout.writeLine("Give a list of numbers (separated by spaces): ")
stdout.write(stdin.readLine.splitWhitespace.map(parseInt).max.`$`)
stdout.writeLine(" is the maximum!")
```

### Properties

```nim
type
  Socket* = ref object of RootObj
    h: int # cannot be accessed from the outside of the module due to missing star

proc `host=`*(s: var Socket, value: int) {.inline.} =
  ## setter of host address
  s.h = value

proc host*(s: Socket): int {.inline.} =
  ## getter of host address
  s.h

var s: Socket
new s
s.host = 34  # same as `host=`(s, 34)

type
  Vector* = object
    x, y, z: float

proc `[]=`* (v: var Vector, i: int, value: float) =
  # setter
  case i
  of 0: v.x = value
  of 1: v.y = value
  of 2: v.z = value
  else: assert(false)

proc `[]`* (v: Vector, i: int): float =
  # getter
  case i
  of 0: result = v.x
  of 1: result = v.y
  of 2: result = v.z
  else: assert(false)
```

### Dynamic dispatch

```nim
type
  Expression = ref object of RootObj ## abstract base class for an expression
  Literal = ref object of Expression
    x: int
  PlusExpr = ref object of Expression
    a, b: Expression

# watch out: 'eval' relies on dynamic binding
method eval(e: Expression): int {.base.} =
  # override this base method
  quit "to override!"

method eval(e: Literal): int = e.x
method eval(e: PlusExpr): int = eval(e.a) + eval(e.b)

proc newLit(x: int): Literal = Literal(x: x)
proc newPlus(a, b: Expression): PlusExpr = PlusExpr(a: a, b: b)

echo eval(newPlus(newPlus(newLit(1), newLit(2)), newLit(4)))
```

### Raise statement

```nim
var
  e: ref OSError
new(e)
e.msg = "the request to the OS failed"
raise e

raise newException(OSError, "the request to the OS failed")
```

### Try statement

```nim
from std/strutils import parseInt

# read the first two lines of a text file that should contain numbers
# and tries to add them
var
  f: File
if open(f, "numbers.txt"):
  try:
    let a = readLine(f)
    let b = readLine(f)
    echo "sum: ", parseInt(a) + parseInt(b)
  except OverflowDefect:
    echo "overflow!"
  except ValueError:
    echo "could not convert string to integer"
  except IOError:
    echo "IO error!"
  except CatchableError:
    echo "Unknown exception!"
    # reraise the unknown exception:
    raise
  finally:
    close(f)
```

### Annotating procs with raised exceptions

```nim
proc complexProc() {.raises: [IOError, ArithmeticDefect].} =


proc simpleProc() {.raises: [].} =
  ...
```

### Generics

```nim
 type
  BinaryTree*[T] = ref object # BinaryTree is a generic type with
                              # generic param `T`
    le, ri: BinaryTree[T]     # left and right subtrees; may be nil
    data: T                   # the data stored in a node

proc newNode*[T](data: T): BinaryTree[T] =
  # constructor for a node
  new(result)
  result.data = data

proc add*[T](root: var BinaryTree[T], n: BinaryTree[T]) =
  # insert a node into the tree
  if root == nil:
    root = n
  else:
    var it = root
    while it != nil:
      # compare the data items; uses the generic `cmp` proc
      # that works for any type that has a `==` and `<` operator
      var c = cmp(it.data, n.data)
      if c < 0:
        if it.le == nil:
          it.le = n
          return
        it = it.le
      else:
        if it.ri == nil:
          it.ri = n
          return
        it = it.ri

proc add*[T](root: var BinaryTree[T], data: T) =
  # convenience proc:
  add(root, newNode(data))

iterator preorder*[T](root: BinaryTree[T]): T =
  # Preorder traversal of a binary tree.
  # This uses an explicit stack (which is more efficient than
  # a recursive iterator factory).
  var stack: seq[BinaryTree[T]] = @[root]
  while stack.len > 0:
    var n = stack.pop()
    while n != nil:
      yield n.data
      add(stack, n.ri)  # push right subtree onto the stack
      n = n.le          # and follow the left pointer

var
  root: BinaryTree[string] # instantiate a BinaryTree with `string`
add(root, newNode("hello")) # instantiates `newNode` and `add`
add(root, "world")          # instantiates the second `add` proc
for str in preorder(root):
  stdout.writeLine(str)
```

### Templates

```nim
template `!=` (a, b: untyped): untyped =
  # this definition exists in the System module
  not (a == b)

assert(5 != 6) # the compiler rewrites that to: assert(not (5 == 6))
#############################################
const
  debug = true

proc log(msg: string) {.inline.} =
  if debug: stdout.writeLine(msg)

var
  x = 4
log("x has the value: " & $x)
####################################
template withFile(f: untyped, filename: string, mode: FileMode,
                  body: untyped) =
  let fn = filename
  var f: File
  if open(f, fn, mode):
    try:
      body
    finally:
      close(f)
  else:
    quit("cannot open: " & fn)

withFile(txt, "ttempl3.txt", fmWrite):
  txt.writeLine("line 1")
  txt.writeLine("line 2")

```

### Static Arguments

```nim
import std/macros

macro myMacro(arg: static[int]): untyped =
  echo arg # just an int (7), not `NimNode`

myMacro(1 + 2 * 3)
```

### Code Blocks as Arguments

```nim
echo "Hello ":
  let a = "Wor"
  let b = "ld!"
  a & b
```

### The Syntax Tree

```nim
dumpTree:
  var mt: MyType = MyType(a:123.456, b:"abcdef")

# output:
#   StmtList
#     VarSection
#       IdentDefs
#         Ident "mt"
#         Ident "MyType"
#         ObjConstr
#           Ident "MyType"
#           ExprColonExpr
#             Ident "a"
#             FloatLit 123.456
#           ExprColonExpr
#             Ident "b"
#             StrLit "abcdef"
```

### Custom Semantic Checking

```nim
macro myAssert(arg: untyped): untyped =
  arg.expectKind nnkInfix
```

### Generating Code

```nim
import std/macros

type
MyType = object
  a: float
  b: string

macro myMacro(arg: untyped): untyped =
var mt: MyType = MyType(a:123.456, b:"abcdef")

#

let mtLit = newLit(mt)

result = quote do:
  echo `arg`
  echo `mtLit`

myMacro("Hallo")
```

### Building Your First Macro

```nim
import std/macros

macro myAssert(arg: untyped): untyped =
  # all node kind identifiers are prefixed with "nnk"
  arg.expectKind nnkInfix
  arg.expectLen 3
  # operator as string literal
  let op  = newLit(" " & arg[0].repr & " ")
  let lhs = arg[1]
  let rhs = arg[2]

  result = quote do:
    if not `arg`:
      raise newException(AssertionDefect,$`lhs` & `op` & $`rhs`)

let a = 1
let b = 2

myAssert(a != b)
myAssert(a == b)

```

## Also see

- [Nim Cheat sheet](https://narimiran.github.io/nim-basics/) _(https://narimiran.github.io)_
