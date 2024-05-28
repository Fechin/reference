---
title: Hook
date: 2024-03-13 18:20:00
icon: icon-style
background: bg-[#1131e2]
tags:
  - script
  - interpret
categories:
  - Programming
intro: |
  The [Hook](https://github.com/hook-lang/hook/) cheat sheet is a one-page reference sheet for the Hook programming language.
plugins:
  - copyCode
---

## Getting Started

### Introduction

- [GitHub](https://github.com/hook-lang/hook)
- [Playground](https://hook-lang.github.io/hook-playground)
- [Examples](https://github.com/hook-lang/hook/tree/main/examples)
- [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=fabiosvm.hook)

### What does Hook look like?

```rs
fn factorial(n) {
  if (n == 0)
    return 1;
  return n * factorial(n - 1);
}
```

Hook features a modern syntax similar to `C`.

### Hello, world!

```js
println("Hello, World!");
// Hello, World!
```

The `Hello, World!` program in Hook.

### Installing with Homebrew

```text
brew tap hook-lang/hook
brew install hook
hook --help
```

The interpreter is available on [`Homebrew`](https://brew.sh).

### Installing on Windows {.col-span-2}

```text
cd %tmp%
curl -sSLO https://raw.githubusercontent.com/hook-lang/hook/main/scripts/install.bat
install
```

This is how you can install it on `Windows`.

## Types and Values

### Basic Types

|          |           |
| -------- | :-------- |
| `Nil`    | `Bool`    |
| `Number` | `String`  |
| `Range`  | `Array`   |
| `Record` | `Closure` |

List of basic types.

### Bool

```js
let x = true;
let y = false;
```

Bool is a boolean type. So, it can be `true` or `false`.

### Numbers

```js
let x = 0;
let degree = 45; // integer number
let pi = 3.14; // floating-point number
```

Numbers can be integers or floating-point.

### Strings

```js
let empty = "";

let name = "John";

let message = 'Hello, "John"!';
```

Strings can be single or double-quoted.

### Ranges

```js
let range = 1..5;

println(range);
// 1..5
```

Ranges are a sequence of integers.

### Arrays

```js
let fruits = ["apple", "banana", "cherry"];

println(fruits);
// ["apple", "banana", "cherry"]
```

Arrays are a sequence of elements.

### Records

```js
let p = { x: 5, y: 10 };

println(p);
// {x: 5, y: 10}
```

Records maps fields to values.

### The **nil** value

```swift
let x = nil;
var y;
```

```js
println(x); // nil
println(y); // nil
```

`nil` is the absence of a value.

### Falsy values

```swift
if (nil) "true" else "false";   // false
if (false) "true" else "false"; // false
if (true) "true" else "false";  // true
if (0) "true" else "false";     // true
if (1) "true" else "false";     // true
if ("") "true" else "false";    // true
if ([]) "true" else "false";    // true
if ({}) "true" else "false";    // true
```

Just `nil` and `false` are falsy.

## Syntax

### Comments

```js
// This is a single-line comment.

// And this is
// a multi-line
// comment. ;)
```

Hook supports single-line comments only. Sorry!

### Semi-colons {.col-span-2}

<!-- prettier-ignore -->
```js
println(1) ; println(2) ; println(3) ;
println(4) ; println(5)
; println(6) ;
;                                      // error: unexpected token `;`
```

Semi-colons are required and empty statements are not allowed.

### Blocks

```js
{
  println("Hello");
  {
    println("World");
  }
}
```

Blocks are used to define a scope.

### Reserved words

|         |          |            |         |
| ------- | :------- | :--------- | :------ |
| `as`    | `break`  | `continue` | `do`    |
| `else`  | `false`  | `fn`       | `for`   |
| `from`  | `if`     | `import`   | `in`    |
| `inout` | `let`    | `loop`     | `match` |
| `nil`   | `return` | `struct`   | `trait` |
| `true`  | `var`    | `while`    |         |

There are few reserved words.

### Identifiers

```php
var lowercase;
var CAPS_LOCK;
var camelCase;
var PascalCase;
var snake_case;
var _123;
```

Identifiers are case-sensitive.

## Variables

### Variables

```js
var x; // x contains nil
x = 5; // now, x contains a number
x = "foo"; // a string

println(x);
```

Values have types, but variables don't.

### Immutable variables {.col-span-2}

```js
let x = 5;

x = 10; // error: cannot assign to immutable variable `x`

let y; // error: unexpected token `;`
```

Immutable variables must be initialized when declared.

### Scopes {.col-span-2}

```js
let x = 5;
{
  let y = 15;
  println(x); // 10
  println(y); // 15
}
println(x); // 5
println(y); // error: variable `y` is used but not defined
```

When a heap-allocated variable goes out of scope, it is automatically deallocated.

### Shadowing

```js
let x = 5;
{
  let x = 10; // shadows the outer `x`
  println(x); // 10
}
println(x); // 5
```

Variables can be shadowed.

## Operators and Expressions

### Arithmetic

```js
println(5 + 10); // 15
println(5 - 10); // -5
println(5 * 10); // 50
println(5 / 10); // 0.5
println(5 % 10); // 5
println(-5); // -5
```

The basic arithmetic operators.

### Comparison

```js
println(5 == 10); // false
println(5 != 10); // true
println(5 < 10); // true
println(5 > 10); // false
println(5 <= 10); // true
println(5 >= 10); // false
```

The comparison operators.

### Logical

```js
println(true && false); // false
println(true || false); // true
println(!true); // false
```

The logical operators.

### Bitwise and shift

```js
println(5 & 10); // 0
println(5 | 10); // 15
println(5 ^ 10); // 15
println(~5); // -6
println(5 << 1); // 10
println(5 >> 1); // 2
```

The bitwise and shift operators.

### Assignments

```js
var x = 5; // 5
x += 10; // 15
x -= 10; // 5
x *= 10; // 50
x /= 10; // 5
x %= 10; // 5
x &= 10; // 0
x |= 10; // 10
x ^= 5; // 15
x <<= 5; // 480
x >>= 5; // 15
x++; // 16
x--; // 15
```

The assignment operators.

### Teh ternary operator

```js
let x = 5;
let y = if (x > 5) 10 else 20;

println(y);
// 20
```

In Hook, the ternary operator is `if else`.

## Branching

### If

```js
let x = 10;

if (x > 5) {
  println("x is greater than 5");
}
// x is greater than 5
```

The `if` statement.

### If else

```js
let x = 11;

if (x == 5) {
  println("x is 5");
} else if (x == 10) {
  println("x is 10");
} else {
  println("x is neither 5 nor 10");
}
// x is neither 5 nor 10
```

The `if else` statement.

### Match

```rs
let x = 5;

match (x) {
  1 => println("one");
  2 => println("two");
  3 => println("three");
  _ => println("other");
}
// other
```

The `match` statement.

## Looping

### While

```js
var x = 0;

while (x < 5) {
  print(x);
  x += 1;
}
// 01234
```

The `while` loop.

### Do while

```js
var x = 0;

do {
  print(x);
  x += 1;
} while (x < 5);
// 01234
```

The `do while` loop.

### For

```js
for (var i = 0; i < 5; i++) {
  print(i);
}
// 01234
```

The classic `for` loop.

### Loop

```rs
loop {
  println("Press Ctrl+C to stop");
}
```

The unconditional `loop`.

### Break

```js
var i = 0;
```

```rs
loop {
  if (i == 5) break;

  print(i);
  i += 1;
}
// 01234
```

Use `break` to exit a loop.

### Continue

```js
var i = 0;
```

```rs
loop {
  i += 1;
  if (i % 2 == 0) continue;

  print(i);

if (i == 5) break;
}
// 135
```

Use `continue` to skip the rest of the loop body.

## Strings

### Indexing a string

```js
let s = "Hello";

println(s[0]); // H
println(s[1]); // e
println(s[4]); // o
```

Indexing a string returns a 1-character string.

### Slicing a string

```js
let s = "Hello, World!";

println(s[0..5]);        // Hello,
println(s[7..12]);       // World!
```

Pass a range to slice a string.

### Concatening strings

```js
let greeting = "Hi" + " there!";

println(greeting);
// Hi there!
```

Use the `+` operator to concatenate strings.

## Arrays

### Indexing an array

```js
let a = [1, 2, 3];

println(a[0]); // 1
println(a[1]); // 2
println(a[2]); // 3
```

Indexing an array returns an element.

### Slicing an array

```js
let a = [1, 2, 3, 4];

println(a[0..2]);            // [1, 2, 3]
println(a[1..3]);            // [2, 3, 4]
println(a[2 .. len(a) - 1]); // [3, 4]
```

Arrays are zero-indexed.

### Appending an element

```js
var a = [1, 2];

a[] = 3;

println(a);
// [1, 2, 3]
```

Arrays are mutable. Use `[]` to append an element.

### Element assignment

```js
var a = [1, 2, 3];

a[0] = 4;

println(a);
// [4, 2, 3]
```

Update an element in an array.

### Concatening arrays

```js
let a = [1, 2];
let b = [3];
let c = a + b;

println(c);
// [1, 2, 3]
```

Use the `+` operator to concatenate arrays.

### Subtracting arrays

```js
let a = [1, 2, 2, 3];
let b = [2];
let c = a - b;

println(c);
// [1, 3]
```

Get the difference between two arrays.

## Functions and Closures

### Function declaration

```rs
fn sum(a, b) {
  return a + b;
}

println(sum(5, 10));
// 15
```

Functions are first-class citizens.

### Function call

```rs
fn greet(name) {
  println("Hi, " + name + "!");
}

greet("John", "Doe");
// Hi, John!
```

The number of arguments is adjusted.

### Anonymous functions

```js
let sum = |a, b| {
  return a + b;
};

println(sum(5, 10));
// 15
```

Anonymous functions are also supported.

### Closures

```js
let pi = 3.14;
```

```rs
fn area(r) {
  return pi * r * r;
}

println(area(5));
// 78.5
```

Closures in Hook capture values only.

### Higher-order functions

```rs
fn apply(f, x) {
  return f(x);
}

fn double(x) {
  return x * 2;
}

println(apply(double, 5));
// 10
```

Functions can be passed as arguments or returned.

### Syntax sugar for functions

```rs
fn factorial(n) =>
  if (n == 0) 1
  else n * factorial(n - 1);

println(factorial(5));
// 120
```

Use `=>` when the body is a single expression.

### Recursion

```rs
fn fib(n) {
  if (n < 2)
    return n;
  return fib(n - 1) + fib(n - 2);
}

println(fib(10));
// 55
```

Recursion is supported.

### Built-in functions

```js
println(type(5));
// number
println("1" + to_string(2));
// 12
println(len("foo"));
// 3
```

There are many built-in functions.

### More built-in functions

|             |           |             |
| ----------- | :-------- | :---------- |
| `print`     | `println` | `type`      |
| `is_nil`    | `is_bool` | `to_number` |
| `to_string` | `hex`     | `len`       |
| `exit`      | `assert`  | `panic`     |

See: [Built-in Functions](https://github.com/hook-lang/hook/blob/main/docs/built-in.md)

## Structs

### Structs

```rs
struct Point {
  x, y
}
```

```js
let p = Point { 5, 10 };

println(p);
// {x: 5, y: 10}
```

A struct is a prototype for a record.

### Accessing fields

```js
println(p.x); // 5
println(p.y); // 10
```

Use `.` to access a field in a record.

### Field assignment

```js
p.x = 10;
p.y = 20;

println(p);
// {x: 10, y: 20}
```

Update a value of a field in a record.

## Destructuring

### Destructuring an array

```js
let a = [1, 2];
let [x, y] = a;

println(x); // 1
println(y); // 2
```

Varuables are declared and assigned.

### Destructuring a record

```js
let p = { x: 5, y: 10 };
let { x } = p;

println(x);
// 5
```

Use `{}` to destructure a record.

### Placeholder

```js
let a = [1, 2];
let [x] = a;
let [_, y] = a;

println(x); // 1
println(y); // 2
```

Use `_` skip leading or middle elements.

## Modularity

### Importing a module

```js
import math;
```

```js
println(math.sqrt(25));
// 5
```

Use `import` to bring a module into scope.

### Exporting symbols

```rs
// my_module.hk
fn useful_fn() {
  return "Nothing";
}

return { useful: useful_fn };
```

Return a record with the symbols to export.

### Importing local modules

```python
import "./my_module.hk" as my;
```

```js
println(my.useful());
// Nothing
```

Specify the path to the local module.

### Selective import

```js
import { pow, sqrt } from math;

let [ b, c ] = [ 4, 3 ];
let a = sqrt(pow(b, 2) + pow(c, 2));

println(a);
// 5
```

Use `{}` to import specific symbols.

### Core modules

|            |          |        |           |
| ---------- | :------- | :----- | :-------- |
| `math`     | `os`     | `io`   | `numbers` |
| `strings`  | `arrays` | `utf8` | `hashing` |
| `encoding` | `socket` | `json` | `lists`   |

See: [Core Modules](https://github.com/hook-lang/hook/blob/main/docs/core-modules.md)

### Extension modules

|           |           |         |           |
| --------- | :-------- | :------ | :-------- |
| `bigint`  | `crypto`  | `curl`  | `fastcgi` |
| `geohash` | `leveldb` | `mysql` | `redis`   |
| `regex`   | `sqlite`  | `uuid`  | `zeromq`  |

This is a list of extension modules.

### **io** module

```js
import { stderr, writeln } from io;

writeln(stderr, "Something went wrong");
// Something went wrong
```

Printing to `stderr` using `io` module.

### **hashing** module

```python
import hashing as h;
```

```js
let d = h.sha256("Hello, world!");

println(hex(d));
// 315f5bdb76d078c43b8ac0064e4a...
```

`hashing` module provides hash functions.

### **json** module

```js
import json;
```

```js
let j = '{"x": 1, "y": 2}';
let p = json.decode(j);

println(p.x); // 1

let k = json.encode(p);
println(type(k)); // string
```

Use `json` module for working with JSON.

## Error Handling

### Errors {.col-span-2}

```js
println(to_int("foo"));

// runtime error: type error: argument #1 is not a convertible string
//   at to_int() in <native>
//   at main() in example.hk:1
```

Hook uses panic mode for error handling. When an error occurs, the interpreter stops.

### Syntax error

```js
println("Hello, World!");

// syntax error: unexpected end of file
//   at main() in example.hk:1,25
```

Hook has a strict syntax.

### Panic

```js
panic("Something went wrong");

// panic: Something went wrong
//   at main() in example.hk:1
```

Use the `panic` built-in function to raise an error.

### Assert {.col-span-2}

```js
assert(5 > 10, "5 is not greater than 10");

// assert: 5 is not greater than 10
//   at main() in example.hk:1
```

Use the `assert` built-in function to check a condition.

### Returning errors {.col-span-2}

```rs
fn divide(a, b) {
  if (b == 0)
    return [nil, "division by zero"];
  return a / b;
}

if (let [ok, err] = divide(5, 0); ok) {
  println(ok);
} else {
  println(err);
}
// division by zero
```

Use a pair to return a value and an error.

### Passing errors

```rs
if (let [ok, err] = divide(5, 0); err) {
  return [nil, err];
}
```

Pass an error without handling it.
