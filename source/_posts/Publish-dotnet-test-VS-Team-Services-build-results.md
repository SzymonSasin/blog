---
title: Publish dotnet test VS Team Services build results
tags:
  - Visual Studio Team Services
  - test
categories:
  - Continous Integration, Continuous Deployment
date: 2016-12-13 10:07:17
---

For my pet project I am using the [Visual Studio Team Services](https://www.visualstudio.com/team-services/) as my online CICD server.

I have been trying to show the results of my tests run for dotnet core project. For some reasons I was not able to use the standard VSTS task used to run and publish test results. 

Simples solution was to use a default _.NET Core step_ with Command test. You have to remember to add the argument for the output _-xml path_ 

![run dotnet core test](http://blog.sasin.eu/content/images/2016/12/test.PNG)

Then I have used the _Publish test Results_, which do the all the work. 

![publish test result](http://blog.sasin.eu/content/images/2016/12/publish.PNG)

To make my life easier I have added a new variable to store the test result path. 

![variable to remove error possiblity](http://blog.sasin.eu/content/images/2016/12/variable.PNG)

Now I can see the test results in the summary of every build. 

![build summary](http://blog.sasin.eu/content/images/2016/12/results.PNG).