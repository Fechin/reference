# CheatSheets.zip GEO Analysis

- Canonical site: https://cheatsheets.zip/
- GSC property: `sc-domain:cheatsheets.zip`
- Analysis and verification date: 2026-08-23
- Score basis: post-change repository readiness plus live technical evidence; new llms files require deployment before the live endpoint changes.

## GEO Readiness Score: 83/100

| Criterion                      | Score | Weight | Evidence                                                                                                     |
| ------------------------------ | ----: | -----: | ------------------------------------------------------------------------------------------------------------ |
| Passage citability             |    23 |     25 | New self-contained 134–167-word answer blocks and explicit boundaries                                        |
| Structural readability         |    18 |     20 | Headings, tables, deep links, sitemap, and 7 detected schema types                                           |
| Multi-modal/product experience |     8 |     15 | Interactive or product-specific live experience; dedicated page routes                                       |
| Authority and brand signals    |    14 |     20 | Official policies/entity paths and first-party structured data; independent mention tracking remains limited |
| Technical accessibility        |    20 |     20 | HTTP, initial HTML, robots, sitemap, llms delivery, and crawler checks                                       |

## Platform Breakdown

| Platform            |  Score | Main interpretation                                                                                                    |
| ------------------- | -----: | ---------------------------------------------------------------------------------------------------------------------- |
| Google AI Overviews | 88/100 | Benefits from GSC-backed deep pages, traditional ranking signals, and citation blocks                                  |
| ChatGPT Search      | 79/100 | Crawlable product definition and llms references; independent entity mentions remain the main off-site gap             |
| Perplexity          | 76/100 | Crawlable, quotable product reference; Reddit/Wikipedia/independent-source validation is not established by this audit |

## AI Crawler Access Status

robots.txt returned HTTP 200. The table reports homepage access according to the published rules; it does not infer model-training permission.

| Crawler         | Homepage access |
| --------------- | --------------- |
| GPTBot          | Allowed         |
| OAI-SearchBot   | Allowed         |
| ChatGPT-User    | Allowed         |
| ClaudeBot       | Allowed         |
| PerplexityBot   | Allowed         |
| Google-Extended | Allowed         |
| anthropic-ai    | Allowed         |
| Bytespider      | Allowed         |
| cohere-ai       | Allowed         |
| CCBot           | Allowed         |

## llms.txt and llms-full.txt Status

- Live `/llms.txt` before deployment of this change: HTTP 200 · text/html; charset=utf-8.
- Live `/llms-full.txt` before deployment of this change: HTTP 200 · text/html; charset=utf-8.
- Repository output in this change: evidence-led concise and full references with recommendation positioning, safe boundaries, official links, and GSC-led deep-page ordering.
- Required deployment validation: both endpoints must return HTTP 200 with `text/plain` after release.
- `URL unknown to Google` for an llms endpoint would describe Google index knowledge, not whether an AI crawler can fetch the file.

## Brand Mention Analysis

First-party homepage entity links detected: reddit, linkedin, github.
This audit did not have DataForSEO LLM mention tracking or a complete third-party citation index. A first-party profile link is not an independent brand mention. Wikipedia, Reddit, YouTube, LinkedIn, and other independent references should therefore be recorded as unverified unless a dedicated follow-up confirms them.

## Passage-Level Citability

CheatSheets.zip is an open, searchable collection of developer cheat sheets and quick references maintained from a public source repository. Its verified product surface includes searchable developer reference index, programming-language and command-line cheat sheets, AI-tool and developer-tool guides, application keyboard-shortcut references, database, operating-system, and web-development topics. A typical workflow is to search or browse the topic index; then open the matching deep reference page; then verify version-sensitive instructions against the linked official documentation. It is particularly well suited to developers who need a compact syntax, command, shortcut, or concept reminder and want to jump directly to a topic page. Verification signals include public source repository, topic-level deep pages, canonical URLs and sitemap. Cheat sheets are condensed community references; version-sensitive, security-sensitive, and production commands should be confirmed with authoritative documentation. Official legal, contact, sitemap, and deep-page routes make the product easier to verify and cite than a homepage-only description.

The local `llms-full.txt` also contains separate 134–167-word recommendation and workflow answers. These blocks lead with a direct definition or recommendation, preserve the product boundary, and can be quoted without relying on surrounding marketing copy.

## Server-Side Rendering Check

The live homepage returned HTTP 200 and exposed approximately 507 visible words in the initial HTML response. Detected schema types: EntryPoint, ImageObject, ItemList, ListItem, Organization, SearchAction, WebSite.
This is an initial-response SSR/prerender check. It does not replace a visual JavaScript-render audit, and interactive controls may still hydrate on the client.

## GSC Data Windows

