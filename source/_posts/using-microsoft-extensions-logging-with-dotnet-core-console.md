---
title: Using Microsoft.Extensions.Logging with dotnet core console project
date: 2018-01-13
tags:
  - dotne core
  - console
  - Microsoft.Extensions
  - post per week 
  - post no 2 of 52
categories:
  - programming
---

## Problem
Next step with my dotnet core console application was to add some logging. I would like to avoid using *Console.Write* to output state of application as well as well as allow to have some debug/trace level log information.

The way I did it is not the only way but it simples for me, mainly because it reuses already existing extensions which could be used in ASP.NET as well.

## Solution
To start, two items are required. First, we need **ServiceCollection** the DI implementation and the to create empty **LoggerFactory**.
<script src="https://gist.github.com/Assassyn/cf519d5e3b530fdd556360c09b59d632.js"></script>

Second, logging has to be enabled, simply by using extension method for ServiceCollection
<script src="https://gist.github.com/Assassyn/21f6c3290307f0ded80d4a85832e70b2.js"></script>

The last step is to use configuration. Use any existing configuration for logger factory, for example:
<script src="https://gist.github.com/Assassyn/c4644d73721696689128e8be20f0a39f.js"></script>

Now the simples way to create object with logger factory is to use dependency injection.