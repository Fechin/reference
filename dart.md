---
title: Dart
date: 2021-11-04 10:12:25
icon: icon-dart
background: bg-blue-500
tags:
    - dart
    - flutter
categories:
  - Programming
intro: |
    A Dart cheat sheet with the most important concepts, functions, methods, and more. A complete quick reference for beginners.
---




Getting started 
------------

### main function
```dart
// top-level function where app execution starts
void main(){
    print("Hello World!"); // Print to console
}
```


### Variables

```dart
int x = 2; // explicitly typed
var p = 5; // type inferred - Generic var with type inference

dynamic z = 8; // variable can take on any type
z = "cool"; // cool

// if you never intend to change a variable use final or const. Something like this:

final email = "temid@gmail.com"; // Same as var but cannot be reassigned
final String email = "temid@gmail.com"; // you can't change the value

const qty = 5; // Compile-time constant
```


### Datatypes

```dart

int age = 20; // integers, range -2^63 to 2^63 - 1
double height = 1.85; // floating-point numbers

// You can also declare a variable as a num
num x = 1;  // x can have both int and double values
num += 2.5;
print(num); //Print: 3.5

String name = "Nicola";

bool isFavourite = true;
bool isLoaded = false;
```


### String interpolation

```dart
// can use single or double qoutes for String type
var firstName = 'Nicola';
var lastName = "Tesla";

//can embed variables in string with $
String fullName = "$firstName $lastName";

// concatenate with +
var name = "Albert " + "Einstein";

String upperCase = '${firstName.toUpperCase()}';
print(upperCase); //Print: NICOLA
```


Operators
------------

### Arithmatic Operators
```dart
print(2 + 3); //Print: 5
print(2 - 3); //Print: -1
print(2 * 3); //Print: 6
print(5 / 2);  //Print: 2.5 - Result is a double
print(5 ~/ 2); //Print: 2 - Result is an int
print(5 % 2); //Print: 1 - Remainder

int a = 1, b;
// Increment
b = ++a; // preIncrement - Increment a before b gets its value.
b = a++; // postIncrement - Increment a AFTER b gets its value.

//Decrement
b = --a; // predecrement - Decrement a before b gets its value.
b = a--; // postdecrement - Decrement a AFTER b gets its value.
```


### Equality and relational operators
```dart
print(2 == 2);  //Print: true - Equal
print(2 != 3); //Print: true - Not  Equal
print(3 > 2); //Print: true - Grater than
print(2 < 3); //Print: true - Less than
print(3 >= 3); //Print: true - Greater than or equal to
print(2 <= 3); //Print: true - Less than or equal to
```


### Logical operators
```dart
// !expr inverts the expression (changes false to true, and vice versa)
// ||	logical OR
// &&	logical AND
bool isOutOfStock = false;
int quantity = 3;
if (!isOutOfStock && (quantity == 2 || quantity == 3)) {
  // ...Order the product...
}
```




Control Flows : Conditionals
------------


### if and else if
```dart
if(age < 18){
    print("Teen");
} else if( age > 18 && age <60){
    print("Adult");
} else {
    print("Old");
}
```


### switch case
```dart
enum Pet {dog, cat}
Pet myPet = Pet.dog;
switch(myPet){
    case Pet.dog:
        print('My Pet is Dog.');
        break;
    case Pet.cat:
        print('My Pet is Cat.');
        break;
    default:
        print('I don\'t have a Pet');
}
// Prints: My Pet is Dog.
```




Control Flows : Loops
------------


### while loop
```dart
// while loop check condition before iteration of the loop
while (!dreamsAchieved) {
  workHard();
}
```

### do-while loop
```dart
// do-while loop verifies the condition after the execution of the statements inside the loop
do {
  workHard();
} while (!dreamsAchieved);
```

### for loop
```dart
for(int i=0; i< 10; i++){
    print(i);
}

var numbers = [1,2,3];
// for-in loop for lists
for(var number in numbers){
    print(number);
}
```



Collections
------------

### Lists

```dart
// ordered group of objects
var list = [1, 2, 3];

print(list.length); //Print: 3
print(list[1]); //Print: 2

// other ways of list declaration and initializations

List<String> cities = <String>["New York", "Mumbai", "Tokyo"];

// To create a list that’s a compile-time constant
const constantCities = const ["New York", "Mumbai", "Tokyo"];
```


### Sets

```dart
// A set in Dart is an unordered collection of unique items.
var halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};

// to create an empty set
var names = <String>{};
Set<String> names = {}; // This works, too.
//var names = {}; // Creates a map, not a set.
```


### Maps

```dart
// a map is an object that associates keys and values
var person = Map<String, String>();
// To initialize the map, do this:
person['firstName'] = 'Nicola';
person['lastName'] = 'Tesla';

print(person); //Print: {firstName: Nicola, lastName: Tesla}
print(person['lastName']); //Print: Nicola


var nobleGases = {
  // Key: Value
  2: 'helium',
  10: 'neon',
  18: 'argon',
};
```



Functions
------------


Classes Objects, getters setters, constructors, exetends
----------




Others
------------

### Null and Null aware

```dart
int x; // The initial value of any object is null

// ?? null aware operator

x ??=6; // ??= assignment operator, which assigns a value of a variable only if that variable is currently null
print(x); //Print: 6

x ??=3;
print(x); // Print: 6 - result is still 6

print(null ?? 10); // Prints: 10. Display the value on the left if it's not null else return the value on the right
```



### Ternary Operator
```dart
// condition ? exprIfTrue : exprIfFalse
bool isAvailable;

isAvailable ? orderproduct() : addToFavourite();
```



### Spread Operator (...)

```dart
// to insert multiple values into a collection.
var list = [1, 2, 3];
var list2 = [0, ...list];

print(list2.length); //Print: 4
```

### Cascade notation (..)

```dart
// allows you to make a sequence of operations on the same object

// rather than doing this
var user = User();
user.name = "Nicola";
user.email = "nicola@g.c";
user.age = 24;

// you can do this
var user = User()
  ..name = "Nicola"
  ..email = "nicola@g.c"
  ..age = 24;
```
