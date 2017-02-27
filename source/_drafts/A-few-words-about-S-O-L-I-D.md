---
title: 'A few words about: S.O.L.I.D.?'
date: 2015-11-04 13:24:51
tags:
  - code craftsmanship
  - software design
categories:
  - software development
---

### SOLID

It is a set of principles which are meant to help you create a better, maybe even cleaner code. SOLID is based (or inspired by) OOP ideas, but in my mind it making it little bit abstract.

### Principles

*   **Single responsibility principle**

> a class should have only a single responsibility (i.e. only one potential change in the software's specification should be able to affect the specification of the class

    This is simple a class/objects/abstraction idea implements properly.

*   **Open/Close principle**

> software entities … should be open for extension, but closed for modification

    So you should be able to change behaviour of the whole application but without changing behaviour of the any class, which is similar idea to inheritance.
*   **Liskov substitution principle**

> Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program

    Does it sounds like polymorphism for you as well?
*   **Interface segregation principle**

> many client-specific interfaces are better than one general-purpose interface.

The idea is similar to a SRP. Divide the interface to the smallest connected functionality. This move should improve the use of the interfaces and classes which implements them.

*   **Dependency Injection  principle**

> one should “Depend upon Abstractions. Do not depend upon concretions.

    Simply speaking the tool to make all application configurable and open for change. With a use of DI container the programmer can control the flow and introduce change to application with minimal hassle.

### So what next.

The solid is a good start into a better programming. For me it is the first step into a Clean Code and following t should improve the overall code. 

However it is not a golden bullet and solution for everything, and I will try to explain why little bit later.