---
title: Jest Cheat Sheet
date: 2022-09-09 00:00:00
background: bg-blue-500
description: A complete cheat sheet on  Jest for testing React applications effectively.
tags: React
  Testing
  Jest
categories:
  - Testing
intro:
  Jest is a JavaScript testing framework designed by Facebook. It works out of the box with modern
  JavaScript apps especially those built with React or Node.js. Its main goal is to simplify testing by providing all required features in one package test runner, assertion library, mocking, spies, coverage reports, and snapshot testing.
---

---

## A Quick Overview to Jest

Jest is a delightful JavaScript testing framework maintained by Facebook. It is widely used for **unit testing**, **integration testing**, and even **end-to-end testing** in modern JavaScript and Node.js applications. Jest comes with a powerful set of features, including a built-in test runner, assertion library, mocking utilities, snapshot testing, and test coverage reporting.

This guide targets **Jest v20** and gives a concise yet practical overview of how to use it effectively.

### Key Concepts Explained

- **`describe()`**: Used to group related test cases into a test suite.
- **`test()` / `it()`**: Define a single test case. `it()` is just a BDD-style alias for `test()`.
- **`expect()`**: Assertion library that checks whether a value meets expectations.
- **`beforeEach()` / `afterEach()`**: Runs code before or after every test in a suite.
- **`beforeAll()` / `afterAll()`**: Runs setup/teardown code once before or after all tests.
- **`.only` / `.skip`**: Focus or ignore specific tests/suites.
- **Snapshot testing**: Captures the rendered output and compares it across test runs.
- **Mock functions**: Simulate function behavior or monitor how functions are called.
- **Timer mocks**: Test time-based behavior like `setTimeout()` and `setInterval()`.
- **Async testing**: Write tests that handle Promises or `async/await`.

---

### 🚀 Quick Start

```bash
npm install --save-dev jest babel-jest
```

Add this to your `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Run your tests:

```bash
npm test -- --watch
```

📖 See: [Getting Started](https://jestjs.io/docs/getting-started)

---

## ✍️ Writing Tests

```js
describe('My work', () => {
  test('works', () => {
    expect(2).toEqual(2);
  });
});
```

- **describe**: Group related tests.
- **test** or **it**: Define individual test cases.
- **expect**: Make assertions.

🔄 `it()` is an alias for `test()`.

---

## 🔧 Setup Hooks

Use these for setup/teardown routines:

```js
beforeEach(() => { ... });
afterEach(() => { ... });
beforeAll(() => { ... });
afterAll(() => { ... });
```

---

## 🎯 Focusing or Skipping Tests

**Focusing tests:**

```js
describe.only(...);
it.only(...); // or fit()
```

**Skipping tests:**

```js
describe.skip(...);
it.skip(...); // or xit()
```

---

## 🏁 Optional CLI Flags

| Flag                  | Description                             |
| --------------------- | --------------------------------------- |
| `--coverage`          | Show test coverage summary              |
| `--detectOpenHandles` | Detect unclosed handles (e.g., sockets) |
| `--runInBand`         | Run tests serially (useful for CI)      |

---

## ✅ Expectations (Matchers)

### Basic

```js
expect(value).not.toBe(value);
expect(value).toEqual(value);
expect(value).toBeTruthy();
```

> Note: `toEqual` performs deep equality.

### Snapshots

```js
expect(value).toMatchSnapshot();
expect(value).toMatchInlineSnapshot();
```

> Inline snapshots require Prettier.

### Errors

```js
expect(fn).toThrow(error);
expect(fn).toThrowErrorMatchingSnapshot();
```

### Booleans

```js
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeTruthy();
expect(value).toBeUndefined();
expect(value).toBeDefined();
```

### Numbers

```js
expect(value).toBeCloseTo(number, digits);
expect(value).toBeGreaterThan(number);
expect(value).toBeLessThanOrEqual(number);
```

### Objects

```js
expect(value).toBeInstanceOf(Class);
expect(value).toMatchObject(obj);
expect(value).toHaveProperty('key', value);
```

### Arrays/Strings

```js
expect(value).toContain(item);
expect(value).toHaveLength(number);
expect(value).toMatch(/pattern/);
```

### Custom Matchers

```js
expect.extend(customMatchers);
expect.any(Constructor);
expect.assertions(1);
```

---

## ⏱️ Async Tests

### Promises

```js
test('resolves correctly', () => {
  return somePromise().then(data => {
    expect(data).toEqual(...);
  });
});
```

### Async/Await

```js
test('awaits correctly', async () => {
  const result = await asyncFunc();
  expect(result).toBe(...);
});
```

📖 See: [Jest Async Testing](https://jestjs.io/docs/asynchronous)

---

## 📸 Snapshot Testing

```js
it('renders correctly', () => {
  const output = something();
  expect(output).toMatchSnapshot();
});
```

For React components:

```js
import renderer from 'react-test-renderer';

it('matches snapshot', () => {
  const tree = renderer.create(<Component />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

---

## ⏲️ Timers

```js
jest.useFakeTimers();

it('delays call', () => {
  jest.runOnlyPendingTimers();
  jest.runAllTimers();
});
```

📖 See: [Timer Mocks](https://jestjs.io/docs/timer-mocks)

---

## 🧪 Mock Functions

### Creating Mocks

```js
const fn = jest.fn();
const squared = jest.fn((n) => n * n);
```

### Assertions

```js
expect(fn).toHaveBeenCalled();
expect(fn).toHaveBeenCalledTimes(2);
expect(fn).toHaveBeenCalledWith(arg1, arg2);
```

### Flexible Matchers

```js
expect(fn).toHaveBeenCalledWith(expect.any(String));
expect(fn).toHaveBeenCalledWith(expect.arrayContaining([1, 2]));
```

### Instances

```js
const MyClass = jest.fn();
const a = new MyClass();
const b = new MyClass();
MyClass.mock.instances; // [a, b]
```

### Call Data

```js
fn.mock.calls.length;
fn.mock.calls[0][0];
```

### Return Values

```js
jest.fn().mockReturnValue('hello');
jest.fn().mockReturnValueOnce('hi');
```

### Mock Implementations

```js
const fn = jest
  .fn()
  .mockImplementationOnce(() => 1)
  .mockImplementationOnce(() => 2);
```

---

This comprehensive guide helps you get started with Jest testing or use it like a pro. It pairs perfectly with the React Testing Library for a user-centric testing workflow.
