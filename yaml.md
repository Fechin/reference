---
title: YAML
date: 2020-12-29 18:26:55
icon: icon-yaml
background: bg-gray-700
tags:
   - config
   - format
categories:
   - Programming
intro: |
    This is a quick reference cheat sheet for understanding and writing YAML format configuration files.
---

Getting started {.cols-3}
---------------

### Introduction
[YAML](https://yaml.org/) is a data serialisation language designed to be directly writable and readable by humans
- [Refcard](https://yaml.org/refcard.html) _(yaml.org)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/yaml/) _(learnxinyminutes.com)_
- [YAML lint](http://www.yamllint.com/) _(yamllint.com)_


### Scalar types {.row-span-2}
```yaml
n1: 1            # integer          
n2: 1.234        # float      

s1: 'abc'        # string        
s2: "abc"        # string           
s3: abc          # string           

b: false         # boolean type 

d: 2015-04-05    # date type
```
#### Equavalent JSON
```json {.wrap}
{
  "n1": 1,
  "n2": 1.234,
  "s1": "abc",
  "s2": "abc",
  "s3": "abc",
  "b": false,
  "d": "2015-04-05"
}
```
Use spaces to indent. There must be space between the element parts.





### Variables
```yaml
some_thing: &VAR_NAME foobar
other_thing: *VAR_NAME
```
#### Equavalent JSON
```json {.wrap}
{
  "some_thing": "foobar",
  "other_thing": "foobar"
}
```


### Sequence
```yaml
object:
  attributes:
    - a1
    - a2
    - a3
  methods: [getter, setter]
```
#### Equavalent JSON
```json {.wrap}
{
  "object": {
    "attributes": ["a1", "a2", "a3"],
    "methods": ["getter", "setter"]
 }
}
```

### Sequence of sequences
```yaml
my_sequences:
  - [1, 2, 3]
  - [4, 5, 6]
```
#### Equavalent JSON
```json {.wrap}
{
  "my_sequences": [
    [1, 2, 3], 
    [4, 5, 6]
  ]
}
```



### Comments
```yaml
# A single line comment example

# block level comment example
# comment line 1
# comment line 2
# comment line 3
```



### Multiline strings
```yaml
description: |
  hello
  world
```
#### Equavalent JSON
```json {.wrap}
{"description": "hello\nworld\n"}
```



### Folded text
```yaml
description: >
  hello
  world
```
#### Equavalent JSON
```json {.wrap}
{"description": "hello world\n"}
```



### Hashes
```yaml
jack:
  id: 1
  name: Franc
  salary: 5000
  hobby:
    - a
    - b
  loc: {country: "A", city: "A-A"}
```
#### Equavalent JSON
```json {.wrap}
{
  "jack": {
    "id": 1,
    "name": "Franc",
    "salary": 5000,
    "hobby": ["a", "b"],
    "loc": {
        "country": "A", "city": "A-A"
    }
  }
}
```



### Nested dictionaries
```yaml
Employee:
  id: 1
  name: "Franc"
  department:
    name: "Sales"
    depid: "11"
```
#### Equavalent JSON
```json {.wrap}
{
  "Employee": {
    "id": 1,
    "name": "Franc",
    "department": {
      "name": "Sales",
      "depid": "11"
    }
  }
}
```




### Sequence of dictionaries
```yaml
children:
  - name: Jimmy Smith
    age: 15
  - name: Jenny Smith
    age: 12
```
#### Equavalent JSON
```json {.wrap}
{
  "children": [
    {"name": "Jimmy Smith", "age": 15},
    {"name": "Jenny Smith", "age": 12}
  ]
}
```



### Set
```yaml
set1: !!set
  ? one
  ? two
set2: !!set {'one', "two"}
```
#### Equavalent JSON
```json {.wrap}
{
  "set1": {"one": null, "two": null},
  "set2": {"one": null, "two": null}
}
```



### Inheritance {.row-span-2}
```yaml
parent: &defaults
  a: 2
  b: 3

child:
  <<: *defaults
  b: 4
```
#### Equavalent JSON
```json {.wrap}
{
  "parent": {"a": 2, "b": 3},
  "child": {"a": 2, "b": 4}
}
```



### Reference {.row-span-2}
```yaml
values: &ref
  - These values
  - will be reused below
  
other_values:
  i_am_ref: *ref
```
#### Equavalent JSON
```json {.wrap}
{
  "values": [
    "These values",
    "will be reused below"
  ],
  "other_values": {
    "i_am_ref": [
      "These values",
      "will be reused below"
    ]
  }
}
```





### Documents
```yaml
---
document: this is doc 1
---
document: this is doc 2
...
```

