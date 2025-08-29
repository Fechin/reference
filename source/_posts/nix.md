---
title: Nix
date: 2025-08-24 23:33:40
background: bg-[#304673]
tags:
categories:
  - Programming
intro: |
  The Nix quick reference cheat sheet that aims at providing help on writing basic nix code.
plugins:
  - copyCode
---

## Types & Syntax

### String

```nix
let
  x = "single-line string";
  y = ''
    multi-line string
  '';
in
```

### Integer

```nix
let
  x = -123;
  y - 123;
in
```

### Float

```nix
let
  x = -0.32;
  y = 0.45;
in
```

### Boolean

```nix
let
  x = true;
  y = false;
in
```

### Null

```nix
let
  x = null;
in
```

### Path

```nix
let
  x = /absolute/path;
  y = ./relative/path;
in
```

### Attribute Set

```nix
let
  x = {
    a = 1;
    b = 2;
  };
  y = { c = 3; };
in
```

see [Attribute Sets](#attribute-sets)

### List

```nix
let
  x = [ 1 2.0 ];
  y = [
    1
    "this is a string"
    23.0
    null
  ];
in
```

### Comment

#### ↓ single-line comment

```nix
# your comment
```

#### ↓ multi-line comment

```nix
/*
  your comment
*/
```

## Scoping

### Define Local Variable

```nix
let
  x = 1;
  y = 2;
in
  x + y # -> returns 3
```

### Add Variables Into Scope

```nix
let
  x = 1;
in
  { inherit x; }
```

#### ↓ desugars to

```nix
let
  x = 1;
in
  { x = x; }
```

### Add Attributes Into Scope

```nix
let
  x = { y = 1; };
in
  { inherit (x) y; }
```

#### ↓ desugars to

```nix
let
  x = { y = 1; };
in
  { y = x.y; }
```

### Add All Attributes Into Scope

```nix
let
  x = { y = 1; z = 2;  };
in
  with x;
  y + z # -> returns 3
```

## Conditionals

### Define Conditionals

```nix
if x > 0
then 1
else -1
```

## Attribute Sets

### Define Attribute Sets

```nix
let
  x = {
    a = 1;
    b = 2;
  };
  y = { c = 3; };
in
```

### Update Attribute Sets

```nix
{ x = 1; } // { y = 2; } # -> returns { x = 1; y = 2; }
{ x = 1; } // { x = 2; } # -> returns { x = 2; }
```

### Check For Attribute

```nix
let
  x = { y = 1; };
in
  x ? y # -> returns true
```

### Reference Attirbute Keys

```nix
let
  x = { y = 1; };
in
  x.y # -> returns 1
```

#### ↓ optional

```nix
let
  x = { y = 1; };
in
  x.z or 2 # -> returns 2
```

## Concatenation & Interpolation

### Concatenate Lists

```nix
[ 1 2 ] ++ [ 3 4 ] # -> returns [ 1 2 3 4 ]
```

### Concatenate Paths & Strings

```nix
/bin + /sh # -> returns /bin/sh
/bin + "/sh" # -> returns /bin/sh
"/bin" + "/sh" # -> returns "/bin/sh"
```

### Interpolate Strings

```nix
let
  x = "bar";
in
  "foo ${x} baz" # -> returns "foo bar baz"
```

## Functions

### Simple Function

```nix
let
  f = x: x + 1;
in
  f 1 # -> returns 2
```

### Multiple Arguments

```nix
let
  f = x: y: [ x  y ];
in
  f 1 2 # -> returns [ 1 2 ]
```

### Named Arguments

```nix
let
  f = {x, y}: x + y;
in
  f { x=1; y=2; } # -> returns 3
```

#### ↓ ignoring arguments

```nix
let
  f = {x, y, ... }: x + y;
in
  f { x=1; y=2; z=3; } # -> returns 3
```

#### ↓ default values

```nix
let
  f = {x, y ? 2 }: x + y;
in
  f { x=1; } # -> returns 3
```

#### ↓ bind to variable

```nix
let
  f = {x, y}@args: args.x + args.y;
in
  f { x=1; y=2; } # -> returns 3
```

## Sources

- [NixOS/marketing](https://github.com/nixos/marketing) _(github.com)_
