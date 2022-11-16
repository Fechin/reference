---
title: How to get the value of a param from a url in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to get the value of a param from a url only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const getParam = (url, param) => new URLSearchParams(new URL(url).search).get(param);
```

### Example

```js {.wrap}
getParam('http://domain.com?message=hello', 'message');     // 'hello'
```