---
title: FastAPI
date: 2025-06-07 18:40:00
background: bg-[#059669]
tags:
  - web
  - python
  - backend
categories:
  - Programming
intro: |
  A concise cheatsheet for FastAPI, a fast and modern web framework for building APIs with Python 3.7+.
plugins:
  - copyCode
---

## Getting Started {.cols-3}

### Install & Run

```bash
pip install fastapi uvicorn
uvicorn main:app --reload
```

### Hello World

```python
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello FastAPI"}
```

### CLI Run Hint

```bash
uvicorn main:app --reload
```

## Routing & Parameters {.cols-3}

### Path Parameter

```python
@app.get("/items/{id}")
def read(id: int):
    return {"id": id}
```

### Query Parameter

```python
@app.get("/search")
def find(q: str = "default"):
    return {"q": q}
```

### Optional Query

```python
@app.get("/filter")
def filter_data(limit: int = 10, active: bool = True):
    return {"limit": limit, "active": active}
```

## Request Body & Validation {.cols-3}

### Using Pydantic

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
```

### JSON Body

```python
@app.post("/items/")
def create(item: Item):
    return item
```

### Response Model

```python
@app.post("/items/", response_model=Item)
def create(item: Item):
    return item
```

## Forms, Files, Headers {.cols-3}

### Form Input

```python
from fastapi import Form

@app.post("/login")
def login(user: str = Form(...)):
    return {"user": user}
```

### File Upload

```python
from fastapi import UploadFile, File

@app.post("/upload")
def upload(f: UploadFile = File(...)):
    return {"filename": f.filename}
```

### Headers / Cookies

```python
from fastapi import Header, Cookie

@app.get("/info")
def info(ua: str = Header(None)):
    return {"UA": ua}
```

## Middleware & Dependency {.cols-2}

### Middleware

```python
@app.middleware("http")
async def log_req(req, call_next):
    res = await call_next(req)
    return res
```

### Dependency

```python
from fastapi import Depends

def auth(token: str = ""):
    if token != "xyz": raise HTTPException(401)
    return True

@app.get("/secure")
def secure(_: bool = Depends(auth)):
    return {"secure": True}
```

## Errors & JSON API {.cols-2}

### HTTP Error

```python
from fastapi import HTTPException

@app.get("/err")
def error():
    raise HTTPException(404, "Not Found")
```

### JSON API

```python
from fastapi import FastAPI

@app.get("/json")
def get_data():
    return {"status": "ok"}
```

## Templates & Static {.cols-2}

### Mount Static

```python
from fastapi.staticfiles import StaticFiles
app.mount("/static", StaticFiles(directory="static"), name="static")
```

### Jinja2 Support

```python
from fastapi.templating import Jinja2Templates
templates = Jinja2Templates("templates")
```

## Routers & Structure {.cols-2}

### Routers (Blueprints)

```python
from fastapi import APIRouter
router = APIRouter()

@router.get("/")
def admin():
    return {"admin": True}

app.include_router(router, prefix="/admin")
```

### Folder Layout

```bash
project/
├── main.py
├── static/
├── templates/
├── routers/
│   └── admin.py
└── models/
```

## Docs & Status {.cols-2}

### Built-in Docs

- Swagger: `/docs`
- ReDoc: `/redoc`

### Custom Status Code

```python
from fastapi import status

@app.post("/create", status_code=status.HTTP_201_CREATED)
def create():
    return {"msg": "Created"}
```
