---
title: Socket io
date: 27-06-2025
icon: icon-style
background: bg-[#1289D8]
tags:
  - socket io
  - web
categories:
  - Programming
intro: |
  Socket.IO is a JavaScript library for real-time web applications. It enables bi-directional, event-based communication between clients (typically browsers or native apps) and servers.
plugins:
  - copyCode
---

# Socket.IO Multi-Language Cheat Sheet (v4)

## Introduction

### Introduction

- [Socket.IO Official Website](https://socket.io/) _(socket.io)_
- [Socket.IO Documentation (v4.1)](https://socket.io/docs/v4/) _(socket.io)_
- [Socket.IO GitHub Repository](https://github.com/socketio/socket.io) _(github.com)_
- [Getting Started with Socket.IO (Chat App Tutorial)](https://socket.io/get-started/chat/) _(socket.io)_
- [FreeCodeCamp Socket.IO Tutorial](https://www.freecodecamp.org/news/socket-io-tutorial/) _(freecodecamp.org)_

## Installation / Setup

### Installation / Setup

**JavaScript (Node.js)**

```bash
npm install socket.io socket.io-client
```

**Python**

```bash
pip install python-socketio eventlet
# or
pip install python-socketio aiohttp
```

**Java**

```groovy
implementation 'io.socket:socket.io-client:2.0.1'
```

### Installation / Setup

**Swift (iOS)**

```ruby
pod 'Socket.IO-Client-Swift', '~> 16.0.1'
```

**C# (.NET)**

```powershell
Install-Package SocketIoClientDotNet
```

**React Native**

```bash
npm install socket.io-client
```

### Installation / Setup

**Go**

```bash
go get github.com/googollee/go-socket.io
```

**Rust**

```bash

cargo add socketio-client

```

---

## Connecting / Setup

### JavaScript (Browser Client then Node.js Server)

**Client**

```js
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');
```

**Server**

```js
const io = require('socket.io')(3000, {
  cors: { origin: '*' }
});
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
});
```

### Python (Client then Server)

**Client**

```python
import socketio
sio = socketio.Client()
sio.connect('http://localhost:3000')
```

**Server**

```python
import socketio, eventlet, flask

app = flask.Flask(__name__)
sio = socketio.Server(cors_allowed_origins='*')
app = socketio.WSGIApp(sio, app)

@sio.event
def connect(sid, environ):
    print('Client connected:', sid)

if __name__ == '__main__':
    eventlet.wsgi.server(eventlet.listen(('', 3000)), app)
```

### Java (Client then Server)

**Client**

```java
IO.Options opts = new IO.Options();
Socket socket = IO.socket("http://localhost:3000", opts);
socket.connect();
```

**Server**

```java
import io.socket.engineio.server.EngineIoServer;
import io.socket.server.SocketIoServer;

EngineIoServer engineIo = new EngineIoServer();
SocketIoServer io = new SocketIoServer(engineIo);
io.listen(3000);

io.on("connection", args -> {
    var client = args[0];
    System.out.println("Client connected: " + client.id());
});
```

### Swift (iOS Client then Server)

**Client**

```swift
let manager = SocketManager(
  socketURL: URL(string: "http://localhost:3000")!,
  config: [.log(true), .compress]
)
let socket = manager.defaultSocket
socket.connect()
```

**Server**
_Server setups in Swift are uncommon; usually Node.js or Python is used._

### C# (.NET Client then Server)

**Client**

```csharp
var socket = IO.Socket("http://localhost:3000");
socket.Connect();
```

**Server**

```csharp
using Fleck;
var server = new WebSocketServer("ws://0.0.0.0:3000");
server.Start(socket =>
{
    socket.OnOpen = () => Console.WriteLine("Client connected");
});
```

### React Native (Client)

**Client**

```js
import io from 'socket.io-client';
const socket = io('http://localhost:3000');
```

_(Server side same as JavaScript above.)_

### Go (Client then Server)

**Client**

```go
import "github.com/googollee/go-socket.io-client"
socket, err := gosocketio.Dial(
    gosocketio.GetUrl("localhost", 3000, false),
    transport.GetDefaultWebsocketTransport(),
)
```

**Server**

```go
import (
    "github.com/googollee/go-socket.io"
    "net/http"
)

server, _ := socketio.NewServer(nil)
server.OnConnect("/", func(s socketio.Conn) error {
    fmt.Println("Client connected:", s.ID())
    return nil
})
http.Handle("/socket.io/", server)
go http.ListenAndServe(":3000", nil)
```

### Rust (Client then Server)

**Client**

```rust
use socketio_client::ClientBuilder;

async fn run() -> Result<(), Box<dyn std::error::Error>> {
    let socket = ClientBuilder::new("http://localhost:3000")
        .transport("websocket")
        .connect()
        .await?;
    Ok(())
}
```

**Server**
_Rust server support is experimental; commonly use Node.js/Python servers._

---

## Emitting & Listening to Events

### JavaScript (Client then Server)

**Client**

```js
socket.emit('msg', 'Hi');
socket.on('reply', (data) => console.log('Reply:', data));
```

**Server**

```js
io.on('connection', (socket) => {
  socket.on('msg', (msg) => {
    console.log('Received:', msg);
    socket.emit('reply', 'Hello from server');
  });
});
```

### Python (Client then Server)

**Client**

```python
sio.emit('msg', 'Hi')

@sio.on('reply')
def on_reply(data):
    print('Reply:', data)
```

**Server**

```python
@sio.event
def msg(sid, data):
    print('Received:', data)
    sio.emit('reply', 'Hello from server', to=sid)
```

### Java (Client then Server)

**Client**

```java
socket.emit("msg", "Hi");
socket.on("reply", args -> System.out.println("Reply: " + args[0]));
```

**Server**

```java
io.on("connection", args -> {
    var client = args[0];
    client.on("msg", msgArgs -> {
        System.out.println("Received: " + msgArgs[0]);
        client.emit("reply", "Hello from server");
    });
});
```

### Swift (Client then Server)

**Client**

```swift
socket.emit("msg", "Hi")
socket.on("reply") { data, _ in
  print("Reply:", data[0])
}
```

**Server**
_Server side in Swift is rare; use Node.js/Python._

### C# (Client then Server)

**Client**

```csharp
socket.Emit("msg", "Hi");
socket.On("reply", data => Console.WriteLine("Reply: " + data));
```

**Server**

```csharp
socket.OnMessage = message =>
{
    Console.WriteLine("Received: " + message);
    socket.Send("reply", "Hello from server");
};
```

### Go (Client then Server)

**Client**

```go
socket.Emit("msg", "Hi")
socket.On("reply", func(msg string) {
    fmt.Println("Reply:", msg)
})
```

**Server**

```go
server.OnEvent("/", "msg", func(s socketio.Conn, msg string) {
    fmt.Println("Received:", msg)
    s.Emit("reply", "Hello from server")
})
```

### Rust (Client then Server)

**Client**

```rust
socket.emit("msg", Payload::String("Hi"));
socket.on("reply", |payload| println!("Reply: {:?}", payload));
```

**Server**
_Experimental; typically use Node.js/Python._

---

## Broadcasting & Rooms

### Client (All Languages)

- **Join a room:**

  ```js
  // JavaScript/Python/C#/etc.
  socket.emit('join', 'room1');
  socket.on('msg', (data) => console.log('Room message:', data));
  ```

### Server (All Languages)

- **Node.js**

  ```js
  io.on('connection', (socket) => {
    socket.on('join', (room) => {
      socket.join(room);
      io.to(room).emit('msg', 'Hello Room');
    });
  });
  ```

- **Python**

  ```python
  @sio.event
  def join(sid, room):
      sio.enter_room(sid, room)
      sio.emit('msg', 'Hello Room', room=room)
  ```

- **Go**

  ```go
  server.OnEvent("/", "join", func(s socketio.Conn, room string) {
      s.Join(room)
      server.BroadcastToRoom("/", room, "msg", "Welcome")
  })
  ```

---

## Disconnects & Errors

### Client (All Languages)

```js
socket.on('disconnect', (reason) => console.log('Disconnected:', reason));
socket.on('connect_error', (err) => console.error('Connection error:', err));
```

```python
@sio.event
def disconnect():
    print('Disconnected')

@sio.event
def connect_error(data):
    print('Connection error:', data)
```

```go
// Go client library varies; similar patterns apply.
```

### Server (All Languages)

```js
io.on('connection', (socket) => {
  socket.on('disconnect', (reason) =>
    console.log('Client disconnected:', reason)
  );
});
```

```go
server.OnDisconnect("/", func(s socketio.Conn, reason string) {
    fmt.Println("Client disconnected:", reason)
})
```

---

## Namespaces

### Client (All Languages)

```js
const adminSocket = io('/admin');
```

```python
sio.connect('http://localhost:3000/admin', namespaces=['/admin'])
```

### Server (All Languages)

```js
io.of('/admin').on('connection', (socket) => {
  console.log('Admin connected:', socket.id);
});
```

```go
server.Of("/admin").OnConnect(func(s socketio.Conn) {
  fmt.Println("Admin connected:", s.ID())
})
```

---

## Authentication (Basic Token)

### Client (All Languages)

```js
const socket = io('http://localhost:3000', {
  auth: { token: 'abc' }
});
```

```python
sio.connect('http://localhost:3000', auth={'token': 'abc'})
```

### Server (All Languages)

```js
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  token === 'abc' ? next() : next(new Error('Auth error'));
});
```

---

## Tips for Debugging & Logging

### Client

- Log events:

  ```js
  socket.onAny((event, ...args) => console.log(event, args));
  ```

- Inspect network in browser devtools.

### Server

- **JavaScript**

  ```bash
  DEBUG=socket.io* node server.js
  ```

- **Python**

  ```python
  import logging
  logging.getLogger('socketio').setLevel(logging.DEBUG)
  ```

- **Go**
  Print handler errors and use middleware for structured logs.

---

## Advanced Features

### Middleware

**Client**
_(Rarely needed)_

**Server**

```js
io.use((socket, next) => {
  console.log('Middleware:', socket.id);
  next();
});
```

```go
server.Use(func(s socketio.Conn, next func()) {
  fmt.Println("Middleware triggered:", s.ID())
  next()
})
```

### Binary Streaming

**Client**

```js
fetch('/file')
  .then((res) => res.arrayBuffer())
  .then((buf) => socket.emit('file', buf));
```

**Server**

```go
server.OnEvent("/", "file", func(s socketio.Conn, data []byte) {
    ioutil.WriteFile("upload", data, 0644)
})
```

---

## Best Practices

# Implement reconnection with exponential backoff on the client.

# Sanitize and validate all data on both sides.

# Use TLS in production and rotate authentication tokens frequently.

# Separate concerns with namespaces and rooms.

# Throttle high-frequency events and enable compression where possible.

> Official docs: [https://socket.io/docs/v4/](https://socket.io/docs/v4/)
