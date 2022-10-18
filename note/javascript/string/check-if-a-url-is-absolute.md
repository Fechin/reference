---
title: How to check if a url is absolute in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to check if a url is absolute only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const isAbsoluteUrl = url => /^[a-z][a-z0-9+.-]*:/.test(url);
```

### Example

```js {.wrap}
isAbsoluteUrl('https://1loc.dev');          // true
isAbsoluteUrl('https://1loc.dev/foo/bar');  // true
isAbsoluteUrl('1loc.dev');                  // false
isAbsoluteUrl('//1loc.dev');                // false
```