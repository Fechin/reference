---
title: Express
date: 2023-02-26 15:23:31
background: bg-[#edc545]
tags:
  - config
  - format
categories:
  - Programming
intro: |
  A quick reference cheatsheet for Express, a flexible and streamlined web framework for Node.js
plugins:
  - copyCode
---

## Getting Started

### Hello World {.row-span-2}

- "Create project, add `package.json` configuration

  ```bash
  $ mkdir myapp # create directory
  $ cd myapp    # enter the directory
  $ npm init -y # Initialize a configuration
  ```

- Install dependencies

  ```bash
  $ npm install express
  ```

- Entry file `index.js` add code:

  ```js
  const express = require("express");
  const app = express();
  const port = 3000;
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.listen(port, () => {
    console.log(`Listening port on ${port}`);
  });
  ```

- Run the application using the following command
  ```bash
  $ node index.js
  ```
  {.marker-timeline}

### express -h {.row-span-2}

```bash
Usage: express [options] [dir]
Options:
  -h, --help output usage information
      --version output version number
  -e, --ejs add ejs engine support
      --hbs add hbs engine support
      --pug add pug engine support
  -H, --hogan add hogan.js engine support
      --no-view No view engine generated
  -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (default jade)
  -c, --css <engine> add stylesheet <engine> support (less|stylus|compass|sass) (default css)
      --git add .gitignore
  -f, --force force non-empty directories
```

{.wrap-text}

Create a `myapp` project

```bash
$ express --view=pug myapp
# run the application
$ DEBUG=myapp:*npm start
```

### express()

| :-                     | :-                                                          |
| :--------------------- | :---------------------------------------------------------- |
| `express.json()`       | [#](http://expressjs.com/en/4x/api.html#express.json)       |
| `express.raw()`        | [#](http://expressjs.com/en/4x/api.html#express.raw)        |
| `express.Router()`     | [#](http://expressjs.com/en/4x/api.html#express.router)     |
| `express.static()`     | [#](http://expressjs.com/en/4x/api.html#express.static)     |
| `express.text()`       | [#](http://expressjs.com/en/4x/api.html#express.text)       |
| `express.urlencoded()` | [#](http://expressjs.com/en/4x/api.html#express.urlencoded) |

### Router

| :-                | :-                                                     |
| :---------------- | :----------------------------------------------------- |
| `router.all()`    | [#](http://expressjs.com/en/4x/api.html#router.all)    |
| `router.METHOD()` | [#](http://expressjs.com/en/4x/api.html#router.METHOD) |
| `router.param()`  | [#](http://expressjs.com/en/4x/api.html#router.param)  |
| `router.route()`  | [#](http://expressjs.com/en/4x/api.html#router.route)  |
| `router.use()`    | [#](http://expressjs.com/en/4x/api.html#router.use)    |

### Application

```js
var express = require("express");
var app = express();

console.dir(app.locals.title);
//=> 'My App'
console.dir(app.locals.email);
//=> 'me@myapp.com'
```

#### Attribute

| :-              | :-                                                                                        |
| :-------------- | :---------------------------------------------------------------------------------------- |
| `app.locals`    | Local variables in the application [#](http://expressjs.com/en/4x/api.html#app.locals)    |
| `app.mountpath` | Path pattern for mounting sub-apps [#](http://expressjs.com/en/4x/api.html#app.mountpath) |

#### Events

| :-      | :-                                                                                                                                                                   |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mount` | The child application is mounted on the parent application, and the event is triggered on the child application [#](http://expressjs.com/en/4x/api.html#app.onmount) |

#### Method

| :-                        | :-                                                         |
| :------------------------ | :--------------------------------------------------------- |
| `app.all()`               | [#](http://expressjs.com/en/4x/api.html#app.all)           |
| `app.delete()`            | [#](http://expressjs.com/en/4x/api.html#app.delete.method) |
| `app.disable()`           | [#](http://expressjs.com/en/4x/api.html#app.disable)       |
| `app.disabled()`          | [#](http://expressjs.com/en/4x/api.html#app.disabled)      |
| `app.enable()`            | [#](http://expressjs.com/en/4x/api.html#app.enable)        |
| `app.enabled()`           | [#](http://expressjs.com/en/4x/api.html#app.enabled)       |
| `app.engine()`            | [#](http://expressjs.com/en/4x/api.html#app.engine)        |
| `app.get(name)`           | [#](http://expressjs.com/en/4x/api.html#app.get)           |
| `app.get(path, callback)` | [#](http://expressjs.com/en/4x/api.html#app.get.method)    |
| `app.listen()`            | [#](http://expressjs.com/en/4x/api.html#app.listen)        |
| `app.METHOD()`            | [#](http://expressjs.com/en/4x/api.html#app.METHOD)        |
| `app.param()`             | [#](http://expressjs.com/en/4x/api.html#app.param)         |
| `app.path()`              | [#](http://expressjs.com/en/4x/api.html#app.path)          |
| `app.post()`              | [#](http://expressjs.com/en/4x/api.html#app.post.method)   |
| `app.put()`               | [#](http://expressjs.com/en/4x/api.html#app.put.method)    |
| `app.render()`            | [#](http://expressjs.com/en/4x/api.html#app.render)        |
| `app.route()`             | [#](http://expressjs.com/en/4x/api.html#app.route)         |
| `app.set()`               | [#](http://expressjs.com/en/4x/api.html#app.set)           |
| `app.use()`               | [#](http://expressjs.com/en/4x/api.html#app.use)           |

### Request

#### Attribute

| :-                  | :-                                                         |
| :------------------ | :--------------------------------------------------------- |
| `req.app`           | [#](http://expressjs.com/en/4x/api.html#req.app)           |
| `req.baseUrl`       | [#](http://expressjs.com/en/4x/api.html#req.baseUrl)       |
| `req.body`          | [#](http://expressjs.com/en/4x/api.html#req.body)          |
| `req.cookies`       | [#](http://expressjs.com/en/4x/api.html#req.cookies)       |
| `req.fresh`         | [#](http://expressjs.com/en/4x/api.html#req.fresh)         |
| `req.hostname`      | [#](http://expressjs.com/en/4x/api.html#req.hostname)      |
| `req.ip`            | [#](http://expressjs.com/en/4x/api.html#req.ip)            |
| `req.ips`           | [#](http://expressjs.com/en/4x/api.html#req.ips)           |
| `req.method`        | [#](http://expressjs.com/en/4x/api.html#req.method)        |
| `req.originalUrl`   | [#](http://expressjs.com/en/4x/api.html#req.originalUrl)   |
| `req.params`        | [#](http://expressjs.com/en/4x/api.html#req.params)        |
| `req.path`          | [#](http://expressjs.com/en/4x/api.html#req.path)          |
| `req.protocol`      | [#](http://expressjs.com/en/4x/api.html#req.protocol)      |
| `req.query`         | [#](http://expressjs.com/en/4x/api.html#req.query)         |
| `req.route`         | [#](http://expressjs.com/en/4x/api.html#req.route)         |
| `req.secure`        | [#](http://expressjs.com/en/4x/api.html#req.secure)        |
| `req.signedCookies` | [#](http://expressjs.com/en/4x/api.html#req.signedCookies) |
| `req.stale`         | [#](http://expressjs.com/en/4x/api.html#req.stale)         |
| `req.subdomains`    | [#](http://expressjs.com/en/4x/api.html#req.subdomains)    |
| `req.xhr`           | [#](http://expressjs.com/en/4x/api.html#req.xhr)           |

#### Method

| :-                       | :-                                                                              |
| :----------------------- | :------------------------------------------------------------------------------ |
| `req.accepts()`          | [#](http://expressjs.com/en/4x/api.html#req.accepts)                            |
| `req.acceptsCharsets()`  | [#](http://expressjs.com/en/4x/api.html#req.acceptsCharsets)                    |
| `req.acceptsEncodings()` | [#](http://expressjs.com/en/4x/api.html#req.acceptsEncodings)                   |
| `req.acceptsLanguages()` | [#](http://expressjs.com/en/4x/api.html#req.acceptsLanguages)                   |
| `req.get()`              | Get HTTP request header fields [#](http://expressjs.com/en/4x/api.html#req.get) |
| `req.is()`               | [#](http://expressjs.com/en/4x/api.html#req.is)                                 |
| `req.param()`            | [#](http://expressjs.com/en/4x/api.html#req.param)                              |
| `req.range()`            | [#](http://expressjs.com/en/4x/api.html#req.range)                              |

### Response

```js
app.get("/", function (req, res) {
  console.dir(res.headersSent); //false
  res.send("OK");
  console.dir(res.headersSent); //true
});
```

#### Attribute

| :-                | :-                                                       |
| :---------------- | :------------------------------------------------------- |
| `res.app`         | [#](http://expressjs.com/en/4x/api.html#res.app)         |
| `res.headersSent` | [#](http://expressjs.com/en/4x/api.html#res.headersSent) |
| `res.locals`      | [#](http://expressjs.com/en/4x/api.html#res.locals)      |

#### Method

| :-                  | :-                                                                                    |
| :------------------ | :------------------------------------------------------------------------------------ |
| `res.append()`      | [#](http://expressjs.com/en/4x/api.html#res.append)                                   |
| `res.attachment()`  | [#](http://expressjs.com/en/4x/api.html#res.attachment)                               |
| `res.cookie()`      | [#](http://expressjs.com/en/4x/api.html#res.cookie)                                   |
| `res.clearCookie()` | [#](http://expressjs.com/en/4x/api.html#res.clearCookie)                              |
| `res.download()`    | Prompt for files to download [#](http://expressjs.com/en/4x/api.html#res.download)    |
| `res.end()`         | end the response process [#](http://expressjs.com/en/4x/api.html#res.end)             |
| `res.format()`      | [#](http://expressjs.com/en/4x/api.html#res.format)                                   |
| `res.get()`         | [#](http://expressjs.com/en/4x/api.html#res.get)                                      |
| `res.json()`        | Send JSON response [#](http://expressjs.com/en/4x/api.html#res.json)                  |
| `res.jsonp()`       | Send a response with JSONP support [#](http://expressjs.com/en/4x/api.html#res.jsonp) |
| `res.links()`       | [#](http://expressjs.com/en/4x/api.html#res.links)                                    |
| `res.location()`    | [#](http://expressjs.com/en/4x/api.html#res.location)                                 |
| `res.redirect()`    | Redirect request [#](http://expressjs.com/en/4x/api.html#res.redirect)                |
| `res.render()`      | render view template [#](http://expressjs.com/en/4x/api.html#res.render)              |
| `res.send()`        | Send various types of responses [#](http://expressjs.com/en/4x/api.html#res.send)     |
| `res.sendFile()`    | Send a file as an octet stream [#](http://expressjs.com/en/4x/api.html#res.sendFile)  |
| `res.sendStatus()`  | [#](http://expressjs.com/en/4x/api.html#res.sendStatus)                               |
| `res.set()`         | [#](http://expressjs.com/en/4x/api.html#res.set)                                      |
| `res.status()`      | [#](http://expressjs.com/en/4x/api.html#res.status)                                   |
| `res.type()`        | [#](http://expressjs.com/en/4x/api.html#res.type)                                     |
| `res.vary()`        | [#](http://expressjs.com/en/4x/api.html#res.vary)                                     |

## Example

### Router {. row-span-2}

Called for any request passed to this router

```js
router.use(function (req, res, next) {
  //.. some logic here .. like any other middleware
  next();
});
```

will handle any request ending in `/events`

```js
//depends on where the router "use()"
router.get("/events", (req, res, next) => {
  //..
});
```

### Response

The `res` object represents the HTTP response sent by the `Express` application when it receives an HTTP request

```js
app.get("/user/:id", (req, res) => {
  res.send("user" + req.params.id);
});
```

### Request

A `req` object represents an `HTTP` request and has properties for the request query string, parameters, body, HTTP
headers, etc.

```js
app.get("/user/:id", (req, res) => {
  res.send("user" + req.params.id);
});
```

### res. end()

```js
res.end();
res.status(404).end();
```

End the response process. This method actually comes from the Node core, specifically the `response.end()` method of
`http.ServerResponse`

### res.json([body])

```js
res.json(null);
res.json({ user: "tobi" });
res.status(500).json({ error: "message" });
```

### app.all

```js
app.all("/secret", function (req, res, next) {
  console.log("access secret section...");
  next(); // Pass control to the next handler
});
```

### app.delete

```js
app.delete("/", function (req, res) {
  res.send("DELETE request to homepage");
});
```

### app.disable(name)

```js
app.disable("trust proxy");
app.get("trust proxy");
// => false
```

### app.disabled(name)

```js
app.disabled("trust proxy");
// => true

app.enable("trust proxy");
app.disabled("trust proxy");
// => false
```

### app.engine(ext, callback)

```js
var engines = require("consolidate");

app.engine("haml", engines.haml);
app.engine("html", engines.hogan);
```

### app.listen([port[, host[, backlog]]][, callback])

```js
var express = require("express");

var app = express();
app.listen(3000);
```

### Routing

```js
const express = require("express");
const app = express();

//Respond to "hello world" when making a GET request to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});
```

```js
// GET method routing
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

// POST method routing
app.post("/", (req, res) => {
  res.send("POST request to the homepage");
});
```

### Middleware

```js
function logOriginalUrl(req, res, next) {
  console.log("ReqURL:", req.originalUrl);
  next();
}

function logMethod(req, res, next) {
  console.log("Request Type:", req.method);
  next();
}

const log = [logOriginalUrl, logMethod];

app.get("/user/:id", log, (req, res, next) => {
  res.send("User Info");
});
```

### Using templates

```js
app.set("view engine", "pug");
```

Create a `Pug` template file named `index.pug` in the `views` directory with the following content

```pug
html
  the head
    title= title
  the body
    h1=message
```

Create a route to render the `index.pug` file. If the view engine property is not set, the extension of the view file
must be specified

```js
app.get("/", (req, res) => {
  res.render("index", {
    title: "Hey",
    message: "Hello there!",
  });
});
```
