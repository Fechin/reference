---
title: Go
date: 2020-12-17 21:51:44
icon: icon-golang
background: bg-blue-400
tags:
  - Golang
categories:
  - Go
intro:
---


Getting started {.cols-3}
--------

### Introduction 

- [A tour of Go](https://tour.golang.org/welcome/1) _(tour.golang.org)_
- [Go repl](https://repl.it/languages/go) _(repl.it)_
- [Golang wiki](https://github.com/golang/go/wiki/) _(github.com)_

### Hello world {.row-span-2}


#### hello.go {.file}

```go
package main

import "fmt"

func main() {
  message := greetMe("world")
  fmt.Println(message)
}

func greetMe(name string) string {
  return "Hello, " + name + "!"
}
```

```bash
$ go build
```

Or try it out in the [Go repl](https://repl.it/languages/go), or [A Tour of Go](https://tour.golang.org/welcome/1).

### Variables

#### Variable declaration

```go
var msg string
msg = "Hello"
```

#### Shortcut of above (Infers type)

```go
msg := "Hello"
```

### Constants
Constants can be character, string, boolean, or numeric values.

```go
const Phi = 1.618
```

See: [Constants](https://tour.golang.org/basics/15)

Basic types {.cols-3}
--------

### Strings

```go
str := "Hello"

str := `Multiline
string`
```

#### Operators
```go
// Outputs: 11
fmt.Println(len("Hello World"))

// Outputs: Hello
fmt.Println(string("Hello World"[0:5]))

// Outputs: Hello World
fmt.Println("Hello " + "World")
```

Strings are of type `string`.

### Numbers 


#### Typical types

```go
num := 3         // int
num := 3.        // float64
num := 3 + 4i    // complex128
num := byte('a') // byte (alias: uint8)
```

#### Other types

```go
var u uint = 7        // uint (unsigned)
var p float32 = 22.7  // 32-bit float
```
#### Operators
```go
// Outputs: 1 + 1 = 2
fmt.Println("1 + 1 =", 1.0 + 1.0)
```

-----

| - | - |
|------|----------------|
| `+`  | addition       |
| `-`  | subtraction    |
| `*`  | multiplication |
| `/`  | division       |
| `%`  | remainder      |

Slices have a dynamic size, unlike arrays.





### Booleans

```go
isTrue   := true
isFalse  := false
```

#### Operators 
```go
// Outputs: true
fmt.Println(true && true)

// Outputs: false
fmt.Println(true && false)

// Outputs: true
fmt.Println(true || true)

// Outputs: true
fmt.Println(true || false)

// Outputs: false
fmt.Println(!true)
```

### Arrays {.row-span-2}

```go
var a [2]string
a[0] = "Hello"
a[1] = "World"

// Outputs: Hello World
fmt.Println(a[0], a[1])

// Outputs: [Hello World]
fmt.Println(a)

primes := [6]int{2, 3, 5, 7, 11, 13}

// Outputs: [2 3 5 7 11 13]
fmt.Println(primes)

// Same as [:3], Outputs: [2 3 5]
fmt.Println(primes[0:3])
```

Arrays have a fixed size.



### Pointers {.row-span-2}

```go
func main () {
  b := *getPointer()
  fmt.Println("Value is", b)
}
```


```go
func getPointer () (myPointer *int) {
  a := 234
  return &a
}
```


```go
a := new(int)
*a = 234
```


Pointers point to a memory location of a variable. Go is fully garbage-collected.
<br><br>
See: [Pointers](https://tour.golang.org/moretypes/1)

### Type conversions

```go
i := 90
f := float64(i)
u := uint(i)

// Will be equal to the character Z
s := string(i)
```

#### How to get int string?

```go
i := 90

// need import "strconv"
s := strconv.Itoa(i)
fmt.Println(s) // Outputs: 90
```

See: [Type conversions](https://tour.golang.org/basics/13)



### Slices

```go
slice := []int{2, 3, 4}
```

```go
slice := []byte("Hello")
```

Flow control {.cols-3}
--------

### Conditional

```go
if day == "sunday"||day == "saturday" {
  rest()
} else if day == "monday" && isTired() {
  groan()
} else {
  work()
}
```


See: [If](https://tour.golang.org/flowcontrol/5)

### Statements in if

```go
if _, err := doThing(); err != nil {
  fmt.Println("Uh oh")
}
```


A condition in an `if` statement can be preceded with a statement before a `;`. Variables declared by the statement are only in scope until the end of the `if`.
<br><br>
See: [If with a short statement](https://tour.golang.org/flowcontrol/6)

### Switch

```go {.wrap}
switch day {
  case "sunday":
    // cases don't "fall through" by default!
    fallthrough

  case "saturday":
    rest()

  default:
    work()
}
```

See: [Switch](https://github.com/golang/go/wiki/Switch)

### For loop

```go
for count := 0; count <= 10; count++ {
  fmt.Println("My counter is at", count)
}
```

See: [For loops](https://tour.golang.org/flowcontrol/1)

### For-Range loop

```go {.wrap}
entry := []string{"Jack","John","Jones"}
for i, val := range entry {
  fmt.Printf("At position %d, the character %s is present\n", i, val)
}
```

See: [For-Range loops](https://gobyexample.com/range)

### While loop

```go
n := 0
x := 42
for n != x {
  n := guess()
}
```

See: [Go's "while"](https://tour.golang.org/flowcontrol/3)

Functions {.cols-3}
--------

### Lambdas

```go
myfunc := func() bool {
  return x > 10000
}
```


Functions are first class objects.

### Multiple return types

```go
a, b := getMessage()
```

```go
func getMessage() (a string, b string) {
  return "Hello", "World"
}
```



### Named return values

```go
func split(sum int) (x, y int) {
  x = sum * 4 / 9
  y = sum - x
  return
}
```


By defining the return value names in the signature, a `return` (no args) will return variables with those names.

See: [Named return values](https://tour.golang.org/basics/7)

Packages {.cols-3}
--------


### Packages

```go
package hello
```

Every package file has to start with `package`.


### Importing {.row-span-2}

```go
import "fmt"
import "math/rand"
```

```go
import (
  "fmt"        // gives fmt.Println
  "math/rand"  // gives rand.Intn
)
```

Both are the same.
<br>
<br>
See: [Importing](https://tour.golang.org/basics/1)


### Exporting names

```go
func Hello () {
  ···
}
```

Exported names begin with capital letters.
<br><br>
See: [Exported names](https://tour.golang.org/basics/3)


### Aliases

```go
import r "math/rand"
```


```go
r.Intn()
```



Concurrency {.cols-3}
--------

### Goroutines

```go
func main() {
  // A "channel"
  ch := make(chan string)

  // Start concurrent routines
  go push("Moe", ch)
  go push("Larry", ch)
  go push("Curly", ch)

  // Read 3 results
  //(Since our goroutines are concurrent
  //        the order isn't guaranteed!)
  fmt.Println(<-ch, <-ch, <-ch)
}
```


```go
func push(name string, ch chan string) {
  msg := "Hey, " + name
  ch <- msg
}
```


Channels are concurrency-safe communication objects, used in goroutines.
<br>
<br>
See: [Goroutines](https://tour.golang.org/concurrency/1), [Channels](https://tour.golang.org/concurrency/2)




### WaitGroup

```go
import "sync"

func main() {
  var wg sync.WaitGroup
  
  for _, item := range itemList {
    // Increment WaitGroup Counter
    wg.Add(1)
    go doOperation(item)
  }
  // Wait for goroutines to finish
  wg.Wait()
  
}
```


```go
func doOperation(item string) {
  defer wg.Done()
  // do operation on item
  // ...
}
```


A WaitGroup waits for a collection of goroutines to finish. The main goroutine calls Add to set the number of goroutines to wait for. The goroutine calls `wg.Done()` when it finishes.
See: [WaitGroup](https://golang.org/pkg/sync/#WaitGroup)




### Closing channels

#### Closes a channel

```go
ch <- 1
ch <- 2
ch <- 3
close(ch)
```


#### Iterates across a channel until its closed

```go
for i := range ch {
  ···
}
```


#### Closed if `ok == false`

```go
v, ok := <- ch
```

See: [Range and close](https://tour.golang.org/concurrency/4)



### Buffered channels

```go
ch := make(chan int, 2)
ch <- 1
ch <- 2
ch <- 3
// fatal error:
// all goroutines are asleep - deadlock
```

Buffered channels limit the amount of messages it can keep.
<br>
<br>
See: [Buffered channels](https://tour.golang.org/concurrency/3)





Error control {.cols-2}
--------

### Deferring functions {.row-span-2}

```go
func main() {
  defer func() {
    fmt.Println("Done")
  }()
  fmt.Println("Working...")
}
```


Lambdas are better suited for defer blocks.

```go
func main() {
  var d = int64(0)
  defer func(d *int64) {
    fmt.Printf("& %v Unix Sec\n", *d)
  }(&d)
  fmt.Print("Done ")
  d = time.Now().Unix()
}
```

The defer func uses current value of d, unless we use a pointer to get final value at end of main.




### Defer

```go
func main() {
  defer fmt.Println("Done")
  fmt.Println("Working...")
}
```


Defers running a function until the surrounding function returns.
The arguments are evaluated immediately, but the function call is not ran until later.
<br>
<br>
See: [Defer, panic and recover](https://blog.golang.org/defer-panic-and-recover)




Structs {.cols-3}
--------

### Defining

```go
type Vertex struct {
  X int
  Y int
}
```


```go
func main() {
  v := Vertex{1, 2}
  v.X = 4
  fmt.Println(v.X, v.Y)
}
```

See: [Structs](https://tour.golang.org/moretypes/2)

### Literals

```go
v := Vertex{X: 1, Y: 2}
```

```go
// Field names can be omitted
v := Vertex{1, 2}
```

```go
// Y is implicit
v := Vertex{X: 1}
```

You can also put field names.

### Pointers to structs

```go
v := &Vertex{1, 2}
v.X = 2
```

Doing `v.X` is the same as doing `(*v).X`, when `v` is a pointer.

Methods  {.cols-2}
--------

### Receivers

```go
type Vertex struct {
  X, Y float64
}
```

```go
func (v Vertex) Abs() float64 {
  return math.Sqrt(v.X * v.X + v.Y * v.Y)
}
```


```go
v := Vertex{1, 2}
v.Abs()
```

There are no classes, but you can define functions with _receivers_.

See: [Methods](https://tour.golang.org/methods/1)

### Mutation

```go
func (v *Vertex) Scale(f float64) {
  v.X = v.X * f
  v.Y = v.Y * f
}
```


```go
v := Vertex{6, 12}
v.Scale(0.5)
// `v` is updated
```

By defining your receiver as a pointer (`*Vertex`), you can do mutations.
<br>
<br>
See: [Pointer receivers](https://tour.golang.org/methods/4)

Interfaces {.cols-2}
--------

### A basic interface

```go
type Shape interface {
  Area() float64
  Perimeter() float64
}
```

### Struct

```go
type Rectangle struct {
  Length, Width float64
}
```

Struct `Rectangle` implicitly implements interface `Shape` by implementing all of its methods.

### Methods

```go
func (r Rectangle) Area() float64 {
  return r.Length * r.Width
}

func (r Rectangle) Perimeter() float64 {
  return 2 * (r.Length + r.Width)
}
```

The methods defined in `Shape` are implemented in `Rectangle`.

### Interface example

```go
func main() {
  var r Shape = Rectangle{Length: 3, Width: 4}
  fmt.Printf("Type of r: %T, Area: %v, Perimeter: %v.", r, r.Area(), r.Perimeter())
}
```

References {.cols-2}
--------

### Official resources


- [A tour of Go](https://tour.golang.org/welcome/1) _(tour.golang.org)_
- [Golang wiki](https://github.com/golang/go/wiki/) _(github.com)_
- [Effective Go](https://golang.org/doc/effective_go.html) _(golang.org)_

### Other links


- [Go by Example](https://gobyexample.com/) _(gobyexample.com)_
- [Awesome Go](https://awesome-go.com/) _(awesome-go.com)_
- [JustForFunc Youtube](https://www.youtube.com/channel/UC_BzFbxG2za3bp5NRRRXJSw) _(youtube.com)_
- [Style Guide](https://github.com/golang/go/wiki/CodeReviewComments) _(github.com)_




