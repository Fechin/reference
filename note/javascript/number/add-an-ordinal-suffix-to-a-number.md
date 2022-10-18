---
title: How to add an ordinal suffix to a number in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Number
layout: note
---



In this Article we will go through how to add an ordinal suffix to a number only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const addOrdinal = n => `${n}${['st', 'nd', 'rd'][((n + 90) % 100 - 10) % 10 - 1] || 'th'}`;
```
Parameters `n` is a position number.




### Or

```js {.wrap}
const addOrdinal = n => `${n}${[, 'st', 'nd', 'rd'][/1?.$/.exec(n)] || 'th'}`;
```

### Or

```js {.wrap}
const addOrdinal = n => `${n}${[, 'st', 'nd', 'rd'][n % 100 >> 3^1 && n % 10] || 'th'}`;
```

### Or

```js {.wrap}
const addOrdinal = n => `${n}${{one: 'st', two: 'nd', few: 'rd', other: 'th'}[new Intl.PluralRules('en', { type: 'ordinal' }).select(n)]}`;
```

### Example

```js {.wrap}
addOrdinal(1);      // '1st'
addOrdinal(2);      // '2nd'
addOrdinal(3);      // '3rd'
addOrdinal(11);     // '11th'
addOrdinal(12);     // '13th'
addOrdinal(13);     // '13th'
```