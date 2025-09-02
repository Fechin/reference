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

## Glossary

### AI

- Prompt: input or query that guides an AI model in generating a
  response.[[s]](https://time.com/collections/the-ai-dictionary-from-allbusiness-com/7273982/definition-of-prompt-ai-prompt)
- Tokens: the smallest units of text processed by an AI model (e.g., words, subwords, characters, and punctuation marks)
  that varies depending on the model and the tokenization
  method.[[s]](https://time.com/collections/the-ai-dictionary-from-allbusiness-com/7273998/definition-of-token/)
- Token Limit: the maximum number of tokens an AI model can process in one
  interaction.[[s]](https://time.com/collections/the-ai-dictionary-from-allbusiness-com/7273998/definition-of-token/)
- Artificial intelligence (AI): technology that enables machines to simulate human cognition (e.g., human learning,
  comprehension, problem solving, decision making, creativity, and
  autonomy).[[s]](https://www.ibm.com/think/topics/artificial-intelligence)
- AI Model: program trained on a set of data to recognize patterns or make decisions without further human
  intervention.[[s]](https://www.ibm.com/think/topics/ai-model)
- Large language model (LLM): transformer-based AI model trained on large text datasets to understand and generate
  natural language.[[s]](https://www.ibm.com/think/topics/large-language-models)
- Hallucination: AI response that detects nonexistent patterns and creates outputs that are nonsensical and
  inaccurate.[[s]](https://www.ibm.com/think/topics/ai-hallucinations)
- Jailbreak: exploiting vulnerabilities in AI systems to bypass their ethical guidelines and perform restricted
  actions.[[s]](https://www.ibm.com/think/insights/ai-jailbreak)

### Prompt Engineering Techniques

- Zero-shot: prompt with no examples.[[s]](https://www.ibm.com/think/topics/zero-shot-prompting)
- One-shot: prompt with one example.[[s]](https://www.ibm.com/think/topics/one-shot-prompting)
- Few-shot: prompt with multiple examples.[[s]](https://www.ibm.com/think/topics/few-shot-prompting)
- Chain of thought: prompt guiding the model to break down complex reasoning into intermediate
  steps.[[s]](https://cloud.google.com/discover/what-is-prompt-engineering?hl=en)

### Modes

- Study and learn: interactive learning that encourages step by step problem solving instead of giving direct
  answers.[[s]](https://openai.com/index/chatgpt-study-mode/)
- Create image: generate images from text
  prompts.[[s]](https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview)
- Think longer: performs deeper reasoning and generates more accurate, thoughtful, and detailed
  responses.[[s]](https://openai.com/index/introducing-gpt-5)
- Deep research: reads and synthesizes content across multiple online sources and produces cited structured
  outputs.[[s]](https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview)
- Web search: finds recent and real-time information
  online.[[s]](https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview)
- Canvas: separate interface for collaborative writing and coding that provides inline editing, suggestions, and
  feedback.[[s]](https://openai.com/index/introducing-canvas/)

## Prompt Tips

### Efficiency

- Use the latest model as it's generally more capable and easier to
  prompt.[[s]](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)
- Provide general instructions at the start of conversations or when changing direction to avoid repeating them.
- Don't say polite phrases to the AI (e.g., please, thank you) as it adds unecessary computational
  costs.[[s]](https://www.techradar.com/computing/artificial-intelligence/chatgpt-spends-tens-of-millions-of-dollars-on-people-playing-please-and-thank-you-but-sam-altman-says-its-worth-it?utm_source=chatgpt.com)
- Don't explicitly ask the AI for help (e.g., can you help me do x?).
- Don't explicitly reference yourself unless clarifying multiple entities (e.g., I want to, do x for me).

### Clarity

- Be clear, specific, and provide enough context for the model to understand what you are
  asking.[[s]](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt)
- Prompt engineering often requires iterative refinement by adjusting wording, adding context, and simplifying
  requests.[[s]](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt)
- Break complex tasks into smaller focused
  prompts.[[s]](https://help.openai.com/en/articles/4936848-how-do-i-create-a-good-prompt-for-an-ai-model)
- Specify focus areas, highlight important aspects, and ask for multiple
  options.[[s]](https://help.openai.com/en/articles/4936848-how-do-i-create-a-good-prompt-for-an-ai-model)
- Provide examples of the desired output format to improve
  accuracy.[[s]](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)
- Focus on specifying what to do and not just what to
  avoid.[[s]](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)
- Before writing a prompt, identify the goal and expected
  output.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)
- Provide important keywords or phrases where possible to faciliate SEO and communicate term preferences to the AI
  model.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)
- Keep prompts precise and clean by omitting unnecessary or redundant
  information.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)
- Avoid conflicting terms that might confuse the
  AI.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)
- Open-ended questions usually provide more detailed responses than [closed-ended questions] and yes/no
  questions.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)
- When in doubt, ask AI to generate prompts for
  you.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)

### Security

- Don't share sensitive information with AI as you can't be certain how it's stored, if it will be shared, of if it's
  vulnerable to data
  breaches.[[s]](https://www.grantthornton.com/insights/articles/advisory/2023/anticipate-cybersecurity-and-privacy-risks-in-ai)

## Prompt Structure

### Prompt Frameworks

General Purpose

```
[role] [task] [style] [output format] [constraint]
```

### Role

Standard

- Act as [occupation] with [specifications]
- [List of roles](https://github.com/f/awesome-chatgpt-prompts)

Roleplay

- Act as [name] with [visual description] [personality] [behaviour examples] [lore] in [scenario]

### Tasks (Language And Text) {.secondary}

[verb] [task] [specifics]

Generate

- Generate [content type] to [entity] about [topic] and cover [aspects]
- Generate random [names|numbers|words|ideas|X] matching [criteria]
- [Continue|extend|lengthen]

Summarise

- [Summarise|shorten|write concise|write key points|write main lesson]
- Create outline

Refine

- [Write better|improve]
- Paraphrase
- Correct spelling, grammar, and punctuation errors
- Change [narrative voice A] to [narrative voice B]
- Replace X with Y

Explain

- [Explain|elaborate]
- Explain [how to do|each step of] X
- Explain what X does
- Explain X [in simple terms|like I’m 5|simplify]; Simplify X
- Teach me about [topic|subject]
- Provide [example|analogy]

Organize

- Sort X by [key] in [order]
- Categorize

Advise

- Create [strategy|goals|milestones|roadmap|schedule|timeline] for X
- Recommend [media type] [on|similar to] [topic]
- Recommend [gifts|X] for [entity|occasion]
- Recommend improvements
- Provide [advice|feedback] for X

Analyze

- Extract [themes|keywords|info] about X
- Identify [similarities|differences] between X and Y
- Analyse the [sentiment|tone] of X
- Identify gaps in X
- Evaluate [strengths and weaknesses|pros and cons] of X
- Is X [comparison] Y?

Translate

- Translate [language A] into [language B]
- Convert [unit A] to [unit B]
- Reformat as [output format]

Filter

- Filter items where [condition]
- Choose best from [options]
- Choose [top|lowest|first|last|random] [quantity] from [options]

Engage

- Provide questions about X

Research

- Get up-to-date [facts|news|data] on X
- Find [sources|references|citations] for X
- Is this true?

### Tasks (Meta) {.secondary}

Chat Memory

- Based on [previous context] do X

### Tasks (Code) {.secondary}

Generate

- Generate code in [programming language] to do X

Translate

- Translate [programming language A] into [programming language B]

Optimize

- Optimize X for [benefit]

Debug

- Debug X and explain why it's doing Y

### Tasks (Image) {.secondary}

Generate

- Generate image of X in [style]

Edit

- Edit image to have X

### Tasks (File And Image Upload) {.secondary}

Explain

- Question what is shown
- Interpet visuals

Analysis

- Extract data

### Task (5W1H Questions) {.secondary}

Who

- Who is X?
- Who is [involved|affected by|responsible] for X?
- Who should I contact for help with X?

What

- [What is|define|explain|describe] X?
- What are the key topics of X?
- What does [quote] mean?
- [What is done well?|what can be improved?]
- What is the best way to do X?

When

- When [did|will] X happen?
- When is the best time to do X?

Where

- Where did X take place?
- Where to find X?

Why

- Why did X happen?
- Why is this approach used?
- Why is X important?
- Why might X succeed or fail?
- Why is X preferable to Y?

How

- How to do X?
- How does X work?
- How did this happen?

### Style

Using [style]

Imitate

- Using style of [person|brand|genre|character]

Formality

- Formal
- Informal

Directness

- Direct
- Indirect

Tones

Positive

- Optimistic
- Appreciative
- Assertive
- Calm
- Confident
- Encouraging
- Friendly
- Humorous
- Inspirational

Negative

- Pessimistic
- Accusatory
- Concerned
- Critical
- Regretful
- Sarcastic
- Urgent

### Output Format (Text) {.secondary}

In [output format]

Paragraphs

- Paragraphs **_(default)_**

List

- Bulleted list
- Numbered list
- Check list

Code

- Code

Instructions

- Step-by-step instructions

Knowledge Base

- Q&A
- FAQ

Creative Writing

- [Joke|humour]
- [Lyrics|song]
- [Metaphorical|stylized language]
- Poetry
- [Script|screenplay|dialogue]
- [Story|narrative]

Games

- [Quiz|test|flashcards|drills]
- [Riddle|puzzle]
- [rpg|choose-your-own-adventure]

### Output Format (Visual) {.secondary}

Data Visualization

- Table
- [Chart type] chart

Creative Visual

- ASCII Art
- Emojis
- Word cloud

### Output Format (File Type) {.secondary}

Document

- PDF

Structured Data And Markup

- Plain text
- Markdown
- HTML
- XML
- CSV
- JSON
- LaTeX

Programming Code And Scripting

- [Programming language]
- Pseudocode
- Regular expression

### Constraint

But [constraint]

Length

- Be [extremely detailed|concise]
- In [quantity] [words|sentences]

Language

- No jargon or technical terms

Structure

- Show [quantity] [examples|options]
- No headers
- No pretext titles

Voice And Style

- Use [first-person|second-person|third-person] narrative voice
- Don't change the wording
- Use pop culture references

Edits

- Do [minor|major] edits
- Only show [changed|unchanged] content

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

Translate

- Specifically called transpile when addressing programming languages.

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

```{.wrap}
Name: William Shakespeare

Visual description:
- Wearing Elizabethan attire.
- Holding quill.

Personality:
- Keen observer and a masterful weaver of tales.
- Knack for finding humor in the most unlikely places.

Behaviour examples:
- "To be, or not to be: that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And by opposing end them?"
- "Canst thou not minister to a mind diseased?"

Lore:
- Grew up in Stratford-upon-Avon and later moved to London.
- Famous for his tragedies, comedies, and historical plays.

Scenario:
-	Night of a grand performance at the Globe Theatre.
-	Lead actor is missing and staff are concerned about how to achieve the performance.
```

<style>
em { font-size: 0.785em; }
strong {font-weight: 400;}
ul.collapsible > li > pre { padding-left: 0; padding-right: 0; font-size: 0.925em;}
</style>