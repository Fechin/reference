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
Set `Refresh` HTTP header
```bash
// auto refresh browser after 60 seconds
php artisan down --refresh=15
```
Set `Retry-After` HTTP header
```bash
// retry after 60 seconds
php artisan down --retry=60
```
#### Bypass Maintenance Mode
```bash
php artisan down --secret="1630542a-246b-4b66-afa1-dd72a4c43515"
```
#### Pre-Render Maintenance View
```bash
php artisan down --render="errors::503"
```
#### Redirect instead of maintenance view
```bash
php artisan down --redirect=/
```
#### Disable maintenance mode
```bash
php artisan up
```
### Customize maintenance template
```
resources/views/errors/503.blade.php
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
#### Required params
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
#### Optional Paramters
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
Common pattern helpers
```php
Route::get('/user/{id}/{name}', function ($id, $name) {
    //
})->whereNumber('id')->whereAlpha('name');

Route::get('/user/{name}', function ($name) {
    //
})->whereAlphaNumeric('name');

Route::get('/user/{id}', function ($id) {
    //
})->whereUuid('id');
```

### Global Constraint
Always apply constraint to paramters with this name
```php
// in App\Providers\RouteServiceProvider
public function boot()
{
    Route::pattern('id', '[0-9]+');
}


// in routes/web.php
Route::get('/user/{id}', function ($id) {
    // Only executed if {id} is numeric...
});
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
#### Subdomain
*Register subdomain routes before registering root domain routes*
```php
Route::domain('{account}.example.com')->group(function () {
    Route::get('user/{id}', function ($account, $id) {
        //
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
#### Explicit Binding
Define how route parameters correspond to models
```php
// in App\Providers\RouteServiceProvider
use App\Models\User;
use Illuminate\Support\Facades\Route;

public function boot()
{
    Route::model('user', User::class);

    // ...
}
```
Define custom binding logic
```php
// in App\Providers\RouteServiceProvider
use App\Models\User;
use Illuminate\Support\Facades\Route;

public function boot()
{
    Route::bind('user', function ($value) {
        return User::where('name', $value)->firstOrFail();
    });

    // ...
}
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


Deployment {.cols-3}
---------------






Also see 
-------

- [PHP Docs](https://www.php.net/manual/en/index.php)
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/php/)




