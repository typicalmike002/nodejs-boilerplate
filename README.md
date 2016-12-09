# nodejs-boilerplate

## About
A boilerplate for a developer environment pre-built for a nodejs project using expressjs for the backend and angularjs for the front end.  This boilerplate also comes with a built in logger for requests as well as a Gruntfile with my favorite addons for developing nodejs projects. :godmode:

## Dependencies

**AngularJS**

Using the Browserify addon in grunt, I've created a folder structure for organizing angular projects into smaller components within the *public/js/modules* folder.  While running grunt watch, all of these files are included in *public/js/main.js* and will continue to be compressed into *public/js/bundle.min.js*.

I have set AngularJS html5Mode option to true and have made the server configurations necessary to remove the hashtag from urls.

Strict mode has been added to each module to ensure proper javascript is being used.

**bower**

Using a .bowerrc file, I have set it so running *bower install* will install packages directly into the *public/js/bower_components* folder.  This is intended to keep frontend libraries and frameworks seperate from backend node_modules and Gruntfile addons.

**SASS and Compass**

This boilerplate comes with the SASS precompiler and I have decided to go with SCSS because I enjoy curly brackets.

**Grunt**

Be sure to keep the grunt watch task running during development.  I've set jshint to all javascript files including those found in the backend.

Thank you and have a nice day :)
