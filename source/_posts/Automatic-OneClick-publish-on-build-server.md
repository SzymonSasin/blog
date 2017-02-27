---
title: Automatic OneClick publish on build server
tags:
  - OneClick
  - Powershell
categories:
  - Continous Integration, Continuous Deployment
date: 2015-10-05
---

I like the idea of the Continuous Deployment. I am also using the Visual Studio Online build server. 

To see what I can do with it I want to deploy small OneClick powered application using automatic build server. As it is simple to build solution or run automated test (there is a step for it), the OneClick deployment process is little bit more complicated.

### Scripts

I needed three scripts:

1.  **Update  assemblies**

I want to keep the same assembly version on the all generated dll's. So I have used the Powershell script to do it for me.  

<script src="https://gist.github.com/SzymonSasin/f37790bf9aeee0b882ff.js"></script>

1.  **Update publish data**

Next step is to update publish data so it also can be controlled by Build sever  

<script src="https://gist.github.com/SzymonSasin/760ee56ef5a08bda2695.js"></script>

1.  **Publish files**

The last step is to ftp the files to server. Again it can be done by Powershell.  

<script src="https://gist.github.com/SzymonSasin/911f007714d7fb06766e.js"></script>

I have added the script output in all of the scripts just to be able to "debug" on the server.

### Build Configuration

The last step is is Build configuration. It requires two steps:

1.  Variables

I have defined the variables as: 

![Varaibles](http://blog.sasin.eu/content/images/2015/10/varaibles.PNG)

1.  Steps

    *   Update assemblies version

    I am passing version number as an attribute `"$(version.major).$(version.minor).$(version.patch).$(Build.BuildNumber)"`

    *   Update publish version
Again version and revision passed as an attribute `"$(version.major).$(version.minor).$(version.patch)" "$(Build.BuildNumber)"`

        *   Last thing is the set properties for publish script as `"$(Agent.WorkFolder)\Publish" "$(deploy.server)" "$(deploy.user)" "$(deploy.password)"`

        *   Change the revision (General tab)

I want to use a revision as a build number so I need to change it from the default value to `$(rev:r)`

Now it should build( remember to add a trigger) and publish every time I commit to GIT.