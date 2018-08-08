---
title: Parsing real number in different locale
date: 2017-02-13
tags: 
    - c-sharp 
    - problem
categories: 
    - programming
---

# problem 

Recently, I have created the library to convert the address into a latitude and longitude. The code is relatively simple, there is an address object which is concatenated into one string and submitted to Google Maps. Maps are returning the xml which I am trying to parse. 

The test for this code works fine, but when I have tried to use it from the web app it has failed. I have recieved a wired error * provided number is not in correct format *.

# reason

It took me over a weekend to find the real reason for my application error. THe problem was the locale of application and the difference on how to write a Real ( float, decimal, double) number. 

As it happens the library and unit tests where created in English where the separator for the Real number is a dot. My application default language is Polish where the separator is comma.

# solution

The solution was simple, in my library I have to change my parsing code from:

` double.Parse(latitudeAsString); `

to 

` double.Parse(latitudeAsString, CultureInfo.InvariantCulture); `

and now the geocoding library just works everywhere.