---
title: C++
date: 2021-06-01 11:51:44
icon: icon-cpp
background: bg-blue-800
tags:
categories:
  - Programming
intro: |
    C++ quick reference cheat sheet that provides basic syntax and methods.
---


Getting started {.cols-3}
--------

### hello.cpp
```cpp
#include <iostream>

int main() {
    std::cout << "Hello QuickRef\n";
    return 0;
}
```
Compiling and running
```shell script
$ g++ hello.cpp -o hello
$ ./hello
Hello QuickRef
```



### Variables
```cpp
int number = 5;       // Integer
float f = 0.95;       // Floating number
double PI = 3.14159;  // Floating number
char yes = 'Y';       // Character
std::string s = "ME"; // String (text)
bool isRight = true;  // Boolean

// Constants
const float RATE = 0.8;
```
----
```cpp
int age {25};         // Since C++11
std::cout << age;     // Print 25
```





### Primitive Data Types 
| Data Type | Size    | Range               |
|-----------|---------|---------------------|
| `int`     | 4 bytes | -2^31^ ^to^ 2^31^-1 |
| `float`   | 4 bytes |_N/A_                |
| `double`  | 8 bytes |_N/A_                |
| `char`    | 1 byte  | -128 ^to^ 127       |
| `bool`    | 1 byte  | true / false        |
| `void`    |_N/A_    |_N/A_                |
| `wchar_t` | 2 ^or^ 4 bytes|  1 wide character  |
{.show-header}





### User Input

```cpp
int num;

std::cout << "Type a number: ";
std::cin >> num;

std::cout << "You entered " << num;
```





### Swap
```cpp
int a = 5, b = 10, temp;
temp = a;
a = b;
b = temp;

// Outputs: a=10, b=5
std::cout << "a=" << a << ", b=" << b;
```




### Comments
```cpp
// A single one line comment in C++

/* This is a multiple line comment
   in C++ */
```



