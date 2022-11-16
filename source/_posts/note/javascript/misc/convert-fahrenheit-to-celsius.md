---
title: How to convert fahrenheit to celsius in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to convert fahrenheit to celsius only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
```

### Example

```js {.wrap}
fahrenheitToCelsius(59);    // 15
fahrenheitToCelsius(32);    // 0
```