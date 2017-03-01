---
title: 'A few words about: CQRS'
date: 2017-02-20
tags:
  - patterns
  - data access
  - a few words about
categories:
  - software development
---

CQRS (or CQS), because the both names are used to identify the same pattern, is a abbreviation of Command and Query (Responsibility) Segregation.

# Pattern

Simply saying the CQRS means that you should split yours 

read and writes into two models. 

### Query

The reading model, is responsible for obtaining data. It should not have any side effects to a data storage. 

Queries can use a simplified model without any validation.

### Command

On the other hand commands are used to update data. The command should not return any results. 

Commands tends to use slower frameworks. As well as running all data verification and validation before save.

# Benefits

*   Different models.can ( and should) use to different model for read/write. For example you can read your data using simple queries with Daper. And then write all commands using EntityFramework with all power ( and lack of speed) of it.
*   Cleaner code.
Because you have to think different about commands and queries suddenly the problem "Should I return id for just created entity" does not exists any more.

# Common misconceptions

CQRS is not EventSourcing (ES). They come together very nicely but both could be used separately without any problems. 