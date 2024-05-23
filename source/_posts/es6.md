---
title: ES6
date: 2023-01-08 18:26:55
background: bg-[#edc545]
tags:
  - config
  - format
categories:
  - Programming
intro: |
  A quick reference cheatsheet of what's new in JavaScript for ES2015, ES2016, ES2017, ES2018 and beyond
plugins:
  - copyCode
---

## Getting Started

### Block-scoped {.row-span-2}

#### Let

```js{2,4}
function fn () {
  let x = 0
  if (true) {
    let x = 1 // only inside this `if`
  }
}
```

#### Const

```js
const a = 1;
```

`let` is the new `var`. Constants (`const`) work just like `let`, but cannot be reassigned. See:
[Let and const](https://babeljs.io/learn-es2015/#let--const)

### Template Strings {.row-span-2}

#### Interpolation

```js
const message = `Hello ${name}`;
```

#### Multi-line string

```js
const str = `
hello
the world
`;
```

Templates and multiline strings. See: [template strings](https://babeljs.io/learn-es2015/#template-strings)

### Binary and octal literals

```js
let bin = 0b1010010;
let oct = 0o755;
```

See: [Binary and Octal Literals](https://babeljs.io/learn-es2015/#binary-and-octal-literals)

### Exponential Operator

```js {1}
const byte = 2 ** 8;
```

Same as: Math.pow(2, 8)

### New library additions

#### New string methods

```js
"hello".repeat(3);
"hello".includes("ll");
"hello".startsWith("he");
"hello".padStart(8); // "hello"
"hello".padEnd(8); // "hello"
"hello".padEnd(8, "!"); // hello!!!
"\u1E9B\u0323".normalize("NFC");
```

#### New Number Methods

```js
Number.EPSILON;
Number.isInteger(Infinity); // false
Number.isNaN("NaN"); // false
```

#### New Math methods

```js
Math.acosh(3); // 1.762747174039086
Math.hypot(3, 4); // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2); // 2
```

#### New Array methods

```js
//return a real array
Array.from(document.querySelectorAll("*"));
//similar to new Array(...), but without the special single-argument behavior
Array.of(1, 2, 3);
```

See: [New library additions](https://babeljs.io/learn-es2015/#math--number--string--object-apis)

### kind

```js
class Circle extends Shape {
```

#### Constructor

```js {1}
constructor (radius) {
  this.radius = radius
}
```

#### method

```js {1}
getArea () {
  return Math.PI *2 *this.radius
}
```

#### Call the superclass method

```js {2}
expand(n) {
  return super.expand(n) *Math.PI
}
```

#### Static methods

```js {1}
static createFromDiameter(diameter) {
  return new Circle(diameter /2)
}
```

Syntactic sugar for prototypes. See: [classes](https://babeljs.io/learn-es2015/#classes)

### Private class

The javascript default field is public (`public`), if you need to indicate private, you can use (`#`)

```js
class Dog {
  #name;
  constructor(name) {
    this.#name = name;
  }
  printName() {
    // Only private fields can be called inside the class
    console.log(`Your name is ${this.#name}`);
  }
}

const dog = new Dog("putty");
//console.log(this.#name)
//Private identifiers are not allowed outside class bodies.
dog.printName();
```

#### Static private class

```js
class ClassWithPrivate {
  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}
```

## Promises

### make the commitment

```js {1}
new Promise((resolve, reject) => {
  if (ok) {
    resolve(result);
  } else {
    reject(error);
  }
});
```

for asynchronous programming. See: [Promises](https://babeljs.io/learn-es2015/#promises)

### Using Promises

```js{2,3}
promise
  .then((result) => { ··· })
  .catch((error) => { ··· })
```

### Using Promises in finally

```js {4}
promise
  .then((result) => { ··· })
  .catch((error) => { ··· })
  .finally(() => {
    /*logic independent of success/error */
  })
```

The handler is called when the promise is fulfilled or rejected

### Promise function

```js
Promise.all(···)
Promise.race(···)
Promise.reject(···)
Promise.resolve(···)
```

### Async-await

```js{2,3}
async function run () {
  const user = await getUser()
  const tweets = await getTweets(user)
  return [user, tweets]
}
```

`async` functions are another way to use functions. See:
[Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## Destructuring

### Destructuring assignment

#### Arrays

```js {1}
const [first, last] = ["Nikola", "Tesla"];
```

#### Objects

```js {1}
let { title, author } = {
  title: "The Silkworm",
  author: "R. Galbraith",
};
```

Supports matching arrays and objects. See: [Destructuring](https://babeljs.io/learn-es2015/#destructuring)

### Defaults

```js
const scores = [22, 33];
const [math = 50, sci = 50, arts = 50] = scores;
```

---

```js
//Result:
//math === 22, sci === 33, arts === 50
```

A default value can be assigned when destructuring an array or object

### Function parameters

```js {1}
function greet({ name, greeting }) {
  console.log(`${greeting}, ${name}!`);
}
```

---

```js
greet({ name: "Larry", greeting: "Ahoy" });
```

Destructuring of objects and arrays can also be done in function parameters

### Defaults

```js {1}
function greet({ name = "Rauno" } = {}) {
  console.log(`Hi ${name}!`);
}
```

---

```js
greet(); // Hi Rauno!
greet({ name: "Larry" }); // Hi Larry!
```

### Reassign keys

```js {1}
function printCoordinates({ left: x, top: y }) {
  console.log(`x: ${x}, y: ${y}`);
}
```

---

```js
printCoordinates({ left: 25, top: 90 });
```

This example assigns `x` to the value of the `left` key

### Loop

```js {1}
for (let {title, artist} of songs) {
  ···
}
```

Assignment expressions also work in loops

### Object Deconstruction

```js {1}
const { id, ...detail } = song;
```

Use the `rest(...)` operator to extract some keys individually and the rest of the keys in the object

## Spread Operator {.cols-2}

### Object Extensions

#### with object extensions

```js {2}
const options = {
  ...defaults,
  visible: true,
};
```

#### No object extension

```js
const options = Object.assign({}, defaults, { visible: true });
```

The object spread operator allows you to build new objects from other objects. See:
[Object Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

### Array Expansion

#### with array extension

```js{2,3}
const users = [
  ...admins,
  ...editors,
  'rstacruz'
]
```

#### No array expansion

```js
const users = admins.concat(editors).concat(["rstacruz"]);
```

The spread operator allows you to build new arrays in the same way. See:
[Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Functions

### Function parameters {.row-span-3}

#### Default parameters

```js {1}
function greet(name = "Jerry") {
  return `Hello ${name}`;
}
```

#### Rest parameters

```js {1}
function fn(x, ...y) {
  // y is an array
  return x * y.length;
}
```

#### Extensions

```js {1}
fn(...[1, 2, 3]);
//same as fn(1, 2, 3)
```

Default (default), rest, spread (extension). See:
[function parameters](https://babeljs.io/learn-es2015/#default--rest--spread)

### Arrow function {.row-span-3}

#### Arrow functions

```js {1}
setTimeout(() => {
  ···
})
```

#### with parameters

```js {1}
readFile('text.txt', (err, data) => {
  ...
})
```

#### implicit return

```js{1,4,5,6}
arr.map(n => n*2)
//no curly braces = implicit return
//Same as: arr.map(function (n) { return n*2 })
arr.map(n => ({
  result: n*2
}))
//Implicitly returning an object requires parentheses around the object
```

Like a function, but preserves `this`. See: [Arrow functions](https://babeljs.io/learn-es2015/#arrows-and-lexical-this)

### Parameter setting default value

```js
function log(x, y = "World") {
  console.log(x, y);
}

log("Hello"); // Hello World
log("Hello", "China"); // Hello China
log("Hello", ""); // Hello
```

### Used in conjunction with destructuring assignment defaults

```js
function foo({ x, y = 5 } = {}) {
  console.log(x, y);
}

foo(); // undefined 5
```

### name attribute

```js
function foo() {}
foo.name; // "foo"
```

### length property

```js
function foo(a, b) {}
foo.length; // 2
```

## Objects

### Shorthand Syntax

```js
module.exports = { hello, bye };
```

same below:

```js
module.exports = {
  hello: hello,
  bye: bye,
};
```

See: [Object Literals Enhanced](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### method

```js {2}
const App = {
  start() {
    console.log("running");
  },
};
//Same as: App = { start: function () {···} }
```

See: [Object Literals Enhanced](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### Getters and setters

```js{2,5}
const App = {
  get closed () {
    return this.status === 'closed'
  },
  set closed (value) {
    this.status = value ? 'closed' : 'open'
  }
}
```

See: [Object Literals Enhanced](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### Computed property name

```js {3}
let event = "click";
let handlers = {
  [`on${event}`]: true,
};
//Same as: handlers = { 'onclick': true }
```

See: [Object Literals Enhanced](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### Extract value

```js{3,5}
const fatherJS = { age: 57, name: "Zhang San" }
Object.values(fatherJS)
//[57, "Zhang San"]
Object.entries(fatherJS)
//[["age", 57], ["name", "Zhang San"]]
```

## Modules module

### Imports import

```js
import "helpers";
//aka: require('···')
```

---

```js
import Express from "express";
//aka: const Express = require('···').default || require('···')
```

---

```js
import { indent } from "helpers";
//aka: const indent = require('···').indent
```

---

```js
import * as Helpers from "helpers";
//aka: const Helpers = require('···')
```

---

```js
import { indentSpaces as indent } from "helpers";
//aka: const indent = require('···').indentSpaces
```

`import` is the new `require()`. See: [Module imports](https://babeljs.io/learn-es2015/#modules)

### Exports export

```js
export default function () { ··· }
//aka: module.exports.default = ···
```

---

```js
export function mymethod () { ··· }
//aka: module.exports.mymethod = ···
```

---

```js
export const pi = 3.14159;
//aka: module.exports.pi = ···
```

---

```js
const firstName = "Michael";
const lastName = "Jackson";
const year = 1958;
export { firstName, lastName, year };
```

---

```js
export * from "lib/math";
```

`export` is the new `module.exports`. See: [Module exports](https://babeljs.io/learn-es2015/#modules)

### `as` keyword renaming

```js{2,8,12-14}
import {
  lastName as surname // import rename
} from './profile.js';

function v1() { ... }
function v2() { ... }

export { v1 as default };
//Equivalent to export default v1;

export {
  v1 as streamV1, // export rename
  v2 as streamV2, // export rename
  v2 as streamLatestVersion // export rename
};
```

### Dynamically load modules

```js
button.addEventListener("click", (event) => {
  import("./dialogBox.js")
    .then((dialogBox) => {
      dialogBox.open();
    })
    .catch((error) => {
      /*Error handling */
    });
});
```

[ES2020 Proposal](https://github.com/tc39/proposal-dynamic-import) introduce `import()` function

### import() allows module paths to be dynamically generated

```js
const main = document.querySelector("main");

import(`./modules/${someVariable}.js`)
  .then((module) => {
    module.loadPageInto(main);
  })
  .catch((err) => {
    main.textContent = err.message;
  });
```

### import.meta

[ES2020](https://github.com/tc39/proposal-import-meta) Added a meta property `import.meta` to the `import` command,
which returns the meta information of the current module

```js
new URL("data.txt", import.meta.url);
```

In the Node.js environment, `import.meta.url` always returns a local path, that is, a string of the `file:URL` protocol,
such as `file:/// home/user/foo.js`

### Import Assertions {.col-span-2}

#### static import

```js
import json from "./package.json" assert { type: "json" };
//Import all objects in the json file
```

#### Dynamic Import

```js
const json = await import("./package.json", { assert: { type: "json" } });
```

## Generators

### Generator function

```js
function* idMaker() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
```

---

```js
let gen = idMaker();
gen.next().value; // → 0
gen.next().value; // → 1
gen.next().value; // → 2
```

it's complicated. See: [Generators](https://babeljs.io/learn-es2015/#generators)

### For..of + iterator {.row-span-2}

```js
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0,
      cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur };
      },
    };
  },
};

for (var n of fibonacci) {
  // truncate sequence at 1000
  if (n > 1000) break;
  console.log(n);
}
```

For iterating over generators and arrays. See: [For..of iteration](https://babeljs.io/learn-es2015/#iterators--forof)

### Relationship with Iterator interface

```js
var gen = {};
gen[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...gen]; // => [1, 2, 3]
```

The `Generator` function is assigned to the `Symbol.iterator` property, so that the `gen` object has the `Iterator`
interface, which can be traversed by the `...` operator

### Symbol.iterator property

```js
function* gen() {
  /*some code */
}
var g = gen();

g[Symbol.iterator]() === g; // true
```

`gen` is a `Generator` function, calling it will generate a traverser object `g`. Its `Symbol.iterator` property, which
is also an iterator object generation function, returns itself after execution

## see also

- [Learn ES2015](https://babeljs.io/docs/en/learn/)_(babeljs.io)_
- [ECMAScript 6 Features Overview](https://github.com/lukehoban/es6features#readme) _(github.com)_
