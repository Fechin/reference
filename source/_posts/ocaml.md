---
title: OCaml
date: 2024-08-06 00:00:00
background: bg-[#ec670f]
tags:
  - scientific
  - functional
categories:
  - Programming
intro: |
  The [OCaml](https://www.ocaml.org/) cheat sheet is a one-page reference sheet for the OCaml programming language.
plugins:
  - copyCode
---

## Getting Started

### hello.ml

```ml
# let () =
    let message = "Hello, World!" in
    Printf.printf "%s\n" message
```

Compile and Run

```bash
$ ocamlc -o hello.byte hello.ml
$ ./hello.byte
```

Build and Run with Dune

```bash
$ dune build hello.exe
$ _build/default/hello.exe
```

### Imports

Global Open

```ml
# open Hex 
```

Local Open

```ml
# Hex.of_string "hex string" 

# let open Hex in 
   of_string "to hex"

```

### Comments

```ml
(* A single line comment *)

(* A multi-line comment
* where we want to explain 
* something complex *)

```

Documentation Comments

```ml
val sum : int -> int -> int
(** [sum x y] returns the sum
 of two integers [x] and [y] *)

```

## Data Types

### Predefined Types

#### Unit

```ml
# () (* eqivalent to void *)
- : unit = ()
```

#### Basic Types

```ml
# 5 (* int *)
# 3.14 (* float *)

# true (* bool *)
# false

# 'a' (* char *)
# "a string" (* string *)

# String.to_bytes "hello" (* bytes *)
- : bytes = Bytes.of_string "hello"

# (3, 5) (* tuple *)

# ref 0 (* reference *)
```

#### Options & Results

```ml
# Some 42
- : int option = Some 42

# Ok 42

# Error "404"
```

### Arrays & Lists

#### Arrays

```ml
# [|0; 1; 2; 3|] 

# [|'u'; 's'; 'c'|].(1) (* array access *)
- char = 's'
```

Arrays are mutable

```ml
# let scores = [|97; 85; 99|]
# scores.(2) <- 89 (* update an element *)
- unit = ()

# scores
- : int array = [|97; 85; 89|]
```

#### Lists

```ml
# [1; 2; 3]
- : int list = [1; 2; 3;]

# ["a"; "str"; "lst"]
- : string list = ["a"; "str"; "lst"]
```

Lists are immutable

```ml
# let lst = [1; 2; 3]

# let new_lst =  lst :: 4 (* append to a new list *)
- : int list = [1; 2; 3; 4]
```

### User-Defined Types

#### Records

Bundle related data

```ml
# type person = { 
    name: string;
    age: int
  }

# let zeno = {name = "Zeno"; age = 30};;
val zeno : person = {name = "Zeno"; age = 30}
```

#### Variants

Several different, but related types

```ml
type shape = 
  | Circle of float
  | Rectangle of float * float

let my_shape = Circle 5.0
- : shape = Circle 5.
```

#### Aliases

Provide meaningful name
to complex or commonly used types

```ml
# type point = float * float

# let origin: point = (0.0, 0.0)
val origin : point = (0., 0.)
```

## Functions

### Functions

```ml
# let sum x y =
    let result = x + y in
    result
    
# sum 2 3
-: int = 5
```

### Recursive Functions

```ml
# let rec factorial n = 
    if n < 1 then 1 else n * factorial (n - 1)
```

### Chaining

Application Operator

```ml
# log @@ float_of_int @@ sum 2 3 
```

Pipeline

```ml
(* find log((x + y)!) *)
# sum 2 3 
  |> factorial
  |> float_of_int
  |> log
- : float = 4.787...
```

## Control Flow

### If Statements

If Statement

```ml
# let is_pos x = 
    if x > 0 then "positive" else "negative"
```

If else if

```ml
# let f x = 
    if x > 3 then "gt 3"
    else if x < 3 then "lt 3"
    else "eq 3"
```

Pattern Matching

```ml
let is_pos x = 
  match x > 0 with 
  | true  -> "positive"
  | false -> "negative"
```

### Loops

For loop

```ml
for i = 1 to 5
 do print_int i 
done
```

While loop

```ml
let i = ref 0 in 
  while !i < 5 do
    print_int !i;
    i := !i + 1
done
```

### Operators

Comparison Operators

```ml
=         (* equal to *)
<> or !=  (* not equal to *)
>         (* greater than *)
<         (* less than *)
>=        (* greater than or eq to *)
<=        (* less than or eq to *)
```

Arithmatic Operators

```ml
(* int operator   float operator *)
+                 +.  (* addition *) 
-                 -.  (* subtraction *)
*                 *.  (* multiplication *)
/                 /.  (* division *)
                  **  (* power *)
```

### List Library

```ml
(* an int list*)
# let lst = [1;2;3]

(* map a function to each elem *)
# List.map (fun x -> x + x) lst
- : int list = [2; 4; 6]

# List.mem 4 lst
- : bool = false

# List.find (fun x -> x = 4) lst
Exception: Not_found

```

#### Associaton Lists

```ml
# let scores = 
    [("math", 91); ("phil", 89); ("stats", 94)]

# List.assoc "stats" scores;;
- : int = 94
```
