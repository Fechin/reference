---
title: Swift
date: 2023-02-28 14:50:01
background: bg-[#eb4e38]
tags:
  - Apple
  - iOS
  - iPadOS
categories:
  - Programming
intro: |
  This cheat sheet provides examples of using Swift that cover basic Swift knowledge, control flow etc.
plugins:
  - copyCode
---

## Getting Started

### Variable {.row-span-2}

```swift
var score = 0  // Variable
let pi = 3.14  // Constant

var greeting = "Hello"
var numberOfToys = 8
var isMorning = true

var numberOfToys: Int = 8
numberOfToys += 1

print(numberOfToys)
// prints "9"
```

### Type annotations

```swift
var greeting: String = "Hello"
var numberOfToys: Int = 8
var isMorning: Bool = true
var price: Double = 8.99
```

### Arithmetic operators {.row-span-3}

- `+` Add
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Remainder

{.cols-2 .marker-none}

---

```swift
var x = 0
x = 4 + 2 // x is now 6
x = 4 - 2 // x is now 2
x = 4 * 2 // x is now 8
x = 4 / 2 // x is now 2
x = 4 % 2 // x is now 0
```

---

- `+=` Adds and assigns sums
- `-=` subtract and assign the difference
- `*=` Multiplication and assignment
- `/=` Divide and assign quotient
- `%=` Divide and assign remainder

{.marker-none}

#### Compound Assignment Operators

```swift
var numberOfDogs = 100
numberOfDogs += 1
print("There are \(numberOfDogs) Dalmatians!")

// print: There are 101 Dalmatians!
```

### String interpolation

```swift
var apples = 6
print("I have \(apples) apples!")

// print: I have 6 apples!
```

### Multi-line string

```swift
let myLongString = """
Swift?
This is my favorite language!
Yeah!
"""
```

### Code Comments

```swift
// This line represents a comment in Swift.

/*
This is all commented out.
None will run!
*/
```

### Form a tuple {.col-span-2}

```swift
let player = ("Maya", 5, 150)

print(player) // ("Maya", 5, 150)
print("\(player.0): level \(player.1), \(player.2) pts") // Maya: level 5, 150 pts
```

### Decompose tuple

```swift
let player = (name: "Maya", level: 5)
let (currentName, curLevel) = player
print("\(currentName): level \(curLevel)")
// print: Maya: level 5
```

### Special comment syntax (MARK)

```swift
// MARK: -view settings
```

`MARK` can be used to display comments in the column

### Special comment syntax (TODO)

```swift
// TODO: update logic to accommodate data changes
```

`TODO` is used to display reminders of things that need to be done

### Special Comment Syntax (FIXME)

```swift
// FIXME: Fix buggy behavior when making changes to existing entries
```

`FIXME` is used to display reminders about things that need to be fixed

## Variable

### Variable declaration

Variables are declared with `var`:

```swift
var greeting = "Hello"
var numberOfToys = 8
var isMorning = true
```

For clarity, variable declarations can contain type annotations:

```swift
var greeting: String = "Hello"
var numberOfToys: Int = 8
var isMorning: Bool = true
```

Variables are mutable. Their values be changed:

```swift
var numberOfToys: Int = 8
numberOfToys += 1

print(numberOfToys)
// print "9"
```

### Constants

Constants are declared with `let`:

```swift
let greeting = "Hello"
let numberOfToys = 8
let isMorning = true
```

For clarity, constant declarations can contain type annotations:

```swift
let greeting: String = "Hello"
let numberOfToys: Int = 8
let isMorning: Bool = true
```

Constants are immutable. Their values be changed:

```swift
let numberOfToys: Int = 8
numberOfToys += 1
// Error: numberOfToys is immutable
```

### Computed variables (get and set) {.row-span-3}

```swift
import Foundation

let df = DateFormatter()
df.dateFormat = "d MMMM yyyy"

guard var birth = df.date(from: "5 June 1999") else {
    print("Date is not valid")
    return
}

var age: Int {
    Calendar.current
        .dateComponents([.year],
                        from: birth,
                        to: Date()).year!
}

print(age) // 23
guard let birth2 = df.date(from: "5 June 2002") else {
    print("Date is not valid")
    return
}
birth = birth2
print(age) // 20
```

In the example below, distanceInFeet has a `getter` and a `setter`. Because of the `setter`, the `getter` requires the
keyword `get`:

```swift
var distanceInMeters: Float = 100

var distanceInFeet: Float {
  get {
    distanceInMeters *3.28
  }
  set(newDistance) {
    distanceInMeters = newDistance /3.28
  }
}

print(distanceInMeters) // 100.0
print(distanceInFeet)   // 328.0

distanceInFeet = 250
print(distanceInMeters) // 76.21951
print(distanceInFeet)   // 250.0

distanceInMeters = 800
print(distanceInMeters) // 800.0
print(distanceInFeet)   // 2624.0
```

### willSet {.row-span-2}

```swift
var distance = 5 {
  willSet {
    print("The distance will be set")
  }
}

distance = 10 // print: distance will be set
```

The new value can be accessed in `willSet`:

```swift
var distance = 5 {
  willSet(newDistance) {
    print("The distance will be set \(newDistance)")
  }
}

distance = 10 // print: distance will be set to 10
```

`willSet` can be used to execute some code before setting the variable value

### didSet

```swift
var distance = 5 {
  didSet {
    print("The distance is set to \(distance)")
    print("Its old value is: \(oldValue)")
  }
}
distance = 10 // print: distance will be set to 10
              // print: its old value is: 5
```

### willSet and didSet

```swift
var distance = 5 {
  willSet(newDistance) {
    print("The distance will be set to \(newDistance)")
  }
  didSet {
    print("The distance is set to \(distance)")
    print("Its old value is: \(oldValue)")
  }
}
distance = 10
```

## Conditions

### if statement

```swift
var halloween = true
if halloween {
  print("Trick or treat!")
}
// print: Trick or treat!
if 5 > 3 {
  print("5 is greater than 3")
} else {
  print("5 is not more than 3")
}
// output: "5 is greater than 3"
```

### else statement

```swift
var turbulence = false

if turbulence {
  print("Please sit down.")
} else {
  print("You are free to move around.")
}
// print: You are free to move around.
```

### else if statement

```swift
var weather = "rainy"
if weather == "sunny" {
  print("Get some sunscreen")
} else if weather == "rainy" {
  print("Take an umbrella")
} else if weather == "snowing" {
  print("Put on your snow boots")
} else {
  print("Invalid weather")
}
// print: take an umbrella
```

### Comparison Operators

```swift
5 > 1      // true
6 < 10     // true
2 >= 3     // false
3 <= 5     // true
"A" == "a" // false
"B" != "b" // true
```

-`<` less than <br> -`>` greater than <br> -`<=` less than or equal to <br> -`>=` greater than or equal to <br> -`==` is
equal to <br> -`!=` is not equal to

### Range Operators

```swift
a...b      // numbers between a and b (including both a and b)
a..<b      // numbers between a and b (including a but excluding b)
...b      // numbers till b (including b)
```

-`a...b` Closed Range <br> -`a..<b` Half-Open Range <br> -`...b` One-Sided Range

### Ternary conditional operator

```swift
var driverLicense = true

driverLicense
    ? print("driver seat") : print("passenger seat")
// print: driver's seat
```

### switch statement

```swift
var secondaryColor = "green"

switch secondaryColor {
  case "orange":
    print("A mixture of red and yellow")
  case "purple":
    print("A mix of red and blue")
  default:
    print("This may not be a secondary color")
}
// print: mix of blue and yellow
```

### switch statement: interval matching

```swift
let year = 1905
var artPeriod: String

switch year {
  case 1860...1885:
    artPeriod = "Impressionism"
  case 1886...1910:
    artPeriod = "Post-Impressionism"
  default:
    artPeriod = "Unknown"
}
// print: post-impressionism
```

### switch statement: composite case

```swift
let service = "Seamless"

switch service {
case "Uber", "Lyft":
    print("travel")
  case "DoorDash", "Seamless", "GrubHub":
    print("Restaurant delivery")
  case "Instacart", "FreshDirect":
    print("Grocery Delivery")
  default:
    print("Unknown service")
}
// print: restaurant takeaway
```

### switch statement: where clause

```swift
let num = 7

switch num {
  case let x where x % 2 == 0:
    print("\(num) is even")
  case let x where x % 2 == 1:
    print("\(num) odd number")
  default:
    print("\(num) is invalid")
}

// print: 7 odd
```

### Logical Operators

```swift
!true  // false
!false //true
```

### Logical Operators &&

```swift
true && true   // true
true && false  // false
false && true  // false
false && false // false
```

### Logical operators ||

```swift
true || true   // true
true || false  // true
false || true  // true
false || false // false
```

### Combined Logical Operators

```swift
!false && true || false // true
```

`!false && true` first evaluates and returns `true` Then, the expression, `true` || `false` evaluates and returns the
final result `true`

```swift
false || true && false // false
```

`true && false` first evaluates to return `false` Then, the expression, `false` || `false` evaluates and returns the
final result `false`

### Control the order of execution

```swift

// without parentheses:
true || true && false || false
//----> true

// with brackets:
(true || true) && (false || false)
//----> false

```

### Simple guards

```swift
func greet(name: String?) {
  guard let unwrapped = name else {
    print("Hello guest!")
    return
  }
  print("Hello \(unwrapped)!")
}
greet(name: "Asma") // output: Hello Asma!
greet(name: nil)    // output: Hello guest!
```

## cycle

### scope

```swift
let zeroToThree = 0...3
//zeroToThree: 0, 1, 2, 3
```

### stride() function

```swift
for oddNum in stride(from: 1, to: 5, by: 2) {
  print(oddNum)
}
// print: 1
// print: 3
```

### for-in loop

```swift
for char in "hehe" {
  print(char)
}
// print: h
// print: e
// print: h
// print: e
```

### continue keyword

```swift
for num in 0...5 {
  if num % 2 == 0 {
    continue
  }
  print(num)
}
// print: 1
// print: 3
// print: 5
```

The `continue` keyword will force the loop to continue for the next iteration

### break keyword

```swift
for char in "supercalifragilistic" {
if char == "c" {
    break
  }
  print(char)
}
// print: s
// print: u
// print: p
// print: e
// print: r
```

### Use underscores

```swift
for _ in 1...3 {
  print("Ole")
}
// print: Ole
// print: Ole
// print: Ole
```

### while loop

```swift
var counter = 1
var stopNum = Int.random(in: 1...10)

while counter < stopNum {
  print(counter)
  counter += 1
}
// loop to print until the stop condition is met
```

A `while` loop accepts a condition and keeps executing its body code while the provided condition is `true`. If the
condition is never false, the loop will keep running and the program will get stuck in an `infinite loop`

## Arrays and collections

### Array

```swift
var scores = [Int]()
// array is empty: []
```

### .count property

```swift
var grocery = ["🥓", "🥞", "🍪", "🥛", "🍊"]
print(grocery.count)
// print: 5
```

### index {.row-span-2}

The index refers to the item's position in the ordered list, and a single element is retrieved from the array using the
subscript syntax `array[index]`.

```swift
var vowels = ["a", "e", "i", "o", "u"]

print(vowels[0]) // prints: a
print(vowels[1]) // prints: e
print(vowels[2]) // print: i
print(vowels[3]) // prints: o
print(vowels[4]) // prints: u
```

Note: Swift arrays are zero-indexed, meaning the first element has index 0.

### Initialize with array literal

```swift
// use type inference:
var snowfall = [2.4, 3.6, 3.4, 1.8, 0.0]
// explicit type:
var temp: [Int] = [33, 31, 30, 38, 44]
```

### Initialize with default value

```swift
var teams = [Int](repeating: 0, count: 3)
print(teams) // prints: [0, 0, 0]
// or with Array type
var sizes = Array<Int>(repeating: 0, count: 3)
print(sizes) // prints: [0, 0, 0]
```

### .append() method and += operator

```swift
var gymBadges = ["Boulder", "Cascade"]
gymBadges.append("Thunder")
gymBadges += ["Rainbow", "Soul"]
// ["Boulder", "Cascade", "Thunder",
// "Rainbow", "Soul"]
```

### .insert() and .remove() methods

```swift
var moon = ["🌖", "🌗", "🌘", "🌑"]
moon.insert("🌕", at: 0)
// ["🌕", "🌖", "🌗", "🌘", "🌑"]

moon.remove(at: 4)
// ["🌕", "🌖", "🌗", "🌘"]
```

### Iterate over an array

```swift
var employees = ["Peter", "Denial", "Jame"]
for person in employees {
  print(person)
}
// print: Peter
// print: Denial
// print: Jam
```

### Collection (Set)

```swift
var paintingsInMOMA: Set = [
  "The Dream",
  "The Starry Night",
  "The False Mirror"
]
```

We can use a collection (`Set`) to store `unique` elements of the same data type

### Empty collection (Set)

```swift
var team = Set<String>()

print(team)
// print: []
```

### Populate the collection

```swift
var vowels: Set = ["a", "e", "i", "o","u"]
```

To create a set filled with values, use the `Set` keyword before the assignment operator.

### .insert()

```swift
var cookieJar: Set = [
  "Chocolate Chip",
  "Oatmeal Raisin"
]
// add a new element
cookieJar.insert("Peanut Butter Chip")
```

### .remove() and .removeAll() methods

```swift
var oddNumbers: Set = [1, 2, 3, 5]

// remove existing element
oddNumbers.remove(2)
// remove all elements
oddNumbers.removeAll()
```

### .contains()

```swift
var names: Set = ["Rosa", "Doug", "Waldo"]
print(names.contains("Lola")) // print: false

if names.contains("Waldo"){
  print("There's Waldo!")
} else {
  print("Where's Waldo?")
}
// print: There's Waldo!
```

### .isEmpty property

```swift
var emptyList = [String]()
print(emptyList.isEmpty)     // print: true

var populatedList: [Int] = [1, 2, 3]
print(populatedList.isEmpty) // print: false
```

### Iterate over a collection

```swift
var recipe: Set = ["Egg", "Flour", "Sugar"]

for ingredient in recipe {
  print ("Include \(ingredient) in the recipe")
}
```

### .isEmpty property

```swift
var emptySet = Set<String>()
print(emptySet.isEmpty)     // print: true

var populatedSet: Set = [1, 2, 3]
print(populatedSet.isEmpty) // print: false
```

### .count property

```swift
var band: Set = ["Peter", "Denial", "Jame"]

print("The band has \(band.count) players.")
// print: Band has 4 players.
```

### .intersection() Intersection

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D", "E", "F"]

var setC = setA.intersection(setB)
print(setC) // print: ["D", "C"]
```

### .union()

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D", "E", "F"]

var setC = setA.union(setB)
print(setC)
// print: ["B", "A", "D", "F", "C", "E"]
```

### .symmetricDifference() Symmetric difference

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D", "E", "F"]

var setC = setA.symmetricDifference(setB)
print(setC)
// print: ["B", "E", "F", "A"]
```

### .subtracting() Subtraction

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D"]

var setC = setA.subtracting(setB)
print(setC)
// print: ["B", "A"]
```

## dictionary

### Base Dictionary

```swift
var dictionaryName = [
  "Key1": "Value1",
  "Key2": "Value2",
  "Key3": "Value3"
]
```

An `unordered` collection of pairs of data or key-value pairs

### Keys

```swift
var fruitStand = [
  "Coconuts": 12,
  "Pineapples": 12,
  "Papaya": 12
]
```

Each `key` is `unique` even if they all contain the same `value`

### Type Consistency

```swift
var numberOfSides = [
  "triangle": 3,
  "square": 4,
  "rectangle": 4
]
```

Contains only `String` keys and `Int` values

### Initialize and populate the dictionary

```swift
var employeeID = [
  "Hamlet": 1367,
  "Horatio": 8261,
  "Ophelia": 9318
]
```

### Initialize an empty dictionary

```swift
// initializer syntax:
var yearlyFishPopulation = [Int: Int]()

// Empty dictionary literal syntax:
var yearlyBirdPopulation: [Int: Int] = [:]
```

### add to dictionary

```swift
var pronunciation = [
  "library": "lai·breh·ree",
  "apple": "a·pl"
]
// new key: "programming", new value: "prow gra"
pronunciation["programming"] = "prow·gra"
```

### Delete key-value pair {.row-span-2}

```swift
var bookShelf = [
  "Goodnight": "Margaret Wise Brown",
  "The BFG": "Roald Dahl",
  "Falling Up": "Shel Silverstein",
  "No, David!": "David Shannon"
]
// remove value by setting key to nil
bookShelf["The BFG"] = nil

// remove value using .removeValue()
bookShelf.removeValue(forKey: "Goodnight")

// remove all values
bookShelf.removeAll()
```

### Modify the key-value pair {.row-span-2}

```swift
var change = [
  "Quarter": 0.29,
  "Dime": 0.15,
  "Nickel": 0.05
]

// Change the value using subscript syntax
change["Quarter"] = .25

// Change the value using .updateValue()
change.updateValue(.10, forKey: "Dime")
```

To change the value of a key-value pair, use the `.updateValue()` method or the subscript syntax by appending brackets
`[ ]` with the existing keys within to the name of the dictionary, then adding the assignment operator _(`= `)_ followed
by the modified value

### .isEmpty property

```swift
var bakery = [String:Int]()

// check if the dictionary is empty
print(bakery.isEmpty) // prints true
bakery["Cupcakes"] = 12
// check if the dictionary is empty
print(bakery.isEmpty) // print false
```

### .count property

```swift
var fruitStand = [
  "Apples": 12,
  "Oranges", 17
]
print(fruitStand.count) // print: 2
```

### Assigning values to variables

```swift
var hex = [
  "red": "#ff0000",
  "yellow": "#ffff00",
  "blue": "#0000ff",
]

print("Blue hexadecimal code \(hex["blue"])")
// print: blue hex code Optional("#0000ff")

if let redHex = hex["red"] {
  print("red hexadecimal code \(redHex)")
}
// print: red hex code #ff0000
```

Assigning the value of a key-value pair to a variable will return an optional value. To extract values, use the optional
expansion

### Traversing the dictionary

```swift
var emojiMeaning = [
  "🤔": "Thinking Face",
  "😪": "Sleepy Face",
  "😵": "Dizzy Face"
]
// loop through keys and values
for (emoji, meaning) in emojiMeaning {
  print("\(emoji) is called '\(meaning)Emoji'")
}
// iterate through keys only
for emoji in emojiMeaning.keys {
  print(emoji)
}
// iterate through values only
for meaning in emojiMeaning.values {
  print(meaning)
}
```

## function

### Basic functions

```swift
func washCar() -> Void {
  print("Soap")
  print("Scrub")
  print("Rinse")
  print("Dry")
}
```

### Call functions

```swift
func greetLearner() {
 print("Welcome to CheatSheets.zip!")
}
// function call:
greetLearner()
// print: Welcome to CheatSheets.zip!
```

### return value

```swift
let birthYear = 1994
var currentYear = 2020

func findAge() -> Int {
  return currentYear-birthYear
}

print(findAge()) // prints: 26
```

### Multiple parameters {.col-span-2}

```swift
func convertFracToDec(numerator: Double, denominator: Double) -> Double {
  return numerator / denominator
}

let decimal = convertFracToDec(numerator: 1.0, denominator: 2.0)
print(decimal) // prints: 0.5
```

### Omit parameter labels

```swift
func findDiff(_ a: Int, b: Int) -> Int {
  return a -b
}

print(findDiff(6, b: 4)) // prints: 2
```

### return multiple values {.col-span-2}

```swift
func smartphoneModel() -> (name: String, version: String, yearReleased: Int) {
  return ("iPhone", "8 Plus", 2017)
}
let phone = smartphoneModel()

print(phone.name)         // print: iPhone
print(phone.version)      // print: 8 Plus
print(phone.yearReleased) // print: 2017
```

### Parameters & Arguments

```swift
func findSquarePerimet(side: Int) -> Int {
  return side *4
}

let perimeter = findSquarePerimet(side: 5)
print(perimeter) // print: 20

// Parameter: side
// Argument: 5
```

### Implicit return

```swift
func nextTotalSolarEclipse() -> String {
  "April 8th, 2024 🌎"
}

print(nextTotalSolarEclipse())
// print: April 8th, 2024 🌎
```

### Default parameters

```swift
func greet(person: String = "guest") {
  print("Hello \(person)")
}
greet() // Hello guest
greet(person: "Aliya") // Hello Aliya
```

### Input and output parameters {.row-span-2}

```swift
var currentSeason = "Winter"

func season(month: Int, name: inout String) {
  switch month {
    case 1...2:
      name = "Winter ⛄️"
    case 3...6:
      name = "Spring 🌱"
    case 7...9:
      name = "Summer ⛱"
    case 10...11:
      name = "Autumn 🍂"
    default:
      name = "Unknown"
  }
}
season(month: 4, name: &currentSeason)

print(currentSeason) // Spring 🌱
```

### variable parameter

```swift
func totalStudent(data: String...) -> Int {
  let numStudents = data.count
  return numStudents
}

print(totalStudent(data: "Denial", "Peter"))
// print: 2
```

### Optional parameters

```swift
func getFirstInitial(from name: String?) -> String? {
  return name?.first
}
```

Functions can accept optional types and return optional types. When a function cannot return a reasonable instance of
the requested type, it should return `nil`

## structure

### Structure Creation

```swift
struct Building {
  var address: String
  var floors: Int
  init(address: String, floors: Int) {
    self.address = address
    self.floors = floors
  }
}
```

Structs or structs are used to programmatically represent real-life objects in code. A structure is created using the
`struct` keyword, followed by its name, followed by a body containing its properties and methods

### Default property values

```swift
struct Car {
  var numOfWheels = 4
  var topSpeed = 80
}

var reliantRobin = Car(numOfWheels: 3)

print(reliantRobin.numOfWheels) // prints: 3
print(reliantRobin.topSpeed)    // print: 80
```

### Structural instance creation

```swift
struct Person {
  var name: String
  var age: Int

  init(name: String, age: Int) {
    self.name = name
    self.age = age
  }
}

// Person instance:
var morty = Person(name: "Peter", age: 14)
```

### init() method {.row-span-2}

```swift
struct TV {
  var size: Int
  var type: String

  init(size: Int, type: String) {
    self.size = size
    self.type = type
  }
}
```

Using the `TV` class

```swift
var newTV = TV(size: 65, type: "LED")
```

### Check type

```swift
print(type(of: "abc")) // print: String
print(type(of: 123))   // print: 123
```

### Mutation method (mutating) {.row-span-2}

```swift
struct Menu {
  var menuItems = ["Fries", "Burgers"]
  mutating func addToMenu(dish: String) {
    self.menuItems.append(dish)
  }
}
```

Using the `Menu` class

```swift
var dinerMenu = Menu()
dinerMenu.addToMenu(dish: "Toast")
print(dinerMenu.menuItems)
// prints: ["Fries", "Burgers", "Toast"]
```

### Structural methods

```swift
struct Dog {
  func bark() {
    print("Woof")
  }
}
let fido = Dog()
fido.bark() // prints: Woof
```

## class

### reference type (class) {.row-span-2}

```swift
class Player {
  var name: String

  init(name: String) {
    self.name = name
  }
}

var player1 = Player(name: "Tomoko")
var player2 = player1
player2.name = "Isabella"

print(player1.name) // Isabella
print(player2.name) // Isabella
```

### instance of the class

```swift
class Person {
  var name = ""
  var age = 0
}

var sonny = Person()
// sonny is now an instance of Person
```

### init() method {.row-span-2}

```swift
class Fruit {
  var hasSeeds = true
  var color: String

  init(color: String) {
    self.color = color
  }
}
```

Using the Fruit class

```swift
let apple = Fruit(color: "red")
```

A class can be initialized using the `init()` method and the corresponding initialization properties. In the `init()`
method, the `self` keyword is used to refer to the actual instance of the class assigning property values

### Class Attributes

```swift
var ferris = Student()

ferris.name = "Ferris Bueller"
ferris.year = 12
ferris.gpa = 3.81
ferris.honors = false
```

### Inherit {.row-span-2}

Suppose we have a BankAccount class:

```swift
class BankAccount {
  var balance = 0.0
  func deposit(amount: Double) {
    balance += amount
  }
  func withdraw(amount: Double) {
    balance -= amount
  }
}
```

`SavingsAccount` extends `BankAccount` class

```swift
class SavingsAccount: BankAccount {
  var interest = 0.0

  func addInterest() {
    let interest = balance *0.005
    self.deposit(amount: interest)
  }
}
```

The new `SavingsAccount` class (subclass) automatically gets all the characteristics of the `BankAccount` class
(superclass). Additionally, the `SavingsAccount` class defines an `.interest` property and an `.addInterest()` method.

### Example

use data type

```swift
class Student {
  var name: String
  var year: Int
  var gpa: Double
  var honors: Bool
}
```

Use default property values

```swift
class Student {
  var name = ""
  var gpa = 0.0
  var honors = false
}
```

### This is an example of a struct definition and a class definition

```swift
struct Resolution {
  var width = 0
  var height = 0
}
class VideoMode {
  var resolution = Resolution()
  var interlaced = false
  var frameRate = 0.0
  var name: String?
}
```

The `Resolution` structure definition and the `VideoMode` class definition only describe the appearance of `Resolution`
or `VideoMode`, create an instance of the structure or class:

```swift
let resolution = Resolution(width: 1920)
let someVideoMode = VideoMode()
```

## Enumerate

### Define the enumeration

```swift
enum Day {
  case monday
  case tuesday
  case wednesday
  case thursday
  case friday
  case saturday
  case sunday
}

let casualWorkday: Day = .friday
```

### Switch statement

```swift
enum Dessert {
  case cake(flavor: String)
  case vanillaIceCream(scoops: Int)
  case brownie
}

let customerOrder: Dessert = .cake(flavor: "Red Velvet")
switch customerOrder {
  case let .cake(flavor):
    print("You ordered a \(flavor) cake")
  case .brownie:
    print("You ordered a chocolate cake")
}
// prints: "You ordered a red velvet cake"
```

### CaseIterable

```swift
enum Season: CaseIterable {
  case winter
  case spring
  case summer
  case falls
}

for season in Season.allCases {
  print(season)
}
```

Add conformance to the `CaseIterable` protocol to access the `allCases` property, which returns an array of all cases of
the enumeration

### Original value

```swift
enum Beatle: String {
  case john paul george ringo
}

print("The Beatles are \(Beatle.john.rawValue).")
// print: The Beatles are john.
```

### Related values

```swift
enum Dessert {
  case cake(flavor: String)
  case vanillaIceCream(scoops: Int)
  case brownie
}

let order: Dessert = .cake(flavor: "Red Velvet")
```

### instance method {.row-span-2}

```swift
enum Traffic {
  case light
  case heavy

  mutating func reportAccident() {
    self = .heavy
  }
}

var currentTraffic: Traffic = .light

currentTraffic.reportAccident()
// currentTraffic is now .heavy
```

Just like classes and structs, enumerations can have instance methods. If an instance method mutates the value of the
enum, it needs to be marked `mutating`

### Initialize from primitive value

```swift
enum Hello: String {
  case english = "Hello"
  case japanese = "Hello!"
  case emoji = "👋"
}
let hello1 = Hello(rawValue: "Hello!")
let hello2 = Hello(rawValue: "Привет")
print(hello1) // Optional(Hello.japanese)
print(hello2) // nil
```

### Computed properties

```swift
enum ShirtSize: String {
  case small = "S"
  case medium = "M"
  case large = "L"
  case extraLarge = "XL"
  var description: String {
    return "The size of this shirt is \(self.rawValue)"
  }
}
```

## Extensions

### What are extensions?

Extensions is a way to add new add new functionality to existing classes, structures, enumerations, or protocol types. This includes adding new methods, properties, initializers, and more.

### Why use extensions?

Extensions are particularly useful for organizing and modularizing our code without needing to modify the original type, especially when we don't have access to the original source code.

### Extension syntax

```swift
extension SomeType {
    // New functionalities to be added
}
```

### Computed properties

```swift
extension Int {
    var isEven: Bool {
        self % 2 == 0
    }
}

print(4.isEven) // Outputs: true
print(7.isEven) // Outputs: false
```

### Methods

```swift
extension String {
    func reverse() -> String {
        String(self.reversed())
    }
}

print("abc".reverse()) // Output: cba
```

### Mutating methods

```swift
extension Int {
    mutating func square() {
        self = self * self
    }
}

var number = 5
number.square()
print(number) // Output: 25
```

### Initializers

```swift
extension Date {
    init?(timestamp: Double) {
        self.init(timeIntervalSince1970: timestamp)
    }
}

let timestamp = 1693982400.0 // Unix timestamp for 2023-09-06 06:40:00
if let date = Date(timestamp: timestamp) {
    print(date) // Output: 2023-09-06 06:40:00 +0000
}
```

### Subscripts

```swift
extension String {
    subscript(index: Int) -> Character {
        self[self.index(startIndex, offsetBy: index)]
    }
}

print("Swift"[0]) // Output: S
print("Swift"[1]) // Output: w
print("Swift"[2]) // Output: i
print("Swift"[3]) // Output: f
print("Swift"[4]) // Output: t
```

### Protocol extensions {.row-span-2}

It works pretty much like abstract classes when regarding a functionality we want to be available in all the classes that implements some protocol (without having to inherit from a base common class).

```swift
// Define a protocol
protocol Describable {
    func describe() -> String
}

// Provide a default implementation using a protocol extension
extension Describable {
    func describe() -> String {
        "This is a generic description"
    }
}

// Define a struct that conforms Describable protocol
struct Person: Describable {
    var name: String
    var age: Int

    // Overriding the default implementation
    func describe() -> String {
        "My name is \(name) and I am \(age) years old."
    }
}

struct Employee: Describable {
    var name: String
    var age: Int

    // Using the default implementation
}

// By just implementing the protocol the describe() method is available

let person = Person(name: "Ivan", age: 21)
let employee = Employee(name: "Saul", age: 25)

print(person.describe()) // Output: My name is Ivan and I am 21 years old.
print(employee.describe()) // Output: This is a generic description
```

### Constraints for extensions

This is especially useful when we want to add functionality to a type that conforms to a specific protocol or has certain conditions.

```swift
extension Array where Element: Numeric {
    func sum() -> Element {
        reduce(0, +)
    }
}

let numbers = [1, 2, 3, 4, 5]
print(numbers.sum()) // Output: 15

let doubles = [1.5, 2.5, 3.5]
print(doubles.sum()) // Output: 7.5

// This will not work because String is not Numeric
// let strings = ["a", "b", "c"]
// print(strings.sum()) // Error: Cannot invoke 'sum' with an array of strings
```

### Organizing code with extensions

Extensions are not limited to adding functionality; they are also handy for code organization. We can group related methods, properties or views in separate extensions.

```swift
import SwiftUI

struct HomeView: View {
    var body: some View {
        ScrollView {
            header
            // Add other views
        }
    }
}

extension HomeView {
    private var header: some View {
        Text("Header ...")
    }
}

#Preview {
    HomeView()
}
```

## Generics

### What are generics?

Generics in Swift are a feature that allows us to create functions, classes, structures, and protocols that can work with any data type.

### Why use generics?

Generics enable us to write clear and concise code that works with any data type. By using placeholders (like `T`), this reduces the risk of introducing bugs.

### Type parameters {.row-span-2}

```swift
func foo<T, U>(a: T, b: U) {
  // ...
}

struct Foo<T, U> {
  var a: T
  // ...
}
```

The placeholders `T` is an example of a type parameter, are written inside angle brackets(such as `<T>`).

### Generic Data Structures

```swift
struct Box<T> {
    var value: T
}
let intBox = Box(value: 10)
let stringBox = Box(value: "Hello")

print(intBox.value) // Output: 10
print(stringBox.value) // Output: "Hello"
```

### Generic Functions {.row-span-2}

```swift
func swapValues<T>(_ a: inout T, _ b: inout T) {
    let temp = a
    a = b
    b = temp
}

var a = 10
var b = 20
swapValues(&a, &b)
print(a) // Output: 20
print(b) // Output: 10

var c = "Hello"
var d = "World"
swapValues(&c, &d)
print(c) // Output: "World"
print(d) // Output: "Hello"
```

### Constraints on Generics

```swift
func sum<T: Numeric>(_ array: [T]) -> T {
    array.reduce(0, +)
}

print(sum([1, 1.5, 2])) // Output: 4.5

// This will not work because String is not Numeric
// print(sum(["a", "b", "c"]))
// Error: function 'sum' requires that 'String' conform to 'Numeric'
```

### Associated Types

```swift
protocol Foo {
    associatedtype T
    func foo() -> T
}
```

Associated types are used in protocols to define a placeholder for a type that will be specified later. They act as a generic placeholder. The exact type isn't defined in the protocol itself; instead, it's determined when a class, struct, or enum conforms to the protocol.

### Generic Protocols {.row-span-2}

```swift
protocol Storage {
    associatedtype Item
    func store(item: Item)
    func retrieve() -> Item?
}

class SimpleStorage<T>: Storage {
    private var items: [T] = []

    func store(item: T) {
        items.append(item)
    }

    func retrieve() -> T? {
        return items.isEmpty ? nil : items.removeLast()
    }
}

let intStorage = SimpleStorage<Int>()
intStorage.store(item: 42)
print(intStorage.retrieve() ?? "Empty")  // Output: 42
```

### Generic Typealiases

Generic typealiases allow us to create a new name for an existing type (i.e., they would not introduce a new type).

```swift
typealias StringDictionary<T> = [String: T]
typealias IntFunction<T> = (Int) -> Int
typealias Vector<T> = (T, T, T)
```

## Also See

- [Swift Documentation (Official)](https://www.swift.org/documentation/) _(swift.or)_
- [Swift Programming Language (Official)](https://docs.swift.org/swift-book/) _(swift.or)_
- [One-Stop Quick Reference for Swift Developers](https://swiftly.dev/) _(swiftly.dev)_
