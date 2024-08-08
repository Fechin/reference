---
title: Ocaml
date: 2024-08-06 00:00:00
background: bg-[#eeeee4]
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
let () =
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

### Comments

```ml
(* A single line comment *)

(* A multi-line comment
* where to explain 
* something complex *)
```

### Expressions and Primitive Types

```ml
(* an expression *)
50 * 50

(* int *)
5 + 5

(* float *)
3.14 +. 2.72

(* bool *)
let theTruth = true
let untrue = false

(* char *)
'a'

(* string *)
"a string"
```

### Variables

```ml
(* data is immutable in ocaml *)
let x = "a string"
let y = 1
let z = [1;2;3]

```

### Functions

```ml
let add_two_ints x y =
  let sum = x + y in
  sum  
```
