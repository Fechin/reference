---
title: How to format a date for the given locale in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Date Time
layout: note
---



In this Article we will go through how to format a date for the given locale only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const format = (date, locale) => new Intl.DateTimeFormat(locale).format(date);
```
Parameters `locale` is a locale (en-US, pt-BR, for example).


Parameters `date` is a `Date` object.




### Example

```js {.wrap}
format(new Date(), 'pt-BR');    // 06/05/2020
```