---
title: 'Build dotnet core 2 on AppVeyor'
date: 2017-07-12
tags:
  - dotnet core
  - appveyor
categories:
  - devops
---

# Problem

As for not the AppVeyor does not support running of .NET Core 2 preview. 

# Solution

To work around this problem I have created a simple download and build script. 

<script src="https://gist.github.com/Assassyn/5642a9219508bffa3cb33180f469abce.js"></script>

It has to be copied to a script powershell (ps) section of Build config inside *AppVeyor* Settings.

Additionally, I have created a simple script to find and run all tests as well.

<script src="https://gist.github.com/Assassyn/a60d358af8cba39922323562ec044f2d.js"></script>