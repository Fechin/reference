---
title: Bash
date: 2020-11-25 18:28:43
background: bg-[#3e4548]
tags:
  - shell
  - sh
  - echo
  - script
  - linux
categories:
  - Programming
  - Operating System
intro: This is a quick reference cheat sheet to getting started with linux bash shell scripting.
plugins:
  - copyCode
---

## Getting Started

### hello.sh

```bash
#!/bin/bash

VAR="world"
echo "Hello $VAR!" # => Hello world!
```

Execute the script

```shell script
$ bash hello.sh
```

### Variables

```bash
NAME="John"

echo ${NAME}    # => John (Variables)
echo $NAME      # => John (Variables)
echo "$NAME"    # => John (Variables)
echo '$NAME'    # => $NAME (Exact string)
echo "${NAME}!" # => John! (Variables)

NAME = "John"   # => Error (about space)
```

### Comments

```bash
# This is an inline Bash comment.
```

```bash
: '
This is a
very neat comment
in bash
'
```

Multi-line comments use `:'` to open and `'` to close

### Arguments {.row-span-2}

| Expression  | Description                           |
| ----------- | ------------------------------------- |
| `$1` … `$9` | Parameter 1 ... 9                     |
| `$0`        | Name of the script itself             |
| `$1`        | First argument                        |
| `${10}`     | Positional parameter 10               |
| `$#`        | Number of arguments                   |
| `$$`        | Process id of the shell               |
| `$*`        | All arguments                         |
| `$@`        | All arguments, starting from first    |
| `$-`        | Current options                       |
| `$_`        | Last argument of the previous command |

See: [Special parameters](http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables)

### Functions

```bash
get_name() {
    echo "John"
}

echo "You are $(get_name)"
```

See: [Functions](#bash-functions)

### Conditionals {#conditionals-example}

```bash
if [[ -z "$string" ]]; then
    echo "String is empty"
elif [[ -n "$string" ]]; then
    echo "String is not empty"
fi
```

See: [Conditionals](#bash-conditionals)

### Brace expansion

```bash
echo {A,B}.js
```

---

| Expression | Description         |
| ---------- | ------------------- |
| `{A,B}`    | Same as `A B`       |
| `{A,B}.js` | Same as `A.js B.js` |
| `{1..5}`   | Same as `1 2 3 4 5` |

See: [Brace expansion](http://wiki.bash-hackers.org/syntax/expansion/brace)

### Shell execution

```bash
# => I'm in /path/of/current
echo "I'm in $(PWD)"

# Same as:
echo "I'm in `pwd`"
```

See: [Command substitution](http://wiki.bash-hackers.org/syntax/expansion/cmdsubst)

## Bash Parameter expansions

### Syntax {.row-span-2}

| Code              | Description         |
| ----------------- | ------------------- |
| `${FOO%suffix}`   | Remove suffix       |
| `${FOO#prefix}`   | Remove prefix       |
| `${FOO%%suffix}`  | Remove long suffix  |
| `${FOO##prefix}`  | Remove long prefix  |
| `${FOO/from/to}`  | Replace first match |
| `${FOO//from/to}` | Replace all         |
| `${FOO/%from/to}` | Replace suffix      |
| `${FOO/#from/to}` | Replace prefix      |

#### Substrings

| Expression      | Description                    |
| --------------- | ------------------------------ |
| `${FOO:0:3}`    | Substring _(position, length)_ |
| `${FOO:(-3):3}` | Substring from the right       |

#### Length

| Expression | Description      |
| ---------- | ---------------- |
| `${#FOO}`  | Length of `$FOO` |

#### Default values

| Expression        | Description                              |
| ----------------- | ---------------------------------------- |
| `${FOO:-val}`     | `$FOO`, or `val` if unset                |
| `${FOO:=val}`     | Set `$FOO` to `val` if unset             |
| `${FOO:+val}`     | `val` if `$FOO` is set                   |
| `${FOO:?message}` | Show message and exit if `$FOO` is unset |

### Substitution

```bash
echo ${food:-Cake}  #=> $food or "Cake"
```

```bash
STR="/path/to/foo.cpp"
echo ${STR%.cpp}    # /path/to/foo
echo ${STR%.cpp}.o  # /path/to/foo.o
echo ${STR%/*}      # /path/to

echo ${STR##*.}     # cpp (extension)
echo ${STR##*/}     # foo.cpp (basepath)

echo ${STR#*/}      # path/to/foo.cpp
echo ${STR##*/}     # foo.cpp

echo ${STR/foo/bar} # /path/to/bar.cpp
```

### Slicing

```bash
name="John"
echo ${name}           # => John
echo ${name:0:2}       # => Jo
echo ${name::2}        # => Jo
echo ${name::-1}       # => Joh
echo ${name:(-1)}      # => n
echo ${name:(-2)}      # => hn
echo ${name:(-2):2}    # => hn

length=2
echo ${name:0:length}  # => Jo
```

See: [Parameter expansion](http://wiki.bash-hackers.org/syntax/pe)

### basepath & dirpath

```bash
SRC="/path/to/foo.cpp"
```

```bash
BASEPATH=${SRC##*/}
echo $BASEPATH  # => "foo.cpp"


DIRPATH=${SRC%$BASEPATH}
echo $DIRPATH   # => "/path/to/"
```

### Transform

```bash
STR="HELLO WORLD!"
echo ${STR,}   # => hELLO WORLD!
echo ${STR,,}  # => hello world!

STR="hello world!"
echo ${STR^}   # => Hello world!
echo ${STR^^}  # => HELLO WORLD!

ARR=(hello World)
echo "${ARR[@],}" # => hello world
echo "${ARR[@]^}" # => Hello World
```

## Bash Arrays

### Defining arrays

```bash
Fruits=('Apple' 'Banana' 'Orange')

Fruits[0]="Apple"
Fruits[1]="Banana"
Fruits[2]="Orange"

ARRAY1=(foo{1..2}) # => foo1 foo2
ARRAY2=({A..D})    # => A B C D

# Merge => foo1 foo2 A B C D
ARRAY3=(${ARRAY1[@]} ${ARRAY2[@]})

# declare construct
declare -a Numbers=(1 2 3)
Numbers+=(4 5) # Append => 1 2 3 4 5
```

### Indexing

| -                  | -             |
| ------------------ | ------------- |
| `${Fruits[0]}`     | First element |
| `${Fruits[-1]}`    | Last element  |
| `${Fruits[*]}`     | All elements  |
| `${Fruits[@]}`     | All elements  |
| `${#Fruits[@]}`    | Number of all |
| `${#Fruits}`       | Length of 1st |
| `${#Fruits[3]}`    | Length of nth |
| `${Fruits[@]:3:2}` | Range         |
| `${!Fruits[@]}`    | Keys of all   |

### Iteration

```bash
Fruits=('Apple' 'Banana' 'Orange')

for e in "${Fruits[@]}"; do
    echo $e
done
```

#### With index

```bash
for i in "${!Fruits[@]}"; do
  printf "%s\t%s\n" "$i" "${Fruits[$i]}"
done

```

### Operations {.col-span-2}

```bash
Fruits=("${Fruits[@]}" "Watermelon")     # Push
Fruits+=('Watermelon')                   # Also Push
Fruits=( ${Fruits[@]/Ap*/} )             # Remove by regex match
unset Fruits[2]                          # Remove one item
Fruits=("${Fruits[@]}")                  # Duplicate
Fruits=("${Fruits[@]}" "${Veggies[@]}")  # Concatenate
lines=(`cat "logfile"`)                  # Read from file
```

### Arrays as arguments

```bash
function extract()
{
    local -n myarray=$1
    local idx=$2
    echo "${myarray[$idx]}"
}
Fruits=('Apple' 'Banana' 'Orange')
extract Fruits 2     # => Orangle
```

## Bash Dictionaries

### Defining

```bash
declare -A sounds
```

```bash
sounds[dog]="bark"
sounds[cow]="moo"
sounds[bird]="tweet"
sounds[wolf]="howl"
```

### Working with dictionaries

```bash
echo ${sounds[dog]} # Dog's sound
echo ${sounds[@]}   # All values
echo ${!sounds[@]}  # All keys
echo ${#sounds[@]}  # Number of elements
unset sounds[dog]   # Delete dog
```

### Iteration

```bash
for val in "${sounds[@]}"; do
    echo $val
done
```

---

```bash
for key in "${!sounds[@]}"; do
    echo $key
done
```

## Bash Conditionals

### Integer conditions

| Condition           | Description                                 |
| ------------------- | ------------------------------------------- |
| `[[ NUM -eq NUM ]]` | <yel>Eq</yel>ual                            |
| `[[ NUM -ne NUM ]]` | <yel>N</yel>ot <yel>e</yel>qual             |
| `[[ NUM -lt NUM ]]` | <yel>L</yel>ess <yel>t</yel>han             |
| `[[ NUM -le NUM ]]` | <yel>L</yel>ess than or <yel>e</yel>qual    |
| `[[ NUM -gt NUM ]]` | <yel>G</yel>reater <yel>t</yel>han          |
| `[[ NUM -ge NUM ]]` | <yel>G</yel>reater than or <yel>e</yel>qual |
| `(( NUM < NUM ))`   | Less than                                   |
| `(( NUM <= NUM ))`  | Less than or equal                          |
| `(( NUM > NUM ))`   | Greater than                                |
| `(( NUM >= NUM ))`  | Greater than or equal                       |

### String conditions

| Condition          | Description                 |
| ------------------ | --------------------------- |
| `[[ -z STR ]]`     | Empty string                |
| `[[ -n STR ]]`     | <yel>N</yel>ot empty string |
| `[[ STR == STR ]]` | Equal                       |
| `[[ STR = STR ]]`  | Equal (Same above)          |
| `[[ STR < STR ]]`  | Less than _(ASCII)_         |
| `[[ STR > STR ]]`  | Greater than _(ASCII)_      |
| `[[ STR != STR ]]` | Not Equal                   |
| `[[ STR =~ STR ]]` | Regexp                      |

### Example {.row-span-3}

#### String

```bash
if [[ -z "$string" ]]; then
    echo "String is empty"
elif [[ -n "$string" ]]; then
    echo "String is not empty"
else
    echo "This never happens"
fi
```

#### Combinations

```bash
if [[ X && Y ]]; then
    ...
fi
```

#### Equal

```bash
if [[ "$A" == "$B" ]]; then
    ...
fi
```

#### Regex

```bash
if [[ '1. abc' =~ ([a-z]+) ]]; then
    echo ${BASH_REMATCH[1]}
fi
```

#### Smaller

```bash
if (( $a < $b )); then
   echo "$a is smaller than $b"
fi
```

#### Exists

```bash
if [[ -e "file.txt" ]]; then
    echo "file exists"
fi
```

### File conditions {.row-span-2}

| Condition         | Description                            |
| ----------------- | -------------------------------------- |
| `[[ -e FILE ]]`   | <yel>E</yel>xists                      |
| `[[ -d FILE ]]`   | <yel>D</yel>irectory                   |
| `[[ -f FILE ]]`   | <yel>F</yel>ile                        |
| `[[ -h FILE ]]`   | Symlink                                |
| `[[ -s FILE ]]`   | Size is > 0 bytes                      |
| `[[ -r FILE ]]`   | <yel>R</yel>eadable                    |
| `[[ -w FILE ]]`   | <yel>W</yel>ritable                    |
| `[[ -x FILE ]]`   | Executable                             |
| `[[ f1 -nt f2 ]]` | f1 <yel>n</yel>ewer <yel>t</yel>han f2 |
| `[[ f1 -ot f2 ]]` | f2 <yel>o</yel>lder <yel>t</yel>han f1 |
| `[[ f1 -ef f2 ]]` | Same files                             |

### More conditions

| Condition            | Description          |
| -------------------- | -------------------- | ----- | --- |
| `[[ -o noclobber ]]` | If OPTION is enabled |
| `[[ ! EXPR ]]`       | Not                  |
| `[[ X && Y ]]`       | And                  |
| `[[ X                |                      | Y ]]` | Or  |

### logical and, or

```bash
if [ "$1" = 'y' -a $2 -gt 0 ]; then
    echo "yes"
fi

if [ "$1" = 'n' -o $2 -lt 0 ]; then
    echo "no"
fi
```

## Bash Loops

### Basic for loop

```bash
for i in /etc/rc.*; do
    echo $i
done
```

### C-like for loop

```bash
for ((i = 0 ; i < 100 ; i++)); do
    echo $i
done
```

### Ranges {.row-span-2}

```bash
for i in {1..5}; do
    echo "Welcome $i"
done
```

#### With step size

```bash
for i in {5..50..5}; do
    echo "Welcome $i"
done
```

### Auto increment

```bash
i=1
while [[ $i -lt 4 ]]; do
    echo "Number: $i"
    ((i++))
done
```

### Auto decrement

```bash
i=3
while [[ $i -gt 0 ]]; do
    echo "Number: $i"
    ((i--))
done
```

### Continue

```bash {data=3,5}
for number in $(seq 1 3); do
    if [[ $number == 2 ]]; then
        continue;
    fi
    echo "$number"
done
```

### Break

```bash
for number in $(seq 1 3); do
    if [[ $number == 2 ]]; then
        # Skip entire rest of loop.
        break;
    fi
    # This will only print 1
    echo "$number"
done
```

### Until

```bash
count=0
until [ $count -gt 10 ]; do
    echo "$count"
    ((count++))
done
```

### Forever

```bash
while true; do
    # here is some code.
done
```

### Forever (shorthand)

```bash
while :; do
    # here is some code.
done
```

### Reading lines

```bash
cat file.txt | while read line; do
    echo $line
done
```

## Bash Functions

### Defining functions

```bash
myfunc() {
    echo "hello $1"
}
```

```bash
# Same as above (alternate syntax)
function myfunc() {
    echo "hello $1"
}
```

```bash
myfunc "John"
```

### Returning values

```bash
myfunc() {
    local myresult='some value'
    echo $myresult
}
```

```bash
result="$(myfunc)"
```

### Raising errors

```bash
myfunc() {
    return 1
}
```

```bash
if myfunc; then
    echo "success"
else
    echo "failure"
fi
```

## Bash Options {.cols-2}

### Options

```bash
# Avoid overlay files
# (echo "hi" > foo)
set -o noclobber

# Used to exit upon error
# avoiding cascading errors
set -o errexit

# Unveils hidden failures
set -o pipefail

# Exposes unset variables
set -o nounset
```

### Glob options

```bash
# Non-matching globs are removed
# ('*.foo' => '')
shopt -s nullglob

# Non-matching globs throw errors
shopt -s failglob

# Case insensitive globs
shopt -s nocaseglob

# Wildcards match dotfiles
# ("*.sh" => ".foo.sh")
shopt -s dotglob

# Allow ** for recursive matches
# ('lib/**/*.rb' => 'lib/a/b/c.rb')
shopt -s globstar
```

## Bash History {.cols-2}

### Commands

| Command               | Description                               |
| --------------------- | ----------------------------------------- |
| `history`             | Show history                              |
| `sudo !!`             | Run the previous command with sudo        |
| `shopt -s histverify` | Don't execute expanded result immediately |

### Expansions

| Expression   | Description                                          |
| ------------ | ---------------------------------------------------- |
| `!$`         | Expand last parameter of most recent command         |
| `!*`         | Expand all parameters of most recent command         |
| `!-n`        | Expand `n`th most recent command                     |
| `!n`         | Expand `n`th command in history                      |
| `!<command>` | Expand most recent invocation of command `<command>` |

### Operations

| Code                 | Description                                                           |
| -------------------- | --------------------------------------------------------------------- |
| `!!`                 | Execute last command again                                            |
| `!!:s/<FROM>/<TO>/`  | Replace first occurrence of `<FROM>` to `<TO>` in most recent command |
| `!!:gs/<FROM>/<TO>/` | Replace all occurrences of `<FROM>` to `<TO>` in most recent command  |
| `!$:t`               | Expand only basename from last parameter of most recent command       |
| `!$:h`               | Expand only directory from last parameter of most recent command      |

`!!` and `!$` can be replaced with any valid expansion.

### Slices

| Code     | Description                                                                              |
| -------- | ---------------------------------------------------------------------------------------- |
| `!!:n`   | Expand only `n`th token from most recent command (command is `0`; first argument is `1`) |
| `!^`     | Expand first argument from most recent command                                           |
| `!$`     | Expand last token from most recent command                                               |
| `!!:n-m` | Expand range of tokens from most recent command                                          |
| `!!:n-$` | Expand `n`th token to last from most recent command                                      |

`!!` can be replaced with any valid expansion i.e. `!cat`, `!-2`, `!42`, etc.

## Miscellaneous

### Numeric calculations

```bash
$((a + 200))      # Add 200 to $a
```

```bash
$(($RANDOM%200))  # Random number 0..199
```

### Subshells

```bash
(cd somedir; echo "I'm now in $PWD")
pwd # still in first directory
```

### Inspecting commands

```bash
command -V cd
#=> "cd is a function/alias/whatever"
```

### Redirection {.row-span-2 .col-span-2}

```bash
python hello.py > output.txt   # stdout to (file)
python hello.py >> output.txt  # stdout to (file), append
python hello.py 2> error.log   # stderr to (file)
python hello.py 2>&1           # stderr to stdout
python hello.py 2>/dev/null    # stderr to (null)
python hello.py &>/dev/null    # stdout and stderr to (null)
```

```bash
python hello.py < foo.txt      # feed foo.txt to stdin for python
```

### Source relative

```bash
source "${0%/*}/../share/foo.sh"
```

### Directory of script

```bash
DIR="${0%/*}"
```

### Case/switch

```bash
case "$1" in
    start | up)
    vagrant up
    ;;

    *)
    echo "Usage: $0 {start|stop|ssh}"
    ;;
esac
```

### Trap errors {.col-span-2}

```bash
trap 'echo Error at about $LINENO' ERR
```

or

```bash
traperr() {
    echo "ERROR: ${BASH_SOURCE[1]} at about ${BASH_LINENO[0]}"
}

set -o errtrace
trap traperr ERR
```

### printf

```bash
printf "Hello %s, I'm %s" Sven Olga
#=> "Hello Sven, I'm Olga

printf "1 + 1 = %d" 2
#=> "1 + 1 = 2"

printf "Print a float: %f" 2
#=> "Print a float: 2.000000"
```

### Getting options {.col-span-2}

```bash
while [[ "$1" =~ ^- && ! "$1" == "--" ]]; do case $1 in
    -V | --version )
    echo $version
    exit
    ;;
    -s | --string )
    shift; string=$1
    ;;
    -f | --flag )
    flag=1
    ;;
esac; shift; done
if [[ "$1" == '--' ]]; then shift; fi
```

### Check for command's result {.col-span-2}

```bash
if ping -c 1 google.com; then
    echo "It appears you have a working internet connection"
fi
```

### Special variables {.row-span-2}

| Expression | Description                  |
| ---------- | ---------------------------- |
| `$?`       | Exit status of last task     |
| `$!`       | PID of last background task  |
| `$$`       | PID of shell                 |
| `$0`       | Filename of the shell script |

See [Special parameters](http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables).

### Grep check {.col-span-2}

```bash
if grep -q 'foo' ~/.bash_history; then
    echo "You appear to have typed 'foo' in the past"
fi
```

### Backslash escapes {.row-span-2}

- &nbsp;
- \!
- \"
- \#
- \&
- \'
- \(
- \)
- \,
- \;
- \<
- \>
- \[
- \|
- \\
- \]
- \^
- \{
- \}
- \`
- \$
- \*
- \?

{.cols-4 .marker-none}

Escape these special characters with `\`

### Heredoc

```sh
cat <<END
hello world
END
```

### Go to previous directory

```bash
pwd # /home/user/foo
cd bar/
pwd # /home/user/foo/bar
cd -
pwd # /home/user/foo
```

### Reading input

```bash
echo -n "Proceed? [y/n]: "
read ans
echo $ans
```

```bash
read -n 1 ans    # Just one character
```

### Conditional execution

```bash
git commit && git push
git commit || echo "Commit failed"
```

### Strict mode

```bash
set -euo pipefail
IFS=$'\n\t'
```

See: [Unofficial bash strict mode](http://redsymbol.net/articles/unofficial-bash-strict-mode/)

### Optional arguments

```bash
args=("$@")
args+=(foo)
args+=(bar)
echo "${args[@]}"
```

Put the arguments into an array and then append

## Also see {.cols-1}

- [Devhints](https://devhints.io/bash) _(devhints.io)_
- [Bash-hackers wiki](http://wiki.bash-hackers.org/) _(bash-hackers.org)_
- [Shell vars](http://wiki.bash-hackers.org/syntax/shellvars) _(bash-hackers.org)_
- [Learn bash in y minutes](https://learnxinyminutes.com/docs/bash/) _(learnxinyminutes.com)_
- [Bash Guide](http://mywiki.wooledge.org/BashGuide) _(mywiki.wooledge.org)_
- [ShellCheck](https://www.shellcheck.net/) _(shellcheck.net)_
- [shell - Standard Shell](https://devmanual.gentoo.org/tools-reference/bash/index.html) _(devmanual.gentoo.org)_
