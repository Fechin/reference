---
title: Taskset
date: 2023-04-07 14:25:44
background: bg-[#8bbb55]
tags:
  - process
  - process manager
categories:
  - Linux Command
intro:
  The taskset command is used to set or retrieve the CPU affinity of a running process given its pid, or to launch a new
  command with a given CPU affinity.
plugins:
  - copyCode
---

## Getting Started {.cols-3}

### Usage

The default behavior is to run a new command with a given affinity mask

```shell
$ taskset [mask] [command] [arguments]
```

#### Usage #2

```shell
$ taskset -p [pid]
```

---

```shell
$ taskset -p [mask] [pid]
```

You can also retrieve the CPU affinity of an existing task

### Common Options {.col-span-2}

| Command | Alternavite | Meaning                                                                                                                                                  |
| ------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-a`    | --all-tasks | Set or retrieve the CPU affinity of all the task (threads) for a given PID.                                                                              |
| `-c`    | --cpu-list  | Interpret mask as numerical list of processors instead of a bitmask.</br>Numbers are separated by commas and may include ranges. For example: `0,5,8-11` |
| `-p`    | --pid       | Operate on an existing PID and do not launch a new task.                                                                                                 |
| `-h`    | --help      | Display help text and exit.                                                                                                                              |
| `-v`    | --version   | Print version and exit.                                                                                                                                  |

{.show-header}

## Example

### View CPU Affinity

```shell
$ taskset -cp 29523
pid 29523's current affinity list: 0-15
```

That mean process with PID `29523` is active on CPU range from `[0,1,...,15]` which means `16` total.

**PID**: Process Identifier - is a unique numerical identifier given to each running process, you can view PID of
processes in `top` or `htop` tools

_If you run the above command but get the message `bad usage`, try with PID = 1_

```shell
$ taskset -cp 1
```

### Set CPU Affinity

Now let's try to set process in to a specify CPU. For example, we have a process has PID = 14846

Let's see the CPU affinity list of this process first:

```shell
$ taskset -cp 14846
pid 14846's current affinity list: 0-15
```

#### Change CPU affinity to 1:

```shell
$ taskset -cp 1 14846
pid 14846's current affinity list: 0-15
pid 14846's new affinity list: 1
```

As we see, CPU affinity was changed

### Set CPU Affinity with multiple value

That mean new CPU affinity list is `[0,1,2,3]`

```shell
$ taskset -cp 0-3 14846
pid 14846's current affinity list: 1
pid 14846's new affinity list: 0-3
```

You can set single CPU with the following command:

```shell
$ taskset -cp 5,8,12 14846
pid 14846's current affinity list: 0-3
pid 14846's new affinity list: 5,8,12
```

That mean new CPU affinity list is `[5,8,12]`

### Other

You can set affinity by range with other like a specify CPU

```shell
$ taskset -cp 1-3,12 14846
```

Or

```shell
$ taskset -cp 1-6:2 14846
```

The suffix ":N" specifies stride in the range, for example 0-10:3 is interpreted as 0,3,6,9 list.

## Also see

[taskset — Linux manual page](https://man7.org/linux/man-pages/man1/taskset.1.html) _(man7.org)_
