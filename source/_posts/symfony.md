---
title: Symfony
date: 2025-07-23 18:28:43
background: bg-[#67526d]
label: php
tags:
  - php
  - web
categories:
  - Programming
intro: |
  This Symfony Cheat Sheet is a non exhaustive list of main symfony basics that you can use or need.
plugins:
  - copyCode
---


## Getting Started 

### Installation 

```bash
curl -sS https://get.symfony.com/cli/installer | bash
```
- [Doc Symfony Download](https://symfony.com/download) 

{.marker-round}

### Symfony CLI: Basic Commands {.col-span-2}  


| Command                         | Description                                   |
|:--------------------------------|:----------------------------------------------|
| `symfony check:requirements`    | Check system requirements for running Symfony |
| `symfony version`               | Display the Symfony CLI version               |
| `symfony help`                  | Display all available commands                |
| `symfony help <cmd>`            | Display help for a specific command           |
| `symfony server:start`          | Start server                                  |
| `symfony server:stop`           | Stop server                                   |
| `symfony serve -d`              | Run Symfony server in background              |



### Creating a New Symfony Project   {.col-span-3}

| Command                                                       | Description                                        |
|:--------------------------------------------------------------|:---------------------------------------------------|
| `symfony new <dir>`                                           | Create a new Symfony project in `<dir>`            |
| `symfony new my_project_directory --version="7.3.x" --webapp` | Create a new web application                       |
| `symfony new my_project_directory --version="7.3.x"`          | Create a new API application                       |
| `composer create-project symfony/skeleton <dir>`              | Create a new Symfony project using Composer        |

----

[Doc Symfony creating app](https://symfony.com/doc/current/setup.html#creating-symfony-applications) {.link-arrow}



### Symfony Console Basic Usage 

| CMD                       | Description                                               |
|:--------------------------|:----------------------------------------------------------|
| `bin/console`             | List all available commands                               |
| `bin/console <namespace>` | List all commands in a specific namespace or bundle       |
| `bin/console <cmd>`       | Run a specific command                                    |
| `bin/console help <cmd>`  | Show help for a specific command                          |
| `bin/console --env=<env>` | Run console in environment: dev, test, or prod            |
| `bin/console cache:clear` | Clear the cache                                           |

### Linting Commands   {.col-span-2}

| CMD                            | Description                                            |
|:-------------------------------|:-------------------------------------------------------|
| `bin/console lint:container`   | Check service arguments for type mismatches            |
| `bin/console lint:twig <dir>`  | Lint Twig templates for syntax errors                  |
| `bin/console lint:yaml <dir>`  | Lint YAML files for syntax errors                      |
| `bin/console lint:xliff <dir>` | Lint XLIFF translation files                           |


### Debugging Commands   {.col-span-3}

| CMD                                          | Description                             |
|:---------------------------------------------|:----------------------------------------|
| `bin/console debug:asset-map`                | Show all mapped assets                  |
| `bin/console debug:autowiring`               | List all autowireable services          |
| `bin/console debug:config <bundle>`          | Dump configuration of a bundle          |
| `bin/console debug:container`                | List all public services                |
| `bin/console debug:container <service>`      | Get info about a specific service       |
| `bin/console debug:container --env-vars`     | Show environment variables in container |
| `bin/console debug:container --tags`         | List tagged public services             |
| `bin/console debug:container --tag=<t>`      | List services with a specific tag       |
| `bin/console debug:dotenv`                   | Display parsed dotenv values            |
| `bin/console debug:dotenv <search>`          | Show dotenv values matching a search    |
| `bin/console debug:event-dispatcher`         | List all event listeners                |
| `bin/console debug:firewall <name>`          | Show details of a firewall              |
| `bin/console debug:form`                     | Show form type information              |
| `bin/console debug:messenger`                | List dispatchable messages              |
| `bin/console debug:router`                   | List all registered routes              |
| `bin/console debug:router <name>`            | Get info about a specific route         |
| `bin/console debug:translation <loc>`        | Show messages for a locale              |

### AssetMap Commands  {.col-span-2}

| CMD                                   | Description                                        |
|:--------------------------------------|:---------------------------------------------------|
| `bin/console asset-map:compile`       | Compile assets for production                      |
| `bin/console importmap:require <pkg>` | Add an NPM package to the import map               |
| `bin/console importmap:install`       | Download all importmap packages                    |
| `bin/console importmap:update`        | Update all importmap packages                      |
| `bin/console importmap:remove <pkg>`  | Remove a package from import map                   |
| `bin/console importmap:outdated`      | List outdated importmap packages                   |
| `bin/console importmap:audit`         | Check dependencies for vulnerabilities             |




## ORM & Migration 

### Database Connection    {.col-span-2}


```bash
# MySQL 
DATABASE_URL="mysql://username:password@127.0.0.1:3306/db_name?serverVersion=X.Y.Z&charset=utf8mb4"

# MariaDB 
DATABASE_URL="mysql://username:password@127.0.0.1:3307/db_name?serverVersion=X.Y.Z-MariaDB&charset=utf8mb4"

# PostgreSQL 
DATABASE_URL="postgresql://username:password@127.0.0.1:5432/db_name?serverVersion=X.Y.Z&charset=utf8"
```
----

`username` : user of DBMS <br>
`password` : password of DBMS <br>
`127.0.0.1`:  `3306` MySQL `3307` MariaDB `5432` PostgreSQL <br> 
`db_name` : name of data base <br>
`serverVersion` : to know server version <code>SHOW GLOBAL VARIABLE LIKE</code> `%version%` in your DBMS




### Doctrine Commands  {.col-span-3}



| CMD                                                                                                                                         | Description                              |
|:--------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| `bin/console doctrine:database:create`or `php bin/console d:d:c`                                                                            | Create the configured database           |
| `bin/console doctrine:database:drop`  or `php bin/console d:d:d`                                                                            | Drop the configured database             |
| `bin/console doctrine:mapping:info`                                                                                                         | List mapped entities                     |
| `bin/console doctrine:schema:update --dump-sql`                                                                                             | Generate SQL to sync DB schema           |
| `bin/console doctrine:schema:update --force`                                                                                                | Sync DB schema with mapping info         |
| `bin/console doctrine:schema:validate`                                                                                                      | Validate the mapping files               |
| `bin/console doctrine:query:sql <sql cmd>`                                                                                                  | Run a raw SQL query                      |
| `bin/console doctrine:query:dql <dql cmd>`                                                                                                  | Run a DQL query                          |
| `bin/console doctrine:fixtures:load`                                                                                                        | Load data fixtures into the database     |

---

You can run <code>php bin/console doctrine:schema:drop --force && php bin/console doctrine:schema:update --force && php bin/console doctrine:fixtures:load -n</code> to Load data fixtures & reset sequence to 0 

----

[Doc Symfony Database](https://symfony.com/doc/current/doctrine.html#configuring-the-database) {.link-arrow}



### Migration Commands  {.col-span-3}

| CMD                                                                 | Description                                                         |
|:--------------------------------------------------------------------|:--------------------------------------------------------------------|
| `bin/console make:migration`                                        | Generate a new migration based on schema changes                    |
| `bin/console doctrine:migration:generate`                           | Generate a new migration based on schema changes                    |
| `bin/console doctrine:migration:migrate` or `php bin/console d:m:m` | Execute pending migrations to update the database                   |
| `bin/console doctrine:migration:status`                             | Show status of migrations (pending, executed)                       |
| `bin/console doctrine:migration:diff`                               | Compare current schema with the database and generate migration SQL |


## Symfony Maker

### Maker-Bundle List  {.col-span-2}

| Command                      | Description                                                                                          |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------|
| `bin/console list make `     | List all make commands available                                                                     |
| `make:auth`                  | Create a Guard authenticator of different flavors                                                    |
| `make:command`               | Create a new console command class                                                                   |
| `make:controller`            | Create a new controller class                                                                        |
| `make:crud`                  | Create CRUD for Doctrine entity class                                                                |
| `make:docker:database`       | Add a database container to your compose.yaml file                                                   |
| `make:entity`                | Create or update a Doctrine entity class, and optionally an API Platform resource                    |
| `make:fixtures`              | Create a new class to load Doctrine fixtures                                                         |
| `make:form`                  | Create a new form class                                                                              |
| `make:functional-test`       | Create a new test class                                                                              |
| `make:listener`              | [make:subscriber] Creates a new event subscriber class or a new event listener class                 |
| `make:message`               | Create a new message and handler                                                                     |
| `make:messenger-middleware`  | Create a new messenger middleware                                                                    |
| `make:migration`             | Create a new migration based on database changes                                                     |
| `make:registration-form`     | Create a new registration form system                                                                |
| `make:reset-password`        | Create controller, entity, and repositories for use with symfonycasts/reset-password-bundle          |
| `make:schedule`              | Create a scheduler component                                                                         |
| `make:security:custom`       | Create a custom security authenticator                                                               |
| `make:security:form-login`   | Generate the code needed for the form_login authenticator                                            |
| `make:serializer:encoder`    | Create a new serializer encoder class                                                                |
| `make:serializer:normalizer` | Create a new serializer normalizer class                                                             |
| `make:stimulus-controller`   | Create a new Stimulus controller                                                                     |
| `make:subscriber`            | Creates a new event subscriber class or a new event listener class                                   |
| `make:test`                  | [make:unit-test make:functional-test] Create a new test class                                        |
| `make:twig-component`        | Create a Twig (or Live) component                                                                    |
| `make:twig-extension`        | Create a new Twig extension with its runtime class                                                   |
| `make:unit-test`             | Create a new test class                                                                              |
| `make:user`                  | Create a new security user class                                                                     |
| `make:validator`             | Create a new validator and constraint class                                                          |
| `make:voter`                 | Create a new security voter class                                                                    |
| `make:webhook`               | Create a new Webhook                                                                                 |


[Doc Symfony Maker Bundle](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html)   {.link-arrow}

## Controller Basics

### Route Attributes and Descriptions  {.col-span-3}


`use Symfony\Component\Routing\Attribute\Route;`

| Attribute                                                                   | Description                                |
|:----------------------------------------------------------------------------|:-------------------------------------------|
| `#[Route('/path')]`                                                         | Define a route for a controller method     |
| `#[Route('/path', name: 'name')]`                                           | Define a named route for a method          |
| `#[Route('/path', methods: ['GET'])]`                                       | Define allowed HTTP methods                |
| `#[Route('/blog/{slug}')]`                                                  | Define a route with a parameter            |
| `#[Route('/page/{page}', requirements: ['page' => '\d+'])]`                 | Define a route with a parameter constraint |
| `#[Route(path: ['en' => '/about-us', 'nl' => '/over-ons'], name: 'about')]` | Define localized routes                    |

[Doc Symfony Route Parameters](https://symfony.com/doc/current/routing.html#route-parameters)  {.link-arrow}

### AbstractController Methods  {.col-span-3}

| Method                                                 | Description                                   |
|:-------------------------------------------------------|:----------------------------------------------|
| `$this->render('template.html')`                       | Returns a Response with the rendered template |
| `$this->redirectToRoute('homepage')`                   | Returns a RedirectResponse to a named route   |
| `$this->redirectToRoute('name', ['param' => 'value'])` | Returns a redirect to a route with parameters |
| `$this->redirectToRoute('name', [], 301)`              | Returns a RedirectResponse with status code   |
| `$this->redirect('http://example.com')`                | Returns a RedirectResponse to an external URL |
| `$this->createNotFoundException($msg)`                 | Returns a NotFoundHttpException               |
| `$this->createForm(FormType::class, $data)`            | Creates a new Form instance based on the type |

### Form Methods {.col-span-2}

| Method                           | Description                     |
|:---------------------------------|:--------------------------------|
| `$form->handleRequest($request)` | Handle a form submission        |
| `$form->isSubmitted()`           | Check if the form was submitted |
| `$form->isValid()`               | Check if the form is valid      |


## Form Type : [Doc Symfony Form types](https://symfony.com/doc/current/reference/forms/types.html)  


### Form Fields: Text Fields

| Type           | Description                             |
|:---------------|:----------------------------------------|
| `TextType`     | A basic text input field                |
| `TextareaType` | A multi-line textarea field             |
| `EmailType`    | An email field (`<input type="email">`) |
| `PasswordType` | A password field                        |
| `SearchType`   | A search field                          |
| `UrlType`      | A URL field (`<input type="url">`)      |
| `TelType`      | A tel (phone number) input field        |
| `UuidType`     | A UUID field                            |


### Form Fields: Numeric Fields

| Type           | Description                                |
|:---------------|:-------------------------------------------|
| `IntegerType`  | A number field for integers                |
| `MoneyType`    | A money field, with a specifiable currency |
| `NumberType`   | A number field                             |
| `PercentType`  | A number field for percentages             |
| `RangeType`    | A range input field (slider)               |



### Form Fields: Choice Fields

| Type           | Description                             |
|:---------------|:----------------------------------------|
| `ChoiceType`   | Field for selecting one or more options |
| `EnumType`     | Choose from PHP enum cases              |
| `EntityType`   | Choose from a Doctrine entity           |
| `CountryType`  | Choose a country                        |
| `LanguageType` | Choose a language                       |
| `LocaleType`   | Choose a locale                         |
| `TimezoneType` | Choose a timezone                       |
| `CurrencyType` | Choose a currency                       |



### Form Fields: Symfony UX Fields

| Type            | Description                        |
|:----------------|:-----------------------------------|
| `CropperType`   | A Cropper.js image cropper field   |
| `DropzoneType`  | A Dropzone file upload field       |



### Form Fields: Date and Time Fields

| Type               | Description                 |
|:-------------------|:----------------------------|
| `DateType`         | A date field                |
| `DateIntervalType` | A date interval field       |
| `DateTimeType`     | A date and time field       |
| `TimeType`         | A time field                |
| `BirthdayType`     | A date field for birthdays  |
| `WeekType`         | Select a year and week      |



### Form Fields: Other Fields

| Type           | Description                         |
|:---------------|:------------------------------------|
| `CheckboxType` | A single checkbox field             |
| `FileType`     | A file upload field                 |
| `RadioType`    | A radio button field                |
| `HiddenType`   | A hidden field                      |



### Form Fields: Field Groups

| Type              | Description                                                |
|:------------------|:-----------------------------------------------------------|
| `CollectionType`  | A group of fields that can be added or removed             |
| `RepeatedType`    | A field that is repeated (e.g., password confirmation)     |



## Validation Attributes and Descriptions :  [Doc Symfony Validation](https://symfony.com/doc/current/validation.html)


### General Constraints
| Attribute                  | Description                                       |
|:---------------------------|:--------------------------------------------------|
| `#[Assert\NotBlank]`       | Value is not an empty string/array, false or null |
| `#[Assert\Blank]`          | Value is an empty string or null                  |
| `#[Assert\NotNull]`        | Value is not strictly equal to null               |
| `#[Assert\IsNull]`         | Value is exactly equal to null                    |
| `#[Assert\Type('string')]` | Value is of a specific type                       |

### Validation: Comparison Constraints  {.col-span-2}
| Attribute                           | Description                                       |
|:------------------------------------|:--------------------------------------------------|
| `#[Assert\<Not>EqualTo('Foo')]`     | Value is (not) equal to another value             |
| `#[Assert\<Not>IdenticalTo('Foo')]` | Value is (not) identical to another value         |
| `#[Assert\LessThan<OrEqual>(5)]`    | Value is less than (or equal to) another value    |
| `#[Assert\GreaterThan<OrEqual>(5)]` | Value is greater than (or equal to) another value |
| `#[Assert\Range(min: 2, max: 10)]`  | Number or DateTime object is within a range       |
 
### Validation: String Constraints  {.col-span-2}
| Attribute                          | Description                                           |
|:-----------------------------------|:------------------------------------------------------|
| `#[Assert\Length(2, 10)]`          | String is between `<min>` and `<max>` characters long |
| `#[Assert\Email]`                  | String is a valid email address                       |
| `#[Assert\Url]`                    | String is a valid URL                                 |
| `#[Assert\Hostname]`               | String is a valid hostname                            |
| `#[Assert\Ip]`                     | String is a valid IP address                          |
| `#[Assert\NoSuspiciousCharacters]` | String does not contain spoofing characters           |
| `#[Assert\Uuid]`                   | String is a valid UUID                                |
| `#[Assert\CssColor]`               | String is a valid CSS color                           |


### Validation: Date and Time Constraints
| Attribute            | Description                                       |
|:---------------------|:--------------------------------------------------|
| `#[Assert\Date]`     | Value is a valid date string in `Y-m-d` format    |
| `#[Assert\DateTime]` | Value is a valid datetime in the specified format |
| `#[Assert\Time]`     | Value is a valid time string in `H:i:s` format    |
| `#[Assert\Timezone]` | Value is a valid timezone identifier              |

### Validation: Password Constraints  {.col-span-2}
| Attribute                          | Description                                 |
|:-----------------------------------|:--------------------------------------------|
| `#[Assert\UserPassword]`           | String is the authenticated user's password |
| `#[Assert\NotCompromisedPassword]` | Password is not found in any data breaches  |
| `#[Assert\PasswordStrength]`       | Password has sufficient entropy             |

### Validation: Financial and Other Number Constraints
| Attribute              | Description                                      |
|:-----------------------|:-------------------------------------------------|
| `#[Assert\Bic]`        | Value is a valid Business Identifier Code (BIC)  |
| `#[Assert\CardScheme]` | Value is a valid credit card number              |
| `#[Assert\Currency]`   | Value is a valid 3-letter ISO 4217 currency code |
| `#[Assert\Luhn]`       | Value passes the Luhn algorithm                  |
| `#[Assert\Iban]`       | Value is a valid IBAN                            |
| `#[Assert\Isbn]`       | Value is a valid ISBN                            |


### Validation: File Constraints
| Attribute         | Description                                     |
|:------------------|:------------------------------------------------|
| `#[Assert\File]`  | Value is a valid file path or File object       |
| `#[Assert\Image]` | Same as File, but only accepts image MIME types |


### Validation: Number Constraints {.col-span-2}
| Attribute                    | Description                 |
|:-----------------------------|:----------------------------|
| `#[Assert\Positive<OrZero>]` | Value is positive (or zero) |
| `#[Assert\Negative<OrZero>]` | Value is negative (or zero) |


### Validation: Choice Constraints {.col-span-2}
| Attribute                            | Description                               |
|:-------------------------------------|:------------------------------------------|
| `#[Assert\Choice(['A', 'B', 'C'])]`  | Value is one of the specified choices     |
| `#[Assert\Country]`                  | Value is a valid ISO 3166-1 country code  |
| `#[Assert\Language]`                 | Value is a valid two-letter language code |
| `#[Assert\Locale]`                   | Value is a valid locale identifier        |


























