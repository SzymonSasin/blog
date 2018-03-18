---
title: Vuejs running in Dotnet Core context
date: 2018-01-27
tags:
    - dotnet core
    - vuejs
    - typescript
    - webpack
    - SASS
    - post per week 
categories: 
    - programming
---
## Why
Setup is simple. Instead of running ASP.NET application and VueJS I want to have only one application to start. It appears that Microsoft have thought the same as they have created **Microsoft.AspNetCore.SpaServices.Webpack** (later called aspnet middleware) assembly to do just that, and possibly more but I do not know.

## Problems
My challenge was to create the combination of *ASP.NET* Core running *VueJS* with *TypeScript* and *Webpack* and *Hot Module Replacement (HMR)* and *SASS* support.
Additional TypeScript lint during build is a nice thing.

Another possible problem is that aspnet middleware does not supprt wit webpack 4. So any newest VueJS template will not work. 

Last problem I have was to force Vue to load sass(scss) files. 

## Solution

### files structure

### dotnet configuration

### msbuild link

### packages

### webpack configiuration