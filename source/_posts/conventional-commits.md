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

## Getting Started {.cols-3}

### Quick Guide

#### Why Conventional Commits

- Easy-to-follow structure for commit messages.
- Clearly states the nature of changes.
- Ensures uniformity in commit messages across teams.
- Enables automated versioning and changelog generation.
- Makes commit history easy to browse.
- Allows the specification of 'scope' for more clarity.
- Has a special notation for breaking changes.
- Facilitates better understanding among team members.
- Makes the review process efficient.
- Helps in future troubleshooting with descriptive commit messages.

#### Structure

```javascript
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

[Official Website](https://www.conventionalcommits.org/en) {.link-arrow}

### Examples

- feat: add jwt support
- feat!: breaking change in API
- feat!(ui): redesign user profile page
- fix: fix SQL injection vulnerability
- fix(database): resolve data race condition
- docs: update setup section of README
- style(login): correct indentation in login component
- refactor: refactor user database schema
- perf: optimize user retrieval code for faster response
- test: add tests for jwt authentication
- test(payment): add tests for the payment gateway
- chore: update build script
- chore(deps): update dependencies
- build(docker): update Dockerfile to use node 14
- ci: add job for integration tests
- revert: revert commit a1b2c3d4e5f

### Types

| Type     | Description                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------- |
| `feat`   | Introduces a new feature                                                                                         |
| `fix`    | Fixes a bug                                                                                                      |
| `docs`   | Changes in documentation only                                                                                    |
| `style`  | Code changes that do not impact the functionality (e.g., formatting, white-space, etc)                           |
| refactor | Code changes that neither fix a bug nor introduce a feature, typically improving code readability or structure   |
| perf     | Code changes that improve performance                                                                            |
| test     | Addition of missing tests or corrections to existing tests                                                       |
| `chore`  | Changes that do not modify the source code or test files, like tweaking the build process or adding dependencies |
| build    | Changes affecting the build system or external dependencies (e.g., changes in webpack, npm packages)             |
| ci       | Changes to Continuous Integration configuration files and scripts (e.g., Travis, CircleCI, Jenkins)              |
| revert   | Reverts a previously made commit                                                                                 |

{.bold-first}

## Specification {.cols-1}

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
  by either a :<space> or <space># separator, followed by a string value (this is inspired by the
  [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
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

## Also see

- [Conventional Commits](https://conventionalcommits.org/) _(conventionalcommits.org)_
