---
date: 2019-06-21
tag: 
  - devops
  - azure devops
  - CICD
  - git
  - vuepress
author: Szymon
location: United Kingodm  
---

# A simple solution to automaticaly push static generated blog to Github pages

I do like to use VueJS so when the VuePress reached version 1.0 with a functional blog theme I had to made a switch. The only problem is that the GitHUb Pages supports only [Jekyll](https://jekyllrb.com/). 

## Solution 

As I am alsm using Azure DevOps to handle all myt  build the solution is obvious. Hoost my Blog in GiHub Pages and buidl and depoloy it on Azure.

## Step 1: Deploy

This is preaty simple([check it here](https://github.com/Assassyn/blog/blob/master/azure-pipelines.yml)), just add the yml file with a four task: 
  * install yarn
  * install dependencies
  * build vuepress
  * gather results as an artifact

## Step 2: Publish

Next step is to get the published artifact and push it to GitHub gh-pages branch of repo.

I did divide it into 5 tasks, this is required to make a few step simpler as they could be executed from different directory so the cd command does not have to be used.

### Configure git
This is required to avoid any possible error during push later

```
 git config --global user.email "assassyn@dev.azure.com"
 git config --global user.name "Assasssyn"
```

### Download repository
Added a varaible to store the git token, just to make it lottle bit more secure.

```
$path = "https://$(git_token)@github.com/Assassyn/blog.git"
git clone $path
```

### Change repo to gh-pages
This step has an additional requirementes to set up the working directyory: 
![working directory setup](/images/2019-06-21/step3.png)

```
git checkout gh-pages
rm -R *
```

### Deploy new version
Copy the files for a artifact downlaod directory, usually the name selected when creating the  trigger

```
mv _Assassyn.blog\blog_site\*  blog\
```

### Push
Push code to selected branch and wait for github pages to update

```
git add * 
git commit -m "Github Pages deployment $(Build.BuildNumber)"
git push
```