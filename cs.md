---
title: C#
date: 2021-12-14 12:22:00
icon: icon-cs
background: bg-[#8c4c8a]
tags:
    - object-oriented
    - class
categories:
    - Programming
intro: |
    C# quick reference cheat sheet that provides basic syntax and methods.
---


Getting started {.cols-3}
--------

### Hello.cs {.row-span-2}
```cs
class Hello {
  // main method
  static void Main(string[] args)
  {
    // Output: Hello, world!
    Console.WriteLine("Hello, world!");
  }
}
```
Compiling and running (make sure you are in the project directory)
```shell script
$ dotnet run
Hello, world!
```


### Variables
```cs
int intNum = 9;
long longNum = 9999999;
float floatNum = 9.99F;
double doubleNum = 99.999;
decimal decimalNum = 99.9999M;
char letter = 'D';
bool @bool = true;
string site = "quickref.me";
var num = 999;
var str = "999";
var bo = false;
```


### Primitive Data Types 
| Data Type | Size             | Range                   |
| --------- | ---------------- | ----------------------- |
| `int`     | 4 bytes          | -2^31^ ^to^ 2^31^-1     |
| `long`    | 8 bytes          | -2^63^ ^to^ 2^63^-1     |
| `float`   | 4 bytes          | 6 to 7 decimal digits   |
| `double`  | 8 bytes          | 15 decimal digits       |
| `decimal` | 16 bytes         | 28 to 29 decimal digits |
| `char`    | 2 bytes          | 0 ^to^ 65535            |
| `bool`    | 1 bit            | true / false            |
| `string`  | 2 bytes per char | _N/A_                   |
{.show-header}


### Strings
```cs
string first = "John";
string last = "Doe";
string name = first + " " + last;
// Or string interpolation : 
// Same as string name = $"{first} {last}"
Console.WriteLine(name);
```


### User Input
```cs
Console.WriteLine("Enter number:");
if(int.TryParse(Console.ReadLine(),out int input))
{
       // Input validated
       Console.WriteLine($"You entered {input}");
}
```


### Conditionals
```cs
int j = 10;

if (j == 10) {
  Console.WriteLine("I get printed");
} else if (j > 10) {
  Console.WriteLine("I don't");
} else {
  Console.WriteLine("I also don't");
}
```


### Arrays
```cs
char[] chars = new char[10];
chars[0] = 'a';
chars[1] = 'b';
string[] letters = {"A", "B", "C"};
int[] mylist = {100, 200};
bool[] answers = {true, false};
```


### Loops
```cs
int[] numbers = {1, 2, 3, 4, 5};
for(int i = 0; i < numbers.Length; i++) {
    Console.WriteLine(numbers[i]);
}
foreach(int num in numbers) {
    Console.WriteLine(num);
}
```