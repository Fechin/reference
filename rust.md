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
| Operator  | Description                               |
|-----------|-------------------------------------------|
| `k += l`  | Add a value and assign                    |
| `k -= l`  | Substract a value and assign              |
| `k /= l`  | Divide a value and assign                 |
| `k *= l`  | Multiply a value and assign               |
| `k |= l ` | Bitwise OR and assign                     |
```

```rust
    let mut k = 9;
    let mut l = k;
    println!("{}", l); // => 9
    k += l;            
    println!("{}", k);  // => 18
    k -= l;            
    println!("{}", k);  // => 9
    k *= l;             
    println!("{}", k); // => 81
    k |= l;             
    println!("{}", k); // => 89
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



Flow Control {.cols-3}
--------------

### If Expression

```rust
    let case1: i32 = 81;
    let case2: i32 = 82;

    if case1 < case2 {
        println!("Case 1 is greater than Case 2 "); // This statement will be printed as the comparision evaluates to true. 
    }
```

### If..Else Expression

```rust
  let case3 = 8;
    let case4 = 9;

    if case3 >= case4 {
        println!("Case 3 is better than Case 4 ");
    } else {
        println!("Case 4 is greater than Case 3"); // This statement will be executed because the statement inside the 'if' block is not true.
    }
```



### If..Else..if..Else Expression

```rust
    let variable_one = 12;
    let variable_two = 13;

    if variable_one == variable_two {
        println!("Variable one is equal to Variable 2");
    } else if variable_one < variable_two {
        println!("Variable one less than Variable two "); // This statement will be printed.
    } else if variable_one != variable_two {
        println!("Variable one is not equal to variable two");
    } else {
        println!("Nothing");
    }
```



### Nested..If Expression

```rust
     let nested_conditions = 89;
    if nested_conditions == 89{  // This condition evaluates to true, control of the program is passed inside the if block.

        let just_a_value = 98;
        if just_a_value >= 97{
            println!("The value is greater than 97"); // This statement will be printed, as the condition beside nested if statement evaluates to true.
        }
    }
```    

### If..Let Expression

```rust
    let mut new_array:[i64 ; 3] = [1,2,3];
    if let[1,2,_] = new_array{
        println!(" Works with array.");
    }

    let mut string_array:[&str; 2] = ["Apple", "Guava"];
    if let["Apple", _] = string_array{
        println!("Works with string array too!");
    }

    let new_tuple = ("India", 7, 90, 90.432);
    if let(_, 7, 9, 78.99) = new_tuple{
        println!("Works woth tuples too");
    }

    let second_new_tuple = ( 9, 7, 89, 12, "Okay");
    if let(9, 7,89, 12, blank) = second_new_tuple{
        println!("Is everything {} mate?", blank);
    }

    let third_new_tuple = (89, 90, "Yes");
    if let(9, 89, "Yes") = third_new_tuple{

        println!("Pattern did match");
    }
    else {

        println!("Pattern did not match");
    }
```

### Match Expression

```rust
let day_of_week = 2;

        match day_of_week {
            1 => {
                println!("Its Monday my dudes");
            },
            2 => {
                println!("It's Tuesday my dudes");
            },
            3 => {
                println!("It's Wednesday my dudes");
            },
            4 => {
                println!("It's Thursday my dudes");
            },
            5 => {
                println!("It's Friday my dudes");
            },
            6 => {
                println!("It's Saturday my dudes");
            },
            7 => {
                println!("It's Sunday my dudes");
            },
            _ => {
                println!("Default!")
            }
        };
    }
```    

### For Loop

```rust
for mut i in 0..15{

        i-=1;
        println!("The value of i is : {}", i);

    }
```



### While Loop

```rust
   let mut check =  0;
     while check < 11{

         println!("The value of check is : {}", check);
         check+=1;
         println!("The value of check after incrementing is : {}", check);

         if check == 10{
             break;
         }

     }
```

### Loop

```rust
let mut random_value = 5;

loop {
  
  random_value++;

}
```

### Break Statement

```rust

    let mut some_random_val = 90;
    loop {

        some_random_val+=1;
        println!("The  value of some random value is {}", some_random_val);
        if some_random_val == 100{
            break;
        }
    }
```    


### Continue Statement


```rust
for (some_var, count) in (0..10+1).enumerate(){
        println!("This is the {} number loop", count);
        if  some_var == 9{
            println!("Here we go continue statement?");
            continue;
        }
        println!{"The value of some_var is : {}", some_var};

    }
```


