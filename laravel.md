---
title: Laravel
date: 2021-11-09 
icon: 
background: bg-orange-500
tags:
    - web
    - framework
    - php
categories:
    - Programming
    - Framework
intro: |
    [Laravel](https://laravel.com/docs/8.x/) is an expressive and progressive web application framework for PHP. 
    This cheat sheet provides a reference for common commands and features. 
---


Getting started {.cols-3}
---------------


### Requirements
#### PHP
- PHP version >= 7.3
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

#### Server
Ensure your web server directs all requests to your application's 
`public/index.php` file
See: [Deployment](#deployment)


### Installation  {.cols-2}
Local development with [Docker Desktop](https://www.docker.com/products/docker-desktop) and [Sail](https://laravel.com/docs/8.x/sail)
#### Windows
1. Install & enable [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install)
2. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
3. Ensure that Docker Desktop is [configured to use WSL2](https://docs.docker.com/desktop/windows/wsl/)
4. In WSL2 terminal:
```bash
curl -s https://laravel.build/example-app | bash

cd example-app

./vendor/bin/sail up
```
#### Mac
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. In terminal:
```bash
curl -s "https://laravel.build/example-app" | bash

cd example-app

./vendor/bin/sail up
```
#### Linux
```bash
curl -s https://laravel.build/example-app | bash

cd example-app

./vendor/bin/sail up
```
Installation via [Composer](https://getcomposer.org)
```bash
composer create-project laravel/laravel example-app

cd example-app

php artisan serve
```

Access application via http://localhost


### Configuration
#### .env
Retrieve values from `.env` file
```php
env('APP_DEBUG', false)
```
Determine current environment
```php
use Illuminate\Support\Facades\App;

$environment = App::environment();
```
Accessing configuration values using "dot" syntax
```
// config/app.php $
$value = config('app.timezone');

// Retrieve a default value if the configuration value does not exist...
$value = config('app.timezone', 'Asia/Seoul');
```




PHP Operators {.cols-4}
---------------



### Arithmetic
| -    | -              |
|------|----------------|
| `+`  | Addition       |
| `-`  | Subtraction    |
| `*`  | Multiplication |
| `/`  | Division       |
| `%`  | Modulo         |
| `**` | Exponentiation |

### Assignment
| -        | -                   |
|----------|---------------------|
| `a += b` | Same as `a = a + b` |
| `a -= b` | Same as `a = a – b` |
| `a *= b` | Same as `a = a * b` |
| `a /= b` | Same as `a = a / b` |
| `a %= b` | Same as `a = a % b` |


### Comparison {.row-span-2}
| -     | -                            |
|-------|------------------------------|
| `==`  | Equal                        |
| `===` | Identical                    |
| `!=`  | Not equal                    |
| `<>`  | Not equal                    |
| `!==` | Not identical                |
| `<`   | Less than                    |
| `>`   | Greater than                 |
| `<=`  | Less than or equal           |
| `>=`  | Greater than or equal        |
| `<=>` | Less than/equal/greater than |

### Logical
| -     | -            |
|-------|--------------|
| `and` | And          |
| `or`  | Or           |
| `xor` | Exclusive or |
| `!`   | Not          |
| `&&`  | And          |
| `||`  | Or           |




### Arithmetic {.col-span-2}
```php
// Arithmetic
$sum        = 1 + 1; // 2
$difference = 2 - 1; // 1
$product    = 2 * 2; // 4
$quotient   = 2 / 1; // 2

// Shorthand arithmetic
$num = 0;
$num += 1;       // Increment $num by 1
echo $num++;     // Prints 1 (increments after evaluation)
echo ++$num;     // Prints 3 (increments before evaluation)
$num /= $float;  // Divide and assign the quotient to $num
```



### Bitwise
| -    | -                  |
|------|--------------------|
| `&`  | And                |
| `|`  | Or (inclusive or)  |
| `^`  | Xor (exclusive or) |
| `~`  | Not                |
| `<<` | Shift left         |
| `>>` | Shift right        |





Also see 
-------

- [PHP Docs](https://www.php.net/manual/en/index.php)
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/php/)




