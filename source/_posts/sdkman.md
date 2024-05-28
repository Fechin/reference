---
title: SDKMAN!
date: 2023-12-18 20:25:30
background: bg-[#cf5e3c]
label:
tags:
  - command
  - software development kits
  - sdk
categories:
  - Linux Command
intro: |
  This cheatsheet provides the most commonly used SDKMAN! command line instructions
plugins:
  - copyCode
---

## Getting Started {.cols-2}

### Installing SDKMAN!

Download SDKMAN!

```shell script
$ curl -s "https://get.sdkman.io" | bash
```

Install SDKMAN!

```shell script
$ source "$HOME/.sdkman/bin/sdkman-init.sh"
```

Check the version

```shell script
$ sdk version
```

Update

```shell script
$ sdk update
```

Help

```shell script
$ sdk help
```

### Installing and managing candidates {.row-span-2}

List all candidates

```shell script
$ sdk list
```

List versions of a candidate

```shell script
$ sdk list <candidate>
```

Install a candidate with the latest version

```shell script
$ sdk install <candidate>
```

Install a candidate with specific version

```shell script
$ sdk install <candidate> <version>
```

Temporarily switch between versions

```shell script
$ sdk use <candidate> <version>
```

Permanently switch to version

```shell script
$ sdk default <candidate> <version>
```

Display specific candidate version in use

```shell script
$ sdk current <candidate>
```

Display all candidates versions in use

```shell script
$ sdk current
```

Remove a candidate

```shell script
$ sdk uninstall <candidate> <version>
```
