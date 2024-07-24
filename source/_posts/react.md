---
title: React
date: 2023-11-17 10:12:25
background: bg-[#1289D8]
tags:
  - react
  - web
categories:
  - Programming
intro: |
  A React cheat sheet with the most important concepts, functions, methods, and more. A complete quick reference for beginners.
plugins:
  - copyCode
---

## Getting Started

### JSX

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

```javascript
let element = <h1>Hello, world!</h1>;

let emptyHeading = <h1 />;
```

### JSX Expressions

```javascript
let name = "Josh Perez";
let element = <h1>Hello, {name}</h1>;

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
let element = <h1>Hello, {fullName("Julie", "Johnson")}</h1>;
```

### JSX Attributes

```javascript
const element = <img src={user.avatarUrl} />;
const element = <button className="btn">Click me</button>;
```

### JSX Functions

```javascript
name() {
  return "Julie";
}

return (
  <h1>
    Hi {name()}!
  </h1>
)
```

### JSX Conditional Rendering {.col-span-2}

```javascript
import React from "react";
export default function Weather(props) {
  if (props.temperature >= 20) {
    return (
      <p>
        It is {props.temperature}°C (Warm) in {props.city}
      </p>
    );
  } else {
    return (
      <p>
        It is {props.temperature}°C in {props.city}
      </p>
    );
  }
}
```

Note: A component must always return something.

## Components

### Functional Component

```javascript
import React from "react";

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <div>Hello</div>
      <div>World</div>
    </div>
  );
}
```

Note: Every component needs one root element

### Embed an internal Component

```javascript
import React from "react";
import UserAvatar from "./UserAvatar";

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <UserAvatar />
      <UserAvatar />
    </div>
  );
}
```

Note: Assuming UserAvatar is declared in UserAvatar.js

### Embed an external Component

```javascript
import React from "react";
import ComponentName from "component-name";

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <ComponentName />
    </div>
  );
}
```

Note: External components are found on npmjs.com and need to be imported first.

### Advanced Functional Components

```javascript
import React from "react";

export default function Hello(props) {
  function fullName() {
    return `${props.firstName} ${props.lastName}`;
  }
  return <p>{fullName()}</p>;
}

<Hello firstName="Matt" lastName="Delac" />;
```

## Properties {.cols-2}

### Passing Properties to a Component

<!-- prettier-ignore -->
```javascript
<Student
  firstName="Julie"
  lastName="Johnson"
  age={23}
  pro={true}
/>
```

### Assigning the Properties from a Component

```javascript
import React from "react";

export default function Student(props) {
  return (
    <h1>
      {props.firstName} {props.lastName} is {props.age}.
    </h1>
  );
}
```

## States {.cols-1}

### React State

```javascript
import React, { useState } from "react";

export default function Hello(props) {
  let [name, setName] = useState("Julie");
  function updateName() {
    let newName = prompt("What is your name?");
    setName(newName);
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={updateName}>Update name</button>
    </div>
  );
}
```

## Events {.cols-1}

### Event Listener

```javascript
import React from "react";

export default function Hello() {
  function handleClick(event) {
    event.preventDefault();
    alert("Hello World");
  }

  return (
    <a href="/" onClick={handleClick}>
      Say Hi
    </a>
  );
}
```

Note: The most common event listeners are onClick for links/buttons and onSubmit for forms.

## Loops {.cols-2}

### Looping through an Array

```javascript
let elements = ["one", "two", "three"];

return (
  <ul>
    {elements.map(function (value, index) {
      return <li key={index}>{value}</li>;
    })}
  </ul>
);
```

Note: Each list item inside a map loop needs a key attribute with a unique value which is generally the index.

### Looping through an Array of Objects

```javascript
let elements = [
  {
    name: "one",
    value: 1,
  },
  {
    name: "two",
    value: 2,
  },
  {
    name: "three",
    value: 3,
  },
];
return (
  <ul>
    {elements.map(function (element, index) {
      return (
        <li key={index}>
          The value for {element.name} is {element.value}
        </li>
      );
    })}
  </ul>
);
```

Note: Each list item inside a map loop needs a key attribute with a unique value which is generally the index.

## Forms {.cols-1}

### React Forms

```javascript
import React, { useState } from "react";

export default function LoginForm() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Loging in with ${username} and ${password}`);
  }

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={updateUsername} />
      <input type="password" placeholder="Password" onChange={updatePassword} />
      <input type="submit" value="Login" />
    </form>
  );
}
```

## CSS {.cols-1}

### CSS in a React Component

```javascript
import React from "react";
import "./Student.css";

export default function Student() {
  return <div className="Student">Julie Johnson</div>;
}
```

Note: You'll then have to crate a css file called Student.css

## AJAX {.cols-1}

### AJAX Request with Axios

```javascript
import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response);
  }

  if (notifications) {
    return <p>notifications</p>;
  } else {
    let url = `https://notifications.com`;
    axios.get(url).then(handleResponse);
    return <p>Loading notifications..</p>;
  }
}
```

Note: Make sure to import Axios first to your project.

## Hooks {.cols-2}

### useState Hook

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

Note: The useState Hook is a built-in React Hook that allows functional components to manage local state. It provides a
way to declare state variables and update them within a functional component. Example code illustrating how to use it

### Multiple State Variable Declaration

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" />

      <label>
        <input type="checkbox" checked={isCompleted} onChange={toggleCompletion} />
        Completed
      </label>
    </div>
  );
}

export default Counter;
```

Note: You can declare multiple state variables using the useState Hook by calling it multiple times in a functional
component. Each call to useState manages a separate piece of state.

### Input State Management

```javascript
import { useState } from "react";

function FormExample() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
```

### useEffect Hook

```javascript
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Seconds: {seconds}</div>;
}

export default Timer;
```

Note: The useEffect Hook in React is used for performing side effects in functional components. It allows you to execute
code based on component lifecycle events like mounting, updating, and unmounting.

### Fetch API using useEffect

```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

Note: Make sure to import Axios first to your project.

### Custom Hook creation useLocalStorage

```javascript
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
```

Note: Custom Hooks are reusable functions in React that contain logic shared across multiple components. They allow you
to extract stateful logic from components into standalone functions.

### Creating Refs in Class Components
```javascript
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef.current); // Access the DOM element
  }

  render() {
    return <div ref={this.myRef}>Hello, world!</div>;
  }
}

export default MyComponent;
```

### Using Refs in Functional Components
```javascript

import React, { useRef, useEffect } from "react";

function MyComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    console.log(myRef.current); // Access the DOM element
  }, []);

  return <div ref={myRef}>Hello, world!</div>;
}

export default MyComponent;
```

### Callback Refs
```javascript

import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = null;
    this.setRef = element => {
      this.myRef = element;
    };
  }

  componentDidMount() {
    console.log(this.myRef); // Access the DOM element
  }

  render() {
    return <div ref={this.setRef}>Hello, world!</div>;
  }
}

export default MyComponent;
```

### Forwarding Refs
```javascript
Copy code
import React from "react";

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// Usage
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

### Accessing DOM Elements with Refs
### Refs are often used to access and interact with DOM elements directly. Here's an example where we focus an input element using a ref:

```javascript

import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}

export default FocusInput;
```

### Managing Focus with Refs
### You can also manage focus between multiple elements using refs:

```javascript

import React, { useRef } from "react";

function Form() {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      secondInputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={firstInputRef} type="text" onKeyDown={handleKeyDown} />
      <input ref={secondInputRef} type="text" />
    </div>
  );
}

export default Form;
```
