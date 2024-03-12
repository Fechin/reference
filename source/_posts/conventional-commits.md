---
title: Conventional Commits
date: 2024-03-11 09:51:44
background: bg-[#e86d7a]
tags:
  - permission
categories:
  - Other
intro: |
  A cheat sheet of the Conventional Commits and Conventional Comments standards
plugins:
---



Getting Started {.cols-2}
----

### Getting Started

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of
rules for creating an explicit commit history; which makes it easier to write automated tools on top of.

#### Syntax

```javascript
<type>[optional scope]: <description>
  
[optional body]
  
[optional footer(s)]
```

#### Examples

- feat: new feature
- fix(scope): bug in scope
- feat!: breaking change in API
- chore(deps): update dependencies

[Official Website](https://www.conventionalcommits.org/en) {.link-arrow}

### Types

| Type     | Description                                                                                                 |
|----------|-------------------------------------------------------------------------------------------------------------|
| `feat`   | A new feature                                                                                               |
| `chore`  | Other changes that don’t modify src or test files                                                           |
| `fix`    | A bug fix                                                                                                   |
| `docs`   | Documentation only changes                                                                                  |
| `style`  | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | A code change that improves performance                                                                     |
| `test`   | Adding missing tests or correcting existing tests                                                           |
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| revert   | Reverts a previous commit                                                                                   |

{.bold-first}


Specification {.cols-1}
----

### Specification

- Commits MUST be prefixed with a type, which consists of a noun, feat, fix, etc., followed by the OPTIONAL scope,
  OPTIONAL !, and REQUIRED terminal colon and space.
- The type feat MUST be used when a commit adds a new feature to your application or library.
- The type fix MUST be used when a commit represents a bug fix for your application.
- A scope MAY be provided after a type. A scope MUST consist of a noun describing a section of the codebase surrounded
  by parenthesis, e.g., fix(parser):
- A description MUST immediately follow the colon and space after the type/scope prefix. The description is a short
  summary of the code changes, e.g., fix: array parsing issue when multiple spaces were contained in string.
- A longer commit body MAY be provided after the short description, providing additional contextual information about
  the code changes. The body MUST begin one blank line after the description.
- A commit body is free-form and MAY consist of any number of newline separated paragraphs.
- One or more footers MAY be provided one blank line after the body. Each footer MUST consist of a word token, followed
  by either a :<space> or <space># separator, followed by a string value (this is inspired by
  the [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
- A footer’s token MUST use - in place of whitespace characters, e.g., Acked-by (this helps differentiate the footer
  section from a multi-paragraph body). An exception is made for BREAKING CHANGE, which MAY also be used as a token.
- A footer’s value MAY contain spaces and newlines, and parsing MUST terminate when the next valid footer
  token/separator pair is observed.
- Breaking changes MUST be indicated in the type/scope prefix of a commit, or as an entry in the footer.
- If included as a footer, a breaking change MUST consist of the uppercase text BREAKING CHANGE, followed by a colon,
  space, and description, e.g., BREAKING CHANGE: environment variables now take precedence over config files.
- If included in the type/scope prefix, breaking changes MUST be indicated by a ! immediately before the :. If ! is
  used, BREAKING CHANGE: MAY be omitted from the footer section, and the commit description SHALL be used to describe
  the breaking change.
- Types other than feat and fix MAY be used in your commit messages, e.g., docs: update ref docs.
- The units of information that make up Conventional Commits MUST NOT be treated as case sensitive by implementors, with
  the exception of BREAKING CHANGE which MUST be uppercase.
- BREAKING-CHANGE MUST be synonymous with BREAKING CHANGE, when used as a token in a footer.

Also see
--------

- [Conventional Commits](https://conventionalcommits.org/) _(conventionalcommits.org)_
