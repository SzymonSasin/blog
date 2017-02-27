---
title: Publish dotnet test VS Team Services build results
date: 2016-12-13
tags:
  - Visual Studio Team Services
  - test
categories:
  - Continuous Integration, Continuous Deployment
---

For my pet project I am using the [Visual Studio Team Services](https://www.visualstudio.com/team-services/) as my online CICD server.

I have been trying to show the results of my tests run for dotnet core project. For some reasons I was not able to use the standard VSTS task used to run and publish test results. 

Simples solution was to use a default _.NET Core step_ with Command test. You have to remember to add the argument for the output _-xml path_ 

![run dotnet core test](/images/publish-dotnet-test-vs-team-services-build-results/test.PNG)

Then I have used the _Publish test Results_, which do the all the work. 

![publish test result](/images/publish-dotnet-test-vs-team-services-build-results/publish.PNG)

To make my life easier I have added a new variable to store the test result path. 

![variable to remove error possiblity](/images/publish-dotnet-test-vs-team-services-build-results/variable.PNG)

Now I can see the test results in the summary of every build. 

![build summary](/images/publish-dotnet-test-vs-team-services-build-results/results.PNG).
