---
title: React.js
date: 2023-11-17 10:12:25
background: bg-[#1289D8]
tags:
    - react
    - web
categories:
  - Programming
intro: |
    A React.js cheat sheet with the most important concepts, functions, methods, and more. A complete quick reference for beginners.
plugins:
    - copyCode
---




Getting Started
------------

### JSX

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. 

```javascript
let element = <h1>Hello, world!</h1>;

let emptyHeading = <h1 />;
```


### JSX Expressions

```javascript
let name = 'Josh Perez';
let element = <h1>Hello, {name}</h1>;

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
let element = <h1>Hello, {fullName('Julie', 'Johnson')}</h1>
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


### JSX Conditional Rendering

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


Components
------------


### Functional Component

```javascript
import React from 'react';

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
import React from 'react';
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
import React from 'react';
import ComponentName from 'component-name';

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
  return (
    <p>
      {fullName()}
    </p>
  );
}


<Hello firstName="Matt" lastName="Delac" />
```


Properties
------------

### Passing Properties to a Component

```javascript
<Student 
firstName="Julie" 
lastName="Johnson" 
age={23} 
pro={true} />
```

### Assigning the Properties from a Component

```javascript
import React from "react";

export default function Student(props) {
  return (
    <h1>
      {props.firstName} {props.lastName} is {props.age}.
    </h1>
  )
}
```


States
------------

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
      <h1>
        {name}
      </h1>
      <button onClick={updateName}>
        Update name
      </button>
    </div>
  );
}
```


Events
------------

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


Loops
------------

### Looping through an Array

```javascript
let elements = ['one', 'two', 'three'];

return (
  <ul>
    {elements.map(function(value, index) {
      return <li key={index}>{value}</li>
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


Forms
------------

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


CSS
------------

### CSS in a React Component

```javascript
import React from "react";
import "./Student.css";

export default function Student() {
  return (
    <div className="Student">
      Julie Johnson
    </div>
  )
}
```
Note: You'll then have to crate a css file called Student.css


AJAX
------------

### AJAX Request with Axios

```javascript
import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response);
  }
  
  if (notifications) {
    return (
      <p>
        notifications
      </p>
    );
  } else {
    let url = `https://notifications.com`;
    axios.get(url).then(handleResponse);
    return <p>Loading notifications..</p>;
  }
}
```
Note: Make sure to import Axios first to your project.