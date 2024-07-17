---
title: Python
date: 2020-12-23 18:41:20
background: bg-[#436b97]
tags:
  - script
  - interpret
categories:
  - Programming
intro: |
  The [Python](https://www.python.org/) cheat sheet is a one-page reference sheet for the Python 3 programming language.
plugins:
  - copyCode
---

## Getting Started

### Introduction

- [Python](https://www.python.org/) _(python.org)_
- [Python Document](https://docs.python.org/3/index.html) _(docs.python.org)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/python/) _(learnxinyminutes.com)_
- [Regex in python](/regex#regex-in-python) _(cheatsheets.zip)_

### Hello World

```python
>>> print("Hello, World!")
Hello, World!
```

The famous "Hello World" program in Python

### Variables

```python
age = 18      # age is of type int
name = "John" # name is now of type str
print(name)
```

Python can't declare a variable without assignment.

### Data Types {.row-span-2}

|                                    |          |
| ---------------------------------- | -------- |
| `str`                              | Text     |
| `int`, `float`, `complex`          | Numeric  |
| `list`, `tuple`, `range`           | Sequence |
| `dict`                             | Mapping  |
| `set`, `frozenset`                 | Set      |
| `bool`                             | Boolean  |
| `bytes`, `bytearray`, `memoryview` | Binary   |

See: [Data Types](#python-built-in-data-types)

### Slicing String

```python
>>> msg = "Hello, World!"
>>> print(msg[2:5])
llo
```

See: [Strings](#python-strings)

### Lists

```python
mylist = []
mylist.append(1)
mylist.append(2)
for item in mylist:
    print(item) # prints out 1,2
```

See: [Lists](#python-lists)

### If Else

```python
num = 200
if num > 0:
    print("num is greater than 0")
else:
    print("num is not greater than 0")
```

See: [Flow control](#python-flow-control)

### Loops

```python
for item in range(6):
    if item == 3: break
    print(item)
else:
    print("Finally finished!")
```

See: [Loops](#python-loops)

### Functions

```python
>>> def my_function():
...     print("Hello from a function")
...
>>> my_function()
Hello from a function
```

See: [Functions](#python-functions)

### File Handling {.col-span-2}

```python
with open("myfile.txt", "r", encoding='utf8') as file:
    for line in file:
        print(line)
```

See: [File Handling](#python-file-handling)

### Arithmetic

```python
result = 10 + 30 # => 40
result = 40 - 10 # => 30
result = 50 * 5  # => 250
result = 16 / 4  # => 4.0 (Float Division)
result = 16 // 4 # => 4 (Integer Division)
result = 25 % 2  # => 1
result = 5 ** 3  # => 125
```

The `/` means quotient of x and y, and the `//` means floored quotient of x and y, also see
[StackOverflow](https://stackoverflow.com/a/183870/13192320)

### Plus-Equals

```python
counter = 0
counter += 10           # => 10
counter = 0
counter = counter + 10  # => 10

message = "Part 1."

# => Part 1.Part 2.
message += "Part 2."
```

### f-Strings (Python 3.6+)

```python
>>> website = 'cheatsheets.zip'
>>> f"Hello, {website}"
"Hello, cheatsheets.zip"

>>> num = 10
>>> f'{num} + 10 = {num + 10}'
'10 + 10 = 20'
```

See: [Python F-Strings](#python-f-strings-since-python-3-6)

## Python Built-in Data Types

### Strings

```python
hello = "Hello World"
hello = 'Hello World'

multi_string = """Multiline Strings
Lorem ipsum dolor sit amet,
consectetur adipiscing elit """
```

See: [Strings](#python-strings)

### Numbers

```python
x = 1    # int
y = 2.8  # float
z = 1j   # complex

>>> print(type(x))
<class 'int'>
```

### Booleans

```python
my_bool = True
my_bool = False

bool(0)     # => False
bool(1)     # => True
```

### Lists

```python
list1 = ["apple", "banana", "cherry"]
list2 = [True, False, False]
list3 = [1, 5, 7, 9, 3]
list4 = list((1, 5, 7, 9, 3))
```

See: [Lists](#python-lists)

### Tuple

```python
my_tuple = (1, 2, 3)
my_tuple = tuple((1, 2, 3))
```

Similar to List but immutable

### Set

```python
set1 = {"a", "b", "c"}
set2 = set(("a", "b", "c"))
```

Set of unique items/objects

### Dictionary

```python {.wrap}
>>> empty_dict = {}
>>> a = {"one": 1, "two": 2, "three": 3}
>>> a["one"]
1
>>> a.keys()
dict_keys(['one', 'two', 'three'])
>>> a.values()
dict_values([1, 2, 3])
>>> a.update({"four": 4})
>>> a.keys()
dict_keys(['one', 'two', 'three', 'four'])
>>> a['four']
4
```

Key: Value pair, JSON like object

### Casting

#### Integers

```python
x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3
```

#### Floats

```python
x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2
```

#### Strings

```python
x = str("s1") # x will be 's1'
y = str(2)    # y will be '2'
z = str(3.0)  # z will be '3.0'
```

## Python Advanced Data Types

### Heaps {.col-span-2 .row-span-3}

```python
import heapq

myList = [9, 5, 4, 1, 3, 2]
heapq.heapify(myList) # turn myList into a Min Heap
print(myList)    # => [1, 3, 2, 5, 9, 4]
print(myList[0]) # first value is always the smallest in the heap

heapq.heappush(myList, 10) # insert 10
x = heapq.heappop(myList)  # pop and return smallest item
print(x)                   # => 1
```

#### Negate all values to use Min Heap as Max Heap

```python
myList = [9, 5, 4, 1, 3, 2]
myList = [-val for val in myList] # multiply by -1 to negate
heapq.heapify(myList)

x = heapq.heappop(myList)
print(-x) # => 9 (making sure to multiply by -1 again)
```

Heaps are binary trees for which every parent node has a value less than or equal to any of its children. Useful for
accessing min/max value quickly. Time complexity: O(n) for heapify, O(log n) push and pop. See:
[Heapq](https://docs.python.org/3/library/heapq.html)

### Stacks and Queues {.row-span-3}

```python
from collections import deque

q = deque()          # empty
q = deque([1, 2, 3]) # with values

q.append(4)     # append to right side
q.appendleft(0) # append to left side
print(q)    # => deque([0, 1, 2, 3, 4])

x = q.pop() # remove & return from right
y = q.popleft() # remove & return from left
print(x)    # => 4
print(y)    # => 0
print(q)    # => deque([1, 2, 3])

q.rotate(1) # rotate 1 step to the right
print(q)    # => deque([3, 1, 2])
```

Deque is a double-ended queue with O(1) time for append/pop operations from both sides. Used as stacks and queues. See:
[Deque](https://docs.python.org/3/library/collections.html#collections.deque)

## Python Strings

### Array-like

```python
>>> hello = "Hello, World"
>>> print(hello[1])
e
>>> print(hello[-1])
d
```

Get the character at position 1 or last

### Looping

```python
>>> for char in "foo":
...     print(char)
f
o
o
```

Loop through the letters in the word "foo"

### Slicing string {.row-span-4}

```java
 ┌───┬───┬───┬───┬───┬───┬───┐
 | m | y | b | a | c | o | n |
 └───┴───┴───┴───┴───┴───┴───┘
 0   1   2   3   4   5   6   7
-7  -6  -5  -4  -3  -2  -1
```

---

```python
>>> s = 'mybacon'
>>> s[2:5]
'bac'
>>> s[0:2]
'my'
```

```python
>>> s = 'mybacon'
>>> s[:2]
'my'
>>> s[2:]
'bacon'
>>> s[:2] + s[2:]
'mybacon'
>>> s[:]
'mybacon'
```

```python
>>> s = 'mybacon'
>>> s[-5:-1]
'baco'
>>> s[2:6]
'baco'
```

#### With a stride

```python
>>> s = '12345' * 5
>>> s
'1234512345123451234512345'
>>> s[::5]
'11111'
>>> s[4::5]
'55555'
>>> s[::-5]
'55555'
>>> s[::-1]
'5432154321543215432154321'
```

### String Length

```python
>>> hello = "Hello, World!"
>>> print(len(hello))
13
```

The len() function returns the length of a string

### Multiple copies

```python
>>> s = '===+'
>>> n = 8
>>> s * n
'===+===+===+===+===+===+===+===+'
```

### Check String

```python
>>> s = 'spam'
>>> s in 'I saw spamalot!'
True
>>> s not in 'I saw The Holy Grail!'
True

```

### Concatenates

```python
>>> s = 'spam'
>>> t = 'egg'
>>> s + t
'spamegg'
>>> 'spam' 'egg'
'spamegg'
```

### Formatting {.col-span-2}

```python
name = "John"
print("Hello, %s!" % name)
```

```python
name = "John"
age = 23
print("%s is %d years old." % (name, age))
```

#### format() Method

```python
txt1 = "My name is {fname}, I'm {age}".format(fname="John", age=36)
txt2 = "My name is {0}, I'm {1}".format("John", 36)
txt3 = "My name is {}, I'm {}".format("John", 36)
```

### Input

```python
>>> name = input("Enter your name: ")
Enter your name: Tom
>>> name
'Tom'
```

Get input data from console

### Join

```python
>>> "#".join(["John", "Peter", "Vicky"])
'John#Peter#Vicky'
```

### Endswith

```python
>>> "Hello, world!".endswith("!")
True
```

## Python F-Strings (Since Python 3.6+)

### f-Strings usage

```python
>>> website = 'cheatsheets.zip'
>>> f"Hello, {website}"
"Hello, cheatsheets.zip"

>>> num = 10
>>> f'{num} + 10 = {num + 10}'
'10 + 10 = 20'

>>> f"""He said {"I'm John"}"""
"He said I'm John"

>>> f'5 {"{stars}"}'
'5 {stars}'
>>> f'{{5}} {"stars"}'
'{5} stars'

>>> name = 'Eric'
>>> age = 27
>>> f"""Hello!
...     I'm {name}.
...     I'm {age}."""
"Hello!\n    I'm Eric.\n    I'm 27."
```

it is available since Python 3.6, also see:
[Formatted string literals](https://docs.python.org/3/reference/lexical_analysis.html#f-strings)

### f-Strings Fill Align

```python
>>> f'{"text":10}'     # [width]
'text      '
>>> f'{"test":*>10}'   # fill left
'******test'
>>> f'{"test":*<10}'   # fill right
'test******'
>>> f'{"test":*^10}'   # fill center
'***test***'
>>> f'{12345:0>10}'    # fill with numbers
'0000012345'
```

### f-Strings Type

```python
>>> f'{10:b}'        # binary type
'1010'
>>> f'{10:o}'        # octal type
'12'
>>> f'{200:x}'       # hexadecimal type
'c8'
>>> f'{200:X}'
'C8'
>>> f'{345600000000:e}' # scientific notation
'3.456000e+11'
>>> f'{65:c}'       # character type
'A'
>>> f'{10:#b}'      # [type] with notation (base)
'0b1010'
>>> f'{10:#o}'
'0o12'
>>> f'{10:#x}'
'0xa'
```

### F-Strings Others

```python
>>> f'{-12345:0=10}'  # negative numbers
'-000012345'
>>> f'{12345:010}'    # [0] shortcut (no align)
'0000012345'
>>> f'{-12345:010}'
'-000012345'
>>> import math       # [.precision]
>>> math.pi
3.141592653589793
>>> f'{math.pi:.2f}'
'3.14'
>>> f'{1000000:,.2f}' # [grouping_option]
'1,000,000.00'
>>> f'{1000000:_.2f}'
'1_000_000.00'
>>> f'{0.25:0%}'      # percentage
'25.000000%'
>>> f'{0.25:.0%}'
'25%'
```

### F-Strings Sign

```python
>>> f'{12345:+}'      # [sign] (+/-)
'+12345'
>>> f'{-12345:+}'
'-12345'
>>> f'{-12345:+10}'
'    -12345'
>>> f'{-12345:+010}'
'-000012345'
```

## Python Lists

### Defining

```python
>>> li1 = []
>>> li1
[]
>>> li2 = [4, 5, 6]
>>> li2
[4, 5, 6]
>>> li3 = list((1, 2, 3))
>>> li3
[1, 2, 3]
>>> li4 = list(range(1, 11))
>>> li4
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Generate {.col-span-2}

```python
>>> list(filter(lambda x : x % 2 == 1, range(1, 20)))
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

>>> [x ** 2 for x in range (1, 11) if  x % 2 == 1]
[1, 9, 25, 49, 81]

>>> [x for x in [3, 4, 5, 6, 7] if x > 5]
[6, 7]

>>> list(filter(lambda x: x > 5, [3, 4, 5, 6, 7]))
[6, 7]
```

### Append

```python
>>> li = []
>>> li.append(1)
>>> li
[1]
>>> li.append(2)
>>> li
[1, 2]
>>> li.append(4)
>>> li
[1, 2, 4]
>>> li.append(3)
>>> li
[1, 2, 4, 3]
```

### List Slicing {.col-span-2 .row-span-3}

Syntax of list slicing:

```python
a_list[start:end]
a_list[start:end:step]
```

#### Slicing

```python
>>> a = ['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[2:5]
['bacon', 'tomato', 'ham']
>>> a[-5:-2]
['egg', 'bacon', 'tomato']
>>> a[1:4]
['egg', 'bacon', 'tomato']
```

#### Omitting index

```python
>>> a[:4]
['spam', 'egg', 'bacon', 'tomato']
>>> a[0:4]
['spam', 'egg', 'bacon', 'tomato']
>>> a[2:]
['bacon', 'tomato', 'ham', 'lobster']
>>> a[2:len(a)]
['bacon', 'tomato', 'ham', 'lobster']
>>> a
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[:]
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
```

#### With a stride

```python
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[0:6:2]
['spam', 'bacon', 'ham']
>>> a[1:6:2]
['egg', 'tomato', 'lobster']
>>> a[6:0:-2]
['lobster', 'tomato', 'egg']
>>> a
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[::-1]
['lobster', 'ham', 'tomato', 'bacon', 'egg', 'spam']
```

### Remove

```python
>>> li = ['bread', 'butter', 'milk']
>>> li.pop()
'milk'
>>> li
['bread', 'butter']
>>> del li[0]
>>> li
['butter']
```

### Access

```python
>>> li = ['a', 'b', 'c', 'd']
>>> li[0]
'a'
>>> li[-1]
'd'
>>> li[4]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```

### Concatenating {.row-span-2}

```python
>>> odd = [1, 3, 5]
>>> odd.extend([9, 11, 13])
>>> odd
[1, 3, 5, 9, 11, 13]
>>> odd = [1, 3, 5]
>>> odd + [9, 11, 13]
[1, 3, 5, 9, 11, 13]
```

### Sort & Reverse {.row-span-2}

```python
>>> li = [3, 1, 3, 2, 5]
>>> li.sort()
>>> li
[1, 2, 3, 3, 5]
>>> li.reverse()
>>> li
[5, 3, 3, 2, 1]
```

### Count

```python
>>> li = [3, 1, 3, 2, 5]
>>> li.count(3)
2
```

### Repeating

```python
>>> li = ["re"] * 3
>>> li
['re', 're', 're']
```

## Python Flow control

### Basic

```python
num = 5
if num > 10:
    print("num is totally bigger than 10.")
elif num < 10:
    print("num is smaller than 10.")
else:
    print("num is indeed 10.")
```

### One line

```python
>>> a = 330
>>> b = 200
>>> r = "a" if a > b else "b"
>>> print(r)
a
```

### else if

```python
value = True
if not value:
    print("Value is False")
elif value is None:
    print("Value is None")
else:
    print("Value is True")
```

### match case

```python
x = 1
match x:
  case 0:
    print("zero")
  case 1:
    print("one")
  case _:
    print("multiple")
```

## Python Loops

### Basic

```python
primes = [2, 3, 5, 7]
for prime in primes:
    print(prime)
```

Prints: 2 3 5 7

### With index

```python
animals = ["dog", "cat", "mouse"]
# enumerate() adds counter to an iterable
for i, value in enumerate(animals):
    print(i, value)
```

Prints: 0 dog 1 cat 2 mouse

### While

```python
x = 0
while x < 4:
    print(x)
    x += 1  # Shorthand for x = x + 1
```

Prints: 0 1 2 3

### Break

```python
x = 0
for index in range(10):
    x = index * 10
    if index == 5:
    	break
    print(x)
```

Prints: 0 10 20 30 40

### Continue

```python
for index in range(3, 8):
    x = index * 10
    if index == 5:
    	continue
    print(x)
```

Prints: 30 40 60 70

### Range

```python
for i in range(4):
    print(i) # Prints: 0 1 2 3

for i in range(4, 8):
    print(i) # Prints: 4 5 6 7

for i in range(4, 10, 2):
    print(i) # Prints: 4 6 8
```

### With zip()

```python
words = ['Mon', 'Tue', 'Wed']
nums = [1, 2, 3]
# Use zip to pack into a tuple list
for w, n in zip(words, nums):
    print('%d:%s, ' %(n, w))
```

Prints: 1:Mon, 2:Tue, 3:Wed,

### for/else

```python
nums = [60, 70, 30, 110, 90]
for n in nums:
    if n > 100:
        print("%d is bigger than 100" %n)
        break
else:
    print("Not found!")
```

Also see: [Python Tips](https://book.pythontips.com/en/latest/for_-_else.html)

## Python Functions

### Basic

```python
def hello_world():
    print('Hello, World!')
```

### Return

```python
def add(x, y):
    print("x is %s, y is %s" %(x, y))
    return x + y

add(5, 6)    # => 11
```

### Positional arguments

```python
def varargs(*args):
    return args

varargs(1, 2, 3)  # => (1, 2, 3)
```

Type of "args" is tuple.

### Keyword arguments

```python
def keyword_args(**kwargs):
    return kwargs

# => {"big": "foot", "loch": "ness"}
keyword_args(big="foot", loch="ness")
```

Type of "kwargs" is dict.

### Returning multiple

```python
def swap(x, y):
    return y, x

x = 1
y = 2
x, y = swap(x, y)  # => x = 2, y = 1
```

### Default Value

```python
def add(x, y=10):
    return x + y

add(5)      # => 15
add(5, 20)  # => 25
```

### Anonymous functions

```python
# => True
(lambda x: x > 2)(3)

# => 5
(lambda x, y: x ** 2 + y ** 2)(2, 1)
```

## Python Modules

### Import modules

```python
import math
print(math.sqrt(16))  # => 4.0
```

### From a module

```python
from math import ceil, floor
print(ceil(3.7))   # => 4.0
print(floor(3.7))  # => 3.0
```

### Import all

```python
from math import *
```

### Shorten module

```python
import math as m

# => True
math.sqrt(16) == m.sqrt(16)
```

### Functions and attributes

```python
import math
dir(math)
```

## Python File Handling

### Read file

#### Line by line

```python
with open("myfile.txt") as file:
    for line in file:
        print(line)
```

#### With line number

```python
file = open('myfile.txt', 'r')
for i, line in enumerate(file, start=1):
    print("Number %s: %s" % (i, line))
```

### String

#### Write a string

```python
contents = {"aa": 12, "bb": 21}
with open("myfile1.txt", "w+") as file:
    file.write(str(contents))
```

#### Read a string

```python
with open('myfile1.txt', "r+") as file:
    contents = file.read()
print(contents)
```

### Object

#### Write an object

```python
contents = {"aa": 12, "bb": 21}
with open("myfile2.txt", "w+") as file:
    file.write(json.dumps(contents))
```

#### Read an object

```python
with open('myfile2.txt', "r+") as file:
    contents = json.load(file)
print(contents)
```

### Delete a File

```python
import os
os.remove("myfile.txt")
```

### Check and Delete

```python
import os
if os.path.exists("myfile.txt"):
    os.remove("myfile.txt")
else:
    print("The file does not exist")
```

### Delete Folder

```python
import os
os.rmdir("myfolder")
```

## Python Classes & Inheritance

### Defining

```python
class MyNewClass:
    pass

# Class Instantiation
my = MyNewClass()
```

### Constructors

```python
class Animal:
    def __init__(self, voice):
        self.voice = voice

cat = Animal('Meow')
print(cat.voice)    # => Meow

dog = Animal('Woof')
print(dog.voice)    # => Woof
```

### Method

```python
class Dog:

    # Method of the class
    def bark(self):
        print("Ham-Ham")

charlie = Dog()
charlie.bark()   # => "Ham-Ham"
```

### Class Variables {.row-span-2}

```python
class MyClass:
    class_variable = "A class variable!"

# => A class variable!
print(MyClass.class_variable)

x = MyClass()

# => A class variable!
print(x.class_variable)
```

### Super() Function {.row-span-2}

```python
class ParentClass:
    def print_test(self):
        print("Parent Method")

class ChildClass(ParentClass):
    def print_test(self):
        print("Child Method")
        # Calls the parent's print_test()
        super().print_test()
```

---

```python
>>> child_instance = ChildClass()
>>> child_instance.print_test()
Child Method
Parent Method
```

### repr() method

```python
class Employee:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return self.name

john = Employee('John')
print(john)  # => John
```

### User-defined exceptions

```python
class CustomError(Exception):
    pass
```

### Polymorphism

```python
class ParentClass:
    def print_self(self):
        print('A')

class ChildClass(ParentClass):
    def print_self(self):
        print('B')

obj_A = ParentClass()
obj_B = ChildClass()

obj_A.print_self() # => A
obj_B.print_self() # => B
```

### Overriding

```python
class ParentClass:
    def print_self(self):
        print("Parent")

class ChildClass(ParentClass):
    def print_self(self):
        print("Child")

child_instance = ChildClass()
child_instance.print_self() # => Child
```

### Inheritance

```python
class Animal:
    def __init__(self, name, legs):
        self.name = name
        self.legs = legs

class Dog(Animal):
    def sound(self):
        print("Woof!")

Yoki = Dog("Yoki", 4)
print(Yoki.name) # => YOKI
print(Yoki.legs) # => 4
Yoki.sound()     # => Woof!
```

## Python Type Hints (Since Python 3.5)

### Variable & Parameter

```python
string: str = "ha"
times: int = 3


# wrong hit, but run correctly
result: str = 1 + 2
print(result)  # => 3


def say(name: str, start: str = "Hi"):
    return start + ", " + name

print(say("Python"))  # => Hi, Python
```

### Built-in date type

```python
from typing import Dict, Tuple, List

bill: Dict[str, float] = {
    "apple": 3.14,
    "watermelon": 15.92,
    "pineapple": 6.53,
}
completed: Tuple[str] = ("DONE",)
succeeded: Tuple[int, str] = (1, "SUCCESS")
statuses: Tuple[str, ...] = (
    "DONE", "SUCCESS", "FAILED", "ERROR",
)
codes: List[int] = (0, 1, -1, -2)
```

### Built-in date type (3.10+)

```python
bill: dict[str, float] = {
    "apple": 3.14,
    "watermelon": 15.92,
    "pineapple": 6.53,
}
completed: tuple[str] = ("DONE",)
succeeded: tuple[int, str] = (1, "SUCCESS")
statuses: tuple[str, ...] = (
    "DONE", "SUCCESS", "FAILED", "ERROR",
)
codes: list[int] = (0, 1, -1, -2)
```

### Positional argument

```python
def calc_summary(*args: int):
    return sum(args)

print(calc_summary(3, 1, 4))  # => 8
```

Indicate all arguments' type is int.

### Returned

```python
def say_hello(name) -> str:
    return "Hello, " + name

var = "Python"
print(say_hello(var))  # => Hello, Python
```

### Union returned

```python
from typing import Union

def resp200(meaningful) -> Union[int, str]:
    return "OK" if meaningful else 200
```

Means returned value type may be int or str.

### Keyword argument

```python
def calc_summary(**kwargs: int):
    return sum(kwargs.values())

print(calc_summary(a=1, b=2))  # => 3
```

Indicate all parameters' value type is int.

### Multiple returns

```python
def resp200() -> (int, str):
    return 200, "OK"

returns = resp200()
print(returns)  # => (200, 'OK')
print(type(returns))  # tuple
```

### Union returned (3.10+)

```python
def resp200(meaningful) -> int | str:
    return "OK" if meaningful else 200
```

Since Python 3.10

### Property

```python
class Employee:
    name: str
    age: int

    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.graduated: bool = False
```

### Self instance

```python
class Employee:
    name: str

    def set_name(self, name) -> "Employee":
        self.name = name
        return self

    def copy(self) -> 'Employee':
        return type(self)(self.name)
```

### Self instance (3.11+)

```python
from typing import Self

class Employee:
    name: str
    age: int

    def set_name(self: Self, name) -> Self:
        self.name = name
        return self
```

### Type & Generic {.col-span-2}

```python
from typing import TypeVar, Type

T = TypeVar("T")

# "mapper" is a type, like int, str, MyClass and so on.
# "default" is an instance of type T, such as 314, "string", MyClass() and so on.
# returned is an instance of type T too.
def converter(raw, mapper: Type[T], default: T) -> T:
    try:
        return mapper(raw)
    except:
        return default

raw: str = input("Enter an integer: ")
result: int = converter(raw, mapper=int, default=0)
```

### Function {.col-span-2}

```python
from typing import TypeVar, Callable, Any

T = TypeVar("T")

def converter(raw, mapper: Callable[[Any], T], default: T) -> T:
    try:
        return mapper(raw)
    except:
        return default

# Callable[[Any], ReturnType] means a function declare like:
# def func(arg: Any) -> ReturnType:
#     pass

# Callable[[str, int], ReturnType] means a function declare like:
# def func(string: str, times: int) -> ReturnType:
#     pass

# Callable[..., ReturnType] means a function declare like:
# def func(*args, **kwargs) -> ReturnType:
#     pass

def is_success(value) -> bool:
    return value in (0, "OK", True, "success")

resp = dict(code=0, message="OK", data=[])
successed: bool = converter(resp["message"], mapper=is_success, default=False)
```

## Miscellaneous

### Comments

```python
# This is a single line comments.
```

```python
""" Multiline strings can be written
    using three "s, and are often used
    as documentation.
"""
```

```python
''' Multiline strings can be written
    using three 's, and are often used
    as documentation.
'''
```

### Generators

```python
def double_numbers(iterable):
    for i in iterable:
        yield i + i
```

Generators help you make lazy code.

### Generator to list

```python
values = (-x for x in [1,2,3,4,5])
gen_to_list = list(values)

# => [-1, -2, -3, -4, -5]
print(gen_to_list)
```

### Handle exceptions {.col-span-3}

```python
try:
    # Use "raise" to raise an error
    raise IndexError("This is an index error")
except IndexError as e:
    pass                 # Pass is just a no-op. Usually you would do recovery here.
except (TypeError, NameError):
    pass                 # Multiple exceptions can be handled together, if required.
else:                    # Optional clause to the try/except block. Must follow all except blocks
    print("All good!")   # Runs only if the code in try raises no exceptions
finally:                 # Execute under all circumstances
    print("We can clean up resources here")
```
