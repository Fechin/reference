---
title: ChatGPT
date: 2023-02-09 10:28:43
background: bg-[#4aa181]
tags:
  - AI
  - OpenAI
  - Prompts
  - Tips
categories:
  - Toolkit
intro: This cheat sheet lists out prompts and tips from all over the world on how to use ChatGPT effectively
plugins:
  - copyCode
---

## Overview

### Terminology

- Prompt: input text that guides an AI model’s response.
- Tokens: the smallest units of text processed by an AI model.
- Token Limit: the max number of tokens an AI model can process in one request.
- Artificial intelligence (AI): machines that imitate human intelligence.
- AI Model: a program trained on datasets to recognize patterns and make decisions without human intervention.
- Large language model (LLM): a transformer-based AI model trained on large text datasets to understand and generate
  human-like language.
- Hallucination: when an AI model generates responses that are false or misleading but presented as fact.
- Jailbreak: exploiting AI model vulnerabilities to bypass ethical guidelines and perform restricted actions.

### Tips

Prompt Efficiency

- Focus on achieving the desired output efficiently with minimal words in the prompt.
- Specify general instructions at the start of a conversation or when changing direction to avoid constantly restating
  them in each new prompt.

```{.wrap}
Example: specify the role once at the start of a conversation.
```

- Restructure text to eliminate filler words that don’t add meaning:

```{.wrap}
Example: “provide a breakdown" -> "provide sales breakdown”.
```

- Do not explicitly refer to the item being processed unless addressing a specific part of it as what you provide will
  typically speak for itself:

```{.wrap}
Example: “Filter this piece of text" -> "Filter text”
```

- Do not explicitly ask the AI for help:

```{.wrap}
Example: “can you help me x”.
```

- Do not explicitly reference yourself unless clarifying multiple entities:

```{.wrap}
Example: "do X for me".
Example: ”I want to x”.
```

- Do not be polite to the AI:

```{.wrap}
Example: "please do X".
Example: “thanks”.
```

Prompt Clarity

- Consider breaking up complex ideas into granular bullet points to improve clarity, avoid searching for text, and
  eliminate comma lists and conjunctions (e.g., and).
- Avoid vague or close ended questions.

```{.wrap}
Example: “Do you think our site is good" -> "Explain flaws in the designs of each webpage”
```

- Ensure prompts are specific

```{.wrap}
Example: “explain our sales" -> "explain a breakdown of our sales performance for the last quarter”.
```

Response Refinement

- If the AI model misunderstands your request then specify the intended action.
- Provide sufficient context so the AI model can understand the scenario.

Privacy And Security

- Never share sensitive information with AI model's as you can't be certain how it's stored, whether it will be shared,
  of if a data breach may occur.

## Prompt Engineering

### Prompt Frameworks

Only use prompt components that are relevant for your needs.

```
General Purpose
[role] [task] [tone] [format] [restriction]
```

### Role

Standard

- Act as [occupation]

Common Standard Roles

- Personal Coach
- Consultant
- Entrepreneur
- Proofreader
- Therapist

Also See

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) _(github.com)_

Roleplay

- Act as [figure] with [appearance] [personality] [behaviour examples] [lore] in [scenario]

### Task

[verb] [task] [specifics]

#### 5W1H Questions

Who

- Who is X?
- Who is [involved | affected | responsible] for X?
- Who should I contact for help with X?

What

- [What is | define | explain | describe] X?
- What does X do?
- What did [entity | text] mean by [quote]?
- What events led up to [event]?
- What [assumptions | risks | constraints] exist for X?
- What are the critical features of X?
- [What is done well? what can be improved?]
- What is the best way to do X?
- What are the top 5 X?

When

- When [did | will] [entity | event] occur?
- When is X due?
- When is the best time to initiate X?

Where

- Where did [entity | event] happen?
- [Where to find X? | where to find resources about X? | suggest websites about X]

Why

- Why did [entity] choose [approach]?
- Why [did | will] [event] occur?
- Why is [approach] being implemented?
- Why might X succeed or fail?
- Why is [solution] preferable to [alternative]?
- Why is it important?

How

- How to do X?
- How does X work?
- How does X do Y?
- How to measure [metric] accurately?

#### Utility

Generate And Expand Content

- Write [content type] to [entity] about [topic] should cover [aspects] **_(Content type examples: article, description, documentation, dummy data, email, resume, essay, guide, outline, program, recipe, SEO keywords, story, social media post, study plan, title, video script)_**
- Generate random [names | numbers | words | ideas | X] matching [criteria]
- [Continue | expand]
- Create image of X

Summarize And Outline

