---
title: C++
date: 2021-06-01 11:51:44
background: bg-[#6d94c7]
tags:
categories:
  - Programming
intro: |
  C++ quick reference cheat sheet that provides basic syntax and methods.
plugins:
  - copyCode
---

## Getting Started

### hello.cpp

```cpp
#include <iostream>

int main() {
    std::cout << "Hello CheatSheets\n";
    return 0;
}
```

Compiling and running

```shell script
$ g++ hello.cpp -o hello
$ ./hello
Hello CheatSheets
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

---

```cpp
int age {25};         // Since C++11
std::cout << age;     // Print 25
```

### Primitive Data Types

| Data Type | Size           | Range               |
| --------- | -------------- | ------------------- |
| `int`     | 4 bytes        | -2^31^ ^to^ 2^31^-1 |
| `float`   | 4 bytes        | _N/A_               |
| `double`  | 8 bytes        | _N/A_               |
| `char`    | 1 byte         | -128 ^to^ 127       |
| `bool`    | 1 byte         | true / false        |
| `void`    | _N/A_          | _N/A_               |
| `wchar_t` | 2 ^or^ 4 bytes | 1 wide character    |

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
int a = 5, b = 10;
std::swap(a, b);

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

See: [Conditionals](#c-conditionals)

### Loops

```cpp
for (int i = 0; i < 10; i++) {
    std::cout << i << "\n";
}
```

See: [Loops](#c-loops)

### Functions

```cpp
#include <iostream>

void hello(); // Declaring

int main() {  // main function
    hello();    // Calling
}

void hello() { // Defining
    std::cout << "Hello CheatSheets!\n";
}
```

See: [Functions](#c-functions)

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

### Namespaces

```cpp
#include <iostream>
namespace ns1 {int val(){return 5;}}
int main()
{
    std::cout << ns1::val();
}
```

---

```cpp
#include <iostream>
namespace ns1 {int val(){return 5;}}
using namespace ns1;
using namespace std;
int main()
{
    cout << val();
}
```

Namespaces allow global identifiers under a name

## C++ Arrays

### Declaration

```cpp
std::array<int, 3> marks; // Definition
marks[0] = 92;
marks[1] = 97;
marks[2] = 98;

// Define and initialize
std::array<int, 3> = {92, 97, 98};

// With empty members
std::array<int, 3> marks = {92, 97};
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
std::array<int, 6> marks = {92, 97, 98, 99, 98, 94};

// Print first element
std::cout << marks[0];

// Change 2nd element to 99
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

## C++ Conditionals

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
| -------- | ---------------------------- |
| `a == b` | a is equal to b              |
| `a != b` | a is NOT equal to b          |
| `a < b`  | a is less than b             |
| `a > b`  | a is greater b               |
| `a <= b` | a is less than or equal to b |
| `a >= b` | a is greater or equal to b   |

#### Assignment Operators

| Example  | Equivalent to    |
| -------- | ---------------- |
| `a += b` | _Aka_ a = a + b  |
| `a -= b` | _Aka_ a = a - b  |
| `a *= b` | _Aka_ a = a \* b |
| `a /= b` | _Aka_ a = a / b  |
| `a %= b` | _Aka_ a = a % b  |

#### Logical Operators

| Example                     | Meaning                |
| --------------------------- | ---------------------- |
| `exp1 && exp2`              | Both are true _(AND)_  |
| <code>exp1 \|\| exp2</code> | Either is true _(OR)_  |
| `!exp`                      | `exp` is false _(NOT)_ |

#### Bitwise Operators

| Operator            | Description             |
| ------------------- | ----------------------- |
| `a & b`             | Binary AND              |
| <code>a \| b</code> | Binary OR               |
| `a ^ b`             | Binary XOR              |
| `~ a`               | Binary One's Complement |
| `a << b`            | Binary Shift Left       |
| `a >> b`            | Binary Shift Right      |

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

## C++ Loops

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

int main()
{
    auto print = [](int num) { std::cout << num << std::endl; };

    std::array<int, 4> arr = {1, 2, 3, 4};
    std::for_each(arr.begin(), arr.end(), print);
    return 0;
}
```

### Range-based (Since C++11)

```cpp
for (int n : {1, 2, 3, 4, 5}) {
    std::cout << n << " ";
}
// Outputs: 1 2 3 4 5
```

---

```cpp
std::string hello = "CheatSheets.zip";
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

## C++ Functions

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

`add` is a function taking 2 ints and returning int

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

## C++ Classes & Objects {.cols-2}

### Defining a Class

```cpp
class MyClass {
  public:             // Access specifier
    int myNum;        // Attribute (int variable)
    string myString;  // Attribute (string variable)
};

```

### Creating an Object

```cpp
MyClass myObj;  // Create an object of MyClass

myObj.myNum = 15;          // Set the value of myNum to 15
myObj.myString = "Hello";  // Set the value of myString to "Hello"

cout << myObj.myNum << endl;         // Output 15
cout << myObj.myString << endl;      // Output "Hello"

```

### Constructors

```cpp
class MyClass {
  public:
    int myNum;
    string myString;
    MyClass() {  // Constructor
      myNum = 0;
      myString = "";
    }
};

MyClass myObj;  // Create an object of MyClass

cout << myObj.myNum << endl;         // Output 0
cout << myObj.myString << endl;      // Output ""

```

### Destructors

```cpp
class MyClass {
  public:
    int myNum;
    string myString;
    MyClass() {  // Constructor
      myNum = 0;
      myString = "";
    }
    ~MyClass() {  // Destructor
      cout << "Object destroyed." << endl;
    }
};

MyClass myObj;  // Create an object of MyClass

// Code here...

// Object is destroyed automatically when the program exits the scope


```

### Class Methods

```cpp
class MyClass {
  public:
    int myNum;
    string myString;
    void myMethod() {  // Method/function defined inside the class
      cout << "Hello World!" << endl;
    }
};

MyClass myObj;  // Create an object of MyClass
myObj.myMethod();  // Call the method
```

### Access Modifiers

```cpp
class MyClass {
  public:     // Public access specifier
    int x;    // Public attribute
  private:    // Private access specifier
    int y;    // Private attribute
  protected:  // Protected access specifier
    int z;    // Protected attribute
};

MyClass myObj;
myObj.x = 25;  // Allowed (public)
myObj.y = 50;  // Not allowed (private)
myObj.z = 75;  // Not allowed (protected)

```

### Getters and Setters

```cpp
class MyClass {
  private:
    int myNum;
  public:
    void setMyNum(int num) {  // Setter
      myNum = num;
    }
    int getMyNum() {  // Getter
      return myNum;
    }
};

MyClass myObj;
myObj.setMyNum(15);  // Set the value of myNum to 15
cout << myObj.getMyNum() << endl;  // Output 15

```

### Inheritance

```cpp
class Vehicle {
  public:
    string brand = "Ford";
    void honk() {
      cout << "Tuut, tuut!" << endl;
    }
};

class Car : public Vehicle {
  public:
    string model = "Mustang";
};

Car myCar;
myCar.honk();  // Output "Tuut, tuut!"
cout << myCar.brand + " " + myCar.model << endl;  // Output "Ford Mustang"
```

## C++ Preprocessor

### Preprocessor {.row-span-3}

- [if](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [elif](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [else](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [endif](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [ifdef](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [ifndef](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [define](https://en.cppreference.com/w/cpp/preprocessor/replace)
- [undef](https://en.cppreference.com/w/cpp/preprocessor/replace)
- [include](https://en.cppreference.com/w/cpp/preprocessor/include)
- [line](https://en.cppreference.com/w/cpp/preprocessor/line)
- [error](https://en.cppreference.com/w/cpp/preprocessor/error)
- [pragma](https://en.cppreference.com/w/cpp/preprocessor/impl)
- [defined](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [\_\_has_include](https://en.cppreference.com/w/cpp/feature_test)
- [\_\_has_cpp_attribute](https://en.cppreference.com/w/cpp/feature_test)
- [export](https://en.cppreference.com/w/cpp/keyword/export)
- [import](https://en.cppreference.com/mwiki/index.php?title=cpp/keyword/import&action=edit&redlink=1)
- [module](https://en.cppreference.com/mwiki/index.php?title=cpp/keyword/module&action=edit&redlink=1)

{.marker-none .cols-2}

### Includes

```cpp
#include "iostream"
#include <iostream>
```

### Defines

```cpp
#define FOO
#define FOO "hello"

#undef FOO
```

### If {.row-span-2}

```cpp
#ifdef DEBUG
  console.log('hi');
#elif defined VERBOSE
  ...
#else
  ...
#endif
```

### Error

```cpp
#if VERSION == 2.0
  #error Unsupported
  #warning Not really supported
#endif
```

### Macro

```cpp
#define DEG(x) ((x) * 57.29)
```

### Token concat

```cpp
#define DST(name) name##_s name##_t
DST(object);   #=> object_s object_t;
```

### Stringification

```cpp
#define STR(name) #name
char * a = STR(object);   #=> char * a = "object";
```

### file and line

```cpp
#define LOG(msg) console.log(__FILE__, __LINE__, msg)
#=> console.log("file.txt", 3, "hey")
```

## Miscellaneous

### Escape Sequences

| Escape Sequences | Characters            |
| ---------------- | --------------------- |
| `\b`             | Backspace             |
| `\f`             | Form feed             |
| `\n`             | Newline               |
| `\r`             | Return                |
| `\t`             | Horizontal tab        |
| `\v`             | Vertical tab          |
| `\\`             | Backslash             |
| `\'`             | Single quotation mark |
| `\"`             | Double quotation mark |
| `\?`             | Question mark         |
| `\0`             | Null Character        |

### Keywords {.col-span-2 .row-span-2}

- [alignas](https://en.cppreference.com/w/cpp/keyword/alignas)
- [alignof](https://en.cppreference.com/w/cpp/keyword/alignof)
- [and](https://en.cppreference.com/w/cpp/keyword/and)
- [and_eq](https://en.cppreference.com/w/cpp/keyword/and_eq)
- [asm](https://en.cppreference.com/w/cpp/keyword/asm)
- [atomic_cancel](https://en.cppreference.com/w/cpp/keyword/atomic_cancel)
- [atomic_commit](https://en.cppreference.com/w/cpp/keyword/atomic_commit)
- [atomic_noexcept](https://en.cppreference.com/w/cpp/keyword/atomic_noexcept)
- [auto](https://en.cppreference.com/w/cpp/keyword/auto)
- [bitand](https://en.cppreference.com/w/cpp/keyword/bitand)
- [bitor](https://en.cppreference.com/w/cpp/keyword/bitor)
- [bool](https://en.cppreference.com/w/cpp/keyword/bool)
- [break](https://en.cppreference.com/w/cpp/keyword/break)
- [case](https://en.cppreference.com/w/cpp/keyword/case)
- [catch](https://en.cppreference.com/w/cpp/keyword/catch)
- [char](https://en.cppreference.com/w/cpp/keyword/char)
- [char8_t](https://en.cppreference.com/w/cpp/keyword/char8_t)
- [char16_t](https://en.cppreference.com/w/cpp/keyword/char16_t)
- [char32_t](https://en.cppreference.com/w/cpp/keyword/char32_t)
- [class](https://en.cppreference.com/w/cpp/keyword/class)
- [compl](https://en.cppreference.com/w/cpp/keyword/compl)
- [concept](https://en.cppreference.com/w/cpp/keyword/concept)
- [const](https://en.cppreference.com/w/cpp/keyword/const)
- [consteval](https://en.cppreference.com/w/cpp/keyword/consteval)
- [constexpr](https://en.cppreference.com/w/cpp/keyword/constexpr)
- [constinit](https://en.cppreference.com/w/cpp/keyword/constinit)
- [const_cast](https://en.cppreference.com/w/cpp/keyword/const_cast)
- [continue](https://en.cppreference.com/w/cpp/keyword/continue)
- [co_await](https://en.cppreference.com/w/cpp/keyword/co_await)
- [co_return](https://en.cppreference.com/w/cpp/keyword/co_return)
- [co_yield](https://en.cppreference.com/w/cpp/keyword/co_yield)
- [decltype](https://en.cppreference.com/w/cpp/keyword/decltype)
- [default](https://en.cppreference.com/w/cpp/keyword/default)
- [delete](https://en.cppreference.com/w/cpp/keyword/delete)
- [do](https://en.cppreference.com/w/cpp/keyword/do)
- [double](https://en.cppreference.com/w/cpp/keyword/double)
- [dynamic_cast](https://en.cppreference.com/w/cpp/keyword/dynamic_cast)
- [else](https://en.cppreference.com/w/cpp/keyword/else)
- [enum](https://en.cppreference.com/w/cpp/keyword/enum)
- [explicit](https://en.cppreference.com/w/cpp/keyword/explicit)
- [export](https://en.cppreference.com/w/cpp/keyword/export)
- [extern](https://en.cppreference.com/w/cpp/keyword/extern)
- [false](https://en.cppreference.com/w/cpp/keyword/false)
- [float](https://en.cppreference.com/w/cpp/keyword/float)
- [for](https://en.cppreference.com/w/cpp/keyword/for)
- [friend](https://en.cppreference.com/w/cpp/keyword/friend)
- [goto](https://en.cppreference.com/w/cpp/keyword/goto)
- [if](https://en.cppreference.com/w/cpp/keyword/if)
- [inline](https://en.cppreference.com/w/cpp/keyword/inline)
- [int](https://en.cppreference.com/w/cpp/keyword/int)
- [long](https://en.cppreference.com/w/cpp/keyword/long)
- [mutable](https://en.cppreference.com/w/cpp/keyword/mutable)
- [namespace](https://en.cppreference.com/w/cpp/keyword/namespace)
- [new](https://en.cppreference.com/w/cpp/keyword/new)
- [noexcept](https://en.cppreference.com/w/cpp/keyword/noexcept)
- [not](https://en.cppreference.com/w/cpp/keyword/not)
- [not_eq](https://en.cppreference.com/w/cpp/keyword/not_eq)
- [nullptr](https://en.cppreference.com/w/cpp/keyword/nullptr)
- [operator](https://en.cppreference.com/w/cpp/keyword/operator)
- [or](https://en.cppreference.com/w/cpp/keyword/or)
- [or_eq](https://en.cppreference.com/w/cpp/keyword/or_eq)
- [private](https://en.cppreference.com/w/cpp/keyword/private)
- [protected](https://en.cppreference.com/w/cpp/keyword/protected)
- [public](https://en.cppreference.com/w/cpp/keyword/public)
- [reflexpr](https://en.cppreference.com/w/cpp/keyword/reflexpr)
- [register](https://en.cppreference.com/w/cpp/keyword/register)
- [reinterpret_cast](https://en.cppreference.com/w/cpp/keyword/reinterpret_cast)
- [requires](https://en.cppreference.com/w/cpp/keyword/requires)
- [return](https://en.cppreference.com/w/cpp/language/return)
- [short](https://en.cppreference.com/w/cpp/keyword/short)
- [signed](https://en.cppreference.com/w/cpp/keyword/signed)
- [sizeof](https://en.cppreference.com/w/cpp/keyword/sizeof)
- [static](https://en.cppreference.com/w/cpp/keyword/static)
- [static_assert](https://en.cppreference.com/w/cpp/keyword/static_assert)
- [static_cast](https://en.cppreference.com/w/cpp/keyword/static_cast)
- [struct](https://en.cppreference.com/w/cpp/keyword/struct)
- [switch](https://en.cppreference.com/w/cpp/keyword/switch)
- [synchronized](https://en.cppreference.com/w/cpp/keyword/synchronized)
- [template](https://en.cppreference.com/w/cpp/keyword/template)
- [this](https://en.cppreference.com/w/cpp/keyword/this)
- [thread_local](https://en.cppreference.com/w/cpp/keyword/thread_local)
- [throw](https://en.cppreference.com/w/cpp/keyword/throw)
- [true](https://en.cppreference.com/w/cpp/keyword/true)
- [try](https://en.cppreference.com/w/cpp/keyword/try)
- [typedef](https://en.cppreference.com/w/cpp/keyword/typedef)
- [typeid](https://en.cppreference.com/w/cpp/keyword/typeid)
- [typename](https://en.cppreference.com/w/cpp/keyword/typename)
- [union](https://en.cppreference.com/w/cpp/keyword/union)
- [unsigned](https://en.cppreference.com/w/cpp/keyword/unsigned)
- [using](https://en.cppreference.com/w/cpp/keyword/using)
- [virtual](https://en.cppreference.com/w/cpp/keyword/virtual)
- [void](https://en.cppreference.com/w/cpp/keyword/void)
- [volatile](https://en.cppreference.com/w/cpp/keyword/volatile)
- [wchar_t](https://en.cppreference.com/w/cpp/keyword/wchar_t)
- [while](https://en.cppreference.com/w/cpp/keyword/while)
- [xor](https://en.cppreference.com/w/cpp/keyword/xor)
- [xor_eq](https://en.cppreference.com/w/cpp/keyword/xor_eq)
- [final](https://en.cppreference.com/w/cpp/language/final)
- [override](https://en.cppreference.com/w/cpp/language/override)
- [transaction_safe](https://en.cppreference.com/w/cpp/language/transactional_memory)
- [transaction_safe_dynamic](https://en.cppreference.com/w/cpp/language/transactional_memory) {.marker-none .cols-5}

### Preprocessor

- [if](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [elif](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [else](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [endif](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [ifdef](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [ifndef](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [define](https://en.cppreference.com/w/cpp/preprocessor/replace)
- [undef](https://en.cppreference.com/w/cpp/preprocessor/replace)
- [include](https://en.cppreference.com/w/cpp/preprocessor/include)
- [line](https://en.cppreference.com/w/cpp/preprocessor/line)
- [error](https://en.cppreference.com/w/cpp/preprocessor/error)
- [pragma](https://en.cppreference.com/w/cpp/preprocessor/impl)
- [defined](https://en.cppreference.com/w/cpp/preprocessor/conditional)
- [\_\_has_include](https://en.cppreference.com/w/cpp/feature_test)
- [\_\_has_cpp_attribute](https://en.cppreference.com/w/cpp/feature_test)
- [export](https://en.cppreference.com/w/cpp/keyword/export)
- [import](https://en.cppreference.com/mwiki/index.php?title=cpp/keyword/import&action=edit&redlink=1)
- [module](https://en.cppreference.com/mwiki/index.php?title=cpp/keyword/module&action=edit&redlink=1) {.marker-none
  .cols-2}

## Also see

- [C++ Infographics & Cheat Sheets](https://hackingcpp.com/cpp/cheat_sheets.html) _(hackingcpp.com)_

- [C++ reference](https://en.cppreference.com/w/) _(cppreference.com)_
- [C++ Language Tutorials](http://www.cplusplus.com/doc/tutorial/) _(cplusplus.com)_
