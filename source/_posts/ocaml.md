---
title: OCaml
date: 2024-08-14 21:12:00
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
let () =
  let message = "Hello, World!" in
  Printf.printf "%s\n" message
```

#### Compile and Run

```bash
$ ocamlc -o hello.byte hello.ml
$ ./hello.byte
```

#### Build and Run with Dune

```bash
$ dune build hello.exe
$ _build/default/hello.exe

# you can also just run
$ dune exec ./hello.exe
```

See the [dune](https://dune.build/) documentation for more info.

### Imports

Install modules with opam

```bash
$ opam install hex
```

#### Global Open

```ml
open Hex 
```

#### Local Open

```ml
Hex.of_string "hex string"

let open Hex in 
  of_string "to hex"
```

### Comments

#### Line & Block Comments

```ml
(* A single line comment *)

(* A multi-line comment
* where we want to explain 
* something complex *)

(* Outer comment
   (* Nested comment *)
   End of outer comment *)
```

#### Documentation Comments

```ml
val sum : int -> int -> int
(** [sum x y] returns the sum
 of two integers [x] and [y] *)
```

## Data Types

### Predefined Types

#### Unit

Note: `#` Indicates execution at the toplevel followed by the output

```ml
# ();; (* equivalent to void in C *)
- : unit = ()
```

#### Basic Types

```ml
# 5 ;; (* integer *)
- : int = 5

# 3.14 ;;  (* float *)
- : float = 3.14

# true ;; (* bool *)
- : bool = true

# false ;;
- : bool = false

# 'a' ;; (* char *)
- : char = 'a'

# "a string" ;; (* string *)
- : string = "a string"

# String.to_bytes "hello" ;; (* bytes *)
- : bytes = Bytes.of_string "hello"

# (3, 5);; (* tuple *)
- : int * int = (3, 5)

# ref 0;; (* reference *)
- : int ref = {contents = 0}
```

#### Options & Results

```ml
# Some 42;;
- : int option = Some 42

# Ok 42;;
- : (int, 'a) result = Ok 42

# Error "404";;
- : ('a, int) result = Error 404
```

### Arrays & Lists

#### Arrays

```ml
# [|0; 1; 2; 3|];; (* create an array *)
- : int array = [|0; 1; 2; 3|]

# [|'u'; 's'; 'c'|].(1);; (* array access *)
- char = 's'
```

Arrays are mutable

```ml
let scores = [|97; 85; 99|];;
- : int array = [|97; 85; 99|]

# scores.(2) <- 89;; (* update an element *)
- unit = ()

# scores;;
- : int array = [|97; 85; 89|]
```

#### Lists

```ml
# [1; 2; 3];;
- : int list = [1; 2; 3;]

# ["a"; "str"; "lst"];;
- : string list = ["a"; "str"; "lst"]
```

Lists are immutable

```ml
# let lst = [1; 2; 3];;
- : int list = [1; 2; 3]

# let new_lst =  0 :: lst;; (* prepend to a new list *)
- : int list = [0; 1; 2; 3]

# new_lst @ [4;5;6];; (* combine two lists *)
- : int list = [0; 1; 2; 3; 4; 5; 6]
```

### User-Defined Types

#### Records

Bundle related data

```ml
type person = { 
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

# let my_shape = Circle 5.0;;
- : shape = Circle 5.
```

#### Aliases

Provide meaningful name
to complex or commonly used types

```ml
type point = float * float

# let origin: point = (0.0, 0.0);;
val origin : point = (0., 0.)
```

## Functions

### Functions

#### Single parameter

```ml
let add_one x = 
  let result = x + 1 in
  result

# add_one 1;;
- : int = 2
```

#### Multiple parameters

```ml
let sum x y =
  let result = x + y in
  result

# sum 1 2;;
- : int = 3
```

#### Tuple parameter

```ml
let str_concat (x, y) =
  x ^ " " ^ y 

# str_concat ("Hello", "OCaml") ;;
- : string = "Hello Ocaml"  
```

### Recursive Functions

#### rec keyword

All recusive functions use the rec keyword

```ml
let rec factorial n = 
  if n < 1 then 1 else n * factorial (n - 1)
```

The above can cause stackoverflow.

#### Tail Recursion

Makes use of a helper function and the acc argument.

```ml
let rec factorial_helper n acc = 
  if n = 0 then acc
  else factorial_helper (n - 1) (n * acc)
```

Notice the last call is the recursive function.

```ml
let factorial n = factorial_helper n 1
```

### Chaining

#### Application Operator

Read from right to left, the first operation is `sum 2 3`

```ml
(* find log(2 + 3) *)
# log @@ float_of_int @@ sum 2 3 ;;
- : float = 1.609...
```

