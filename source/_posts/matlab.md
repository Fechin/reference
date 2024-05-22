---
title: MATLAB
date: 2023-01-03 09:51:44
background: bg-[#692316]
tags:
categories:
  - Programming
intro: |
  This quick reference cheat sheet provides an example introduction to using the [MATLAB](https://mathworks.cn/) scientific computing language to get started quickly
plugins:
  - copyCode
---

## Getting Started

### Introduction

MATLAB is short for `matrix laboratory`

---

- [MATLAB official website](https://www.mathworks.com)

### Matrix and array operations {.row-span-3}

MATLAB allows you to use a single arithmetic operator or function to manipulate all values in a matrix

```matlab
a + 10
```

MATLAB will execute the above statement and return the following results:

```
ans = 3×3
    11    13    15
    12    14    16
    17    18    20
```

---

```matlab
sin(a)
```

MATLAB will execute the above statement and return the following results:

```
ans = 3×3
    0.8415    0.1411   -0.9589
    0.9093   -0.7568   -0.2794
    0.6570    0.9894   -0.5440
```

To transpose a matrix, use single quotes (`'`)

```matlab
a'
```

---

```
ans = 3×3
     1     2     7
     3     4     8
     5     6    10
```

Perform standard matrix multiplication using the `*` operator, which computes the inner product between rows and columns

```matlab
p = a*inv(a)
```

---

```
p = 3×3
    1.0000         0         0
         0    1.0000         0
         0         0    1.0000
```

### concatenation {.row-span-2}

Concatenation is the process of joining arrays to form larger arrays. In fact, the first array is formed by
concatenating its elements. Pairs of square brackets `[]` are concatenation operators.

```matlab
A = [a,a]
```

---

```
A = 3×6

     1     3     5     1     3     5
     2     4     6     2     4     6
     7     8    10     7     8    10
```

Concatenating arrays next to each other using commas is called horizontal concatenation. Each array must have the same
number of rows. Likewise, semicolons can be used for vertical concatenation if the arrays have the same number of
columns.

```matlab
A = [a; a]
```

---

```
A = 6×3

     1     3     5
     2     4     6
     7     8    10
     1     3     5
     2     4     6
     7     8    10
```

### Matrices and arrays {.row-span-3}

To create an array with four elements per row, separate elements with commas (`,`) or spaces

```matlab
a = [1 2 3 4]
```

MATLAB will execute the above statement and return the following results:

```
a = 1×4
     1     2     3     4
```

#### Create a matrix with multiple rows

```matlab
a = [1 3 5; 2 4 6; 7 8 10]
```

---

```
a = 3×3
     1     3     5
     2     4     6
     7     8    10
```

#### 5×1 column vector of zeros

```matlab
z = zeros(5,1)
```

---

```
z = 5×1
     0
     0
     0
     0
     0
```

### Complex number

A complex number has a real part and an imaginary part, and the imaginary unit is the square root of -1.

```matlab
sqrt(-1)
```

---

```
ans = 0.0000 + 1.0000i
```

To represent the imaginary part of a complex number, use i or j.

```matlab
c = [3+4i, 4+3j; -i, 10j]
```

---

```
c = 2×2 complex

   3.0000 + 4.0000i   4.0000 + 3.0000i
   0.0000 - 1.0000i   0.0000 +10.0000i
```

## Basic knowledge

### Input the command

| -                                                                               | -                                                                         |
| ------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| [ans](https://www.mathworks.com/help/matlab/ref/ans.html)                       | Most recently calculated answer                                           |
| [clc](https://www.mathworks.com/help/matlab/ref/clc.html)                       | Clear the command line window                                             |
| [diary](https://www.mathworks.com/help/matlab/ref/diary.html)                   | Record the text of the command line window into the log file              |
| [format](https://www.mathworks.com/help/matlab/ref/format.html)                 | Set the output display format                                             |
| [home](https://www.mathworks.com/help/matlab/ref/home.html)                     | Send cursor reset                                                         |
| [iskeyword](https://www.mathworks.com/help/matlab/ref/iskeyword.html)           | Determine if the input is a <span class="trademark">MATLAB</span> keyword |
| [more](https://www.mathworks.com/help/matlab/ref/more.html)                     | Control paging output in the command line window                          |
| [commandwindow](https://www.mathworks.com/help/matlab/ref/commandwindow.html)   | Select command window                                                     |
| [commandhistory](https://www.mathworks.com/help/matlab/ref/commandhistory.html) | Open command history window                                               |

#### Objects

| -                                                                          | -                                                |
| -------------------------------------------------------------------------- | :----------------------------------------------- |
| [DisplayFormatOptions](https://www.mathworks.com/help/matlab/ref/ans.html) | Output display format in the command line window |

### Matrices and Arrays {.row-span-5}

Create and combine arrays

| -                                                                 | -                                                                 |
| ----------------------------------------------------------------- | :---------------------------------------------------------------- |
| [zeros](https://www.mathworks.com/help/matlab/ref/zeros.html)     | Create an array of all zeros                                      |
| [ones](https://www.mathworks.com/help/matlab/ref/ones.html)       | Create an array of all 1s                                         |
| [rand](https://www.mathworks.com/help/matlab/ref/rand.html)       | Uniformly distributed random numbers                              |
| [true](https://www.mathworks.com/help/matlab/ref/true.html)       | Logical value 1 (true)                                            |
| [false](https://www.mathworks.com/help/matlab/ref/false.html)     | logical 0 (false)                                                 |
| [eye](https://www.mathworks.com/help/matlab/ref/eye.html)         | identity matrix                                                   |
| [diag](https://www.mathworks.com/help/matlab/ref/diag.html)       | Create a diagonal matrix or get the diagonal elements of a matrix |
| [blkdiag](https://www.mathworks.com/help/matlab/ref/blkdiag.html) | block diagonal matrix                                             |
| [cat](https://www.mathworks.com/help/matlab/ref/double.cat.html)  | Concatenate arrays.                                               |
| [horzcat](https://www.mathworks.com/help/matlab/ref/horzcat.html) | Concatenate arrays horizontally                                   |
| [vertcat](https://www.mathworks.com/help/matlab/ref/vertcat.html) | Concatenate arrays vertically                                     |
| [repelem](https://www.mathworks.com/help/matlab/ref/repelem.html) | Repeat array element copy                                         |
| [repmat](https://www.mathworks.com/help/matlab/ref/repmat.html)   | Repeat array copy                                                 |

Create grid

| -                                                                     | -                                       |
| --------------------------------------------------------------------- | :-------------------------------------- |
| [linspace](https://www.mathworks.com/help/matlab/ref/linspace.html)   | Generate linearly spaced vectors        |
| [logspace](https://www.mathworks.com/help/matlab/ref/logspace.html)   | Generate logarithmic spaced vectors     |
| [freqspace](https://www.mathworks.com/help/matlab/ref/freqspace.html) | frequency spacing of frequency response |
| [meshgrid](https://www.mathworks.com/help/matlab/ref/meshgrid.html)   | 2D and 3D grids                         |
| [ndgrid](https://www.mathworks.com/help/matlab/ref/ndgrid.html)       | Rectangular grid in N-dimensional space |

Determine size, shape and order

| -                                                                           | -                                                          |
| --------------------------------------------------------------------------- | :--------------------------------------------------------- |
| [length](https://www.mathworks.com/help/matlab/ref/length.html)             | The length of the largest array dimension                  |
| [size](https://www.mathworks.com/help/matlab/ref/size.html)                 | array size                                                 |
| [ndims](https://www.mathworks.com/help/matlab/ref/double.ndims.html)        | Number of dimensions of the array                          |
| [numel](https://www.mathworks.com/help/matlab/ref/double.numel.html)        | the number of array elements                               |
| [isscalar](https://www.mathworks.com/help/matlab/ref/isscalar.html)         | Determine whether the input is a scalar                    |
| [issorted](https://www.mathworks.com/help/matlab/ref/issorted.html)         | Determine if the array is sorted                           |
| [issortedrows](https://www.mathworks.com/help/matlab/ref/issortedrows.html) | Determine whether the rows of a matrix or table are sorted |
| [isvector](https://www.mathworks.com/help/matlab/ref/isvector.html)         | Determine whether the input is a vector                    |
| [ismatrix](https://www.mathworks.com/help/matlab/ref/ismatrix.html)         | Determine whether the input is a matrix                    |
| [isrow](https://www.mathworks.com/help/matlab/ref/isrow.html)               | Determine whether the input is a row vector                |
| [iscolumn](https://www.mathworks.com/help/matlab/ref/iscolumn.html)         | Determine whether the input is a column vector             |
| [isempty](https://www.mathworks.com/help/matlab/ref/isempty.html)           | Determine whether the array is empty                       |

Refactor and rearrange

| -                                                                                   | -                                        |
| ----------------------------------------------------------------------------------- | :--------------------------------------- |
| [sort](https://www.mathworks.com/help/matlab/ref/sort.html)                         | Sort array                               |
| elements [sortrows](https://www.mathworks.com/help/matlab/ref/double.sortrows.html) | Sort matrix rows or table rows           |
| [flip](https://www.mathworks.com/help/matlab/ref/flip.html)                         | Flip the order of elements               |
| [fliplr](https://www.mathworks.com/help/matlab/ref/fliplr.html)                     | Flip the array from left to right        |
| [flipud](https://www.mathworks.com/help/matlab/ref/flipud.html)                     | Flip the array from top to bottom        |
| [rot90](https://www.mathworks.com/help/matlab/ref/rot90.html)                       | Rotate an array by 90 degrees            |
| [transpose](https://www.mathworks.com/help/matlab/ref/transpose.html)               | Transpose a vector or matrix             |
| [ctranspose](https://www.mathworks.com/help/matlab/ref/ctranspose.html)             | complex conjugate transpose              |
| [permute](https://www.mathworks.com/help/matlab/ref/permute.html)                   | permute array dimension                  |
| [ipermute](https://www.mathworks.com/help/matlab/ref/ipermute.html)                 | Inverse permutation of array dimensions. |
| [circshift](https://www.mathworks.com/help/matlab/ref/circshift.html)               | Circular shift array                     |
| [shiftdim](https://www.mathworks.com/help/matlab/ref/shiftdim.html)                 | shift array dimension                    |
| [reshape](https://www.mathworks.com/help/matlab/ref/reshape.html)                   | Reshape array                            |
| [squeeze](https://www.mathworks.com/help/matlab/ref/squeeze.html)                   | Remove dimensions of length 1            |

index

| -                                                                 | -                                                                                    |
| ----------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| [colon](https://www.mathworks.com/help/matlab/ref/colon.html)     | vector creation, array subscript and <code class="literal">for</code> loop iteration |
| [end](https://www.mathworks.com/help/matlab/ref/end.html)         | Terminate a code block or indicate the maximum array index                           |
| [ind2sub](https://www.mathworks.com/help/matlab/ref/ind2sub.html) | Convert linear index to subscript                                                    |
| [sub2ind](https://www.mathworks.com/help/matlab/ref/sub2ind.html) | Convert subscript to linear index                                                    |

### Value type {.row-span-2}

Create numeric variables

| -                                                               | -                                |
| --------------------------------------------------------------- | :------------------------------- |
| [double](https://www.mathworks.com/help/matlab/ref/double.html) | double precision array           |
| [single](https://www.mathworks.com/help/matlab/ref/single.html) | single precision array           |
| [int8](https://www.mathworks.com/help/matlab/ref/int8.html)     | 8-bit signed integer array       |
| [int16](https://www.mathworks.com/help/matlab/ref/int16.html)   | 16-bit signed integer array      |
| [int32](https://www.mathworks.com/help/matlab/ref/int32.html)   | 32-bit signed integer array      |
| [int64](https://www.mathworks.com/help/matlab/ref/int64.html)   | 64-bit signed integer array      |
| [uint8](https://www.mathworks.com/help/matlab/ref/uint8.html)   | Array of 8-bit unsigned integers |
| [uint16](https://www.mathworks.com/help/matlab/ref/uint16.html) | 16-bit unsigned integer array    |
| [uint32](https://www.mathworks.com/help/matlab/ref/uint32.html) | 32-bit unsigned integer array    |
| [uint64](https://www.mathworks.com/help/matlab/ref/uint64.html) | 64-bit unsigned integer array    |

Convert between numeric types

| -                                                                   | -                                                       |
| ------------------------------------------------------------------- | :------------------------------------------------------ |
| [cast](https://www.mathworks.com/help/matlab/ref/cast.html)         | Convert variables to different data types               |
| [typecast](https://www.mathworks.com/help/matlab/ref/typecast.html) | Convert data types without changing the underlying data |

Query type and value

| -                                                                      | -                                                     |
| ---------------------------------------------------------------------- | :---------------------------------------------------- |
| [allfinite](https://www.mathworks.com/help/matlab/ref/allfinite.html") | Determine if all array elements are finite            |
| [anynan](https://www.mathworks.com/help/matlab/ref/anynan.html")       | Determine if any array element is NaN                 |
| [isinteger](https://www.mathworks.com/help/matlab/ref/isinteger.html)  | Determine whether the input is an integer array       |
| [isfloat](https://www.mathworks.com/help/matlab/ref/isfloat.html)      | Determine whether the input is a floating-point array |
| [isnumeric](https://www.mathworks.com/help/matlab/ref/isnumeric.html)  | Determine whether the input is a numeric array        |
| [isreal](https://www.mathworks.com/help/matlab/ref/isreal.html)        | Determine whether the array uses complex storage      |
| [isfinite](https://www.mathworks.com/help/matlab/ref/isfinite.html)    | Determine which array elements are finite             |
| [isinf](https://www.mathworks.com/help/matlab/ref/isinf.html)          | Determine which array elements are infinite           |
| [isnan](https://www.mathworks.com/help/matlab/ref/isnan.html)          | Determine which array elements are NaN                |

Value range

| -                                                                   | -                                                                     |
| ------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| [eps](https://www.mathworks.com/help/matlab/ref/eps.html)           | Floating point relative precision                                     |
| [flintmax](https://www.mathworks.com/help/matlab/ref/flintmax.html) | The largest consecutive integer in floating point format              |
| [Inf](https://www.mathworks.com/help/matlab/ref/inf.html)           | Create an array with all values `Inf`                                 |
| [intmax](https://www.mathworks.com/help/matlab/ref/intmax.html)     | The maximum value of a specific integer type                          |
| [intmin](https://www.mathworks.com/help/matlab/ref/intmin.html)     | The minimum value of a specific integer type                          |
| [NaN](https://www.mathworks.com/help/matlab/ref/nan.html)           | Create an array where all values are <code class="literal">NaN</code> |
| [realmax](https://www.mathworks.com/help/matlab/ref/realmax.html)   | The largest positive floating point number                            |
| [realmin](https://www.mathworks.com/help/matlab/ref/realmin.html)   | Minimum standard floating point number                                |

### Loops and conditional statements

| -                                                                                | -                                                                 |
| -------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| [if, elseif, else](https://www.mathworks.com/help/matlab/ref/if.html)            | Execute statement when condition is true                          |
| [switch, case, otherwise](https://www.mathworks.com/help/matlab/ref/switch.html) | Execute one of multiple sets of statements                        |
| [for](https://www.mathworks.com/help/matlab/ref/for.html)                        | A `for` loop used to repeat a specified number of times           |
| [while](https://www.mathworks.com/help/matlab/ref/while.html)                    | A `while` loop that executes repeatedly while a condition is true |
| [try, catch](https://www.mathworks.com/help/matlab/ref/try.html)                 | Execute the statement and catch the resulting error               |
| [break](https://www.mathworks.com/help/matlab/ref/break.html)                    | Terminate execution of a for or while loop                        |
| [return](https://www.mathworks.com/help/matlab/ref/return.html)                  | Return control to the calling script or function                  |
| [continue](https://www.mathworks.com/help/matlab/ref/continue.html)              | Passes control to the next iteration of a `for` or `while` loop   |
| [pause](https://www.mathworks.com/help/matlab/ref/pause.html)                    | Temporarily suspend the execution of `MATLAB`                     |
| [parfor](https://www.mathworks.com/help/matlab/ref/parfor.html)                  | Parallel for loop                                                 |
| [end](https://www.mathworks.com/help/matlab/ref/end.html)                        | Terminate a code block or indicate the maximum array index        |

{.style-list}

### Array of strings

| -                                                                 | -                                                      |
| ----------------------------------------------------------------- | :----------------------------------------------------- |
| [string](https://www.mathworks.com/help/matlab/ref/string.html)   | string array                                           |
| [strings](https://www.mathworks.com/help/matlab/ref/strings.html) | Create a string array that does not contain characters |
| [join](https://www.mathworks.com/help/matlab/ref/join.html)       | Merge strings                                          |
| [plus](https://www.mathworks.com/help/matlab/ref/plus.html)       | Add numbers, append strings                            |

### Character array

| -                                                                 | -                                            |
| ----------------------------------------------------------------- | :------------------------------------------- |
| [char](https://www.mathworks.com/help/matlab/ref/char.html)       | character array                              |
| [cellstr](https://www.mathworks.com/help/matlab/ref/cellstr.html) | Convert to a cell array of character vectors |
| [blanks](https://www.mathworks.com/help/matlab/ref/blanks.html)   | Create a blank character array               |
| [newline](https://www.mathworks.com/help/matlab/ref/newline.html) | Create newline                               |

### Character or string array

| -                                                                 | -                                         |
| ----------------------------------------------------------------- | :---------------------------------------- |
| [compose](https://www.mathworks.com/help/matlab/ref/compose.html) | Format data into multiple strings         |
| [sprintf](https://www.mathworks.com/help/matlab/ref/sprintf.html) | Format data as string or character vector |
| [strcat](https://www.mathworks.com/help/matlab/ref/strcat.html)   | Concatenate strings horizontally          |
| [append](https://www.mathworks.com/help/matlab/ref/append.html)   | Merge strings                             |

### Char or string -convert input arguments

| -                                                                                                               | -                                                                                   |
| --------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| [convertCharsToStrings](https://www.mathworks.com/help/matlab/ref/convertcharstostrings.html)                   | convert character array to string array, other arrays remain unchanged              |
| [convertStringsToChars](https://www.mathworks.com/help/matlab/ref/convertstringstochars.html)                   | Convert string array to character array, other arrays remain unchanged              |
| [convertContainedStringsToChars](https://www.mathworks.com/help/matlab/ref/convertcontainedstringstochars.html) | Convert an array of strings at any level of a cell array or structure {.style-list} |

### CHAR or STRING -convert between numeric and string

| -                                                                       | -                                   |
| ----------------------------------------------------------------------- | :---------------------------------- |
| [double](https://www.mathworks.com/help/matlab/ref/double.html)         | double precision array              |
| [string](https://www.mathworks.com/help/matlab/ref/string.html)         | string array                        |
| [str2double](https://www.mathworks.com/help/matlab/ref/str2double.html) | Convert a string to a double value  |
| [num2str](https://www.mathworks.com/help/matlab/ref/num2str.html)       | Convert numbers to character arrays |

### Character or string -determine type and attributes {.row-span-2}

Type of data

| -                                                                               | -                                                                    |
| ------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| [ischar](https://www.mathworks.com/help/matlab/ref/ischar.html)                 | Determine whether the input is a character array                     |
| [iscellstr](https://www.mathworks.com/help/matlab/ref/iscellstr.html)           | Determines if input is a cell array of character vectors             |
| [isstring](https://www.mathworks.com/help/matlab/ref/isstring.html)             | Determine whether the input is an array of strings                   |
| [isStringScalar](https://www.mathworks.com/help/matlab/ref/isstringscalar.html) | Determine whether the input is a string array containing one element |

Text attribute

| -                                                                     | -                                                                               |
| --------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| [strlength](https://www.mathworks.com/help/matlab/ref/strlength.html) | string length                                                                   |
| [isstrprop](https://www.mathworks.com/help/matlab/ref/isstrprop.html) | Determine which characters in the input string belong to the specified category |
| [isletter](https://www.mathworks.com/help/matlab/ref/isletter.html)   | Determine which characters are letters                                          |
| [isspace](https://www.mathworks.com/help/matlab/ref/isspace.html)     | Determine which characters are whitespace characters                            |

### character or string -find and replace {.row-span-2}

Look up

| -                                                                       | -                                                        |
| ----------------------------------------------------------------------- | :------------------------------------------------------- |
| [contains](https://www.mathworks.com/help/matlab/ref/contains.html)     | Determine if there is a pattern in the string            |
| [matches](https://www.mathworks.com/help/matlab/ref/matches.html)       | Determine if a pattern matches a string                  |
| [count](https://www.mathworks.com/help/matlab/ref/count.html)           | Count the number of occurrences of a pattern in a string |
| [endsWith](https://www.mathworks.com/help/matlab/ref/endswith.html)     | Determine if a string ends with a pattern                |
| [startsWith](https://www.mathworks.com/help/matlab/ref/startswith.html) | Determine whether a string starts with a pattern         |
| [strfind](https://www.mathworks.com/help/matlab/ref/strfind.html)       | Find a string in other strings                           |
| [sscanf](https://www.mathworks.com/help/matlab/ref/sscanf.html)         | Read formatted data from a string                        |

replace

| -                                                                               | -                                               |
| ------------------------------------------------------------------------------- | :---------------------------------------------- |
| [replace](https://www.mathworks.com/help/matlab/ref/replace.html)               | Find and replace one or more substrings         |
| [replaceBetween](https://www.mathworks.com/help/matlab/ref/replacebetween.html) | Replace the substring between the start and end |
| [strrep](https://www.mathworks.com/help/matlab/ref/strrep.html)                 | Find and replace substring                      |

### String matching pattern -build pattern

| -                                                                 | -                                       |
| ----------------------------------------------------------------- | :-------------------------------------- |
| [pattern](https://www.mathworks.com/help/matlab/ref/pattern.html) | pattern for searching and matching text |

### String match pattern -character match pattern

| -                                                                                           | -                                               |
| ------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| [alphanumericsPattern](https://www.mathworks.com/help/matlab/ref/alphanumericspattern.html) | match alphanumeric characters                   |
| [characterListPattern](https://www.mathworks.com/help/matlab/ref/characterlistpattern.html) | Match characters in the list                    |
| [digitsPattern](https://www.mathworks.com/help/matlab/ref/digitspattern.html)               | Match digit characters                          |
| [lettersPattern](https://www.mathworks.com/help/matlab/ref/letterspattern.html)             | match letter pattern                            |
| [whitespacePattern](https://www.mathworks.com/help/matlab/ref/whitespacepattern.html)       | match whitespace characters                     |
| [wildcardPattern](https://www.mathworks.com/help/matlab/ref/wildcardpattern.html)           | Match as few characters of any type as possible |

### String matching pattern -pattern search rules

| -                                                                                               | -                                                          |
| ----------------------------------------------------------------------------------------------- | :--------------------------------------------------------- |
| [optionalPattern](https://www.mathworks.com/help/matlab/ref/optionalpattern.html)               | Make pattern matching optional                             |
| [possessivePattern](https://www.mathworks.com/help/matlab/ref/possessivepattern.html)           | Match pattern without backtracking                         |
| [caseSensitivePattern](https://www.mathworks.com/help/matlab/ref/casesensitivepattern.html)     | Match patterns in a case-sensitive manner                  |
| [caseInsensitivePattern](https://www.mathworks.com/help/matlab/ref/caseinsensitivepattern.html) | Match patterns in a case-insensitive manner                |
| [asFewOfPattern](https://www.mathworks.com/help/matlab/ref/asfewofpattern.html)                 | The number of pattern matches should be as few as possible |
| [asManyOfPattern](https://www.mathworks.com/help/matlab/ref/asmanyofpattern.html)               | Pattern matching as many times as possible                 |

### String matching pattern -Boundary pattern {.row-span-2}

| -                                                                                           | -                                                                         |
| ------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| [alphanumericBoundary](https://www.mathworks.com/help/matlab/ref/alphanumericboundary.html) | Matches the boundary between alphanumeric and non-alphanumeric characters |
| [digitBoundary](https://www.mathworks.com/help/matlab/ref/digitboundary.html)               | Matches the boundary between digit characters and non-digit characters    |
| [letterBoundary](https://www.mathworks.com/help/matlab/ref/letterboundary.html)             | Matches the boundary between alphabetic and non-alphabetic characters     |
| [whitespaceBoundary](https://www.mathworks.com/help/matlab/ref/whitespaceboundary.html)     | Matches the boundary between whitespace and non-whitespace characters     |
| [lineBoundary](https://www.mathworks.com/help/matlab/ref/lineboundary.html)                 | match the beginning or end of a line                                      |
| [textBoundary](https://www.mathworks.com/help/matlab/ref/textboundary.html)                 | match the beginning or end of the text                                    |
| [lookAheadBoundary](https://www.mathworks.com/help/matlab/ref/lookaheadboundary.html)       | match the boundary before the specified pattern                           |
| [lookBehindBoundary](https://www.mathworks.com/help/matlab/ref/lookbehindboundary.html)     | Boundary after matching the specified pattern                             |

{.style-list}

### String matching pattern -custom pattern display

| -                                                                             | -                                   |
| ----------------------------------------------------------------------------- | :---------------------------------- |
| [maskedPattern](https://www.mathworks.com/help/matlab/ref/maskedpattern.html) | pattern with specified display name |
| [namedPattern](https://www.mathworks.com/help/matlab/ref/namedpattern.html)   | Specify a named pattern             |

### String matching pattern -regular expression

| -                                                                                 | -                                                     |
| --------------------------------------------------------------------------------- | :---------------------------------------------------- |
| [regexp](https://www.mathworks.com/help/matlab/ref/regexp.html)                   | match regular expression (case sensitive)             |
| [regexpi](https://www.mathworks.com/help/matlab/ref/regexpi.html)                 | Match regular expressions (case insensitive)          |
| [regexprep](https://www.mathworks.com/help/matlab/ref/regexprep.html)             | Replace text using regular expressions                |
| [regexptranslate](https://www.mathworks.com/help/matlab/ref/regexptranslate.html) | Convert text to regular expressions                   |
| [regexpPattern](https://www.mathworks.com/help/matlab/ref/regexppattern.html)     | Match the pattern of the specified regular expression |

### String matching pattern -join and split

| -                                                                               | -                                                                     |
| ------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| [join](https://www.mathworks.com/help/matlab/ref/join.html)                     | Merge strings                                                         |
| [plus](https://www.mathworks.com/help/matlab/ref/plus.html)                     | Add numbers, append strings                                           |
| [split](https://www.mathworks.com/help/matlab/ref/split.html)                   | Split string at delimiter                                             |
| [splitlines](https://www.mathworks.com/help/matlab/ref/splitlines.html)         | Split a string at newlines                                            |
| [strjoin](https://www.mathworks.com/help/matlab/ref/strjoin.html)               | join the strings in the array                                         |
| [strsplit](https://www.mathworks.com/help/matlab/ref/strsplit.html)             | Splits a string or character vector at the specified delimiter        |
| [strtok](https://www.mathworks.com/help/matlab/ref/strtok.html)                 | Selected string part                                                  |
| [extract](https://www.mathworks.com/help/matlab/ref/extract.html)               | Extract a substring from a string                                     |
| [extractAfter](https://www.mathworks.com/help/matlab/ref/extractafter.html)     | Extract the substring after the specified position                    |
| [extractBefore](https://www.mathworks.com/help/matlab/ref/extractbefore.html)   | Extract the substring before the specified position                   |
| [extractBetween](https://www.mathworks.com/help/matlab/ref/extractbetween.html) | Extract the substring between the starting point and the ending point |

### String editing {.row-span-2}

| -                                                                               | -                                                                     |
| ------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| [erase](https://www.mathworks.com/help/matlab/ref/erase.html)                   | Delete a substring in a string                                        |
| [eraseBetween](https://www.mathworks.com/help/matlab/ref/erasebetween.html)     | Delete the substring between the start and end                        |
| [extract](https://www.mathworks.com/help/matlab/ref/extract.html)               | Extract a substring from a string                                     |
| [extractAfter](https://www.mathworks.com/help/matlab/ref/extractafter.html)     | Extract the substring after the specified position                    |
| [extractBefore](https://www.mathworks.com/help/matlab/ref/extractbefore.html)   | Extract the substring before the specified position                   |
| [extractBetween](https://www.mathworks.com/help/matlab/ref/extractbetween.html) | Extract the substring between the starting point and the ending point |
| [insertAfter](https://www.mathworks.com/help/matlab/ref/insertafter.html)       | Insert a string after the specified substring                         |
| [insertBefore](https://www.mathworks.com/help/matlab/ref/insertbefore.html)     | Insert a string before the specified substring                        |
| [pad](https://www.mathworks.com/help/matlab/ref/pad.html)                       | Add leading or trailing characters to a string                        |
| [strip](https://www.mathworks.com/help/matlab/ref/strip.html)                   | Remove leading and trailing characters in a string                    |
| [lower](https://www.mathworks.com/help/matlab/ref/lower.html)                   | convert string to lowercase                                           |
| [upper](https://www.mathworks.com/help/matlab/ref/upper.html)                   | convert string to uppercase                                           |
| [reverse](https://www.mathworks.com/help/matlab/ref/reverse.html)               | Reverse the order of characters in a string                           |
| [deblank](https://www.mathworks.com/help/matlab/ref/deblank.html)               | Remove trailing blanks at the end of a string                         |
| [strtrim](https://www.mathworks.com/help/matlab/ref/strtrim.html)               | Remove leading and trailing blanks from a string                      |
| [strjust](https://www.mathworks.com/help/matlab/ref/strjust.html)               | align string                                                          |

### String comparison

| -                                                                   | -                                                                                           |
| ------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| [matches](https://www.mathworks.com/help/matlab/ref/matches.html)   | Determine if a pattern matches a string                                                     |
| [strcmp](https://www.mathworks.com/help/matlab/ref/strcmp.html)     | Compare strings                                                                             |
| [strcmpi](https://www.mathworks.com/help/matlab/ref/strcmpi.html)   | Compare strings (case insensitive)                                                          |
| [strncmp](https://www.mathworks.com/help/matlab/ref/strncmp.html)   | compares the first <code class="literal">n</code> characters of a string (case sensitive)   |
| [strncmpi](https://www.mathworks.com/help/matlab/ref/strncmpi.html) | Compare the first <code class="literal">n</code> characters of a string (case insensitive ) |

### Basic Arithmetic {.row-span-3}

#### Addition

- [+](https://www.mathworks.com/help/matlab/ref/plus.html) Add numbers, append strings
- [sum](https://www.mathworks.com/help/matlab/ref/sum.html) sum of array elements
- [cumsum](https://www.mathworks.com/help/matlab/ref/cumsum.html) cumulative sum
- [movsum](https://www.mathworks.com/help/matlab/ref/movsum.html) moving sum

{.cols-2 .marker-none}

#### Subtraction

- [-](https://www.mathworks.com/help/matlab/ref/minus.html) subtraction
- [diff](https://www.mathworks.com/help/matlab/ref/diff.html) difference and approximate derivative

{.cols-2 .marker-none}

#### Multiplication

| -                                                                       | -                                   |
| ----------------------------------------------------------------------- | :---------------------------------- |
| [.\*](https://www.mathworks.com/help/matlab/ref/times.html)             | Multiplication                      |
| [\*](https://www.mathworks.com/help/matlab/ref/mtimes.html)             | Matrix multiplication               |
| [prod](https://www.mathworks.com/help/matlab/ref/prod.html)             | product of array elements           |
| [cumprod](https://www.mathworks.com/help/matlab/ref/cumprod.html)       | cumulative product                  |
| [pagemtimes](https://www.mathworks.com/help/matlab/ref/pagemtimes.html) | Matrix multiplication by page       |
| [tensorprod](https://www.mathworks.com/help/matlab/ref/tensorprod.html) | Tensor products between two tensors |

#### Division

| -                                                             | -                                                             |
| ------------------------------------------------------------- | :------------------------------------------------------------ |
| [./](https://www.mathworks.com/help/matlab/ref/rdivide.html)  | Array right division                                          |
| [.\\](https://www.mathworks.com/help/matlab/ref/ldivide.html) | Array left division                                           |
| [/](https://www.mathworks.com/help/matlab/ref/mrdivide.html)  | Solve the system of linear equations xA = B about x           |
| [\\](https://www.mathworks.com/help/matlab/ref/mldivide.html) | Solve the system of linear equations Ax = B with respect to x |

#### Power

- [.^](https://www.mathworks.com/help/matlab/ref/power.html) Element-wise exponentiation
- [^](https://www.mathworks.com/help/matlab/ref/mpower.html) matrix power

{.cols-2 .marker-none}

#### Transpose

| -                                                                               | -                                   |
| ------------------------------------------------------------------------------- | :---------------------------------- |
| [.'](https://www.mathworks.com/help/matlab/ref/transpose.html)                  | Transpose a vector or matrix        |
| ['](https://www.mathworks.com/help/matlab/ref/ctranspose.html)                  | complex conjugate transpose         |
| [pagetranspose](https://www.mathworks.com/help/matlab/ref/pagetranspose.html)   | Transpose by page                   |
| [pagectranspose](https://www.mathworks.com/help/matlab/ref/pagectranspose.html) | Complex conjugate transpose by page |

#### Array notation

- [uminus](https://www.mathworks.com/help/matlab/ref/uminus.html) unary subtraction
- [uplus](https://www.mathworks.com/help/matlab/ref/uplus.html) unary addition

{.cols-2 .marker-none}

### Modular division and rounding

| -                                                                 | -                                           |
| ----------------------------------------------------------------- | :------------------------------------------ |
| [mod](https://www.mathworks.com/help/matlab/ref/mod.html)         | Remainder after division (modulo operation) |
| [rem](https://www.mathworks.com/help/matlab/ref/rem.html)         | Remainder after division                    |
| [idivide](https://www.mathworks.com/help/matlab/ref/idivide.html) | Divisibility with rounding options          |
| [ceil](https://www.mathworks.com/help/matlab/ref/ceil.html)       | round towards positive infinity             |
| [fix](https://www.mathworks.com/help/matlab/ref/fix.html)         | round towards zero                          |
| [floor](https://www.mathworks.com/help/matlab/ref/floor.html)     | round towards negative infinity             |
| [round](https://www.mathworks.com/help/matlab/ref/round.html)     | round to the nearest decimal or integer     |

### Custom Binary Functions

| -                                                               | -                                                                             |
| --------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| [bsxfun](https://www.mathworks.com/help/matlab/ref/bsxfun.html) | Apply element-wise operations on two arrays (with implicit expansion enabled) |

### Relational operations

value comparison

| -                                                                   | -                                                |
| ------------------------------------------------------------------- | :----------------------------------------------- |
| [==](https://www.mathworks.com/help/matlab/ref/eq.html)             | Determine equality                               |
| [>=](https://www.mathworks.com/help/matlab/ref/ge.html)             | Determine greater than or equal to               |
| [>](https://www.mathworks.com/help/matlab/ref/gt.html)              | Determine greater than                           |
| [<=](https://www.mathworks.com/help/matlab/ref/le.html)             | Determine less than or equal to                  |
| [<](https://www.mathworks.com/help/matlab/ref/lt.html)              | Determine less than                              |
| [~=](https://www.mathworks.com/help/matlab/ref/ne.html)             | Determine Inequality                             |
| [isequal](https://www.mathworks.com/help/matlab/ref/isequal.html)   | Determine array equality                         |
| [isequaln](https://www.mathworks.com/help/matlab/ref/isequaln.html) | Test array equality, treat `NaN` values as equal |

### Logical (Boolean) operations

true or false condition

| -                                                                                                     | -                                                           |
| ----------------------------------------------------------------------------------------------------- | :---------------------------------------------------------- |
| [Short-circuit &&, \|\|](https://www.mathworks.com/help/matlab/ref/logicaloperatorsshortcircuit.html) | Logical operators with short-circuit function               |
| [&](https://www.mathworks.com/help/matlab/ref/and.html)                                               | Computational logic `AND`                                   |
| [~](https://www.mathworks.com/help/matlab/ref/not.html)                                               | Computational logic `NOT`                                   |
| [\|](https://www.mathworks.com/help/matlab/ref/or.html)                                               | Calculation logic `OR`                                      |
| [xor](https://www.mathworks.com/help/matlab/ref/xor.html)                                             | Compute logical exclusive `OR`                              |
| [all](https://www.mathworks.com/help/matlab/ref/all.html)                                             | Determine whether all array elements are non-zero or `true` |
| [any](https://www.mathworks.com/help/matlab/ref/any.html)                                             | Determine if any array elements are non-zero                |
| [false](https://www.mathworks.com/help/matlab/ref/false.html)                                         | logical `0` (false)                                         |
| [find](https://www.mathworks.com/help/matlab/ref/find.html)                                           | Find the index and value of non-zero elements               |
| [islogical](https://www.mathworks.com/help/matlab/ref/islogical.html)                                 | Determine whether the input is a logical array              |
| [logical](https://www.mathworks.com/help/matlab/ref/logical.html)                                     | Convert numeric values to logical values                    |
| [true](https://www.mathworks.com/help/matlab/ref/true.html)                                           | Logical value `1` (true)                                    |

### Set operation

union, intersection, set relationship

| -                                                                            | -                                                              |
| ---------------------------------------------------------------------------- | :------------------------------------------------------------- |
| [intersect](https://www.mathworks.com/help/matlab/ref/double.intersect.html) | Set the intersection of two arrays                             |
| [ismember](https://www.mathworks.com/help/matlab/ref/double.ismember.html)   | Determine whether an array element is a set array member       |
| [setdiff](https://www.mathworks.com/help/matlab/ref/double.setdiff.html)     | Set the difference between two arrays                          |
| [setxor](https://www.mathworks.com/help/matlab/ref/double.setxor.html)       | Set XOR of two arrays                                          |
| [union](https://www.mathworks.com/help/matlab/ref/double.union.html)         | Set the union of two arrays                                    |
| [unique](https://www.mathworks.com/help/matlab/ref/double.unique.html)       | Unique value in an array                                       |
| [ismembertol](https://www.mathworks.com/help/matlab/ref/ismembertol.html)    | set membership within tolerance                                |
| [uniquetol](https://www.mathworks.com/help/matlab/ref/uniquetol.html)        | unique values within tolerance                                 |
| [join](https://www.mathworks.com/help/matlab/ref/table.join.html)            | Merge two tables or timetables row by row using a key variable |
| [innerjoin](https://www.mathworks.com/help/matlab/ref/innerjoin.html)        | Inner join between two tables or timetables                    |
| [outerjoin](https://www.mathworks.com/help/matlab/ref/outerjoin.html)        | Outer join between two tables or timetables                    |

### Bitwise operations

set, offset, or compare specific bitfields

| -                                                                     | -                                      |
| --------------------------------------------------------------------- | :------------------------------------- |
| [bitand](https://www.mathworks.com/help/matlab/ref/bitand.html)       | Bitwise `AND`                          |
| [bitor](https://www.mathworks.com/help/matlab/ref/bitor.html)         | Bitwise `OR`                           |
| [bitxor](https://www.mathworks.com/help/matlab/ref/bitxor.html)       | Bitwise `XOR`                          |
| [bitcmp](https://www.mathworks.com/help/matlab/ref/bitcmp.html)       | Bitwise complement                     |
| [bitget](https://www.mathworks.com/help/matlab/ref/bitget.html)       | Get the bit at the specified position  |
| [bitset](https://www.mathworks.com/help/matlab/ref/bitset.html)       | Set the bit at the specified position  |
| [bitshift](https://www.mathworks.com/help/matlab/ref/bitshift.html)   | Shift bits by specified number of bits |
| [swapbytes](https://www.mathworks.com/help/matlab/ref/swapbytes.html) | swap byte order                        |

## Data import and export

### text file -read and write table or timetable {.row-span-2}

#### Basic import and export

| -                                                                               | -                                  |
| ------------------------------------------------------------------------------- | :--------------------------------- |
| [readtable](https://www.mathworks.com/help/matlab/ref/readtable.html)           | Create a table based on a file     |
| [writetable](https://www.mathworks.com/help/matlab/ref/writetable.html)         | write table to file                |
| [readtimetable](https://www.mathworks.com/help/matlab/ref/readtimetable.html)   | Create a timetable based on a file |
| [writetimetable](https://www.mathworks.com/help/matlab/ref/writetimetable.html) | Write timetable to file            |

#### Define import rules

| -                                                                                                                      | -                                                           |
| ---------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------- |
| [detectImportOptions](https://www.mathworks.com/help/matlab/ref/detectimportoptions.html)                              | Generate import options based on file content               |
| [delimitedTextImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.html) | Import options object for delimited text                    |
| [fixedWidthImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.text.fixedwidthimportoptions.html)       | Import options object for fixed-width text files            |
| [xmlImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.xmlimportoptions.html)                      | Import options object for XML file                          |
| [htmlImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.html.htmlimportoptions.html)                   | Import options object for HTML files                        |
| [wordDocumentImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.word.worddocumentimportoptions.html)   | `Microsoft Word` file import options object                 |
| [getvaropts](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.getvaropts.html)      | Get variable import options                                 |
| [setvaropts](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvaropts.html)      | Set variable import options                                 |
| [setvartype](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvartype.html)      | Set variable data type                                      |
| [preview](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.preview.html)            | Preview eight lines of data in the file with import options |

{.style-list}

### Text files -read and write matrices and arrays

| -                                                                         | -                                              |
| ------------------------------------------------------------------------- | :--------------------------------------------- |
| [readmatrix](https://www.mathworks.com/help/matlab/ref/readmatrix.html)   | Read a matrix from a file                      |
| [writematrix](https://www.mathworks.com/help/matlab/ref/writematrix.html) | Write matrix to file                           |
| [readcell](https://www.mathworks.com/help/matlab/ref/readcell.html)       | Read a cell array from a file                  |
| [writecell](https://www.mathworks.com/help/matlab/ref/writecell.html)     | Write a cell array to a file                   |
| [readvars](https://www.mathworks.com/help/matlab/ref/readvars.html)       | Read variables from a file                     |
| [textscan](https://www.mathworks.com/help/matlab/ref/textscan.html)       | Read formatted data from a text file or string |
| [type](https://www.mathworks.com/help/matlab/ref/type.html)               | Display file content                           |
| [fileread](https://www.mathworks.com/help/matlab/ref/fileread.html)       | Read file content in text format               |
| [readlines](https://www.mathworks.com/help/matlab/ref/readlines.html)     | Read lines of a file as an array of strings    |
| [writelines](https://www.mathworks.com/help/matlab/ref/writelines.html)   | Write text to file                             |

### Spreadsheet -Read and Write Table or Timetable {.row-span-2}

Basic import and export

| -                                                                               | -                                      |
| ------------------------------------------------------------------------------- | :------------------------------------- |
| [readtable](https://www.mathworks.com/help/matlab/ref/readtable.html)           | Create a table from a file             |
| [writetable](https://www.mathworks.com/help/matlab/ref/writetable.html)         | write table to file                    |
| [readtimetable](https://www.mathworks.com/help/matlab/ref/readtimetable.html)   | Create a timetable from a file         |
| [writetimetable](https://www.mathworks.com/help/matlab/ref/writetimetable.html) | Write timetable to file                |
| [sheetnames](https://www.mathworks.com/help/matlab/ref/sheetnames.html)         | Get sheetnames from a spreadsheet file |

{.style-list}

Define import rules

| -                                                                                                                         | -                                                        |
| ------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| [detectImportOptions](https://www.mathworks.com/help/matlab/ref/detectimportoptions.html)                                 | Generate import options based on file content            |
| [spreadsheetImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.spreadsheet.spreadsheetimportoptions.html) | Spreadsheet import options object                        |
| [getvaropts](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.getvaropts.html)         | Get variable import options                              |
| [setvaropts](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvaropts.html)         | Set variable import options                              |
| [setvartype](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvartype.html)         | Set variable data type                                   |
| [preview](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.preview.html)               | Preview eight rows of data in a file with import options |

{.style-list}

### Spreadsheet -Reading and writing matrices and arrays

| -                                                                         | -                             |
| ------------------------------------------------------------------------- | :---------------------------- |
| [readmatrix](https://www.mathworks.com/help/matlab/ref/readmatrix.html)   | Read a matrix from a file     |
| [writematrix](https://www.mathworks.com/help/matlab/ref/writematrix.html) | Write matrix to file          |
| [readcell](https://www.mathworks.com/help/matlab/ref/readcell.html)       | Read a cell array from a file |
| [writecell](https://www.mathworks.com/help/matlab/ref/writecell.html)     | Write a cell array to a file  |
| [readvars](https://www.mathworks.com/help/matlab/ref/readvars.html)       | Read variables from a file    |
| [importdata](https://www.mathworks.com/help/matlab/ref/importdata.html)   | Load data from a file         |

### images

| -                                                                 | -                                         |
| ----------------------------------------------------------------- | :---------------------------------------- |
| [imfinfo](https://www.mathworks.com/help/matlab/ref/imfinfo.html) | Information about graphics files          |
| [imread](https://www.mathworks.com/help/matlab/ref/imread.html)   | Reads an image from a graphics file       |
| [imwrite](https://www.mathworks.com/help/matlab/ref/imwrite.html) | Writes an image to a graphics file        |
| [Tiff](https://www.mathworks.com/help/matlab/ref/tiff.html)       | MATLAB entry for LibTIFF library routines |

### Read or write a NetCDF file {.row-span-2}

| -                                                                             | -                                                              |
| ----------------------------------------------------------------------------- | :------------------------------------------------------------- |
| [nccreate](https://www.mathworks.com/help/matlab/ref/nccreate.html)           | Create variables in a NetCDF file                              |
| [ncdisp](https://www.mathworks.com/help/matlab/ref/ncdisp.html)               | Displays NetCDF data source content in the command line window |
| [ncinfo](https://www.mathworks.com/help/matlab/ref/ncinfo.html)               | Returns information about a NetCDF data source                 |
| [ncread](https://www.mathworks.com/help/matlab/ref/ncread.html)               | Read variable data from a NetCDF data source                   |
| [ncreadatt](https://www.mathworks.com/help/matlab/ref/ncreadatt.html)         | Read attribute values in a NetCDF data source                  |
| [ncwrite](https://www.mathworks.com/help/matlab/ref/ncwrite.html)             | Write data to a NetCDF file                                    |
| [ncwriteatt](https://www.mathworks.com/help/matlab/ref/ncwriteatt.html)       | Write attributes to a NetCDF file                              |
| [ncwriteschema](https://www.mathworks.com/help/matlab/ref/ncwriteschema.html) | Adds a NetCDF schema definition to a NetCDF file               |

### NetCDF library package -library functions

| -                                                                                                 | -                                                            |
| ------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| [netcdf.getChunkCache](https://www.mathworks.com/help/matlab/ref/netcdf.getchunkcache.html)       | Retrieves the chunk cache settings for the NetCDF library    |
| [netcdf.inqLibVers](https://www.mathworks.com/help/matlab/ref/netcdf.inqlibvers.html)             | Returns NetCDF library version information                   |
| [netcdf.setChunkCache](https://www.mathworks.com/help/matlab/ref/netcdf.setchunkcache.html)       | Sets the default chunk cache settings for the NetCDF library |
| [netcdf.setDefaultFormat](https://www.mathworks.com/help/matlab/ref/netcdf.setdefaultformat.html) | Change the default netCDF file format                        |

{.style-list}

### NetCDF library package -file operations {.row-span-2}

| -                                                                                         | -                                                  |
| ----------------------------------------------------------------------------------------- | :------------------------------------------------- |
| [netcdf.abort](https://www.mathworks.com/help/matlab/ref/netcdf.abort.html)               | restores the most recent netCDF file definition    |
| [netcdf.close](https://www.mathworks.com/help/matlab/ref/netcdf.close.html)               | Closes a netCDF file                               |
| [netcdf.create](https://www.mathworks.com/help/matlab/ref/netcdf.create.html)             | Create a new NetCDF dataset                        |
| [netcdf.endDef](https://www.mathworks.com/help/matlab/ref/netcdf.enddef.html)             | End netCDF file definition mode                    |
| [netcdf.inq](https://www.mathworks.com/help/matlab/ref/netcdf.inq.html)                   | returns information about a netCDF file            |
| [netcdf.inqFormat](https://www.mathworks.com/help/matlab/ref/netcdf.inqformat.html)       | Determines the format of a NetCDF file             |
| [netcdf.inqGrps](https://www.mathworks.com/help/matlab/ref/netcdf.inqgrps.html)           | Retrieves an array of subgroup IDs                 |
| [netcdf.inqUnlimDims](https://www.mathworks.com/help/matlab/ref/netcdf.inqunlimdims.html) | Retrieves a list of infinite dimensions in a group |
| [netcdf.open](https://www.mathworks.com/help/matlab/ref/netcdf.open.html)                 | Open NetCDF data source                            |
| [netcdf.reDef](https://www.mathworks.com/help/matlab/ref/netcdf.redef.html)               | puts an open netCDF file into definition mode      |
| [netcdf.setFill](https://www.mathworks.com/help/matlab/ref/netcdf.setfill.html)           | Set netCDF fill mode                               |
| [netcdf.sync](https://www.mathworks.com/help/matlab/ref/netcdf.sync.html)                 | Synchronize netCDF files to disk                   |

### NetCDF Library Package -Dimensions

| -                                                                                   | -                                          |
| ----------------------------------------------------------------------------------- | :----------------------------------------- |
| [netcdf.defdim](https://www.mathworks.com/help/matlab/ref/netcdf.defdim.html)       | Create netCDF dimensions                   |
| [netcdf.inqDim](https://www.mathworks.com/help/matlab/ref/netcdf.inqdim.html)       | Returns netCDF dimension names and lengths |
| [netcdf.inqDimID](https://www.mathworks.com/help/matlab/ref/netcdf.inqdimid.html)   | Returns the dimension ID                   |
| [netcdf.renameDim](https://www.mathworks.com/help/matlab/ref/netcdf.renamedim.html) | Change netCDF dimension names              |

### NetCDF library package -group

| -                                                                                             | -                                                    |
| --------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| [netcdf.defGrp](https://www.mathworks.com/help/matlab/ref/netcdf.defgrp.html)                 | Create groups in a NetCDF file                       |
| [netcdf.inqDimIDs](https://www.mathworks.com/help/matlab/ref/netcdf.inqdimids.html)           | Retrieves a list of dimension identifiers in a group |
| [netcdf.inqGrpName](https://www.mathworks.com/help/matlab/ref/netcdf.inqgrpname.html)         | Retrieve group name                                  |
| [netcdf.inqGrpNameFull](https://www.mathworks.com/help/matlab/ref/netcdf.inqgrpnamefull.html) | the full pathname of the group                       |
| [netcdf.inqGrpParent](https://www.mathworks.com/help/matlab/ref/netcdf.inqgrpparent.html)     | Retrieves the ID of the parent group.                |
| [netcdf.inqNcid](https://www.mathworks.com/help/matlab/ref/netcdf.inqncid.html)               | Returns the ID of a named group                      |
| [netcdf.inqVarIDs](https://www.mathworks.com/help/matlab/ref/netcdf.inqvarids.html)           | IDs of all variables in the group                    |

### NetCDF library package -variable {.row-span-3}

| -                                                                                                 | -                                                         |
| ------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| [netcdf.defVarFill](https://www.mathworks.com/help/matlab/ref/netcdf.defvarfill.html)             | Defines the fill parameter for a NetCDF variable          |
| [netcdf.defVar](https://www.mathworks.com/help/matlab/ref/netcdf.defvar.html)                     | Create a NetCDF variable                                  |
| [netcdf.defVarChunking](https://www.mathworks.com/help/matlab/ref/netcdf.defvarchunking.html)     | Defines chunking behavior for NetCDF variables            |
| [netcdf.defVarDeflate](https://www.mathworks.com/help/matlab/ref/netcdf.defvardeflate.html)       | Defines compression parameters for NetCDF variables       |
| [netcdf.defVarFletcher32](https://www.mathworks.com/help/matlab/ref/netcdf.defvarfletcher32.html) | Defines validation parameters for NetCDF variables        |
| [netcdf.getVar](https://www.mathworks.com/help/matlab/ref/netcdf.getvar.html)                     | Read data in a NetCDF variable                            |
| [netcdf.inqVar](https://www.mathworks.com/help/matlab/ref/netcdf.inqvar.html)                     | Information about variables                               |
| [netcdf.inqVarChunking](https://www.mathworks.com/help/matlab/ref/netcdf.inqvarchunking.html)     | Determines chunking settings for NetCDF variables         |
| [netcdf.inqVarDeflate](https://www.mathworks.com/help/matlab/ref/netcdf.inqvardeflate.html)       | Determines compression settings for NetCDF variables      |
| [netcdf.inqVarFill](https://www.mathworks.com/help/matlab/ref/netcdf.inqvarfill.html)             | Determines the fill parameter value for a NetCDF variable |
| [netcdf.inqVarFletcher32](https://www.mathworks.com/help/matlab/ref/netcdf.inqvarfletcher32.html) | About Fletcher32 checksum settings for NetCDF variables   |
| [netcdf.inqVarID](https://www.mathworks.com/help/matlab/ref/netcdf.inqvarid.html)                 | Returns the ID associated with the variable name          |
| [netcdf.putVar](https://www.mathworks.com/help/matlab/ref/netcdf.putvar.html)                     | Writes data to a netCDF variable                          |
| [netcdf.renameVar](https://www.mathworks.com/help/matlab/ref/netcdf.renamevar.html)               | Change netCDF variable name                               |

{.style-list}

### NetCDF library package -properties

| -                                                                                     | -                                           |
| ------------------------------------------------------------------------------------- | :------------------------------------------ |
| [netcdf.copyAtt](https://www.mathworks.com/help/matlab/ref/netcdf.copyatt.html)       | Copy an attribute to a new location         |
| [netcdf.delAtt](https://www.mathworks.com/help/matlab/ref/netcdf.delatt.html)         | Remove netCDF attribute                     |
| [netcdf.getAtt](https://www.mathworks.com/help/matlab/ref/netcdf.getatt.html)         | Returns the NetCDF attribute                |
| [netcdf.inqAtt](https://www.mathworks.com/help/matlab/ref/netcdf.inqatt.html)         | Returns information about netCDF attributes |
| [netcdf.inqAttID](https://www.mathworks.com/help/matlab/ref/netcdf.inqattid.html)     | Returns the ID of a netCDF attribute        |
| [netcdf.inqAttName](https://www.mathworks.com/help/matlab/ref/netcdf.inqattname.html) | Returns the netCDF attribute name           |
| [netcdf.putAtt](https://www.mathworks.com/help/matlab/ref/netcdf.putatt.html)         | Write netCDF attributes                     |
| [netcdf.renameAtt](https://www.mathworks.com/help/matlab/ref/netcdf.renameatt.html)   | Change Attribute Name                       |

### NetCDF library package -user-defined types

| :-                                                                                      | :-                                                       |
| :-------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| [netcdf.defVlen](https://www.mathworks.com/help/matlab/ref/netcdf.defvlen.html)         | Define user-defined variable length array type (NC_VLEN) |
| [netcdf.inqUserType](https://www.mathworks.com/help/matlab/ref/netcdf.inqusertype.html) | Return information about user-defined type               |
| [netcdf.inqVlen](https://www.mathworks.com/help/matlab/ref/netcdf.inqvlen.html)         | Return information about user-defined `NC_VLEN` type     |

{.style-list}

### NetCDF library package -Utilities

| -                                                                                                 | -                                                       |
| ------------------------------------------------------------------------------------------------- | :------------------------------------------------------ |
| [netcdf.getConstant](https://www.mathworks.com/help/matlab/ref/netcdf.getconstant.html)           | returns the value of the named constant                 |
| [netcdf.getConstantNames](https://www.mathworks.com/help/matlab/ref/netcdf.getconstantnames.html) | returns a list of constants known to the netCDF library |

{.style-list}

### Read or write HDF5 files

| -                                                                       | -                                 |
| ----------------------------------------------------------------------- | :-------------------------------- |
| [h5create](https://www.mathworks.com/help/matlab/ref/h5create.html)     | Create HDF5 dataset               |
| [h5disp](https://www.mathworks.com/help/matlab/ref/h5disp.html)         | Display the content of HDF5 files |
| [h5info](https://www.mathworks.com/help/matlab/ref/h5info.html)         | Information about HDF5 files      |
| [h5read](https://www.mathworks.com/help/matlab/ref/h5read.html)         | Read data from HDF5 dataset       |
| [h5readatt](https://www.mathworks.com/help/matlab/ref/h5readatt.html)   | Read attributes from HDF5 files   |
| [h5write](https://www.mathworks.com/help/matlab/ref/h5write.html)       | Write HDF5 dataset                |
| [h5writeatt](https://www.mathworks.com/help/matlab/ref/h5writeatt.html) | Write HDF5 attributes             |

### HDF5 library package {.row-span-4}

| -                                                                                           | -                                                                |
| ------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| [Library (H5)](https://www.mathworks.com/help/matlab/ref/libraryh5.html)                    | General-purpose functions for use with entire HDF5 library       |
| [Attribute (H5A)](https://www.mathworks.com/help/matlab/ref/attributeh5a.html)              | Metadata associated with datasets or groups                      |
| [Dataset (H5D)](https://www.mathworks.com/help/matlab/ref/dataseth5d.html)                  | Multidimensional arrays of data elements and supporting metadata |
| [Dimension Scale (H5DS)](https://www.mathworks.com/help/matlab/ref/dimensionscaleh5ds.html) | Dimension scale associated with dataset dimensions               |
| [Error (H5E)](https://www.mathworks.com/help/matlab/ref/errorh5e.html)                      | Error handling                                                   |
| [File (H5F)](https://www.mathworks.com/help/matlab/ref/fileh5f.html)                        | HDF5 file access                                                 |
| [Group (H5G)](https://www.mathworks.com/help/matlab/ref/grouph5g.html)                      | Organization of objects in file                                  |
| [Identifier (H5I)](https://www.mathworks.com/help/matlab/ref/identifierh5i.html)            | HDF5 object identifiers                                          |
| [Link (H5L)](https://www.mathworks.com/help/matlab/ref/linkh5l.html)                        | Links in HDF5 file                                               |
| [MATLAB (H5ML)](https://www.mathworks.com/help/matlab/ref/matlabh5ml.html)                  | `MATLAB` utility functions not part of the HDF5 C library        |
| [Object (H5O)](https://www.mathworks.com/help/matlab/ref/objecth5o.html)                    | Objects in file                                                  |
| [Property (H5P)](https://www.mathworks.com/help/matlab/ref/propertyh5p.html)                | Object property lists                                            |
| [Reference (H5R)](https://www.mathworks.com/help/matlab/ref/referenceh5r.html)              | HDF5 references                                                  |
| [Dataspace (H5S)](https://www.mathworks.com/help/matlab/ref/dataspaceh5s.html)              | Dimensionality of dataset                                        |
| [Datatype (H5T)](https://www.mathworks.com/help/matlab/ref/datatypeh5t.html)                | Datatype of elements in a dataset                                |

{.style-list}

### HDF4 Files -Advanced Functions

| -                                                                 | -                                       |
| ----------------------------------------------------------------- | :-------------------------------------- |
| [hdfinfo](https://www.mathworks.com/help/matlab/ref/hdfinfo.html) | Information about HDF4 or HDF-EOS files |
| [hdfread](https://www.mathworks.com/help/matlab/ref/hdfread.html) | Read data from HDF4 or HDF-EOS files    |
| [imread](https://www.mathworks.com/help/matlab/ref/imread.html)   | Read an image from a graphics file      |
| [imwrite](https://www.mathworks.com/help/matlab/ref/imwrite.html) | Write image to graphics file            |

### Low-level functions -package {.row-span-3}

| -                                                                                         | -                                                                            |
| ----------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| [matlab.io.hdf4.sd](https://www.mathworks.com/help/matlab/ref/matlab.io.hdf4.sd.html)     | Interact directly with the HDF4 multi-file scientific dataset (SD) interface |
| [matlab.io.hdfeos.gd](https://www.mathworks.com/help/matlab/ref/matlab.io.hdfeos.gd.html) | Low-level access to HDF-EOS grid data                                        |
| [matlab.io.hdfeos.sw](https://www.mathworks.com/help/matlab/ref/matlab.io.hdfeos.sw.html) | Low-level access to HDF-EOS segmented files                                  |

#### Low Level Functions -Functions

| -                                                                 | -                                                     |
| ----------------------------------------------------------------- | :---------------------------------------------------- |
| [hdfan](https://www.mathworks.com/help/matlab/ref/hdfan.html)     | The entry of HDF multi-file annotation (AN) interface |
| [hdfhx](https://www.mathworks.com/help/matlab/ref/hdfhx.html)     | The entry of HDF external data (HX) interface         |
| [hdfh](https://www.mathworks.com/help/matlab/ref/hdfh.html)       | The entry of HDF H interface                          |
| [hdfhd](https://www.mathworks.com/help/matlab/ref/hdfhd.html)     | The entry of HDF HD interface                         |
| [hdfhe](https://www.mathworks.com/help/matlab/ref/hdfhe.html)     | The entry of HDF HE interface                         |
| [hdfml](https://www.mathworks.com/help/matlab/ref/hdfml.html)     | Utilities for use with `MATLAB` HDF entry functions   |
| [hdfpt](https://www.mathworks.com/help/matlab/ref/hdfpt.html)     | Interface of HDF-EOS point object                     |
| [hdfv](https://www.mathworks.com/help/matlab/ref/hdfv.html)       | The entry of HDF Vgroup (V) interface                 |
| [hdfvf](https://www.mathworks.com/help/matlab/ref/hdfvf.html)     | The entry of VF function in HDF Vdata interface       |
| [hdfvh](https://www.mathworks.com/help/matlab/ref/hdfvh.html)     | The entry of VH function in HDF Vdata interface       |
| [hdfvs](https://www.mathworks.com/help/matlab/ref/hdfvs.html)     | The entry of VS function in HDF Vdata interface       |
| [hdfdf24](https://www.mathworks.com/help/matlab/ref/hdfdf24.html) | HDF 24-bit raster image (DF24) interface entry        |
| [hdfdfr8](https://www.mathworks.com/help/matlab/ref/hdfdfr8.html) | HDF 8-bit raster image (DFR8) interface entry         |

### FITS file -function

| -                                                                     | -                            |
| --------------------------------------------------------------------- | :--------------------------- |
| [fitsdisp](https://www.mathworks.com/help/matlab/ref/fitsdisp.html)   | Display FITS metadata        |
| [fitsinfo](https://www.mathworks.com/help/matlab/ref/fitsinfo.html)   | Information about FITS files |
| [fitsread](https://www.mathworks.com/help/matlab/ref/fitsread.html)   | Read data in FITS files      |
| [fitswrite](https://www.mathworks.com/help/matlab/ref/fitswrite.html) | Write image to FITS file     |

### FITS files -file access

| -                                                                                          | -                         |
| ------------------------------------------------------------------------------------------ | :------------------------ |
| [createFile](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.createfile.html)     | Create FITS file          |
| [openFile](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.openfile.html)         | Open FITS file            |
| [openDiskFile](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.opendiskfile.html) | Open FITS file            |
| [closeFile](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.closefile.html)       | Close FITS file           |
| [deleteFile](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deletefile.html)     | Delete FITS file          |
| [fileName](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.filename.html)         | The name of the FITS file |
| [fileMode](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.filemode.html)         | I/O mode for FITS files   |

### FITS files -image processing

| -                                                                                      | -                                           |
| -------------------------------------------------------------------------------------- | :------------------------------------------ |
| [createImg](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.createimg.html)   | Create FITS image                           |
| [getImgSize](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getimgsize.html) | image size                                  |
| [getImgType](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getimgtype.html) | The data type of the image                  |
| [insertImg](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.insertimg.html)   | Insert a FITS image after the current image |
| [readImg](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readimg.html)       | read image data                             |
| [setBscale](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.setbscale.html)   | Reset image scaling                         |
| [writeImg](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writeimg.html)     | write FITS image                            |

### FITS file -keyword {.row-span-2}

| -                                                                                                | -                                               |
| ------------------------------------------------------------------------------------------------ | :---------------------------------------------- |
| [readCard](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readcard.html)               | Header record of keywords                       |
| [readKey](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkey.html)                 | Keyword                                         |
| [readKeyCmplx](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkeycmplx.html)       | A keyword in the form of a complex scalar value |
| [readKeyDbl](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkeydbl.html)           | Keyword in the form of double precision value   |
| [readKeyLongLong](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkeylonglong.html) | Keyword in the form of `int64`                  |
| [readKeyLongStr](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkeylongstr.html)   | long string value                               |
| [readKeyUnit](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkeyunit.html)         | The physical unit string in the key             |
| [readRecord](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readrecord.html)           | Header record specified by number               |
| [writeComment](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writecomment.html)       | Write or append COMMENT keyword to CHU          |
| [writeDate](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writedate.html)             | Write DATE keyword to CHU                       |
| [writeKey](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writekey.html)               | Update or add new keywords to the current HDU   |
| [writeKeyUnit](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writekeyunit.html)       | write physical unit string                      |
| [writeHistory](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writehistory.html)       | Write or append HISTORY keyword to CHU          |
| [deleteKey](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deletekey.html)             | Delete key by name                              |
| [deleteRecord](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deleterecord.html)       | Delete keywords by record number                |
| [getHdrSpace](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.gethdrspace.html)         | The number of keywords in the header            |

### FITS files -Header Data Unit (HDU) access

| -                                                                                            | -                                                                  |
| -------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| [copyHDU](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.copyhdu.html)             | Copy current HDU from one file to another                          |
| [getHDUnum](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.gethdunum.html)         | The number of the current HDU in the FITS file                     |
| [getHDUtype](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.gethdutype.html)       | current HDU type                                                   |
| [getNumHDUs](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getnumhdus.html)       | Total number of HDUs in FITS file                                  |
| [movAbsHDU](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.movabshdu.html)         | Move to Absolute HDU Numbering                                     |
| [movNamHDU](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.movnamhdu.html)         | Move to the first HDU containing a specific type and keyword value |
| [movRelHDU](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.movrelhdu.html)         | Move relative amount of HDU from current HDU                       |
| [writeChecksum](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writechecksum.html) | Calculate and write the checksum of the current HDU                |
| [deleteHDU](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deletehdu.html)         | Delete the current HDU in the FITS file                            |

### FITS files -image compression

| -                                                                                                      | -                                                     |
| ------------------------------------------------------------------------------------------------------ | :---------------------------------------------------- |
| [imgCompress](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.imgcompress.html)               | Compress HDU from one file to another                 |
| [isCompressedImg](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.iscompressedimg.html)       | Determine whether the current image is compressed     |
| [setCompressionType](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.setcompressiontype.html) | Set image compression type                            |
| [setHCompScale](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.sethcompscale.html)           | Set the scaling parameters of the HCOMPRESS algorithm |
| [setHCompSmooth](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.sethcompsmooth.html)         | Sets smoothing for images compressed with HCOMPRESS   |
| [setTileDim](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.settiledim.html)                 | Set tile dimensions                                   |

### FITS file -ASCII table and binary table {.row-span-3}

| -                                                                                          | -                                                         |
| ------------------------------------------------------------------------------------------ | :-------------------------------------------------------- |
| [createTbl](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.createtbl.html)       | Create a new ASCII or binary table extension              |
| [insertCol](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.insertcol.html)       | Insert a column into a table                              |
| [insertRows](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.insertrows.html)     | Insert rows into the table                                |
| [insertATbl](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.insertatbl.html)     | Insert an ASCII table after the current HDU               |
| [insertBTbl](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.insertbtbl.html)     | Insert a binary table behind the current HDU              |
| [deleteCol](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deletecol.html)       | Delete a column from a table                              |
| [deleteRows](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deleterows.html)     | Delete rows from the table                                |
| [getAColParms](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getacolparms.html) | ASCII table information                                   |
| [getBColParms](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getbcolparms.html) | binary table information                                  |
| [getColName](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getcolname.html)     | table column name                                         |
| [getColType](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getcoltype.html)     | Data type, repeat value, width of scaled column           |
| [getEqColType](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.geteqcoltype.html) | column data type, repeated value, width                   |
| [getNumCols](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getnumcols.html)     | The number of columns in the table                        |
| [getNumRows](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getnumrows.html)     | the number of rows in the table                           |
| [readATblHdr](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readatblhdr.html)   | Read the header information from the current ASCII table  |
| [readBTblHdr](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readbtblhdr.html)   | Read the header information from the current binary table |
| [readCol](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readcol.html)           | Reads rows of ASCII or binary table columns               |
| [setTscale](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.settscale.html)       | reset image scaling                                       |
| [writeCol](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writecol.html)         | Write elements to an ASCII or binary table column         |

### FITS files -Utilities

| -                                                                                                  | -                                          |
| -------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| [getConstantValue](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getconstantvalue.html) | specify the constant value                 |
| [getVersion](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getversion.html)             | The revision number of the CFITSIO library |
| [getOpenFiles](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getopenfiles.html)         | list of opened FITS files                  |

### Stripe interleaved file

| -                                                                               | -                                                  |
| ------------------------------------------------------------------------------- | :------------------------------------------------- |
| [multibandread](https://www.mathworks.com/help/matlab/ref/multibandread.html)   | Read a striped interleaved file from a binary file |
| [multibandwrite](https://www.mathworks.com/help/matlab/ref/multibandwrite.html) | Write strip interleaved data to a file             |

### Common Data Format (CDF)

| -                                                                     | -                                                                      |
| --------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| [cdfinfo](https://www.mathworks.com/help/matlab/ref/cdfinfo.html)     | Information on Common Data Format (CDF) files                          |
| [cdfread](https://www.mathworks.com/help/matlab/ref/cdfread.html)     | Read data in Common Data Format (CDF) files                            |
| [cdfepoch](https://www.mathworks.com/help/matlab/ref/cdfepoch.html)   | Converts a date literal or date sequence value to a date in CDF format |
| [todatenum](https://www.mathworks.com/help/matlab/ref/todatenum.html) | Convert CDF epoch objects to `MATLAB` date serial values               |

#### Bag

| -                                                               | -                                   |
| --------------------------------------------------------------- | :---------------------------------- |
| [cdflib](https://www.mathworks.com/help/matlab/ref/cdflib.html) | Direct interaction with CDF library |

### Read video data

| -                                                                                           | -                                                              |
| ------------------------------------------------------------------------------------------- | :------------------------------------------------------------- |
| [VideoReader](https://www.mathworks.com/help/matlab/ref/videoreader.html)                   | Create an object to read a video file                          |
| [read](https://www.mathworks.com/help/matlab/ref/videoreader.read.html)                     | Read one or more video frames                                  |
| [readFrame](https://www.mathworks.com/help/matlab/ref/videoreader.readframe.html)           | Read the next video frame                                      |
| [hasFrame](https://www.mathworks.com/help/matlab/ref/videoreader.hasframe.html)             | Determine whether there are video frames available for reading |
| [getFileFormats](https://www.mathworks.com/help/matlab/ref/videoreader.getfileformats.html) | File formats supported by `VideoReader`                        |
| [mmfileinfo](https://www.mathworks.com/help/matlab/ref/mmfileinfo.html)                     | Information about multimedia files                             |

### Write video data

| -                                                                                     | -                                                             |
| ------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| [VideoWriter](https://www.mathworks.com/help/matlab/ref/videowriter.html)             | Create an object to write a video file                        |
| [open](https://www.mathworks.com/help/matlab/ref/videowriter.open.html)               | Open a file to write video data                               |
| [writeVideo](https://www.mathworks.com/help/matlab/ref/videowriter.writevideo.html)   | Write video data to a file                                    |
| [close](https://www.mathworks.com/help/matlab/ref/videowriter.close.html)             | close the file after writing video data                       |
| [getProfiles](https://www.mathworks.com/help/matlab/ref/videowriter.getprofiles.html) | Description files and file formats supported by `VideoWriter` |

### Read or write audio

| -                                                                       | -                                            |
| ----------------------------------------------------------------------- | :------------------------------------------- |
| [audioread](https://www.mathworks.com/help/matlab/ref/audioread.html)   | Read audio files                             |
| [audiowrite](https://www.mathworks.com/help/matlab/ref/audiowrite.html) | Write audio files                            |
| [lin2mu](https://www.mathworks.com/help/matlab/ref/lin2mu.html)         | Convert linear audio signal to mu-law        |
| [mu2lin](https://www.mathworks.com/help/matlab/ref/mu2lin.html)         | Convert mu-law audio signal to linear format |
| [audioinfo](https://www.mathworks.com/help/matlab/ref/audioinfo.html)   | Information about audio files                |

### Play audio

| -                                                                                       | -                                                                           |
| --------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| [audioplayer](https://www.mathworks.com/help/matlab/ref/audioplayer.html)               | Object for playing audio                                                    |
| [isplaying](https://www.mathworks.com/help/matlab/ref/audioplayer.isplaying.html)       | Determine whether playback is in progress                                   |
| [pause](https://www.mathworks.com/help/matlab/ref/audioplayer.pause.html)               | Pause playback or recording                                                 |
| [play](https://www.mathworks.com/help/matlab/ref/audioplayer.play.html)                 | Play audio from `audioplayer` object                                        |
| [playblocking](https://www.mathworks.com/help/matlab/ref/audioplayer.playblocking.html) | Play audio in `audioplayer` object, keep control until playback is complete |
| [resume](https://www.mathworks.com/help/matlab/ref/audioplayer.resume.html)             | Resume playback or recording from the paused state                          |
| [stop](https://www.mathworks.com/help/matlab/ref/audioplayer.stop.html)                 | Stop playing or recording                                                   |

### Record audio

| -                                                                                             | -                                                                                     |
| --------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| [audiorecorder](https://www.mathworks.com/help/matlab/ref/audiorecorder.html)                 | object for recording audio                                                            |
| [getaudiodata](https://www.mathworks.com/help/matlab/ref/audiorecorder.getaudiodata.html)     | Store the recorded audio signal in a numeric array                                    |
| [getplayer](https://www.mathworks.com/help/matlab/ref/audiorecorder.getplayer.html)           | Create an associated `audioplayer` object                                             |
| [isrecording](https://www.mathworks.com/help/matlab/ref/audiorecorder.isrecording.html)       | Determine if recording is in progress                                                 |
| [record](https://www.mathworks.com/help/matlab/ref/audiorecorder.record.html)                 | Record audio into `audiorecorder` object                                              |
| [recordblocking](https://www.mathworks.com/help/matlab/ref/audiorecorder.recordblocking.html) | Record audio into an `audiorecorder` object, keep control until recording is complete |

### Play sound

| -                                                                             | -                                           |
| ----------------------------------------------------------------------------- | :------------------------------------------ |
| [audiodevinfo](https://www.mathworks.com/help/matlab/ref/audiodevinfo.html)   | Information about audio devices             |
| [audiodevreset](https://www.mathworks.com/help/matlab/ref/audiodevreset.html) | Refresh the list of available audio devices |
| [sound](https://www.mathworks.com/help/matlab/ref/sound.html)                 | Convert signal data matrix to sound         |
| [soundsc](https://www.mathworks.com/help/matlab/ref/soundsc.html)             | Scale data and play it as sound             |
| [beep](https://www.mathworks.com/help/matlab/ref/beep.html)                   | generate operating system beep              |

### Reading and writing XML documents

| -                                                                                                                                         | -                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------- |
| [matlab.io.xml.dom.DOMWriter](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.domwriter-class.html)                           | Write serialized XML documents Injector                     |
| [matlab.io.xml.dom.EntityResolver](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.entityresolver-class.html)                 | Abstract base class of entity resolver                      |
| [matlab.io.xml.dom.FileWriter](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.filewriter-class.html)                         | Writer for creating text files                              |
| [matlab.io.xml.dom.Locator](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.locator-class.html)                               | The location of the element in the XML file                 |
| [matlab.io.xml.dom.Parser](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parser-class.html)                                 | XML markup parser                                           |
| [matlab.io.xml.dom.ParserConfiguration](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parserconfiguration-class.html)       | XML parser options                                          |
| [matlab.io.xml.dom.ParseError](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parseerror-class.html)                         | Specified XML tag parsing error                             |
| [matlab.io.xml.dom.ParseErrorHandler](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parseerrorhandler-class.html)           | Abstract base class for parse error handlers                |
| [matlab.io.xml.dom.ParseErrorLocator](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parseerrorlocator-class.html)           | Specifies location of parse error                           |
| [matlab.io.xml.dom.ParseErrorSeverity](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parseerrorseverity-class.html)         | Indicates the severity of XML tag parsing errors enum class |
| [matlab.io.xml.dom.ResourceIdentifier](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.resourceidentifier-class.html)         | XML resource identifier                                     |
| [matlab.io.xml.dom.ResourceIdentifierType](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.resourceidentifiertype-class.html) | XML resource identifier type                                |
| [matlab.io.xml.dom.WriterConfiguration](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.writerconfiguration-class.html)       | XML DOM Writer Options                                      |

{.style-list-arrow}

### W3C DOM

| -                                                                                                                                       | -                                    |
| --------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| [matlab.io.xml.dom.Attr](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.attr-class.html)                                   | Attributes of XML elements           |
| [matlab.io.xml.dom.CDATASection](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.cdatasection-class.html)                   | CDATA section                        |
| [matlab.io.xml.dom.Comment](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.comment-class.html)                             | Comments in XML documents            |
| [matlab.io.xml.dom.Document](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.document-class.html)                           | XML document                         |
| [matlab.io.xml.dom.DocumentFragment](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.documentfragment-class.html)           | document node group                  |
| [matlab.io.xml.dom.DocumentType](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.documenttype-class.html)                   | document type                        |
| [matlab.io.xml.dom.Element](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.element-class.html)                             | element of XML document              |
| [matlab.io.xml.dom.Entity](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.entity-class.html)                               | Entity defined by document type      |
| [matlab.io.xml.dom.NamedNodeMap](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.namednodemap-class.html)                   | A set of document nodes with names   |
| [matlab.io.xml.dom.NodeList](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.nodelist-class.html)                           | document node list                   |
| [matlab.io.xml.dom.Notation](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.notation-class.html)                           | Notation in document type definition |
| [matlab.io.xml.dom.ProcessingInstruction](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.processinginstruction-class.html) | XML processing instruction           |
| [matlab.io.xml.dom.Text](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.text-class.html)                                   | Text in an XML document              |
| [matlab.io.xml.dom.TypeInfo](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.typeinfo-class.html)                           | schema type information              |

{.style-list-arrow}

### XML Transformation

| -                                                                                                                                                         | -                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- |
| [matlab.io.xml.transform.CompiledStylesheet](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.compiledstylesheet-class.html)             | Compiled stylesheet                           |
| [matlab.io.xml.transform.ResultDocument](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.resultdocument-class.html)                     | Store the transformation result as a document |
| [matlab.io.xml.transform.ResultString](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.resultstring-class.html)                         | Store the transformation result as a string   |
| [matlab.io.xml.transform.ResultFile](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.resultfile-class.html)                             | Store the transformation result as a file     |
| [matlab.io.xml.transform.SourceDocument](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.sourcedocument-class.html)                     | XML source document for transformation        |
| [matlab.io.xml.transform.SourceFile](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.sourcefile-class.html)                             | XML source file for transformation            |
| [matlab.io.xml.transform.SourceString](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.sourcestring-class.html)                         | XML source string for transformation string   |
| [matlab.io.xml.transform.StylesheetSourceDocument](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.stylesheetsourcedocument-class.html) | Stylesheet source for transformation document |
| [matlab.io.xml.transform.StylesheetSourceFile](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.stylesheetsourcefile-class.html)         | Stylesheet source for transformation document |
| [matlab.io.xml.transform.StylesheetSourceString](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.stylesheetsourcestring-class.html)     | XSL source string for transformation string   |
| [matlab.io.xml.transform.Tracer](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.tracer-class.html)                                     | Trace execution of stylesheet                 |

{.style-list-arrow}

### XPath query

| -                                                                                                                                     | -                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| [matlab.io.xml.xpath.CompiledExpression](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.xpath.compiledexpression-class.html) | Compiled XPath expression                             |
| [matlab.io.xml.xpath.EvalResultType](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.xpath.evalresulttype-class.html)         | The result type of XPath expression calculation       |
| [matlab.io.xml.xpath.Evaluator](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.xpath.evaluator-class.html)                   | XPath expression evaluator                            |
| [matlab.io.xml.xpath.PrefixResolver](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.xpath.prefixresolver-class.html)         | For namespace prefix resolver Abstract base class for |

{.style-list-arrow}

### JSON format

| -                                                                       | -                                                        |
| ----------------------------------------------------------------------- | :------------------------------------------------------- |
| [jsondecode](https://www.mathworks.com/help/matlab/ref/jsondecode.html) | Decode text in JSON format                               |
| [jsonencode](https://www.mathworks.com/help/matlab/ref/jsonencode.html) | Create JSON-formatted text from structured `MATLAB` data |

### Workspace variables and MAT-file {.row-span-2}

| -                                                                                           | -                                                                                 |
| ------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| [load](https://www.mathworks.com/help/matlab/ref/load.html)                                 | Load file variables into the workspace                                            |
| [save](https://www.mathworks.com/help/matlab/ref/save.html)                                 | Save workspace variables to a file                                                |
| [matfile](https://www.mathworks.com/help/matlab/ref/matlab.io.matfile.html)                 | Access and change variables in a MAT-file without loading the file into memory    |
| [disp](https://www.mathworks.com/help/matlab/ref/disp.html)                                 | Display the value of the variable                                                 |
| [formattedDisplayText](https://www.mathworks.com/help/matlab/ref/formatteddisplaytext.html) | Capture display output as a string                                                |
| [who](https://www.mathworks.com/help/matlab/ref/who.html)                                   | List variables in the workspace                                                   |
| [whos](https://www.mathworks.com/help/matlab/ref/whos.html)                                 | List variables in the workspace with their size and type                          |
| [clear](https://www.mathworks.com/help/matlab/ref/clear.html)                               | Delete items from the workspace and release system memory                         |
| [clearvars](https://www.mathworks.com/help/matlab/ref/clearvars.html)                       | Clear variables in memory                                                         |
| [openvar](https://www.mathworks.com/help/matlab/ref/openvar.html)                           | Open a workspace variable in the variable editor or other graphical editing tools |
| [Workspace Browser](https://www.mathworks.com/help/matlab/ref/workspace.html)               | Open the Workspace Browser to manage the workspace                                |

### Low-level file I/O {.row-span-2}

| -                                                                   | -                                                                    |
| ------------------------------------------------------------------- | :------------------------------------------------------------------- |
| [fclose](https://www.mathworks.com/help/matlab/ref/fclose.html)     | close one or all open files                                          |
| [feof](https://www.mathworks.com/help/matlab/ref/feof.html)         | Detect the end of the file                                           |
| [ferror](https://www.mathworks.com/help/matlab/ref/ferror.html)     | File I/O error message                                               |
| [fgetl](https://www.mathworks.com/help/matlab/ref/fgetl.html)       | Read lines in a file and remove line breaks                          |
| [fgets](https://www.mathworks.com/help/matlab/ref/fgets.html)       | Read lines in a file and keep newlines                               |
| [fileread](https://www.mathworks.com/help/matlab/ref/fileread.html) | Read file content in text format                                     |
| [fopen](https://www.mathworks.com/help/matlab/ref/fopen.html)       | Open a file or get information about opening a file                  |
| [fprintf](https://www.mathworks.com/help/matlab/ref/fprintf.html)   | Write data to a text file                                            |
| [fread](https://www.mathworks.com/help/matlab/ref/fread.html)       | Read data in binary files                                            |
| [frewind](https://www.mathworks.com/help/matlab/ref/frewind.html)   | Move the file position indicator to the beginning of the opened file |
| [fscanf](https://www.mathworks.com/help/matlab/ref/fscanf.html)     | Read the data in the text file                                       |
| [fseek](https://www.mathworks.com/help/matlab/ref/fseek.html)       | Move to the specified position in the file                           |
| [ftell](https://www.mathworks.com/help/matlab/ref/ftell.html)       | current location                                                     |
| [fwrite](https://www.mathworks.com/help/matlab/ref/fwrite.html)     | Write data to a binary file                                          |

### Serial and USB Communication -Connection and Configuration

| -                                                                                                    | -                                                                                       |
| ---------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| [serialportlist](https://www.mathworks.com/help/matlab/ref/serialportlist.html)                      | List of serial ports connected to your system                                           |
| [serialport](https://www.mathworks.com/help/matlab/ref/serialport.html)                              | Connect to a serial port                                                                |
| [configureTerminator](https://www.mathworks.com/help/matlab/ref/serialport.configureterminator.html) | Set the terminator for ASCII string communication with the serial port                  |
| [configureCallback](https://www.mathworks.com/help/matlab/ref/serialport.configurecallback.html)     | Set callback function and trigger conditions for communication with serial port devices |

### Serial and USB communication -read and write

| -                                                                                | -                                            |
| -------------------------------------------------------------------------------- | :------------------------------------------- |
| [read](https://www.mathworks.com/help/matlab/ref/serialport.read.html)           | Read data from the serial port               |
| [readline](https://www.mathworks.com/help/matlab/ref/serialport.readline.html)   | Read ASCII string data line from serial port |
| [write](https://www.mathworks.com/help/matlab/ref/serialport.write.html)         | write data to serial port                    |
| [writeline](https://www.mathworks.com/help/matlab/ref/serialport.writeline.html) | Write ASCII data line to serial port         |

### Serial and USB communication -control pins and memory

| -                                                                                      | -                                   |
| -------------------------------------------------------------------------------------- | :---------------------------------- |
| [flush](https://www.mathworks.com/help/matlab/ref/serialport.flush.html)               | Clear the serial port device buffer |
| [getpinstatus](https://www.mathworks.com/help/matlab/ref/serialport.getpinstatus.html) | Get the serial port status          |
| [setRTS](https://www.mathworks.com/help/matlab/ref/serialport.setrts.html)             | Set the serial port RTS pin         |
| [setDTR](https://www.mathworks.com/help/matlab/ref/serialport.setdtr.html)             | Set the serial DTR pin              |

### TCP/IP communication -connection and configuration

| -                                                                                                   | -                                                                                         |
| --------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| [tcpclient](https://www.mathworks.com/help/matlab/ref/tcpclient.html)                               | Create a TCP/IP client connection to a TCP/IP server                                      |
| [echotcpip](https://www.mathworks.com/help/matlab/ref/echotcpip.html)                               | Start or stop the TCP/IP echo server                                                      |
| [configureTerminator](https://www.mathworks.com/help/matlab/ref/tcpclient.configureterminator.html) | Set terminator for ASCII string communication with remote host via TCP/IP                 |
| [configureCallback](https://www.mathworks.com/help/matlab/ref/tcpclient.configurecallback.html)     | Set callback function and trigger condition for communication with remote host via TCP/IP |

{.style-list}

### TCP/IP communication -read and write

| -                                                                               | -                                                            |
| ------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| [read](https://www.mathworks.com/help/matlab/ref/tcpclient.read.html)           | Read data on a remote host via TCP/IP                        |
| [readline](https://www.mathworks.com/help/matlab/ref/tcpclient.readline.html)   | Read ASCII string data line from remote host via TCP/IP      |
| [write](https://www.mathworks.com/help/matlab/ref/tcpclient.write.html)         | Write data to a remote host via TCP/IP                       |
| [writeline](https://www.mathworks.com/help/matlab/ref/tcpclient.writeline.html) | Write ASCII data line to remote host via TCP/IP              |
| [flush](https://www.mathworks.com/help/matlab/ref/tcpclient.flush.html)         | Flush buffers for communication with remote hosts via TCP/IP |

{.style-list}

### Bluetooth communication -connection and configuration

| -                                                                                                   | -                                                                                     |
| --------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| [bluetoothlist](https://www.mathworks.com/help/matlab/ref/bluetoothlist.html)                       | Scan for nearby `Bluetooth` classic devices                                           |
| [bluetooth](https://www.mathworks.com/help/matlab/ref/bluetooth.html)                               | Connect to `Bluetooth` classic device                                                 |
| [configureTerminator](https://www.mathworks.com/help/matlab/ref/bluetooth.configureterminator.html) | Set terminator for ASCII string communication with `Bluetooth` device                 |
| [configureCallback](https://www.mathworks.com/help/matlab/ref/bluetooth.configurecallback.html)     | Set callback function and trigger condition for communication with `Bluetooth` device |

{.style-list}

### Bluetooth communication -read and write {.row-span-2}

| -                                                                               | -                                                   |
| ------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [read](https://www.mathworks.com/help/matlab/ref/bluetooth.read.html)           | Read data from a `Bluetooth` device                 |
| [readline](https://www.mathworks.com/help/matlab/ref/bluetooth.readline.html)   | Read ASCII string data line from `Bluetooth` device |
| [write](https://www.mathworks.com/help/matlab/ref/bluetooth.write.html)         | write data to `Bluetooth` device                    |
| [writeline](https://www.mathworks.com/help/matlab/ref/bluetooth.writeline.html) | Write ASCII data line to `Bluetooth` device         |
| [flush](https://www.mathworks.com/help/matlab/ref/bluetooth.flush.html)         | Clear `Bluetooth` device buffer                     |

{.style-list}

### Bluetooth Low Energy Communication {.row-span-2}

| -                                                                                                            | -                                                                                          |
| ------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------- |
| [blelist](https://www.mathworks.com/help/matlab/ref/blelist.html)                                            | Scan for nearby low energy `Bluetooth` peripherals                                         |
| [ble](https://www.mathworks.com/help/matlab/ref/ble.html)                                                    | Connect to low energy `Bluetooth` peripherals                                              |
| [characteristic](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.characteristic.html)          | Access to characteristics of `Bluetooth` low energy peripherals                            |
| [descriptor](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.descriptor.html)                  | Access descriptors on `Bluetooth` low energy peripherals                                   |
| [read](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.characteristic.read.html)               | Read characteristic or descriptor data on a `Bluetooth` low energy peripheral device       |
| [write](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.characteristic.write.html)             | Write data to a characteristic or descriptor of a `Bluetooth` low energy peripheral device |
| [subscribe](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.characteristic.subscribe.html)     | Subscribe to characteristic notifications or instructions                                  |
| [unsubscribe](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.characteristic.unsubscribe.html) | Unsubscribe characteristic notifications and instructions                                  |

{.style-list}

### Web Services

| -                                                                       | -                                           |
| ----------------------------------------------------------------------- | :------------------------------------------ |
| [webread](https://www.mathworks.com/help/matlab/ref/webread.html)       | Read content from RESTful web services      |
| [webwrite](https://www.mathworks.com/help/matlab/ref/webwrite.html)     | Write data to RESTful web service           |
| [websave](https://www.mathworks.com/help/matlab/ref/websave.html)       | Save content in RESTful web service to file |
| [weboptions](https://www.mathworks.com/help/matlab/ref/weboptions.html) | Specify parameters for RESTful web services |
| [web](https://www.mathworks.com/help/matlab/ref/web.html)               | Open a webpage or file in a browser         |
| [sendmail](https://www.mathworks.com/help/matlab/ref/sendmail.html)     | Send email to address list                  |

### FTP file operations {.row-span-2}

| -                                                                   | -                                                          |
| ------------------------------------------------------------------- | :--------------------------------------------------------- |
| [ftp](https://www.mathworks.com/help/matlab/ref/ftp.html)           | Connect to an FTP server to access its files               |
| [sftp](https://www.mathworks.com/help/matlab/ref/sftp.html)         | Connection to SFTP server to access its files              |
| [ascii](https://www.mathworks.com/help/matlab/ref/ftp.ascii.html)   | Set FTP transfer mode to ASCII                             |
| [binary](https://www.mathworks.com/help/matlab/ref/ftp.binary.html) | Set FTP transfer mode to binary                            |
| [cd](https://www.mathworks.com/help/matlab/ref/ftp.cd.html)         | Change or view the current folder on an SFTP or FTP server |
| [close](https://www.mathworks.com/help/matlab/ref/ftp.close.html)   | Close the connection to the SFTP or FTP server             |
| [delete](https://www.mathworks.com/help/matlab/ref/ftp.delete.html) | Delete files on SFTP or FTP server                         |
| [dir](https://www.mathworks.com/help/matlab/ref/ftp.dir.html)       | List folder contents on SFTP or FTP server                 |
| [mget](https://www.mathworks.com/help/matlab/ref/ftp.mget.html)     | Download files from SFTP or FTP server                     |
| [mkdir](https://www.mathworks.com/help/matlab/ref/ftp.mkdir.html)   | Create a new folder on an SFTP or FTP server               |
| [mput](https://www.mathworks.com/help/matlab/ref/ftp.mput.html)     | Upload files or folders to SFTP or FTP server              |
| [rename](https://www.mathworks.com/help/matlab/ref/ftp.rename.html) | Rename a file on an SFTP or FTP server                     |
| [rmdir](https://www.mathworks.com/help/matlab/ref/ftp.rmdir.html)   | Delete a folder on an SFTP or FTP server                   |

### Internet of Things (IoT) Data

| -                                                                                 | -                                        |
| --------------------------------------------------------------------------------- | :--------------------------------------- |
| [thingSpeakRead](https://www.mathworks.com/help/matlab/ref/thingspeakread.html)   | Read data stored in `ThingSpeak` channel |
| [thingSpeakWrite](https://www.mathworks.com/help/matlab/ref/thingspeakwrite.html) | write data to `ThingSpeak` channel       |