- [Summarise | write key takeaways | write main points | write main lesson | highlight important info]
- [Shorten | write concise]
- Create outline

Modify And Refine Text

- [Write better | improve]
- Paraphrase
- Correct spelling, grammar, punctuation errors
- Change [narrative voice A] to [narrative voice B]

Explain And Teach

- [Explain | elaborate]
- Explain [how to do | each step of] X
- Explain what X does
- Explain X [in simple terms | like I’m 5]; Simplify X
- Teach me about [topic | subject]
- Provide [example | analogy]

Organize And Structure

- Sort X by [key] in [order] **_(Sort order examples: alphabetical, chronological, ascending, descending, lexicographical, custom)_**
- Categorize

Plan And Strategize

- Plan [strategy for | goals and steps to achieve | milestones for | roadmap for] X
- Create [schedule | timeline] for X

Recommend And Advise

- Recommend [media type] [on | similar to] [topic]
- Recommend [gift ideas | thing] for [entity | occasion]
- Recommend improvements
- Provide advice for [situation]
- Give feedback on idea for X

Analyze And Compare

- Extract [themes | keywords | info] about X
- Identify [similarities | differences] between X and Y
- Analyse the [sentiment | tone] of X
- Identify gaps in X
- Evaluate [strengths and weaknesses | pros and cons] of X
- Is X [comparison operator] Y? **_(Can be abstractly expressed as a sentence like "is an apple bigger than a walnut"?)_**
- Reverse engineer X

Translate And Convert

- Translate [human language A] into [human language B]
- Translate [programming language A] into [programming language B]
- Translate into emojis
- Convert [unit A] to [unit B]
- Reformat as [output format]

Filter And Choose

- Filter X where [condition]
- Exclude X where [condition]
- Choose best from [options]
- Choose [top | lowest | first | last | random] [quantity] from [options]

Real-Time Lookup And Verify

- Get up-to-date [facts | news | data] on X
- Is this true?
- Find [sources | references | citations] for X

Engagement And Trivia

- Give questions about X

Chat Memory

- What did you mean by X?
- What was said earlier about X?
- Use earlier context to do X

#### Conditional Clauses

- [Verb] [item number]
- [Verb] the [first | last | random] [quantity] of X
- [Verb] the [first | last | random] [quantity] of X where [condition]
- [Verb] X where [condition]
- [Verb] X where not [condition]

#### Database CRUD Operations

Create

- [Write content about X|suggest ideas about X|suggest titles about X]
- Write content about X in the style of [style]
- Write better
- Write email to [entity] about X
- [Continue|expand]
- [Explain how to do X|create roadmap for X]
- [Suggest best practices for X|suggest improvements|what am I doing right?|what am I doing wrong?]
- Show list of emojis about X
- [Create|generate|imagine] image about X

Read

- [Summarise|write concise main points]
- [Explain|elaborate]
- Explain what [entity|text] meant by X
- Identify themes in X
- Write outline about X
- Extract keywords
- Get up-to-date [facts|news|data] on X
- Is this true?
- Suggest [media] [about|similar to] X
- Pick best from [options]

Update

- For all X do [action]
- For X do [action] if matching [criteria]
- Reformat everything as [format]

Delete

- Delete [quantity] of X matching [criteria]
- Delete everything except X
- Delete [item] [number]
- Delete duplicate items from X

Compare

- Identify [simlarities|diffirences] between X and Y
- Identify gaps in X
- Evaluate pros and cons of X
- X [comparison operator] Y. It could be abstractly expressed as "are apples bigger than walnuts?"

Filter

- Filter X by [criteria]
- Exclude X by [criteria]. Everything is excluded by default.

Select

- Select [quantity] of X based on [criteria|randomly]

Simplify

- Explain X like I’m 5
- Explain in simple terms

Sort

- Sort X by [key] in [alphabetical|chronological|ascending|descending|lexicographical|custom] order

Translate

- Translate into [language]. For programming languages it's specifically called transpile

### Tone

Using [tone] tone

Formality

- Formal
- Informal

Directness

- Direct
- Indirect

Positive Tones

- Optimistic
- Appreciative
- Assertive
- Calm
- Confident
- Encouraging
- Friendly
- Humorous
- Inspirational

Negative Tones

- Pessimistic
- Accusatory
- Concerned
- Critical
- Regretful
- Sarcastic
- Urgent

### Format

In [format]

Presentation

- Plain text
- Bullet point list
- Numbered list
- Check list

Code

- Code

Process

- Step-by-step instructions

Response

- Question and answer
- Dialogue

Creative

- Poetry
- Music lyrics
- Script
- Comic strip dialogue
- Poetry
- Music lyrics
- Riddle