#### Pipeline

```ml
(* find log((x + y)!) *)
# sum 2 3 
  |> factorial
  |> float_of_int
  |> log ;;
- : float = 4.787...
```

`|>` takes the output of the function and passes it as input to the next function in the pipeline

## Control Flow

### If Statements

#### If Statement

```ml
let is_pos x = 
  if x > 0 then "positive" else "negative"
```

#### If else if

```ml
let f x = 
  if x > 3 then "gt 3"
  else if x < 3 then "lt 3"
  else "eq 3" 
```

#### Pattern Matching

```ml
let is_pos x = 
  match x > 0 with 
  | true  -> "positive"
  | false -> "negative" 
```

### Loops

#### For loop

```ml
for i = 1 to 5 do
  print_int i 
done
```

#### While loop

Notice the `ref` is needed to have the while condition eventually become false.

```ml
let i = ref 0 in 
  while !i < 5 do
    print_int !i;
    i := !i + 1
  done
```

### Operators

#### Comparison Operators

```ml
=         (* equal to *)
<>        (* not equal to *)
>         (* greater than *)
<         (* less than *)
>=        (* greater than or eq to *)
<=        (* less than or eq to *)
```

#### Arithmatic Operators

```ml
(* int operator   float operator *)
+                 +.  (* addition *) 
-                 -.  (* subtraction *)
*                 *.  (* multiplication *)
/                 /.  (* division *)
                  **  (* power *)
```

## Useful Tools

### List

#### Searching & Filtering

```ml
# let lst = [1; 2; 3];;
val lst : int list = [1; 2; 3]

# List.filter (fun x -> x mod 2 = 0) lst;;
- : int list = [2]

# List.find (fun x -> x = 4) lst;;
Exception: Not_found

# List.sort compare [2; 1; 3];;
- : int list = [1; 2; 3]
```

#### Applying Transformations

```ml
(* Loop over list and apply fun f *)
List.iter f lst

(* map a function to each elem *)
(* Ex. double each element x in lst *)
List.map (fun x -> x + x) lst

(* Apply an operator between elements *)
(* Ex. 1 + 2 + 3 *)
List.fold_left (+) 0 lst
```

### Associaton Lists

#### Definition and Access

```ml
let scores = 
  [("math", 91); ("phil", 89); ("stats", 94)]

# List.assoc "stats" scores;;
- : int = 94

# List.mem_assoc "math" scores;;
- : bool = true
```

#### Split and Combine

```ml
# List.split scores;;
- : string list * int list = (["math"; "phil"; "stats"], [91; 89; 94])

# List.combine [1;2;3] [4; 5; 6];;
- : (int * int) list = [(1, 4); (2, 5); (3, 6)]
```

Association lists are similar to dictionaries or hashmaps

### Hash Tables

Hash Tables are mutable.

#### Initialize & Add Data

```ml

# let my_htable = Hashtbl.create 3;;
val my_htable : ('_weak1, '_weak2) Hashtbl.t = <abstr>

# Hashtbl.add my_htable "A" "John";
  Hashtbl.add my_htable "A" "Jane";
  Hashtbl.add my_htable "B" "Max";;
```

#### Find Data

```ml
# Hashtbl.find my_htable "A";;
- : string = "Jane"

(* find all *)
# Hashtbl.find_all my_htable "A";;
- : string list = ["Jane"; "John"]
```

### Maps

Maps are immutable key-value association tables.

#### Initialization & Add Data

```ml
(* the Map.Make functor creates the custom map module *)
# module StringMap = Map.Make(String);;

let books = 
  StringMap.empty
  |> StringMap.add "Dune" ("Herbet", 1965)
  |> StringMap.add "Neuromancer" ("Gibson", 1984)
```

#### Finding Entries

```ml
(* find_opt returns assoc val wrapped in an option else None *)
# StringMap.find_opt "Dune" books;;
- : (string * int) option = Some ("Herbet", 1965)

(* find returns the association else Not_Found *)
# StringMap.find "Dune" books;;
- : string * int = ("Herbet", 1965)
```

#### Adding & Removing Entries

Creates a new map since maps are immutable

```ml
let more_books = books 
  |> StringMap.add "Foundation" ("Isaac Asimov", 1951)

let less_books = 
  |> StringMap.remove "Dune"
```

Filtering

```ml
let eighties_books = 
    StringMap.filter
      (fun _ (_, year) -> year > 1980 & number < 1990) books
```

#### Printing Data

```ml
let print_books map =
  StringMap.iter (fun title (author, year) ->
    Printf.printf "Title: %s, Author: %s, Year: %d\n" title author year
  ) map

# let () = print_books eighties_books;;
Title: Neuromancer, Author: Gibson, Year: 1984
```
