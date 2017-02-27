---
title: Embedded EventStore
tags:
  - Embedded
  - Event Sourcing
category:
  - Software
date: 2015-04-29
---

Recently I have to create in memory solution for [EventStore](https://geteventstore.com/). 

The solution works only with ES version 3\. You have to get the additional NuGet called _EventStore.Client.Embedded_.

The main problem was to find appropriate documentation on how to make it running, below is very simple solution for the problem.

<script src="https://gist.github.com/SzymonSasin/f316558061c88070983b.js"></script>