---
title: Deploy Dotnet Core to heroku (part II)
date: 2018-01-20
tags:
    - dotnet core
    - heroku
    - vso
    - post per week 
    - cli
categories: 
    - Continuous Integration, Continuous Deployment
---
## Why?

As it seems publishing to [Heroku](https://heroku.com from [Visual studio Online](http://visualstudio.com) is not so simple in the end.
In [a previos post](http://blog.sasin.eu/2018/01/20/deploy-dotnet-core-to-heroku/) I have describe how to configure all moving parts which seems to be enought to have it running.
However my problem was that image created on local machine was working in Heroku but images created by build server was returning "500 internal server error".

## What 

It took me around the week to find out what was the reason for this. And I did found it by accident. In attempt to find out what is a reason I have downloaded container to local machine and I have loaded it into my docker, which runs linux containers. As a result I got the nice message *"could not run windowscontainer on linux", or sth like that.

## How

Solution was quite simple, I have switched my builds to run on HOsted Linux preview agent.
