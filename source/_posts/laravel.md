---
title: Laravel
date: 2021-11-09 18:26:55
background: bg-[#e44230]
label: PHP
tags:
  - web
  - framework
  - php
categories:
  - Programming
intro: |
  [Laravel](https://laravel.com/docs/8.x/) is an expressive and progressive web application framework for PHP. 
  This cheat sheet provides a reference for common commands and features for Laravel 8.
plugins:
  - copyCode
---

## Getting Started

### Requirements {.row-span-2}

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

Ensure your web server directs all requests to your application's `public/index.php` file, See:
[Deployment](#deployment)

### Windows

- #### Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
- #### Install & enable [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install)
- #### Ensure that Docker Desktop is [configured to use WSL2](https://docs.docker.com/desktop/windows/wsl/)
- #### In WSL2 terminal:
      ```shell
      $ curl -s https://laravel.build/example-app | bash
      $ cd example-app
      $ ./vendor/bin/sail up
      ```
  {.marker-timeline}

Access application via `http://localhost`

### Mac

- #### Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
- #### In terminal:
      ```shell
      $ curl -s https://laravel.build/example-app | bash
      $ cd example-app
      $ ./vendor/bin/sail up
      ```
  {.marker-timeline}

Access application via `http://localhost`

### Linux

```shell
$ curl -s https://laravel.build/example-app | bash
$ cd example-app
$ ./vendor/bin/sail up
```

Installation via [Composer](https://getcomposer.org)

```bash
$ composer create-project laravel/laravel example-app
$ cd example-app
$ php artisan serve
```

Access application via `http://localhost`

## Configuration

### .env {.cols-2}

Retrieve values from `.env` file

```php
env('APP_DEBUG');

// with default value
env('APP_DEBUG', false);
```

Determine current environment

```php
use Illuminate\Support\Facades\App;

$environment = App::environment();
```

Accessing configuration values using "dot" syntax

```php
// config/app.php --> ['timezone' => '']
$value = config('app.timezone');

// Retrieve a default value if the configuration value does not exist...
$value = config('app.timezone', 'Asia/Seoul');
```

Set configuration values at runtime:

```php
config(['app.timezone' => 'America/Chicago']);
```

### Debug Mode

Turn on (local dev):

```php
// .env file
APP_ENV=local
APP_DEBUG=true
// ...
```

Turn off (production):

```php
// .env file
APP_ENV=production
APP_DEBUG=false
// ...
```

### Maintenance Mode

Temporarily disable application (503 status code)

```bash
php artisan down
```

#### Disable maintenance mode

```bash
php artisan up
```

#### Bypass Maintenance Mode

```bash
php artisan down --secret="1630542a-246b-4b66-afa1-dd72a4c43515"
```

Visit your application URL `https://example.com/1630542a-246b-4b66-afa1-dd72a4c43515` to set a cookie and bypass the
maintenance screen

## Routing

### Router HTTP Methods {.row-span-2}

```php
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```

Multiple HTTP methods

```php
Route::match(['get', 'post'], '/', function () {
    //
});

Route::any('/', function () {
    //
});
```

### Basic Definition {.row-span-2}

```php
use Illuminate\Support\Facades\Route;

// closure
Route::get('/greeting', function () {
    return 'Hello World';
});

// controller action
Route::get(
    '/user/profile',
    [UserProfileController::class, 'show']
);
```

### Dependency Injection

```php
use Illuminate\Http\Request;

Route::get('/users', function (Request $request) {
    // ...
});
```

Type hint concrete dependencies for auto-injection

### View Routes

```php
// Argument 1: URI, Argument 2: view name
Route::view('/welcome', 'welcome');

// with data
Route::view('/welcome', 'welcome', ['name' => 'Taylor']);
```

Route only needs to return a view.

### Route Model Binding {.row-span-4}

#### Implicit binding

With closure

```php
use App\Models\User;

Route::get('/users/{user}', function (User $user) {
    return $user->email;
});

// /user/1 --> User::where('id', '=', 1);
```

With controller action

```php
use App\Http\Controllers\UserController;
use App\Models\User;

// Route definition...
Route::get('/users/{user}', [UserController::class, 'show']);

// Controller method definition...
public function show(User $user)
{
    return view('user.profile', ['user' => $user]);
}
```

With custom resolution column

```php
use App\Models\Post;

Route::get('/posts/{post:slug}', function (Post $post) {
    return $post;
});

// /posts/my-post --> Post::where('slug', '=', 'my-post');
```

Always use a different column to resolve

```php
// in App\Models\Post
public function getRouteKeyName()
{
    return 'slug';
}
```

Multiple models - second is child of first

```php
use App\Models\Post;
use App\Models\User;

Route::get('/users/{user}/posts/{post:slug}', function (User $user, Post $post) {
    return $post;
});
```

Convenient way to automatically inject the model instances directly into your routes

### Route Parameters {.row-span-2}

Capture segments of the URI within your route

#### Required parameters

```php
Route::get('/user/{id}', function ($id) {
    return 'User '.$id;
});
```

With dependency injection

```php
use Illuminate\Http\Request;

Route::get('/user/{id}', function (Request $request, $id) {
    return 'User '.$id;
});
```

#### Optional Parameters

```php
Route::get('/user/{name?}', function ($name = null) {
    return $name;
});

Route::get('/user/{name?}', function ($name = 'John') {
    return $name;
});
```

### Redirect Routes

HTTP `302` status

```php
Route::redirect('/here', '/there');
```

Set the status code

```php
Route::redirect('/here', '/there', 301);
```

Permanent `301` redirect

```php
Route::permanentRedirect('/here', '/there');
```

### Regular Expression Constraints {.cols-2}

```php
Route::get('/user/{name}', function ($name) {
    //
})->where('name', '[A-Za-z]+');

Route::get('/user/{id}', function ($id) {
    //
})->where('id', '[0-9]+');

Route::get('/user/{id}/{name}', function ($id, $name) {
    //
})->where(['id' => '[0-9]+', 'name' => '[a-z]+']);
```

See also: [Regex Cheatsheet](/regex)

### Named Routes

Route names should always be unique

```php
Route::get('/user/profile', function () {
    //
})->name('profile');
```

See: [Helpers](#helpers-cols-3)

### Fallback Routes

```php
Route::fallback(function () {
    //
});
```

Executed when no other routes match

### Route Groups

#### Middleware

```php
Route::middleware(['first', 'second'])->group(function () {
    Route::get('/', function () {
        // Uses first & second middleware...
    });

    Route::get('/user/profile', function () {
        // Uses first & second middleware...
    });
});
```

#### URI Prefixes

```php
Route::prefix('admin')->group(function () {
    Route::get('/users', function () {
        // Matches The "/admin/users" URL
    });
});
```

#### Name Prefix

```php
Route::name('admin.')->group(function () {
    Route::get('/users', function () {
        // Route assigned name "admin.users"...
    })->name('users');
});
```

Share attributes across routes

### Accessing current route

```php
use Illuminate\Support\Facades\Route;

// Illuminate\Routing\Route
$route = Route::current();

// string
$name = Route::currentRouteName();

// string
$action = Route::currentRouteAction();
```

## Helpers

### routes {.row-span-2}

#### Named route

```php
$url = route('profile');
```

With parameters

```php
// Route::get('/user/{id}/profile', /*...*/ )->name('profile);

$url = route('profile', ['id' => 1]);

// /user/1/profile/
```

With query string

```php
// Route::get('/user/{id}/profile', /*...*/ )->name('profile);

$url = route('profile', ['id' => 1, 'photos'=>'yes']);

// /user/1/profile?photos=yes
```

#### Redirects

```php
// Generating Redirects...
return redirect()->route('profile');
```

#### Eloquent Models

```php
echo route('post.show', ['post' => $post]);
```

The route helper will automatically extract the model's route key. See [Routing](#routing-cols-4)

### URL Generation

Generate arbitrary URLs for your application that will automatically use the scheme (HTTP or HTTPS) and host from the
current request

```php
$post = App\Models\Post::find(1);

echo url("/posts/{$post->id}");

// http://example.com/posts/1
```

#### Current URL

```php
// Get the current URL without the query string...
echo url()->current();

// Get the current URL including the query string...
echo url()->full();

// Get the full URL for the previous request...
echo url()->previous();
```

### Named Route URL

```php
$url = route('profile');
```

See [Named Route](#named-route)

### Error Handling

```php
public function isValid($value)
{
    try {
        // Validate the value...
    } catch (Throwable $e) {
        report($e);

        return false;
    }
}
```

Report an exception but continue handling the current request

### HTTP Exceptions

```php
// page not found
abort(404);

// Unauthorized
abort(401);

// Forbidden
abort(403);

// Server Error
abort(500);
```

Generate an HTTP exception response using status code

## Controllers

### Basic

```php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function show($id)
    {
        return view('user.profile', [
            'user' => User::findOrFail($id)
        ]);
    }
}
```

Define a route for this controller method:

```php
use App\Http\Controllers\UserController;

Route::get('/user/{id}', [UserController::class, 'show']);
```

## Requests

### CSRF Protection

Laravel automatically generates a CSRF "token" for each active user session.  
This token is used to verify that the authenticated user is the person actually making the requests.

Get current session's token:

```php
Route::get('/token', function (Request $request) {
    $token = $request->session()->token();

    $token = csrf_token();

    // ...
});
```

`POST`, `PUT`, `PATCH`, or `DELETE` forms should include a hidden CSRF `_token` field in the form to validate the
request.

```html
<form method="POST" action="/profile">
  @csrf

  <!-- Equivalent to... -->
  <input type="hidden" name="_token" value="{{ csrf_token() }}" />
</form>
```

See [Forms](#forms-cols-3)

### Accessing Request

Get an instance of the current request by type-hinting the controller action or route closure

```php
// controller action
class UserController extends Controller
{
    public function store(Request $request)
    {
        $name = $request->input('name');
    }
}

// closure
Route::get('/', function (Request $request) {
    //
});
```

[See Routing](#routing)

### Path

The request's path information

```php
$uri = $request->path();

// https://example.com/foo/bar --> foo/bar
```

#### Match path to pattern

Verify that the incoming request path matches a given pattern

```php
// * is wildcard
if ($request->is('admin/*')) {
    //
}
```

Determine if the incoming request matches a named route

```php
if ($request->routeIs('admin.*')) {
    //
}
```

### URL

Full URL for the incoming request

```php
// URL without the query string
$url = $request->url();

// URL including query string
$urlWithQueryString = $request->fullUrl();

// append data to query string
$request->fullUrlWithQuery(['type' => 'phone']);
```

### Request Method

```php
$method = $request->method();

// verify that the HTTP verb matches a given string
if ($request->isMethod('post')) {
    //
}
```

### Client IP

```php
$ipAddress = $request->ip();
```

### Headers

```php
$value = $request->header('X-Header-Name');

$value = $request->header('X-Header-Name', 'default value');

// determine if the request contains a given header
if ($request->hasHeader('X-Header-Name')) {
    //
}

// retrieve a bearer token from the Authorization header
$token = $request->bearerToken();
```

### Content Type

Return an array containing all the content types accepted by the request

```php
$contentTypes = $request->getAcceptableContentTypes();
```

Boolean check for content types are accepted by the request

```php
if ($request->accepts(['text/html', 'application/json'])) {
    // ...
}
```

### Input {.row-span-4}

Retrieve all the incoming request's input data as an array

```php
$input = $request->all();
```

Retrieve all the incoming request's input data as a collection

```php
$input = $request->collect();

// retrieve subset as collection
$request->collect('users')->each(function ($user) {
    // ...
});
```

See [Helpers](#helpers-cols-3)

Retrieve user input (also gets values from query string)

```php
$name = $request->input('name');

// with default value if none present
$name = $request->input('name', 'Sally');
```

Access array inputs

```php
$name = $request->input('products.0.name');

$names = $request->input('products.*.name');
```

Retrieve all the input values as an associative array:

```php
$input = $request->input();
```

Only retrieve values from the query string:

```php
$name = $request->query('name');

// with default value
$name = $request->query('name', 'Helen');
```

Retrieve all the query string values as an associative array:

```php
$query = $request->query();
```

#### Boolean Input Values

Helpful for checkbox inputs or other booleans. Return `true` for `1`, `"1"`, `true`, `"true"`, `"on"`, and `"yes"`.  
All other values will return `false`

```php
$archived = $request->boolean('archived');
```

### Dynamic Properties

Access inputs via properties.  
If not found as an input, the route parameters will be checked.

```php
$name = $request->name;
```

### Retrieve Partial Input

```php
$input = $request->only(['username', 'password']);

$input = $request->only('username', 'password');

$input = $request->except(['credit_card']);

$input = $request->except('credit_card');
```

### Check Existence

Determine if value(s) present

```php
if ($request->has('name')) {
    //
}

// check if ALL values are present
if ($request->has(['name', 'email'])) {
    //
}

// if any values are present
if ($request->hasAny(['name', 'email'])) {
    //
}

// if a file is present on request
if ($request->hasFile('image')) {
    //
}
```

### Old Input

Retrieve input from the previous request

```php
$username = $request->old('username');
```

Or use the `old()` helper

```php
<input type="text" name="username" value="{{ old('username') }}">
```

See: [Helpers](#helpers-cols-3)  
See: [Forms](#forms-cols-3)

### Uploaded Files

Retrieve uploaded file from request

```php
$file = $request->file('photo');

$file = $request->photo;
```

Get file path or extension

```php
$path = $request->photo->path();

$extension = $request->photo->extension();
```

Store uploaded file with a randomly generated filename

```php
// path where the file should be stored relative to
// the filesystem's configured root directory
$path = $request->photo->store('images');

// optional 2nd param to specify the filesystem disk
$path = $request->photo->store('images', 's3');
```

Store uploaded file and specify the name

```php
$path = $request->photo->storeAs('images', 'filename.jpg');

$path = $request->photo->storeAs('images', 'filename.jpg', 's3');
```

See More: [Laravel File Storage](https://laravel.com/docs/8.x/filesystem)

## Views

### Intro

- [Laravel Docs - Views](https://laravel.com/docs/8.x/views)

```html
<!-- View stored in resources/views/greeting.blade.php -->

<html>
  <body>
    <h1>Hello, <?php echo $name; ?></h1>
  </body>
</html>
```

Create a view by placing a file with the `.blade.php` extension in the `resources/views` directory.

### Pass Data to Views

#### As an array

```php
return view('greetings', ['name' => 'Victoria']);
```

#### Using with()

```php
return view('greeting')
            ->with('name', 'Victoria')
            ->with('occupation', 'Astronaut');
```

Access each value using the data's keys

```html
<html>
  <body>
    <h1>Hello, {{ $name }}</h1>
    <!-- Or -->
    <h1>Hello, <?php echo $name; ?></h1>
  </body>
</html>
```

### view helper

Return a view from a route with the `view()` helper

```php
Route::get('/', function () {
    return view('greeting', ['name' => 'James']);
});
```

See: [View Routes](#view-routes) and [Helpers](#helpers)

### Subdirectories

```php
// resources/views/admin.profile.blade.php
return view('admin.profile');
```

## Blade Templates

### Intro

- [Laravel Docs - Blade Templates](https://laravel.com/docs/8.x/blade)

Blade is the templating engine included in Laravel that also allows you to use plain PHP.

### Views

Blade views are returned using the `view()` helper

```php
Route::get('/', function () {
    return view('welcome', ['name' => 'Samantha']);
});
```

See: [Views](#view-helper)

### Comments

```html
{{-- This comment will not be present in the rendered HTML --}}
```

### Directives {.row-span-3}

#### if Statements

```php
@if (count($records) === 1)
    I have one record!
@elseif (count($records) > 1)
    I have multiple records!
@else
    I don't have any records!
@endif
```

#### isset & empty

```php
@isset($records)
    // $records is defined and is not null...
@endisset

@empty($records)
    // $records is "empty"...
@endempty
```

#### Authentication

```php
@auth
    // The user is authenticated...
@endauth

@guest
    // The user is not authenticated...
@endguest
```

#### Loops

<!-- prettier-ignore -->
```html
@for ($i = 0; $i < 10; $i++)
    The current value is {{ $i }}
@endfor

@foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
@endforeach

@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>No users</p>
@endforelse

@while (true)
    <p>I'm looping forever.</p>
@endwhile
```

Loop Iteration:

```php
@foreach ($users as $user)
    @if ($loop->first)
        This is the first iteration.
    @endif

    @if ($loop->last)
        This is the last iteration.
    @endif

    <p>This is user {{ $user->id }}</p>
@endforeach
```

See more: [Laravel Loop Variable](https://laravel.com/docs/8.x/blade#the-loop-variable)

### Displaying Data

Blade's echo statements `{{ }}` are automatically sent through PHP's `htmlspecialchars` function to prevent XSS attacks.

Display the contents of the name variable:

```html
Hello, {{ $name }}.
```

Display results of a PHP function:

```html
The current UNIX timestamp is {{ time() }}.
```

Display data without escaping with `htmlspecialchars`

```html
Hello, {!! $name !!}.
```

### Including Subviews

Include a Blade view from within another view.  
All variables that are available to the parent view are also available to the included view

```html
<div>
  <!-- resources/views/shared/errors/blade.php -->
  @include('shared.errors')

  <form>
    <!-- Form Contents -->
  </form>
</div>
```

### Raw PHP

Execute a block of plain PHP

```php
@php
    $counter = 1;
@endphp
```

### Stacks

Blade allows you to push to named stacks which can be rendered in another view or layout.  
Useful for javascript libraries required by child views

```html
<!-- Add to the stack -->
@push('scripts')
<script src="/example.js"></script>
@endpush
```

Render the stack

```html
<head>
  <!-- Head Contents -->

  @stack('scripts')
</head>
```

Prepend to the beginning of a stack

```php
@push('scripts')
    This will be second...
@endpush

// Later...

@prepend('scripts')
    This will be first...
@endprepend
```

## Forms

### Intro

- [Laravel Docs - Forms](https://laravel.com/docs/8.x/blade#forms)

### CSRF Field

Include a hidden CSRF token field to validate the request

<!-- prettier-ignore -->
```html
<form method="POST" action="/profile">
  @csrf

  ...
</form>
```

See: [CSRF Protection](#csrf-protection)

### Method Field

Since HTML forms can't make `PUT`, `PATCH`, or `DELETE` requests, you will need to add a hidden `_method` field to spoof
these HTTP verbs:

<!-- prettier-ignore -->
```html
<form action="/post/my-post" method="POST">
  @method('PUT')

  ...
</form>
```

### Validation Errors

<!-- prettier-ignore -->
```html
<!-- /resources/views/post/create.blade.php -->

<label for="title">Post Title</label>

<input id="title" type="text" class="@error('title') is-invalid @enderror" />

@error('title')
  <div class="alert alert-danger">{{ $message }}</div>
@enderror
```

See: [Validation](#validation-cols-3)

### Repopulating Forms

When redirecting due to a validation error, request input is flashed to the session.  
Retrieve the input from the previous request with the `old` method

```php
$title = $request->old('title');
```

Or the `old()` helper

```html
<input type="text" name="title" value="{{ old('title') }}" />
```

## Validation

### Intro

- [Laravel Docs - Validation](https://laravel.com/docs/8.x/validation)

If validation fails, a redirect response to the previous URL will be generated.  
If the incoming request is an XHR request, a JSON response with the validation error messages will be returned.

### Logic

```php
// in routes/web.php
Route::get('/post/create', [App\Http\Controllers\PostController::class, 'create']);
Route::post('/post', [App\Http\Controllers\PostController::class, 'store']);

// in app/Http/Controllers/PostController...
public function store(Request $request)
{
    $validated = $request->validate([
        // input name => validation rules
        'title' => 'required|unique:posts|max:255',
        'body' => 'required',
    ]);

    // The blog post is valid...
}
```

### Rules {.row-span-5}

Can also be passed as an array

```php
$validatedData = $request->validate([
    'title' => ['required', 'unique:posts', 'max:255'],
    'body' => ['required'],
]);
```

#### after:date

Field must be a value after a given date.

```php
'start_date' => 'required|date|after:tomorrow'
```

Instead of a date string, you may specify another field to compare against the date

```php
'finish_date' => 'required|date|after:start_date'
```

See [before:date](#beforedate)

#### after_or_equal:date

Field must be a value after or equal to the given date.  
See [after:date](#afterdate)

#### before:date

Field must be a value preceding the given date.  
The name of another field may be supplied as the value of `date`.  
See [after:date](#afterdate)

#### alpha_num

Field must be entirely alpha-numeric characters

#### boolean

Field must be able to be cast as a `boolean`.  
Accepted input are `true`, `false`, `1`, `0`, `"1"`, and `"0"`

#### confirmed

Field must have a matching field of `{field}_confirmation`.  
For example, if the field is password, a matching `password_confirmation` field must be present

#### current_password

Field must match the authenticated user's password.

#### date

Field must be a valid, non-relative date according to the `strtotime` PHP function.

#### email

Field must be formatted as an email address.

#### file

Field must be a successfully uploaded file.  
See: [Uploaded Files](#uploaded-files)

#### max:value

Field must be less than or equal to a maximum value.  
Strings, numerics, arrays, and files are evaluated like the [size](#sizevalue) rule.

#### min:value

Field must have a minimum value.  
Strings, numerics, arrays, and files are evaluated like the [size](#sizevalue) rule.

#### mimetypes:text/plain,...

File must match one of the given MIME types:

```php
'video' => 'mimetypes:video/avi,video/mpeg,video/quicktime'
```

File's contents will be read and the framework will attempt to guess the MIME type, regardless of the client's provided
MIME type.

#### mimes:foo,bar,...

Field must have a MIME type corresponding to one of the listed extensions.

```php
'photo' => 'mimes:jpg,bmp,png'
```

File's contents will be read and the framework will attempt to guess the MIME type, regardless of the client's provided
MIME type.

[Full listing of MIME types & extensions](https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types)

#### nullable

Field may be null.

#### numeric

Field must be numeric.

#### password

Field must match the authenticated user's password.

#### prohibited

Field must be empty or not present.

#### prohibited_if:anotherfield,value,...

Field must be empty or not present if the _anotherfield_ field is equal to any value.

#### prohibited_unless:anotherfield,value,...

Field must be empty or not present unless the _anotherfield_ field is equal to any value.

#### required

Field must be present in the input data and not empty.  
A field is considered "empty" if one of the following conditions are true:

- The value is `null`.
- The value is an empty string.
- The value is an empty array or empty `Countable` object.
- The value is an uploaded file with no path.

#### required_with:foo,bar,...

Field must be present and not empty, only if any of the other specified fields are present and not empty

#### size:value

Field must have a size matching the given value.

- For strings: number of characters
- For numeric data: integer value (must also have the `numeric` or `integer` rule).
- For arrays: count of the array
- For files: file size in kilobytes

```php
// Validate that a string is exactly 12 characters long...
'title' => 'size:12';
// Validate that a provided integer equals 10...
'seats' => 'integer|size:10';
// Validate that an array has exactly 5 elements...
'tags' => 'array|size:5';
// Validate that an uploaded file is exactly 512 kilobytes...
'image' => 'file|size:512';
```

#### unique:table,column

Field must not exist within the given database table

#### url

Field must be a valid URL

[See all available rules](https://laravel.com/docs/8.x/validation#available-validation-rules)

### Validate Passwords

Ensure passwords have an adequate level of complexity

```php
$validatedData = $request->validate([
    'password' => ['required', 'confirmed', Password::min(8)],
]);
```

`Password` rule object allows you to easily customize the password complexity requirements

```php
// Require at least 8 characters...
Password::min(8)

// Require at least one letter...
Password::min(8)->letters()

// Require at least one uppercase and one lowercase letter...
Password::min(8)->mixedCase()

// Require at least one number...
Password::min(8)->numbers()

// Require at least one symbol...
Password::min(8)->symbols()
```

Ensure a password has not been compromised in a public password data breach leak

```php
Password::min(8)->uncompromised()
```

> _Uses the [k-Anonymity](https://en.wikipedia.org/wiki/K-anonymity) model via the
> [haveibeenpwned.com](https://haveibeenpwned.com) service without sacrificing the user's privacy or security_

Methods can be chained

```php
Password::min(8)
    ->letters()
    ->mixedCase()
    ->numbers()
    ->symbols()
    ->uncompromised()
```

### Display Validation Errors

```php
<!-- /resources/views/post/create.blade.php -->

<h1>Create Post</h1>

@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<!-- Create Post Form -->
```

See: [Validation Errors](#validation-errors)

### Optional Fields

You will often need to mark your "optional" request fields as `nullable` if you do not want the validator to consider
`null` values as invalid

```php
// publish_at field may be either null or a valid date representation
$request->validate([
    'title' => 'required|unique:posts|max:255',
    'body' => 'required',
    'publish_at' => 'nullable|date',
]);
```

### Validated Input

Retrieve the request data that underwent validation

```php
$validated = $request->validated();
```

Or with `safe()`, which returns an instance of `Illuminate\Support\ValidatedInput`

```php
$validated = $request->safe()->only(['name', 'email']);

$validated = $request->safe()->except(['name', 'email']);

$validated = $request->safe()->all();
```

#### Iterate

```php
foreach ($request->safe() as $key => $value) {
    //
}
```

#### Access as an array

```php
$validated = $request->safe();

$email = $validated['email'];
```

## Session

### Intro

- [Laravel Docs - Session](https://laravel.com/docs/8.x/session)

Laravel ships with a variety of session backends that are accessed through a unified API. Memcached, Redis, and database
support is included.

#### Configuration

Session configuration is in `config/session.php`.  
By default, Laravel is configured to use the file session driver

### Check Isset / Exists

Returns `true` if the item is present and is not `null`:

```php
if ($request->session()->has('users')) {
    //
}
```

Returns `true` if present, even if it's `null`:

```php
if ($request->session()->exists('users')) {
    //
}
```

Returns `true` if the item is `null` or is not present:

```php
if ($request->session()->missing('users')) {
    //
}
```

### Retrieving Data {.row-span-2}

#### Via Request

```php
// ...
class UserController extends Controller
{
    public function show(Request $request, $id)
    {
        $value = $request->session()->get('key');

        //
    }
}
```

Pass a default value as the second argument to use if the key does not exist

```php
$value = $request->session()->get('key', 'default');

// closure can be passed and executed as a default
$value = $request->session()->get('key', function () {
    return 'default';
});
```

#### Via session helper

```php
Route::get('/home', function () {
    // Retrieve a piece of data from the session...
    $value = session('key');

    // Specifying a default value...
    $value = session('key', 'default');

    // Store a piece of data in the session...
    session(['key' => 'value']);
});
```

See: [Session Helper]()

#### All Session Data

```php
$data = $request->session()->all();
```

#### Retrieve and Delete

Retrieve and delete an item from the session

```php
$value = $request->session()->pull('key', 'default');
```

### Store Data

Via a request instance

```php
$request->session()->put('key', 'value');
```

Via the global "session" helper

```php
session(['key' => 'value']);
```

Push a new value onto a session value that is an array

```php
// array of team names
$request->session()->push('user.teams', 'developers');
```

## Logging

### Configuration

Configuration options for logging behavior is in `config/logging.php`.  
By default, Laravel will use the stack channel when logging messages, which aggregates multiple log channels into a
single channel.

### Levels {.row-span-2}

All the log levels defined in the [RFC 5424 specification](https://tools.ietf.org/html/rfc5424) are available:

- emergency
- alert
- critical
- error
- warning
- notice
- info
- debug

### Log Facade {.row-span-2}

```php
use Illuminate\Support\Facades\Log;

Log::emergency($message);
Log::alert($message);
Log::critical($message);
Log::error($message);
Log::warning($message);
Log::notice($message);
Log::info($message);
Log::debug($message);
```

### Contextual Info

```php
use Illuminate\Support\Facades\Log;

Log::info('User failed to login.', ['id' => $user->id]);
```

## Deployment

### Intro

- [Laravel Docs - Deployment](https://laravel.com/docs/8.x/deployment)

Ensure your web server directs all requests to your application's `public/index.php` file

### Optimization

#### Composer's autoloader map

```bash
composer install --optimize-autoloader --no-dev
```

#### Configuration Loading

Be sure that you are only calling the `env` function from within your configuration files.  
Once the configuration has been cached, the `.env` file will not be loaded and all calls to the `env` function for
`.env` variables will return `null`

```bash
php artisan config:cache
```

#### Route Loading

```bash
php artisan route:cache
```

#### View Loading

```bash
php artisan view:cache
```

### Debug Mode

The debug option in your `config/app.php` determines how much information about an error is actually displayed to the
user.  
By default, this option is set to the value of the `APP_DEBUG` environment variable in your `.env` file. In your
production environment, this value should always be `false`.  
If the `APP_DEBUG` variable is set to `true` in production, you risk exposing sensitive configuration values to end
users.

## Also see

- [Laravel Docs](https://laravel.com/docs/8.x)
- [Laracasts](https://laracasts.com/)
- [Laravel API](https://laravel.com/api/8.x/)
