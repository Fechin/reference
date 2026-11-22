---
title: Code Review
date: 2026-10-09 12:00:00
background: bg-[#2563eb]
tags:
  - code review
  - pull request
  - checklist
  - AI
categories:
  - Other
intro: |
  A five-axis checklist for reviewing code and pull requests — correctness, security, readability, performance, and test coverage — with a fixed comment format that produces actionable feedback instead of style nitpicks. Adapted from the open-source [code-review-checklist](https://github.com/alapha888/agent-skills-en) agent skill (MIT).
plugins:
  - copyCode
---

## Getting Started

### The One Question {.row-span-2}

Every review answers a single question:

> Will this code become someone else's problem within three months?

- Walk the five axes **in order** — the order is the priority
- Each axis gets **pass / fail / N-A**
- Every failure must come with a **concrete fix**, not an opinion

### Scope First

| Diff size | Action |
| --------- | ------ |
| ≤ ~400 changed lines | Review normally |
| > ~400 changed lines | Ask for a split first — review quality on huge diffs collapses |

## The Five Axes

### 1. Correctness (can block a merge)

- Edge cases handled: null, empty, zero, negative, oversized input
- Concurrency and timing assumptions hold; no races
- Errors are handled, not swallowed

### 2. Security (can block a merge)

- No user input concatenated into SQL, shell commands, or HTML
- No hard-coded secrets or tokens
- Logs do not leak sensitive data

### 3. Readability

- Names say what things are
- Each function does one thing
- Magic numbers are named constants
- Flag only what you cannot understand — not "I'd write it differently"

### 4. Performance

- No repeated queries or recomputation inside loops
- No N+1 query patterns
- No avoidable large-object copies
- No data-free speculation — "this might get slow" is not a comment

### 5. Test Coverage

- New logic has tests
- Edge cases have cases
- All-green tests with the critical path uncovered still get sent back

## Writing Comments

### Fixed Format

```text
[axis] file:line problem → suggested fix
```

Examples:

```text
[Must fix][Correctness] order.py:87 empty order list triggers IndexError → guard for empty before taking [0]
[Should fix][Readability] order.py:92 magic number 86400 → name it SECONDS_PER_DAY
```

### Triage

| Label | Axes | Blocks merge? |
| ----- | ---- | ------------- |
| Must fix | Correctness, Security | Yes |
| Should fix | Readability, Performance, Tests | No — but say so explicitly |

### Hard Rules {.row-span-2}

- **At most 10 comments** per review — more than that means "rewrite and resubmit", not a 50-item grade sheet
- **No style policing** — indentation, quotes, and semicolons are the linter's job
- **Speak with the diff** — a comment without a concrete line reference is invalid

## Anti-patterns

### What to Avoid

| Anti-pattern | Why it fails |
| ------------ | ------------ |
| Drive-by LGTM | Approving before reading the whole diff is theater |
| Style police | 18 comments on quotes while a null dereference slips through |
| Comments without code | "This logic looks off" — which logic, which line? |
| Performance speculation | A performance claim without data is noise |
| Grading 50 items | Too many problems = send it back, don't play teacher |

## Quick Checklist

### Copy-paste Version

```markdown
## Code review checklist

- [ ] Correctness: edge cases (null/0/negative/oversized) handled, exceptions not swallowed
- [ ] Correctness: concurrency/timing assumptions hold, no races
- [ ] Security: no SQL/shell/HTML injection points, no hard-coded secrets, no sensitive data in logs
- [ ] Readability: names are descriptive, functions have a single responsibility, no magic numbers
- [ ] Performance: no repeated queries/computation in loops, no N+1, no evidence-free performance worries
- [ ] Tests: new logic is covered, edge cases have cases
- [ ] Scope: diff ≤ ~400 lines, otherwise split first
```
