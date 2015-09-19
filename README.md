# nodejs-boilerplate

My nodejs boilerplate for setting up a new project quickly using node.js and the express.js framework.  Anyone is free to use it or request any type of changes if they can fit into a general node.js boilerplate.  This boilerplate is my personal development environment for nodejs projects but you may use it however you like and configure it however you wish :)

## Basic Setup

After either making a git pull request or downloading it directly, you will need to install the boilerplate's dependencies.  Open your terminal or command prompt to the boilerplate's root directory and run the following command.

```shell
npm install
```

This will install all of the boilerplate's Dependencies and devDependencies into a node_modules file.  If there are any dependencies you do not with to include, simply remove them by opening the package.json file and deleting them before running npm install.

### Starting a test Server

To test a connection from a web browser, run this command in the boilerplate's root directory.

```shell
npm start
```

Then in your favorite browser, navigate to [http://localhost:3000/](http://localhost:3000/).  If you see a black screen with nothing on it, you have sucessfully set up the boilerplate.  This is the beginning of your new project.

## Dependencies

This boilerplate comes with the following dependencies.  I highly recommend refering to their documentation to learn more about what they do but I will do my best to explain their use in this boilerplate.

### [node.js](https://nodejs.org/en/)

The most important peice of the puzzle.  This boilerplate's backend is powered by nodeJS.  Before continuing, you will need to have nodeJS installed by visiting their [website](https://nodejs.org/en/).  Refer to their [documents](https://nodejs.org/en/docs/) for more information about nodeJS.

### [express.js](http://expressjs.com/)

A framework that uses the MVC architectural pattern that works along side nodejs.  MVC stands for Model-View-Controller.  

**M**odel handles the structure of the data moving inside and out of the database which is not currently configured in this boilerplate.  

**V**iews are stored in the view folder and run the actual HTML of the page that the user will actually see.

**C**ontrollers are stored in the routes folder and control both the models and the views.  

The public folder contains all of the javascripts, images, and css files that go public in the browser.  Express also creates the actual server inside a www file which is located in the bin folder.  Refer to [express.js documentation](http://expressjs.com/) to learn more about expressJS.

### [ejs](https://www.npmjs.com/package/ejs)

A filetype that stands for 'embedded javascript templates' were standard HTML can be combined with json data.  Please refer to the link above for an example of how to use ejs in your project.

### [bower](http://bower.io/)

Bower installs packages just like npm.  In this boilerplate, I have set it up so bower is only used for installing and organizing javascript libraries and frameworks used in the js folder.  For example:

```shell
bower install jquery
```

This will install the jquery library into "public/js/bower_components" folder.

### [Angularjs](https://angularjs.org/)

Javascript framework that extends HTML's functionality.  This boilerplate features a basic set up of an angularjs app.

## Development Dependencies

These are dependencies that are useful in the development process but can be left out when ready to launch your application.  

### [Grunt](http://gruntjs.com/)

A javascript task runner that handles all of the development dependency's environment.  It has multiple plugins and cool features to help developers out.  Everything is controlled inside the Gruntfile.js file in the root directory.  

### [Grunt Watch](https://github.com/gruntjs/grunt-contrib-watch)

To begin using grunt, run this command inside the root folder of the boilerplate.

```shell
grunt watch
```

Grunt will now watch for changes and run the tasks listed in the grunt watch section of the Gruntfile.  

### [load-grunt-tasks](https://www.npmjs.com/package/load-grunt-tasks)

Loads all the grunt tasks specified inside the package.json file.  By default, we would normally have to list off each task in the Gruntfile but this task removes that bit of uglyness from our code.

### [jshint](https://github.com/jshint/jshint)

Validates our javascript as you save javascript files.  It helps avoid typos and common mistakes that happen when developing huge applications.

### [uglify](https://github.com/gruntjs/grunt-contrib-uglify)

Renames variables to single characters, removes all whitespaces, and minifies our code to a compact size.  It will be the ugliest code you've ever seen.

### [browserify](https://github.com/jmreidy/grunt-browserify)

Browserify makes modualizing your javascript code easier. In a file like main.js for example: 

```shell
require('./modules/add.js');
```

will load the add.js file into main.js and bundle them into bundle.js which means you can still load a single javascript file in a browser while organizing your code into multible files.  Refer to the documentation for more information about browserify. 

### [compass](http://compass-style.org/)

Compass will compile sass and scss files into css.  These are extensions made to css that allow for things like variables, functions, and for loops.  Refer to the [sass documentation](http://sass-lang.com/) to learn more about this powerful styling technique.  

### [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)

Like uglify but for css.  Shrinks your css file down to as small as possible.

### [combine-mq](https://github.com/frontendfriends/grunt-combine-mq)

Combines all similar media queries in your css file.  This will dramatically speed up your web page because media queries tend to take up alot of load on the browser.