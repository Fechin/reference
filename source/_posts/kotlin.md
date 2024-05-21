---
title: Kotlin
date: 2023-02-26 16:24:31
background: bg-[#7954f6]
tags:
  - Cross-platform
  - Android
categories:
  - Programming
intro: |
  A quick reference cheatsheet for Kotlin that includes usage, examples, and more.
plugins:
  - copyCode
---

## Introduction to Kotlin

### main()

```kotlin
fun main() {
  println("Greetings, CheatSheets.zip!")
  // Code goes here
}
```

The main() function is the starting point of every Kotlin program and must be included in the code before execution

### Print statement

```kotlin
println("Greetings, earthling!")
print("Take me to ")
print("your leader.")

/*
Print:
Greetings, earthling!
Take me to your leader.
*/
```

### Notes

```kotlin
// this is a single line comment

/*
this
note
for
many
*/
```

### Execution order

```kotlin
fun main() {
  println("I will be printed first.")
  println("I will be printed second.")
  println("I will be printed third.")
}
```

## Data Types and Variables

### Mutable variables

```kotlin
var age = 25
age = 26
```

### Immutable variables

```kotlin
val goldenRatio = 1.618
```

### Type inference

```kotlin
// The following variables are assigned a literal value inside double quotes
// so the inferred type is String

var color = "Purple"
```

### String concatenation

```kotlin
var streetAddress = "123 Main St."
var cityState = "Brooklyn, NY"

println(streetAddress + " " + cityState)
// Print: 123 Main St. Brooklyn, NY
```

### String Templates

```kotlin
var address = "123 Main St."
println("The address is $address")
// prints: The address is 123 Main St.
```

### Built-in Properties and Functions

```kotlin
var monument = "the Statue of Liberty"

println(monument. capitalize())
// print: The Statue of Liberty
println(monument. length)
// print: 21
```

### Character escape {.row-span-2}

```kotlin {.wrap}
print("\"Excellent!\" I cried. \"Elementary,\" said he.")

// Print: "Excellent!" I cried. "Elementary," said he.
```

- `\n` insert new line
- `\t` inserts a tab
- `\r` inserts carriage return
- `\'` inserts a single quote
- `\"` inserts a double quote
- `\\` inserts a backslash
- `\$` inserts a dollar sign

### Arithmetic Operators

```kotlin
5 + 7  // 12
9 -2   // 7
8 *4   // 32
25 /5  // 5
31 % 2 // 1
```

`+` addition, `-` subtraction, `*` multiplication, `/` division, and `%` modulus

### Order of operations

```kotlin
5 + 8 *2 /4 -3 // 6
3 + (4 + 4) /2 // 7
4 *2 + 1 *7    // 15
3 + 18 /2 *1   // 12
6 -3 % 2 + 2   // 7
```

### Enhanced assignment operator

```kotlin
var batteryPercentage = 80

// long syntax
batteryPercentage = batteryPercentage + 10

// short syntax with augmented assignment operator
batteryPercentage += 10
```

### Increment and decrement operators

```kotlin
var year = 2019
year++   // 2020
year--   // 2019
```

### Math library

```kotlin
Math.pow(2.0, 3.0) // 8.0
Math.min(6, 9)     // 6
Math.max(10, 12)   // 12
Math. round(13.7)  // 14
```

## Conditional Expression

### If expression

```kotlin
var morning = true

if (morning) {
  println("Rise and shine!")
}
// Print: Rise and shine!
```

### Else-expression

```kotlin
var rained = false

if (rained) {
  println("No need to water the plants today.")
} else {
  println("The plant needs to be watered!")
}
// print: The plant needs watering!
```

### Else-If expressions

```kotlin
var age = 65

if (age < 18 ) {
  println("You are considered a minor")
} else if (age < 60) {
  println("You are considered an adult")
} else {
  println("You are considered senior")
}

// print: you are considered senior
```

### Comparison Operators

```kotlin
var myAge = 19
var sisterAge = 11
var cousinAge = 11

myAge > sisterAge  // true
myAge < cousinAge  // false
myAge >= cousinAge // true
myAge <= sisterAge // false
```

### Logical Operators

```kotlin
var humid = true
var raining = true
var jacket = false

println(!humid)
// print: false
println(jacket && raining)
// print: true
println(humid || raining)
// print: true
```

### AND operator: &&

```kotlin
var humid = true
var raining = true
var shorts = false
var sunny = false

// true AND true
println(humid && raining) // true
// true AND false
println(humid && shorts)  // false
// false AND true
println(sunny && raining) // false
// false AND false
println(shorts && sunny)  // false
```

### Or operator:||

```kotlin
var late = true
var skipBreakfast = true
var underslept = false
var checkEmails = false

// true OR true
println(skipBreakfast || late) // true
// true OR false
println(late || checkEmails)   // true
// false OR true
println(underslept || late)    // true
// false OR false
println(checkEmails || underslept) // false
```

### NOT operator

```kotlin
var hungry = true
var full = false

println(!hungry) // false
println(!full)   // true
```

### Evaluation order

```kotlin
!true && (false || true) // false
/*
(false || true) is evaluated first to return true.
Then, evaluate !true && true and return the final result false
*/

!false && true || false // true
/*
!false is evaluated first to return true.
Then true && true is evaluated, returning true.
then, true || evaluates to false and eventually returns true
*/
```

### Nested conditions

```kotlin
var studied = true
var wellRested = true

if (wellRested) {
  println("Good luck today!")
  if (studied) {
    println("You should prepare for the exam!")
  } else {
    println("Spend a few hours studying before the exam!")
  }
}

// Print: Good luck today!
// print: You should be ready for the exam!
```

### When expression

```kotlin
var grade = "A"

when (grade) {
  "A" -> println("Great job!")
  "B" -> println("Great job!")
  "C" -> println("You passed!")
  else -> println("Close! Be sure to prepare more next time!")
}
// print: Great job!
```

### Range operator

```kotlin {.wrap}
var height = 46 // inches

if (height in 1..53) {
  println("Sorry, you must be at least 54 inches to ride the coaster")
}
// Prints: Sorry, you must be at least 54 inches to ride the roller coaster
```

### Equality Operators

```kotlin
var myAge = 22
var sisterAge = 21

myAge == sisterAge // false
myAge != sisterAge // true
```

## Null-Safety

### Nullable vs Not-Nullable

```kotlin
var a: String = "Kotlin" // a can never be null
a = null // compilation error
var b: String? = "Kotlin" // b can be null
b = null // ok
```

### Safe-Calls

```kotlin
val a = "Kotlin"
val b: String? = null
println(a.length) // can be called safely, because a is never null
println(b?.length) // b?.length returns the length of b, or null if b is null
println(a?.length) // Unnecessary safe call
```

### Chaining Safe-Calls

```kotlin
bob?.department?.head?.name // chain returns null if any property is null
```

### Elvis Operator

```kotlin
val l = b?.length ?: -1 // if b is null, return the default value -1
// equval to:
val l: Int = if (b != null) b.length else -1
```

### Not Null Assertion Operator

```kotlin
val l = b!!.length // throws a NullPointerException, if b is null
```

## Collections

### Immutable list

```kotlin {.wrap}
var programmingLanguages = listOf("C#", "Java", "Kotlin", "Ruby")
```

### Mutable List

```kotlin {.wrap}
var fruits = mutableListOf("Orange", "Apple", "Banana", "Mango")
```

### Access List

```kotlin {.wrap}
var cars = listOf("BMW", "Ferrari", "Volvo", "Tesla")

println(cars[2]) // Prints: Volvo
```

### Size Attribute

```kotlin {.wrap}
var worldContinents = listOf("Asia", "Africa", "North America", "South America", "Antarctica", "Europe", "Australia")

println(worldContinents.size) // Prints: 7
```

### List Manipulation {.row-span-2}

```kotlin {.wrap}
var seas = listOf("Black Sea", "Caribbean Sea", "North Sea")
println(seas. contains("North Sea")) // Prints: true

// The contains() function performs a read operation on any list and determines if the element exists
seas.add("Baltic Sea") // Error: cannot write to immutable list
// The add() function can only be called on mutable lists, so the code above throws an error
```

### Immutable Sets

```kotlin {.wrap}
var primaryColors = setOf("Red", "Blue", "Yellow")
```

### Mutable Sets

```kotlin {.wrap}
var womenInTech = mutableSetOf("Ada Lovelace", "Grace Hopper", "Radia Perlman", "Sister Mary Kenneth Keller")
```

### Access Collection Elements {.row-span-2}

```kotlin {.wrap}
var companies = setOf("Facebook", "Apple", "Netflix", "Google")

println(companies.elementAt(3))
// Prints: Google
println(companies.elementAt(4))
// Returns and Error
println(companies.elementAtOrNull(4))
// Prints: null
```

### Immutable Map

```kotlin {.wrap}
var averageTemp = mapOf("winter" to 35,  "spring" to 60,  "summer" to 85, "fall" to 55)
```

### Mutable Mapping

```kotlin {.wrap}
var europeanDomains = mutableMapOf("Germany" to "de", "Slovakia" to "sk", "Hungary" to "hu", "Norway" to "no")
```

### Retrieve map keys and values

```kotlin {.wrap}
var oscarWinners = mutableMapOf("Parasite" to "Bong Joon-ho", "Green Book" to "Jim Burke", "The Shape Of Water" to "Guillermo del Toro")

println(oscarWinners.keys)
// Prints: [Parasite, Green Book, The Shape Of Water]

println(oscarWinners.values)
// Prints: [Bong Joon-ho, Jim Burke, Guillermo del Toro]
println(oscarWinners["Parasite"])
// Prints: Bong Joon-ho
```

### Add and remove map entries

```kotlin {.wrap}
var worldCapitals = mutableMapOf("United States" to "Washington D.C.", "Germany" to "Berlin", "Mexico" to "Mexico City", "France" to "Paris")

worldCapitals.put("Brazil", "Brasilia")
println(worldCapitals)
// Prints: {United States=Washington D.C., Germany=Berlin, Mexico=Mexico City, France=Paris, Brazil=Brasilia}

worldCapitals.remove("Germany")
println(worldCapitals)
// Prints: {United States=Washington D.C., Mexico=Mexico City, France=Paris, Brazil=Brasilia}
```

## Function

### Function

```kotlin
fun greet() {
  println("Hey there!")
}

fun main() {
  //Function call
  greet() //Prints: Hey there!
}
```

### Function Parameters

```kotlin {.wrap}
fun birthday(name: String, age: Int) {
   println("Happy birthday $name! You turn $age today!")
}

fun main() {
  birthday("Oscar", 26)
  //Prints: Happy birthday Oscar! You turn 25 today!
  birthday("Amarah", 30)
  //Prints: Happy birthday Amarah! You turn 30 today!
}
```

### Default Parameters

```kotlin {.wrap}
fun favoriteLanguage(name, language = "Kotlin") {
  println("Hello, $name. Your favorite programming language is $language")
}

fun main() {
  favoriteLanguage("Manon")
  //Prints: Hello, Manon. Your favorite programming language is Kotlin

  favoriteLanguage("Lee", "Java")
  //Prints: Hello, Lee. Your favorite programming language is Java
}
```

### Named Parameters

```kotlin {.wrap}
fun findMyAge(currentYear: Int, birthYear: Int) {
   var myAge = currentYear -birthYear
println("I am $myAge years old.")
}

fun main() {
  findMyAge(currentYear = 2020, birthYear = 1995)
  //Prints: I am 25 years old.
  findMyAge(birthYear = 1920, currentYear = 2020)
  //Prints: I am 100 years old.
}
```

### Return Statement

```kotlin {.wrap}
//Return type is declared outside the parentheses
fun getArea(length: Int, width: Int): Int {
  var area = length *width

  //return statement
  return area
}

fun main() {
  var myArea = getArea(10, 8)
println("The area is $myArea.")
//Prints: The area is 80.
}
```

### Single expression function

```kotlin{.wrap}
fun fullName(firstName: String, lastName: String) = "$firstName $lastName"

fun main() {
  println(fullName("Ariana", "Ortega"))
  //Prints: Ariana Ortega
  println(fullName("Kai", "Gittens"))
  //Prints: Kai Gittens
}
```

### Function Literals

```kotlin{.wrap}
fun main() {
  //Anonymous Function:
  var getProduct = fun(num1: Int, num2: Int): Int {
return num1 *num2
  }
  println(getProduct(8, 3))
  //Prints: 24
//Lambda Expression
  var getDifference = { num1: Int, num2: Int -> num1 -num2 }
  println(getDifference(10, 3))
  //Prints: 7
}
```

## Class

### Class Example

```kotlin
//class with properties containing default values
class Student {
  var name = "Lucia"
  var semester = "Fall"
  var gpa = 3.95
}

//shorthand syntax without class body
class Student
```

### Class Instance

```kotlin
// Class
class Student {
  var name = "Lucia"
  var semester = "Fall"
var gpa = 3.95
}

fun main() {
  var student = Student()
  // Instance
  println(student.name)
  // Prints: Lucia
  println(student.semester)
  // Prints: Fall
  println(student.gpa)
  // Prints: 3.95
}
```

### Primary Constructor

```kotlin {.wrap}
class Student(val name: String, val gpa: Double, val semester: String, val estimatedGraduationYear: Int)

fun main() {
  var student = Student("Lucia", 3.95, "Fall", 2022)
  println(student.name)
  //Prints: Lucia
  println(student.gpa)
  //Prints: 3.95
  println(student.semester)
  //Prints: Fall
  println(student.estimatedGraduationYear)
  //Prints: 2022
}
```

### Initialization Block

```kotlin {.wrap}
class Student(val name: String, val gpa: Double, val semester: String, val estimatedGraduationYear: Int) {
  init {
    println("$name has ${estimatedGraduationYear -2020} years left in college.")
  }
}

fun main() {
  var student = Student("Lucia", 3.95, "Fall", 2022)
//Prints: Lucia has 2 years left in college.
}
```

### Member Function {.col-span-2}

```kotlin {.wrap}
class Student(val name: String, val gpa: Double, val semester: String, val estimatedGraduationYear: Int) {

  init {
println("$name has ${estimatedGraduationYear -2020} years left in college.")
  }

  //member function
  fun calculateLetterGrade(): String {
    return when {
      gpa >= 3.0 -> "A"
      gpa >= 2.7 -> "B"
      gpa >= 1.7 -> "C"
gpa >= 1.0 -> "D"
      else -> "E"
    }
  }
}

//When the instance is created and the function is called, the when expression will be executed and return the letter grade
fun main() {
  var student = Student("Lucia", 3.95, "Fall", 2022)
//Prints: Lucia has 2 years left in college.
  println("${student.name}'s letter grade is ${student.calculateLetterGrade()}.")
  //Prints: Lucia's letter grade is A.
}
```

## See Also

- [Kotlin Language Official Documentation](https://kotlinlang.org/) _(kotlinlang.org)_