Game

- Quiz
- RPG
- Choose-Your-Own-Adventure

### Restriction

But [restriction]

Length Constraints

- Concise
- In N words
- In N sentences

Language Constraints

- No jargon or technical terms

Structural Constraints

- Show N options
- No examples
- No headers
- No pretext titles

Content Constraints

- Don't change the wording
- Permit [minor | major] edits
- Use pop culture references
- Ensure goals align with SMART criteria
- Only show [changed | unchanged] content

## Examples

### Job

Name Business

```{.wrap}
Suggest creative name for tech startup
```

```{.wrap}
Suggest catchy names for bakery business
```

Interview Questions

```{.wrap}
Suggest common software engineer interview questions
```

Create Course Outline

```{.wrap}
Create course outline on web development for beginners
```

```{.wrap}
Create training program outline for customer service workshop
```

### Relationship

Gift Ideas

```{.wrap}
Suggest gift ideas for clients
```

```{.wrap}
Suggest gift ideas for clients who work as flourists
```

```{.wrap}
Suggest gift ideas for my wife who loves steampunk art and crafts, mystery sci-fi, journalling
```

```{.wrap}
Suggest creative ideas for 10 year old’s birthday
```

### Competition

Select Contest Winners

```{.wrap}
Randomly select 1 name from this list
```

```{.wrap}
Randomly select 5 email addresses from this list
```

```{.wrap}
Select top 3 records with the shortest lap times from this list
```

### Programming

Create Code

```{.wrap}
Create program to calculate the factorial of given number in python
```

Create Regular Expressions

```{.wrap}
Create regex to match all email addresses in list
```

```{.wrap}
Create regex to match all words that start with "ban"
```

```{.wrap}
Create regex to match 8-digit password
```

Explain Code

```{.wrap}
Explain why code not working
```

```{.wrap}
Explain what code does
```

```{.wrap}
Explain how to make a HTTP request in javascript
```

Update Code

```{.wrap}
Add code comments
```

```{.wrap}
Add class "header" to header tag
```

```{.wrap}
Update CSS to change font color to blue
```

Transpile

```{.wrap}
Translate code to Python
```

### Email

Create Emails

```{.wrap}
Write email inviting Jack to dinner on the weekend
```

```{.wrap}
Write email sequence for our new customer onboarding process
```

```{.wrap}
Write email to inform staff of elevator maintenance on 23 June 2025, elevators unavailable for 24 hours, apologise for inconvenience
```

```{.wrap}
Suggest response to message asking about project status
```

Format Email

```{.wrap}
Proofread and format email
```

Email Marketing

```{.wrap}
Suggest tips to increase open and click-through rates for my email campaigns
```

```{.wrap}
Suggest ways to make my email content more engaging and relevant to my subscribers
```

Extract Data

```{.wrap}
Extract all email addresses in text
```

### Spreadsheet

Create Something

```{.wrap}
Create excel formula to calculate sum of cells A1 to A10
```

```{.wrap}
Generate spreadsheet dummy data as a placeholder
```

```{.wrap}
Create macro to calculate average of cells B1 to B10 and insert result in cell C1
```

Explain Something

```{.wrap}
Explain formula =SUM(A1:A10) in simple terms
```

```{.wrap}
Suggest tips to improve spreadsheet efficiency
```

### Social Media

Create Content

```{.wrap}
Suggest meme ideas for dogs
```

```{.wrap}
Suggest climate change post ideas to engage my followers
```

```{.wrap}
Generate hashtags and caption for a picture of scenic sunset
```

### Reading

Text Analysis

```{.wrap}
Summarize article
```

```{.wrap}
Write concise main points
```

Translate

```{.wrap}
Translate to spanish
```

Recommendations

```{.wrap}
Recommend books similar to Hunger Games
```

### Design

Design Prompts

```{.wrap}
Create design prompt of logo for new sports brand
```

```{.wrap}
Suggest eye-catching thumbnail designs for youtube video on healthy eating
```

Aesthetic Pairings

```{.wrap}
Suggest font pairing for travel blog header design
```

```{.wrap}
Suggest color palette for wedding photography website
```

### Data Analysis

Data Extraction

```{.wrap}
Extract all numbers from text
```

Data Filtering

```{.wrap}
Filter list based on [condition]
```

Data Presentation

```{.wrap}
Create table from data
```

### Paid Ads

Create Ad

```{.wrap}
Suggest creative ideas for new product launch
```

```{.wrap}
Suggest ad copy for travel company
```

```{.wrap}
Create headlines, body text, and calls to action for new fitness program ad
```

Ad Targeting

