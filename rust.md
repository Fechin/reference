---
title: Rust
date: 2022-01-01 11:51:44
icon: icon-rust
background: bg-black
tags:
categories:
    - Programming
intro: |
    The Rust quick reference cheat sheet that aims at providing help on writing basic syntax and methods.
---


Getting Started  {.cols-3}
---------------

### Hello_World.rs

```rust
fn main() {
  println!("{}", "Hello, World!");
}
```
#### Compiling and Running
```shell
$ rustc Hello_World.rs -o Hello_World
$ ./Hello_World
Hello, World!
```

### Primitive types

|                           |                                  |
|---------------------------|----------------------------------|
| `bool`                    | Boolean (`true` _/_ `false`)     |
| `char`                    | character                        |
| `f32`, `f64`              | 32-bits, 64-bits floats          |
| `i64`, `i32`, `i16`, `i8` | signed 16- ... integers          |
| `u64`, `u32`, `u16`, `u8` | unsigned 16-bits, ...  integers  |
| `isize`                   | pointer-sized signed integers    |
| `usize`                   | pointer-sized unsigned integers  |

See: [Rust Types](#rust-types)


### Formatting {.row-span-2}

```rust {.wrap}
// Single Placeholder
println!("{}", 1);

// Multiple Placeholder
println!("{} {}", 1, 3);

// Positional Arguments
println!("{0} is {1} {2}, also {0} is a {3} programming language", "Rust", "cool", "language", "safe");

// Named Arguments
println!("{country} is an diverse nation with unity.", country = "India");

// Placeholder traits :b for binary, :0x is for hex and :o is octal
println!("Let us print 76 is binary which is {:b} , and hex equivalent is {:0x} and octal equivalent is {:o}", 76, 76, 76);

// Debug Trait
println!("Print whatever we want to here using debug trait {:?}", (76, 'A', 90));
```


### Printing Styles

```rust
// Prints the output
print!("Hello World\n");

// Appends a new line after printing
println!("Appending a new line");

// Prints as an error
eprint!("This is an error\n");

// Prints as an error with new line
eprintln!("This is an error with new line");
```


### Variables

```rust
// Initializing and declaring a variable
let some_variable = "This_is_a_variable";

// Making a variable mutable
let mut mutable_variable = "Mutable";

// Assigning multiple variables
let (name, age) = ("ElementalX", 20);

// (Global) constant
const SCREAMING_SNAKE_CASE:i64 = 9;
```



### Comments

```rust
// Line Comments
/*.............Block Comments */
/// Outer doc comments
//! Inner doc comments
```
See: [Comment](https://doc.rust-lang.org/reference/comments.html)



### Functions

```rust
fn test(){
    println!("This is a function!");
}

fn main(){
  test();
}
```




Rust Types {.cols-3}
--------------


### Integer

```rust
let mut a: u32 = 8;
let b: u64 = 877;
let c: i64 = 8999;
let d = -90;
```


### Floating-Point

```rust
let mut sixty_bit_float: f64 = 89.90;
let thirty_two_bit_float: f32 = 7.90;
let just_a_float = 69.69;
```


### Boolean

```rust {.wrap}
let true_val: bool = true;
let false_val: bool = false;
let just_a_bool = true;
let is_true = 8 < 5;  // => false
```


### Character

```rust
let first_letter_of_alphabet = 'a';
let explicit_char: char = 'F';
let implicit_char = '8';
let emoji = "\u{1f600}";   // => 😀
```


### String Literal

```rust {.wrap}
let community_name = "AXIAL";
let no_of_members: &str = "ten";

println!("The name of the community is {} and it has {} members", community_name, no_of_members);
 ```



### Arrays

```rust
┌─────┬─────┬─────┬─────┬─────┬─────┐
| 92  | 97  | 98  | 99  | 98  | 94  |
└─────┴─────┴─────┴─────┴─────┴─────┘
   0     1     2     3     4     5
```
----

```rust
let array: [i64; 6] = [92,97,98,99,98,94];
```



### Multi-Dimensional Array

```rust
     j0   j1   j2   j3   j4   j5
   ┌────┬────┬────┬────┬────┬────┐
i0 | 1  | 2  | 3  | 4  | 5  | 6  |
   ├────┼────┼────┼────┼────┼────┤
i1 | 6  | 5  | 4  | 3  | 2  | 1  |
   └────┴────┴────┴────┴────┴────┘
```
----

```rust
let array: [[i64; 6] ;2] = [
            [1,2,3,4,5,6],
            [6,5,4,3,2,1]];
```

### Mutable Array

```rust
let mut array: [i32 ; 3] = [2,6,10];

array[1] = 4;
array[2] = 6;
```
Use the `mut` keyword to make it mutable.



### Slices

```rust
let mut array: [ i64; 4] = [1,2,3,4];
let mut slices: &[i64] = &array[0..3] // Lower range is inclusive and upper range is exclusive

println!("The elements of the slices are : {:?}", slices);
```


### Vectors

```rust
let some_vector = vec![1,2,3,4,5]; 
```
A vector is declared using the `vec!` macro.


### Tuples

```rust
let tuple = (1, 'A' , "Cool", 78, true);
```


Rust Operators {.cols-3}
-----------


### Comparison Operators

|          |                                  |
|----------|----------------------------------|
| `e == f` | `e` is equal to `f`              |
| `e != f` | `e` is NOT equal to `f`          |
| `e < f`  | `e` is less than `f`             |
| `e > f`  | `e` is greater `f`               |
| `e <= f` | `e` is less than or equal to `f` |
| `e >= f` | `e` is greater or equal to `f`   |

---------

```rust
let (e, f) = (1, 100);

let greater = f > e;        // => true
let less = f < e;           // => false
let greater_equal = f >= e; // => true
let less_equal = e <= f;    // => true
let equal_to = e == f;      // => false
let not_equal_to = e != f;  // => true
```


### Arithmetic Operators

|          |                                            |
|----------|--------------------------------------------|
| `a +  b` | `a` is added to `b`                        |
| `a -  b` | `b` is subtracted from `a`                 |
| `a /  b` | `a` is divided by `b`                      |
| `a % b`  | Gets remainder of `a` by dividing with `b` |
| `a * b`  | `a` is multiplied with `b`                 |

------

```rust {.wrap}
let (a, b) = (4, 5);

let sum: i32 = a + b;            // => 9
let subtractions: i32 = a - b;   // => -1
let multiplication: i32 = a * b; // => 20
let division: i32 = a / b;       // => 0
let modulus: i32 = a % b;        // => 4
```




### Bitwise Operators

| Operator | Description             |
|----------|-------------------------|
| `g & h`  | Binary AND              |
| `g | h`  | Binary OR               |
| `g ^ h`  | Binary XOR              |
| `g ~ h`  | Binary one's complement |
| `g << h` | Binary shift left       |
| `g >> h` | Binary shift right      |

-----

```rust {.wrap}
let (g, h) = (0x1, 0x2);

let bitwise_and = g & h;  // => 0
let bitwise_or = g | h;   // => 3
let bitwise_xor = g ^ h;  // => 3
let right_shift = g >> 2; // => 0
let left_shift = h << 4;  // => 32 
```



### Logical Operators

| Example        | Meaning                |
|----------------|------------------------|
| `c && d`       | Both are true _(AND)_  |
| `c OR d`       | Either is true _(OR)_  |
| `!c`           | `c` is false _(NOT)_   |

------

```rust
let (c, d) = (true, false);

let and = c && d;  // => false
let or  = c || d;  // => true
let not = !c;      // => false
```


### Compound Assignment Operator

```rust
// To-DO
```



Misc {.cols-3}
--------------


### Type Casting

```rust
let a_int = 90; // int
// int to float
let mut type_cast = (a_int as f64);
```
------
```rust
let orginal: char = 'I';
// char to int => 73
let type_casted: i64 = orginal as i64;
```

To perform type-casting in Rust one must use the `as` keyword.




### Borrowing 

```rust
let mut foo = 4;
let mut borrowed_foo = &foo;
println!("{}", borrowed_foo);
```
------
```rust
let mut bar = 3;
let mut mutable_borrowed_bar = &mut bar;
println!("{}", mutable_borrowed_bar);
```

Here borrowed value borrows the value from value one using `&` operator.



### De-referencing 

```rust
let mut borrow = 10;
let deref = &mut borrow;

println!("{}", *deref);
```

De-referencing in rust can be done using the `*` operator


### Variable Scope
```rust
{
  // The scope limited to this braces
  let a_number = 1;
}
println!("{}", a_number);
```
This will produce error as the scope of the variable `a_number` ends at the braces


Also see
--------

- [The Rust Document](https://doc.rust-lang.org/book/ch00-00-introduction.html) _(doc.rust-lang.org)_
- [The Rust Reference](https://doc.rust-lang.org/reference/introduction.html) _(doc.rust-lang.org)_


