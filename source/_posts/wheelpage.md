---

title: WheelPage
date: 2025-12-16 17:20:00
background: bg-gradient-to-br from-slate-700 via-gray-800 to-black
tags:
  - Tool
  - Productivity
  - Decision-Making
categories:
  - Utilities
intro: Quick-reference cheatsheet for WheelPage — a minimal decision-making platform for fast, everyday choices.
plugins:
  - copyCode

---

## Essentials

### What is WheelPage?

**[WheelPage](https://wheelpage.com)** is a lightweight, privacy-first decision-making platform that brings multiple random tools into a single, distraction-free interface.

Instead of focusing on a single “spin wheel”, WheelPage is designed to help people **stop overthinking small decisions** and move forward quickly.

* **Designed for**: everyday decisions, classrooms, creators, small games
* **Philosophy**: reduce decision fatigue, not add complexity
* **Login**: not required (runs entirely in the browser)
* **Cost**: free to use

### Core Tools {.col-span-2}

| Tool                | Primary Use Case                            |
| :------------------ | :------------------------------------------ |
| **Spin Wheel**      | Random selection, raffles, games            |
| **Coin Flip**       | Binary decisions (yes/no, heads/tails)      |
| **Yes / No Picker** | Instant decisions with zero setup           |
| **Number Picker**   | Random numbers for ranges, draws, lotteries |

## Design Philosophy

WheelPage is built around a simple idea:

> **Small decisions should not consume big mental energy.**

Key principles:

* **One Box Interface**: all tools live in one consistent mental space
* **Single-Theme UI**: a clean, light interface optimized for clarity
* **Zero Cognitive Load**: no ads, no popups, no account walls
* **Fast Interaction**: open, click, decide
* **Calm by Design**: minimal UI that stays out of the wayions

| Action    | Description                             |
| :-------- | :-------------------------------------- |
| `Space`   | Spin the wheel / trigger action         |
| `Cmd` `K` | Quick tool switch/search                |
| `Cmd` `K` | Quick tool switch/search (if supported) |

* **Entries**: add items man weighted probability for advanced use cases
* **Themes**: clean light theme focused on readability
* **Sound**: toggle sound - **Themes**: clean light theme focused on readabilityness & Transparency

### Randomness Engine

WheelPage uses **browser-native cryptographic randomness** via:

* `crypto.getRandomValues()`

This avoids predictable pseudo-random generators such as `Math.random()`.

### Trust Model

* All randomness is generated **locally in your browser**
* No server-side manipulation
* No user data is uploaded or stored externally

## When to Use WheelPage

WheelPage works best in situations where speed and fairness matter more than configuration depth:

* Deciding what to eat
* Picking a random name or winner
* Classroom participation
* Icebreaker games
* Quick group decisions

## Popular Use Scenarios

### Daily Life

* **What should I eat?** End indecision instantly
* **Yes or No?** Let randomness break the tie
* **Coin Flip**: fast binary decisions

### Education

* Fair student selection
* Classroom participation without bias

### Games & Fun

* Party games
* Small raffles
* Casual challenges

## Comparison

### WheelPage vs Traditional Wheel Sites {.col-span-3}

| Feature                 |     WheelPage    | Traditional Wheel Sites |
| :---------------------- | :--------------: | :---------------------: |
| Multiple decision tools |      **Yes**     |            No           |
| Ads                     |  Minimal / None  |          Heavy          |
| Login required          |        No        |          Often          |
| Randomness              | **Crypto-based** |      Math.random()      |
| UI philosophy           |  Calm & minimal  |   Entertainment-first   |
| Setup time              |      Instant     |          Slower         |

{.show-header}

## Summary

WheelPage is not designed to be the flashiest wheel on the internet.

It is designed to be the **last decision tool you need** — simple, fair, and always ready when hesitation appears.
