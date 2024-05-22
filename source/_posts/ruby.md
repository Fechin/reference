---
title: Ruby
date: 2024-04-25 09:50:25
background: bg-red-500
tags:
  - script
  - interpret
categories:
  - Programming
intro: |
  The [Ruby](https://www.ruby-lang.org/) cheat sheet is a one-page reference sheet for the Ruby programming language.
plugins:
  - copyCode
---

## Getting Started

### Install

```bash
# Debian, Ubuntu
$ sudo apt-get install ruby-full
# Windows
$ winget install RubyInstallerTeam.Ruby
$ brew install ruby # macOS
$ docker run -it --rm ruby:latest # Docker
```

### What is Gemfile and Gemfile.lock {.row-span-2}

- [Gemfile](https://bundler.io/v2.3/man/gemfile.5.html) Is the Bundler (also gem) configuration file that contains the
  project's gem list (dependencies)

```ruby
# Specify gem in the Gemfile in the project root directory
ruby '3.1.2'

source 'https://rubygems.org'
gem 'nokogiri'
gem 'rack', '~>3.0.10'
gem 'rspec', :require => 'spec'
```

Install all gems in Gemfile

```bash
$ bundle install
```

Solve the problem of Gemfile.lock inconsistency between mac for development and linux for production

```bash
bundle lock --add-platform x86_64-linux
```

### Install a specific version of a specific ruby gem

```bash
$ gem install bundler -v 2.4.20
$ gem install minitest -v 5.22.3
```

### Update gems using Bundler

```bash
# Updating a single gem using Bundler
$ bundle update nokogiri
# Use Bundler to update each gem in the Gemfile
$ bundle update
```

### Comment {.row-span-1}

```ruby
# This is a single line comments.
=begin
Multi-line
Comment
=end
puts "Hello world!"  # Inline comments for code
```

### reserved words {.col-span-1}

| Reserved words | Description                                                                                                |
| :------------- | :--------------------------------------------------------------------------------------------------------- |
| `__ENCODING__` | The script encoding of the current file                                                                    |
| `__LINE__`     | The line number of this keyword in the current file                                                        |
| `__FILE__`     | The path of the current file                                                                               |
| `BEGIN`        | Code enclosed in { } is run before the program is run                                                      |
| `END`          | Code enclosed in { } is run at the end of the program                                                      |
| `alias`        | Create an alias for an existing method, operator, or global variable                                       |
| `and`          | Logical AND operator                                                                                       |
| `begin`        | Begin a block of code                                                                                      |
| `break`        | Terminate a loop                                                                                           |
| `case`         | Compare an expression with matching `when` clauses, terminated with <br/> `end`                            |
| `class`        | Define a class                                                                                             |
| `def`          | define a function/method                                                                                   |
| `defined?`     | Check if a variable or function exist                                                                      |
| `do`           | Start a block of code, terminated with the <br/> `end` keyword                                             |
| `else`         | Execute the following code if previous conditions are not met                                              |
| `elsif`        | Alternative condition for if expressions                                                                   |
| `end`          | End blocks of code starting with keywords like `begin`, `class`,`def`,`do`,`if`, etc.                      |
| `ensure`       | Always execute at the end of a block                                                                       |
| `false`        | Logical boolean value false                                                                                |
| `for`          | Start a `for` loop                                                                                         |
| `if`           | Execute the code block `if` the condition is `true`                                                        |
| `in`           | Used with `for` loop                                                                                       |
| `module`       | Define a module                                                                                            |
| `next`         | jump to the point before the evaluation of the loop condition                                              |
| `nil`          | Stand for null, invalid, or always false                                                                   |
| `not`          | Logical NOT operator                                                                                       |
| `or`           | Logical OR operator                                                                                        |
| `redo`         | Jump back to the loop condition evaluation                                                                 |
| `rescue`       | Evaluate expressions after an exception is raised                                                          |
| `retry`        | Repeat method calls when called outside `rescue`, jump to the top of the block when called inside `rescue` |
| `return`       | Return a value from a method or block                                                                      |
| `self`         | Refer to the current object                                                                                |
| `super`        | Call the same-named method in the superclass                                                               |
| `then`         | Used as a separator with`if`,`unless`,`when`,`case`,`rescue`                                               |
| `true`         | Logical boolean value true                                                                                 |
| `undef`        | Undefine methods/functions within the current class                                                        |
| `until`        | Execute the code block until the condition is false                                                        |
| `when`         | Begin a clause under a `case` statement                                                                    |
| `while`        | Execute the code block while the condition is true                                                         |
| `yield`        | Execute the code block passed to a method                                                                  |

### Operator {.row-span-7}

#### Logical Operators

- `and`
- `or`
- `not`
- `&&`
- `||`
- `!`

#### Bit operators

- `&`
- `|`
- `^`
- `~`
- `<<`
- `>>`

#### Arithmetic operators

- `+`
- `-`
- `*`
- `/`
- `%`
- `**`

#### Comparison operator

- `==`
- `!=`
- `>`
- `<`
- `>=`
- `<=`
- `<=>`
- `===`
- `eql?`
- `equal?`

#### Operator examples

```bash
# Addition
1 + 1   #=> 2
# Subtraction
2 - 1   #=> 1
# Multiplication
2 * 2   #=> 4
# Division
10 / 5  #=> 2
17 / 5    #=> 3, not 3.4
17 / 5.0  #=> 3.4
# Exponentiation
2 ** 2  #=> 4
3 ** 4  #=> 81
# Modulus (remainder of division)
8 % 2   #=> 0  (8 / 2 = 4; no remainder)
10 % 4  #=> 2  (10 / 4 = 2 remainder 2)
a = 10
b = 20
a == b #=> false
a != b #=> true
a > b #=> false
a < b #=> true
a >= b #=> false
a <= b #=> true

# Comparison operators
a <=> b #=> -1
c = 20
c <=> b #=> 0
c <=> a  #=> 1
# Equality used in when clauses for case statements
(1...10) === 5 #=> true
# True if the receiver and the argument have the same type and equal values
1.eql?(1.0) #=> false
c = a + b  #=> 30
c += a #=> 40
c -= a #=> 30
c *= a #=> 300
c /= a #=> 30
c %= a #=> 3
c **= a #=> 59049

# Ruby parallel assignment
a = 10
b = 20
c = 30
a, b, c = 10, 20, 30
# Ruby bitwise operators
a = 60
b = 13
# & Binary AND operator copies a bit to the result if it exists in both operands.
a & b #=> 12
# | Binary OR operator copies a bit if it exists in either operand.
a | b #=> 61
# ^ Binary XOR operator copies a bit if it is set in one operand but not both.
a ^ b #=> 49
# ~ Binary Ones Complement is unary and has the effect of 'flipping' bits.
~a
# << Binary Left Shift Operator. The left operand's value is moved
# left by the number of bits specified by the right operand.
a << 2
# >> Binary Right Shift Operator. The left operand's value is moved
# right by the number of bits specified by the right operand.
a >> 2

# Ruby logical operators
a and b #=> true.
a or b #=> true.
a && b #=> true.
(a || b) #=> true.
!(a && b) #=> false.
not(a && b) #=> false.
# Ruby ternary operator
# ? :
# If condition is true ? Then value X : Otherwise value Y
a == 10 ? puts 'Right' : puts 'Wrong'
# Ruby range operators
# .. Creates a range from the start point to the end point (inclusive)
1..10 #=> Creates a range from 1 to 10 (inclusive of 1 and 10)
# ... Creates an exclusive range from the start point to the end point
1...10 #=> Creates an exclusive range from 1 to 10
```

### Operator precedence table

From highest to lowest, this is the precedence table for ruby. High precedence operations happen before low precedence
operations.

- !, ~, unary +
- \*\*
- unary -
- \*, /, %
- +, -
- <<, >>
- &
- |, ^
- > , >=, <, <=
- <=>, ==, ===, !=, =~, !~
- &&
- ||
- .., ...
- ?, :
- modifier-rescue
- =, +=, -=, etc.
- defined?
- not
- or, and
- modifier-if, modifier-unless, modifier-while, modifier-until
- { } blocks

### Variables and scope {.col-span-2}

| -              | -                 | -                             | -                                                                                                |
| -------------- | ----------------- | ----------------------------- | :----------------------------------------------------------------------------------------------- |
| Name           | Scope             | Example                       | Explanation                                                                                      |
| `[a-z]` or `_` | Local             | `count = 10` or `_count = 10` | Local variables must be initialized                                                              |
| `@`            | Instance variable | `@id = []`                    | Instance variables have a "nil" value before initialization                                      |
| `@@`           | Class variable    | `@@name = []`                 | Class variables must be initialized                                                              |
| `$`            | Global variable   | `$version = "0.8.9"`          | Global variables have a "nil" value before initialization                                        |
| `[A-Z]`        | Constant          | `PI = 3.14`                   | Constant variables must be initialized, you can change constants, but you will receive a warning |

There are five different types of variables. The first character determines the range To read in deap about variables
check [User Guide](https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/) cap 19,20,21,22,23
[Pre-Defined Variables and Constants](https://ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/variable.html)

### Check the scope of a variable

```ruby
defined? count
"local-variable"
defined? @id
"instance-variable"
defined? @@name
"class variable"
defined? $version
"global-variable"
defined? PI
"constant"
```

### Data Types {.col-span-2}

| -         | -                            | -                                                  | -                                                                                                               |
| :-------- | :--------------------------- | :------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| Type      | Example                      | Class                                              | Documentation                                                                                                   |
| `Integer` | a = 17                       | a.class > Integer <br>a.class.superclass > Numeric | [#](<(https://ruby-doc.org/3.3.1/Integer.html)>)                                                                |
| `Float`   | a = 87.23                    | a.class > Float <br>a.class.superclass > Numeric   | [#](https://ruby-doc.org/3.3.1/Float.html)                                                                      |
| `String`  | a = "Hello universe"         | a.class > String                                   | [#](https://ruby-doc.org/3.3.1/String.html)                                                                     |
| `Array`   | a = [12, 34]                 | a.class > Array                                    | [#](https://ruby-doc.org/3.3.1/Array.html)                                                                      |
| `Hash`    | a = {type: "tea", count: 10} | a.class > Hash                                     | [#](https://ruby-doc.org/3.3.1/Hash.html)                                                                       |
| `Boolean` | a = false<br>a = true        | a.class > FalseClass <br>a.class > TrueClass       | [TrueClass](https://ruby-doc.org/3.3.1/TrueClass.html) [FalseClass](https://ruby-doc.org/3.3.1/FalseClass.html) |
| `Symbol`  | a = :status                  | a.class > Symbol                                   | [#](https://ruby-doc.org/3.3.1/Symbol.html)                                                                     |
| `Range`   | a = 1..3                     | a.class > Range                                    | [#](https://ruby-doc.org/3.3.1/Range.html)                                                                      |
| `Nil`     | a = nil                      | a.class > NilClass                                 | [#](https://ruby-doc.org/3.3.1/NilClass.html)                                                                   |

[further reading](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-ruby)

### Check data type

```ruby
# Both are synonyms
a = 37
a.kind_of? Integer
# true
a.is_a? Integer
# true
```

### Symbol

```ruby
week_days = {sunday: 11, monday: 222}
```

### Integer useful methods

```ruby
2.even?
# true
3.even?
# false
```

### Range

`..` Used to create inclusive ranges

```ruby
range = 1..10
range.to_a
# output => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

`...` Used to create exclusive ranges

```ruby
range = 1...10
range.to_a
# output => [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

some useful methods

| Method name | Output                                |
| :---------- | :------------------------------------ |
| `cover?`    | `(1..5).cover?(5)` => `true`          |
| `end`       | `('a'..'z').end` => `"z"`             |
| `first`     | `(1..5).first` => `1`                 |
| `first(3)`  | `('A'..'Z').first(2)` => `["A", "B"]` |
| `eql?`      | `((0..2).eql?(0..5)` => `false`       |

### Using `step` in Range

```ruby
(1..20).step(2) { |number| puts "#{number}"}
# output
# 1
# 3
# 5
# 7
# 9
# 11
# 13
# 15
# 17
# 19
```

## Ruby Flow control

### if

```ruby
num = 2
puts 'two' if num == 2
```

If the condition is true, execute the code

### if elsif else

```ruby
temp = 19
if temp >= 25
  puts "hot"
elsif temp < 25 && temp >= 18
  puts "normal"
else
  puts "cold"
end
# output => normal
```

### unless

```ruby
# Unless contrary to if , evaluates when the statement is false
name = "rob"
# if name != "bob"
unless name == "bob"
  puts "hello stranger"
else
  puts "hello bob"
end
# output => hello stranger
num = 6
puts 'not two' unless num == 2
# output => not two
```

### case {.row-span-2}

```ruby
# case returns the value of the last expression executed
case input
# Check for an integer, 19
when 19
  puts "It's 19"
  # 检查一个确切的字符串，“Zaman”
when "Zaman"
  puts "Hi Zaman"
when 7..11
  puts "It's between 7 and 11"
  # Check multiple values, "coffee"
when "tea", "coffee"
  puts "Happy days"
end
```

### case( short syntax )

```ruby
case input
  when 19 then puts "It's 19"
end
```

### case( Optional failure )

```ruby
case input
  when 19 then puts "It's 19"
else
  puts "It's not 19"
end
```

### case( Get return value )

```ruby
marks = 86
result = case marks
        when 0..49 then "Fail"
        when 50..64 then "Pass"
        when 65..74 then "Credit"
        when 75..84 then "Distinction"
        when 85..100 then "High Distinction"
        else "Invalid marks"
        end

puts result
# High Distinction
```

## String

### String interpolation

```ruby
name = "World"
puts "Hello #{name}"
puts "The total is #{1+1}"
# "the total is 2"
```

String interpolation allows you to combine strings together

### Extract substring

```ruby
string = "abc123"
string[0,3]
# "abc"
string[3,3]
# "123"
string[0..-2]
# "abc12"
#remove or replace the substring
string[0..2] = ""
puts string
# "123"
```

A substring is a small part of a string, which is useful if you only want that specific part, like the beginning,
middle, or end

### Convert a string to lowercase or uppercase

```ruby
"HELLO World".downcase  # "hello world"
"hello worlD".upcase    # "HELLO WORLD"
"hEllo wOrlD".capitalize # "Hello world"
"hEllo WOrlD".swapcase  # "HeLLO woRLd"
```

### useful methods {.col-span-3}

| Function Name                  | Output                                                                                                | Note                                                                                                                                                                                |
| :----------------------------- | :---------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| length or size                 | `"HELLO World".length` => `11` <br> `"HELLO World".size` => `11`                                      | Returns the length of the string                                                                                                                                                    |
| reverse                        | `"hello worlD".reverse` => `"Dlrow olleh"`                                                            | Returns the reversed string                                                                                                                                                         |
| include? other_str             | `"hEllo wOrlD".include? "w"` => `true`                                                                | Returns true if the string or character exists, otherwise returns false                                                                                                             |
| gsub(pattern, replacement)     | `"hEllo wOrlD".gsub(" ", "_")` => `"hEllo_wOrlD"`                                                     | gsub or global substitute replaces one or more strings with the provided string                                                                                                     |
| gsub(pattern, hash)            | `"organization".gsub("z", 'z' => 's')` => `"organisation"`                                            | gsub or global substitute replaces one or more strings with the provided hash                                                                                                       |
| gsub(pattern) {\|match\|block} | `"Price of the phone is 1000 AUD".gsub(/\d+/) {\| s\| '$'+s }`<br>`"Price of the phone is $1000 AUD"` | gsub or global substitute replaces one or more strings with the provided block                                                                                                      |
| strip                          | `" hEllo WOrlD ".strip` <br> `"hEllo WOrlD"`                                                          | It will remove (trim) any leading and trailing characters: null (“\x00”), horizontal tab (“\t”), newline (\n), vertical tab (“\v”), form feed (f), carriage return(\r), space (" ") |
| prepend                        | `a = "world" <br> a.prepend("hello ")` <br> `"hello world"`                                           | Adds the string before another string                                                                                                                                               |
| insert                         | `a = "hello" <br> a.insert(a.length, " world")` <br> `"hello world"`                                  | Inserts the string at a specific position                                                                                                                                           |
| start_with?                    | `string = "ruby programming"` <br> `string.start_with? "ruby"` <br> `true`                            | Checks if the string starts with a specific prefix                                                                                                                                  |
| end_with?                      | `string = "ruby programming"` <br> `string.end_with? "ruby"` <br> `false`                             | Checks if the string ends with a specific prefix                                                                                                                                    |
| delete_suffix                  | `string = "sausage is expensive"` <br> `string.delete_suffix(" is expensive")` <br> `"sausage"`       | Deletes the suffix from the string                                                                                                                                                  |
| delete_prefix                  | `string = "sausage is expensive"` <br> `string.delete_prefix("sausage")` <br> `" is expensive"`       | Deletes the prefix from the string                                                                                                                                                  |
| split                          | `string = "a b c d" <br> string.split` <br> `["a", "b", "c", "d"]`                                    | Converts the string into an array of characters                                                                                                                                     |
| join                           | `arr = ['a', 'b', 'c'] <br> arr.join` => `"abc"`                                                      | Converts an array into a string                                                                                                                                                     |
| to_i                           | `a = "49" <br> a.to_i` => `49`                                                                        | Converts the string into an integer                                                                                                                                                 |
| chop                           | `"abcd?".chop("?")` => `"abcd"`                                                                       | Deletes the last character from the string                                                                                                                                          |
| count                          | `str = "aaab" <br> str.count("a")` <br> `3`                                                           | Counts the characters in the string                                                                                                                                                 |
| to_f                           | `a = "49"` <br> `a.to_f` <br> `49.0`                                                                  | Converts the string into a floating point number                                                                                                                                    |
| to_sym                         | `a = "key"` <br> `a.to_sym` <br> `:key`                                                               | Converts the string into a symbol                                                                                                                                                   |
| match                          | `"abcd?".match(/ab/)` => `#<MatchData "ab">`                                                          | Converts the pattern into a regular expression and calls its match method on the string                                                                                             |
| empty?                         | `"hello".empty?` => `false`                                                                           | Returns true if the length of the string is zero                                                                                                                                    |
| squeeze                        | `"Booook".squeeze` => `"Bok"`                                                                         | Returns a copy of the string where runs of the same character are replaced by a single character                                                                                    |
| \*                             | `puts "Ruby " * 4` => `Ruby Ruby Ruby Ruby`                                                           | Returns the concatenation of multiple copies of self                                                                                                                                |
| +                              | `"sammy " + "shark"` => `"sammyshark"`                                                                | Returns the concatenation of self and the given other string                                                                                                                        |
| eql?                           | `s = 'foo'` => `true` <br> `s.eql?('foo')` => `true`                                                  | Returns true if the objects have the same length and content; false otherwise                                                                                                       |

## Methods

### Declare a method {.row-span-3}

```ruby
def method_name(parameter1, parameter2)
    puts "#{parameter1} #{parameter2}"
    parameter1 + parameter2
end
```

---

```ruby
res = method_name(20, 10)
# output => 30
def method_name(parameter1, parameter2)
    puts "#{parameter1} #{parameter2}"
    return parameter1 + parameter2
end
# output => 30
```

### Call method

```ruby
res = method_name(parameter1, parameter2)
# Methods can be called without parentheses
res = method_name parameter1, parameter2
```

### Class method {.row-span-4}

Class methods are class-level methods. There are multiple ways to define class methods

```ruby
class Mobile
    def self.ring
        "ring ring ring..."
    end
end

Mobile.ring
```

---

```ruby
class Mobile
    def Mobile.ring
        "ring ring ring..."
    end
end
Mobile.ring
```

---

```ruby
class Mobile
    class << self
    def ring
        "ring ring ring..."
       end
    end
end
Mobile.ring
```

Class methods are instance methods of class objects. When a new class is created, an object of type "Class" is
initialized and assigned to a global constant (in this case Mobile)

```ruby
Mobile = Class.new do
    def self.ring
        "ring ring ring..."
    end
end
Mobile.ring
```

```ruby
Mobile = Class.new
class << Mobile
    def ring
        "ring ring ring..."
    end
end
Mobile.ring
```

### Use another parameter as default value

```ruby
def method_name(num1, num2 = num1)
    return num1 + num2
end
res = method_name(10)
# output => 20
```

### Define default values for method parameters

```ruby
def method_name(parameter1, parameter2, type = "ADD")
    puts "#{parameter1} #{parameter2}"
    return parameter1 + parameter2 if type == "ADD"
    return parameter1 - parameter2 if type == "SUB"
end
res = method_name(20, 10)
# output => 30
```

### Pass variable length arguments to method parameters

```ruby
def method_name(type, *values)
    return values.reduce(:+) if type == "ADD"
    return values.reduce(:-) if type == "SUB"
end
numbers = [2, 2, 2, 3, 3, 3]
res = method_name("ADD", *numbers)
# output => 15
res = method_name("SUB", *numbers)
# output => -11
# Or you can provide a value like this
res = method_name("ADD", 2, 2, 2, 3, 3, 3)
# output => 15
```

### Modify object

```ruby
a = ["Drama", "Mystery", "Crime",
"Sci-fi", "Disaster", "Thriller"]
a.sort
puts a
# We did not modify the object
# Drama
# Mystery
# Crime
# Sci-fi
# Disaster
# Thriller
a.sort!
puts a
# Modify object
# Crime
# Disaster
# Drama
# Mystery
# Sci-fi
# Thriller
```

When you want to modify the object, use `!` after the method

### Boolean method

In ruby, methods ending with a question mark (?) are called boolean methods, which return `true` or `false`

```ruby
"some text".nil?
# false
nil.nil?
# true
```

You can have your own boolean method

```ruby
def is_vowel?(char)
    ['a','e','i','o','u'].include? char
end
is_vowel? 'a'
# true
is_vowel? 'b'
# false
```

## Blocks

### Block example

```ruby
# return value
def give_me_data
    data = yield
    puts "data = #{data}"
end
give_me_data { "Big data" }
# output => data = Big data
```

The code between `do` and `end` (for multiple lines) or curly braces `{` and `}` (for a single line) is called a block,
and they can define multiple parameters between two pipes `( |arg1, arg2|)`

### Single line block

```ruby
salary = [399, 234, 566, 533, 233]
salary.each { |s| puts s }
# puts s = block body
# |s| = block arguments
```

### Multi-line block

```ruby
salary.each do |s|
    a = 10
    res = a * s
    puts res
end
# Block
# a = 10
# res = a * s
# puts res
# block parameters
# |s|
```

Blocks can be passed as method parameters or associated with method calls. block returns the last evaluated statement

### Implicitly passing a block

```ruby
def give_me_data
    puts "I am inside give_me_data method"
    yield
    puts "I am back in give_me_data method"
end

give_me_data { puts "Big data" }

# output
# I am inside give_me_data method
# Big data
# I am back in give_me_data method
```

### Called multiple times

```ruby
def give_me_data
    yield
    yield
    yield
end

give_me_data { puts "Big data" }

# output
# Big data
# Big data
# Big data
```

### Called with block parameters

```ruby
def give_me_data
    yield 10
    yield 100
    yield 30
end

give_me_data { |data| puts "Big data #{data} TB" }

# output
# Big data 10 TB
# Big data 100 TB
# Big data 30 TB
```

### Called with multiple block parameters

```ruby
def give_me_data
    yield "Big data", 10, "TB"
    yield "Big data", 100, "GB"
    yield "Big data", 30, "MB"
end

give_me_data { |text, data, unit| puts "#{text} #{data} #{unit}" }

# output
# Big data 10 TB
# Big data 100 GB
# Big data 30 MB
```

### Block will attempt to return from the current context

```ruby
give_me_data
    puts "I'm inside the give_me_data method"
end

def test
  puts "I'm inside the test method"
  give_me_data { return 10 } # Code returns from here
  puts "I am back in test method"
end

return_value = test

# output
# I'm inside the test method
# I'm inside the give_me_data method
# 10
```

### Pass the block explicitly by using the & parameter

```ruby
def give_me_data(&block)
    block.call
    block.call
end

give_me_data { puts "Big data" }

# output
# Big data
# Big data
```

### Check if block is given

```ruby
def give_me_data
    yield
end

give_me_data

# output
# LocalJumpError: no block given (yield)
```

### Ways to handle exceptions and make blocks optional

```ruby
def give_me_data
    return "no block" unless block_given?
    yield
end

give_me_data { puts "Big data" }
give_me_data

# output
# Big data
```

## Procs

### Procs

```ruby
p = Proc.new { puts "Hello World" }

def give_me_data(proc)
    proc.call
end

give_me_data p

# output
# Hello World
```

proc is like a block that can be stored in a variable

### any parameter {.col-span-2}

```ruby
p = Proc.new { |count| "Hello World " * count }

def give_me_data(proc)
    proc.call 5, 2
end

give_me_data p

# output
# "Hello World Hello World Hello World Hello World Hello World "
```

### proc will attempt to return from the current context

```ruby
p = Proc.new { return 10 }
p.call
# output
LocalJumpError: unexpected return
```

### Cannot return from top-level context

```ruby
def give_me_data
    puts "I'm inside the give_me_data method"
    p = Proc.new { return 10 }
    p.call # Code returns from here
    puts "I am back in give_me_data method"
end

return_value = give_me_data
puts return_value

# output
# I'm inside the give_me_data method
# 10
```

## Lambdas

### Declare a lambda{.row-span-2}

```ruby
l = lambda { puts "Hello World" }
# shorthand
l = -> { puts "Hello World" }
# transfer lambda
l.call
# output => Hello World
```

There are multiple ways to call a lambda

```ruby
l.()
l[]
```

### strict arguments

```ruby
l = -> (count) { "Hello World " * count }
l.call 5
# output
# "Hello World Hello World Hello World Hello World Hello World "
l.call 5, 2
# output
wrong number of arguments (given 2, expected 1)
```

### declare a lambda in block {.row-span-2}

```ruby
def give_me_data
    puts "I am inside give_me_data method"
    l = -> { return 10 }
    l.call
    puts "I am back in give_me_data method"
end

return_value = give_me_data
puts return_value

# output
# I am inside give_me_data method
# I am back in give_me_data method
# nil # because puts return nil
```

### lambdas are returned from the lambda itself, just like regular methods

```ruby
l = -> { return 10 }
l.call

# output => 10
```

## Array

### Initialize an empty array

```ruby
array = Array.new   #=> []
# or
array = []
```

### Array containing objects of different types

```ruby
array = [1, "two", 3.0]
#=> [1, "two", 3.0]
```

### Fill array with initial size and default objects {.row-span-2}

```ruby
numbers = Array.new(3)
#=> [nil, nil, nil]
numbers = Array.new(3, 7)
#=> [7, 7, 7]
numbers = Array.new(3, true)
#=> [true, true, true]
numbers = []
numbers.fill(7, 0..2)   #=> [7, 7, 7]
```

### array of different hashes {.col-span-2}

```ruby
array_with_hashes = Array.new(2) { {} } #=> [{}, {}]
array_with_hashes[0][:name] = "Bob"
array_with_hashes[0][:id] = 10          #=> [{:name=>"Bob", :id=>10}, {}]
```

### Two-dimensional array

```ruby
temperature_data = [
              ["A908", 38],
              ["A909", 37],
              ["A910", 38],
          ]
temperature_data[0]    #=> ["A908", 38]
temperature_data[0][0] #=> "A908"
temperature_data[0][1] #=> 38
```

### array index

```ruby
str_array = [
  "This", "is", "a", "small", "array"
]
str_array[0]            #=> "This"
str_array[1]            #=> "is"
str_array[4]            #=> "array"
```

### negative index

```ruby
str_array = [
  "This", "is", "a", "small", "array"
]
# Index -1 represents the last element
str_array[-1]        #=> "array"
# Index -2 represents the second to last element
str_array[-2]        #=> "small"
str_array[-6]        #=> nil
```

### array method at

```ruby
str_array = [
  "This", "is", "a", "small", "array"
]

puts str_array.at(0)      #=> "This"
```

### Range acquisition

```ruby
arr = [1, 2, 3, 4, 5, 6]
arr[100]                  #=> nil
arr[-3]                   #=> 4
arr[2, 3]                 #=> [3, 4, 5]
arr[1..4]                 #=> [2, 3, 4, 5]
arr[1..-3]                #=> [2, 3, 4]
```

### Array method fetch

```ruby
arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.fetch(100)
#=> IndexError: Index outside array bounds 100：-6...6
arr.fetch(100, "oops")    #=> "oops"
```

Out of bounds, give default value

### Get array elements

```ruby
arr = [1, 2, 3, 4, 5, 6]

arr.first     # first value => 1
arr.last      # last value => 6
# take Returns the first n elements
arr.take(3)   #=> [1, 2, 3]
# drop after n elements have been deleted
arr.drop(3)   #=> [4, 5, 6]
```

### Add value to end of array push

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.push(11)
#=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
numbers.push(12, 13, 14)
#=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```

### Delete the value at the end of the array pop

```ruby
num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num_array.pop             #=> 10
num_array
#=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Add value to beginning of array unshift

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.unshift(0)
#=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.unshift(-3, -2, -1)
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Retrieve and simultaneously delete the first element shift

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.shift #=> 1
numbers
#=> [2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Remove element at specific index delete_at

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.delete_at(2) #=> 4
numbers
#=> [2, 3, 5, 6, 7, 8, 9, 10]
```

### Remove a specific element anywhere in an array

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.delete(2) #=> 2
numbers           #=> [3, 5, 6, 7, 8, 9, 10]
```

### Insert value at given index insert {.row-span-2}

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.insert(0, 0)
#=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.insert(0, -3, -2, -1)
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.insert(-1, 12, 13, 14)
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14]
numbers.insert(-4, 11)
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```

### A block to fill the array with values

```ruby
numbers = Array.new(10) { |n| n = n * 2 }
#=> [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

### Filling arrays becomes easier

```ruby
numbers = Array(100..110)
#=> [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]

# Or we can convert the range to an array
(100..110).to_a
#=> [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]
```

### Remove nil value from array

```ruby
arr = ['foo', 0, nil, 'bar', 7, nil]
arr.compact  #=> ['foo', 0, 'bar', 7]
arr      #=> ['foo', 0, nil, 'bar', 7, nil]
arr.compact! #=> ['foo', 0, 'bar', 7]
arr      #=> ['foo', 0, 'bar', 7]
```

### Remove duplicates uniq

```ruby
arr = [2, 5, 6, 556, 6, 6, 8, 9, 0, 123, 556]
arr.uniq #=> [2, 5, 6, 556, 8, 9, 0, 123]
arr # => [2, 5, 6, 556, 6, 6, 8, 9, 0, 123, 556]
arr.uniq! #=> [2, 5, 6, 556, 8, 9, 0, 123]
arr #=> [2, 5, 6, 556, 8, 9, 0, 123]
```

### Check if a value exists in an array（`include？`）

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.include? "Mars"
# output => true
planets.include? "Pluto"
# output => false
```

### Get array size

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.size
# output => 8
planets.length
# output => 8
```

You can use size or length, both are synonyms

### clear array

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.clear
# output => []
```

### Get the first element of the array

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers[0]
# or
numbers.first
# output => 1
```

### Get the last element of the array

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers[-1]
# or
numbers.last
# output => 10
```

### Merge two arrays

```ruby
a = ["tom", "mot", "otm"]
b = [2, 3, 5]
a.zip(b)
# output
# [["tom", 2], ["mot", 3], ["otm", 5]]
```

### Sort array {.row-span-3}

```ruby
primes = [7, 2, 3, 5]
sorted_primes = primes.sort
puts "#{sorted_primes}"
# output => [2, 3, 5, 7]
```

or in-place sort

```ruby
primes = [7, 2, 3, 5]
primes.sort!
puts "#{primes}"
# output => [2, 3, 5, 7]
```

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.sort
# output
# ["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus", "Venus"]
planets.sort_by { |p| p }
# output
# ["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus", "Venus"]
planets.sort_by { |p| p.length }
# output
# ["Mars", "Earth", "Venus", "Saturn", "Uranus", "Neptune", "Jupiter", "Mercury"]
```

### Get maximum value from array

```ruby
primes = [7, 2, 3, 5]
primes.max_by { |p| p }
# output => 7
```

### Get array elements using range {.row-span-2}

```ruby
# numbers[start..end], both index are inclusive
puts numbers[0..3]
# 1
# 2
# 3
# 4
# numbers[start..end], end index is exclusive
puts numbers[0...3]
# 1
# 2
# 3
# or numbers[start..length]
puts numbers[0, 1]
# 1
```

### Get the first n elements of the array

```ruby
primes = [7, 2, 3, 5]
primes.take(3)
# [7, 2, 3]
```

### access element

```ruby
primes = [7, 2, 3, 5]
primes.fetch(3)
# 5
# Fetch will throw an error if the element does not exist
primes.fetch(10)
# (index 10 outside of array bounds: -4...4)
# or get an default value
primes.fetch(10, -1)
# -1
```

### Delete first n elements

```ruby
primes = [7, 2, 3, 5]
primes.drop(3)
# [5]
```

### Delete the first element

```ruby
primes = [7, 2, 3, 5]
primes.shift
# [2, 3, 5]
```

### Remove last element

```ruby
primes = [7, 2, 3, 5]
primes.pop
# [7, 2, 3]
```

### Delete element with index

```ruby
primes = [7, 2, 3, 5]
primes.delete_at(-1)
# [7, 2, 3]
```

### Remove all occurrences of elements

```ruby
primes = [7, 2, 3, 5, 5]
primes.delete(5)
# [7, 2, 3]
```

### each {.row-span-3}

```ruby
# When you have single line blocks
salary = [399, 234, 566, 533, 233]
salary.each { |s| puts s }
# output
# 399
# 234
# 566
# 533
# 233
```

When you have a multi-line block, you can replace the curly braces `{}` with `do` and `end`

```ruby
salary.each do |s|
  a = 10
  res = a * s
  puts res
end
# output
# 3990
# 2340
# 5660
# 5330
# 2330
```

Or you can do the same thing using braces {} and semicolon as separator instead of newline

```ruby
salary.each { |s| a = 10 ; res = a * s ; puts res }
```

### each_with_index

```ruby
salary = [399, 234, 566, 533, 233]
salary.each_with_index { |value, index| puts "#{index} #{value}" }
# output
# 0 399
# 1 234
# 2 566
# 3 533
# 4 233
```

### each_index

```ruby
salary = [399, 234, 566, 533, 233]
salary.each_index { |i| puts i}
# output
# 0
# 1
# 2
# 3
# 4
```

### map

```ruby
salary = [399, 234, 566, 533, 233]
salary.map { |s|  s * 10  }
# return
# [3990, 2340, 5660, 5330, 2330]
# On the other hand, each returns the original value
salary = [399, 234, 566, 533, 233]
salary.each { |s|  s * 10  }
# return
# [399, 234, 566, 533, 233]
```

### collect

```ruby
salary = [399, 234, 566, 533, 233]
salary.collect { |s| s > 400 }
# output
# [false, false, true, true, false]
```

### for

```ruby
for value in [2, 3, 5, 7]
    puts value
end
```

### each_with_object {.col-span-2}

```ruby
colors = [
  {color: "red", count: 3}, {color: "red", count: 5}, {color: "black", count: 4}
]
colors.each_with_object(Hash.new(0)) { |color, hash| hash["color_"+color[:color]] = color[:color].upcase; hash["count_"+color[:color]] += color[:count] }
# output
{"color_red"=>"RED", "count_red"=>8, "color_black"=>"BLACK", "count_black"=>4}

[1, 2, 3].each_with_object(0) { |number, sum| sum += number}
# output
# 0
# Because 0 is immutable, and since the initial object is 0, the method returns 0
```

### while

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
index = 0
while index < planets.size
    puts "#{planets[index]}"
    index += 1
end
```

---

```ruby
a = 1
star = '*'
while a <= 10
    puts star
    star += '*'
    a += 1
end
```

### do while

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
index = 0
loop do
    puts "#{planets[index]}"
    index += 1
    break if planets[index] == "Mars" or index > planets.size
end
```

### until

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
index = planets.size - 1
until index < 0
    puts "#{planets[index]}"
    index -= 1
end
```

```ruby
a = 1
star = '*'
until star.length > 10
    puts star
    star += '*'
    a += 1
end
```

### times

```ruby
10.times { puts "#{rand(1..100)}"}
# output
# will print 10 random numbers
```

Just because you can doesn't mean you should iterate over an array like this

```ruby
data_sample = [2, 3, 5, 7]
data_sample.size.times { |index| puts "#{data_sample[index]}" }
# output
# 2
# 3
# 5
# 7
```

### upto

```ruby
data_sample = [2, 3, 5, 7]
0.upto((data_sample.size - 1) / 2) { |index| puts "#{data_sample[index]}" }
# output
# 2
# 3
```

### downto

```ruby
data_sample = [2, 3, 5, 7]
(data_sample.size - 1).downto(data_sample.size / 2) { |index| puts "#{data_sample[index]}" }
# output
# 7
# 5
```

### step {.row-span-2}

```ruby
1.step(20, 2) { |number| puts "#{number}"}
# output
# 1
# 3
# 5
# 7
# 9
# 11
# 13
# 15
# 17
# 19
```

---

```ruby
19.step(1, -2) { |number| puts "#{number}"}
# output
# 19
# 17
# 15
# 13
# 11
# 9
# 7
# 5
# 3
# 1
```

### inject {.row-span-2}

```ruby
numbers = [2, 2, 2, 2, 2]
numbers.inject{ |res, n| res + n }
# The output is the sum of all numbers
# If no initial value is set for res, the first element of the array is used as the initial value of res.
#10
# Now set the value of res to 11
numbers = [2, 2, 2, 2, 2]
numbers.inject(11) { |res, n| res + n }
# so 11 + 2, 13 + 2, 15 + 2, 17 + 2 and 19 + 2
# 21
# using symbol
numbers = [2, 2, 2, 2, 2]
numbers.inject(:+)
# output
# 10
```

Use initial values and symbols

```ruby
numbers = [2, 2, 2, 2, 2]
numbers.inject(11, :+)
# output
# 21
```

### reduce

```ruby
numbers = [2, 2, 2, 2, 2]
numbers.reduce(11, :+)
# output
# 21
```

### detect

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.detect { |name| name.start_with?("E") and name.end_with?("h") }
# output
# Earth
salary = [399, 234, 566, 533, 233]
salary.detect { |s| s > 1000 }
# output
# nil
```

### find

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.find { |name| name.start_with?("E") and name.end_with?("h") }
# output
# Earth
```

### select

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.select { |n| n % 2 == 0 }
# Now you have an even array
# [2, 4, 6, 8, 10]
# If there are no values that satisfy your logic, return an empty array
[1, 1, 1].select { |n| n % 2 == 0 }
# no even numbers
# []
```

### reject

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.reject { |n| n % 2 == 0 }
# Reject if the number is even, so now we have an odd array
# [1, 3, 5, 7, 9]
```

### keep_if

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.keep_if { |n| n % 2 == 0 }
# numbers Array contains only even numbers
# [2, 4, 6, 8, 10]
```

### delete_if

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.delete_if { |n| n % 2 == 0 }
# numbers Array contains only odd numbers
# [1, 3, 5, 7, 9]
```

### drop_while

```ruby
numbers = [1, 2, 3, 1, 2, 3, 0]
numbers.drop_while { |n| n < 3 }
# is 3 less than 3, returns false, so delete 1, 2
# [3, 1, 2, 3, 0]
```

### reverse_each

```ruby
words = %w[first second third fourth fifth sixth]
str = ""
words.reverse_each {|word| str += "#{word} "}
p str #=> "sixth fifth fourth third second first "
```

## boolean enumerable method

### boolean enumerable method {.row-span-2}

| Name       | When to use                                                              |
| :--------- | :----------------------------------------------------------------------- |
| `all?`     | When you want to check if all elements meet your condition               |
| `any?`     | When you want to check if at least one item meets your condition         |
| `one?`     | When you want to check if one element meets your requirement             |
| `none?`    | When you want to check if no item meets your condition, the opposite of? |
| `empty?`   | When you want to check if an object is empty                             |
| `include?` | When you want to check if an element exists in the object                |

### all?

```ruby
[2, 4, 6, 8, 10].all? { |num| num % 2 == 0 }
# true
[1, 4, 6, 8, 10].all? { |num| num % 2 == 0 }
# false
```

### any?

```ruby
[1, 3, 5, 7, 10].any? { |num| num % 2 == 0 }
# true
[1, 3, 5, 7, 19].any? { |num| num % 2 == 0 }
# false
```

### one?

```ruby
[1, 3, 2, 5, 7].one? { |num| num % 2 == 0 }
# true
[1, 3, 2, 5, 4].one? { |num| num % 2 == 0 }
# false
```

### none?

```ruby
[1, 3, 5, 7, 9].none? { |num| num % 2 == 0 }
# true
[2, 3, 5, 7, 9].none? { |num| num % 2 == 0 }
# false
```

### empty?

```ruby
[].empty?
# true
[1, 3, 5, 7, 9].empty?
# false
```

## Combination method

### Combination method {.row-span-2}

- `&` Returns a new array containing each element found in array and array other_array; duplicates are omitted; use eql?
  to compare items
- `intersection` Returns a new array containing each element found in self and all given arrays other_arrays; duplicates
  are omitted; use eql? to compare items
- `+` Returns an array containing all elements of self followed by all elements of the given array
- `-` Returns an array containing all elements of self not found in the given array
- `union` Returns an array containing all elements of self and all elements of the given array, with duplicates removed
- `difference` Returns an array containing all elements of self not found in any given array
- `product` self Returns or produces all combinations of elements from self and the given array

### &

```ruby
[0, 1, 2, 3] & [1, 2] # => [1, 2]
[0, 1, 0, 1] & [0, 1] # => [0, 1]
```

### intersection

```ruby
[0, 1, 2, 3].intersection([0, 1, 2], [0, 1, 3])
# => [0, 1]
[0, 0, 1, 1, 2, 3].intersection([0, 1, 2], [0, 1, 3])
# => [0, 1]
```

### +

```ruby
a = [0, 1] + [2, 3]
a # => [0, 1, 2, 3]
```

### -

```ruby
[0, 1, 1, 2, 1, 1, 3, 1, 1] - [1]
# => [0, 2, 3]
[0, 1, 2, 3] - [3, 0]
# => [1, 2]
[0, 1, 2] - [4]
# => [0, 1, 2]
```

### union

```ruby
[0, 1, 2, 3].union([4, 5], [6, 7])
# => [0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 1].union([2, 1], [3, 1])
# => [0, 1, 2, 3]
[0, 1, 2, 3].union([3, 2], [1, 0])
# => [0, 1, 2, 3]
```

### difference

```ruby
[0, 1, 1, 2, 1, 1, 3, 1, 1].difference([1])
# => [0, 2, 3]
[0, 1, 2, 3].difference([3, 0], [1, 3])
# => [2]
[0, 1, 2].difference([4])
# => [0, 1, 2]
```

### product

```ruby
a = [0, 1, 2]
a1 = [3, 4]
p = a.product(a1)
p.size # => 6 # a.size * a1.size
p # => [[0, 3], [0, 4], [1, 3], [1, 4], [2, 3], [2, 4]]
```

## Loops

### while loop

```ruby
# variable count
count = 4
# using while loop
# here conditional is count i.e. 4
while count >= 1
  # statements to be executed
  puts "Ruby Cheatsheet"
  count = count - 1
  # while loop ends here
end
```

output

```
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
```

### for loop

```ruby
# loop using range as expression
text = "Ruby Cheatsheet"
# using for loop with the range
for count in 1..5 do
  puts text
end
```

output

```
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
```

### do..while loop

```ruby
# starting of do..while loop
loop do
  puts "Ruby Cheatsheet"
  val = '7'
  # using boolean expressions
  if val == '7'
    break
  end
  # ending of ruby do..while loop
end
```

output

```
Ruby Cheatsheet
```

### until loop

```ruby
var = 7
# here do is optional
until var == 11 do
  # code to be executed
  puts var * 10
  var = var + 1
  # here loop ends
end
```

output

```
70
80
90
100
```

### Break out of loop

```ruby
salary = [399, 234, 566, 533, 233]
salary.each do |s|
  break if s == 566
  puts s
end
# output
# 399
# 234
```

By using the `break` keyword

### skip within loop

```ruby
salary = [399, 234, 566, 533, 233]
salary.each do |s|
  next if s == 533
  puts s
end
# output
# 399
# 234
# 566
# 233
```

By using next keyword

### Repeat current iteration

```ruby
data = [456, 3000]
retry_count = 0
status = "network failure"
sum = 0
data.each do |d|
    if retry_count == 3
        status = "connection established"
        retry_count = 0
        redo
    elsif status == "network failure" and retry_count < 5
        puts "network failure #{retry_count}"
        retry_count += 1
        redo
    elsif status == "connection established"
        puts d
        sum += d
    end
end
# output of sum
# 3456
```

### Start the cycle again

```ruby
numbers = [2, 2, 44, 44]
sum = 0
begin
    numbers.each do |s|
        if rand(1..10) == 5
            puts "hi 5, let's do it again!"
            sum = 0
            raise "hi 5"
        end
        puts s
        sum += s
    end
rescue
    retry
end
```

## Classes

### Classes Example {.row-span-2}

```ruby
class Person
    # when you create a new object, it looks for a method named initialize and executes it, like a constructor in java
    # def initialize(name, number)
    #    @name = name
    #    @number = number
    # end
    # instance variable
    # @name
    # class variable
    # @@count
    # attr_accessor acts as a getter and setter for the following instance attributes
    attr_accessor :name, :number
    # class variable must be initialized
    @@count = 0
    def self.count
        @@count
    end
    def self.count=(count)
        @@count = count
    end
    def initialize
        @@count += 1
    end
end
# create an instance of the Person class
p1 = Person.new
# set attributes of the Person class
p1.name = "Yukihiro Matsumoto"
p1.number = 9999999999
# get attributes of the Person class
puts "#{p1.name}"
puts "#{p1.number}"
puts "#{Person.count}"
# Yukihiro Matsumoto
# 9999999999
# 1
p2 = Person.new
p2.name = "Yukihiro Matsumoto"
p2.number = 9999999999
# get attributes of the Person class
puts "#{p2.name}"
puts "#{p2.number}"
puts "#{Person.count}"
# Yukihiro Matsumoto
# 9999999999
# 2
# set class variable
Person.count = 3
puts "#{Person.count}"
# 3
```

### Inherit a class

```ruby
class Person
    attr_accessor :name, :number
end
# Inherit methods and properties from parent class using < symbol
class Student < Person
    attr_accessor :id
end
s = Student.new
s.name = "James Bond"
s.number = 700
s.id = 678
puts "#{p.name}"
James Bond
puts "#{p.number}"
700
puts "#{p.id}"
678
```

### Check instance type

```ruby
class Vehicle; end
class Car < Vehicle; end
class Audi < Car; end
car = Car.new
car.instance_of? Vehicle
false
car.instance_of? Car
true
car.instance_of? Audi
false
a = 7
a.instance_of? Integer
true
a.instance_of? Numeric
false
```

Returns true if the object is an instance of the given class and not a subclass or superclass

### Print all method names of a class

```ruby
puts (String.methods).sort
# Exclude methods inherited from Object class
puts (String.methods - Object.public_instance_methods).sort
```

### Check if a class has a specific method

```ruby
String.respond_to?(:prepend)
true
String.respond_to?(:append)
false
```

## See Also

- [Ruby](https://www.ruby-lang.org/en/) _(ruby-lang.org)_
- [Ruby Cheatsheet](https://github.com/lifeparticle/Ruby-Cheatsheet) _(github.com)_
