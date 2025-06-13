---
title: Vue
date: 2025-06-13 14:45:00
background: bg-[#43CF96]
tags:
  - vue
  - web
categories:
  - Programming
intro: |
  A Vue 3 cheat sheet with the most important concepts, reactivity, component system, routing, and more. Updated for the latest version and perfect for both beginners and advanced users.
plugins:
  - copyCode
  - runCode
---

## 📘 Vue.js 3 Cheatsheet – Beginner to Advanced

> The ultimate reference for mastering Vue 3.


## ⚙️ 1. Setup

### CDN (Quick Start)

```html
<script src="https://unpkg.com/vue@3"></script>
<div id="app">{{ message }}</div>
<script>
  Vue.createApp({
    data() {
      return { message: "Hello Vue!" };
    }
  }).mount("#app");
</script>
```
### Vite + Vue

```bash
npm create vite@latest my-vue-app --template vue
cd my-vue-app
npm install
npm run dev
```


## 🧠 2. App Structure

```
src/
├─ components/
├─ views/
├─ App.vue
├─ main.js
```


## 📦 3. Data, Methods, Template

```js
data() {
  return {
    count: 0,
    message: "Welcome!"
  };
},
methods: {
  increment() {
    this.count++;
  }
}
```

```html
<h1>{{ message }}</h1>
<button @click="increment">+</button>
```


## 🧰 4. Directives

| Directive       | Purpose                 |
| --------------- | ----------------------- |
| `v-bind` / `:`  | Bind attributes         |
| `v-model`       | Two-way binding         |
| `v-if / v-else` | Conditional rendering   |
| `v-show`        | Toggle visibility       |
| `v-for`         | List rendering          |
| `v-on` / `@`    | Event handling          |
| `v-slot`        | Named/Scoped slot usage |

### Example

```html
<input v-model="name" />
<p v-if="name">Hi, {{ name }}!</p>
<ul>
  <li v-for="item in list" :key="item.id">{{ item }}</li>
</ul>
```


## 🪝 5. Lifecycle Hooks

```js
created() {},
mounted() {},
updated() {},
unmounted() {}
```


## 🎯 6. Events

```html
<button @click="sayHi">Click</button>
<input @keyup.enter="submit" />
```


## 🔁 7. Computed & Watch

```js
computed: {
  reversed() {
    return this.message.split('').reverse().join('');
  }
},
watch: {
  count(newVal, oldVal) {
    console.log(`Count changed from ${oldVal} to ${newVal}`);
  }
}
```


## 🧱 8. Components

### Register + Use

```js
app.component("Greeting", {
  props: ["name"],
  template: `<h1>Hello, {{ name }}!</h1>`
});
```

```html
<Greeting name="Sumangal" />
```


## 🔗 9. Props & Emits

### Props

```js
props: {
  title: String,
  age: {
    type: Number,
    default: 18
  }
}
```

### Emit

```js
this.$emit("custom-event", payload);
```


## 🔄 10. v-model with Components

```js
props: ['modelValue'],
emits: ['update:modelValue']
```

```html
<input
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
/>
```


## ⚒ 11. Composition API

```js
import { ref, computed } from "vue";

export default {
  setup() {
    const count = ref(0);
    const double = computed(() => count.value * 2);

    const increment = () => count.value++;

    return { count, double, increment };
  }
};
```


## 🌐 12. Vue Router

```bash
npm install vue-router
```

### router.js

```js
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
```

### main.js

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router).mount("#app");
```


## 📦 13. Pinia (Vuex Alternative)

```bash
npm install pinia
```

### store/counter.js

```js
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
```

```js
const counter = useCounterStore();
counter.increment();
```


## 🎨 14. Slots

```html
<!-- Default -->
<slot></slot>

<!-- Named -->
<slot name="header"></slot>

<!-- Scoped -->
<slot :user="user"></slot>
```


## 🧪 15. Testing

### Vitest + Vue Test Utils

```bash
npm install vitest @vue/test-utils
```

```js
import { mount } from "@vue/test-utils";
import MyComponent from "@/components/MyComponent.vue";

test("renders", () => {
  const wrapper = mount(MyComponent);
  expect(wrapper.text()).toContain("Hello");
});
```


## 🧼 16. Best Practices

* Use `ref()` for primitives, `reactive()` for objects
* Use `<script setup>` syntax in SFCs
* Break UI into small, reusable components
* Always define `key` in `v-for`
* Use slots for flexible composition


## 🛠 17. Dev Tools

* 🧩 [Vue DevTools](https://devtools.vuejs.org/)
* 🧠 [Volar](https://github.com/vuejs/language-tools) for VSCode
* ⚡ [Vite](https://vitejs.dev) for fast dev environment


## 📚 18. Official Resources

* 📘 [Vue Docs](https://vuejs.org)
* 🧭 [Router Docs](https://router.vuejs.org)
* 📦 [Pinia Docs](https://pinia.vuejs.org)
* 🧪 [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html)

