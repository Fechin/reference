---
title: RegEX
date: 2020-11-25 18:28:43
icon: icon-regex
background: bg-yellow-500
tags:
    - Regular expressions
    - regexp
    - pattern
categories:
    - Toolkit
intro: |
    A quick reference guide for regular expressions (regex), including symbols, ranges, grouping, assertions and some sample patterns to get you started.
    This cheat sheet was made for [PCRE](https://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions).
---

Get Started {.cols-3}
--------

### Introduction

This is a quick cheat sheet to getting started with regular expressions.
- [Regex in Python](#regex-in-python) _(quickref.me)_
- [Regex in JavaScript](#regex-in-javascript) _(quickref.me)_
- [Regex in PHP](#regex-in-php) _(quickref.me)_
- [Regex in Java](#regex-in-java) _(quickref.me)_
- [Regex in Emacs](/emacs#search) _(quickref.me)_
- [Online regex tester](https://regex101.com/) _(regex101.com)_
{.cols-2}

### Character Classes

| Pattern    | Description                          |
|------------|--------------------------------------|
|`[abc]`    |  A single character of: a, b or c|
|`[^abc]`    |  A character except: a, b or c|
|`[a-z]`    |  A character in the range: a-z|
|`[^a-z]`    |  A character not in the range: a-z|
|`[0-9]`    |  A digit in the range: 0-9|
|`[a-zA-Z]`    |  A character in the range:<br>a-z or A-Z|
|`[a-zA-Z0-9]`    |  A character in the range: <br>a-z, A-Z or 0-9|


### Quantifiers

| Pattern    | Description                          |
|------------|--------------------------------------|
|`a?`    |  Zero or one of a|
|`a*`    |  Zero or more of a|
|`a+`    |  One or more of a|

|`[0-9]+`  |  One or more of 0-9|

|`a{3}`    |  Exactly 3 of a|
|`a{3,}`    |  3 or more of a|
|`a{3,6}`    |  Between 3 and 6 of a|

|`a*`    |  Greedy quantifier|
|`a*?`    |  Lazy quantifier|
|`a*+`    |  Possessive quantifier|





### Common Metacharacters

- \^
- \{
- \+
- \<
- \[
- \*
- \)
- \>
- \.
- \(
- \|
- \$
- \\
- \?
{.cols-3 .style-none}

Escape these special characters with `\`






### Meta Sequences {.row-span-4}

| Pattern    | Description                          |
|------------|--------------------------------------|
|`.`    |  Any single character|
|`\s`    |  Any whitespace character|
|`\S`    |  Any non-whitespace character|
|`\d`    |  Any digit, Same as [0-9]|
|`\D`    |  Any non-digit, Same as [^0-9]|
|`\w`    |  Any word character |
|`\W`    |  Any non-word character |
|`\X`    |  Any Unicode sequences, linebreaks included|
|`\C`    |  Match one data unit|
|`\R`    |  Unicode newlines|
|`\v`    |  Vertical whitespace character|
|`\V`    |  Negation of \v - anything except newlines and vertical tabs|
|`\h`    |  Horizontal whitespace character|
|`\H`    |  Negation of \h|
|`\K`    |  Reset match|
|`\n`    |  Match nth subpattern|
|`\pX`    |  Unicode property X|
|`\p{...}`    |  Unicode property or script category|
|`\PX`    |  Negation of \pX|
|`\P{...}`    |  Negation of \p|
|`\Q...\E`    |  Quote; treat as literals|
|`\k<name>`    |  Match subpattern `name`|
|`\k'name'`    |  Match subpattern `name`|
|`\k{name}`    |  Match subpattern `name`|
|`\gn`    |  Match nth subpattern|
|`\g{n}`    |  Match nth subpattern|
|`\g<n>`    |  Recurse nth capture group|
|`\g'n'`    |  Recurses nth capture group.|
|`\g{-n}`    |  Match nth relative previous subpattern|
|`\g<+n>`    |  Recurse nth relative upcoming subpattern|
|`\g'+n'`    |  Match nth relative upcoming subpattern|
|`\g'letter'`    |  Recurse named capture group `letter`|
|`\g{letter}`    |  Match previously-named capture group `letter`|
|`\g<letter>`    |  Recurses named capture group `letter`|
|`\xYY`    |  Hex character YY|
|`\x{YYYY}`    |  Hex character YYYY|
|`\ddd`    |  Octal character ddd|
|`\cY`    |  Control character Y|
|`[\b]`    |  Backspace character|
|`\`    |  Makes any character literal|




### Anchors

| Pattern    | Description                          |
|------------|--------------------------------------|
|`\G`    |  Start of match|
|`^`    |  Start of string|
|`$`    |  End of string|
|`\A`    |  Start of string|
|`\Z`    |  End of string|
|`\z`    |  Absolute end of string|
|`\b`    |  A word boundary|
|`\B`    |  Non-word boundary|




### Substitution

| Pattern    | Description                          |
|------------|--------------------------------------|
|`\0`    |  Complete match contents|
|`\1`    |  Contents in capture group 1|
|`$1`    |  Contents in capture group 1|
|`${foo}`    |  Contents in capture group `foo`|
|`\x20`    |  Hexadecimal replacement values|
|`\x{06fa}`    |  Hexadecimal replacement values|
|`\t`    |  Tab|
|`\r`    |  Carriage return|
|`\n`    |  Newline|
|`\f`    |  Form-feed|
|`\U`    |  Uppercase Transformation|
|`\L`    |  Lowercase Transformation|
|`\E`    |  Terminate any Transformation|




### Group Constructs

| Pattern    | Description                          |
|------------|--------------------------------------|
|`(...)`    |  Capture everything enclosed|
|`(a|b)`    |  Match either a or b|
|`(?:...)`    |  Match everything enclosed|
|`(?>...)`    |  Atomic group (non-capturing)|
|`(?|...)`    |  Duplicate subpattern group number|
|`(?#...)`    |  Comment|

|`(?'name'...)`    |  Named Capturing Group|
|`(?<name>...)`    |  Named Capturing Group|
|`(?P<name>...)`    |  Named Capturing Group|

|`(?imsxXU)`    |  Inline modifiers|
|`(?(DEFINE)...)`    |  Pre-define patterns before using them|



### Assertions


| - | - |
|------------|--------------------------------------|
|`(?(1)yes|no)`    |  Conditional statement|
|`(?(R)yes|no)`    |  Conditional statement|
|`(?(R#)yes|no)`    |  Recursive Conditional statement|
|`(?(R&name)yes|no)`    |  Conditional statement|
|`(?(?=...)yes|no)`    |  Lookahead conditional|
|`(?(?<=...)yes|no)`    |  Lookbehind conditional|



### Lookarounds

| - | - |
|------------|--------------------------------------|
|`(?=...)`    |  Positive Lookahead|
|`(?!...)`    |  Negative Lookahead|
|`(?<=...)`    |  Positive Lookbehind|
|`(?<!...)`    |  Negative Lookbehind|
Lookaround lets you match a group before (lookbehind) or after (lookahead) your main pattern without including it in the result.




### Flags/Modifiers

| Pattern    | Description                          |
|------------|--------------------------------------|
|`g`    |  Global|
|`m`    |  Multiline|
|`i`    |  Case insensitive|
|`x`    |  Ignore whitespace|
|`s`    |  Single line|
|`u`    |  Unicode|
|`X`    |  eXtended|
|`U`    |  Ungreedy|
|`A`    |  Anchor|
|`J`    |  Duplicate group names|



### Recurse

| - | - |
|------------|--------------------------------------|
|`(?R)`    |  Recurse entire pattern|
|`(?1)`    |  Recurse first subpattern|
|`(?+1)`    |  Recurse first relative subpattern|
|`(?&name)`    |  Recurse subpattern `name`|
|`(?P=name)`    |  Match subpattern `name`|
|`(?P>name)`    |  Recurse subpattern `name`|




### POSIX Character Classes {.col-span-2}
| Character Class|  Same as                                                    | Meaning                        |
|----------------|-------------------------------------------------------------|--------------------------------|
| `[[:alnum:]]`  | `[0-9A-Za-z]`                                               | Letters and digits             |
| `[[:alpha:]]`  | `[A-Za-z]`                                                  | Letters                        |
| `[[:ascii:]]`  | `[\x00-\x7F]`                                               | ASCII codes 0-127              |
| `[[:blank:]]`  | `[\t ]`                                                     | Space or tab only              |
| `[[:cntrl:]]`  | `[\x00-\x1F\x7F]`                                           | Control characters             |
| `[[:digit:]]`  | `[0-9]`                                                     | Decimal digits                 |
| `[[:graph:]]`  | `[[:alnum:][:punct:]]`                                      | Visible characters (not space) |
| `[[:lower:]]`  | `[a-z]`                                                     | Lowercase letters              |
| `[[:print:]]`  | `[ -~] == [ [:graph:]]`                                     | Visible characters             |
| `[[:punct:]]`  | <code>[!"#$%&’()*+,-./:;<=>?@[]^_\`{\|}~]</code>            | Visible punctuation characters |
| `[[:space:]]`  | <code>[\t\n\v\f\r ]</code>                                  | Whitespace                     |
| `[[:upper:]]`  | `[A-Z]`                                                     | Uppercase letters              |
| `[[:word:]]`   | `[0-9A-Za-z_]`                                              | Word characters                |
| `[[:xdigit:]]` | `[0-9A-Fa-f]`                                               | Hexadecimal digits             |
| `[[:<:]]`      | `[\b(?=\w)]`                                                | Start of word                  |
| `[[:>:]]`      | `[\b(?<=\w)]`                                               | End of word                    |
{.show-header}





### Control verb 

| - | - |
|------------|--------------------------------------|
|`(*ACCEPT)`    |  Control verb|
|`(*FAIL)`    |  Control verb|
|`(*MARK:NAME)`    |  Control verb|
|`(*COMMIT)`    |  Control verb|
|`(*PRUNE)`    |  Control verb|
|`(*SKIP)`    |  Control verb|
|`(*THEN)`    |  Control verb|
|`(*UTF)`    |  Pattern modifier|
|`(*UTF8)`    |  Pattern modifier|
|`(*UTF16)`    |  Pattern modifier|
|`(*UTF32)`    |  Pattern modifier|
|`(*UCP)`    |  Pattern modifier|
|`(*CR)`    |  Line break modifier|
|`(*LF)`    |  Line break modifier|
|`(*CRLF)`    |  Line break modifier|
|`(*ANYCRLF)`    |  Line break modifier|
|`(*ANY)`    |  Line break modifier|
|`\R`    |  Line break modifier|
|`(*BSR_ANYCRLF)`    |  Line break modifier|
|`(*BSR_UNICODE)`    |  Line break modifier|
|`(*LIMIT_MATCH=x)`    |  Regex engine modifier|
|`(*LIMIT_RECURSION=d)`    |  Regex engine modifier|
|`(*NO_AUTO_POSSESS)`    |  Regex engine modifier|
|`(*NO_START_OPT)`    |  Regex engine modifier|





RegEx in Python {.cols-3}
---------------

### Getting started

Import the regular expressions module

```python
import re
```


### Example  {.col-span-2 .row-span-3}

#### re.search()
```python
>>> sentence = 'This is a sample string'
>>> bool(re.search(r'this', sentence, flags=re.I))
True
>>> bool(re.search(r'xyz', sentence))
False
```

#### re.findall()
```python
>>> re.findall(r'\bs?pare?\b', 'par spar apparent spare part pare')
['par', 'spar', 'spare', 'pare']
>>> re.findall(r'\b0*[1-9]\d{2,}\b', '0501 035 154 12 26 98234')
['0501', '154', '98234']
```


#### re.finditer()
```python
>>> m_iter = re.finditer(r'[0-9]+', '45 349 651 593 4 204')
>>> [m[0] for m in m_iter if int(m[0]) < 350]
['45', '349', '4', '204']
```


#### re.split()
```python
>>> re.split(r'\d+', 'Sample123string42with777numbers')
['Sample', 'string', 'with', 'numbers']
```


#### re.sub()
```python
>>> ip_lines = "catapults\nconcatenate\ncat"
>>> print(re.sub(r'^', r'* ', ip_lines, flags=re.M))
* catapults
* concatenate
* cat
```

#### re.compile()
```python
>>> pet = re.compile(r'dog')
>>> type(pet)
<class '_sre.SRE_Pattern'>
>>> bool(pet.search('They bought a dog'))
True
>>> bool(pet.search('A cat crossed their path'))
False
```

### Functions

| Function | Description                                                       |
|----------|-------------------------------------------------------------------|
| `re.findall`  | Returns a list containing all matches                             |
| `re.finditer` | Return an iterable of match objects (one for each match)	|
| `re.search`   | Returns a Match object if there is a match anywhere in the string |
| `re.split`    | Returns a list where the string has been split at each match      |
| `re.sub`      | Replaces one or many matches with a string                        |
| `re.compile`  | Compile a regular expression pattern for later use	       |
| `re.escape`   | Return string with all non-alphanumerics backslashed          |



### Flags


| - | - | - |
|--------|-----------------|-------------------------------------------|
| `re.I` | `re.IGNORECASE` | Ignore case                               |
| `re.M` | `re.MULTILINE`  | Multiline                                 |
| `re.L` | `re.LOCALE`     | Make `\w`,`\b`,`\s` _locale dependent_    |
| `re.S` | `re.DOTALL`     | Dot matches all _(including newline)_     |
| `re.U` | `re.UNICODE`    | Make `\w`,`\b`,`\d`,`\s` _unicode dependent_ |
| `re.X` | `re.VERBOSE`    | Readable style                            |



Regex in JavaScript {.cols-3}
---------------

### test()
```javascript
let textA = 'I like APPles very much';
let textB = 'I like APPles';
let regex = /apples$/i
 
// Output: false
console.log(regex.test(textA));
 
// Output: true
console.log(regex.test(textB));
```

### search()

```javascript
let text = 'I like APPles very much';
let regexA = /apples/;
let regexB = /apples/i;
 
// Output: -1
console.log(text.search(regexA));
 
// Output: 7
console.log(text.search(regexB));
```


### exec()

```javascript
let text = 'Do you like apples?';
let regex= /apples/;
 
// Output: apples
console.log(regex.exec(text)[0]);
 
// Output: Do you like apples?
console.log(regex.exec(text).input);
```


### match()

```javascript
let text = 'Here are apples and apPleS';
let regex = /apples/gi;
 
// Output: [ "apples", "apPleS" ]
console.log(text.match(regex));
```




### split()  {.col-span-2}

```javascript
let text = 'This 593 string will be brok294en at places where d1gits are.';
let regex = /\d+/g
 
// Output: [ "This ", " string will be brok", "en at places where d", "gits are." ] 
console.log(text.split(regex))
```



### matchAll()

```javascript
let regex = /t(e)(st(\d?))/g;
let text = 'test1test2';
let array = [...text.matchAll(regex)];

// Output: ["test1", "e", "st1", "1"]
console.log(array[0]);

// Output: ["test2", "e", "st2", "2"]
console.log(array[1]);
```



### replace()

```javascript {.wrap}
let text = 'Do you like aPPles?';
let regex = /apples/i
 
// Output: Do you like mangoes?
let result = text.replace(regex, 'mangoes');
console.log(result);
```


### replaceAll()

```javascript
let regex = /apples/gi;
let text = 'Here are apples and apPleS';

// Output: Here are mangoes and mangoes
let result = text.replaceAll(regex, "mangoes");
console.log(result);
```



Regex in PHP {.cols-3}
------------

### Functions {.col-span-2}


| - | - |
|---------------------------|------------------------------------------------------------------|
| `preg_match()`            | performs a regex match                                           |
| `preg_match_all()`        | perform a global regular expression match                        |
| `preg_replace_callback()` | perform a regular expression search and replace using a callback |
| `preg_replace()`          | perform a regular expression search and replace                  |
| `preg_split()`            | splits a string by regex pattern                                 |
| `preg_grep()`             | returns array entries that match a pattern                       |



### preg_replace
```php {.wrap}
$str = "Visit Microsoft!";
$regex = "/microsoft/i";

// Output: Visit QuickRef!
echo preg_replace($regex, "QuickRef", $str); 
```



### preg_match
```php 
$str = "Visit QuickRef";
$regex = "#quickref#i";

// Output: 1
echo preg_match($regex, $str);
```



### preg_matchall {.col-span-2 .row-span-2}
```php
$regex = "/[a-zA-Z]+ (\d+)/";
$input_str = "June 24, August 13, and December 30";
if (preg_match_all($regex, $input_str, $matches_out)) {

    // Output: 2
    echo count($matches_out);

    // Output: 3
    echo count($matches_out[0]);

    // Output: Array("June 24", "August 13", "December 30")
    print_r($matches_out[0]);

    // Output: Array("24", "13", "30")
    print_r($matches_out[1]);
}
```



### preg_grep
```php 
$arr = ["Jane", "jane", "Joan", "JANE"];
$regex = "/Jane/";

// Output: Jane
echo preg_grep($regex, $arr);
```


### preg_split {.col-span-2}
```php
$str = "Jane\tKate\nLucy Marion";
$regex = "@\s@";

// Output: Array("Jane", "Kate", "Lucy", "Marion")
print_r(preg_split($regex, $str));
```


Regex in Java {.cols-3}
-------------


### Styles {.col-span-2}

#### First way  
```java
Pattern p = Pattern.compile(".s", Pattern.CASE_INSENSITIVE);
Matcher m = p.matcher("aS");  
boolean s1 = m.matches();  
System.out.println(s1);   // Outputs: true
```

#### Second way
```java
boolean s2 = Pattern.compile("[0-9]+").matcher("123").matches();  
System.out.println(s2);   // Outputs: true
```

#### Third way
```java
boolean s3 = Pattern.matches(".s", "XXXX");  
System.out.println(s3);   // Outputs: false
```


### Pattern Fields


| - | - |
|----------------------|-----------------------------------------------|
| `CANON_EQ`           | Canonical equivalence                         |
| `CASE_INSENSITIVE`   | Case-insensitive matching                     |
| `COMMENTS`           | Permits whitespace and comments               |
| `DOTALL`             | Dotall mode                                   |
| `MULTILINE`          | Multiline mode                                |
| `UNICODE_CASE`       | Unicode-aware case folding                    |
| `UNIX_LINES`         | Unix lines mode                               |





### Methods

#### Pattern
- Pattern compile(String regex [, int flags])
- boolean matches([String regex, ] CharSequence input)
- String[] split(String regex [, int limit])
- String quote(String s)

#### Matcher
- int start([int group | String name])
- int end([int group | String name])
- boolean find([int start])
- String group([int group | String name])
- Matcher reset()

#### String

- boolean matches(String regex)
- String replaceAll(String regex, String replacement)
- String[] split(String regex[, int limit])

There are more methods ...




### Examples {.col-span-2}

Replace sentence:
```java
String regex = "[A-Z\n]{5}$";
String str = "I like APP\nLE";

Pattern p = Pattern.compile(regex, Pattern.MULTILINE);
Matcher m = p.matcher(str);

// Outputs: I like Apple!
System.out.println(m.replaceAll("pple!"));
```

Array of all matches:
```java
String str = "She sells seashells by the Seashore";
String regex = "\\w*se\\w*";

Pattern p = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
Matcher m = p.matcher(str);

List<String> matches = new ArrayList<>();
while (m.find()) {
    matches.add(m.group());
}

// Outputs: [sells, seashells, Seashore]
System.out.println(matches);
```
