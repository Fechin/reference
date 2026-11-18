---
title: Codex CLI
date: 2026-11-14 16:20:00
background: bg-[#10a37f]
tags:
  - ai
  - cli
  - coding
  - terminal
  - shortcuts
categories:
  - Programming
intro: |
  A quick reference cheat sheet for [Codex CLI](https://github.com/openai/codex), covering interactive keyboard shortcuts, execution modes, prompt syntax, slash commands, and configuration options.
plugins:
  - copyCode
---

## Getting Started {.cols-2}

### Launching Codex CLI

Start an interactive session in current folder

```shell script
$ codex
```

Start session targeting a specific prompt

```shell script
$ codex "refactor auth middleware to use JWT"
```

Start with a specific model

```shell script
$ codex --model o3-mini
```

Run in non-interactive / one-shot mode

```shell script
$ codex exec "check git status and generate changelog"
```

### Essential CLI Flags {.row-span-2}

| Flag | Description |
| :--- | :--- |
| `-m, --model <name>` | Specify LLM model (e.g. `gpt-4o`, `o3-mini`, `o1`) |
| `-C, --cd <dir>` | Set project root directory |
| `--full-auto` | Approve and execute commands automatically |
| `--dry-run` | Preview proposed changes without applying |
| `--sandbox` | Run shell commands inside an isolated container |
| `-v, --verbose` | Enable debug log output |
| `--help` | Show command line usage |

## Keyboard Shortcuts {.cols-2}

### Session & Control

| Shortcut | Action |
| :--- | :--- |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> | Cancel ongoing model response or running tool |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> | Exit Codex CLI session (on empty line) |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | Clear screen while preserving chat history |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Suspend CLI session to background |

### Line Editing & Input

| Shortcut | Action |
| :--- | :--- |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | Insert literal newline for multi-line prompts |
| <kbd>Alt</kbd> + <kbd>Enter</kbd> | Alternative multi-line newline insertion |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | Move cursor to beginning of line |
| <kbd>Ctrl</kbd> + <kbd>E</kbd> | Move cursor to end of line |
| <kbd>Ctrl</kbd> + <kbd>U</kbd> | Clear line before cursor |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Kill text from cursor to end of line |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | Delete previous word |

### History & Autocomplete

| Shortcut | Action |
| :--- | :--- |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Navigate previous prompt history |
| <kbd>Ctrl</kbd> + <kbd>R</kbd> | Reverse-search prompt and command history |
| <kbd>Tab</kbd> | Autocomplete file paths, commands, and tools |
| <kbd>Esc</kbd> | Dismiss autocomplete popup or suggestion |

## Slash Commands {.cols-2}

### Session Management

| Command | Description |
| :--- | :--- |
| `/help` | List available slash commands and keybindings |
| `/clear` | Clear conversation context and start fresh |
| `/compact` | Summarize and compact conversation memory |
| `/exit` | Exit the Codex interactive session |
| `/quit` | Alias for `/exit` |

### Environment & Mode

| Command | Description |
| :--- | :--- |
| `/model [name]` | View or switch active model |
| `/approval` | Toggle auto-approval mode (`ask`, `auto`, `strict`) |
| `/diff` | Review all uncommitted code edits made by Codex |
| `/undo` | Revert the last file change performed |
| `/review` | Run automated self-review on current workspace diff |

## Context & Prompting {.cols-2}

### File & Path References

Reference a specific file in prompt

```text
Check @src/auth.ts and fix the token expiration logic
```

Reference multiple files or glob pattern

```text
Compare @tests/test_api.py with @tests/test_auth.py
```

Pipe terminal output into Codex

```shell script
$ git diff | codex "write a concise commit message"
```

### System Configuration

Configure project instructions in `CODEX.md` or `AGENTS.md` in repository root:

```markdown
# Project Instructions
- Test framework: pytest
- Linter: ruff
- Always include type annotations on public APIs
```

## Environment Variables {.cols-2}

### Common Variables

| Variable | Description |
| :--- | :--- |
| `OPENAI_API_KEY` | OpenAI API authentication key |
| `CODEX_MODEL` | Default model override |
| `CODEX_HOME` | Custom directory for config and history storage |
| `CODEX_AUTO_APPROVE` | When set to `1`, automatically runs commands |
| `NO_COLOR` | Disable terminal color and ANSI styling |
