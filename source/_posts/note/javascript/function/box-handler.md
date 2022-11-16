---
title: How to box handler in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Function
layout: note
---



In this Article we will go through how to box handler only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const boxHandler = x => ({ next: f => boxHandler(f(x)), done: f => f(x) });
```

### Example

```js {.wrap}
const getPercentNumber = str => boxHandler(str).next(str => str.replace(/\%/, '')).next(str => parseFloat(str)).done(res => res * 0.01);

getPercentNumber('50%');    // 0.5

// Example 2
const getMoney = (price) => Number.parseFloat(price.replace(/\$/, ''));
const getPercent = (percent) => Number.parseFloat(percent.replace(/\%/)) * 0.01;

const getDiscountPrice = (price, discount) => boxHandler(getMoney(price)).done(cents => boxHandler(getPercent(discount)).next(save => cents - (cents * save))).done(res => res);

getDiscountPrice('$6.00', '20%');    // 4.8
```