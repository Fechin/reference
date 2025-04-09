---
title: Svelte
date: 2025-04-08 19:45:00
background: bg-[#FF3E00]
tags:
  - svelte
  - web
categories:
  - Programming
intro: |
  A Svelte cheat sheet with the most important concepts, functions, reactivity, and more. A complete quick reference for beginners, updated for Svelte 5.
plugins:
  - copyCode
  - runCode
---

## Getting Started

### Basic Syntax

```js
<script>
  let name = 'world';
</script>

<h1>Hello {name}!</h1>
```

### Expressions

```js
<script>
  let firstName = "Zehan";
  let lastName = "Khan";

  function fullName() {
    return `${firstName} ${lastName}`;
  }
</script>

<h1>Hello {fullName()}!</h1>
```

### Attributes

```js
<script>
  let avatarUrl = 'https://example.com/avatar.png';
</script>

<img src={avatarUrl} alt="Avatar" />
<button class="btn">Click me</button>
```

### Functions in Markup

```js
<script>
  function name() {
    return "Zehan";
  }
</script>

<h1>Hi {name()}!</h1>
```

### Conditional Rendering {.col-span-2}

```js
<script>
  let temperature = 24;
  let city = "New York";
</script>

{#if temperature >= 20}
  <p>It is {temperature}°C (Warm) in {city}</p>
{:else}
  <p>It is {temperature}°C in {city}</p>
{/if}
```

Note: Svelte components must always return a root element or content.

## Components

### Functional Component

```js
<script>
  export let name = "User";
</script>

<div class="UserProfile">
  <div>Hello</div>
  <div>{name}</div>
</div>
```

### Embed an internal Component

```js
<script>
  import UserAvatar from './UserAvatar.svelte';
</script>

<div class="UserProfile">
  <UserAvatar />
  <UserAvatar />
</div>
```

### Embed an external Component

```js
<script>
  import ComponentName from 'some-library';
</script>

<div class="UserProfile">
  <ComponentName />
</div>
```

Note: External components should be installed via npm first.

### Advanced Functional Components

```js
<script>
  export let firstName;
  export let lastName;

  function fullName() {
    return `${firstName} ${lastName}`;
  }
</script>

<p>{fullName()}</p>
```

## Properties {.cols-2}

### Passing Properties to a Component

```js
<Student
  firstName="Zehan"
  lastName="Khan"
  age={23}
  pro={true}
/>
```

### Assigning the Properties from a Component

```js
<script>
  export let firstName;
  export let lastName;
  export let age;
</script>

<h1>{firstName} {lastName} is {age}.</h1>
```

## State {.cols-1}

### Local State

```js
<script>
  let name = "Zehan";

  function updateName() {
    name = prompt("What is your name?") || name;
  }
</script>

<h1>{name}</h1>
<button on:click={updateName}>Update name</button>
```

## Events {.cols-1}

### Event Listener

```js
<script>
  function handleClick(event) {
    event.preventDefault();
    alert("Hello World");
  }
</script>

<a href="#" on:click|preventDefault={handleClick}>
  Say Hi
</a>
```

Note: The most common event listeners are `on:click` and `on:submit`.

## Loops {.cols-2}

### Looping through an Array

```js
<script>
  let elements = ["one", "two", "three"];
</script>

<ul>
  {#each elements as value, index}
    <li>{value}</li>
  {/each}
</ul>
```

### Looping through an Array of Objects

```js
<script>
  let elements = [
    { name: "one", value: 1 },
    { name: "two", value: 2 },
    { name: "three", value: 3 }
  ];
</script>

<ul>
  {#each elements as element, index}
    <li>
      The value for {element.name} is {element.value}
    </li>
  {/each}
</ul>
```

## Forms {.cols-1}

### Form Example

```js
<script>
  let username = "";
  let password = "";

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Logging in with ${username} and ${password}`);
  }
</script>

<form on:submit={handleSubmit}>
  <input type="text" placeholder="Username" bind:value={username} />
  <input type="password" placeholder="Password" bind:value={password} />
  <input type="submit" value="Login" />
</form>
```

## CSS {.cols-1}

### Scoped CSS

```js
<style>
  .student {
    color: blue;
  }
</style>

<div class="student">Zehan Khan</div>
```

## Fetching Data {.cols-1}

### Fetching Data with onMount

```js
<script>
  import { onMount } from 'svelte';
  let notifications = [];
  let loading = true;

  onMount(async () => {
    const res = await fetch("https://notifications.com");
    notifications = await res.json();
    loading = false;
  });
</script>

{#if loading}
  <p>Loading notifications...</p>
{:else}
  <ul>
    {#each notifications as note}
      <li>{note.title}</li>
    {/each}
  </ul>
{/if}
```

Note: Use `onMount` for side effects like API calls.

## Lifecycle Hooks {.cols-1}

### onMount
```js
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('Component mounted');
  });
</script>
```

### beforeUpdate
```js
<script>
  import { beforeUpdate } from 'svelte';

  beforeUpdate(() => {
    console.log('Before component updates');
  });
</script>
```

### afterUpdate
```js
<script>
  import { afterUpdate } from 'svelte';

  afterUpdate(() => {
    console.log('After component updates');
  });
</script>
```

### onDestroy
```js
<script>
  import { onDestroy } from 'svelte';

  onDestroy(() => {
    console.log('Component destroyed');
  });
</script>
```
Note: Svelte lifecycle functions are similar to React Hooks, but they are imported individually and used directly in the `<script>` block.


## More Svelte Features {.cols-1}

### Derived Store

```js
// store.js
import { writable, derived } from 'svelte/store';

export const count = writable(0);
export const double = derived(count, $count => $count * 2);
```

```js
// App.svelte
<script>
  import { count, double } from './store.js';
</script>

<p>Count: {$count}</p>
<p>Double: {$double}</p>
```

### Readable Store

```js
import { readable } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});
```

### Reactive Declarations

```js
<script>
  let a = 2;
  let b = 3;
  $: sum = a + b;
</script>

<p>{sum}</p>
```

### Reactive Statements with Side Effects

```js
<script>
  let name = 'Zehan';

  $: console.log('Name changed to', name);
</script>
```

### Bind to DOM Properties

```js
<script>
  let text = '';
</script>

<textarea bind:value={text} />
<p>{text.length} characters</p>
```

### Bind Grouped Inputs (Radio, Checkbox)

```js
<script>
  let selected = 'apple';
</script>

<label><input type="radio" bind:group={selected} value="apple" /> Apple</label>
<label><input type="radio" bind:group={selected} value="orange" /> Orange</label>
<p>Selected: {selected}</p>
```

### Class and Style Directives

```js
<script>
  let isActive = true;
</script>

<div class:active={isActive}>Toggle me</div>
```

```js
<script>
  let size = 16;
</script>

<p style:font-size={`${size}px`}>Resizable text</p>
```

### Await Blocks

```js
<script>
  let userPromise = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json());
</script>

{#await userPromise}
  <p>Loading...</p>
{:then user}
  <p>{user.name}</p>
{:catch error}
  <p>Error: {error.message}</p>
{/await}
```

### SSR with SvelteKit (Basic Example)

```js
// +page.server.js
export async function load({ fetch }) {
  const res = await fetch('/api/data');
  const data = await res.json();
  return { data };
}
```

```js
// +page.svelte
<script>
  export let data;
</script>

<h1>{data.title}</h1>
```

Note: Requires SvelteKit setup for SSR routes.

