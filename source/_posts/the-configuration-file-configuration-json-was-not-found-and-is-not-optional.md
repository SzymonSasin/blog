---
title: The configuration file 'Configuration.json' was not found and is not optional.
date: 2016-05-23
tags: 
  - bug
  - ASP.NET Core
categories:
  - programming
---

## problem

When I switched to RC2 and tried to publish the website I got the error about missing configuration file.

![sample error](images/2016/05/configuration-error-1.PNG)

# reason

For some reason configuration files was not copied. Initialiity I thought that I did not set the fiel property, but such are missing in the xproj no.w 

## solution

To solve the problem I have to update the _project.json_. There is a section responsible for coping all non compilable files, it is called _publishOptions_

    "publishOptions": {
    "include": [
      "wwwroot",
      "Views",
      "Configuration.json",
      "web.config"
    ]

},