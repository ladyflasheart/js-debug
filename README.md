# Javascript Debug Scripts for Academy Talk on Chrome Dev Tools Debugging

## Overview
This repository contains script materials used to accompany a talk and demonstration for the Mayden Academy. *Please note the scripts are not intended to show best practice for application structure or for javascript development.* To keep things simple the application does NOT use build scripts and node modules or transpiling of ES6 as these are covered at a later stage of the Academy course.


## Setup
One of the pages (Ajax Slideshow) involves an ajax call to a PHP page. For the slideshow page to work the code needs to be set up on a webserver with PHP installed - e.g. set on a vagrant box with an appropriate nginx/apache virtual host configuration. You will then be able to run the code in the browser by navigating to the configured document root for the application. The other pages are just javascript/CSS/html so would work if just opened directly in a browser via Open File...

## Pages

### Home
Simple introduction text page using Bootstrap styling

### Console
Page showcasing Chrome Dev tools Console API methods. The page visually displays the relevant bits of code at the same time as running the javascript code. It uses Bootstrap to structure the layout and toggle content visibility. The javascript console api code being demonstrated (and visually displayed on the page) is linked into the Bootstrap visibility toggle code (collapse class events).
Javascript file: `console-methods.js`

### Counter
Page with a counter functionality where you can choose a number to count to, press a Go button, and the numbers then count up to that number. The incrementing numbers are displayed in a yellow circle until the chosen number is reached when the circle turns green. The page uses Bootstrap styling and functionality in addition to the custom javascript file.
Javascript file: `counter.js`

### Ajax Slideshow
Page with a slideshow. You choose one of three galleries in a drop down and then press the Go button. This fetches the specified gallery and starts a slideshow underneath. To pause the slideshow hover your mouse over a picture. The page uses Bootstrap, JQuery in the custom javascript and the JSSOR slideshow code.
Javascript file: `slideshow.js`

