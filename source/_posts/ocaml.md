---
title: Ocaml
date: 2024-08-06 00:00:00
background: bg-[#ec670f]
tags:
  - scientific
  - functional
categories:
  - Programming
intro: |
  The [Ocaml](https://www.ocaml.org/) cheat sheet is a one-page reference sheet for the Ocaml programming language.
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

Unit

```ml
# ()
- : unit = ()
```

The unit is eqivalent to void

```ml
# 5 (* int *)

# 3.14 (* float *)

# true (* bool *)
# false

# 'a' (* char *)

# "a string" (* string *)

# String.to_bytes "hello" (* bytes *)
- : bytes = Bytes.of_string "hello"
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

### Functions

```ml
# let sum x y =
    let result = x + y in
    result
    
# sum 2 3
-: int = 5
```

Recursive Functions

```ml
# let rec factorial n = 
    if n < 1 then 1 else n * factorial (n - 1)
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

### Control Flow and Operators

If Statement

```ml
# let is_pos x = 
    if x > 0 then "positive" else "negative"
```

Pattern Matching

```ml
let is_pos x = 
  match x > 0 with 
  | true  -> "positive"
  | false -> "negative"
```

Operators

```ml
=         (* equal to *)
<> or !=  (*not eqaul *)
>         (* greater than *)
<         (* less than *)
>=        (* greater than or eq to *)
<=        (* less than or eq to *)
```

### List Operations

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

Associaton Lists

```ml
# let scores = 
    [("math", 91); ("phil", 89); ("stats", 94)]

# List.assoc "stats" scores;;
- : int = 94
```