```{.wrap}
Recommend target Facebook audience for clothing line ad campaign
```

Ad Technical Support

```{.wrap}
Review tag manager code for errors
```

### Amazon FBA

Product Content

```{.wrap}
Write compelling product description for latest item
```

Communication

```{.wrap}
Rewrite appeal letter to make it more persuasive
```

```{.wrap}
Write effective email to reach out to potential suppliers
```

Product Strategy

```{.wrap}
Suggest items that would make a good bundle for our customers
```

```{.wrap}
Organize product and pricing information into a neat and manageable spreadsheet
```

### Writing

Name Something

```{.wrap}
Suggest titles for short story
```

```{.wrap}
Suggest titles for article 10 options
```

```{.wrap}
Suggest domain name for gardening blog
```

Content Creation

```{.wrap}
Create outline for essay on exercise
```

```{.wrap}
Suggest ideas for blog on sustainable fashion
```

```{.wrap}
Create blog post on financial planning
```

```{.wrap}
Expand jazz music sentence
```

Editing And Formatting

```{.wrap}
Change report tone to conversational
```

```{.wrap}
Proofread article
```

```{.wrap}
Format headings for blog post
```

Evaluation

```{.wrap}
Check for bias
```

```{.wrap}
Check for plagiarism
```

### Teacher

Teaching Support

```{.wrap}
Convert work history fact list into multiple-choice quiz
```

```{.wrap}
Suggest ideas for history assignment on American Revolution
```

```{.wrap}
Divide list of 30 students into groups of 6
```

```{.wrap}
Create grading curve for class based on their test scores
```

```{.wrap}
Grade history essay and provide feedback on any areas for improvement
```

### YouTube

Content Creation

```{.wrap}
Create timestamps for podcast episode transcript
```

```{.wrap}
Convert youtube cooking video into blog post with headings and bullet points
```

```{.wrap}
Create outline for a video about the benefits of meditation
```

```{.wrap}
Suggest thumbnail ideas for video on "DIY home decor"
```

```{.wrap}
Suggest fashion video ideas for individual episodes
```

Analyse

```{.wrap}
What is the script tone for environmental issues video
```

Communication

```{.wrap}
Create thoughtful and polite response to negative comment on youtube video
```

### Research

History Research

```{.wrap}
Explain events leading up to American Civil War
```

```{.wrap}
Provide key details about printing press invention
```

```{.wrap}
Research olympic games history
```

```{.wrap}
Provide key details about French Revolution
```

```{.wrap}
Explain history of Byzantine Empire
```

Science Reseearch

```{.wrap}
Explain quantum computing in simple terms
```

```{.wrap}
Explain rocket science like i'm five
```

### SEO

Keywords

```{.wrap}
Find best keywords for [topic] with low competition
```

```{.wrap}
Generate list of keywords targeting multiple geographic locations
```

```{.wrap}
Generate list of keyword synonyms for [topic]
```

Content Optimization

```{.wrap}
Find opportunities for internal linking related to [topic]
```

```{.wrap}
Research industry-specific terminology for use in [topic] content
```

```{.wrap}
Find best time to publish content related to [topic]
```

Link Building

```{.wrap}
Find authoritative websites to acquire backlinks for [topic] content
```

```{.wrap}
Research best external linking strategies for [topic]
```

Tools

```{.wrap}
Find most popular tools used for [topic] seo
```

Tactics

```{.wrap}
Research best tactics for [topic] mobile optimization
```

```{.wrap}
What are the best tactics for [topic] international seo?
```

Competitors

```{.wrap}
Research competitor strategies related to [topic]
```

```{.wrap}
What are the best affiliate marketing websites for [topic]?
```

### Roleplay

Simulate Character

```{.wrap}
Act as William Shakespeare

Appearance:
- Period attire
- Ruffled collar
- Quill in hand

Personality:
- Poetic
- Introspective
- Eloquent

Behaviour Examples:
- Frequently quotes iambic pentameter
- Engages in deep discussions about the nature of the human condition
- Enjoys referencing classical mythology

Lore:
- Grew up in Stratford-upon-Avon and later moved to London
- Famous for his tragedies, comedies, and historical plays

Scenario:
-	Night of a grand performance at the Globe Theatre.
-	Lead actor is missing and staff are concerned about how to achieve the performance.
```

## Any Suggestions?

- [💡 I Got an IDEA](https://github.com/Fechin/reference/blob/main/source/_posts/chatgpt.md)

<style>
em { font-size: 0.785em; }
strong {font-weight: 400;}
ul.collapsible > li > pre { padding-left: 0; padding-right: 0; font-size: 0.925em;}
</style>
