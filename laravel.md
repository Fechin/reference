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
    This cheat sheet provides a reference for common commands and features for Laravel 8. 
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


Configuration {.cols-3}
---------------


### .env {.cols-2}
Retrieve values from `.env` file
```php
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
On (local dev):
```php
// .env file
APP_ENV=local
APP_DEBUG=true
// ...
```
Off (production):
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
#### Bypass Maintenance Mode
```bash
php artisan down --secret="1630542a-246b-4b66-afa1-dd72a4c43515"
```
```
#### Disable maintenance mode
```bash
php artisan up
```

Routing {.cols-4}
---------------

Web routes - `routes/web.php`
API routes - `routes/api.php`

### Router Methods
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

### Basic
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
Type hint concrete dependencies for auto-injection
```php
use Illuminate\Http\Request;

Route::get('/users', function (Request $request) {
    // ...
});
```

### Redirect Routes
HTTP 302 status
```php
Route::redirect('/here', '/there');
```
Set the status code
```php
Route::redirect('/here', '/there', 301);
```
Permanent 301 redirect
```php
Route::permanentRedirect('/here', '/there');
```

### View Routes
```php
Route::view('/welcome', 'welcome');

// with data
Route::view('/welcome', 'welcome', ['name' => 'Taylor']);
```

### Route Parameters {.cols-2}
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

### Named Routes
Route names should always be unique
```php
Route::get('/user/profile', function () {
    //
})->name('profile');
```
See: [Helpers](#helpers)


### Route Groups {.cols-2}
Share attributes across routes
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
#### Prefixes
URI prefix
```php
Route::prefix('admin')->group(function () {
    Route::get('/users', function () {
        // Matches The "/admin/users" URL
    });
});
```
Name Prefix
```php
Route::name('admin.')->group(function () {
    Route::get('/users', function () {
        // Route assigned name "admin.users"...
    })->name('users');
});
```

### Route Model Binding {.cols-2}
Convenient way to automatically inject the model instances directly into your routes
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
### Fallback Routes
Executed when no other routes match
```php
Route::fallback(function () {
    //
});
```

### Accessing current route
```php
use Illuminate\Support\Facades\Route;

$route = Route::current(); // Illuminate\Routing\Route
$name = Route::currentRouteName(); // string
$action = Route::currentRouteAction(); // string
```


Helpers {.cols-3}
---------------
### routes
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
Additional parameters will be added to query string
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


Controllers {.cols-3}
---------------

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
Define a route to this controller method:
```php
use App\Http\Controllers\UserController;

Route::get('/user/{id}', [UserController::class, 'show']);
```


Requests {.cols-3}
---------------
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
POST, PUT, PATCH, or DELETE forms should include a hidden CSRF `_token` field 
in the form to validate the request.
```html
<form method="POST" action="/profile">
    @csrf

    <!-- Equivalent to... -->
    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
</form>
```

### Accessing Request
Get an instance of the current request by type-hinting the 
controller action or route closure
```php
// controller action
class UaerController extends Controller
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

// http://example.com/foo/bar --> foo/bar
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
#### URL
Full URL for the incoming request
```php
// URL without the query string
$url = $request->url();

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

### Client IP
```php
$ipAddress = $request->ip();
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
Determine content type is most preferred by the request
```php
$preferred = $request->prefers(['text/html', 'application/json']);
```
Shortcut to determine if the incoming request expects a JSON response
```php
if ($request->expectsJson()) {
    // ...
}
```

### Input
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
[See helpers](#helpers)

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
Helpful for checkbox inputs or other booleans. 
Return `true` for 1, "1", true, "true", "on", and "yes". 
All other values will return `false`
```php
$archived = $request->boolean('archived');
```

### Dynamic Properties
Access inputs via properties. If not found as an input, the route parameters will be checked.
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
See: (Helpers)[#helpers]

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
See More: [File Storage](https://laravel.com/docs/8.x/filesystem)



Views {.cols-3}
---------------
Presentational logic and HTML. 
Create a view by placing a file with the `.blade.php` 
extension in the `resources/views` directory.
```html
<!-- View stored in resources/views/greeting.blade.php -->

<html>
    <body>
        <h1>Hello, {{ $name }}</h1>
    </body>
</html>
```

Return a view from a route with the `view()` helper
```php
Route::get('/', function () {
    return view('greeting', ['name' => 'James']);
});
```
See [Routing](#routing-cols-4)
See [Helpers](#helpers-cols-3)




Also see 
-------

- [Laravel Docs](https://laravel.com/docs/8.x)
- [Laracasts](https://laracasts.com/)
- [Laravel API](https://laravel.com/api/8.x/)
