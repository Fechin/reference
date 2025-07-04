---
title: 'React Testing Library Cheat Sheet'
date: 2022-09-09 00:00:00
background: bg-blue-500
tags:
  - react
  - testing
  - javascript
  - cheatsheet

categories:
  - Testing

intro: |
  When it comes to testing React apps manually, we can either choose to render individual component trees in a simplified test environment or run the complete app in a realistic browser environment (end-to-end testing). But for automated tests, React Testing Library (RTL) is recommended for its user-centric approach and maintainability.
plugins:
  - copyCode
---

## Introduction

React Testing Library is built on top of DOM Testing Library to test React components by querying and interacting with real DOM nodes, avoiding reliance on implementation details.

## Basic level

### 1. Purpose & Solution

RTL addresses maintainability by focusing on user-visible behavior:

- Tests run in actual DOM nodes.
- Queries mirror user interactions.
- `data-testid` as an escape hatch when needed.
- Encourages accessibility.

### 2. A basic component render test

**Component (App.js):**

```js
const title = 'Hello, World!';

function App() {
  return <div>{title}</div>;
}

export default App;
```

**Test (App.test.js):**

```js
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});
```

Add debug to inspect output:

```js
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    screen.debug();
  });
});
```

Output in console:

```html
<body>
  <div>
    <div>Hello, World!</div>
  </div>
</body>
```

### 3. Why use RTL vs Enzyme?

1. Tests based on user interactions, not internal APIs.
2. Improves maintainability after refactors.
3. Intuitive syntax (`getByText`, `getByAltText`, etc.).

### 4. Queries in RTL

```js
import { render, screen } from '@testing-library/react';

test('should show login form', () => {
  render(<Login />);
  const input = screen.getByLabelText('Username');
  // events & assertions
});
```

**Single element queries:**

- `getBy*`: throws if none found
- `queryBy*`: returns null if none
- `findBy*`: async Promise

**Multiple elements queries:**

- `getAllBy*`: throws if none
- `queryAllBy*`: returns \[] if none
- `findAllBy*`: async Promise array

### 5. Component tree testing level

- Test at user interaction level, not per individual child component unless needed.

## Intermediate level

### 1. Jest vs RTL

- **Jest**: Test runner & assertion library (`describe`, `test`, `expect`).
- **RTL**: DOM utilities for React; works within Jest (or other runners).

### 2. Mocking with MSW

```js
// fetch.test.jsx
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Fetch from '../fetch';

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) =>
    res(ctx.json({ greeting: 'hello there' }))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />);
  fireEvent.click(screen.getByText('Load Greeting'));
  await waitFor(() => screen.getByRole('heading'));
  expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  expect(screen.getByRole('button')).toBeDisabled();
});

test('handles server error', async () => {
  server.use(rest.get('/greeting', (req, res, ctx) => res(ctx.status(500))));
  render(<Fetch url="/greeting" />);
  fireEvent.click(screen.getByText('Load Greeting'));
  await waitFor(() => screen.getByRole('alert'));
  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
  expect(screen.getByRole('button')).not.toBeDisabled();
});
```

### 3. `render` options

```js
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders a message', () => {
  const table = document.createElement('table');
  const { container } = render(<TableBody {...props} />, {
    container: document.body.appendChild(table),
    baseElement: document.body,
    hydrate: true,
    legacyRoot: true,
    queries: {
      /* custom queries */
    }
  });
  expect(container).toBeInTheDocument();
});
```

### 4. `renderHook` usage

```js
import { renderHook } from '@testing-library/react';

test('returns logged in user', () => {
  const { result, rerender } = renderHook(
    ({ name } = {}) => useLoggedInUser(name),
    { initialProps: { name: 'Alice' } }
  );
  expect(result.current).toEqual({ name: 'Alice' });
  rerender({ name: 'Bob' });
  expect(result.current).toEqual({ name: 'Bob' });
});
```

## Advanced Level

### 1. Adding custom queries

```js
const dom = require('@testing-library/dom');
const { queryHelpers, buildQueries } = require('@testing-library/react');

// Override testId attribute
export const queryByTestId = queryHelpers.queryByAttribute.bind(
  null,
  'data-test-id'
);
export const queryAllByTestId = queryHelpers.queryAllByAttribute.bind(
  null,
  'data-test-id'
);
export function getAllByTestId(container, id, ...rest) {
  const els = queryAllByTestId(container, id, ...rest);
  if (!els.length)
    throw queryHelpers.getElementError(
      `No element with [data-test-id="${id}"]`,
      container
    );
  return els;
}
export function getByTestId(container, id, ...rest) {
  const els = getAllByTestId(container, id, ...rest);
  if (els.length > 1)
    throw queryHelpers.getElementError(
      `Multiple elements with [data-test-id="${id}"]`,
      container
    );
  return els[0];
}
```

Or using `buildQueries`:

```js
const queryAllByDataCy = (...args) =>
  queryHelpers.queryAllByAttribute('data-cy', ...args);
const [
  queryByDataCy,
  getAllByDataCy,
  getByDataCy,
  findAllByDataCy,
  findByDataCy
] = buildQueries(
  queryAllByDataCy,
  (c, v) => `Found multiple elements with data-cy="${v}"`,
  (c, v) => `Unable to find element with data-cy="${v}"`
);
```

### 2. Skipping auto cleanup

- Via CLI: `cross-env RTL_SKIP_AUTO_CLEANUP=true jest`
- Or add to Jest `setupFiles`: `import '@testing-library/react/dont-cleanup-after-each';`

### 3. Migrating from Enzyme

1. Install RTL & jest-dom.
2. Replace `shallow`/`mount` with `render` + `screen`.
3. Migrate tests incrementally.

### 4. Querying within elements

```js
import { render, within } from '@testing-library/react';

const { getByText } = render(<MyComponent />);
const section = getByText('messages');
const hello = within(section).getByText('hello');
```

### 5. Integration testing

```js
import { render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import nock from 'nock';
import App from '../App';

const REPOS = [{ name: 'repo1', description: '...' }];

beforeAll(() =>
  nock('https://api.github.com')
    .persist()
    .get('/users/alice/repos')
    .reply(200, REPOS)
);
afterEach(cleanup);

test('user sees public repos', async () => {
  render(<App />);
  userEvent.type(screen.getByPlaceholderText('Enter username'), 'alice');
  userEvent.click(screen.getByRole('button', { name: /submit/i }));
  await waitFor(() =>
    REPOS.forEach((r) => expect(screen.getByText(r.name)).toBeInTheDocument())
  );
  expect(screen.queryByText('Loading...')).toBeNull();
});
```

## Conclusion

This comprehensive cheat sheet covers basic to advanced RTL usage—rendering, querying, mocking, custom queries, and integration tests—to help you write robust, maintainable tests.
