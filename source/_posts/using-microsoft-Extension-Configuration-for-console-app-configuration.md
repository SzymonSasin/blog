---
title: Using Microsoft.Extension.Configuration for console app configuration
date: 2018-01-07 13:53:07
tags:
  - ASP.NET Core
  - console
  - Microsoft.Extensions
  - post per week 
  - post no 1 of 52
categories:
  - programming
---
## requirements 
Lately I have created the small console application. Because, I have used dotnet core and I need to add some persistent configuration. Because, web.config is no longer existing by default in new framework, I have used the new *Microsoft.Extension.Configuraiton* classes. This set of assemblies allow to use and mix difference source for configuration. Now you can store some configuration in xml, ini or json and then merge it with environmental variables.

## solution
My solution was to load [Microsoft.Extension.Configuration](https://www.nuget.org/packages/Microsoft.Extensions.Configuration/) with [Microsoft.Extension.Configuration.CommandLine](https://www.nuget.org/packages/Microsoft.Extensions.Configuration.Json/) and Microsoft.Extension.Configuration [Microsoft.Extensions.Configuration.Json]( https://www.nuget.org/packages/Microsoft.Extensions.Configuration.Json/) NuGets to allow me to load configuration and pass it from command line.

Because I am using MS Extension library I can be config source agnostic, that is I can plan to use json configuration file but test it by passing configuration from command line.

## Output of build
To start with using, you need to create ConfigurationBuilder
<script src="https://gist.github.com/Assassyn/0b7e552cc0b4dbc878bb23da57a9ad91.js"></script>
After that you can configure it with any method required:
<script src="https://gist.github.com/Assassyn/b03ba6e548c50973fa89214c6f4422cd.js"></script>
After that you need to finalize it by building;
<script src="https://gist.github.com/Assassyn/f843ca426965192799a2eff4cf957811.js"></script>

## benefits
The results is **IConfigurationRoot** object. This object allows you to access contant in two ways 
* first, a flat indexer based on a key-value approach
* second, object oriented way to use IConfigurationSections to crawl the object hierarchy inside configuration. 

For example configuration file: <script src="https://gist.github.com/Assassyn/1fcb379f3b683c96bd1a95484c409328.js"></script>
The value of alpha can be access by using *test:alpha* key or getting alpha key from test section.