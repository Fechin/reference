---
title: How to get the base url without any parameters in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - String
layout: note
---



In this Article we will go through how to get the base url without any parameters only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const baseUrl = url => url.indexOf('?') === -1 ? url : url.slice(0, url.indexOf('?'));
```

### Or

```js {.wrap}
// Note that `includes` isn't supported in IE 11
const baseUrl = url => url.includes('?') ? url.slice(0, url.indexOf('?')) : url;
```

### Example

```js {.wrap}
baseUrl('https://domain.com/path/sub/path?foo=bar&hello=world');    // 'https://domain.com/path/sub/path'
```