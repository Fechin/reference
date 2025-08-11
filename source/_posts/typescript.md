---
title: TypeScript
date: 2024-05-28 22:12:25
background: bg-[#4476c0]
tags:
  - ts
  - web
categories:
  - Programming
intro: |
  A TypeScript cheat sheet with the most important concepts, functions, methods, and more. A complete quick reference for beginners.
plugins:
  - copyCode
  - runCode
---

## Getting Started

### Installing the Compiler

```shell
npm install typescript --save-dev
npm tsc
```

### Introduction

TypeScript is a superset of JavaScript that adds **static typing**, **interfaces**, and **compile-time error checking**. It compiles down to plain JavaScript.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Basic Types

```typescript
let age: number = 25;
let name: string = "Alice";
let isOnline: boolean = true;
let notSure: any = "Could be anything";
let nothingHere: null = null;
let notDefined: undefined = undefined;
let symbolValue: symbol = Symbol("unique");
let bigIntValue: bigint = 9007199254740991n;
```

### Arrays

```typescript
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana"];
let mixed: (string | number)[] = ["one", 2, "three"];
```

### Tuples

```typescript
let person: [string, number];
person = ["John", 30]; // ✅
person = [30, "John"]; // ❌ Error
```

### Enums

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;

enum Status {
  Success = "SUCCESS",
  Error = "ERROR"
}
```

### Type Aliases

```typescript
type ID = string | number;
let userId: ID = 123;

type Callback = () => void;
```

### Interfaces

```typescript
interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
  readonly id: number; // readonly
}

const user: User = { name: "Bob", age: 25, id: 1 };
```

### Extending Interfaces

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = { name: "Fido", breed: "Labrador" };
```

### Functions

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}

const add = (a: number, b: number): number => a + b;
```

### Optional & Default Parameters

```typescript
function log(message: string, userId?: string) {
  console.log(message, userId ?? "Guest");
}

function multiply(a: number, b: number = 2) {
  return a * b;
}
```

### Rest Parameters

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
```

### Function Overloads

```typescript
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
```

### Union & Intersection Types

```typescript
type Status = "success" | "error" | "loading";

type UserInfo = { name: string };
type AdminInfo = { admin: boolean };

type AdminUser = UserInfo & AdminInfo;
```

### Literal Types

```typescript
type Alignment = "left" | "center" | "right";
let align: Alignment = "left";
```

### Generics

```typescript
function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(42);
let str = identity("Hello");
```

### Generic Constraints

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}
```

### Generic Interfaces

```typescript
interface GenericIdentityFn<T> {
  (arg: T): T;
}

const myIdentity: GenericIdentityFn<number> = identity;
```

### Classes

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const alice = new Person("Alice");
alice.greet();
```

### Access Modifiers

```typescript
class Car {
  public brand: string;
  private speed: number;
  protected year: number;

  constructor(brand: string, speed: number, year: number) {
    this.brand = brand;
    this.speed = speed;
    this.year = year;
  }
}
```

### Abstract Classes

```typescript
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}
```

### Implements Interface

```typescript
interface Vehicle {
  start(): void;
}

class Bike implements Vehicle {
  start() {
    console.log("Bike starting...");
  }
}
```

### Type Assertions

```typescript
let someValue: unknown = "Hello TypeScript";
let strLength: number = (someValue as string).length;
```

### Nullish Coalescing

```typescript
let input: string | null = null;
let result = input ?? "Default";
```

### Optional Chaining

```typescript
const user = { profile: { name: "Alice" } };
console.log(user.profile?.name); // Alice
console.log(user.address?.street); // undefined
```

### Namespaces

```typescript
namespace Utils {
  export function log(msg: string) {
    console.log(msg);
  }
}

Utils.log("Hello");
```

### Modules

```typescript
// math.ts
export function add(a: number, b: number) {
  return a + b;
}

// app.ts
import { add } from "./math";
console.log(add(2, 3));
```

### Export Default

```typescript
// logger.ts
export default class Logger {
  log(msg: string) {
    console.log(msg);
  }
}

// main.ts
import Logger from "./logger";
const logger = new Logger();
logger.log("Info");
```

### Promises & Async/Await

```typescript
async function fetchData(): Promise<string> {
  return "Data loaded";
}

fetchData().then(console.log);
```

### Typing Async Functions

```typescript
interface User {
  id: number;
  name: string;
}

async function getUser(id: number): Promise<User> {
  // Simulate fetch
  return { id, name: "User" };
}
```

### Readonly & Record