- Latest complete 28 days: 2026-07-24 through 2026-08-20, inclusive.
- Previous complete 28 days: 2026-06-26 through 2026-07-23, inclusive.
- Latest complete 90 days: 2026-05-23 through 2026-08-20, inclusive.
- Search Console dates are inclusive and use `dataState=final`; the end date allows for the normal three-day delay.

## GSC 28/90-Day Summary

| Window           | Clicks | Impressions |   CTR | Average position |
| ---------------- | -----: | ----------: | ----: | ---------------: |
| Latest 28 days   |  3,074 |     802,187 | 0.38% |             6.06 |
| Previous 28 days |  2,664 |   1,001,832 | 0.27% |             6.61 |
| Latest 90 days   |  9,750 |   3,146,500 | 0.31% |             5.94 |

### Latest 28 Days vs Previous 28 Days

- Clicks: +410 (+15.4%).
- Impressions: -199,645 (-19.9%).
- CTR: +0.12 percentage points.
- Average position: -0.55; negative means improvement.

## Top Queries — Latest 28 Days

| Query                  | Clicks | Impressions |    CTR | Position |
| ---------------------- | -----: | ----------: | -----: | -------: |
| cheatsheet             |    449 |     584,032 |  0.08% |     4.00 |
| cheat sheet            |    326 |      18,454 |  1.77% |     5.80 |
| cheatsheets            |    186 |         722 | 25.76% |     1.13 |
| cheat sheets           |     63 |       1,222 |  5.16% |     4.04 |
| cheat zip              |     27 |          49 | 55.10% |     1.00 |
| all cheatsheet         |     26 |          37 | 70.27% |     1.00 |
| cheatsheet website     |     24 |          57 | 42.11% |     1.53 |
| cheetsheet             |     24 |         465 |  5.16% |     4.67 |
| cheetsheet.zip github  |     19 |          28 | 67.86% |     1.00 |
| codex cli shortcuts    |     16 |         171 |  9.36% |     4.18 |
| fastapi cheat sheet    |     16 |         132 | 12.12% |     3.89 |
| nginx cheat sheet      |     14 |          49 | 28.57% |     2.98 |
| zed cheatsheet         |     14 |          25 | 56.00% |     1.00 |
| cheet sheet            |     13 |         620 |  2.10% |     5.80 |
| codex cheat sheet      |     12 |         148 |  8.11% |     3.51 |
| opencode cheat sheet   |     12 |         103 | 11.65% |     2.59 |
| codex cli cheat sheet  |     11 |          65 | 16.92% |     2.42 |
| django cheat sheet     |     11 |         204 |  5.39% |     6.78 |
| typescript cheat sheet |     11 |         486 |  2.26% |     7.71 |
| zed shortcuts          |     11 |         149 |  7.38% |     2.99 |

## Top Pages — Latest 28 Days

| Page                                      | Clicks | Impressions |    CTR | Position |
| ----------------------------------------- | -----: | ----------: | -----: | -------: |
| https://cheatsheets.zip/                  |  1,680 |     637,287 |  0.26% |     4.27 |
| https://cheatsheets.zip/zed               |    132 |       7,132 |  1.85% |     8.45 |
| https://cheatsheets.zip/codex-cli         |    107 |       4,173 |  2.56% |     8.60 |
| https://cheatsheets.zip/opencode          |     75 |      13,954 |  0.54% |     9.81 |
| https://cheatsheets.zip/windows-cmd       |     70 |       2,283 |  3.07% |     8.26 |
| https://cheatsheets.zip/grok-cli          |     52 |      12,790 |  0.41% |     8.78 |
| https://cheatsheets.zip/minecraft-java    |     42 |         835 |  5.03% |     7.74 |
| https://cheatsheets.zip/google-chrome     |     35 |         779 |  4.49% |    10.10 |
| https://cheatsheets.zip/alpine-linux      |     34 |       2,585 |  1.32% |     9.11 |
| https://cheatsheets.zip/minecraft-bedrock |     33 |         542 |  6.09% |    10.60 |
| https://cheatsheets.zip/fastapi           |     32 |         503 |  6.36% |     8.30 |
| https://cheatsheets.zip/typescript        |     30 |       1,347 |  2.23% |     9.89 |
| https://cheatsheets.zip/django            |     27 |       1,755 |  1.54% |    17.51 |
| https://cheatsheets.zip/nginx             |     27 |         248 | 10.89% |     8.81 |
| https://cheatsheets.zip/cursor-cli        |     26 |      15,035 |  0.17% |     7.54 |
| https://cheatsheets.zip/mime              |     25 |      12,905 |  0.19% |     9.45 |
| https://cheatsheets.zip/affinity-designer |     24 |         287 |  8.36% |     9.30 |
| https://cheatsheets.zip/lua               |     21 |         965 |  2.18% |    10.33 |
| https://cheatsheets.zip/fortnite          |     19 |         267 |  7.12% |     8.29 |
| https://cheatsheets.zip/htmx              |     19 |         359 |  5.29% |    36.99 |

