---
title: How to convert url parameters to object in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to convert url parameters to object only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getUrlParams = query => Array.from(new URLSearchParams(query)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v}), {});
```

### Example

```js {.wrap}
getUrlParams(location.search);              // Get the parameters of the current URL

getUrlParams('foo=Foo&bar=Bar');            // { foo: "Foo", bar: "Bar" }

// Duplicate key
getUrlParams('foo=Foo&foo=Fuzz&bar=Bar');   // { foo: ["Foo", "Fuzz"], bar: "Bar" }
```