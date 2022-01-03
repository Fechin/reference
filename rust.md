---
title: Rust
date: 2022-01-01 11:51:44
icon: icon-cpp
background: bg-emerald-600
tags:
categories:
  - Programming
intro: |
    Rust quick reference cheat sheet that aims on providing help on writing basic syntax and methods.
---


# Getting Started 

- Hello_World.rs

```rust
 fn main() {
 
 println!("{}", "Hello, World!");

}
```

### Compiling and Running

```bash
$ rustc Hello_World.rs -o Hello_World
$ ./Hello_World
Hello, World!
```

## Formatting

```rust

fn main() {
    println!("{}", 1); /*Single Placeholder*/
    println!("{} {}", 1, 3); /* Multiple Placeholder */
    println!("{0} is {1} {2}, also {0} is a {3} programming language", "Rust", "cool", "language", "safe"); /*Positional Arguments*/
    println!("{country} is an diverse nation with unity.", country = "India"); /*Named Arguments*/
    println!("Let us print 76 is binary which is {:b} , and hex equivalent is {:0x} and octal equivalent is {:o}", 76, 76, 76); /*Placeholder traits :b for binary, :0x is for hex and :o is octal*/
    println!("Print whatever we want to here using debug trait {:?}", (76, 'A', 90)); /* Debug Trait*/
}
```

## Printing Styles

```rust

fn main(){
    print!("Hello World \n"); /* Prints the output to console*/
    println!("Appending a new line after printing"); /* Appends a new line after printing output to the console*/
    eprint!("This is an error\n"); /* Prints as an error*/
    eprintln!("This is an error with new line"); /* Similar to eprint just appends a new line after printing output to the console*/
}
```


## Comments

```rust

// Line Comments
/*.............Block Comments */
/// Outer doc comments
//! Inner doc comments
```


## Variables

```rust
fn main(){


  let some_variable = "This_is_a_variable"; // Initializing a variable and declaring it.
  println!("{}", some_variable); //Printing a variable
  let mut mutable_variable = "Mutable Variable"; // Making a variable mutable
  println!("{}", mutable_variable); // Printing the mutable variable
  let (name, age) = ("ElementalX", 20); //Assigning multiple variables
  println!("Hi , Myself {}, and am {}", name, age); // Printing the multiple variables
  
/* Shadowing*/
  {
    let some_variable = 2;
    println!("The value of some variable is : {}", some_variable); // This will print 2 aka the integer.
  }
  println!("The value of some variable is : {}", some_variable); // This will print the string.

  /* Scope */

  {

    let just_a_number = 1; /* The scope of thia variable is limited to this braces only*/

  }
  println!("The value of just_a_number is : {}", just_a_number); /* This will produce error as the scope of the variable just a number ends at the braces */
}

```

## Functions

```rust
fn test(){

println!("This is a function!");


}

fn main(){

  test();
}
```

# Basic Data Types


## Integer

```rust
fn main(){

let mut a: u32 = 8;
    let b: u64 = 877;
    let c: i64 = 8999;
    let d = -90;
    println!("The values of above integers are {:?}", (a, b, c, d));

}
```

## Floating-Point

```rust
fn main(){

let mut sixty_bit_float: f64 = 89.90;
    let thirty_two_bit_float: f32 = 7.90;
    let just_a_float = 69.69;
    println!("The floats declared above are : {:?}", (sixty_bit_float, thirty_two_bit_float, just_a_float));
}
```

## Boolean

```rust
fn main(){

    let true_val: bool = true;
    let false_val: bool = false;
    let just_a_bool = true;
    let is_true = 8 < 5;
    println!("The booleans declared above are {:?}", (true_val, false_val, just_a_bool, is_true));
}
```

## Character

```rust
    let first_letter_of_alphabet = 'a';
    let explicit_char: char = 'F';
    let implicit_char = '8';
    let emoji = "\u{1f600}";

    println!("The character declared above are : {:?}", (first_letter_of_alphabet, explicit_char, implicit_char, emoji));
```

## String Literal

```rust
fn main(){

    let community_name = "AXIAL";
    let no_of_members: &str = "ten";
    println!("The name of the community is {} and it has {} members", community_name, no_of_members);
  }
  ```


## Arrays


### 1-D Array

```rust

┌─────┬─────┬─────┬─────┬─────┬─────┐
| 92  | 97  | 98  | 99  | 98  | 94  |
└─────┴─────┴─────┴─────┴─────┴─────┘
   0     1     2     3     4     5

   ```

```rust

fn main(){


let array: [i64; 6] = [92,97,98,99,98,94];
println!("The elements of the array are : {:?}", array);

}   
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

   ```rust

fn main(){


let array: [[i64; 6] ;2] = [[1,2,3,4,5,6], [6,5,4,3,2,1]];
println!("The elements of the array are : {:?}", array);

}
```

### Mutable Array

```rust
fn main(){

let mut array: [i32 ; 3] = [ 2,6,10]; //Arrays are immutable by default, so use the 'mut' keyword to make it mutable.

array[1] = 4;
array[2] = 6;
println!("The elements of the array are : {:?}", array);


}
```


## Constants

```rust

