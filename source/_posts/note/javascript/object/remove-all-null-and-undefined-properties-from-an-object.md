---
title: How to remove all null and undefined properties from an object in JavaScript
tags:
    - JavaScript
    - ES6
    - one-line
    - js
    - Object
layout: note
---



In this Article we will go through how to remove all null and undefined properties from an object only using single line of code in JavaScript.
This is a one-line JavaScript code snippet that uses one of the most popular ES6 features => `Arrow Function`.
<br/>
<br/>
Let's define this short function:

```js {.wrap}
const removeNullUndefined = obj => Object.entries(obj).reduce((a, [k, v]) => (v == null ? a : (a[k] = v, a)), {});
```

### Or

```js {.wrap}
const removeNullUndefined = obj => Object.entries(obj).filter(([_, v]) => v != null).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
```

### Or

```js {.wrap}
const removeNullUndefined = obj => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
```

### Example

```js {.wrap}
removeNullUndefined({
    foo: null,
    bar: undefined,
    fuzz: 42,
});                         // { fuzz: 42 }
```