### If statement
```cpp
if (a == 10) {
    // do something
}
```
See: [Conditionals](#conditionals)




### Loops
```cpp
for (int i = 0; i < 10; i++) {
    std::cout << i << "\n";
}
```
See: [Loops](#loops-2)


### Functions
```cpp
#include <iostream>
 
void hello(); // Declaring
 
int main() {  // main function
    hello();    // Calling
}
 
void hello() { // Defining
    std::cout << "Hello QuickRef!\n";
}
```
See: [Functions](#functions-2)



### References
```cpp
int i = 1;
int& ri = i; // ri is a reference to i

ri = 2; // i is now changed to 2
std::cout << "i=" << i;

i = 3;   // i is now changed to 3
std::cout << "ri=" << ri;
```
`ri` and `i` refer to the same memory location.

### Vectors
```cpp

```
### Vectors
```cpp

```

Arrays {.cols-3}
------

### Declaration
```cpp
int marks[3]; // Declaration
marks[0] = 92;
marks[1] = 97;
marks[2] = 98;

// Declare and initialize
int marks[3] = {92, 97, 98};
int marks[]  = {92, 97, 98};

// With empty members
int marks[3] = {92, 97};
std::cout << marks[2]; // Outputs: 0
```


### Manipulation
```cpp
┌─────┬─────┬─────┬─────┬─────┬─────┐
| 92  | 97  | 98  | 99  | 98  | 94  |
└─────┴─────┴─────┴─────┴─────┴─────┘
   0     1     2     3     4     5
```
---
```cpp
int marks[6] = {92, 97, 98, 99, 98, 94};

// Print first element
std::cout << marks[0];

// Change 2th element to 99
marks[1] = 99;

// Take input from the user
std::cin >> marks[2];
```

### Displaying
```cpp
char ref[5] = {'R', 'e', 'f'};

// Range based for loop
for (const int &n : ref) {
    std::cout << std::string(1, n);
}

// Traditional for loop
for (int i = 0; i < sizeof(ref); ++i) {
    std::cout << ref[i];
}
```

### Multidimensional
```cpp
     j0   j1   j2   j3   j4   j5
   ┌────┬────┬────┬────┬────┬────┐
i0 | 1  | 2  | 3  | 4  | 5  | 6  |
   ├────┼────┼────┼────┼────┼────┤
i1 | 6  | 5  | 4  | 3  | 2  | 1  |
   └────┴────┴────┴────┴────┴────┘
```
---
```cpp
int x[2][6] = {
    {1,2,3,4,5,6}, {6,5,4,3,2,1}
};
for (int i = 0; i < 2; ++i) {
    for (int j = 0; j < 6; ++j) {
        std::cout << x[i][j] << " ";
    }
}
// Outputs: 1 2 3 4 5 6 6 5 4 3 2 1 
```

Conditionals {.cols-3}
------------


### If Clause
```cpp
if (a == 10) {
    // do something
}
```
---
```cpp
int number = 16;

if (number % 2 == 0)
{
    std::cout << "even";
}
else
{
    std::cout << "odd";
}

// Outputs: even
```



### Else if Statement
```cpp
int score = 99;
if (score == 100) {
    std::cout << "Superb";
}
else if (score >= 90) {
    std::cout << "Excellent";
}
else if (score >= 80) {
    std::cout << "Very Good";
}
else if (score >= 70) {
    std::cout << "Good";
}
else if (score >= 60)
    std::cout << "OK";
else
    std::cout << "What?";
```


### Operators {.row-span-2}

#### Relational Operators

|          |                              |
|----------|------------------------------|
| `a == b` | a is equal to b              |
| `a != b` | a is NOT equal to b          |
| `a < b`  | a is less than b             |
| `a > b`  | a is greater b               |
| `a <= b` | a is less than or equal to b |
| `a >= b` | a is greater or equal to b   |

#### Assignment Operators

| Example  | Equivalent to           |
|----------|-------------------------|
| `a += b` | _Aka_ a = a + b |
| `a -= b` | _Aka_ a = a - b |
| `a *= b` | _Aka_ a = a * b |
| `a /= b` | _Aka_ a = a / b |
| `a %= b` | _Aka_ a = a % b |

#### Logical Operators

| Example              | Meaning                |
|----------------------|------------------------|
| `exp1 && exp2`       | Both are true _(AND)_  |
| `exp1 || exp2`       | Either is true _(OR)_  |
| `!exp`               | `exp` is false _(NOT)_ |

#### Bitwise Operators

| Operator     | Description             |
|--------------|-------------------------|
| `a & b`      | Binary AND              |
| `a | b`      | Binary OR               |
| `a ^ b`      | Binary XOR              |
| `a ~ b`      | Binary One's Complement |
| `a << b`     | Binary Shift Left       |
| `a >> b`     | Binary Shift Right      |


### Ternary Operator
```
           ┌── True ──┐
Result = Condition ? Exp1 : Exp2;
           └───── False ─────┘
```
---
```cpp
int x = 3, y = 5, max;
max = (x > y) ? x : y;

// Outputs: 5
std::cout << max << std::endl;
```
--- 
```cpp
int x = 3, y = 5, max;
if (x > y) {
    max = x;
} else {
    max = y;
}
// Outputs: 5
std::cout << max << std::endl;
```




### Switch Statement
```cpp
int num = 2;
switch (num) {
    case 0:
        std::cout << "Zero";
        break;
    case 1:
        std::cout << "One";
        break;
    case 2:
        std::cout << "Two";
        break;
    case 3:
        std::cout << "Three";
        break;
    default:
        std::cout << "What?";
        break;
}
```




Loops {.cols-3}
------------



### While
```cpp
int i = 0;
while (i < 6) {
    std::cout << i++;
}

// Outputs: 012345
```

### Do-while
```cpp
int i = 1;
do {
    std::cout << i++;
} while (i <= 5);

// Outputs: 12345
```


### Continue statements
```cpp
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    std::cout << i;
} // Outputs: 13579
```




### Infinite loop
```cpp
while (true) { // true or 1
    std::cout << "infinite loop";
}
```
---
```cpp
for (;;) {
    std::cout << "infinite loop";
}
```
---
```cpp
for(int i = 1; i > 0; i++) {
    std::cout << "infinite loop";
}
```

### for_each (Since C++11)
```cpp
#include <iostream>

void print(int num)
{
    std::cout << num << std::endl;
}

int main()
{
    int arr[4] = {1, 2, 3, 4 };
    std::for_each(arr, arr + 4, print);
    return 0;
}
```



### Range-based (Since C++11)
```cpp
int num_array[] = {1, 2, 3, 4, 5};
for (int n : num_array) {
    std::cout << n << " ";
}
// Outputs: 1 2 3 4 5
```
---
```cpp
std::string hello = "QuickRef.ME";
for (char c: hello)
{
    std::cout << c << " ";
}
// Outputs: Q u i c k R e f . M E 
```


### Break statements
```cpp
int password, times = 0;
while (password != 1234) {
    if (times++ >= 3) {
        std::cout << "Locked!\n";
        break;
    }
    std::cout << "Password: ";
    std::cin >> password; // input
}
```



### Several variations
```cpp
for (int i = 0, j = 2; i < 3; i++, j--){
    std::cout << "i=" << i << ",";
    std::cout << "j=" << j << ";";
}
// Outputs: i=0,j=2;i=1,j=1;i=2,j=0;
```



Functions {.cols-3}
------------


### Arguments & Returns
```cpp
#include <iostream>

int add(int a, int b) {
    return a + b;  
}

int main() {
    std::cout << add(10, 20); 
}
```

### Overloading
```cpp
void fun(string a, string b) {
    std::cout << a + " " + b;
}
void fun(string a) {
    std::cout << a;
}
void fun(int a) {
    std::cout << a;
}
```

### Built-in Functions
```cpp
#include <iostream>
#include <cmath> // import library
 
int main() {
    // sqrt() is from cmath
    std::cout << sqrt(9);
}
```


Classes & Objects {.cols-3}
-----------------


### If statement
```cpp

```

### If statement
```cpp

```

### If statement
```cpp

```

### If statement
```cpp

```



Miscellaneous {.cols-3}
-------------

### Escape Sequences

| Escape Sequences | Characters            |
|------------------|-----------------------|
| `\b`              | Backspace             |
| `\f`              | Form feed             |
| `\n`              | Newline               |
| `\r`              | Return                |
| `\t`              | Horizontal tab        |
| `\v`              | Vertical tab          |
| `\\`              | Backslash             |
| `\'`              | Single quotation mark |
| `\"`              | Double quotation mark |
| `\?`              | Question mark         |
| `\0`              | Null Character        |




## Also see
* [C++ Infographics & Cheat Sheets](https://hackingcpp.com/cpp/cheat_sheets.html) _(hackingcpp.com)_
* [C++ reference](https://en.cppreference.com/w/) _(cppreference.com)_
* [C++ Language Tutorials](http://www.cplusplus.com/doc/tutorial/) _(cplusplus.com)_


