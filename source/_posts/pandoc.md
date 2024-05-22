---
title: Pandoc
date: 2023-03-21 13:26:00
background: bg-red-400
tags:
  - convert
  - document
  - utility
categories:
  - Linux Command
intro: |
  [Pandoc](https://pandoc.org) is a document converter, this pandoc cheat sheet contains pandoc commands and some common pandoc tricks.
plugins:
  - copyCode
---

## Getting Started

### Pandoc Usage

Syntax

```shell script
$ pandoc -s [source file] -o [output file]
```

## Pandoc examples

### LaTeX to MS Word {.col-span-2}

Simple .tex to .docx

```shell script
$ pandoc -s file.tex -o file.docx
```

.tex to .docx with default citations

```shell script
$ pandoc -s file.tex --citeproc --bibliography=bib_library.bib -o file.docx
```

.tex to .docx with specific citations

```shell script
$ pandoc -s file.tex --citeproc --bibliography=bib_library.bib --csl=apa.csl -o file.docx
```

Get `.csl` file from [here](https://github.com/citation-style-language/styles)

.tex to .docx with cross references

```shell script
$ pandoc -s file.tex --filter pandoc-crossref -o file.docx
```

Get the filter `pandoc-crossref` from [here](https://github.com/lierdakil/pandoc-crossref/releases)

## Also see {.cols-1}

- [pandoc examples](https://pandoc.org/demos.html)
