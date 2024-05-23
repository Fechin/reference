---
title: LaTeX
date: 2022-12-30 09:51:44
background: bg-[#2a338a]
tags:
categories:
  - Programming
intro: |
  This cheat sheet summarizes a reference list of [LaTeX](https://www.latex-project.org/) commonly used display math notation and some application examples of [KaTeX](https://katex.org/).
plugins:
  - katex
  - copyCode
---

## Getting Started

### Introduction

[LaTeX](https://www.latex-project.org/) A TEX-based typesetting system suitable for producing scientific, mathematical,
and physical documents of high print quality.

- [LaTeX official website](https://www.latex-project.org/) _(latex-project.org)_
- [KaTeX official website](https://katex.org/) _(katex.org)_

And [KaTeX](https://katex.org/) handles only a smaller subset of LaTeX's mathematical notation for display on the web

### Example

```KaTeX
% \f is defined as #1f(#2) using the macro
f\relax(x) = \int_{-\infty}^\infty
    f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
```

---

```LaTeX
% \f is defined as #1f(#2) using the macro
f\relax(x) = \int_{-\infty}^\infty
    f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
```

### Inline

```markdown
Based on KaTeX in one lineExample  
Example： `KaTeX:\int_0^\infty x^2 dx`
```

Example based on KaTeX showing on one line: `KaTeX:\int_0^\infty x^2 dx`

## Supported Functions

### Accents {.col-span-2 .row-span-2}

| :-                                             | :-                                                                     | :-                                                               |
| :--------------------------------------------- | :--------------------------------------------------------------------- | :--------------------------------------------------------------- |
| `KaTeX:a'` <pur>`a'`</pur>                     | `KaTeX:\tilde{a}` <pur>`\tilde{a}`</pur>                               | `KaTeX:\mathring{g}` <pur>`\mathring{g}`</pur>                   |
| `KaTeX:a''` <pur>`a''`</pur>                   | `KaTeX:\widetilde{ac}` <pur>`\widetilde{ac}`</pur>                     | `KaTeX:\overgroup{AB}` <pur>`\overgroup{AB}`</pur>               |
| `KaTeX:a^{\prime}` <pur>`a^{\prime}`</pur>     | `KaTeX:\utilde{AB}` <pur>`\utilde{AB}`</pur>                           | `KaTeX:\undergroup{AB}` <pur>`\undergroup{AB}`</pur>             |
| `KaTeX:\acute{a}` <pur>`\acute{a}`</pur>       | `KaTeX:\vec{F}` <pur>`\vec{F}`</pur>                                   | `KaTeX:\Overrightarrow{AB}` <pur>`\Overrightarrow{AB}`</pur>     |
| `KaTeX:\bar{y}` <pur>`\bar{y}`</pur>           | `KaTeX:\overleftarrow{AB}` <pur>`\overleftarrow{AB}`</pur>             | `KaTeX:\overrightarrow{AB}` <pur>`\overrightarrow{AB}`</pur>     |
| `KaTeX:\breve{a}` <pur>`\breve{a}`</pur>       | `KaTeX:\underleftarrow{AB}` <pur>`\underleftarrow{AB}`</pur>           | `KaTeX:\underrightarrow{AB}` <pur>`\underrightarrow{AB}`</pur>   |
| `KaTeX:\check{a}` <pur>`\check{a}`</pur>       | `KaTeX:\overleftharpoon{ac}` <pur>`\overleftharpoon{ac}`</pur>         | `KaTeX:\overrightharpoon{ac}` <pur>`\overrightharpoon{ac}`</pur> |
| `KaTeX:\dot{a}` <pur>`\dot{a}`</pur>           | `KaTeX:\overleftrightarrow{AB}` <pur>`\overleftrightarrow{AB}`</pur>   | `KaTeX:\overbrace{AB}` <pur>`\overbrace{AB}`</pur>               |
| `KaTeX:\ddot{a}` <pur>`\ddot{a}`</pur>         | `KaTeX:\underleftrightarrow{AB}` <pur>`\underleftrightarrow{AB}`</pur> | `KaTeX:\underbrace{AB}` <pur>`\underbrace{AB}`</pur>             |
| `KaTeX:\grave{a}` <pur>`\grave{a}`</pur>       | `KaTeX:\overline{AB}` <pur>`\overline{AB}`</pur>                       | `KaTeX:\overlinesegment{AB}` <pur>`\overlinesegment{AB}`</pur>   |
| `KaTeX:\hat{\theta}` <pur>`\hat{\theta}`</pur> | `KaTeX:\underline{AB}` <pur>`\underline{AB}`</pur>                     | `KaTeX:\underlinesegment{AB}` <pur>`\underlinesegment{AB}`</pur> |
| `KaTeX:\widehat{ac}` <pur>`\widehat{ac}`</pur> | `KaTeX:\widecheck{ac}` <pur>`\widecheck{ac}`</pur>                     | `KaTeX:\underbar{X}` <pur>`\underbar{X}`</pur>                   |

### Emphasis in \text&lcub;...&rcub;

| :-                                                   | :-                               |
| :--------------------------------------------------- | :------------------------------- |
| `KaTeX:\'{a}` <pur>`\'{a}`</pur>                     | `KaTeX:\~{a}` <pur>`\~{a}`</pur> |
| `KaTeX:\.{a}` <pur>`\.{a}`</pur>                     | `KaTeX:\H{a}` <pur>`\H{a}`</pur> |
| ``KaTeX:\\\`{a}`` <pur><code>\\&#96;{a}</code></pur> | `KaTeX:\={a}` <pur>`\={a}`</pur> |
| `KaTeX:\"{a}` <pur>`\"{a}`</pur>                     | `KaTeX:\v{a}` <pur>`\v{a}`</pur> |
| `KaTeX:\^{a}` <pur>`\^{a}`</pur>                     | `KaTeX:\u{a}` <pur>`\u{a}`</pur> |
| `KaTeX:\r{a}` <pur>`\r{a}`</pur>                     |

### Delimiter Sizing

| :-                                  | :-                                       |
| :---------------------------------- | :--------------------------------------- |
| `KaTeX:\left(\LARGE{AB}\right)`     | <pur>`\left(\LARGE{AB}\right)`</pur>     |
| `KaTeX:( \big( \Big( \bigg( \Bigg(` | <pur>`( \big( \Big( \bigg( \Bigg(`</pur> |

---

| :-        | :-      | :-       | :-       | :-       |
| :-------- | :------ | :------- | :------- | :------- |
| `\left`   | `\big`  | `\bigl`  | `\bigm`  | `\bigr`  |
| `\middle` | `\Big`  | `\Bigl`  | `\Bigm`  | `\Bigr`  |
| `\right`  | `\bigg` | `\biggl` | `\biggm` | `\biggr` |
| `\`       | `\Bigg` | `\Biggl` | `\Biggm` | `\Biggr` |

### Greek and Hebrew letters {.col-span-3}

| preview          | method                | preview         | method               | preview          | method                | preview             | method                   | preview         | method               | preview          | method                |
| :--------------- | :-------------------- | :-------------- | :------------------- | :--------------- | :-------------------- | :------------------ | :----------------------- | :-------------- | :------------------- | :--------------- | :-------------------- |
| `KaTeX:\alpha`   | <pur>`\alpha`</pur>   | `KaTeX:\kappa`  | <pur>`\kappa`</pur>  | `KaTeX:\psi`     | <pur>`\psi`</pur>     | `KaTeX:\digamma`    | <pur>`\digamma`</pur>    | `KaTeX:\Delta`  | <pur>`\Delta`</pur>  | `KaTeX:\Theta`   | <pur>`\Theta`</pur>   |
| `KaTeX:\beta`    | <pur>`\beta`</pur>    | `KaTeX:\lambda` | <pur>`\lambda`</pur> | `KaTeX:\rho`     | <pur>`\rho`</pur>     | `KaTeX:\varepsilon` | <pur>`\varepsilon`</pur> | `KaTeX:\Gamma`  | <pur>`\Gamma`</pur>  | `KaTeX:\Upsilon` | <pur>`\Upsilon`</pur> |
| `KaTeX:\chi`     | <pur>`\chi`</pur>     | `KaTeX:\mu`     | <pur>`\mu`</pur>     | `KaTeX:\sigma`   | <pur>`\sigma`</pur>   | `KaTeX:\varkappa`   | <pur>`\varkappa`</pur>   | `KaTeX:\Lambda` | <pur>`\Lambda`</pur> | `KaTeX:\Xi`      | <pur>`\Xi`</pur>      |
| `KaTeX:\delta`   | <pur>`\delta`</pur>   | `KaTeX:\nu`     | <pur>`\nu`</pur>     | `KaTeX:\tau`     | <pur>`\tau`</pur>     | `KaTeX:\varphi`     | <pur>`\varphi`</pur>     | `KaTeX:\Omega`  | <pur>`\Omega`</pur>  |                  |                       |
| `KaTeX:\epsilon` | <pur>`\epsilon`</pur> | `KaTeX:o`       | <pur>`o`</pur>       | `KaTeX:\theta`   | <pur>`\theta`</pur>   | `KaTeX:\varpi`      | <pur>`\varpi`</pur>      | `KaTeX:\Phi`    | <pur>`\Phi`</pur>    | `KaTeX:\aleph`   | <pur>`\aleph`</pur>   |
| `KaTeX:\eta`     | <pur>`\eta`</pur>     | `KaTeX:\omega`  | <pur>`\omega`</pur>  | `KaTeX:\upsilon` | <pur>`\upsilon`</pur> | `KaTeX:\varrho`     | <pur>`\varrho`</pur>     | `KaTeX:\Pi`     | <pur>`\Pi`</pur>     | `KaTeX:\beth`    | <pur>`\beth`</pur>    |
| `KaTeX:\gamma`   | <pur>`\gamma`</pur>   | `KaTeX:\phi`    | <pur>`\phi`</pur>    | `KaTeX:\xi`      | <pur>`\xi`</pur>      | `KaTeX:\varsigma`   | <pur>`\varsigma`</pur>   | `KaTeX:\Psi`    | <pur>`\Psi`</pur>    | `KaTeX:\daleth`  | <pur>`\daleth`</pur>  |
| `KaTeX:\iota`    | <pur>`\iota`</pur>    | `KaTeX:\pi`     | <pur>`\pi`</pur>     | `KaTeX:\zeta`    | <pur>`\zeta`</pur>    | `KaTeX:\vartheta`   | <pur>`\vartheta`</pur>   | `KaTeX:\Sigma`  | <pur>`\Sigma`</pur>  | `KaTeX:\gimel`   | <pur>`\gimel`</pur>   |

{.left-align}

#### Other letters

| :-               | :-                    | :-               | :-                    | :-               | :-                    | :-                 | :-                      | :-                 | :-                      |
| :--------------- | :-------------------- | :--------------- | :-------------------- | :--------------- | :-------------------- | :----------------- | :---------------------- | :----------------- | :---------------------- |
| `KaTeX:\imath`   | <pur>`\imath`</pur>   | `KaTeX:\nabla`   | <pur>`\nabla`</pur>   | `KaTeX:\Im`      | <pur>`\Im`</pur>      | `KaTeX:\Reals`     | <pur>`\Reals`</pur>     | `KaTeX:\text{\OE}` | <pur>`\text{\OE}`</pur> |
| `KaTeX:\jmath`   | <pur>`\jmath`</pur>   | `KaTeX:\partial` | <pur>`\partial`</pur> | `KaTeX:\image`   | <pur>`\image`</pur>   | `KaTeX:\wp`        | <pur>`\wp`</pur>        | `KaTeX:\text{\o}`  | <pur>`\text{\o}`</pur>  |
| `KaTeX:\aleph`   | <pur>`\aleph`</pur>   | `KaTeX:\Game`    | <pur>`\Game`</pur>    | `KaTeX:\Bbbk`    | <pur>`\Bbbk`</pur>    | `KaTeX:\weierp`    | <pur>`\weierp`</pur>    | `KaTeX:\text{\O}`  | <pur>`\text{\O}`</pur>  |
| `KaTeX:\alef`    | <pur>`\alef`</pur>    | `KaTeX:\Finv`    | <pur>`\Finv`</pur>    | `KaTeX:\N`       | <pur>`\N`</pur>       | `KaTeX:\Z`         | <pur>`\Z`</pur>         | `KaTeX:\text{\ss}` | <pur>`\text{\ss}`</pur> |
| `KaTeX:\alefsym` | <pur>`\alefsym`</pur> | `KaTeX:\cnums`   | <pur>`\cnums`</pur>   | `KaTeX:\natnums` | <pur>`\natnums`</pur> | `KaTeX:\text{\aa}` | <pur>`\text{\aa}`</pur> | `KaTeX:\text{\i}`  | <pur>`\text{\i}`</pur>  |
| `KaTeX:\beth`    | <pur>`\beth`</pur>    | `KaTeX:\Complex` | <pur>`\Complex`</pur> | `KaTeX:\R`       | <pur>`\R`</pur>       | `KaTeX:\text{\AA}` | <pur>`\text{\AA}`</pur> | `KaTeX:\text{\j}`  | <pur>`\text{\j}`</pur>  |
| `KaTeX:\gimel`   | <pur>`\gimel`</pur>   | `KaTeX:\ell`     | <pur>`\ell`</pur>     | `KaTeX:\Re`      | <pur>`\Re`</pur>      | `KaTeX:\text{\ae}` | <pur>`\text{\ae}`</pur> |                    |                         |
| `KaTeX:\daleth`  | <pur>`\daleth`</pur>  | `KaTeX:\hbar`    | <pur>`\hbar`</pur>    | `KaTeX:\real`    | <pur>`\real`</pur>    | `KaTeX:\text{\AE}` | <pur>`\text{\AE}`</pur> |                    |                         |
| `KaTeX:\eth`     | <pur>`\eth`</pur>     | `KaTeX:\hslash`  | <pur>`\hslash`</pur>  | `KaTeX:\reals`   | <pur>`\reals`</pur>   | `KaTeX:\text{\oe}` | <pur>`\text{\oe}`</pur> |                    |                         |

{.left-align}

### Alphabets and Unicode {.col-span-3}

| preview             | method                   | preview           | method                 | preview           | method                 | preview             | method                   |
| :------------------ | :----------------------- | :---------------- | :--------------------- | :---------------- | :--------------------- | :------------------ | :----------------------- |
| `KaTeX:\Alpha`      | <pur>`\Alpha`</pur>      | `KaTeX:\Beta`     | <pur>`\Beta`</pur>     | `KaTeX:\Gamma`    | <pur>`\Gamma`</pur>    | `KaTeX:\Delta`      | <pur>`\Delta`</pur>      |
| `KaTeX:\Epsilon`    | <pur>`\Epsilon`</pur>    | `KaTeX:\Zeta`     | <pur>`\Zeta`</pur>     | `KaTeX:\Eta`      | <pur>`\Eta`</pur>      | `KaTeX:\Theta`      | <pur>`\Theta`</pur>      |
| `KaTeX:\Iota`       | <pur>`\Iota`</pur>       | `KaTeX:\Kappa`    | <pur>`\Kappa`</pur>    | `KaTeX:\Lambda`   | <pur>`\Lambda`</pur>   | `KaTeX:\Mu`         | <pur>`\Mu`</pur>         |
| `KaTeX:\Nu`         | <pur>`\Nu`</pur>         | `KaTeX:\Xi`       | <pur>`\Xi`</pur>       | `KaTeX:\Omicron`  | <pur>`\Omicron`</pur>  | `KaTeX:\Pi`         | <pur>`\Pi`</pur>         |
| `KaTeX:\Rho`        | <pur>`\Rho`</pur>        | `KaTeX:\Sigma`    | <pur>`\Sigma`</pur>    | `KaTeX:\Tau`      | <pur>`\Tau`</pur>      | `KaTeX:\Upsilon`    | <pur>`\Upsilon`</pur>    |
| `KaTeX:\Phi`        | <pur>`\Phi`</pur>        | `KaTeX:\Chi`      | <pur>`\Chi`</pur>      | `KaTeX:\Psi`      | <pur>`\Psi`</pur>      | `KaTeX:\Omega`      | <pur>`\Omega`</pur>      |
| `KaTeX:\varGamma`   | <pur>`\varGamma`</pur>   | `KaTeX:\varDelta` | <pur>`\varDelta`</pur> | `KaTeX:\varTheta` | <pur>`\varTheta`</pur> | `KaTeX:\varLambda`  | <pur>`\varLambda`</pur>  |
| `KaTeX:\varXi`      | <pur>`\varXi`</pur>      | `KaTeX:\varPi`    | <pur>`\varPi`</pur>    | `KaTeX:\varSigma` | <pur>`\varSigma`</pur> | `KaTeX:\varUpsilon` | <pur>`\varUpsilon`</pur> |
| `KaTeX:\varPhi`     | <pur>`\varPhi`</pur>     | `KaTeX:\varPsi`   | <pur>`\varPsi`</pur>   | `KaTeX:\varOmega` | <pur>`\varOmega`</pur> |                     |                          |
| `KaTeX:\alpha`      | <pur>`\alpha`</pur>      | `KaTeX:\beta`     | <pur>`\beta`</pur>     | `KaTeX:\gamma`    | <pur>`\gamma`</pur>    | `KaTeX:\delta`      | <pur>`\delta`</pur>      |
| `KaTeX:\epsilon`    | <pur>`\epsilon`</pur>    | `KaTeX:\zeta`     | <pur>`\zeta`</pur>     | `KaTeX:\eta`      | <pur>`\eta`</pur>      | `KaTeX:\theta`      | <pur>`\theta`</pur>      |
| `KaTeX:\iota`       | <pur>`\iota`</pur>       | `KaTeX:\kappa`    | <pur>`\kappa`</pur>    | `KaTeX:\lambda`   | <pur>`\lambda`</pur>   | `KaTeX:\mu`         | <pur>`\mu`</pur>         |
| `KaTeX:\nu`         | <pur>`\nu`</pur>         | `KaTeX:\xi`       | <pur>`\xi`</pur>       | `KaTeX:\omicron`  | <pur>`\omicron`</pur>  | `KaTeX:\pi`         | <pur>`\pi`</pur>         |
| `KaTeX:\rho`        | <pur>`\rho`</pur>        | `KaTeX:\sigma`    | <pur>`\sigma`</pur>    | `KaTeX:\tau`      | <pur>`\tau`</pur>      | `KaTeX:\upsilon`    | <pur>`\upsilon`</pur>    |
| `KaTeX:\phi`        | <pur>`\phi`</pur>        | `KaTeX:\chi`      | <pur>`\chi`</pur>      | `KaTeX:\psi`      | <pur>`\psi`</pur>      | `KaTeX:\omega`      | <pur>`\omega`</pur>      |
| `KaTeX:\varepsilon` | <pur>`\varepsilon`</pur> | `KaTeX:\varkappa` | <pur>`\varkappa`</pur> | `KaTeX:\vartheta` | <pur>`\vartheta`</pur> | `KaTeX:\thetasym`   | <pur>`\thetasym`</pur>   |
| `KaTeX:\varpi`      | <pur>`\varpi`</pur>      | `KaTeX:\varrho`   | <pur>`\varrho`</pur>   | `KaTeX:\varsigma` | <pur>`\varsigma`</pur> | `KaTeX:\varphi`     | <pur>`\varphi`</pur>     |
| `KaTeX:\digamma`    | <pur>`\digamma`</pur>    |

{.show-header left-align}

### Annotation {.col-span-3}

| :-                                                    | :-                             | :-                                       | :-                                            |
| :---------------------------------------------------- | :----------------------------- | :--------------------------------------- | :-------------------------------------------- |
| `KaTeX:\cancel{5}`                                    | <pur>`\cancel{5}`</pur>        | `KaTeX:\overbrace{a+b+c}^{\text{note}}`  | <pur>`\overbrace{a+b+c}^{\text{note}}`</pur>  |
| `KaTeX:\bcancel{5}`                                   | <pur>`\bcancel{5}`</pur>       | `KaTeX:\underbrace{a+b+c}_{\text{note}}` | <pur>`\underbrace{a+b+c}_{\text{note}}`</pur> |
| `KaTeX:\xcancel{ABC}`                                 | <pur>`\xcancel{ABC}`</pur>     | `KaTeX:\not =`                           | <pur>`\not =`</pur>                           |
| `KaTeX:\sout{abc}`                                    | <pur>`\sout{abc}`</pur>        | `KaTeX:\boxed{\pi=\frac c d}`            | <pur>`\boxed{\pi=\frac c d}`</pur>            |
| `KaTeX:\$a_{\angl n}` _<red>MD syntax conflict</red>_ | <pur>`$a_{\angl n}`</pur>      | `KaTeX:a_\angln`                         | <pur>`a_\angln`</pur>                         |
| `KaTeX:\phase{-78^\circ}`                             | <pur>`\phase{-78^\circ}`</pur> |

<pur>\tag{hi} x+y^{2x}</pur>

```KaTex
\tag{hi} x+y^{2x}
```

<pur>\tag\*{hi} x+y^{2x}</pur>

```KaTex
\tag*{hi} x+y^{2x}
```

### Vertical layout {.col-span-3}

| :-                                     | :-                                          | :-                      | :-                           | :-                                                          | :-                                                    |
| :------------------------------------- | :------------------------------------------ | :---------------------- | :--------------------------- | :---------------------------------------------------------- | :---------------------------------------------------- |
| `KaTeX:x_n`                            | <pur>`x_n`</pur>                            | `KaTeX:\stackrel{!}{=}` | <pur>`\stackrel{!}{=}`</pur> | `KaTeX:a \atop b`                                           | `a \atop b`                                           |
| `KaTeX:e^x`                            | <pur>`e^x`</pur>                            | `KaTeX:\overset{!}{=}`  | <pur>`\overset{!}{=}`</pur>  | `KaTeX:a\raisebox{0.25em}{$b$}c`                            | `a\raisebox{0.25em}{$b$}c`                            |
| `KaTeX:_u^o`                           | <pur>`_u^o`</pur>                           | `KaTeX:\underset{!}{=}` | <pur>`\underset{!}{=}`</pur> | `KaTeX:a+\left(\vcenter{\hbox{$\frac{\frac a b}c$}}\right)` | `a+\left(\vcenter{\hbox{$\frac{\frac a b}c$}}\right)` |
| `KaTeX:\sum_{\substack{0<i<m\\0<j<n}}` | <pur>`\sum_{\substack{0<i<m\\0<j<n}}`</pur> |                         |                              |                                                             |                                                       |

### Overlap and Spacing {.col-span-3}

| :-                                                     | :-                                 | :-                                    |
| :----------------------------------------------------- | :--------------------------------- | :------------------------------------ |
| `KaTeX:{=}\mathllap{/\,}` <pur>{=}\mathllap{/\,}</pur> | `KaTeX:\left(x^{\smash{2}}\right)` | <pur>\left(x^{\smash{2}}\right)</pur> |
| `KaTeX:\mathrlap{\,/}{=}` <pur>\mathrlap{\,/}{=}</pur> | `KaTeX:\sqrt{\smash[b]{y}}`        | <pur>\sqrt{\smash[b]{y}}</pur>        |

`\sum_{\mathclap{1\le i\le j\le n}} x_{ij}`

```KaTex
\sum_{\mathclap{1\le i\le j\le n}} x_{ij}
```

### `KaTeX:\LaTeX` math constructs {.col-span-3}

| 预览                    | 方法                         | 预览                    | 方法                         | 预览                         | 方法                              |
| :---------------------- | :--------------------------- | :---------------------- | :--------------------------- | :--------------------------- | :-------------------------------- |
| `KaTeX:\frac{abc}{xyz}` | <pur>`\frac{abc}{xyz}`</pur> | `KaTeX:\overline{abc}`  | <pur>`\overline{abc}`</pur>  | `KaTeX:\overrightarrow{abc}` | <pur>`\overrightarrow{abc}`</pur> |
| `KaTeX:f'`              | <pur>`f'`</pur>              | `KaTeX:\underline{abc}` | <pur>`\underline{abc}`</pur> | `KaTeX:\overleftarrow{abc}`  | <pur>`\overleftarrow{abc}`</pur>  |
| `KaTeX:\sqrt{abc}`      | <pur>`\sqrt{abc}`</pur>      | `KaTeX:\widehat{abc}`   | <pur>`\widehat{abc}`</pur>   | `KaTeX:\overbrace{abc}`      | <pur>`\overbrace{abc}`</pur>      |
| `KaTeX:\sqrt[n]{abc}`   | <pur>`\sqrt[n]{abc}`</pur>   | `KaTeX:\widetilde{abc}` | <pur>`\widetilde{abc}`</pur> | `KaTeX:\underbrace{abc}`     | <pur>`\underbrace{abc}`</pur>     |

### Delimiters {.col-span-3}

| preview                                      | method                           | preview                 | method                         | preview     | method              | preview                          | method                                 | preview                 | method                       |
| :------------------------------------------- | :------------------------------- | :---------------------- | :----------------------------- | :---------- | :------------------ | :------------------------------- | :------------------------------------- | :---------------------- | :--------------------------- |
| `KaTeX:()`                                   | <pur>`()`</pur>                  | `KaTeX:\lparen \rparen` | <pur>`\lparen` `\rparen`</pur> | `KaTeX:⌈ ⌉` | <pur>`⌈ ⌉`</pur>    | `KaTeX:\lceil \rceil`            | <pur>`\lceil` `\rceil`</pur>           | `KaTeX:\uparrow`        | <pur>`\uparrow`</pur>        |
| `KaTeX:[]`                                   | <pur>`[]`</pur>                  | `KaTeX:\lbrack \rbrack` | <pur>`\lbrack` `\rbrack`</pur> | `KaTeX:⌊ ⌋` | <pur>`⌊ ⌋`</pur>    | `KaTeX:\lfloor \rfloor`          | <pur>`\lfloor` `\rfloor`</pur>         | `KaTeX:\downarrow`      | <pur>`\downarrow`</pur>      |
| `KaTeX:\{ \}`                                | <pur>`{}`</pur>                  | `KaTeX:\lbrace \rbrace` | <pur>`\lbrace` `\rbrace`</pur> | `KaTeX:⎰⎱`  | <pur>`⎰⎱`</pur>     | `KaTeX:\lmoustache  \rmoustache` | <pur>`\lmoustache` `\rmoustache`</pur> | `KaTeX:\updownarrow`    | <pur>`\updownarrow`</pur>    |
| `KaTeX:⟨ ⟩`                                  | <pur>`⟨⟩`</pur>                  | `KaTeX:\langle \rangle` | <pur>`\langle` `\rangle`</pur> | `KaTeX:⟮ ⟯` | <pur>`⟮ ⟯`</pur>    | `KaTeX:\lgroup \rgroup`          | <pur>`\lgroup` `\rgroup`</pur>         | `KaTeX:\Uparrow`        | <pur>`\Uparrow`</pur>        |
| `KaTeX:∣`                                    | <pur>`\|`</pur>                  | `KaTeX:\vert`           | <pur>`\vert`</pur>             | `KaTeX:┌ ┐` | <pur>`┌ ┐`</pur>    | `KaTeX:\ulcorner \urcorner`      | <pur>`\ulcorner` `\urcorner`</pur>     | `KaTeX:\Downarrow`      | <pur>`\Downarrow`</pur>      |
| `KaTeX:\|` _(<red>MD syntax conflict</red>)_ | <pur><code>\\&#124;</code></pur> | `KaTeX:\Vert`           | <pur>`\Vert`</pur>             | `KaTeX:└ ┘` | <pur>`└ ┘`</pur>    | `KaTeX:\llcorner \lrcorner`      | <pur>`\llcorner` `\lrcorner`</pur>     | `KaTeX:\Updownarrow`    | <pur>`\Updownarrow`</pur>    |
| `KaTeX:∣ ∣`                                  | <pur>`\lvert` `\rvert`</pur>     | `KaTeX:\lVert \rVert`   | <pur>`\lVert` `\rVert`</pur>   |             | <pur>`\left.`</pur> |                                  | <pur>`\right.`</pur>                   | `KaTeX:\backslash`      | <pur>`\backslash`</pur>      |
| `KaTeX:\lang` `KaTeX:\rang`                  | <pur>`\lang` `\rang`<pur>        | `KaTeX:\lt \gt`         | <pur>`\lt \gt`</pur>           | `KaTeX:⟦ ⟧` | <pur>`⟦ ⟧`</pur>    | `KaTeX:\llbracket \rrbracket`    | <pur>`\llbracket` `\rrbracket`</pur>   | `KaTeX:\lBrace \rBrace` | <pur>`\lBrace \rBrace`</pur> |

{.show-header left-align}

The pair of expressions `\left` `KaTeX:s_1` and `\right` `KaTeX:s_2` can be used to match the height of the separators
`KaTeX:s_1` and `KaTeX:s_2` to the height of their content, e.g. :

| :-              | :-           | :-               | :-              | :-           | :-               | :-                 | :-           | :-              |
| :-------------- | :----------- | :--------------- | :-------------- | :----------- | :--------------- | :----------------- | :----------- | :-------------- |
| `KaTeX:\left\|` | `KaTeX:expr` | `KaTeX:\right\|` | `KaTeX:\left\{` | `KaTeX:expr` | `KaTeX:\right\}` | `KaTeX:\left\Vert` | `KaTeX:expr` | `KaTeX:\right.` |

### Variable Size Symbols {.col-span-3}

| preview         | method               | preview       | method             | preview           | method                 | preview            | method                  | preview           | method                 |
| :-------------- | :------------------- | :------------ | :----------------- | :---------------- | :--------------------- | :----------------- | :---------------------- | :---------------- | :--------------------- |
| `KaTeX:\sum`    | <pur>`\sum`</pur>    | `KaTeX:\int`  | <pur>`\int`</pur>  | `KaTeX:\biguplus` | <pur>`\biguplus`</pur> | `KaTeX:\bigoplus`  | <pur>`\bigoplus`</pur>  | `KaTeX:\bigvee`   | <pur>`\bigvee`</pur>   |
| `KaTeX:\prod`   | <pur>`\prod`</pur>   | `KaTeX:\oint` | <pur>`\oint`</pur> | `KaTeX:\bigcap`   | <pur>`\bigcap`</pur>   | `KaTeX:\bigotimes` | <pur>`\bigotimes`</pur> | `KaTeX:\bigwedge` | <pur>`\bigwedge`</pur> |
| `KaTeX:\coprod` | <pur>`\coprod`</pur> | `KaTeX:\iint` | <pur>`\iint`</pur> | `KaTeX:\bigcup`   | <pur>`\bigcup`</pur>   | `KaTeX:\bigodot`   | <pur>`\bigodot`</pur>   | `KaTeX:\bigodot`  | <pur>`\bigodot`</pur>  |

{.show-header left-align}

### standard function name{.col-span-3}

| preview         | method               | preview         | method               | preview         | method               | preview         | method               |
| :-------------- | :------------------- | :-------------- | :------------------- | :-------------- | :------------------- | :-------------- | :------------------- |
| `KaTeX:\arccos` | <pur>`\arccos`</pur> | `KaTeX:\arcsin` | <pur>`\arcsin`</pur> | `KaTeX:\arcsin` | <pur>`\arcsin`</pur> | `KaTeX:\arg`    | <pur>`\arg`</pur>    |
| `KaTeX:\cos`    | <pur>`\cos`</pur>    | `KaTeX:\cosh`   | <pur>`\cosh`</pur>   | `KaTeX:\cot`    | <pur>`\cot`</pur>    | `KaTeX:\coth`   | <pur>`\coth`</pur>   |
| `KaTeX:\csc`    | <pur>`\csc`</pur>    | `KaTeX:\deg`    | <pur>`\deg`</pur>    | `KaTeX:\det`    | <pur>`\det`</pur>    | `KaTeX:\dim`    | <pur>`\dim`</pur>    |
| `KaTeX:\exp`    | <pur>`\exp`</pur>    | `KaTeX:\gcd`    | <pur>`\gcd`</pur>    | `KaTeX:\hom`    | <pur>`\hom`</pur>    | `KaTeX:\inf`    | <pur>`\inf`</pur>    |
| `KaTeX:\ker`    | <pur>`\ker`</pur>    | `KaTeX:\lg`     | <pur>`\lg`</pur>     | `KaTeX:\lim`    | <pur>`\lim`</pur>    | `KaTeX:\liminf` | <pur>`\liminf`</pur> |
| `KaTeX:\limsup` | <pur>`\limsup`</pur> | `KaTeX:\ln`     | <pur>`\ln`</pur>     | `KaTeX:\log`    | <pur>`\log`</pur>    | `KaTeX:\max`    | <pur>`\max`</pur>    |
| `KaTeX:\min`    | <pur>`\min`</pur>    | `KaTeX:\Pr`     | <pur>`\Pr`</pur>     | `KaTeX:\sec`    | <pur>`\sec`</pur>    | `KaTeX:\sin`    | <pur>`\sin`</pur>    |
| `KaTeX:\sinh`   | <pur>`\sinh`</pur>   | `KaTeX:\sup`    | <pur>`\sup`</pur>    | `KaTeX:\tan`    | <pur>`\tan`</pur>    | `KaTeX:\tanh`   | <pur>`\tanh`</pur>   |

{.show-header left-align}

#### Function names should be in roman font, not italics, for example:

| :-         | :-                         | :-                  | :-                    |
| :--------- | :------------------------- | :------------------ | :-------------------- |
| Correct:   | <pur>`\tan(at-n\pi)`</pur> | `KaTeX:\rightarrow` | `KaTeX:\tan(at-n\pi)` |
| Incorrect: | <pur>`tan(at-n\pi)`</pur>  | `KaTeX:\rightarrow` | `KaTeX:tan(at-n\pi)`  |

{.left-align}

### Logic and Set Theory{.col-span-3}

| :-               | :-                    | :-                  | :-                       | :-                      | :-                           | :-                         | :-                                      |
| :--------------- | :-------------------- | :------------------ | :----------------------- | :---------------------- | :--------------------------- | :------------------------- | :-------------------------------------- |
| `KaTeX:\forall`  | <pur>`\forall`</pur>  | `KaTeX:\complement` | <pur>`\complement`</pur> | `KaTeX:\therefore`      | <pur>`\therefore`</pur>      | `KaTeX:\emptyset`          | <pur>`\emptyset`</pur>                  |
| `KaTeX:\exists`  | <pur>`\exists`</pur>  | `KaTeX:\subset`     | <pur>`\subset`</pur>     | `KaTeX:\because`        | <pur>`\because`</pur>        | `KaTeX:\empty`             | <pur>`\empty`</pur>                     |
| `KaTeX:\exist`   | <pur>`\exist`</pur>   | `KaTeX:\supset`     | <pur>`\supset`</pur>     | `KaTeX:\mapsto`         | <pur>`\mapsto`</pur>         | `KaTeX:\varnothing`        | <pur>`\varnothing`</pur>                |
| `KaTeX:\nexists` | <pur>`\nexists`</pur> | `KaTeX:\mid`        | <pur>`\mid`</pur>        | `KaTeX:\to`             | <pur>`\to`</pur>             | `KaTeX:\implies`           | <pur>`\implies`</pur>                   |
| `KaTeX:\in`      | <pur>`\in`</pur>      | `KaTeX:\land`       | <pur>`\land`</pur>       | `KaTeX:\gets`           | <pur>`\gets`</pur>           | `KaTeX:\impliedby`         | <pur>`\impliedby`</pur>                 |
| `KaTeX:\isin`    | <pur>`\isin`</pur>    | `KaTeX:\lor`        | <pur>`\lor`</pur>        | `KaTeX:\leftrightarrow` | <pur>`\leftrightarrow`</pur> | `KaTeX:\iff`               | <pur>`\iff`</pur>                       |
| `KaTeX:\notin`   | <pur>`\notin`</pur>   | `KaTeX:\ni`         | <pur>`\ni`</pur>         | `KaTeX:\notni`          | <pur>`\notni`</pur>          | `KaTeX:\neg` `KaTeX:\lnot` | <pur>`\neg`</pur> or <pur>`\lnot`</pur> |

{.left-align}

---

| :-                               | :-                                  | :-                   | :-                      |
| :------------------------------- | :---------------------------------- | :------------------- | :---------------------- |
| `KaTeX:\Set{ x \| x<\frac 1 2 }` | <pur>\Set{ x \| x<\frac 1 2 }</pur> | `KaTeX:\set{x\|x<5}` | <pur>\set{x\|x<5}</pur> |

### special symbols{.col-span-3}

| :-                 | :-                    | :-                 | :-                    | :-                                             | :-                                                  |
| :----------------- | :-------------------- | :----------------- | :-------------------- | :--------------------------------------------- | :-------------------------------------------------- |
| `KaTeX:\bra{\phi}` | <pur>\bra{\phi}</pur> | `KaTeX:\ket{\psi}` | <pur>\ket{\psi}</pur> | `KaTeX:\braket{\phi\|\psi}`                    | <pur>`\braket{\phi\|\psi}`</pur>                    |
| `KaTeX:\Bra{\phi}` | <pur>\Bra{\phi}</pur> | `KaTeX:\Ket{\psi}` | <pur>\Ket{\psi}</pur> | `KaTeX:\Braket{ ϕ \| \frac{∂^2}{∂ t^2} \| ψ }` | <pur>`\Braket{ ϕ \| \frac{∂^2}{∂ t^2} \| ψ }`</pur> |

{.left-align}

## Operator

### Mathematical operator {.col-span-3 row-span-2}

| :-                                 | :-                                      | :-              | :-                   | :-               | :-                    | :-                        | :-                             |
| :--------------------------------- | :-------------------------------------- | :-------------- | :------------------- | :--------------- | :-------------------- | :------------------------ | :----------------------------- |
| `KaTeX:\arcsin`                    | <pur>`\arcsin`</pur>                    | `KaTeX:\cosec`  | <pur>`\cosec`</pur>  | `KaTeX:\deg`     | <pur>`\deg`</pur>     | `KaTeX:\sec`              | <pur>`\sec`</pur>              |
| `KaTeX:\arccos`                    | <pur>`\arccos`</pur>                    | `KaTeX:\cosh`   | <pur>`\cosh`</pur>   | `KaTeX:\dim`     | <pur>`\dim`</pur>     | `KaTeX:\sin`              | <pur>`\sin`</pur>              |
| `KaTeX:\arctan`                    | <pur>`\arctan`</pur>                    | `KaTeX:\cot`    | <pur>`\cot`</pur>    | `KaTeX:\exp`     | <pur>`\exp`</pur>     | `KaTeX:\sinh`             | <pur>`\sinh`</pur>             |
| `KaTeX:\arctg`                     | <pur>`\arctg`</pur>                     | `KaTeX:\cotg`   | <pur>`\cotg`</pur>   | `KaTeX:\hom`     | <pur>`\hom`</pur>     | `KaTeX:\sh`               | <pur>`\sh`</pur>               |
| `KaTeX:\arcctg`                    | <pur>`\arcctg`</pur>                    | `KaTeX:\coth`   | <pur>`\coth`</pur>   | `KaTeX:\ker`     | <pur>`\ker`</pur>     | `KaTeX:\tan`              | <pur>`\tan`</pur>              |
| `KaTeX:\arg`                       | <pur>`\arg`</pur>                       | `KaTeX:\csc`    | <pur>`\csc`</pur>    | `KaTeX:\lg`      | <pur>`\lg`</pur>      | `KaTeX:\tanh`             | <pur>`\tanh`</pur>             |
| `KaTeX:\ch`                        | <pur>`\ch`</pur>                        | `KaTeX:\ctg`    | <pur>`\ctg`</pur>    | `KaTeX:\ln`      | <pur>`\ln`</pur>      | `KaTeX:\tg`               | <pur>`\tg`</pur>               |
| `KaTeX:\cos`                       | <pur>`\cos`</pur>                       | `KaTeX:\cth`    | <pur>`\cth`</pur>    | `KaTeX:\log`     | <pur>`\log`</pur>     | `KaTeX:\th`               | <pur>`\th`</pur>               |
| `KaTeX:\operatorname{f}`           | <pur>`\operatorname{f}`</pur>           |                 |                      |                  |                       |                           |                                |
| `KaTeX:\argmax`                    | <pur>`\argmax`</pur>                    | `KaTeX:\injlim` | <pur>`\injlim`</pur> | `KaTeX:\min`     | <pur>`\min`</pur>     | `KaTeX:\varinjlim`        | <pur>`\varinjlim`</pur>        |
| `KaTeX:\argmin`                    | <pur>`\argmin`</pur>                    | `KaTeX:\lim`    | <pur>`\lim`</pur>    | `KaTeX:\plim`    | <pur>`\plim`</pur>    | `KaTeX:\varliminf`        | <pur>`\varliminf`</pur>        |
| `KaTeX:\det`                       | <pur>`\det`</pur>                       | `KaTeX:\liminf` | <pur>`\liminf`</pur> | `KaTeX:\Pr`      | <pur>`\Pr`</pur>      | `KaTeX:\varlimsup`        | <pur>`\varlimsup`</pur>        |
| `KaTeX:\gcd`                       | <pur>`\gcd`</pur>                       | `KaTeX:\limsup` | <pur>`\limsup`</pur> | `KaTeX:\projlim` | <pur>`\projlim`</pur> | `KaTeX:\varprojlim`       | <pur>`\varprojlim`</pur>       |
| `KaTeX:\inf`                       | <pur>`\inf`</pur>                       | `KaTeX:\max`    | <pur>`\max`</pur>    | `KaTeX:\sup`     | <pur>`\sup`</pur>     | `KaTeX:\operatorname*{f}` | <pur>`\operatorname*{f}`</pur> |
| `KaTeX:\operatornamewithlimits{f}` | <pur>`\operatornamewithlimits{f}`</pur> |

{.left-align}

### Big operator {.col-span-2}

| :-             | :-                  | :-                | :-                     | :-                 | :-                      | :-                | :-                     |
| :------------- | :------------------ | :---------------- | :--------------------- | :----------------- | :---------------------- | :---------------- | :--------------------- |
| `KaTeX:\sum`   | <pur>`\sum`</pur>   | `KaTeX:\prod`     | <pur>`\prod`</pur>     | `KaTeX:\bigotimes` | <pur>`\bigotimes`</pur> | `KaTeX:\bigvee`   | <pur>`\bigvee`</pur>   |
| `KaTeX:\int`   | <pur>`\int`</pur>   | `KaTeX:\coprod`   | <pur>`\coprod`</pur>   | `KaTeX:\bigoplus`  | <pur>`\bigoplus`</pur>  | `KaTeX:\bigwedge` | <pur>`\bigwedge`</pur> |
| `KaTeX:\iint`  | <pur>`\iint`</pur>  | `KaTeX:\intop`    | <pur>`\intop`</pur>    | `KaTeX:\bigodot`   | <pur>`\bigodot`</pur>   | `KaTeX:\bigcap`   | <pur>`\bigcap`</pur>   |
| `KaTeX:\iiint` | <pur>`\iiint`</pur> | `KaTeX:\smallint` | <pur>`\smallint`</pur> | `KaTeX:\biguplus`  | <pur>`\biguplus`</pur>  | `KaTeX:\bigcup`   | <pur>`\bigcup`</pur>   |
| `KaTeX:\oint`  | <pur>`\oint`</pur>  | `KaTeX:\oiint`    | <pur>`\oiint`</pur>    | `KaTeX:\oiiint`    | <pur>`\oiiint`</pur>    | `KaTeX:\bigsqcup` | <pur>`\bigsqcup`</pur> |

{.left-align}

### Fractions and binomials {.row-span-2}

| :-                                  | :-                                       | :-                                  | :-                                       |
| :---------------------------------- | :--------------------------------------- | :---------------------------------- | :--------------------------------------- |
| `KaTeX:\frac{a}{b}`                 | <pur>`\frac{a}{b}`</pur>                 | `KaTeX:\tfrac{a}{b}`                | <pur>`\tfrac{a}{b}`</pur>                |
| `KaTeX:{a \over b}`                 | <pur>`{a \over b}`</pur>                 | `KaTeX:\dfrac{a}{b}`                | <pur>`\dfrac{a}{b}`</pur>                |
| `KaTeX:\genfrac ( ] {2pt}{1}a{a+1}` | <pur>`\genfrac ( ] {2pt}{1}a{a+1}`</pur> | `KaTeX:{a \above{2pt} b+1}`         | <pur>`{a \above{2pt} b+1}`</pur>         |
| `KaTeX:a/b`                         | <pur>`a/b`</pur>                         | `KaTeX:\cfrac{a}{1 + \cfrac{1}{b}}` | <pur>`\cfrac{a}{1 + \cfrac{1}{b}}`</pur> |

{.left-align}

| :-                    | :-                         | :-                    | :-                         |
| :-------------------- | :------------------------- | :-------------------- | :------------------------- |
| `KaTeX:\binom{n}{k}`  | <pur>`\binom{n}{k}`</pur>  | `KaTeX:\dbinom{n}{k}` | <pur>`\dbinom{n}{k}`</pur> |
| `KaTeX:{n\brace k}`   | <pur>`{n\brace k}`</pur>   | `KaTeX:{n \choose k}` | <pur>`{n \choose k}`</pur> |
| `KaTeX:\tbinom{n}{k}` | <pur>`\tbinom{n}{k}`</pur> | `KaTeX:{n\brack k}`   | <pur>`{n\brack k}`</pur>   |

{.left-align}

### \sqrt {.col-span-2}

| :-               | :-                    | :-                  | :-                       |
| :--------------- | :-------------------- | :------------------ | :----------------------- |
| `KaTeX:\sqrt{x}` | <pur>`\sqrt{x}`</pur> | `KaTeX:\sqrt[3]{x}` | <pur>`\sqrt[3]{x}`</pur> |

{.left-align}

### Binary operator {.col-span-3}

| :-                | :-                     | :-                      | :-                           | :-                      | :-                           | :-                       | :-                            |
| :---------------- | :--------------------- | :---------------------- | :--------------------------- | :---------------------- | :--------------------------- | :----------------------- | :---------------------------- |
| `KaTeX:+`         | <pur>`+`</pur>         | `KaTeX:\cdot`           | <pur>`\cdot`</pur>           | `KaTeX:\gtrdot`         | <pur>`\gtrdot`</pur>         | `KaTeX:x \pmod a`        | <pur>`x \pmod a`</pur>        |
| `KaTeX:-`         | <pur>`-`</pur>         | `KaTeX:\cdotp`          | <pur>`\cdotp`</pur>          | `KaTeX:\intercal`       | <pur>`\intercal`</pur>       | `KaTeX:x \pod a`         | <pur>`x \pod a`</pur>         |
| `KaTeX:/`         | <pur>`/`</pur>         | `KaTeX:\centerdot`      | <pur>`\centerdot`</pur>      | `KaTeX:\land`           | <pur>`\land`</pur>           | `KaTeX:\rhd`             | <pur>`\rhd`</pur>             |
| `KaTeX:*`         | <pur>`*`</pur>         | `KaTeX:\circ`           | <pur>`\circ`</pur>           | `KaTeX:\leftthreetimes` | <pur>`\leftthreetimes`</pur> | `KaTeX:\rightthreetimes` | <pur>`\rightthreetimes`</pur> |
| `KaTeX:\amalg`    | <pur>`\amalg`</pur>    | `KaTeX:\circledast`     | <pur>`\circledast`</pur>     | `KaTeX:\ldotp`          | <pur>`\ldotp`</pur>          | `KaTeX:\rtimes`          | <pur>`\rtimes`</pur>          |
| `KaTeX:\And`      | <pur>`\And`</pur>      | `KaTeX:\circledcirc`    | <pur>`\circledcirc`</pur>    | `KaTeX:\lor`            | <pur>`\lor`</pur>            | `KaTeX:\setminus`        | <pur>`\setminus`</pur>        |
| `KaTeX:\ast`      | <pur>`\ast`</pur>      | `KaTeX:\circleddash`    | <pur>`\circleddash`</pur>    | `KaTeX:\lessdot`        | <pur>`\lessdot`</pur>        | `KaTeX:\smallsetminus`   | <pur>`\smallsetminus`</pur>   |
| `KaTeX:\barwedge` | <pur>`\barwedge`</pur> | `KaTeX:\Cup`            | <pur>`\Cup`</pur>            | `KaTeX:\lhd`            | <pur>`\lhd`</pur>            | `KaTeX:\sqcap`           | <pur>`\sqcap`</pur>           |
| `KaTeX:\bigcirc`  | <pur>`\bigcirc`</pur>  | `KaTeX:\cup`            | <pur>`\cup`</pur>            | `KaTeX:\ltimes`         | <pur>`\ltimes`</pur>         | `KaTeX:\sqcup`           | <pur>`\sqcup`</pur>           |
| `KaTeX:\bmod`     | <pur>`\bmod`</pur>     | `KaTeX:\curlyvee`       | <pur>`\curlyvee`</pur>       | `KaTeX:x\mod a`         | <pur>`x\mod a`</pur>         | `KaTeX:\times`           | <pur>`\times`</pur>           |
| `KaTeX:\boxdot`   | <pur>`\boxdot`</pur>   | `KaTeX:\curlywedge`     | <pur>`\curlywedge`</pur>     | `KaTeX:\mp`             | <pur>`\mp`</pur>             | `KaTeX:\unlhd`           | <pur>`\unlhd`</pur>           |
| `KaTeX:\boxminus` | <pur>`\boxminus`</pur> | `KaTeX:\div`            | <pur>`\div`</pur>            | `KaTeX:\odot`           | <pur>`\odot`</pur>           | `KaTeX:\unrhd`           | <pur>`\unrhd`</pur>           |
| `KaTeX:\boxplus`  | <pur>`\boxplus`</pur>  | `KaTeX:\divideontimes`  | <pur>`\divideontimes`</pur>  | `KaTeX:\ominus`         | <pur>`\ominus`</pur>         | `KaTeX:\uplus`           | <pur>`\uplus`</pur>           |
| `KaTeX:\boxtimes` | <pur>`\boxtimes`</pur> | `KaTeX:\dotplus`        | <pur>`\dotplus`</pur>        | `KaTeX:\oplus`          | <pur>`\oplus`</pur>          | `KaTeX:\vee`             | <pur>`\vee`</pur>             |
| `KaTeX:\bullet`   | <pur>`\bullet`</pur>   | `KaTeX:\doublebarwedge` | <pur>`\doublebarwedge`</pur> | `KaTeX:\otimes`         | <pur>`\otimes`</pur>         | `KaTeX:\veebar`          | <pur>`\veebar`</pur>          |
| `KaTeX:\Cap`      | <pur>`\Cap`</pur>      | `KaTeX:\doublecap`      | <pur>`\doublecap`</pur>      | `KaTeX:\oslash`         | <pur>`\oslash`</pur>         | `KaTeX:\wedge`           | <pur>`\wedge`</pur>           |
| `KaTeX:\cap`      | <pur>`\cap`</pur>      | `KaTeX:\doublecup`      | <pur>`\doublecup`</pur>      | `KaTeX:\pm`             | <pur>`\pm`</pur>             | `KaTeX:\plusmn`          | <pur>`\plusmn`</pur>          |
| `KaTeX:\wr`       | <pur>`\wr`</pur>`      |

{.left-align}

## Relation

### Relation {.col-span-3}

| :-                        | :-                                                          | :-                     | :-                                                       | :-                     | :-                          | :-                        | :-                                              |
| :------------------------ | :---------------------------------------------------------- | :--------------------- | :------------------------------------------------------- | :--------------------- | :-------------------------- | :------------------------ | :---------------------------------------------- |
| `KaTeX:=`                 | <pur>`=`</pur>                                              | `KaTeX:\doteqdot`      | <pur>`\doteqdot`</pur>                                   | `KaTeX:\lessapprox`    | <pur>`\lessapprox`</pur>    | `KaTeX:\smile`            | <pur>`\smile`</pur>                             |
| `KaTeX:<`                 | <pur>`<`</pur>                                              | `KaTeX:\eqcirc`        | <pur>`\eqcirc`</pur>                                     | `KaTeX:\lesseqgtr`     | <pur>`\lesseqgtr`</pur>     | `KaTeX:\sqsubset`         | <pur>`\sqsubset`</pur>                          |
| `KaTeX:>`                 | <pur>`>`</pur>                                              | `KaTeX:\eqcolon`       | <pur>`\eqcolon`</pur> or <pur>`\minuscolon`</pur>        | `KaTeX:\lesseqqgtr`    | <pur>`\lesseqqgtr`</pur>    | `KaTeX:\sqsubseteq`       | <pur>`\sqsubseteq`</pur>                        |
| `KaTeX::`                 | <pur>`:`</pur>                                              | `KaTeX:\Eqcolon`       | <pur>`\Eqcolon`</pur> or <pur>`\minuscoloncolon`</pur>   | `KaTeX:\lessgtr`       | <pur>`\lessgtr`</pur>       | `KaTeX:\sqsupset`         | <pur>`\sqsupset`</pur>                          |
| `KaTeX:\approx`           | <pur>`\approx`</pur>                                        | `KaTeX:\eqqcolon`      | <pur>`\eqqcolon`</pur> or <pur>`\equalscolon`</pur>      | `KaTeX:\lesssim`       | <pur>`\lesssim`</pur>       | `KaTeX:\sqsupseteq`       | <pur>`\sqsupseteq`</pur>                        |
| `KaTeX:\approxcolon`      | <pur>`\approxcolon`</pur>                                   | `KaTeX:\Eqqcolon`      | <pur>`\Eqqcolon`</pur> or <pur>`\equalscoloncolon`</pur> | `KaTeX:\ll`            | <pur>`\ll`</pur>            | `KaTeX:\Subset`           | <pur>`\Subset`</pur>                            |
| `KaTeX:\approxcoloncolon` | <pur>`\approxcoloncolon`</pur>                              | `KaTeX:\eqsim`         | <pur>`\eqsim`</pur>                                      | `KaTeX:\lll`           | <pur>`\lll`</pur>           | `KaTeX:\subset`           | <pur>`\subset`</pur> or <pur>`\sub`</pur>       |
| `KaTeX:\approxeq`         | <pur>`\approxeq`</pur>                                      | `KaTeX:\eqslantgtr`    | <pur>`\eqslantgtr`</pur>                                 | `KaTeX:\llless`        | <pur>`\llless`</pur>        | `KaTeX:\subseteq`         | <pur>`\subseteq`</pur> or <pur>`\sube`</pur>    |
| `KaTeX:\asymp`            | <pur>`\asymp`</pur>                                         | `KaTeX:\eqslantless`   | <pur>`\eqslantless`</pur>                                | `KaTeX:\lt`            | <pur>`\lt`</pur>            | `KaTeX:\subseteqq`        | <pur>`\subseteqq`</pur>                         |
| `KaTeX:\backepsilon`      | <pur>`\backepsilon`</pur>                                   | `KaTeX:\equiv`         | <pur>`\equiv`</pur>                                      | `KaTeX:\mid`           | <pur>`\mid`</pur>           | `KaTeX:\succ`             | <pur>`\succ`</pur>                              |
| `KaTeX:\backsim`          | <pur>`\backsim`</pur>                                       | `KaTeX:\fallingdotseq` | <pur>`\fallingdotseq`</pur>                              | `KaTeX:\models`        | <pur>`\models`</pur>        | `KaTeX:\succapprox`       | <pur>`\succapprox`</pur>                        |
| `KaTeX:\backsimeq`        | <pur>`\backsimeq`</pur>                                     | `KaTeX:\frown`         | <pur>`\frown`</pur>                                      | `KaTeX:\multimap`      | <pur>`\multimap`</pur>      | `KaTeX:\succcurlyeq`      | <pur>`\succcurlyeq`</pur>                       |
| `KaTeX:\between`          | <pur>`\between`</pur>                                       | `KaTeX:\ge`            | <pur>`\ge`</pur>                                         | `KaTeX:\origof`        | <pur>`\origof`</pur>        | `KaTeX:\succeq`           | <pur>`\succeq`</pur>                            |
| `KaTeX:\bowtie`           | <pur>`\bowtie`</pur>                                        | `KaTeX:\geq`           | <pur>`\geq`</pur>                                        | `KaTeX:\owns`          | <pur>`\owns`</pur>          | `KaTeX:\succsim`          | <pur>`\succsim`</pur>                           |
| `KaTeX:\bumpeq`           | <pur>`\bumpeq`</pur>                                        | `KaTeX:\geqq`          | <pur>`\geqq`</pur>                                       | `KaTeX:\parallel`      | <pur>`\parallel`</pur>      | `KaTeX:\Supset`           | <pur>`\Supset`</pur>                            |
| `KaTeX:\Bumpeq`           | <pur>`\Bumpeq`</pur>                                        | `KaTeX:\geqslant`      | <pur>`\geqslant`</pur>                                   | `KaTeX:\perp`          | <pur>`\perp`</pur>          | `KaTeX:\supset`           | <pur>`\supset`</pur>                            |
| `KaTeX:\circeq`           | <pur>`\circeq`</pur>                                        | `KaTeX:\gg`            | <pur>`\gg`</pur>                                         | `KaTeX:\pitchfork`     | <pur>`\pitchfork`</pur>     | `KaTeX:\supseteq`         | <pur>`\supseteq`</pur> or <pur>`\supe`</pur>    |
| `KaTeX:\colonapprox`      | <pur>`\colonapprox`</pur>                                   | `KaTeX:\ggg`           | <pur>`\ggg`</pur>                                        | `KaTeX:\prec`          | <pur>`\prec`</pur>          | `KaTeX:\supseteqq`        | <pur>`\supseteqq`</pur>                         |
| `KaTeX:\Colonapprox`      | <pur>`\Colonapprox`</pur> or <pur>`\coloncolonapprox`</pur> | `KaTeX:\gggtr`         | <pur>`\gggtr`</pur>                                      | `KaTeX:\precapprox`    | <pur>`\precapprox`</pur>    | `KaTeX:\thickapprox`      | <pur>`\thickapprox`</pur>                       |
| `KaTeX:\coloneq`          | <pur>`\coloneq`</pur> or <pur>`\colonminus`</pur>           | `KaTeX:\gt`            | <pur>`\gt`</pur>                                         | `KaTeX:\preccurlyeq`   | <pur>`\preccurlyeq`</pur>   | `KaTeX:\thicksim`         | <pur>`\thicksim`</pur>                          |
| `KaTeX:\Coloneq`          | <pur>`\Coloneq`</pur> or <pur>`\coloncolonminus`</pur>      | `KaTeX:\gtrapprox`     | <pur>`\gtrapprox`</pur>                                  | `KaTeX:\preceq`        | <pur>`\preceq`</pur>        | `KaTeX:\trianglelefteq`   | <pur>`\trianglelefteq`</pur>                    |
| `KaTeX:\coloneqq`         | <pur>`\coloneqq`</pur> or <pur>`\colonequals`</pur>         | `KaTeX:\gtreqless`     | <pur>`\gtreqless`</pur>                                  | `KaTeX:\precsim`       | <pur>`\precsim`</pur>       | `KaTeX:\triangleq`        | <pur>`\triangleq`</pur>                         |
| `KaTeX:\Coloneqq`         | <pur>`\Coloneqq`</pur> or <pur>`\coloncolonequals`</pur>    | `KaTeX:\gtreqqless`    | <pur>`\gtreqqless`</pur>                                 | `KaTeX:\propto`        | <pur>`\propto`</pur>        | `KaTeX:\trianglerighteq`  | <pur>`\trianglerighteq`</pur>                   |
| `KaTeX:\colonsim`         | <pur>`\colonsim`</pur>                                      | `KaTeX:\gtrless`       | <pur>`\gtrless`</pur>                                    | `KaTeX:\risingdotseq`  | <pur>`\risingdotseq`</pur>  | `KaTeX:\varpropto`        | <pur>`\varpropto`</pur>                         |
| `KaTeX:\Colonsim`         | <pur>`\Colonsim`</pur> or <pur>`\coloncolonsim`</pur>       | `KaTeX:\gtrsim`        | <pur>`\gtrsim`</pur>                                     | `KaTeX:\shortmid`      | <pur>`\shortmid`</pur>      | `KaTeX:\vartriangle`      | <pur>`\vartriangle`</pur>                       |
| `KaTeX:\cong`             | <pur>`\cong`</pur>                                          | `KaTeX:\imageof`       | <pur>`\imageof`</pur>                                    | `KaTeX:\shortparallel` | <pur>`\shortparallel`</pur> | `KaTeX:\vartriangleleft`  | <pur>`\vartriangleleft`</pur>                   |
| `KaTeX:\curlyeqprec`      | <pur>`\curlyeqprec`</pur>                                   | `KaTeX:\in`            | <pur>`\in`</pur> or <pur>`\isin`</pur>                   | `KaTeX:\sim`           | <pur>`\sim`</pur>           | `KaTeX:\vartriangleright` | <pur>`\vartriangleright`</pur>                  |
| `KaTeX:\curlyeqsucc`      | <pur>`\curlyeqsucc`</pur>                                   | `KaTeX:\Join`          | <pur>`\Join`</pur>                                       | `KaTeX:\simcolon`      | <pur>`\simcolon`</pur>      | `KaTeX:\vcentcolon`       | <pur>`\vcentcolon`</pur> or <pur>`\ratio`</pur> |
| `KaTeX:\dashv`            | <pur>`\dashv`</pur>                                         | `KaTeX:\le`            | <pur>`\le`</pur>                                         | `KaTeX:\simcoloncolon` | <pur>`\simcoloncolon`</pur> | `KaTeX:\vdash`            | <pur>`\vdash`</pur>                             |
| `KaTeX:\dblcolon`         | <pur>`\dblcolon`</pur> or <pur>`\coloncolon`</pur>          | `KaTeX:\leq`           | <pur>`\leq`</pur>                                        | `KaTeX:\simeq`         | <pur>`\simeq`</pur>         | `KaTeX:\vDash`            | <pur>`\vDash`</pur>                             |
| `KaTeX:\doteq`            | <pur>`\doteq`</pur>                                         | `KaTeX:\leqq`          | <pur>`\leqq`</pur>                                       | `KaTeX:\smallfrown`    | <pur>`\smallfrown`</pur>    | `KaTeX:\Vdash`            | <pur>`\Vdash`</pur>                             |
| `KaTeX:\Doteq`            | <pur>`\Doteq`</pur>                                         | `KaTeX:\leqslant`      | <pur>`\leqslant`</pur>                                   | `KaTeX:\smallsmile`    | <pur>`\smallsmile`</pur>    | `KaTeX:\Vvdash`           | <pur>`\Vvdash`</pur>                            |

{.left-align}

### Negative relationship {.col-span-3}

| :-                 | :-                      | :-                      | :-                           | :-                        | :-                             | :-                     | :-                          |
| :----------------- | :---------------------- | :---------------------- | :--------------------------- | :------------------------ | :----------------------------- | :--------------------- | :-------------------------- |
| `KaTeX:\gnapprox`  | <pur>`\gnapprox`</pur>  | `KaTeX:\ngeqslant`      | <pur>`\ngeqslant`</pur>      | `KaTeX:\nsubseteq`        | <pur>`\nsubseteq`</pur>        | `KaTeX:\precneqq`      | <pur>`\precneqq`</pur>      |
| `KaTeX:\gneq`      | <pur>`\gneq`</pur>      | `KaTeX:\ngtr`           | <pur>`\ngtr`</pur>           | `KaTeX:\nsubseteqq`       | <pur>`\nsubseteqq`</pur>       | `KaTeX:\precnsim`      | <pur>`\precnsim`</pur>      |
| `KaTeX:\gneqq`     | <pur>`\gneqq`</pur>     | `KaTeX:\nleq`           | <pur>`\nleq`</pur>           | `KaTeX:\nsucc`            | <pur>`\nsucc`</pur>            | `KaTeX:\subsetneq`     | <pur>`\subsetneq`</pur>     |
| `KaTeX:\gnsim`     | <pur>`\gnsim`</pur>     | `KaTeX:\nleqq`          | <pur>`\nleqq`</pur>          | `KaTeX:\nsucceq`          | <pur>`\nsucceq`</pur>          | `KaTeX:\subsetneqq`    | <pur>`\subsetneqq`</pur>    |
| `KaTeX:\gvertneqq` | <pur>`\gvertneqq`</pur> | `KaTeX:\nleqslant`      | <pur>`\nleqslant`</pur>      | `KaTeX:\nsupseteq`        | <pur>`\nsupseteq`</pur>        | `KaTeX:\succnapprox`   | <pur>`\succnapprox`</pur>   |
| `KaTeX:\lnapprox`  | <pur>`\lnapprox`</pur>  | `KaTeX:\nless`          | <pur>`\nless`</pur>          | `KaTeX:\nsupseteqq`       | <pur>`\nsupseteqq`</pur>       | `KaTeX:\succneqq`      | <pur>`\succneqq`</pur>      |
| `KaTeX:\lneq`      | <pur>`\lneq`</pur>      | `KaTeX:\nmid`           | <pur>`\nmid`</pur>           | `KaTeX:\ntriangleleft`    | <pur>`\ntriangleleft`</pur>    | `KaTeX:\succnsim`      | <pur>`\succnsim`</pur>      |
| `KaTeX:\lneqq`     | <pur>`\lneqq`</pur>     | `KaTeX:\notin`          | <pur>`\notin`</pur>          | `KaTeX:\ntrianglelefteq`  | <pur>`\ntrianglelefteq`</pur>  | `KaTeX:\supsetneq`     | <pur>`\supsetneq`</pur>     |
| `KaTeX:\lnsim`     | <pur>`\lnsim`</pur>     | `KaTeX:\notni`          | <pur>`\notni`</pur>          | `KaTeX:\ntriangleright`   | <pur>`\ntriangleright`</pur>   | `KaTeX:\supsetneqq`    | <pur>`\supsetneqq`</pur>    |
| `KaTeX:\lvertneqq` | <pur>`\lvertneqq`</pur> | `KaTeX:\nparallel`      | <pur>`\nparallel`</pur>      | `KaTeX:\ntrianglerighteq` | <pur>`\ntrianglerighteq`</pur> | `KaTeX:\varsubsetneq`  | <pur>`\varsubsetneq`</pur>  |
| `KaTeX:\ncong`     | <pur>`\ncong`</pur>     | `KaTeX:\nprec`          | <pur>`\nprec`</pur>          | `KaTeX:\nvdash`           | <pur>`\nvdash`</pur>           | `KaTeX:\varsubsetneqq` | <pur>`\varsubsetneqq`</pur> |
| `KaTeX:\ne`        | <pur>`\ne`</pur>        | `KaTeX:\npreceq`        | <pur>`\npreceq`</pur>        | `KaTeX:\nvDash`           | <pur>`\nvDash`</pur>           | `KaTeX:\varsupsetneq`  | <pur>`\varsupsetneq`</pur>  |
| `KaTeX:\neq`       | <pur>`\neq`</pur>       | `KaTeX:\nshortmid`      | <pur>`\nshortmid`</pur>      | `KaTeX:\nVDash`           | <pur>`\nVDash`</pur>           | `KaTeX:\varsupsetneqq` | <pur>`\varsupsetneqq`</pur> |
| `KaTeX:\ngeq`      | <pur>`\ngeq`</pur>      | `KaTeX:\nshortparallel` | <pur>`\nshortparallel`</pur> | `KaTeX:\nVdash`           | <pur>`\nVdash`</pur>           |                        |                             |
| `KaTeX:\ngeqq`     | <pur>`\ngeqq`</pur>     | `KaTeX:\nsim`           | <pur>`\nsim`</pur>           | `KaTeX:\precnapprox`      | <pur>`\precnapprox`</pur>      |                        |                             |

`KaTeX:\not =` <pur>`\not =`</pur>

### Arrow {.col-span-3}

| :-                        | :-                             | :-                           | :-                                | :-                         | :-                              |
| :------------------------ | :----------------------------- | :--------------------------- | :-------------------------------- | :------------------------- | :------------------------------ |
| `KaTeX:\circlearrowleft`  | <pur>`\circlearrowleft`</pur>  | `KaTeX:\leftharpoonup`       | <pur>`\leftharpoonup`</pur>       | `KaTeX:\rArr`              | <pur>`\rArr`</pur>              |
| `KaTeX:\circlearrowright` | <pur>`\circlearrowright`</pur> | `KaTeX:\leftleftarrows`      | <pur>`\leftleftarrows`</pur>      | `KaTeX:\rarr`              | <pur>`\rarr`</pur>              |
| `KaTeX:\curvearrowleft`   | <pur>`\curvearrowleft`</pur>   | `KaTeX:\leftrightarrow`      | <pur>`\leftrightarrow`</pur>      | `KaTeX:\restriction`       | <pur>`\restriction`</pur>       |
| `KaTeX:\curvearrowright`  | <pur>`\curvearrowright`</pur>  | `KaTeX:\Leftrightarrow`      | <pur>`\Leftrightarrow`</pur>      | `KaTeX:\rightarrow`        | <pur>`\rightarrow`</pur>        |
| `KaTeX:\Darr`             | <pur>`\Darr`</pur>             | `KaTeX:\leftrightarrows`     | <pur>`\leftrightarrows`</pur>     | `KaTeX:\Rightarrow`        | <pur>`\Rightarrow`</pur>        |
| `KaTeX:\dArr`             | <pur>`\dArr`</pur>             | `KaTeX:\leftrightharpoons`   | <pur>`\leftrightharpoons`</pur>   | `KaTeX:\rightarrowtail`    | <pur>`\rightarrowtail`</pur>    |
| `KaTeX:\darr`             | <pur>`\darr`</pur>             | `KaTeX:\leftrightsquigarrow` | <pur>`\leftrightsquigarrow`</pur> | `KaTeX:\rightharpoondown`  | <pur>`\rightharpoondown`</pur>  |
| `KaTeX:\dashleftarrow`    | <pur>`\dashleftarrow`</pur>    | `KaTeX:\Lleftarrow`          | <pur>`\Lleftarrow`</pur>          | `KaTeX:\rightharpoonup`    | <pur>`\rightharpoonup`</pur>    |
| `KaTeX:\dashrightarrow`   | <pur>`\dashrightarrow`</pur>   | `KaTeX:\longleftarrow`       | <pur>`\longleftarrow`</pur>       | `KaTeX:\rightleftarrows`   | <pur>`\rightleftarrows`</pur>   |
| `KaTeX:\downarrow`        | <pur>`\downarrow`</pur>        | `KaTeX:\Longleftarrow`       | <pur>`\Longleftarrow`</pur>       | `KaTeX:\rightleftharpoons` | <pur>`\rightleftharpoons`</pur> |
| `KaTeX:\Downarrow`        | <pur>`\Downarrow`</pur>        | `KaTeX:\longleftrightarrow`  | <pur>`\longleftrightarrow`</pur>  | `KaTeX:\rightrightarrows`  | <pur>`\rightrightarrows`</pur>  |
| `KaTeX:\downdownarrows`   | <pur>`\downdownarrows`</pur>   | `KaTeX:\Longleftrightarrow`  | <pur>`\Longleftrightarrow`</pur>  | `KaTeX:\rightsquigarrow`   | <pur>`\rightsquigarrow`</pur>   |
| `KaTeX:\downharpoonleft`  | <pur>`\downharpoonleft`</pur>  | `KaTeX:\longmapsto`          | <pur>`\longmapsto`</pur>          | `KaTeX:\Rrightarrow`       | <pur>`\Rrightarrow`</pur>       |
| `KaTeX:\downharpoonright` | <pur>`\downharpoonright`</pur> | `KaTeX:\longrightarrow`      | <pur>`\longrightarrow`</pur>      | `KaTeX:\Rsh`               | <pur>`\Rsh`</pur>               |
| `KaTeX:\gets`             | <pur>`\gets`</pur>             | `KaTeX:\Longrightarrow`      | <pur>`\Longrightarrow`</pur>      | `KaTeX:\searrow`           | <pur>`\searrow`</pur>           |
| `KaTeX:\Harr`             | <pur>`\Harr`</pur>             | `KaTeX:\looparrowleft`       | <pur>`\looparrowleft`</pur>       | `KaTeX:\swarrow`           | <pur>`\swarrow`</pur>           |
| `KaTeX:\hArr`             | <pur>`\hArr`</pur>             | `KaTeX:\looparrowright`      | <pur>`\looparrowright`</pur>      | `KaTeX:\to`                | <pur>`\to`</pur>                |
| `KaTeX:\harr`             | <pur>`\harr`</pur>             | `KaTeX:\Lrarr`               | <pur>`\Lrarr`</pur>               | `KaTeX:\twoheadleftarrow`  | <pur>`\twoheadleftarrow`</pur>  |
| `KaTeX:\hookleftarrow`    | <pur>`\hookleftarrow`</pur>    | `KaTeX:\lrArr`               | <pur>`\lrArr`</pur>               | `KaTeX:\twoheadrightarrow` | <pur>`\twoheadrightarrow`</pur> |
| `KaTeX:\hookrightarrow`   | <pur>`\hookrightarrow`</pur>   | `KaTeX:\lrarr`               | <pur>`\lrarr`</pur>               | `KaTeX:\Uarr`              | <pur>`\Uarr`</pur>              |
| `KaTeX:\iff`              | <pur>`\iff`</pur>              | `KaTeX:\Lsh`                 | <pur>`\Lsh`</pur>                 | `KaTeX:\uArr`              | <pur>`\uArr`</pur>              |
| `KaTeX:\impliedby`        | <pur>`\impliedby`</pur>        | `KaTeX:\mapsto`              | <pur>`\mapsto`</pur>              | `KaTeX:\uarr`              | <pur>`\uarr`</pur>              |
| `KaTeX:\implies`          | <pur>`\implies`</pur>          | `KaTeX:\nearrow`             | <pur>`\nearrow`</pur>             | `KaTeX:\uparrow`           | <pur>`\uparrow`</pur>           |
| `KaTeX:\Larr`             | <pur>`\Larr`</pur>             | `KaTeX:\nleftarrow`          | <pur>`\nleftarrow`</pur>          | `KaTeX:\Uparrow`           | <pur>`\Uparrow`</pur>           |
| `KaTeX:\lArr`             | <pur>`\lArr`</pur>             | `KaTeX:\nLeftarrow`          | <pur>`\nLeftarrow`</pur>          | `KaTeX:\updownarrow`       | <pur>`\updownarrow`</pur>       |
| `KaTeX:\larr`             | <pur>`\larr`</pur>             | `KaTeX:\nleftrightarrow`     | <pur>`\nleftrightarrow`</pur>     | `KaTeX:\Updownarrow`       | <pur>`\Updownarrow`</pur>       |
| `KaTeX:\leadsto`          | <pur>`\leadsto`</pur>          | `KaTeX:\nLeftrightarrow`     | <pur>`\nLeftrightarrow`</pur>     | `KaTeX:\upharpoonleft`     | <pur>`\upharpoonleft`</pur>     |
| `KaTeX:\leftarrow`        | <pur>`\leftarrow`</pur>        | `KaTeX:\nrightarrow`         | <pur>`\nrightarrow`</pur>         | `KaTeX:\upharpoonright`    | <pur>`\upharpoonright`</pur>    |
| `KaTeX:\Leftarrow`        | <pur>`\Leftarrow`</pur>        | `KaTeX:\nRightarrow`         | <pur>`\nRightarrow`</pur>         | `KaTeX:\upuparrows`        | <pur>`\upuparrows`</pur>        |
| `KaTeX:\leftarrowtail`    | <pur>`\leftarrowtail`</pur>    | `KaTeX:\nwarrow`             | <pur>`\nwarrow`</pur>             |                            |                                 |
| `KaTeX:\leftharpoondown`  | <pur>`\leftharpoondown`</pur>  | `KaTeX:\Rarr`                | <pur>`\Rarr`</pur>                |                            |                                 |

{.left-align}

### 可扩展箭头 {.col-span-3}

| :-                               | :-                                    | :-                                | :-                                     |
| :------------------------------- | :------------------------------------ | :-------------------------------- | :------------------------------------- |
| `KaTeX:\xleftarrow{abc}`         | <pur>`\xleftarrow{abc}`</pur>         | `KaTeX:\xrightarrow[under]{over}` | <pur>`\xrightarrow[under]{over}`</pur> |
| `KaTeX:\xLeftarrow{abc}`         | <pur>`\xLeftarrow{abc}`</pur>         | `KaTeX:\xRightarrow{abc}`         | <pur>`\xRightarrow{abc}`</pur>         |
| `KaTeX:\xleftrightarrow{abc}`    | <pur>`\xleftrightarrow{abc}`</pur>    | `KaTeX:\xLeftrightarrow{abc}`     | <pur>`\xLeftrightarrow{abc}`</pur>     |
| `KaTeX:\xhookleftarrow{abc}`     | <pur>`\xhookleftarrow{abc}`</pur>     | `KaTeX:\xhookrightarrow{abc}`     | <pur>`\xhookrightarrow{abc}`</pur>     |
| `KaTeX:\xtwoheadleftarrow{abc}`  | <pur>`\xtwoheadleftarrow{abc}`</pur>  | `KaTeX:\xtwoheadrightarrow{abc}`  | <pur>`\xtwoheadrightarrow{abc}`</pur>  |
| `KaTeX:\xleftharpoonup{abc}`     | <pur>`\xleftharpoonup{abc}`</pur>     | `KaTeX:\xrightharpoonup{abc}`     | <pur>`\xrightharpoonup{abc}`</pur>     |
| `KaTeX:\xleftharpoondown{abc}`   | <pur>`\xleftharpoondown{abc}`</pur>   | `KaTeX:\xrightharpoondown{abc}`   | <pur>`\xrightharpoondown{abc}`</pur>   |
| `KaTeX:\xleftrightharpoons{abc}` | <pur>`\xleftrightharpoons{abc}`</pur> | `KaTeX:\xrightleftharpoons{abc}`  | <pur>`\xrightleftharpoons{abc}`</pur>  |
| `KaTeX:\xtofrom{abc}`            | <pur>`\xtofrom{abc}`</pur>            | `KaTeX:\xmapsto{abc}`             | <pur>`\xmapsto{abc}`</pur>             |
| `KaTeX:\xlongequal{abc}`         | <pur>`\xlongequal{abc}`</pur>         |                                   |                                        |

## Symbols and Punctuation

### Symbols and Punctuation {.col-span-3}

| :-                                | :-                                        | :-                           | :-                                | :-                            | :-                                 |
| :-------------------------------- | :---------------------------------------- | :--------------------------- | :-------------------------------- | :---------------------------- | :--------------------------------- |
| `KaTeX:% comment`                 | <pur>`% comment`</pur>                    | `KaTeX:\dots`                | <pur>`\dots`</pur>                | `KaTeX:\KaTeX`                | <pur>`\KaTeX`</pur>                |
| `KaTeX:\%`                        | <pur>`\%`</pur>                           | `KaTeX:\cdots`               | <pur>`\cdots`</pur>               | `KaTeX:\LaTeX`                | <pur>`\LaTeX`</pur>                |
| `KaTeX:\#`                        | <pur>`\#`</pur>                           | `KaTeX:\ddots`               | <pur>`\ddots`</pur>               | `KaTeX:\TeX`                  | <pur>`\TeX`</pur>                  |
| `KaTeX:\&`                        | <pur>`\&`</pur>                           | `KaTeX:\ldots`               | <pur>`\ldots`</pur>               | `KaTeX:\nabla`                | <pur>`\nabla`</pur>                |
| `KaTeX:\_`                        | <pur>`\_`</pur>                           | `KaTeX:\vdots`               | <pur>`\vdots`</pur>               | `KaTeX:\infty`                | <pur>`\infty`</pur>                |
| `KaTeX:\text{\textunderscore}`    | <pur>`\text{\textunderscore}`</pur>       | `KaTeX:\dotsb`               | <pur>`\dotsb`</pur>               | `KaTeX:\infin`                | <pur>`\infin`</pur>                |
| `KaTeX:\text{--}`                 | <pur>`\text{--}`</pur>                    | `KaTeX:\dotsc`               | <pur>`\dotsc`</pur>               | `KaTeX:\checkmark`            | <pur>`\checkmark`</pur>            |
| `KaTeX:\text{\textendash}`        | <pur>`\text{\textendash}`</pur>           | `KaTeX:\dotsi`               | <pur>`\dotsi`</pur>               | `KaTeX:\dag`                  | <pur>`\dag`</pur>                  |
| `KaTeX:\text{---}`                | <pur>`\text{---}`</pur>                   | `KaTeX:\dotsm`               | <pur>`\dotsm`</pur>               | `KaTeX:\dagger`               | <pur>`\dagger`</pur>               |
| `KaTeX:\text{\textemdash}`        | <pur>`\text{\textemdash}`</pur>           | `KaTeX:\dotso`               | <pur>`\dotso`</pur>               | `KaTeX:\text{\textdagger}`    | <pur>`\text{\textdagger}`</pur>    |
| `KaTeX:\text{\textasciitilde}`    | <pur>`\text{\textasciitilde}`</pur>       | `KaTeX:\sdot`                | <pur>`\sdot`</pur>                | `KaTeX:\ddag`                 | <pur>`\ddag`</pur>                 |
| `KaTeX:\text{\textasciicircum}`   | <pur>`\text{\textasciicircum}`</pur>      | `KaTeX:\mathellipsis`        | <pur>`\mathellipsis`</pur>        | `KaTeX:\ddagger`              | <pur>`\ddagger`</pur>              |
| <code>KaTeX:\`</code>             | <pur>\`</pur>                             | `KaTeX:\text{\textellipsis}` | <pur>`\text{\textellipsis}`</pur> | `KaTeX:\text{\textdaggerdbl}` | <pur>`\text{\textdaggerdbl}`</pur> |
| `KaTeX:\text{\textquoteleft}`     | <pur>`text{\textquoteleft}`</pur>         | `KaTeX:\Box`                 | <pur>`\Box`</pur>                 | `KaTeX:\Dagger`               | <pur>`\Dagger`</pur>               |
| `KaTeX:\lq`                       | <pur>`\lq`</pur>                          | `KaTeX:\square`              | <pur>`\square`</pur>              | `KaTeX:\angle`                | <pur>`\angle`</pur>                |
| `KaTeX:\text{\textquoteright}`    | <pur>`\text{\textquoteright}`</pur>       | `KaTeX:\blacksquare`         | <pur>`\blacksquare`</pur>         | `KaTeX:\measuredangle`        | <pur>`\measuredangle`</pur>        |
| `KaTeX:\rq`                       | <pur>`\rq`</pur>                          | `KaTeX:\triangle`            | <pur>`\triangle`</pur>            | `KaTeX:\sphericalangle`       | <pur>`\sphericalangle`</pur>       |
| `KaTeX:\text{\textquotedblleft}`  | <pur>`\text{\textquotedblleft}`</pur>     | `KaTeX:\triangledown`        | <pur>`\triangledown`</pur>        | `KaTeX:\top`                  | <pur>`\top`</pur>                  |
| `KaTeX:"`                         | <pur>`"`</pur>                            | `KaTeX:\triangleleft`        | <pur>`\triangleleft`</pur>        | `KaTeX:\bot`                  | <pur>`\bot`</pur>                  |
| `KaTeX:\text{\textquotedblright}` | <pur>`\text{\textquotedblright}`</pur>    | `KaTeX:\triangleright`       | <pur>`\triangleright`</pur>       | `KaTeX:\$`                    | <pur>`\$`</pur>                    |
| `KaTeX:\colon`                    | <pur>`\colon`</pur>                       | `KaTeX:\bigtriangledown`     | <pur>`\bigtriangledown`</pur>     | `KaTeX:\text{\textdollar}`    | <pur>`\text{\textdollar}`</pur>    |
| `KaTeX:\backprime`                | <pur>`\backprime`</pur>                   | `KaTeX:\bigtriangleup`       | <pur>`\bigtriangleup`</pur>       | `KaTeX:\pounds`               | <pur>`\pounds`</pur>               |
| `KaTeX:\prime`                    | <pur>`\prime`</pur>                       | `KaTeX:\blacktriangle`       | <pur>`\blacktriangle`</pur>       | `KaTeX:\mathsterling`         | <pur>`\mathsterling`</pur>         |
| `KaTeX:\text{\textless}`          | <pur>`\text{\textless}`</pur>             | `KaTeX:\blacktriangledown`   | <pur>`\blacktriangledown`</pur>   | `KaTeX:\text{\textsterling}`  | <pur>`\text{\textsterling}`</pur>  |
| `KaTeX:\text{\textgreater}`       | <pur>`\text{\textgreater}`</pur>          | `KaTeX:\blacktriangleleft`   | <pur>`\blacktriangleleft`</pur>   | `KaTeX:\yen`                  | <pur>`\yen`</pur>                  |
| `KaTeX:\text{\textbar}`           | <pur>`\text{\textbar}`</pur>              | `KaTeX:\blacktriangleright`  | <pur>`\blacktriangleright`</pur>  | `KaTeX:\surd`                 | <pur>`\surd`</pur>                 |
| `KaTeX:\text{\textbardbl}`        | <pur>`\text{\textbardbl}`</pur>           | `KaTeX:\diamond`             | <pur>`\diamond`</pur>             | `KaTeX:\degree`               | <pur>`\degree`</pur>               |
| `KaTeX:\text{\textbraceleft}`     | <pur>`\text{\textbraceleft}`</pur>        | `KaTeX:\Diamond`             | <pur>`\Diamond`</pur>             | `KaTeX:\text{\textdegree}`    | <pur>`\text{\textdegree}`</pur>    |
| `KaTeX:\text{\textbraceright}`    | <pur>`\text{\textbraceright}`</pur>       | `KaTeX:\lozenge`             | <pur>`\lozenge`</pur>             | `KaTeX:\mho`                  | <pur>`\mho`</pur>                  |
| `KaTeX:\text{\textbackslash}`     | <pur>`\text{\textbackslash}`</pur>        | `KaTeX:\blacklozenge`        | <pur>`\blacklozenge`</pur>        | `KaTeX:\diagdown`             | <pur>`\diagdown`</pur>             |
| `KaTeX:\text{\P}`                 | <pur>`\text{\P}`</pur> or <pur>`\P`</pur> | `KaTeX:\star`                | <pur>`\star`</pur>                | `KaTeX:\diagup`               | <pur>`\diagup`</pur>               |
| `KaTeX:\text{\S}`                 | <pur>`\text{\S}`</pur> or <pur>`\S`</pur> | `KaTeX:\bigstar`             | <pur>`\bigstar`</pur>             | `KaTeX:\flat`                 | <pur>`\flat`</pur>                 |
| `KaTeX:\text{\sect}`              | <pur>`\text{\sect}`</pur>                 | `KaTeX:\clubsuit`            | <pur>`\clubsuit`</pur>            | `KaTeX:\natural`              | <pur>`\natural`</pur>              |
| `KaTeX:\copyright`                | <pur>`\copyright`</pur>                   | `KaTeX:\clubs`               | <pur>`\clubs`</pur>               | `KaTeX:\sharp`                | <pur>`\sharp`</pur>                |
| `KaTeX:\circledR`                 | <pur>`\circledR`</pur>                    | `KaTeX:\diamondsuit`         | <pur>`\diamondsuit`</pur>         | `KaTeX:\heartsuit`            | <pur>`\heartsuit`</pur>            |
| `KaTeX:\text{\textregistered}`    | <pur>`\text{\textregistered}`</pur>       | `KaTeX:\diamonds`            | <pur>`\diamonds`</pur>            | `KaTeX:\hearts`               | <pur>`\hearts`</pur>               |
| `KaTeX:\circledS`                 | <pur>`\circledS`</pur>                    | `KaTeX:\spadesuit`           | <pur>`\spadesuit`</pur>           | `KaTeX:\spades`               | <pur>`\spades`</pur>               |
| `KaTeX:\text{\textcircled a}`     | <pur>`\text{\textcircled a}`</pur>        | `KaTeX:\maltese`             | <pur>`\maltese`</pur>             | `KaTeX:\minuso`               | <pur>`\minuso`</pur>               |

## Environments

### Environments 1

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{matrix}
   a & b \\
   c & d
\end{matrix}
```

<!--rehype:style=flex:1;-->

```LaTeX
\begin{matrix}
   a & b \\
   c & d
\end{matrix}
```

<!--rehype:style=flex:1;-->

### Environments 2

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{array}{cc}
   a & b \\
   c & d
\end{array}
```

<!--rehype:style=flex:1;-->

```LaTeX
\begin{array}{cc}
   a & b \\
   c & d
\end{array}
```

### Environments 3

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{pmatrix}
   a & b \\
   c & d
\end{pmatrix}
```

<!--rehype:style=flex:1;-->

```LaTeX
\begin{pmatrix}
   a & b \\
   c & d
\end{pmatrix}
```

<!--rehype:style=flex:1;-->

### Environments 4

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{bmatrix}
   a & b \\
   c & d
\end{bmatrix}
```

```LaTeX
\begin{bmatrix}
   a & b \\
   c & d
\end{bmatrix}
```

### Environments 5

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{vmatrix}
   a & b \\
   c & d
\end{vmatrix}
```

<!--rehype:style=flex:1;-->

```LaTeX
\begin{vmatrix}
   a & b \\
   c & d
\end{vmatrix}
```

<!--rehype:style=flex:1;-->

### Environments 6

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{Vmatrix}
   a & b \\
   c & d
\end{Vmatrix}
```

<!--rehype:style=flex:1;-->

```LaTeX
\begin{Vmatrix}
   a & b \\
   c & d
\end{Vmatrix}
```

<!--rehype:style=flex:1;-->

### Environments 7

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{Bmatrix}
   a & b \\
   c & d
\end{Bmatrix}
```

```LaTeX
\begin{Bmatrix}
   a & b \\
   c & d
\end{Bmatrix}
```

### Environments 8

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\def\arraystretch{1.5}
   \begin{array}{c:c:c}
   a & b & c \\ \hline
   d & e & f \\
   \hdashline
   g & h & i
\end{array}
```

<!--rehype:style=flex:1;-->

```LaTeX
\def\arraystretch{1.5}
   \begin{array}{c:c:c}
   a & b & c \\ \hline
   d & e & f \\
   \hdashline
   g & h & i
\end{array}
```

### Environments 9

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}
```

```LaTeX
x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}
```

### Environments 10

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{rcases}
   a &\text{if } b \\
   c &\text{if } d
\end{rcases}⇒…
```

```LaTeX
\begin{rcases}
   a &\text{if } b \\
   c &\text{if } d
\end{rcases}⇒…
```

### Environments 11

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{smallmatrix}
   a & b \\
   c & d
\end{smallmatrix}
```

<!--rehype:style=flex:1;-->

```LaTeX
\begin{smallmatrix}
   a & b \\
   c & d
\end{smallmatrix}
```

### Environments 12

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\sum_{
\begin{subarray}{l}
   i\in\Lambda\\
   0<j<n
\end{subarray}}
```

<!--rehype:style=flex:1;-->

```LaTeX
\sum_{
\begin{subarray}{l}
   i\in\Lambda\\
   0<j<n
\end{subarray}}
```

### Environments 13

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{equation}
\begin{split}  a &=b+c\\
      &=e+f
\end{split}
\end{equation}
```

<!--rehype:style=flex:1;-->

```LaTeX
\begin{equation}
\begin{split}  a &=b+c\\
      &=e+f
\end{split}
\end{equation}
```

### Environments 14

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{align}
   a&=b+c \\
   d+e&=f
\end{align}
```

<!--rehype:style=flex:1;-->

```LaTeX
\begin{align}
   a&=b+c \\
   d+e&=f
\end{align}
```

### Environments 15

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{gather}
   a=b \\
   e=b+c
\end{gather}
```

<!--rehype:style=flex:1;-->

```LaTeX
\begin{gather}
   a=b \\
   e=b+c
\end{gather}
```

### Environments 16

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{alignat}{2}
   10&x+&3&y=2\\
   3&x+&13&y=4
\end{alignat}
```

<!--rehype:style=flex:1;-->

```LaTeX
\begin{alignat}{2}
   10&x+&3&y=2\\
   3&x+&13&y=4
\end{alignat}
```

### Environments 17

<!--rehype:body-style=display: flex;flex-direction: row;justify-content: flex-start;-->

```KaTeX
\begin{CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{CD}
```

<!--rehype:style=flex:1;-->

```LaTeX
\begin{CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{CD}
```

## Style, Color, Size and Font

### Color

| :-                                    | :-                                         |
| :------------------------------------ | :----------------------------------------- |
| `KaTeX:\color{blue} F=ma`             | <pur>`\color{blue} F=ma`</pur>             |
| `KaTeX:\textcolor{blue}{F=ma}`        | <pur>`\textcolor{blue}{F=ma}`</pur>        |
| `KaTeX:\textcolor{#228B22}{F=ma}`     | <pur>`\textcolor{#228B22}{F=ma}`</pur>     |
| `KaTeX:\colorbox{aqua}{$F=ma$}`       | <pur>`\colorbox{aqua}{$F=ma$}`</pur>       |
| `KaTeX:\fcolorbox{red}{aqua}{$F=ma$}` | <pur>`\fcolorbox{red}{aqua}{$F=ma$}`</pur> |

### Font {.col-span-2}

| :-                | :-                     | :-                     | :-                          | :-                       | :-                          |
| :---------------- | :--------------------- | :--------------------- | :-------------------------- | :----------------------- | :-------------------------- |
| `KaTeX:\Huge AB`  | <pur>`\Huge AB`</pur>  | `KaTeX:\normalsize AB` | <pur>`\normalsize AB`</pur> | `KaTeX:\normalsize AB`   | <pur>\normalsize AB</pur>   |
| `KaTeX:\huge AB`  | <pur>`\huge AB`</pur>  | `KaTeX:\huge AB`       | <pur>`\huge AB`</pur>       | `KaTeX:\small AB`        | <pur>\small AB</pur>        |
| `KaTeX:\LARGE AB` | <pur>`\LARGE AB`</pur> | `KaTeX:\LARGE AB`      | <pur>`\LARGE AB`</pur>      | `KaTeX:\footnotesize AB` | <pur>\footnotesize AB</pur> |
| `KaTeX:\Large AB` | <pur>`\Large AB`</pur> | `KaTeX:\Large AB`      | <pur>`\Large AB`</pur>      | `KaTeX:\scriptsize AB`   | <pur>\scriptsize AB</pur>   |
| `KaTeX:\large AB` | <pur>`\large AB`</pur> | `KaTeX:\large AB`      | <pur>`\large AB`</pur>      | `KaTeX:\tiny AB`         | <pur>\tiny AB</pur>         |

### Style {.col-span-3}

| :-                                | :-                                    | :-                             | :-                                 |
| :-------------------------------- | :------------------------------------ | :----------------------------- | :--------------------------------- |
| `KaTeX:\displaystyle\sum_{i=1}^n` | <pur>\displaystyle\sum\_{i=1}^n</pur> | `KaTeX:\textstyle\sum_{i=1}^n` | <pur>\textstyle\sum\_{i=1}^n</pur> |
| `KaTeX:\scriptstyle x`            | <pur>\scriptstyle x</pur>             | `KaTeX:\scriptscriptstyle x`   | <pur>\scriptscriptstyle x</pur>    |
| `KaTeX:\lim\limits_x`             | <pur>\lim\limits_x</pur>              | `KaTeX:\lim\nolimits_x`        | <pur>\lim\nolimits_x</pur>         |
| `KaTeX:\verb!x^2!`                | <pur>\verb!x^2!</pur>                 |

## Also See

- [LaTeX official website](https://www.latex-project.org/) _(latex-project.org)_
- [KaTeX official website](https://katex.org/) _(katex.org)_
- [symbols.pdf](https://www.cmor-faculty.rice.edu/~heinken/latex/symbols.pdf) _(cmor-faculty.rice.edu)_
