---
title: Create angular UMD package with rollup.js
date: 2017-02-27 09:42:07
tags: 
    - angular
    - rollup.js
    - universal media definition
categories: 
    - programming
---

# Components for Angular 2 
Currently I am trying to create a set of standard componets to for my current company. The task is simple, it is to create an separate build with an UMD package. 
This is an internal set of components, which follows the desing language, and hopefully are going to be used by different divisions.

# Route to solution
I have started with tying to use WebPack. However the UMD package I have create does not manage to be consumed by the Angular app. I still have no idea what was the reason. 

# Package setup
The structure of the package is quite simple. The entry point is the main module. This is a valid *NgModule* object with some basic exports. All the classes are placed in the components folder. Inside there is a sub folder for every component. 

A "control" is a component with connected module class, where module is importing component. 

Almost every folder has na index file, to ease the export/import scenarios. 

# Solution 
Finally I have managed to find a correct configuration for a ![Rollup.js](http://rollupjs.org).

This setup does not require to use ngc, so it makes a whole process a lot of easier.
I also managed to include the html and sass files into a bundle. So for development purpose files could be stored separately but there is no hassle when bundle is being consumed.

## typescript configuration file
<script src="https://gist.github.com/SzymonSasin/c812cae6563c7e93fbd2e0887b5c7a94.js"></script>

## rollup js configuration file
