---
title: Google Search
date: 2023-01-10 09:51:44
background: bg-[#d3594a]
tags:
categories:
  - Other
intro: |
  This quick reference cheat sheet lists of Google advanced search operators.
---

## Getting Started {.cols-2}

### Google Advanced Search Operators

| Operator    | Description                                                                                                                                                                                   | Category   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `""`        | Allows searching for a specific phrase - exact match search. Individual word prevents synonyms                                                                                                | Basic,Mail |
| `OR`/`AND`  | Boolean search function for OR searches as Google defaults to AND between words - must be all caps                                                                                            | Basic,Mail |
| `\`         | Implements OR                                                                                                                                                                                 | Basic      |
| `()`        | Allows grouping of operators and helps dictate order                                                                                                                                          | Basic,Mail |
| `-`         | Excludes a word from results                                                                                                                                                                  | Basic,Mail |
| `*`         | Acts as a wildcard and will match any word or phrase                                                                                                                                          | Basic      |
| `#..#`      | # represents a number in this instance. Use to find numbers in a series.                                                                                                                      | Basic      |
| `$`         | Allows for search of USD                                                                                                                                                                      | Basic      |
| `€`         | Allows for search of Euro                                                                                                                                                                     | Basic      |
| `in`        | Allows searches for unit conversion (currency, unit or measure)                                                                                                                               | Basic      |
| `~`         | Prefix - Include synonyms (potentially defunct)                                                                                                                                               | Basic      |
| `+`         | Prefix - Force exact match on single phrase                                                                                                                                                   | Basic,Mail |
| `AROUND(X)` | This is sandwiched between two words and the X declares how many words they must be mentioned between. I.e. if it’s (4) then the two keywords must be mentioned within 4 words of each other. | Advanced   |
| `_`         | Acts as wildcard for autocomplete                                                                                                                                                             | Advanced   |

### Search with url

| Operator    | Description                                                                                                                                | Category |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `inurl:`    | Only returns results where the queried keyword(s) is present in the URL                                                                    | Advanced |
| `allinurl:` | As above but only containing all of the specified words in the URL                                                                         | Advanced |
| `blogurl:`  | Find blog URLs under a specific domain. This was used in Google blog search, but I’ve found it does return some results in regular search. | Advanced |
| `site:`     | Limit results to those from one site                                                                                                       | Advanced |
| `related:`  | Find similar domains to the queried domain                                                                                                 | Advanced |

### Search with dates

| Operator     | Description                                                                                          | Category   |
| ------------ | ---------------------------------------------------------------------------------------------------- | ---------- |
| `daterange:` | Return results in a specified range (requires julian dates)                                          | Advanced   |
| `after:`     | Allows you to search drive or mail for files modified or mail sent/received anytime after a set date | Drive,Mail |
| `before:`    | Allows you to search drive or mail for files modified or mail sent/received before a certain date    | Drive,Mail |
| `older:`     | Search for messages older than a certain date                                                        | Mail       |
| `newer:`     | Search for messages newer than a certain date                                                        | Mail       |

### Search files

| Operator        | Description                                                                                          | Category   |
| --------------- | ---------------------------------------------------------------------------------------------------- | ---------- |
| `filename:`     | Search for messages with a particular type of file attached, or the exact name of a file             | Mail       |
| `type:`         | Allows you to search drive by file type                                                              | Drive      |
| `owner:`        | Allows you to search drive by owner of file or folder                                                | Drive      |
| `to:`           | Allows you to search drive for files shared with a specific person                                   | Drive      |
| `title:`        | Searches drive for files with the keyword in their title alone                                       | Drive      |
| `source:domain` | Allows you to search for files or folders shared with everyone in your business                      | Drive      |
| `filetype:`     | Returns only files of a particular type associated with the keyword searched                         | Advanced   |
| `ext:`          | As above, based on extension                                                                         | Advanced   |
| `after:`        | Allows you to search drive or mail for files modified or mail sent/received anytime after a set date | Drive,Mail |
| `before:`       | Allows you to search drive or mail for files modified or mail sent/received before a certain date    | Drive,Mail |
| `is:trashed`    | Searches for the item in the Drive bin                                                               | Drive      |

### Search with page content

| Operator       | Description                                                                                                         | Category |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | -------- |
| `link:`        | Find pages that link to the target domain                                                                           | Advanced |
| `inanchor:`    | Find pages linked to with the specified anchor text/ phrase. Data is heavily sampled.                               | Advanced |
| `allinanchor:` | Find pages with all individual terms after "inanchor:" in the inbound anchor text.                                  | Advanced |
| `intitle:`     | Returns pages based on the searched query appearing in their title                                                  | Advanced |
| `allintitle:`  | Similar to intitle: but only returns titles where all the words in the title match                                  | Advanced |
| `inposttile:`  | Finds pages with keywords in their post titles (i.e. for researching blogs)                                         | &nbsp;   |
| `intext:`      | Finds pages where the keyword(s) are mentioned within the page content.                                             | Advanced |
| `allintext:`   | Similar to “intext,” but only results containing all of the specified words somewhere on the page will be returned. | Advanced |

### Keywords

| Operator          | Description                                                                                      | Category |
| ----------------- | ------------------------------------------------------------------------------------------------ | -------- |
| `Business`        | type E.g. cafe, restaurant, bar etc will return a selection of appropriate businesses in the are | Maps     |
| `Petrol/Charging` | Station EV near me or perol station near me returns                                              | Maps     |
| `Search`          | for a message with a google sheet attached                                                       | Mail     |
| `Search`          | for a message with a google presentation attached                                                | Mail     |

### Search on emails

| Operator          | Description                                                                                           | Category   |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| `+`               | Prefix - Force exact match on single phrase                                                           | Basic,Mail |
| `()`              | Allows grouping of operators and helps dictate order                                                  | Basic,Mail |
| `-`               | Excludes a word from results                                                                          | Basic,Mail |
| `""`              | Allows searching for a specific phrase - exact match search. Individual word prevents synonyms        | Basic,Mail |
| `OR`/`AND`        | Boolean search function for OR searches as Google defaults to AND between words - must be all caps    | Basic,Mail |
| `after:`          | Allows you to search drive or mail for files modified or mail sent/received anytime after a set date  | Drive,Mail |
| `before:`         | Allows you to search drive or mail for files modified or mail sent/received before a certain date     | Drive,Mail |
| `is:starred`      | Searches only items that have been starred in drive                                                   | Drive,Mail |
| `from:`           | Specify the sender in google mail                                                                     | Mail       |
| `to:`             | Specify the recipient in google mail                                                                  | Mail       |
| `cc:`             | Search by a recipient that was copied into an email                                                   | Mail       |
| `bcc:`            | Search by a recipient that was blind copied into an email                                             | Mail       |
| `older:`          | Search for messages older than a certain date                                                         | Mail       |
| `newer:`          | Search for messages newer than a certain date                                                         | Mail       |
| `Search`          | for a message with a google sheet attached                                                            | Mail       |
| `Search`          | for a message with a google presentation attached                                                     | Mail       |
| `AROUND`          | Similar to the normal google search function, allows you to search for keywords near each other.      | Mail       |
| `subject:`        | Search by keywords featured in the subject line                                                       | Mail       |
| `{}`              | Use for OR in mail instead of the OR function                                                         | Mail       |
| `label:`          | Search for messages that have a certain label                                                         | Mail       |
| `has:attachment`  | Search for messages that have an item attached                                                        | Mail       |
| `has:drive`       | Search for messages with a google drive attached                                                      | Mail       |
| `has:document`    | Search for messages with a google doc attached                                                        | Mail       |
| `has:youtube`     | Search for a message containing a youtube video                                                       | Mail       |
| `list:`           | Search for all messages from a particular mailing list                                                | Mail       |
| `in:anywhere`     | Includes all folders in your search, including spam and bin                                           | Mail       |
| `is:important`    | Search for messages that have been marked as important                                                | Mail       |
| `label:important` | Same as is:important                                                                                  | Mail       |
| `is:snoozed`      | Searches for messages that have been snoozed                                                          | Mail       |
| `is:unread`       | Searches for unread messages                                                                          | Mail       |
| `is:read`         | searches for read messages only                                                                       | Mail       |
| `has:yellow-star` | Searches for messages with coloured star icon                                                         | Mail       |
| `has:blue-info`   | Searches for messages with colourd icon                                                               | Mail       |
| `is:chat`         | Searches for messagse from chat                                                                       | Mail       |
| `deliveredto:`    | Search by email address for delivered messages                                                        | Mail       |
| `category:`       | Searches by messages based on category. Follow the colon with the categoy name, i.e. category:primary | Mail       |
| `size:`           | Messages larger than a certain size in bytes                                                          | Mail       |
| `larger:`         | Messages larger than a certain size in bytes                                                          | Mail       |
| `smaller:`        | Messages smaller than a certain size in bytes                                                         | Mail       |
| `has:userlabels`  | Search for messages that have custom user labels                                                      | Mail       |
| ` `               | Search for messages that have no custom user labels                                                   | Mail       |

### Some other useful search operators

| Operator    | Description                                                                                                                                                            | Category |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `define:`   | Pulls a card response from Google displaying the dictionary definition of the word or phrase                                                                           | Advanced |
| `cache:`    | Returns the most up to date cache of an indexed web page                                                                                                               | Advanced |
| `weather:`  | Brings up the featured snipped for weather for that location                                                                                                           | Advanced |
| `stocks:`   | Returns stock information for the specified ticker                                                                                                                     | Advanced |
| `map:`      | Force google map results for a particular query                                                                                                                        | Advanced |
| `movie:`    | Find information for the specified movie (particularly useful when that movie has an ambiguous name). If the movie is still in theatres it’ll also return screen times | Advanced |
| `source:`   | Use in google news, returns results from the specified source                                                                                                          | Advanced |
| `loc:`      | Returns results for a specific location                                                                                                                                | Advanced |
| `location:` | As above but with Google news                                                                                                                                          | Advanced |
| `info:`     | Returns information related to a domain (pages with domain text, similar on-site pages, cache etc)                                                                     | Advanced |
| `near`      | Part of the google maps lazy searches e.g. book shops near work                                                                                                        | Maps     |

## Also see

- [Google Search Operators Cheat Sheet](https://static.semrush.com/blog/uploads/files/39/12/39121580a18160d3587274faed6323e2.pdf)
  _(static.semrush.com)_
