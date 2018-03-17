---
title: Deploy Dotnet Core to heroku
date: 2018-01-20
tags:
    - dotnet core
    - heroku
    - vso
    - post per week 
    - cli
categories: 
    - devops
    - Continuous Integration, Continuous Deployment
---

# Why?

[Heroku](https://heroku.com) is a well established platform for hosting various programming languages. Unfortunately, officially,  it does not support dotnet. However, it does supports docker, and dotnet core can run in docker very well.

An other challenge in my solution was to fully automate deployment with usage of [VSO](http://visualstudio.com).

# Problems

The first problem is that heroku cli requires user to insert login and password manually. There is no option to pass *-u* and/or *-p* parameters.

Another struggle was to find appropriate commands for docker to successfully push newly created docker image.

# How

## Login and build

Following [Heroku documentation](https://devcenter.heroku.com/articles/container-registry-and-runtime#logging-in-to-the-registry) I was ably to use the  **docker login** command to authenticate against heroku container registry.

```cli
docker login --username=_ --password=<heroku api key> registry.heroku.com
```

After that just build the image. I am using already published site so my docker files is simpler. You have to remember to set the proper tag for container:

```cli
docker build -t registry.heroku.com/<app-name>/<protocol=web|worker> .
```

Last piece is to [push image to Heroku container registry](https://devcenter.heroku.com/articles/container-registry-and-runtime#pushing-an-image-s):

```cli
docker push registry.heroku.com/<app-name>/<protocol=web|worker>
```

## Dockerfile

As I have mentioned my dockerfile is simple, But I had to use CMD instated of ENTRYPOINT and ASPNETCORE_URLS.

```docker
FROM microsoft/aspnetcore
WORKDIR /app
COPY . .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet Lizards.Transferoo.Web.dll
```

That way I have running dotnet core website in heroku.