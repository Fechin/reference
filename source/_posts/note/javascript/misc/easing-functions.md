---
title: How to easing functions in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
layout: note
---



In this Article we will go through how to easing functions only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
// Some easing functions
// See https://gist.github.com/gre/1650294 and https://easings.net

const linear = t => t;

const easeInQuad = t => t * t;
const easeOutQuad = t => t * (2-t);
const easeInOutQuad = t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const easeInCubic = t => t * t * t;
const easeOutCubic = t => (--t) * t * t + 1;
const easeInOutCubic = t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

const easeInQuart = t => t * t * t * t;
const easeOutQuart = t => 1 - (--t) * t * t * t;
const easeInOutQuart = t => t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;

const easeInQuint = t => t * t * t * t * t;
const easeOutQuint = t => 1 + (--t) * t * t * t * t;
const easeInOutQuint = t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;

const easeInSine = t => 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2);
const easeOutSine = t => Math.sin(Math.PI / 2 * t);
const easeInOutSine = t => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;

const easeInElastic = t => (.04 - .04 / t) * Math.sin(25 * t) + 1;
const easeOutElastic = t => .04 * t / (--t) * Math.sin(25 * t);
const easeInOutElastic = t => (t -= .5) < 0 ? (.02 + .01 / t) * Math.sin(50 * t) : (.02 - .01 / t) * Math.sin(50 * t) + 1;
```