Functions {.cols-3}
--------------


### Functions - Basic Syntax

```rust

fn print_message(){

println!("Hello, World!");

}

fn main(){

print_message(); //Invoking a function in Rust.

}
```

### Functions - Pass by Value

```rust

fn main(){

   let pass_by_value = 1;
   println!("The value of pass by value variable is : {}", pass_by_value) ;
   multiplywith2(pass_by_value);
   println!("The value of pass by value is still : {}", pass_by_value);

}

fn multiplywith2(pass_by_value:i32) {

    let value = println!("The value of pass by value after getting a new function invoked is : {}", 2 * pass_by_value);

}
```

### Functions - Pass by Reference

```rust
fn main(){

     let mut pass_by_reference = 3;
     println!("The value of pass by reference variable is : {}", pass_by_reference);
     power_of_three( &mut pass_by_reference);
     println!("The modified value is  now : {}", pass_by_reference);


}

fn power_of_three(pass_by_reference: &mut i32){

    *pass_by_reference = *pass_by_reference * *pass_by_reference; //de-referencing is important
    println!("The value of the variable after invoking pass by reference function is : {}", pass_by_reference);
}
```



### Functions - Returns 

```rust
fn main(){

     let  (mut radius , mut pi) = (3.0, 3.14);
     let(area, _perimeter) = calculate_area_perimeter(
         &mut radius,
         &mut pi
     );
     println!("The area and the perimeter of the circle are : {} &  {}",area,_perimeter);

}

fn calculate_area_perimeter(radius : &mut f64, pi: &mut f64) -> (f64, f64){

    let perimeter = 2.0 * *pi * *radius;
    let area = *pi * *radius * *radius;
    return (area, perimeter);
    }
```

### Functions - Arrays as Arguments

```rust
fn main(){

     let mut array: [i32 ; 5] = [1,2,3,4,6];
     print_arrays(array);
     println!("The elements of the array are : {:?}", array);

   }

   fn print_arrays(mut array:[i32; 5]) {

    array[0] = 89;
    array[1] = 90;
    array[2] = 91;
    array[3] = 92;
    array[4] = 93;

    println!("The elements of the array are : {:?}", array);

}
```

### Function - Returning Arrays

```rust

fn main(){
     
     let mut multiply:[i32; 5] = [ 2,4,6,8,10];
     multiply_all(multiply);
     println!("The array is : {:?}", multiply_all(multiply));
}

fn multiply_all(mut multiply: [i32 ; 5]) -> [i32 ; 5]{

    multiply[2] = 90;
    for mut i in 0..5{

        multiply[i] = multiply[i] * multiply[2];
    }
    return multiply;

```


Strings {.cols-3}
--------------

### String Literal

```rust
     let safe_programming_language:&str = "Rust";
     println!("An example of safe programming language is : {}", safe_programming_language);
```


### String Object

```rust

 let other_safe_programminglanguage = String::new;  // Creating an empty string object
 let S_language = other_safe_programminglanguage.to_string() // Converting a string literal to a string object
 let language_one = String::from("Rust");  // Creating an initialized string object
 println!("The first language is {}", language_one);
 ```
 
 ### String Functions - .capacity()

 ```rust
     let test_capacity = String::from("Random String");
     println!("The capacity of the variable test_capacity is : {}", test_capacity.capacity()); // Calculates the capacity of the string in bytes.
 ```
 
 
### String Functions - .contains()

```rust
     let name = String::from("ElementalX");
     let check = name.contains("Element");
     println!("Does the word Element contain in the original string : {}", check); // Checks if the substring is contained inside the original string or not.
```         


### Updating a String - Pushing a single character

```rust
    let mut half_text = String::from("Hal");
    half_text.push('f');
    println!("The updated value of the variable is : {}", half_text);
```


### Updating a String - Pushing an entire String

```rust

     let mut half_message = String::from("Hey there...");
     half_message.push_str("How are you doing??");
     println!("{}", half_message);
```

### Strings and functions

```rust
     let mut param = "Just some text".to_string();
     test_print(&mut param);
     println!("The updated value of param is : {}", param);
```


Also see
--------

- [The Rust Document](https://doc.rust-lang.org/book/ch00-00-introduction.html) _(doc.rust-lang.org)_
- [The Rust Reference](https://doc.rust-lang.org/reference/introduction.html) _(doc.rust-lang.org)_