const SCREAMING_SNAKE_CASE:i64 = 9;

fn main() {
  println!("The value of the constant variable is : {}", SCREAMING_SNAKE_CASE);
}
```

## Slices

```rust

fn main(){

let  mut array: [ i64; 4] = [1,2,3,4];
let mut slices: &[i64] = &array[0..3] // Lower range is inclusive and upper range is exclusive

println!("The elements of the slices are : {:?}", slices);

}
```


## Vectors

```rust

fn main(){


let some_vector = vec![1,2,3,4,5]; // a vector is declared using the "vec!" macro.
println!("The elements of the vector are : {:?}", some_vector);

}
```

## Tuples

```rust

fn main(){


let tuple = ( 1, 'A' , "Cool", 78, true);
println!("The elements of the tuple are : {}", tuple);
}
```


# Operators


## Arithmetic Operators


|           |                                                       |
|---------- |-------------------------------------------------------|
| `a +  b`  | a is added to b                                       |
| `a -  b`  | b is substracted from a                               |
| `a /  b`  | a is divided by b                                     |
| `a % b`   | gets remainder of a by dividing with b                |
| `a * b`   | a is multiped with b                                  |
|-----------|-------------------------------------------------------|


```rust
    let (a, b) = (4, 5);
    let sum: i32 = a + b;
    let subtractions: i32 = a - b;
    let multiplication: i32 = a * b;
    let division: i32 = a / b;
    let modulus: i32 = a % b;

  println!("The sum of both the numbers is {}, the subtractions is {}, the multiplication is {}, the division is {}, the modulus is {}", sum, subtractions, multiplication, division, modulus);
  ```



## Logical Operators


| Example        | Meaning                |
|----------------|------------------------|
| `C && D`       | Both are true _(AND)_  |
| `C OR D`       | Either is true _(OR)_  |
| `!C`           | `C` is false _(NOT)_   |
|----------------|------------------------|


```rust
   fn main(){

    let (c, d) = (true, false);
    let AND = c && d;
    let OR = c || d;
    let NOT = !c;
    println!("The result of C && D is : {}, C OR D is : {}, NOT C is : {}", AND, OR, NOT);
  }
```


## Comparision Operators

|          |                              |
|----------|------------------------------|
| `e == f` | e is equal to f              |
| `e != f` | e is NOT equal to f          |
| `e < f`  | e is less than f             |
| `e > f`  | e is greater f               |
| `e <= f` | e is less than or equal to f |
| `e >= f` | e is greater or equal to f   |


```rust
fn main(){


    let (e, f) = (1, 100);
    let greater_than = f > e;
    let less_than = f < e;
    let greater_than_equal = f >= e;
    let less_than_equal = e <= f;
    let equalto = e == f;
    let not_equalto = e != f;

    println!("The results of above operations are as follows: {}, {}, {}, {}", greater_than, less_than, greater_than_equal, less_than_equal);

}
```


## Bitwise Operators

| Operator | Description             |
|----------|-------------------------|
| `g & h`  | Binary AND              |
| `g | h`  | Binary OR               |
| `g ^ h`  | Binary XOR              |
| `g ~ h`  | Binary One's Complement |
| `g << h` | Binary Shift Left       |
| `g >> h` | Binary Shift Right      |


```rust
fn main(){

   let (g, h) = (0x1, 0x2);
    let bitwise_and = g & h;
    let bitwise_or = g | h;
    let bitwise_xor = g ^ h;
    let right_shift = g >> 2;
    let left_shift = h << 4;

    println!("The results of the above bitwise AND is  {} , bitwise Or is {}, Bitwise xor is {}, Right Shift is {}, left shift is {}", bitwise_and, bitwise_or, bitwise_xor, right_shift, left_shift);

}
```

## Type Casting

```rust

fn main(){

    let original_type = 90;
    let mut type_cast = (original_type as f64); // To perform type-casting in Rust one must use the 'as' keyword.
    println!(" The original type of the variable is int and the value is : {}", type_cast);
    type_cast = 90.009;
    println!("After type casting the variable is float and the value is  : {}", type_cast);

    let orginal: char = 'I';
    let type_casted: i64 = orginal as i64;
    println!("The value of type casted from character to integer is : {}", type_casted);
}
```

## Borrowing 

```rust
fn main(){

    let mut value_one = 4;
    let mut borrowed_value = &value_one; //here borrowed value borrows the value from value one using '&' operator
    println!("{}", borrowed_value);
    let mut value_two = 3;
    let mut mutable_borrowed_value = &mut value_two;
    println!("The value of mutable borrowed value is {}", mutable_borrowed_value);

}
```

## De-referencing 

```rust
fn main(){


    let mut borrow = 10;
    let deref = &mut borrow;
    println!("{}", *deref); // de-referencing in rust can be done using the '*' operator
}
```

## Compound Assignment Operator

```rust
//To-DO
```



