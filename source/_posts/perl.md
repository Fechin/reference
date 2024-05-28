---
title: Perl
date: 2024-05-22 9:03:44
background: bg-[#31719d]
tags:
categories:
  - Programming
intro: |
  The perl quick reference cheat sheet that aims at providing help on writing basic syntax and methods.
plugins:
  - copyCode
---

## Getting Started

### Unix and Linux Installation

- Open a Web browser and go to https://www.perl.org/get.html.

- Follow the link to download zipped source code available for Unix/Linux.

- Download perl-5.x.y.tar.gz file and issue the following commands at $ prompt.

```shell
$tar -xzf perl-5.x.y.tar.gz
$cd perl-5.x.y
$./Configure -de
$make
$make test
$make install
```

### Windows Installation

- Follow the link for the Strawberry Perl installation on Windows http://strawberryperl.com

- Download either 32bit or 64bit version of installation.

- Run the downloaded file by double-clicking it in Windows Explorer. This brings up the Perl install wizard, which is really easy to use. Just accept the default settings, wait until the installation is finished, and you're ready to roll!

### Macintosh Installation

- Open a Web browser and go to https://www.perl.org/get.html.

- Follow the link to download zipped source code available for Mac OS X.

- Download perl-5.x.y.tar.gz file and issue the following commands at $ prompt

```shell
$tar -xzf perl-5.x.y.tar.gz
$cd perl-5.x.y
$./Configure -de
$make
$make test
$make install
```

### Running Perl

```shell
# Unix/Linux
$perl  -e <perl code>
# Windows/DOS
C:>perl -e <perl code>
```

### Available command line options

|    Option     |                         Description |
| :-----------: | ----------------------------------: |
| -d[:debugger] |         Runs program under debugger |
|  -Idirectory  |   Specifies @INC/#include directory |
|      -T       |           Enables tainting warnings |
|      -U       |            Allows unsafe operations |
|      -w       |        Enables many useful warnings |
|      -W       |                Enables all warnings |
|      -X       |               Disables all warnings |
|  -e program   | Runs Perl script sent in as program |
|     file      |  Runs Perl script from a given file |

### Script from the Command-line

```shell
# Unix/Linux
$perl  script.pl
# Windows/DOS
C:>perl script.pl
```

### First Perl Program

```shell
$perl -e 'print "Hello World\n"'

# #!/usr/bin/perl

# This will print "Hello, World"
print "Hello, world\n";
$chmod 0755 hello.pl
$./hello.pl

```

### Comments in Perl

```perl
# This is a comment in perl
=begin comment
This is all part of multiline comment.
You can use as many lines as you like
These comments will be ignored by the
compiler until the next =cut is encountered.
=cut

```

### Whitespaces in Perl

```perl
#!/usr/bin/perl

# This would print with a line break in the middle
print "Hello
          world\n";
#output
#Hello
#         world

```

### Single and Double Quotes in Perl

```perl
#!/usr/bin/perl

print "Hello, world\n";
print 'Hello, world\n';

#Hello, world
#Hello, world\n$
```

## Datatypes

### Creating Variables

```perl
$age = 25;             # An integer assignment
$name = "John Paul";   # A string
$salary = 1445.50;     # A floating point
```

### Scalar Variables

```perl
#!/usr/bin/perl

$age = 25;             # An integer assignment
$name = "John Paul";   # A string
$salary = 1445.50;     # A floating point

print "Age = $age\n";
print "Name = $name\n";
print "Salary = $salary\n";
```

### Array Variables

```perl
#!/usr/bin/perl

@ages = (25, 30, 40);
@names = ("John Paul", "Lisa", "Kumar");

print "\$ages[0] = $ages[0]\n";
print "\$ages[1] = $ages[1]\n";
print "\$ages[2] = $ages[2]\n";
print "\$names[0] = $names[0]\n";
print "\$names[1] = $names[1]\n";
print "\$names[2] = $names[2]\n";
```

### Hash Variables

```perl
#!/usr/bin/perl

%data = ('John Paul', 45, 'Lisa', 30, 'Kumar', 40);

print "\$data{'John Paul'} = $data{'John Paul'}\n";
print "\$data{'Lisa'} = $data{'Lisa'}\n";
print "\$data{'Kumar'} = $data{'Kumar'}\n";
```

### Variable Context

```perl
#!/usr/bin/perl

@names = ('John Paul', 'Lisa', 'Kumar');

@copy = @names;
$size = @names;

print "Given names are : @copy\n";
print "Number of names are : $size\n";
```

### Numeric Scalars

```perl
#!/usr/bin/perl

$integer = 200;
$negative = -300;
$floating = 200.340;
$bigfloat = -1.2E-23;

# 377 octal, same as 255 decimal
$octal = 0377;

# FF hex, also 255 decimal
$hexa = 0xff;

print "integer = $integer\n";
print "negative = $negative\n";
print "floating = $floating\n";
print "bigfloat = $bigfloat\n";
print "octal = $octal\n";
print "hexa = $hexa\n";
```

### String Scalars

```perl
#!/usr/bin/perl

$var = "This is string scalar!";
$quote = 'I m inside single quote - $var';
$double = "This is inside single quote - $var";

$escape = "This example of escape -\tHello, World!";

print "var = $var\n";
print "quote = $quote\n";
print "double = $double\n";
print "escape = $escape\n";
```

### Scalar Operations

```perl
#!/usr/bin/perl

$str = "hello" . "world";       # Concatenates strings.
$num = 5 + 10;                  # adds two numbers.
$mul = 4 * 5;                   # multiplies two numbers.
$mix = $str . $num;             # concatenates string and number.

print "str = $str\n";
print "num = $num\n";
print "mul = $mul\n";
print "mix = $mix\n";
```

### Multiline Strings

```perl
#!/usr/bin/perl

$string = 'This is
a multiline
string';

print "$string\n";

##########################
print <<EOF;
This is
a multiline
string
EOF
```

### V-Strings

```perl
#!/usr/bin/perl

$smile  = v9786;
$foo    = v102.111.111;
$martin = v77.97.114.116.105.110;

print "smile = $smile\n";
print "foo = $foo\n";
print "martin = $martin\n";
```

### Special Literals

```perl
#!/usr/bin/perl

print "File name ". __FILE__ . "\n";
print "Line Number " . __LINE__ ."\n";
print "Package " . __PACKAGE__ ."\n";

# they can not be interpolated
print "__FILE__ __LINE__ __PACKAGE__\n";
```

### Sequential Number Arrays

```perl
#!/usr/bin/perl

@var_10 = (1..10);
@var_20 = (10..20);
@var_abc = (a..z);

print "@var_10\n";   # Prints number from 1 to 10
print "@var_20\n";   # Prints number from 10 to 20
print "@var_abc\n";  # Prints number from a to z
```

### Array Size

```perl
#!/usr/bin/perl

@array = (1,2,3);
$array[50] = 4;

$size = @array;
$max_index = $#array;

print "Size:  $size\n";
print "Max Index: $max_index\n";
```

## Array oparationns

### Adding and Removing Elements in Array

| types                |                                                  Description                                                  |
| :------------------- | :-----------------------------------------------------------------------------------------------------------: |
| push @ARRAY, LIST    |                           Pushes the values of the list onto the end of the array.                            |
| pop @ARRAY           |                               Pops off and returns the last value of the array.                               |
| shift @ARRAY         | Shifts the first value of the array off and returns it, shortening the array by 1 and moving everything down. |
| unshift @ARRAY, LIST |         Prepends list to the front of the array, and returns the number of elements in the new array.         |

### Array oparations

```perl
#!/usr/bin/perl

# create a simple array

@coins = ("Quarter","Dime","Nickel");
print "1. \@coins = @coins\n";

# add one element at the end of the array

push(@coins, "Penny");
print "2. \@coins = @coins\n";

# add one element at the beginning of the array

unshift(@coins, "Dollar");
print "3. \@coins = @coins\n";

# remove one element from the last of the array.

pop(@coins);
print "4. \@coins = @coins\n";

# remove one element from the beginning of the array.

shift(@coins);
print "5. \@coins = @coins\n";

```

### Slicing Array Elements

```perl
#!/usr/bin/perl

@days = qw/Mon Tue Wed Thu Fri Sat Sun/;

@weekdays = @days[3,4,5];

print "@weekdays\n";
```

### Replacing Array Elements

```perl
#!/usr/bin/perl

@nums = (1..20);
print "Before - @nums\n";

splice(@nums, 5, 5, 21..25);
print "After - @nums\n";
```

### Transform Strings to Arrays

```perl
#!/usr/bin/perl

# define Strings

$var_string = "Rain-Drops-On-Roses-And-Whiskers-On-Kittens";
$var_names = "Larry,David,Roger,Ken,Michael,Tom";

# transform above strings into arrays.

@string = split('-', $var_string);
@names = split(',', $var_names);

print "$string[3]\n";  # This will print Roses
print "$names[4]\n"; # This will print Michael
```

### Transform Arrays to Strings

```perl
#!/usr/bin/perl

# define Strings
$var_string = "Rain-Drops-On-Roses-And-Whiskers-On-Kittens";
$var_names = "Larry,David,Roger,Ken,Michael,Tom";

# transform above strings into arrays.
@string = split('-', $var_string);
@names  = split(',', $var_names);

$string1 = join( '-', @string );
$string2 = join( ',', @names );

print "$string1\n";
print "$string2\n";
```

### Sorting Arrays

```perl
#!/usr/bin/perl

# define an array
@foods = qw(pizza steak chicken burgers);
print "Before: @foods\n";

# sort this array
@foods = sort(@foods);
print "After: @foods\n";
```

### The $[ Special Variable

```perl
#!/usr/bin/perl

# define an array
@foods = qw(pizza steak chicken burgers);
print "Foods: @foods\n";

# Let's reset first index of all the arrays.
$[ = 1;

print "Food at \@foods[1]: $foods[1]\n";
print "Food at \@foods[2]: $foods[2]\n";
```

### Merging Arrays

```perl
#!/usr/bin/perl

@odd = (1,3,5);
@even = (2, 4, 6);

@numbers = (@odd, @even);

print "numbers = @numbers\n";
```

### Selecting Elements from Lists

```perl
#!/usr/bin/perl

@list = (5,4,3,2,1)[1..3];

print "Value of list = @list\n";
```

### Accessing Hash Elements

```perl
#!/usr/bin/perl

%data = ('John Paul' => 45, 'Lisa' => 30, 'Kumar' => 40);

print "$data{'John Paul'}\n";
print "$data{'Lisa'}\n";
print "$data{'Kumar'}\n";
```

### Extracting Slices

```perl
#!/uer/bin/perl


%data = (-JohnPaul => 45, -Lisa => 30, -Kumar => 40);

@array = @data{-JohnPaul, -Lisa};

print "Array : @array\n";
```

### Extracting Keys and Values

```perl
#!/usr/bin/perl

%data = ('John Paul' => 45, 'Lisa' => 30, 'Kumar' => 40);

@names = keys %data;

print "$names[0]\n";
print "$names[1]\n";
print "$names[2]\n";
```

### Getting Hash Size

```perl
#!/usr/bin/perl

%data = ('John Paul' => 45, 'Lisa' => 30, 'Kumar' => 40);

@keys = keys %data;
$size = @keys;
print "1 - Hash size:  is $size\n";

@values = values %data;
$size = @values;
print "2 - Hash size:  is $size\n";
```

### Add and Remove Elements in Hashes

```perl
#!/usr/bin/perl

%data = ('John Paul' => 45, 'Lisa' => 30, 'Kumar' => 40);
@keys = keys %data;
$size = @keys;
print "1 - Hash size:  is $size\n";

# adding an element to the hash;
$data{'Ali'} = 55;
@keys = keys %data;
$size = @keys;
print "2 - Hash size:  is $size\n";

# delete the same element from the hash;
delete $data{'Ali'};
@keys = keys %data;
$size = @keys;
print "3 - Hash size:  is $size\n";
```

## Control Flow

### if-else

```perl
#!/usr/bin/perl

# Perl program to illustrate
# Decision-Making statements

$a = 10;
$b = 15;

# if condition to check
# for even number
if($a % 2 == 0 )
{
	printf "Even Number";
}

# if-else condition to check
# for even number or odd number
if($b % 2 == 0 )
{
	printf "\nEven Number";
}
else
{
	printf "\nOdd Number";
}
```

### The ? : Operator

```perl
#!/usr/local/bin/perl

$name = "Ali";
$age = 10;

$status = ($age > 60 )? "A senior citizen" : "Not a senior citizen";

print "$name is  - $status\n";
```

### for loop

```perl
#!/usr/bin/perl

# Perl program to illustrate
# the use of for Loop

# for loop
print("For Loop:\n");
for ($count = 1 ; $count <= 3 ; $count++)
{
	print "GeeksForGeeks\n"
}
```

### foreach loop

```perl
#!/usr/bin/perl

# Perl program to illustrate
# the use of foreach Loop

# Array
@data = ('GEEKS', 4, 'GEEKS');

# foreach loop
print("For-each Loop:\n");
foreach $word (@data)
{
	print ("$word ");
}

```

### while and do-while

```perl
#!/usr/bin/perl

# Perl program to illustrate
# the use of foreach Loop

# while loop
$count = 3;

print("While Loop:\n");
while ($count >= 0)
{
	$count = $count - 1;
	print "GeeksForGeeks\n";
}

print("\ndo...while Loop:\n");
$a = 10;

# do..While loop
do {

	print "$a ";
	$a = $a - 1;
} while ($a > 0);

```

## Object Oriented Programming

### Class and object

```perl
#!/usr/bin/perl

# Perl Program for creation of a
# Class and its object
use strict;
use warnings;

package student;

# constructor
sub student_data
{

	# shift will take package name 'student'
	# and assign it to variable 'class'
	my $class_name = shift;
	my $self = {
				'StudentFirstName' => shift,
				'StudentLastName' => shift
			};
	# Using bless function
	bless $self, $class_name;

	# returning object from constructor
	return $self;
}

# Object creating and constructor calling
my $Data = student_data student("Geeks", "forGeeks");

# Printing the data
print "$Data->{'StudentFirstName'}\n";
print "$Data->{'StudentLastName'}\n";

```

### Subroutines

```perl
#!/usr/bin/perl

# Perl Program to demonstrate the
# subroutine declaration and calling

# defining subroutine
sub ask_user
{
	print "Hello Geeks!\n";
}

# calling subroutine
# you can also use
# &ask_user();
ask_user();
```

### Modules and Packages

```perl
#!/usr/bin/perl

# Using the Package 'Calculator'
use Calculator;

print "Enter two numbers to multiply";

# Defining values to the variables
$a = 5;
$b = 10;

# Subroutine call
Calculator::multiplication($a, $b);

print "\nEnter two numbers to divide";

# Defining values to the variables
$a = 45;
$b = 5;

# Subroutine call
Calculator::division($a, $b);
```

### References

```perl
# Perl program to illustrate the
# Referencing and Dereferencing
# of an Array

# defining an array
@array = ('1', '2', '3');

# making an reference to an array variable
$reference_array = \@array;

# Dereferencing
# printing the value stored
# at $reference_array by prefixing
# @ as it is a array reference
print @$reference_array;
```

### Regular Expression

```perl
# Perl program to demonstrate
# the m// and =~ operators

# Actual String
$a = "GEEKSFORGEEKS";

# Prints match found if
# its found in $a
if ($a =~ m[GEEKS])
{
	print "Match Found\n";
}

# Prints match not found
# if its not found in $a
else
{
	print "Match Not Found\n";
}
```

### File Handling

```perl
# Opening the file
open(fh, "GFG2.txt") or die "File '$filename' can't be opened";

# Reading First line from the file
$firstline = <fh>;
print "$firstline\n";
```

### File Test Operators

```perl
#!/usr/bin/perl

# Using predefined modules
use warnings;
use strict;

# Providing path of file to a variable
my $filename = 'C:\Users\GeeksForGeeks\GFG.txt';

# Checking for the file existence
if(-e $filename)
{

	# If File exists
	print("File $filename exists\n");
}

else
{

	# If File doesn't exists
	print("File $filename does not exists\n");
}
```

### Working with Excel Files

```perl
#!/usr/bin/perl
use Excel::Writer::XLSX;

my $Excelbook = Excel::Writer::XLSX->new( 'GFG_Sample.xlsx' );
my $Excelsheet = $Excelbook->add_worksheet();

$Excelsheet->write( "A1", "Hello!" );
$Excelsheet->write( "A2", "GeeksForGeeks" );
$Excelsheet->write( "B1", "Next_Column" );

$Excelbook->close;
```

### Reading from an Excel File:

```perl
use 5.016;
use Spreadsheet::Read qw(ReadData);
my $book_data = ReadData (‘new_excel.xlsx');
say 'A2: ' . $book_data->[1]{A2};

```

### Error Handling

```perl
if(open(DATA, $file)) {
   ...
} else {
   die "Error: Couldn't open the file - $!"
}
#example
open(DATA, $file) || die "Error: Couldn't open the file $!";
## example
unless(chdir("/etc")) {
   die "Error: Can't change directory - $!";
}
##example
print(exists($hash{value}) ? 'There' : 'Missing',"\n");

```

### The warn Function

```perl
chdir('/etc') or warn "Can't change directory";


```

### The die function

```perl
chdir('/etc') or die "Can't change directory";

```

### Errors within Modules

```perl
package T;

require Exporter;
@ISA = qw/Exporter/;
@EXPORT = qw/function/;
use Carp;

sub function {
   warn "Error in module!";
}
1;
#use T;
#function();
# all below code call the funtion

```

### The carp Function

```perl
package T;

require Exporter;
@ISA = qw/Exporter/;
@EXPORT = qw/function/;
use Carp;

sub function {
   carp "Error in module!";
}
1;

```

### The cluck Function

```perl
package T;

require Exporter;
@ISA = qw/Exporter/;
@EXPORT = qw/function/;
use Carp qw(cluck);

sub function {
   cluck "Error in module!";
}
1;

```

### The croak Function

```perl
package T;

require Exporter;
@ISA = qw/Exporter/;
@EXPORT = qw/function/;
use Carp;

sub function {
   croak "Error in module!";
}
1;

```

### The confess Function

```perl
package T;

require Exporter;
@ISA = qw/Exporter/;
@EXPORT = qw/function/;
use Carp;

sub function {
   confess "Error in module!";
}
1;
```

## Date and Time

### Current Date and Time

```perl
#!/usr/local/bin/perl

@months = qw( Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec );
@days = qw(Sun Mon Tue Wed Thu Fri Sat Sun);

($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime();
print "$mday $months[$mon] $days[$wday]\n";
#or
#!/usr/local/bin/perl

$datestring = localtime();
print "Local date and time $datestring\n";
```

### GMT Time

```perl
#!/usr/local/bin/perl

$datestring = gmtime();
print "GMT date and time $datestring\n";
```

### Format Date and Time

```perl
#!/usr/local/bin/perl

($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime();

printf("Time Format - HH:MM:SS\n");
printf("%02d:%02d:%02d", $hour, $min, $sec);
```

### Epoch time

```perl
#!/usr/local/bin/perl

$epoc = time();

print "Number of seconds since Jan 1, 1970 - $epoc\n";
#or
#!/usr/local/bin/perl

$datestring = localtime();
print "Current date and time $datestring\n";

$epoc = time();
$epoc = $epoc - 24 * 60 * 60;   # one day before of current date.

$datestring = localtime($epoc);
print "Yesterday's date and time $datestring\n";
```

### POSIX Function strftime()

| Specifier | Replaced by                                                                                                    |         Example          |
| :-------- | :------------------------------------------------------------------------------------------------------------- | :----------------------: |
| %a        | Abbreviated weekday name                                                                                       |           Thu            |
| %A        | Full weekday name                                                                                              |         Thursday         |
| %b        | Abbreviated month name                                                                                         |           Aug            |
| %B        | Full month name                                                                                                |          August          |
| %c        | Date and time representation                                                                                   | Thu Aug 23 14:55:02 2001 |
| %C        | Year divided by 100 and truncated to integer (00-99)                                                           |            20            |
| %d        | Day of the month, zero-padded (01-31)                                                                          |            23            |
| %D        | Short MM/DD/YY date, equivalent to %m/%d/%y                                                                    |         08/23/01         |
| %e        | Day of the month, space-padded ( 1-31)                                                                         |            23            |
| %F        | Short YYYY-MM-DD date, equivalent to %Y-%m-%d                                                                  |        2001-08-23        |
| %g        | Week-based year, last two digits (00-99)                                                                       |            01            |
| %G        | Week-based year                                                                                                |           2001           |
| %h        | Abbreviated month name (same as %b)                                                                            |           Aug            |
| %H        | Hour in 24h format (00-23)                                                                                     |            14            |
| %I        | Hour in 12h format (01-12)                                                                                     |            02            |
| %j        | Day of the year (001-366)                                                                                      |           235            |
| %m        | Month as a decimal number (01-12)                                                                              |            08            |
| %M        | Minute (00-59)                                                                                                 |            55            |
| %n        | New-line character ('\n')                                                                                      |
| %p        | AM or PM designation                                                                                           |            PM            |
| %r        | 12-hour clock time                                                                                             |       02:55:02 pm        |
| %R        | 24-hour HH:MM time, equivalent to %H:%M                                                                        |          14:55           |
| %S        | Second (00-61)                                                                                                 |            02            |
| %t        | Horizontal-tab character ('\t')                                                                                |
| %T        | ISO 8601 time format (HH:MM:SS), equivalent to %H:%M:%S                                                        |          14:55           |
| %u        | ISO 8601 weekday as number with Monday as 1 (1-7)                                                              |            4             |
| %U        | Week number with the first Sunday as the first day of week one (00-53)                                         |            33            |
| %V        | ISO 8601 week number (00-53)                                                                                   |            34            |
| %w        | Weekday as a decimal number with Sunday as 0 (0-6)                                                             |            4             |
| %W        | Week number with the first Monday as the first day of week one (00-53)                                         |            34            |
| %x        | Date representation                                                                                            |         08/23/01         |
| %X        | Time representation                                                                                            |         14:55:02         |
| %y        | Year, last two digits (00-99)                                                                                  |            01            |
| %Y        | Year                                                                                                           |           2001           |
| %z        | ISO 8601 offset from UTC in timezone (1 minute = 1, 1 hour = 100)If timezone cannot be termined, no characters |           +100           |
| %Z        | Timezone name or abbreviation If timezone cannot be termined, no characters                                    |           CDT            |
| %%        | A % sign                                                                                                       |            %             |

```perl
#!/usr/local/bin/perl
use POSIX qw(strftime);

$datestring = strftime "%a %b %e %H:%M:%S %Y", localtime;
printf("date and time - $datestring\n");

# or for GMT formatted appropriately for your locale:
$datestring = strftime "%a %b %e %H:%M:%S %Y", gmtime;
printf("date and time - $datestring\n");
```