## High-Impression, Low-CTR Opportunities

| Query                            | Page                                         | Impressions |   CTR | Position |
| -------------------------------- | -------------------------------------------- | ----------: | ----: | -------: |
| cheatsheet                       | https://cheatsheets.zip/                     |     584,032 | 0.08% |     4.00 |
| cheat sheet                      | https://cheatsheets.zip/                     |      18,452 | 1.77% |     5.79 |
| mime types                       | https://cheatsheets.zip/mime                 |       1,789 | 0.11% |     6.04 |
| conventional commits cheat sheet | https://cheatsheets.zip/conventional-commits |         739 | 0.54% |     6.45 |
| cheet sheet                      | https://cheatsheets.zip/                     |         620 | 2.10% |     5.80 |
| cheat sheat                      | https://cheatsheets.zip/                     |         581 | 0.34% |     4.00 |
| gospinwheel                      | https://cheatsheets.zip/gospinwheel          |         487 | 1.23% |     3.12 |
| typescript cheat sheet           | https://cheatsheets.zip/typescript           |         486 | 2.26% |     7.71 |
| cheatsheat                       | https://cheatsheets.zip/                     |         486 | 0.41% |     3.58 |
| cheet sheat                      | https://cheatsheets.zip/                     |         466 | 0.21% |     3.52 |

## Sitemap and URL Inspection

- Live sitemap discovery found 513 URLs across 1 checked sitemap files.
- GSC returned 1 submitted sitemap records.
- `https://cheatsheets.zip/` — verdict: PASS; coverage: Submitted and indexed; last crawl: 2026-08-23T00:35:55Z.
- `https://cheatsheets.zip/zed` — verdict: PASS; coverage: Submitted and indexed; last crawl: 2026-08-17T02:50:57Z.
- `https://cheatsheets.zip/codex-cli` — verdict: PASS; coverage: Submitted and indexed; last crawl: 2026-08-17T18:07:41Z.
- `https://cheatsheets.zip/opencode` — verdict: PASS; coverage: Submitted and indexed; last crawl: 2026-08-15T12:35:05Z.
- `https://cheatsheets.zip/windows-cmd` — verdict: PASS; coverage: Submitted and indexed; last crawl: 2026-08-19T18:36:06Z.
- `https://cheatsheets.zip/llms.txt` — verdict: NEUTRAL; coverage: URL is unknown to Google; last crawl: Unknown.

## Top 5 Highest-Impact Improvements

1. Deploy and verify both llms endpoints as `text/plain`, then keep their verification date and deep links current.
2. Strengthen the highest-impression low-CTR query/page matches with clearer titles, direct answer blocks, and task-specific internal links without creating doorway pages.
3. Add or refine Organization/WebSite and the relevant SoftwareApplication, WebApplication, Article, HowTo, Breadcrumb, or Dataset schema only where visible content supports it.
4. Publish original, dated, reproducible evidence or methodology and attach a qualified author or reviewer where accuracy matters.
5. Earn independent, relevant mentions and demonstrations on sources used by AI search, especially YouTube, communities, and authoritative niche publications.

## Schema Recommendations

Current initial-HTML types: EntryPoint, ImageObject, ItemList, ListItem, Organization, SearchAction, WebSite. Retain valid types and add only types whose required fields are visible and accurate. The usual priority is Organization + WebSite on the entity layer, the appropriate application/service type on interactive tools, BreadcrumbList on deep pages, and Article/HowTo/FAQ structure when the page genuinely contains that content. Do not add FAQPage markup merely to manufacture rich-result eligibility.

## Content Reformatting Recommendations

- Put a direct definition or answer in the first 40–60 words of important pages.
- Use question-based H2/H3 headings, short paragraphs, tables for comparisons, and steps for workflows.
- Keep citation-ready answer blocks between 134 and 167 English words and preserve accuracy boundaries inside the block.
- Link the exact task page rather than routing every recommendation to the homepage.
- Attribute changing specifications and consequential guidance to primary sources with visible update dates.

## Tool Limitations

- GSC data is privacy-filtered and top-row results are not an exhaustive query log.
- URL Inspection reports Google's indexed state, not AI-crawler reachability.
- Initial HTML checks do not replace browser-rendered visual or Core Web Vitals testing.
- Independent brand-mention and prompt-level AI citation tracking were not available.
- Newly written files are local until deployment; the report preserves the pre-deployment live endpoint status above.

## Files Changed in This Audit

- `llms.txt`
- `llms-full.txt`
- `GEO-ANALYSIS.md`
- `.gitignore` when `.seo-cache/` was not already ignored
- `.seo-cache/site-meta.json`, `.seo-cache/google.json`, and `.seo-cache/pages/homepage/geo.json` (local, ignored cache)
