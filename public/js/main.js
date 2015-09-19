require('./bower_components/angular/angular.min.js');

var helloworld = require('./modules/helloworld');

var app = angular.module('app', []);
app.controller('GreetingController', ['$scope', helloworld]);