```typescript
interface Config {
  readonly apiKey: string;
}

type Point = Record<"x" | "y", number>;
const origin: Point = { x: 0, y: 0 };
```

## Advanced Features

### Type Guards

```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

function process(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

### Index Signatures

```typescript
interface Dictionary {
  [key: string]: string;
}

const dict: Dictionary = { hello: "world" };
```

### Mapped Types

```typescript
type Flags = { [K in "option1" | "option2"]: boolean };
const flags: Flags = { option1: true, option2: false };
```

### Conditional Types

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type SafeString = NonNullable<string | null>; // string
```

### Unknown vs Any

```typescript
let value: unknown;
value = 5; // OK
// console.log(value.length); // Error

let anyValue: any;
anyValue = 5;
console.log(anyValue.length); // No error, but risky
```

### Never Type

```typescript
function throwError(msg: string): never {
  throw new Error(msg);
}
```

### Decorators (Experimental)

```typescript
function sealed(target: any) {
  Object.seal(target);
  Object.seal(target.prototype);
}

@sealed
class SealedClass {}
```

### Utility Types

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial
type PartialTodo = Partial<Todo>;

// Required
type RequiredTodo = Required<PartialTodo>;

// Pick
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit
type TodoWithoutDesc = Omit<Todo, "description">;

// ReturnType
function f() { return { x: 10, y: 3 }; }
type P = ReturnType<typeof f>;

// Parameters
type Params = Parameters<(a: number, b: string) => void>;
```

### Keyof and Typeof

```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

const person = { name: "Alice", age: 30 };
type PersonType = typeof person; // { name: string; age: number }
```

### Infer Keyword

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```

## Conditionals and Loops

### if Statement

```typescript
const max: number = 100;
if (max > 50) {
  console.log("Large");
}
```

### Ternary Operator

```typescript
const isEven: boolean = (10 % 2 === 0) ? true : false;
```

### Switch Statement

```typescript
const color: string = "red";
switch (color) {
  case "red":
    console.log("Stop");
    break;
  default:
    console.log("Go");
}
```

### For Loop

```typescript
for (let i: number = 0; i < 5; i++) {
  console.log(i);
}
```

### While Loop

```typescript
let count: number = 0;
while (count < 5) {
  console.log(count++);
}
```

### For...of Loop

```typescript
const arr: number[] = [1, 2, 3];
for (const num of arr) {
  console.log(num);
}
```

### For...in Loop

```typescript
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key);
}
```

## Arrays and Iterables

### Array Methods

```typescript
const nums: number[] = [1, 2, 3];

// Map
const doubled: number[] = nums.map(n => n * 2);

// Filter
const evens: number[] = nums.filter(n => n % 2 === 0);

// Reduce
const sum: number = nums.reduce((acc, curr) => acc + curr, 0);
```

### Readonly Arrays

```typescript
const readOnlyNums: ReadonlyArray<number> = [1, 2, 3];
// readOnlyNums.push(4); // Error
```

### Sets

```typescript
const set: Set<number> = new Set([1, 2, 3]);
set.add(4);
set.delete(1);
```

### Maps

```typescript
const map: Map<string, number> = new Map();
map.set("one", 1);
map.get("one"); // 1
```

## Objects

### Object Types

```typescript
const car: { type: string, mileage?: number } = {
  type: "Toyota"
};
```

### Indexable Types

```typescript
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["Bob", "Fred"];
```

### Excess Property Checks

```typescript
interface Square {
  color: string;
  width: number;
}

// const redSquare = { color: "red", width: 100, height: 100 }; // Error if strict
```

## Modules and Namespaces

### Namespace with Internal Modules

```typescript
namespace Geometry {
  export interface Point {
    x: number;
    y: number;
  }
  export function distance(p1: Point, p2: Point): number {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  }
}
```

### Module Resolution

// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}

## Error Handling

### Try Catch

```typescript
try {
  throw new Error("Oops");
} catch (e: unknown) {
  if (e instanceof Error) {
    console.log(e.message);
  }
}
```

### Custom Errors

```typescript
class CustomError extends Error {
  constructor(message: string) {
    super(message);
  }
}
```

## TypeScript with JavaScript Features

### Destructuring

```typescript
const [first, second]: [number, number] = [1, 2];
const { name: userName, age }: { name: string, age: number } = { name: "Alice", age: 30 };
```

### Spread Operator

```typescript
const arr1: number[] = [1, 2];
const arr2: number[] = [...arr1, 3, 4];
```

### Template Literals

```typescript
const greeting: string = `Hello, ${name}`;
```

### Arrow Functions

```typescript
const square = (x: number): number => x * x;
```
